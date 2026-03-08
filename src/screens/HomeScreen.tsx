import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StepChart } from '../components/StepChart';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

const formatNumber = (n: number): string => n.toLocaleString('en-US');

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

const getGaitStyle = (mph: number | null): string => {
  if (mph == null) return '--';
  if (mph >= 2.5) return 'Power';
  if (mph >= 2.0) return 'Swagger';
  if (mph >= 1.5) return 'Strut';
  if (mph >= 1.0) return 'Saunter';
  if (mph >= 0.5) return 'Mosey';
  return 'Trudge';
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
  const gaitStyle = getGaitStyle(speedMph);

  const fmtSpeed = (v: number | null) =>
    v == null ? '--' : `${(v * 2.23694).toFixed(1)} mph`;
  const fmtLength = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 39.3701)} in`;
  const fmtPct = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 100)}%`;

  const ready = !isLoading && isAuthorized;

  // Conditional colors
  const streakColor = ready && streak > 0 ? '#599a59' : colors.text;

  const speedColor =
    speedMph == null
      ? '#FFFFFF'
      : speedMph >= 2
      ? '#599a59'
      : speedMph >= 1
      ? '#86EFAC'
      : '#FDE047';

  const asymmetryColor =
    walkingAsymmetry == null
      ? '#FFFFFF'
      : walkingAsymmetry < 0.05
      ? '#599a59'
      : '#f97316';

  const dstColor =
    walkingDST == null
      ? '#FFFFFF'
      : walkingDST >= 0.20 && walkingDST <= 0.40
      ? '#599a59'
      : '#f97316';

  const statsMetrics = [
    {
      key: 'tennyProgress',
      label: ["Today's", 'Steps'],
      value: ready ? formatNumber(todaySteps) : '--',
      valueColor: colors.text,
    },
    {
      key: 'avg',
      label: ['30D', 'Avg'],
      value: ready ? formatNumber(averageSteps) : '--',
      valueColor: colors.text,
    },
    {
      key: 'streak',
      label: ['10K', 'Streak'],
      value: ready ? String(streak) : '--',
      valueColor: streakColor,
    },
    {
      key: 'allTime',
      label: ['All-time', '10Ks'],
      value: ready ? formatNumber(allTimeDays) : '--',
      valueColor: colors.text,
    },
  ];

  const advancedMetrics = [
    {
      key: 'speed',
      label: 'Walk Speed',
      value: fmtSpeed(walkingSpeed),
      valueColor: '#000000',
    },
    {
      key: 'stepLength',
      label: 'Step Length',
      value: fmtLength(walkingStepLength),
      valueColor: '#000000',
    },
    {
      key: 'asymmetry',
      label: 'Asymmetry',
      value: fmtPct(walkingAsymmetry),
      valueColor: '#000000',
    },
    {
      key: 'dst',
      label: 'DST',
      value: fmtPct(walkingDST),
      valueColor: '#000000',
    },
  ];

  const handleShare = async () => {
    const steps = ready ? formatNumber(todaySteps) : '0';
    const gait = speedMph != null ? gaitStyle : 'unknown';
    try {
      await Share.share({
        message: `Today's walk: ${steps} steps · Gait style: ${gait} 🚶`,
      });
    } catch (_) {}
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Wordmark */}
        <Text style={styles.wordmark}>TENNIES</Text>
        <Text style={styles.subheader}>Pedestrian Performance Monitoring</Text>

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

        {/* Highlights Section */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.statsRow}>
            {statsMetrics.map((m, i) => (
              <React.Fragment key={m.key}>
                {i > 0 && <View style={styles.statsDivider} />}
                <View style={styles.advancedMetric}>
                  <Text style={styles.advancedLabel}>{m.label[0]}</Text>
                  <Text style={styles.advancedLabel}>{m.label[1]}</Text>
                  <Text style={[styles.advancedValue, { color: m.valueColor }]}>
                    {m.value}
                  </Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Advanced Metrics */}
        <View style={styles.advancedSection}>
          <Text style={styles.sectionTitle}>Advanced Stride Analysis</Text>
          <View style={styles.advancedCard}>
            <View style={styles.advancedRow}>
              {advancedMetrics.map((m, i) => (
                <React.Fragment key={m.key}>
                  <View style={styles.advancedMetric}>
                    <TouchableOpacity
                      onPress={() => toggle(m.key)}
                      hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                    >
                      <Text
                        style={[
                          styles.advancedLabelDark,
                          styles.advancedLabelClickable,
                          openTooltip === m.key && styles.advancedLabelOpen,
                        ]}
                      >
                        {m.label}
                      </Text>
                    </TouchableOpacity>
                    <Text style={[styles.advancedValue, { color: m.valueColor }]}>
                      {m.value}
                    </Text>
                  </View>
                </React.Fragment>
              ))}
            </View>

            {openTooltip && (
              <View style={styles.tooltipBox}>
                <Text style={styles.tooltipText}>{TOOLTIPS[openTooltip]}</Text>
              </View>
            )}

            <View style={styles.gaitRow}>
              <Text style={styles.gaitLabel}>Gait Style: </Text>
              <Text style={[styles.gaitValue, { color: '#599a59' }]}>
                {gaitStyle}
              </Text>
            </View>
          </View>
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>Share Today's Walk</Text>
        </TouchableOpacity>
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
    paddingLeft: spacing.lg,
    paddingRight: 0,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Wordmark
  wordmark: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Menlo',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subheader: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: spacing.md,
  },

  // Chart
  chartWrapper: {
    marginBottom: spacing.md,
  },

  errorText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  // Highlights section
  metricsSection: {
    gap: spacing.md,
    paddingVertical: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    marginBottom: spacing.lg,
    paddingRight: spacing.lg,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  statsDivider: {
    width: StyleSheet.hairlineWidth,
    height: 36,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
    alignSelf: 'center',
  },

  // Advanced Metrics
  advancedSection: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
    paddingRight: spacing.lg,
  },
  advancedCard: {
    gap: spacing.md,
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
    backgroundColor: '#555555',
    marginHorizontal: spacing.sm,
    alignSelf: 'center',
  },
  advancedLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
  },
  advancedLabelDark: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
  },
  advancedLabelClickable: {},
  advancedLabelOpen: {
    color: '#f97316',
  },
  advancedValue: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  tooltipBox: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: spacing.md,
  },
  tooltipText: {
    fontSize: 13,
    color: '#AAAAAA',
    lineHeight: 19,
  },
  gaitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.xs,
  },
  gaitLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  gaitValue: {
    fontSize: 14,
    fontWeight: '600',
  },

  // Share button
  shareButton: {
    marginRight: spacing.lg,
    marginTop: spacing.xs,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  shareButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
});
