import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

const formatNumber = (n: number): string => n.toLocaleString('en-US');

const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const StatsScreen: React.FC = () => {
  const [stepGoal, setStepGoal] = useState(10000);

  useEffect(() => {
    AsyncStorage.getItem('stepGoal').then((val) => {
      if (val) setStepGoal(parseInt(val, 10));
    });
  }, []);

  const { topDays, streak, last30Days, isLoading, isAuthorized } = useHealthKit(stepGoal);

  const ready = !isLoading && isAuthorized;
  const streakColor = ready && streak > 0 ? '#32B482' : colors.text;

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
        {/* Large spacer below header */}
        <View style={styles.headerBreak} />

        {/* Daily Goal section */}
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

        {/* Section break */}
        <View style={styles.sectionBreak} />

        <Text style={styles.title}>YOUR MOST PEDESTRIAN DAYS</Text>

        {isLoading && (
          <ActivityIndicator size="large" color={colors.textMuted} style={styles.loader} />
        )}

        {!isLoading && !isAuthorized && (
          <Text style={styles.empty}>
            Enable HealthKit access in Settings to view your step history.
          </Text>
        )}

        {!isLoading && isAuthorized && topDays.length === 0 && (
          <Text style={styles.empty}>No step data found yet. Get walking!</Text>
        )}

        {!isLoading && isAuthorized && topDays.map((day, index) => (
          <View key={day.date} style={styles.row}>
            <View style={styles.rankWrap}>
              <Text style={styles.rank}>{index + 1}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.date}>{formatDate(day.date)}</Text>
              <Text style={styles.steps}>{Math.round(day.steps).toLocaleString('en-US')} steps</Text>
            </View>
          </View>
        ))}
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

  container: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Large spacer below header
  headerBreak: {
    height: 120,
  },

  // Goal section
  goalSection: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  sectionLabel: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: 4,
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

  // Section break
  sectionBreak: {
    height: spacing.lg,
  },

  title: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  loader: {
    marginTop: spacing.xl,
  },
  empty: {
    fontFamily: 'Menlo',
    fontSize: 15,
    color: colors.textMuted,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D0D0D0',
    gap: spacing.md,
  },
  rankWrap: {
    width: 32,
    alignItems: 'center',
  },
  rank: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  date: {
    fontFamily: 'Menlo',
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  steps: {
    fontFamily: 'Menlo',
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    fontStyle: 'italic',
  },
});
