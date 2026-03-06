import { useState, useEffect, useCallback } from 'react';
import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue,
} from 'react-native-health';

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

const PERMISSIONS: HealthKitPermissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.StepCount],
    write: [],
  },
};

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
      (_error: string, result: HealthValue) => {
        resolve(result?.value ?? 0);
      },
    );
  });

const getDailyStepSamples = (
  startDate: Date,
  endDate: Date,
): Promise<HealthValue[]> =>
  new Promise((resolve) => {
    AppleHealthKit.getDailyStepCountSamples(
      {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        unit: 'count',
      },
      (_error: string, results: HealthValue[]) => {
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
    let refreshInterval: ReturnType<typeof setInterval>;

    AppleHealthKit.initHealthKit(PERMISSIONS, (error: string) => {
      if (error) {
        setData((prev) => ({ ...prev, isLoading: false, isAuthorized: false }));
        return;
      }
      fetchData();
      refreshInterval = setInterval(fetchData, 5 * 60 * 1000);
    });

    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
    };
  }, [fetchData]);

  return data;
};
