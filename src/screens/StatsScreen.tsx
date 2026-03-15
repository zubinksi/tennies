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
  const { topDays, isLoading, isAuthorized } = useHealthKit();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Your Most Pedestrian Days</Text>

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
              <Text style={styles.steps}>{formatNumber(day.steps)} steps</Text>
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
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
    lineHeight: 32,
  },
  loader: {
    marginTop: spacing.xl,
  },
  empty: {
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
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textMuted,
  },
  steps: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
});
