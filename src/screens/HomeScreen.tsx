import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StepChart } from '../components/StepChart';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';
import { NarrativeParts } from './ShareScreen';

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
  if (mph >= 4.5) return 'powerful';
  if (mph >= 4.0) return 'brisk';
  if (mph >= 3.5) return 'zippy';
  if (mph >= 3.0) return 'moderate';
  if (mph >= 2.5) return 'leisurely';
  if (mph >= 2.0) return 'moseying';
  return 'trudging';
};

const BALANCE_COLORS: Record<string, string> = {
  excellent: '#32B482',
  good: '#006FFF',
  okay: '#FF5900',
};

const getBalanceStyle = (dst: number | null): string => {
  if (dst == null) return 'excellent';
  if (dst <= 0.3) return 'excellent';
  if (dst <= 0.4) return 'good';
  return 'okay';
};

interface HomeScreenProps {
  onNavigateToShare: (parts: NarrativeParts) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToShare }) => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  const [stepGoal, setStepGoal] = useState(10000);

  const {
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
    isLoading,
    isAuthorized,
  } = useHealthKit(stepGoal);

  const toggle = (key: string) =>
    setOpenTooltip((prev) => (prev === key ? null : key));

  const speedMph = walkingSpeed != null ? walkingSpeed * 2.23694 : null;
  const strideStyle = getGaitStyle(speedMph);
  const balanceStyle = getBalanceStyle(walkingDST);
  const milePace = speedMph != null ? Math.round(60 / speedMph) : null;

  const fmtSpeed = (v: number | null) =>
    v == null ? '--' : `${(v * 2.23694).toFixed(1)} mph`;
  const fmtLength = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 39.3701)} in`;
  const fmtPct = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 100)}%`;
  const fmtAsymmetryPct = (v: number | null) =>
    v == null ? '--' : `${(v * 100).toFixed(2)}%`;

  const ready = !isLoading && isAuthorized;
  const streakColor = ready && streak > 0 ? '#599a59' : colors.text;

  const goalAchieved = ready && todaySteps >= stepGoal;
  const aboveAvg = ready && todaySteps > averageSteps;
  const nearAvg =
    ready &&
    !aboveAvg &&
    averageSteps > 0 &&
    todaySteps >= averageSteps * 0.85;

  const handleEditGoal = () => {
    Alert.prompt(
      'Daily Step Goal',
      'Enter your step goal:',
      (value) => {
        const n = parseInt(value.replace(/,/g, ''), 10);
        if (!isNaN(n) && n > 0) setStepGoal(n);
      },
      'plain-text',
      String(stepGoal),
      'number-pad',
    );
  };

  const handleShare = () => {
    onNavigateToShare({
      steps: ready ? formatNumber(todaySteps) : '--',
      strideStyle: ready ? strideStyle : '--',
      balanceStyle: ready ? balanceStyle : 'excellent',
      aboveAvgSteps: aboveAvg ? formatNumber(todaySteps - averageSteps) : null,
      nearAvg,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Wordmark */}
        <Text style={styles.wordmark}>TENNIES</Text>

        {/* Narrative sentence */}
        <View style={styles.narrativeWrap}>
          <Text style={styles.narrative}>{'You\'ve taken '}</Text>
          <Text style={[styles.narrative, styles.narrativeBold]}>
            {ready ? formatNumber(todaySteps) : '--'}
          </Text>
          <Text style={styles.narrative}>{' steps today with a '}</Text>
          <Text style={[styles.narrative, styles.narrativeBold, styles.narrativeItalic]}>
            {ready ? strideStyle : '--'}
          </Text>
          <Text style={styles.narrative}>{' average stride of '}</Text>
          <Text style={styles.narrative}>
            {fmtSpeed(walkingSpeed)}{milePace != null ? ` (${milePace} min mile)` : ''}
          </Text>
          <Text style={styles.narrative}>{' and '}</Text>
          <Text style={styles.narrative}>
            <Text style={[styles.narrativeItalic, ready && BALANCE_COLORS[balanceStyle] ? { color: BALANCE_COLORS[balanceStyle] } : undefined]}>
              {ready ? balanceStyle : 'excellent'}
            </Text>
            {' balance.'}
            {goalAchieved ? ' Daily step goal achieved -- very pedestrian!' : ''}
            {aboveAvg ? ` You are ${formatNumber(todaySteps - averageSteps)} steps above your average for the month.` : nearAvg ? ' You are right around your average for the month.' : ''}
          </Text>
        </View>

        {/* Details — collapsed, right under narrative */}
        <View style={styles.advancedSection}>
          <TouchableOpacity
            style={styles.advancedHeader}
            onPress={() => setAdvancedExpanded((v) => !v)}
            hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
          >
            <Text style={styles.detailsTitle}>
              Details{' '}
              <Text style={styles.chevron}>{advancedExpanded ? '−' : '+'}</Text>
            </Text>
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
                <Text style={[styles.tableValue, walkingAsymmetry != null && walkingAsymmetry < 0.025 ? { color: '#32B482' } : undefined]}>
                  {fmtAsymmetryPct(walkingAsymmetry)}
                </Text>
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
                <Text style={[styles.tableValue, walkingDST != null && walkingDST < 0.4 ? { color: '#32B482' } : undefined]}>
                  {fmtPct(walkingDST)}
                </Text>
              </View>

              {openTooltip && TOOLTIPS[openTooltip] && (
                <View style={styles.tooltipBox}>
                  <Text style={styles.tooltipText}>{TOOLTIPS[openTooltip]}</Text>
                </View>
              )}
            </View>
          )}
        </View>

        {/* Chart */}
        <View style={styles.chartWrapper}>
          <StepChart data={chartData} value={todaySteps} monthlyData={monthlyChartData} stepGoal={stepGoal} loading={isLoading} />
        </View>

        {/* Error state */}
        {!isLoading && !isAuthorized && (
          <Text style={styles.errorText}>
            Enable HealthKit access in Settings to track your steps.
          </Text>
        )}

        {/* 10K Streak — below chart */}
        <View style={styles.streakSection}>
          <Text style={styles.highlightGroupLabel}>
            {'Daily Step Goal: '}
            <Text style={styles.goalTap} onPress={handleEditGoal}>
              {formatNumber(stepGoal)} ✎
            </Text>
          </Text>
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

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>Share Your Steps</Text>
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
    paddingRight: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Wordmark
  wordmark: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Menlo',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  // Narrative
  narrativeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  narrative: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 22,
  },
  narrativeBold: {
    fontWeight: '700',
  },
  narrativeItalic: {
    fontStyle: 'italic',
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
  goalTap: {
    fontSize: 12,
    fontWeight: '600',
    color: '#32B482',
  },

  // Chart
  chartWrapper: {
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 16,
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
  },

  // Details (formerly Advanced Metrics)
  detailsTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
  },
  advancedSection: {
    marginBottom: spacing.md,
  },
  advancedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  chevron: {
    fontSize: 10,
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
