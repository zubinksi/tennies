import React, { useRef, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { ChartPoint } from '../hooks/useHealthKit';
import { CHART_HTML } from '../chartHtml';

// Defensive import — react-native-webview uses TurboModuleRegistry.getEnforcing
// at module init, which throws if the native module is not linked. A static import
// would crash the entire bundle before React mounts (blank screen, no error message).
let WebView: any = null;
try {
  const mod = require('react-native-webview');
  WebView = mod?.default ?? mod;
} catch (_e) {
  // Native module not available; chart will not render.
}

// WebViewMessageEvent type (only used for typing, safe to require separately)
type WebViewMessageEvent = { nativeEvent: { data: string } };

interface StepChartProps {
  data: ChartPoint[];
  value: number;
  monthlyData: ChartPoint[];
  stepGoal: number;
  loading: boolean;
}

export const StepChart: React.FC<StepChartProps> = ({ data, value, monthlyData, stepGoal, loading }) => {
  const webViewRef = useRef<any>(null);
  const pendingRef = useRef<{ data: ChartPoint[]; value: number; monthlyData: ChartPoint[]; stepGoal: number } | null>(null);
  const isChartReadyRef = useRef(false);

  const sendData = useCallback((d: ChartPoint[], v: number, md: ChartPoint[], goal: number) => {
    if (!webViewRef.current) return;
    const stepPayload = JSON.stringify({ type: 'STEP_DATA', data: d, value: v, stepGoal: goal });
    const monthlyPayload = JSON.stringify({ type: 'MONTHLY_DATA', data: md });
    webViewRef.current.injectJavaScript(`
      (function() {
        var e1 = new MessageEvent('message', { data: ${JSON.stringify(stepPayload)} });
        window.dispatchEvent(e1);
        var e2 = new MessageEvent('message', { data: ${JSON.stringify(monthlyPayload)} });
        window.dispatchEvent(e2);
      })();
      true;
    `);
  }, []);

  useEffect(() => {
    pendingRef.current = { data, value, monthlyData, stepGoal };
    if (isChartReadyRef.current) {
      sendData(data, value, monthlyData, stepGoal);
    }
  }, [data, value, monthlyData, stepGoal, sendData]);

  const handleMessage = useCallback((e: WebViewMessageEvent) => {
    try {
      const msg = JSON.parse(e.nativeEvent.data);
      if (msg.type === 'CHART_READY') {
        isChartReadyRef.current = true;
        if (pendingRef.current) {
          const { data: d, value: v, monthlyData: md, stepGoal: goal } = pendingRef.current;
          sendData(d, v, md, goal);
        }
      }
    } catch (_) {}
  }, [sendData]);

  return (
    <View style={styles.container}>
      {WebView ? (
        <WebView
          ref={webViewRef}
          source={{ html: CHART_HTML }}
          style={styles.webView}
          javaScriptEnabled
          scrollEnabled={false}
          originWhitelist={['*']}
          onMessage={handleMessage}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#D8D8D8',
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
