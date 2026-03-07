import { useState, useEffect, useCallback } from 'react';

// Defensively import react-native-health — on unsupported simulators or
// misconfigured builds the native module may not exist, which would crash
// the JS bridge before any React renders.
let AppleHealthKit: any = null;
try {
  AppleHealthKit = require('react-native-health').default;
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

const getStepCount = (start: Date, end: Date): Promise<number> =>
  new Promise((resolve) => {
    AppleHealthKit.getStepCount(
      {
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        unit: 'count',
      },
      (_error: string, result: any) => {
        resolve(result?.value ?? 0);
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
        unit: 'count',
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
    isAuthorized: false,
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    const now = new Date();
    const today = startOfDay(now);

    // Build hourly cumulative step data for today's chart.
    // Each point represents total steps from midnight up to that hour.
    const chartData: ChartPoint[] = [{ time: today.getTime() / 1000, value: 0 }];
    const currentHour = now.getHours();

    for (let h = 1; h <= currentHour + 1; h++) {
      const end = new Date(today);
      end.setHours(h, 0, 0, 0);
      if (end > now) end.setTime(now.getTime());

      const steps = await getStepCount(today, end);
      chartData.push({ time: end.getTime() / 1000, value: steps });

      if (end.getTime() >= now.getTime()) break;
    }

    const todaySteps = chartData[chartData.length - 1]?.value ?? 0;

    // Fetch last 30 days for average and streak
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const dailySamples = await getDailyStepSamples(thirtyDaysAgo, now);

    // Build date → steps map (excluding today, which we already have)
    const stepsByDate = new Map<string, number>();
    for (const sample of dailySamples) {
      const key = startOfDay(new Date(sample.startDate)).toDateString();
      stepsByDate.set(key, (stepsByDate.get(key) ?? 0) + sample.value);
    }
    stepsByDate.set(today.toDateString(), todaySteps);

    // Average: mean of completed past days
    const pastKeys = [...stepsByDate.keys()].filter(
      (k) => k !== today.toDateString(),
    );
    const averageSteps =
      pastKeys.length > 0
        ? Math.round(
            pastKeys.reduce((sum, k) => sum + (stepsByDate.get(k) ?? 0), 0) /
              pastKeys.length,
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

    setData({
      todaySteps,
      chartData,
      averageSteps,
      streak,
      isAuthorized: true,
      isLoading: false,
    });
  }, []);

  useEffect(() => {
    // If the native module failed to load, show not-authorized immediately.
    if (!AppleHealthKit) {
      console.log('[HealthKit] Native module not available (require failed)');
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
