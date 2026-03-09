import React, { useRef, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { ChartPoint } from '../hooks/useHealthKit';
import { CHART_HTML } from '../chartHtml';

interface StepChartProps {
  data: ChartPoint[];
  value: number;
  monthlyData: ChartPoint[];
  loading: boolean;
}

export const StepChart: React.FC<StepChartProps> = ({ data, value, monthlyData, loading }) => {
  const webViewRef = useRef<WebView>(null);
  const pendingRef = useRef<{ data: ChartPoint[]; value: number; monthlyData: ChartPoint[] } | null>(null);
  const isChartReadyRef = useRef(false);

  const sendData = useCallback((d: ChartPoint[], v: number, md: ChartPoint[]) => {
    if (!webViewRef.current) return;
    const stepPayload = JSON.stringify({ type: 'STEP_DATA', data: d, value: v });
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
    pendingRef.current = { data, value, monthlyData };
    if (isChartReadyRef.current) {
      sendData(data, value, monthlyData);
    }
  }, [data, value, monthlyData, sendData]);

  const handleMessage = useCallback((e: WebViewMessageEvent) => {
    try {
      const msg = JSON.parse(e.nativeEvent.data);
      if (msg.type === 'CHART_READY') {
        isChartReadyRef.current = true;
        if (pendingRef.current) {
          const { data: d, value: v, monthlyData: md } = pendingRef.current;
          sendData(d, v, md);
        }
      }
    } catch (_) {}
  }, [sendData]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html: CHART_HTML }}
        style={styles.webView}
        javaScriptEnabled
        scrollEnabled={false}
        originWhitelist={['*']}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#EBEBEB',
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
