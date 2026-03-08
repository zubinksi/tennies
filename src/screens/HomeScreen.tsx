import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
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

  const ready = !isLoading && isAuthorized;
  const tennyPct = ready ? `${Math.round((todaySteps / 10000) * 100)}%` : '--';

  const statsMetrics = [
    { key: 'tennyProgress', label: 'tenny progress', value: tennyPct },
    { key: 'avg', label: '30d avg', value: ready ? formatNumber(averageSteps) : '--' },
    { key: 'streak', label: 'day streak', value: ready ? String(streak) : '--' },
    { key: 'allTime', label: 'all time tennies', value: ready ? formatNumber(allTimeDays) : '--' },
  ];

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

        {/* Error state */}
        {!isLoading && !isAuthorized && (
          <Text style={styles.errorText}>
            Enable HealthKit access in Settings to track your steps.
          </Text>
        )}

        {/* Stats Section */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Aim for a tenny: 10,000 steps per day</Text>
          <View style={styles.advancedRow}>
            {statsMetrics.map((m, i) => (
              <React.Fragment key={m.key}>
                {i > 0 && <View style={styles.advancedDivider} />}
                <View style={styles.advancedMetric}>
                  <Text style={styles.advancedLabel}>{m.label}</Text>
                  <Text style={styles.advancedValue}>{m.value}</Text>
                </View>
              </React.Fragment>
            ))}
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
                        styles.advancedLabelClickable,
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

  errorText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  // Stats section (tenny progress, 30d avg, streak, all time)
  metricsSection: {
    gap: spacing.md,
    paddingVertical: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    marginBottom: spacing.xl,
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
  },
  advancedLabelClickable: {
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
