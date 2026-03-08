import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StepChart } from '../components/StepChart';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

const formatNumber = (n: number): string => n.toLocaleString('en-US');

const getTodayLabel = (): string =>
  new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

const TOOLTIPS: Record<string, string> = {
  speed:
    'Walking speed represents how quickly you walk on flat ground. Walking speeds may be associated with how well you move overall and your physical abilities.',
  stepLength:
    "Step length is the distance between your front foot and back foot when you're walking. The ability to take longer steps is related to your long term mobility.",
  asymmetry:
    'Walking asymmetry is the percent of time that your steps with one foot are faster or slower than the other foot. This means the lower the percentage of asymmetry, the healthier your walking pattern.',
  dst:
    'Double Support Time is the percentage of time during a walk that both feet are on the ground. A lower value means you spend more of your walk with your weight on one foot instead of two, which can be a sign of better balance. During a typical walk, this measure will fall between 20 to 40%.',
};

export const HomeScreen: React.FC = () => {
  const {
    todaySteps,
    chartData,
    averageSteps,
    streak,
    allTimeDays,
    walkingSpeed,
    walkingStepLength,
    walkingAsymmetry,
    walkingDST,
    isLoading,
    isAuthorized,
  } = useHealthKit();

  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const toggle = (key: string) =>
    setOpenTooltip((prev) => (prev === key ? null : key));

  // Walking speed in mph for classification (1 mph = 0.44704 m/s)
  const speedMph = walkingSpeed != null ? walkingSpeed * 2.23694 : null;
  const classification =
    speedMph != null ? (speedMph >= 1 ? 'Very Pedestrian' : 'Pedestrian') : null;
  const classColor = classification === 'Very Pedestrian' ? '#22c55e' : '#f97316';

  const fmtSpeed = (v: number | null) =>
    v == null ? '--' : `${(v * 2.23694).toFixed(1)} mph`;
  const fmtLength = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 39.3701)} in`;
  const fmtPct = (v: number | null) =>
    v == null ? '--' : `${Math.round(v)}%`;

  const advancedMetrics = [
    { key: 'speed', label: 'Walk Speed', value: fmtSpeed(walkingSpeed) },
    { key: 'stepLength', label: 'Step Length', value: fmtLength(walkingStepLength) },
    { key: 'asymmetry', label: 'Asymmetry', value: fmtPct(walkingAsymmetry) },
    { key: 'dst', label: 'DST', value: fmtPct(walkingDST) },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Wordmark */}
        <Text style={styles.wordmark}>TENNIES</Text>
        <Text style={styles.subheader}>Pedestrian Performance Monitoring</Text>

        {/* Date */}
        <Text style={styles.dateText}>{getTodayLabel()}</Text>

        {/* Chart */}
        <View style={styles.chartWrapper}>
          <StepChart data={chartData} value={todaySteps} loading={isLoading} />
        </View>

        {/* Hero row: steps today + 30d avg */}
        <View style={styles.heroRow}>
          <View style={styles.heroMain}>
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

          {isAuthorized && !isLoading && (
            <>
              <View style={styles.divider} />
              <View style={styles.heroSide}>
                <Text style={styles.metricNumber}>{formatNumber(averageSteps)}</Text>
                <Text style={styles.metricLabel}>30d avg</Text>
              </View>
            </>
          )}
        </View>

        {/* Aim text */}
        <Text style={styles.aimText}>Aim for a tenny: 10,000 steps per day</Text>

        {/* Streak + all time tennies */}
        <View style={styles.metricsRow}>
          <View style={styles.metric}>
            <Text style={styles.metricNumber}>{streak}</Text>
            <Text style={styles.metricLabel}>day streak</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.metric}>
            <Text style={styles.metricNumber}>{formatNumber(allTimeDays)}</Text>
            <Text style={styles.metricLabel}>all time tennies</Text>
          </View>
        </View>

        {/* Advanced Metrics */}
        <View style={styles.advancedSection}>
          <Text style={styles.sectionTitle}>Advanced Metrics</Text>

          <View style={styles.advancedRow}>
            {advancedMetrics.map((m, i) => (
              <React.Fragment key={m.key}>
                {i > 0 && <View style={styles.advancedDivider} />}
                <View style={styles.advancedMetric}>
                  <TouchableOpacity
                    onPress={() => toggle(m.key)}
                    hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                  >
                    <Text
                      style={[
                        styles.advancedLabel,
                        openTooltip === m.key && styles.advancedLabelOpen,
                      ]}
                    >
                      {m.label}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.advancedValue}>{m.value}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>

          {openTooltip && (
            <View style={styles.tooltipBox}>
              <Text style={styles.tooltipText}>{TOOLTIPS[openTooltip]}</Text>
            </View>
          )}

          {classification && (
            <Text style={[styles.classificationLabel, { color: classColor }]}>
              Advanced Metrics: {classification}
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Wordmark
  wordmark: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    color: colors.text,
    letterSpacing: 3,
    marginBottom: spacing.xs,
  },
  subheader: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  dateText: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },

  // Chart
  chartWrapper: {
    marginBottom: spacing.xl,
  },

  // Hero row
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    minHeight: 72,
  },
  heroMain: {
    flex: 3,
  },
  heroSide: {
    flex: 2,
    gap: spacing.xs,
  },
  heroNumber: {
    fontSize: 52,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 56,
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

  // Aim text
  aimText: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },

  // Metrics
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    marginBottom: spacing.xl,
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
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    height: 40,
    backgroundColor: colors.border,
    marginHorizontal: spacing.lg,
  },

  // Advanced Metrics
  advancedSection: {
    gap: spacing.md,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  advancedRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  advancedMetric: {
    flex: 1,
    gap: spacing.xs,
  },
  advancedDivider: {
    width: StyleSheet.hairlineWidth,
    height: 36,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
    alignSelf: 'center',
  },
  advancedLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
    textDecorationLine: 'underline',
  },
  advancedLabelOpen: {
    color: '#f97316',
  },
  advancedValue: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    letterSpacing: -0.3,
  },
  tooltipBox: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: spacing.md,
  },
  tooltipText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 19,
  },
  classificationLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});
