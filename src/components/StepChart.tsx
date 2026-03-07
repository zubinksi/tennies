import React, { useRef, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { ChartPoint } from '../hooks/useHealthKit';

interface StepChartProps {
  data: ChartPoint[];
  value: number;
  loading: boolean;
}

// The chart HTML is a self-contained React app using Liveline from esm.sh.
// It posts CHART_READY once the message listener is set up, then React Native
// sends data. This avoids the race where onLoad fires before ES modules load.
const CHART_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #root { width: 100%; height: 100%; }
    body { background: #F9F9F9; overflow: hidden; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import { createElement, useState, useEffect } from 'https://esm.sh/react@18';
    import { createRoot } from 'https://esm.sh/react-dom@18/client';
    import Liveline from 'https://esm.sh/liveline';

    function Chart() {
      const [chartState, setChartState] = useState({
        data: [],
        value: 0,
        loading: true,
      });

      useEffect(() => {
        const handle = (e) => {
          try {
            const raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
            const msg = JSON.parse(raw);
            if (msg.type === 'STEP_DATA') {
              setChartState({ data: msg.data, value: msg.value, loading: false });
            }
          } catch (_) {}
        };
        window.addEventListener('message', handle);
        document.addEventListener('message', handle);

        // Signal React Native that the listener is ready. RN will send data now.
        try {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CHART_READY' }));
        } catch (_) {}

        return () => {
          window.removeEventListener('message', handle);
          document.removeEventListener('message', handle);
        };
      }, []);

      return createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        createElement(Liveline, {
          data: chartState.data,
          value: chartState.value,
          loading: chartState.loading,
          theme: 'light',
          color: '#111111',
          window: 86400,
          grid: true,
          fill: true,
          badge: true,
          badgeVariant: 'minimal',
          pulse: false,
          momentum: false,
          scrub: true,
          referenceLine: { value: 10000, label: '10k' },
          formatValue: (v) => Math.round(v).toLocaleString(),
          formatTime: (t) => {
            const d = new Date(t * 1000);
            const h = d.getHours();
            const ampm = h >= 12 ? 'pm' : 'am';
            return (h % 12 || 12) + ampm;
          },
          style: { width: '100%', height: '100%' },
        }),
      );
    }

    createRoot(document.getElementById('root')).render(createElement(Chart));
  </script>
</body>
</html>`;

export const StepChart: React.FC<StepChartProps> = ({ data, value, loading }) => {
  const webViewRef = useRef<WebView>(null);
  // Keep latest data in a ref so we can send it whenever the chart is ready
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

  // Cache the latest data; send it immediately if chart is already ready
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
        // Send whatever data we have at this point
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
        source={{ html: CHART_HTML, baseUrl: 'https://esm.sh' }}
        style={styles.webView}
        javaScriptEnabled
        scrollEnabled={false}
        originWhitelist={['*']}
        allowsInlineMediaPlayback={false}
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
