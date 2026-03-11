/**
 * DIAGNOSTIC BUILD — minimal app with zero native module dependencies.
 * If this blank-screen test loads, the native build is healthy and the
 * issue is in one of the native-module imports (webview, health, etc.).
 * If this ALSO shows a blank screen, the issue is in the native layer
 * (Hermes not linked, AppDelegate broken, etc.) — no JS fix will help.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TENNIES</Text>
      <Text style={styles.sub}>Diagnostic build loaded ✓</Text>
      <Text style={styles.note}>Native layer is healthy.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 16,
  },
  sub: {
    fontSize: 16,
    color: '#32B482',
    marginBottom: 8,
  },
  note: {
    fontSize: 13,
    color: '#888888',
  },
});
