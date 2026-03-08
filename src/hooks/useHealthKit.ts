import { useState, useEffect, useCallback } from 'react';

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
  averageSteps: number;
  streak: number;
  allTimeDays: number;
  isAuthorized: boolean;
  isLoading: boolean;
}

const PERMISSIONS = AppleHealthKit
  ? {
      permissions: {
        read: [AppleHealthKit.Constants.Permissions.StepCount],
        write: [],
      },
    }
  : { permissions: { read: [], write: [] } };

const startOfDay = (date: Date = new Date()): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Returns step count samples in 5-minute buckets for today.
// Each sample: { value: stepsInInterval, startDate, endDate }
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

const getDailyStepSamples = (
  startDate: Date,
  endDate: Date,
): Promise<any[]> =>
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

export const useHealthKit = (): HealthData => {
  const [data, setData] = useState<HealthData>({
    todaySteps: 0,
    chartData: [],
    averageSteps: 0,
    streak: 0,
    allTimeDays: 0,
    isAuthorized: false,
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    const now = new Date();
    const today = startOfDay(now);

    // Fetch all raw pedometer samples for today, then accumulate them into
    // 5-minute cumulative buckets so the chart shows smooth step growth.
    const rawSamples = await getTodaySamples(today, now);
    rawSamples.sort(
      (a: any, b: any) =>
        new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
    );

    const BUCKET_MS = 5 * 60 * 1000; // 5-minute buckets
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

    // Fetch from 2015 onwards for average, streak, and all-time count.
    // Apple Watch launched in 2015 — this covers all realistic HealthKit history.
    const epoch = new Date('2015-01-01T00:00:00.000Z');
    const dailySamples = await getDailyStepSamples(epoch, now);

    // Build date → steps map (excluding today, which we already have)
    const stepsByDate = new Map<string, number>();
    for (const sample of dailySamples) {
      const key = startOfDay(new Date(sample.startDate)).toDateString();
      stepsByDate.set(key, (stepsByDate.get(key) ?? 0) + sample.value);
    }
    stepsByDate.set(today.toDateString(), todaySteps);

    // Average: mean of the last 30 completed past days that have data
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

    // Streak: consecutive days ending today with >= 10k steps
    let streak = 0;
    const cursor = new Date(today);
    while (true) {
      const key = cursor.toDateString();
      const steps = stepsByDate.get(key) ?? 0;
      if (steps >= 10000) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }

    // All-time: total number of days ever recorded with >= 10k steps
    const allTimeDays = [...stepsByDate.values()].filter(
      (v) => v >= 10000,
    ).length;

    setData({
      todaySteps,
      chartData,
      averageSteps,
      streak,
      allTimeDays,
      isAuthorized: true,
      isLoading: false,
    });
  }, []);

  useEffect(() => {
    // If the native module failed to load, show not-authorized immediately.
    if (!AppleHealthKit) {
      console.log('[HealthKit] Native module not available');
      setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
      return;
    }

    console.log('[HealthKit] Native module loaded, calling initHealthKit...');

    let refreshInterval: ReturnType<typeof setInterval>;
    let didRespond = false;

    // Safety net: if HealthKit never calls back (entitlement issue / crash),
    // show the not-authorized state rather than staying blank forever.
    const timeout = setTimeout(() => {
      if (!didRespond) {
        console.log('[HealthKit] Timeout — initHealthKit never called back. Likely missing entitlement or provisioning profile issue.');
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
