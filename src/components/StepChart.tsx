import React, { useRef, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { ChartPoint } from '../hooks/useHealthKit';
import { CHART_HTML } from '../chartHtml';

interface StepChartProps {
  data: ChartPoint[];
  value: number;
  loading: boolean;
}

export const StepChart: React.FC<StepChartProps> = ({ data, value, loading }) => {
  const webViewRef = useRef<WebView>(null);
  const pendingRef = useRef<{ data: ChartPoint[]; value: number } | null>(null);
  const isChartReadyRef = useRef(false);

  const sendData = useCallback((d: ChartPoint[], v: number) => {
    if (!webViewRef.current) return;
    const payload = JSON.stringify({ type: 'STEP_DATA', data: d, value: v });
    webViewRef.current.injectJavaScript(`
      (function() {
        var e = new MessageEvent('message', { data: ${JSON.stringify(payload)} });
        window.dispatchEvent(e);
      })();
      true;
    `);
  }, []);

  useEffect(() => {
    pendingRef.current = { data, value };
    if (isChartReadyRef.current) {
      sendData(data, value);
    }
  }, [data, value, sendData]);

  const handleMessage = useCallback((e: WebViewMessageEvent) => {
    try {
      const msg = JSON.parse(e.nativeEvent.data);
      if (msg.type === 'CHART_READY') {
        isChartReadyRef.current = true;
        if (pendingRef.current) {
          sendData(pendingRef.current.data, pendingRef.current.value);
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
    backgroundColor: '#F9F9F9',
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
