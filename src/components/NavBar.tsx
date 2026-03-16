import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';

export type AppScreen = 'home' | 'think' | 'stats' | 'share';

interface NavBarProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

interface TabConfig {
  screen: AppScreen;
  label: string;
}

const TABS: TabConfig[] = [
  { screen: 'home',  label: 'HOME' },
  { screen: 'think', label: 'THINK' },
  { screen: 'stats', label: 'STATS' },
  { screen: 'share', label: 'SHARE' },
];

export const NavBar: React.FC<NavBarProps> = ({ activeScreen, onNavigate }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map((tab) => {
        const isActive = activeScreen === tab.screen;
        return (
          <TouchableOpacity
            key={tab.screen}
            style={styles.tab}
            onPress={() => onNavigate(tab.screen)}
            hitSlop={{ top: 6, bottom: 6, left: 10, right: 10 }}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Menlo',
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
  },
  labelActive: {
    fontWeight: '700',
  },
});
