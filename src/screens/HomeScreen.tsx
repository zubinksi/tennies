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

const computeStrideScore = (
  dst: number | null,
  asymmetry: number | null,
): string => {
  if (dst == null || asymmetry == null) return '--';
  const score = Math.round(100 - Math.abs(dst * 100 - 30) - 50 * asymmetry);
  return String(Math.max(0, Math.min(100, score)));
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
  const [advancedExpanded, setAdvancedExpanded] = useState(false);

  const toggle = (key: string) =>
    setOpenTooltip((prev) => (prev === key ? null : key));

  const speedMph = walkingSpeed != null ? walkingSpeed * 2.23694 : null;
  const strideStyle = getGaitStyle(speedMph);
  const strideScore = computeStrideScore(walkingDST, walkingAsymmetry);

  const fmtSpeed = (v: number | null) =>
    v == null ? '--' : `${(v * 2.23694).toFixed(1)} mph`;
  const fmtLength = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 39.3701)} in`;
  const fmtPct = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 100)}%`;

  const ready = !isLoading && isAuthorized;
  const streakColor = ready && streak > 0 ? '#599a59' : colors.text;

  const handleShare = async () => {
    const steps = ready ? formatNumber(todaySteps) : '0';
    const gait = speedMph != null ? strideStyle : 'unknown';
    try {
      await Share.share({
        message: `Today's walk: ${steps} steps · Stride style: ${gait} 🚶`,
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

        {/* Highlights — above chart */}
        <View style={styles.metricsSection}>
          <View style={styles.highlightRow}>
            <Text style={styles.highlightBold}>Steps Today</Text>
            <Text style={styles.highlightBold}>
              {ready ? formatNumber(todaySteps) : '--'}
            </Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.highlightNormal}>Stride Style</Text>
            <Text style={styles.highlightNormal}>{ready ? strideStyle : '--'}</Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.highlightBold}>Stride Score</Text>
            <Text style={styles.highlightBold}>{ready ? strideScore : '--'}</Text>
          </View>
        </View>

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

        {/* 10K Streak — below chart */}
        <View style={styles.streakSection}>
          <Text style={styles.highlightGroupLabel}>Hit 10,000 Daily Steps</Text>
          <View style={styles.highlightRow}>
            <Text style={styles.highlightBold}>Current streak</Text>
            <Text style={[styles.highlightBold, { color: streakColor }]}>
              {ready ? String(streak) : '--'}
            </Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.highlightNormal}>All Time</Text>
            <Text style={styles.highlightNormal}>
              {ready ? formatNumber(allTimeDays) : '--'}
            </Text>
          </View>
        </View>

        {/* Advanced Metrics — collapsed by default */}
        <View style={styles.advancedSection}>
          <TouchableOpacity
            style={styles.advancedHeader}
            onPress={() => setAdvancedExpanded((v) => !v)}
            hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
          >
            <Text style={styles.sectionTitle}>Advanced Metrics</Text>
            <Text style={styles.chevron}>{advancedExpanded ? '▲' : '▽'}</Text>
          </TouchableOpacity>

          {advancedExpanded && (
            <View style={styles.advancedCard}>
              {/* Walk Speed */}
              <View style={styles.tableRow}>
                <TouchableOpacity
                  onPress={() => toggle('speed')}
                  hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                >
                  <Text
                    style={[
                      styles.tableLabel,
                      openTooltip === 'speed' && styles.labelOpen,
                    ]}
                  >
                    Walk Speed
                  </Text>
                </TouchableOpacity>
                <Text style={styles.tableValue}>{fmtSpeed(walkingSpeed)}</Text>
              </View>

              {/* Step Length */}
              <View style={styles.tableRow}>
                <TouchableOpacity
                  onPress={() => toggle('stepLength')}
                  hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                >
                  <Text
                    style={[
                      styles.tableLabel,
                      openTooltip === 'stepLength' && styles.labelOpen,
                    ]}
                  >
                    Step Length
                  </Text>
                </TouchableOpacity>
                <Text style={styles.tableValue}>
                  {fmtLength(walkingStepLength)}
                </Text>
              </View>

              {/* Asymmetry */}
              <View style={styles.tableRow}>
                <TouchableOpacity
                  onPress={() => toggle('asymmetry')}
                  hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                >
                  <Text
                    style={[
                      styles.tableLabel,
                      openTooltip === 'asymmetry' && styles.labelOpen,
                    ]}
                  >
                    Asymmetry
                  </Text>
                </TouchableOpacity>
                <Text style={styles.tableValue}>{fmtPct(walkingAsymmetry)}</Text>
              </View>

              {/* DST */}
              <View style={styles.tableRow}>
                <TouchableOpacity
                  onPress={() => toggle('dst')}
                  hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
                >
                  <Text
                    style={[
                      styles.tableLabel,
                      openTooltip === 'dst' && styles.labelOpen,
                    ]}
                  >
                    DST
                  </Text>
                </TouchableOpacity>
                <Text style={styles.tableValue}>{fmtPct(walkingDST)}</Text>
              </View>

              {openTooltip && TOOLTIPS[openTooltip] && (
                <View style={styles.tooltipBox}>
                  <Text style={styles.tooltipText}>{TOOLTIPS[openTooltip]}</Text>
                </View>
              )}
            </View>
          )}
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
    marginBottom: spacing.md,
  },

  // Highlights (above chart)
  metricsSection: {
    gap: spacing.xs,
    marginBottom: spacing.md,
    paddingRight: spacing.lg,
  },
  highlightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlightBold: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  highlightNormal: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
  },
  highlightGroupLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: spacing.xs,
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

  // 10K Streak (below chart)
  streakSection: {
    gap: spacing.xs,
    marginBottom: spacing.lg,
    paddingRight: spacing.lg,
  },

  // Advanced Metrics
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  advancedSection: {
    marginBottom: spacing.lg,
    paddingRight: spacing.lg,
  },
  advancedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  chevron: {
    fontSize: 12,
    color: colors.textMuted,
  },
  advancedCard: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    padding: spacing.md,
    gap: spacing.sm,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
  },
  tableValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  labelOpen: {
    color: '#f97316',
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
