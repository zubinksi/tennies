import { useState, useEffect, useCallback, useRef } from 'react';

// Defensively import react-native-health — on unsupported simulators or
// misconfigured builds the native module may not exist, which would crash
// the JS bridge before any React renders.
let AppleHealthKit: any = null;
try {
  AppleHealthKit = require('react-native-health');
} catch (_e) {
  // Native module unavailable; the hook will surface isAuthorized: false.
}

export interface ChartPoint {
  time: number; // Unix timestamp in seconds
  value: number; // cumulative steps at this moment
}

export interface HealthData {
  todaySteps: number;
  chartData: ChartPoint[];
  monthlyChartData: ChartPoint[];
  averageSteps: number;
  streak: number;
  allTimeDays: number;
  walkingSpeed: number | null;     // m/s from HealthKit
  walkingStepLength: number | null; // meters from HealthKit
  walkingAsymmetry: number | null;  // percentage (0–100)
  walkingDST: number | null;        // percentage (0–100)
  isAuthorized: boolean;
  isLoading: boolean;
}

// Use string literals directly — avoids stale Metro bundle cache issues
// where patch-package additions to node_modules/react-native-health/src/constants
// may not be reflected in the cached bundle.
const WALKING_PERM_TYPES = [
  'WalkingSpeed',
  'WalkingStepLength',
  'WalkingAsymmetryPercentage',
  'WalkingDoubleSupportPercentage',
];

const PERMISSIONS = AppleHealthKit
  ? {
      permissions: {
        read: ['StepCount', ...WALKING_PERM_TYPES],
        write: [],
      },
    }
  : { permissions: { read: [], write: [] } };

console.log('[HealthKit] PERMISSIONS.read:', PERMISSIONS.permissions.read);

const startOfDay = (date: Date = new Date()): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Returns step count samples in 5-minute buckets for today.
const getTodaySamples = (start: Date, end: Date): Promise<any[]> =>
  new Promise((resolve) => {
    AppleHealthKit.getDailyStepCountSamples(
      {
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        period: 5,
        ascending: true,
        includeManuallyAdded: true,
      },
      (_error: string, results: any[]) => {
        resolve(results ?? []);
      },
    );
  });

const getDailyStepSamples = (startDate: Date, endDate: Date): Promise<any[]> =>
  new Promise((resolve) => {
    AppleHealthKit.getDailyStepCountSamples(
      {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        period: 1440, // 24h buckets — one value per day
        includeManuallyAdded: true,
      },
      (_error: string, results: any[]) => {
        resolve(results ?? []);
      },
    );
  });

// Fetch the most recent sample of a walking metric via the generic getSamples API.
// react-native-health does not expose individual methods for walking metrics —
// all are accessed through getSamples({ type: '<TypeName>', ... }).
const getLatestWalkingMetric = (type: string): Promise<number | null> => {
  if (!AppleHealthKit || typeof AppleHealthKit.getSamples !== 'function') {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const opts = {
        type,
        startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        endDate: new Date().toISOString(),
        ascending: false,
        limit: 1,
      };
      AppleHealthKit.getSamples(opts, (_err: any, res: any[]) => {
        if (_err) {
          console.log(`[HealthKit] getSamples error for ${type}:`, JSON.stringify(_err));
          resolve(null);
          return;
        }
        if (!Array.isArray(res) || !res.length) {
          console.log(`[HealthKit] getSamples no data for ${type}, result:`, JSON.stringify(res));
          resolve(null);
          return;
        }
        console.log(`[HealthKit] getSamples ${type} result[0]:`, JSON.stringify(res[0]));
        const val = res[0].quantity ?? res[0].value;
        resolve(typeof val === 'number' ? val : null);
      });
    } catch {
      resolve(null);
    }
  });
};

