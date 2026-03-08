import React, { useRef, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { ChartPoint } from '../hooks/useHealthKit';

interface StepChartProps {
  data: ChartPoint[];
  value: number;
  loading: boolean;
}

// Self-contained canvas chart — no external scripts, no network dependency.
// Posts CHART_READY once the message listener is set up, then React Native
// sends STEP_DATA. This avoids the race where onLoad fires before JS runs.
const CHART_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #F9F9F9; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="c"></canvas>
  <script>
    (function () {
      var canvas = document.getElementById('c');
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      var state = { data: [], value: 0, loading: true };
      var loadAnim = null;
      var loadPhase = 0;

      function resize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
      }

      function draw() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        ctx.clearRect(0, 0, w, h);
        if (state.loading || state.data.length < 2) {
          animateLoading(w, h);
        } else {
          if (loadAnim) { cancelAnimationFrame(loadAnim); loadAnim = null; }
          drawChart(w, h);
        }
      }

      function animateLoading(w, h) {
        if (loadAnim) cancelAnimationFrame(loadAnim);
        var midY = h * 0.45;
        loadPhase += 0.04;
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        for (var x = 0; x <= w; x += 2) {
          var y = midY + Math.sin((x / w) * Math.PI * 5 + loadPhase) * 7;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(0,0,0,0.10)';
        ctx.lineWidth = 2;
        ctx.stroke();
        loadAnim = requestAnimationFrame(function () { animateLoading(w, h); });
      }

      function buildLinePath(data, tx, ty) {
        ctx.beginPath();
        for (var i = 0; i < data.length; i++) {
          var x = tx(data[i].time);
          var y = ty(data[i].value);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
      }

      function roundRect(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
      }

      function drawChart(w, h) {
        var data = state.data;
        var pad = { top: 20, right: 52, bottom: 26, left: 12 };
        var cw = w - pad.left - pad.right;
        var ch = h - pad.top - pad.bottom;

        var todayStart = data[0].time;
        var maxVal = 0;
        for (var i = 0; i < data.length; i++) if (data[i].value > maxVal) maxVal = data[i].value;
        maxVal = Math.max(10000, maxVal * 1.15);

        function tx(t) { return pad.left + (t - todayStart) / 86400 * cw; }
        function ty(v) { return pad.top + ch * (1 - v / maxVal); }

        // Horizontal grid lines
        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(0,0,0,0.05)';
        ctx.lineWidth = 1;
        [0.25, 0.5, 0.75].forEach(function (pct) {
          var y = ty(maxVal * pct);
          ctx.beginPath();
          ctx.moveTo(pad.left, y);
          ctx.lineTo(pad.left + cw, y);
          ctx.stroke();
        });

        // 10k reference line
        var refY = ty(10000);
        if (refY > pad.top && refY < pad.top + ch) {
          ctx.strokeStyle = 'rgba(0,0,0,0.18)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 4]);
          ctx.beginPath();
          ctx.moveTo(pad.left, refY);
          ctx.lineTo(pad.left + cw, refY);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = 'rgba(0,0,0,0.30)';
          ctx.font = '10px -apple-system, sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText('10k', pad.left + cw + 6, refY);
        }

        // Fill gradient under the line
        buildLinePath(data, tx, ty);
        var last = data[data.length - 1];
        ctx.lineTo(tx(last.time), pad.top + ch);
        ctx.lineTo(pad.left, pad.top + ch);
        ctx.closePath();
        var grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
        grad.addColorStop(0, 'rgba(17,17,17,0.10)');
        grad.addColorStop(1, 'rgba(17,17,17,0.00)');
        ctx.fillStyle = grad;
        ctx.fill();

        // Line stroke
        buildLinePath(data, tx, ty);
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.setLineDash([]);
        ctx.stroke();

        // Time labels
        var nowSec = Math.floor(Date.now() / 1000);
        ctx.fillStyle = 'rgba(0,0,0,0.28)';
        ctx.font = '10px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        [{h: 6, l: '6am'}, {h: 12, l: '12pm'}, {h: 18, l: '6pm'}].forEach(function (lb) {
          var t = todayStart + lb.h * 3600;
          if (t < nowSec) ctx.fillText(lb.l, tx(t), h - 5);
        });

        // Tip dot
        var tipX = tx(last.time);
        var tipY = ty(last.value);
        ctx.beginPath();
        ctx.arc(tipX, tipY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#111111';
        ctx.fill();

        // Badge
        var label = Math.round(state.value).toLocaleString();
        ctx.font = '600 11px -apple-system, sans-serif';
        var tw = ctx.measureText(label).width;
        var bw = tw + 16;
        var bh = 20;
        var bx = tipX - bw / 2;
        bx = Math.max(pad.left, Math.min(bx, pad.left + cw - bw));
        var by = tipY - bh - 10;
        if (by < pad.top) by = tipY + 10;

        ctx.fillStyle = 'rgba(17,17,17,0.85)';
        roundRect(bx, by, bw, bh, 5);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, bx + bw / 2, by + bh / 2);
      }

      function onMessage(e) {
        try {
          var raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
          var msg = JSON.parse(raw);
          if (msg.type === 'STEP_DATA') {
            state = { data: msg.data, value: msg.value, loading: false };
            draw();
          }
        } catch (_) {}
      }

      window.addEventListener('message', onMessage);
      document.addEventListener('message', onMessage);
      window.addEventListener('resize', resize);
      resize();

      try {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CHART_READY' }));
      } catch (_) {}
    })();
  </script>
</body>
</html>`;

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
