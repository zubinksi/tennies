import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const HomeScreen: React.FC = () => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [stepGoal, setStepGoal] = useState(10000);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('stepGoal').then((val) => {
      if (val) setStepGoal(parseInt(val, 10));
    });
  }, []);

  const {
    todaySteps,
    chartData,
    monthlyChartData,
    averageSteps,
    streak,
    allTimeDays,
    last30Days,
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
    v == null ? '--' : `${(v * 2.23694).toFixed(1)} MPH`;
  const fmtLength = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 39.3701)} IN`;
  const fmtPct = (v: number | null) =>
    v == null ? '--' : `${Math.round(v * 100)}%`;
  const fmtAsymmetryPct = (v: number | null) =>
    v == null ? '--' : `${(v * 100).toFixed(2)}%`;

  const ready = !isLoading && isAuthorized;
  const streakColor = ready && streak > 0 ? '#32B482' : colors.text;

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
        if (!isNaN(n) && n > 0) {
          setStepGoal(n);
          AsyncStorage.setItem('stepGoal', String(n));
        }
      },
      'plain-text',
      String(stepGoal),
      'number-pad',
    );
  };

  const now = new Date();
  const dateStr = `${DAYS[now.getDay()]} ${MONTHS[now.getMonth()]} ${now.getDate()}`;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TENNIES</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Big break underneath header */}
        <View style={styles.headerBreak} />

        {/* Date */}
        <Text style={styles.dateText}>{dateStr}</Text>

        {/* Narrative — directly underneath date, no break */}
        <Text style={styles.narrative}>
          {goalAchieved && (
            <Text style={{ color: '#32B482' }}>{'Daily step goal achieved! '}</Text>
          )}
          {!goalAchieved && ready && (
            walkingDST != null && walkingDST > 0.4
              ? <Text style={{ color: '#FF5900' }}>{'Focus on good posture. '}</Text>
              : <Text style={{ color: '#006FFF' }}>{'Every step counts! '}</Text>
          )}
          {'You\'ve walked '}
          <Text style={styles.narrativeBold}>
            {ready ? formatNumber(todaySteps) : '--'}
          </Text>
          {' steps today with a '}
          <Text style={styles.narrativeItalic}>
            {ready ? strideStyle : '--'}
          </Text>
          {' stride of '}
          {walkingSpeed != null ? `${(walkingSpeed * 2.23694).toFixed(1)} mph` : '--'}
          {' and '}
          <Text style={styles.narrativeItalic}>
            {ready ? balanceStyle : '--'}
          </Text>
          {' balance.'}
          {aboveAvg ? ` You are ${formatNumber(todaySteps - averageSteps)} steps above your average for the month.` : nearAvg ? ' You are right around your average for the month.' : ''}
        </Text>

        {/* Break */}
        <View style={styles.sectionBreak} />

        {/* DETAILS dropdown toggle */}
        <TouchableOpacity onPress={() => setDetailsOpen((prev) => !prev)}>
          <Text style={styles.sectionLabel}>{detailsOpen ? 'DETAILS -' : 'DETAILS +'}</Text>
        </TouchableOpacity>

        {/* Detail rows — collapsed by default */}
        {detailsOpen && (
          <View style={styles.detailRows}>
            {/* Walk Speed */}
            <View style={styles.tableRow}>
              <TouchableOpacity
                onPress={() => toggle('speed')}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
              >
                <Text style={[styles.tableLabel, openTooltip === 'speed' && styles.labelOpen]}>
                  WALK SPEED
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
                <Text style={[styles.tableLabel, openTooltip === 'stepLength' && styles.labelOpen]}>
                  STEP LENGTH
                </Text>
              </TouchableOpacity>
              <Text style={styles.tableValue}>{fmtLength(walkingStepLength)}</Text>
            </View>

            {/* Asymmetry */}
            <View style={styles.tableRow}>
              <TouchableOpacity
                onPress={() => toggle('asymmetry')}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
              >
                <Text style={[styles.tableLabel, openTooltip === 'asymmetry' && styles.labelOpen]}>
                  ASYMMETRY
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
                <Text style={[styles.tableLabel, openTooltip === 'dst' && styles.labelOpen]}>
                  DST
                </Text>
              </TouchableOpacity>
              <Text style={[styles.tableValue, walkingDST != null && walkingDST < 0.4 ? { color: '#32B482' } : undefined]}>
                {fmtPct(walkingDST)}
              </Text>
            </View>

            {openTooltip && TOOLTIPS[openTooltip] && (
              <Text style={styles.tooltipText}>{TOOLTIPS[openTooltip]}</Text>
            )}
          </View>
        )}

        {/* Break */}
        <View style={styles.sectionBreak} />

        {/* Chart — above goal section */}
        <View style={styles.chartWrapper}>
          <StepChart data={chartData} value={todaySteps} monthlyData={monthlyChartData} stepGoal={stepGoal} loading={isLoading} />
        </View>

        {/* Break */}
        <View style={styles.sectionBreak} />

        {/* Goal section — below chart */}
        <View style={styles.goalSection}>
          <TouchableOpacity onPress={handleEditGoal}>
            <Text style={styles.sectionLabel}>
              {'DAILY GOAL '}{formatNumber(stepGoal)}
            </Text>
          </TouchableOpacity>
          <View style={styles.highlightRow}>
            <Text style={styles.metricLabel}>CURRENT STREAK</Text>
            <Text style={[styles.metricValue, { color: streakColor }]}>
              {ready ? String(streak) : '--'}
            </Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.metricLabel}>LAST 30D</Text>
            <Text style={styles.metricValue}>
              {ready ? formatNumber(last30Days) : '--'}
            </Text>
          </View>
        </View>

        {/* Error state */}
        {!isLoading && !isAuthorized && (
          <Text style={styles.errorText}>
            Enable HealthKit access in Settings to track your steps.
          </Text>
        )}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },

  // Fixed header
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    backgroundColor: '#EBEBEB',
  },
  headerTitle: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
    letterSpacing: 0,
  },

  // Scroll content
  container: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    paddingBottom: spacing.xxl,
  },

  // Big break below header
  headerBreak: {
    height: 80,
  },

  // Date
  dateText: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: 4,
  },

  // Narrative
  narrative: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 27,
    marginBottom: 0,
  },
  narrativeBold: {
    fontWeight: '700',
  },
  narrativeItalic: {
    fontStyle: 'italic',
  },

  // Section break
  sectionBreak: {
    height: spacing.lg,
  },

  // Section label (DETAILS +/-, DAILY GOAL:)
  sectionLabel: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: 4,
  },

  // Detail rows
  detailRows: {
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableLabel: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
  },
  tableValue: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
  },
  labelOpen: {
    color: '#f97316',
  },
  tooltipText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 19,
    marginTop: spacing.xs,
  },

  // Goal section
  goalSection: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  highlightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricLabel: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
  },
  metricValue: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
  },

  // Chart
  chartWrapper: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2.5,
    elevation: 2,
  },

  errorText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginTop: spacing.md,
  },
});
