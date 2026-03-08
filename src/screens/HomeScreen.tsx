import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StepChart } from '../components/StepChart';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

const formatNumber = (n: number): string =>
  n.toLocaleString('en-US');

export const HomeScreen: React.FC = () => {
  const { todaySteps, chartData, averageSteps, streak, allTimeDays, isLoading, isAuthorized } =
    useHealthKit();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Wordmark */}
        <Text style={styles.wordmark}>tennies</Text>
        <Text style={styles.subheader}>be pedestrian. get ten thousand steps a day.</Text>

        {/* Chart */}
        <View style={styles.chartWrapper}>
          <StepChart
            data={chartData}
            value={todaySteps}
            loading={isLoading}
          />
        </View>

        {/* Today's step count */}
        <View style={styles.heroSection}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.textMuted} />
          ) : !isAuthorized ? (
            <Text style={styles.errorText}>
              Enable HealthKit access in Settings to track your steps.
            </Text>
          ) : (
            <>
              <Text style={styles.heroNumber}>{formatNumber(todaySteps)}</Text>
              <Text style={styles.heroLabel}>steps today</Text>
            </>
          )}
        </View>

        {/* Metrics row */}
        <View style={styles.metricsRow}>
          <View style={styles.metric}>
            <Text style={styles.metricNumber}>{formatNumber(averageSteps)}</Text>
            <Text style={styles.metricLabel}>daily avg</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.metric}>
            <Text style={styles.metricNumber}>{streak}</Text>
            <Text style={styles.metricLabel}>day streak</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.metric}>
            <Text style={styles.metricNumber}>{formatNumber(allTimeDays)}</Text>
            <Text style={styles.metricLabel}>all time</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingLeft: spacing.lg,
    paddingRight: spacing.sm,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Wordmark
  wordmark: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subheader: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },

  // Chart
  chartWrapper: {
    marginBottom: spacing.xl,
  },

  // Hero step count
  heroSection: {
    marginBottom: spacing.xl,
    minHeight: 72,
    justifyContent: 'center',
  },
  heroNumber: {
    fontSize: 56,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 60,
    letterSpacing: -2,
  },
  heroLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  errorText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },

  // Metrics
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  metric: {
    flex: 1,
    gap: spacing.xs,
  },
  metricNumber: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.text,
    letterSpacing: -0.5,
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 1.5,
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    height: 40,
    backgroundColor: colors.border,
    marginHorizontal: spacing.lg,
  },
});
