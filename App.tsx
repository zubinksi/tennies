import React, { useState, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { ShareScreen, NarrativeParts } from './src/screens/ShareScreen';
import { StatsScreen } from './src/screens/StatsScreen';
import { ThinkScreen } from './src/screens/ThinkScreen';
import { NavBar, AppScreen } from './src/components/NavBar';
import { useHealthKit } from './src/hooks/useHealthKit';

interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error?.message ?? String(error) };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={errorStyles.container}>
          <Text style={errorStyles.title}>TENNIES</Text>
          <Text style={errorStyles.message}>Something went wrong.</Text>
          <Text style={errorStyles.detail}>{this.state.error}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 3,
    color: '#111111',
    marginBottom: 24,
  },
  message: {
    fontSize: 16,
    color: '#111111',
    marginBottom: 8,
  },
  detail: {
    fontSize: 12,
    color: '#8A8A8A',
    textAlign: 'center',
  },
});

function AppContent() {
  const [screen, setScreen] = useState<AppScreen>('home');

  // HealthKit data used to compute narrativeParts for the Share screen
  const { todaySteps, averageSteps, walkingSpeed, walkingDST, isAuthorized } = useHealthKit();

  const narrativeParts = useMemo<NarrativeParts>(() => {
    const ready = isAuthorized;
    const speedMph = walkingSpeed != null ? walkingSpeed * 2.23694 : null;
    const getGaitStyle = (mph: number | null) => {
      if (mph == null) return '--';
      if (mph >= 4.5) return 'powerful';
      if (mph >= 4.0) return 'brisk';
      if (mph >= 3.5) return 'zippy';
      if (mph >= 3.0) return 'moderate';
      if (mph >= 2.5) return 'leisurely';
      if (mph >= 2.0) return 'moseying';
      return 'trudging';
    };
    const getBalanceStyle = (dst: number | null) => {
      if (dst == null) return 'excellent';
      if (dst <= 0.3) return 'excellent';
      if (dst <= 0.4) return 'good';
      return 'okay';
    };
    const strideStyle = getGaitStyle(speedMph);
    const balanceStyle = getBalanceStyle(walkingDST);
    const aboveAvg = ready && todaySteps > averageSteps;
    const nearAvg = ready && !aboveAvg && averageSteps > 0 && todaySteps >= averageSteps * 0.85;
    return {
      steps: ready ? todaySteps.toLocaleString('en-US') : '--',
      strideStyle: ready ? strideStyle : '--',
      balanceStyle: ready ? balanceStyle : 'excellent',
      aboveAvgSteps: aboveAvg ? (todaySteps - averageSteps).toLocaleString('en-US') : null,
      nearAvg,
    };
  }, [todaySteps, averageSteps, walkingSpeed, walkingDST, isAuthorized]);

  const handleNavigate = (target: AppScreen) => {
    setScreen(target);
  };

  const showNavBar = screen !== 'share';

  return (
    <View style={styles.root}>
      {screen === 'home' && <HomeScreen />}
      {screen === 'think' && <ThinkScreen />}
      {screen === 'stats' && <StatsScreen />}
      {screen === 'share' && (
        <ShareScreen
          narrativeParts={narrativeParts}
          onBack={() => setScreen('home')}
        />
      )}
      {showNavBar && (
        <NavBar activeScreen={screen} onNavigate={handleNavigate} />
      )}
    </View>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <AppContent />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