// Fetch today's samples for a walking metric and return the average value.
const getTodayAverageWalkingMetric = (type: string, startOfToday: Date): Promise<number | null> => {
  if (!AppleHealthKit || typeof AppleHealthKit.getSamples !== 'function') {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const opts = {
        type,
        startDate: startOfToday.toISOString(),
        endDate: new Date().toISOString(),
        ascending: true,
      };
      AppleHealthKit.getSamples(opts, (_err: any, res: any[]) => {
        if (_err) {
          console.log(`[HealthKit] getTodayAverage error for ${type}:`, JSON.stringify(_err));
          resolve(null);
          return;
        }
        if (!Array.isArray(res) || !res.length) {
          console.log(`[HealthKit] getTodayAverage no data for ${type}`);
          resolve(null);
          return;
        }
        const values = res
          .map((s: any) => s.quantity ?? s.value)
          .filter((v: any): v is number => typeof v === 'number');
        if (!values.length) { resolve(null); return; }
        const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
        console.log(`[HealthKit] getTodayAverage ${type} avg:`, avg, 'from', values.length, 'samples');
        resolve(avg);
      });
    } catch {
      resolve(null);
    }
  });
};

export const useHealthKit = (stepGoal: number = 10000): HealthData => {
  // Store raw daily steps so goal changes can recompute without re-fetching
  const stepsByDateRef = useRef<Map<string, number>>(new Map());
  const stepGoalRef = useRef(stepGoal);
  stepGoalRef.current = stepGoal;
  const [data, setData] = useState<HealthData>({
    todaySteps: 0,
    chartData: [],
    monthlyChartData: [],
    averageSteps: 0,
    streak: 0,
    allTimeDays: 0,
    walkingSpeed: null,
    walkingStepLength: null,
    walkingAsymmetry: null,
    walkingDST: null,
    isAuthorized: false,
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    const now = new Date();
    const today = startOfDay(now);

    const rawSamples = await getTodaySamples(today, now);
    rawSamples.sort(
      (a: any, b: any) =>
        new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
    );

    const BUCKET_MS = 5 * 60 * 1000;
    const chartData: ChartPoint[] = [{ time: today.getTime() / 1000, value: 0 }];
    let cumulative = 0;
    let sampleIdx = 0;
    let bucketEnd = today.getTime() + BUCKET_MS;

    while (bucketEnd <= now.getTime() + BUCKET_MS) {
      const t = Math.min(bucketEnd, now.getTime());
      while (
        sampleIdx < rawSamples.length &&
        new Date(rawSamples[sampleIdx].endDate).getTime() <= t
      ) {
        cumulative += rawSamples[sampleIdx].value ?? 0;
        sampleIdx++;
      }
      chartData.push({ time: t / 1000, value: cumulative });
      if (t >= now.getTime()) break;
      bucketEnd += BUCKET_MS;
    }

    const todaySteps = cumulative;

    const epoch = new Date('2015-01-01T00:00:00.000Z');
    const dailySamples = await getDailyStepSamples(epoch, now);

    const stepsByDate = new Map<string, number>();
    for (const sample of dailySamples) {
      const key = startOfDay(new Date(sample.startDate)).toDateString();
      stepsByDate.set(key, (stepsByDate.get(key) ?? 0) + sample.value);
    }
    stepsByDate.set(today.toDateString(), todaySteps);
    stepsByDateRef.current = stepsByDate;

    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentKeys = [...stepsByDate.keys()].filter((k) => {
      const d = new Date(k);
      return k !== today.toDateString() && d >= thirtyDaysAgo;
    });
    const averageSteps =
      recentKeys.length > 0
        ? Math.round(
            recentKeys.reduce((sum, k) => sum + (stepsByDate.get(k) ?? 0), 0) /
              recentKeys.length,
          )
        : 0;

    const goal = stepGoalRef.current;
    let streak = 0;
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const cursor = new Date(yesterday);
    while (true) {
      const key = cursor.toDateString();
      const steps = stepsByDate.get(key) ?? 0;
      if (steps >= goal) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
    if (todaySteps >= goal) streak++;

    const allTimeDays = [...stepsByDate.values()].filter((v) => v >= goal).length;

    // Monthly average daily steps for the last 12 months
    const monthlyChartData: ChartPoint[] = [];
    for (let i = 11; i >= 0; i--) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const nextMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 1);
      let totalSteps = 0;
      let daysWithData = 0;
      const cursor = new Date(monthStart);
      while (cursor < nextMonth && cursor <= now) {
        const key = cursor.toDateString();
        if (stepsByDate.has(key)) {
          totalSteps += stepsByDate.get(key)!;
          daysWithData++;
        }
        cursor.setDate(cursor.getDate() + 1);
      }
      if (daysWithData > 0) {
        monthlyChartData.push({
          time: Math.floor(monthStart.getTime() / 1000),
          value: Math.round(totalSteps / daysWithData),
        });
      }
    }

    const [walkingSpeed, walkingStepLength, walkingAsymmetry, walkingDST] =
      await Promise.all([
        getTodayAverageWalkingMetric('WalkingSpeed', today),
        getTodayAverageWalkingMetric('WalkingStepLength', today),
        getLatestWalkingMetric('WalkingAsymmetryPercentage'),
        getTodayAverageWalkingMetric('WalkingDoubleSupportPercentage', today),
      ]);
    console.log('[HealthKit] walking metrics:', { walkingSpeed, walkingStepLength, walkingAsymmetry, walkingDST });

    setData({
      todaySteps,
      chartData,
      monthlyChartData,
      averageSteps,
      streak,
      allTimeDays,
      walkingSpeed,
      walkingStepLength,
      walkingAsymmetry,
      walkingDST,
      isAuthorized: true,
      isLoading: false,
    });
  }, []);

  // Recompute goal-dependent fields when stepGoal changes (no re-fetch needed)
  useEffect(() => {
    const stepsByDate = stepsByDateRef.current;
    if (stepsByDate.size === 0) return;
    const today = startOfDay();
    let streak = 0;
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const cursor = new Date(yesterday);
    while (true) {
      const key = cursor.toDateString();
      const steps = stepsByDate.get(key) ?? 0;
      if (steps >= stepGoal) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
    const todayStepsVal = stepsByDate.get(today.toDateString()) ?? 0;
    if (todayStepsVal >= stepGoal) streak++;
    const allTimeDays = [...stepsByDate.values()].filter((v) => v >= stepGoal).length;
    setData((prev) => ({ ...prev, streak, allTimeDays }));
  }, [stepGoal]);

  useEffect(() => {
    if (!AppleHealthKit || typeof AppleHealthKit.initHealthKit !== 'function') {
      console.log('[HealthKit] Native module not available or not loaded');
      setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
      return;
    }

    console.log('[HealthKit] Native module loaded, calling initHealthKit...');

    let refreshInterval: ReturnType<typeof setInterval>;
    let didRespond = false;

    const timeout = setTimeout(() => {
      if (!didRespond) {
        console.log('[HealthKit] Timeout — initHealthKit never called back.');
        setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
      }
    }, 5000);

    try {
      AppleHealthKit.initHealthKit(PERMISSIONS, (error: string) => {
        didRespond = true;
        clearTimeout(timeout);
        if (error) {
          console.log('[HealthKit] initHealthKit error:', error);
          setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
          return;
        }
        console.log('[HealthKit] Authorized successfully');
        fetchData();
        refreshInterval = setInterval(fetchData, 5 * 60 * 1000);
      });
    } catch (_e) {
      didRespond = true;
      clearTimeout(timeout);
      console.log('[HealthKit] initHealthKit threw an exception:', _e);
      setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
    }

    return () => {
      clearTimeout(timeout);
      if (refreshInterval) clearInterval(refreshInterval);
    };
  }, [fetchData]);

  return data;
};
