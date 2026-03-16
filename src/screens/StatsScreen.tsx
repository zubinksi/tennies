import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

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
  const { topDays, isLoading, isAuthorized } = useHealthKit();

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
    height: 80,
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
