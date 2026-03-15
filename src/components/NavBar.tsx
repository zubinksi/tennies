import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export type AppScreen = 'home' | 'think' | 'stats' | 'share';

interface NavBarProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

interface TabConfig {
  screen: AppScreen;
  label: string;
  icon: string;
  iconActive: string;
}

const TABS: TabConfig[] = [
  { screen: 'home',  label: 'Home',  icon: 'home-outline',        iconActive: 'home' },
  { screen: 'think', label: 'Think', icon: 'mic-outline',          iconActive: 'mic' },
  { screen: 'stats', label: 'Stats', icon: 'bar-chart-outline',    iconActive: 'bar-chart' },
  { screen: 'share', label: 'Share', icon: 'share-social-outline', iconActive: 'share-social' },
];

export const NavBar: React.FC<NavBarProps> = ({ activeScreen, onNavigate }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map((tab) => {
        const isActive = activeScreen === tab.screen;
        const iconColor = isActive ? colors.text : colors.textMuted;
        return (
          <TouchableOpacity
            key={tab.screen}
            style={styles.tab}
            onPress={() => onNavigate(tab.screen)}
            hitSlop={{ top: 6, bottom: 6, left: 10, right: 10 }}
          >
            <Ionicons
              name={(isActive ? tab.iconActive : tab.icon) as any}
              size={24}
              color={iconColor}
            />
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
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  label: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.textMuted,
  },
  labelActive: {
    fontWeight: '600',
    color: colors.text,
  },
});
