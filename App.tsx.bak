import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { ShareScreen, NarrativeParts } from './src/screens/ShareScreen';

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

export default function App() {
  const [screen, setScreen] = useState<'home' | 'share'>('home');
  const [narrativeParts, setNarrativeParts] = useState<NarrativeParts>({
    steps: '--',
    strideStyle: '--',
    balanceStyle: 'excellent',
    aboveAvgSteps: null,
    nearAvg: false,
  });

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        {screen === 'home' ? (
          <HomeScreen
            onNavigateToShare={(parts) => {
              setNarrativeParts(parts);
              setScreen('share');
            }}
          />
        ) : (
          <ShareScreen
            narrativeParts={narrativeParts}
            onBack={() => setScreen('home')}
          />
        )}
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
