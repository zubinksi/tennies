#!/usr/bin/env node
// Generates src/chartHtml.ts — a TypeScript module that exports a single
// CHART_HTML string with React, ReactDOM, and Liveline fully inlined.
// Run: node scripts/generate-chart-html.js
// Re-run whenever any of the three packages are upgraded.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

const reactUmd     = read('node_modules/react/umd/react.production.min.js');
const reactDomUmd  = read('node_modules/react-dom/umd/react-dom.production.min.js');
const livelineCjs  = read('node_modules/liveline/dist/index.cjs');

// Wrap the Liveline CJS bundle in an IIFE that supplies a browser-compatible
// `require` shim and exposes the Liveline component as window.Liveline.
const livelineWrapped = `
(function () {
  var module = { exports: {} };
  var exports = module.exports;
  function require(id) {
    if (id === 'react') return window.React;
    if (id === 'react/jsx-runtime') {
      // jsx-runtime passes key as a third arg; merge it into props before
      // forwarding to React.createElement which accepts props.key.
      function jsxFn(type, props, key) {
        if (key !== undefined) props = Object.assign({}, props, { key: key });
        return window.React.createElement(type, props);
      }
      return { jsx: jsxFn, jsxs: jsxFn, Fragment: window.React.Fragment };
    }
    throw new Error('require: unknown module ' + id);
  }
  ${livelineCjs}
  window.Liveline = module.exports.Liveline;
})();
`.trim();

// Chart bootstrap: renders the Liveline component via ReactDOM and wires up
// the STEP_DATA / CHART_READY message protocol with React Native.
const chartScript = `
(function () {
  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var Liveline = window.Liveline;

  function Chart() {
    var state = React.useState({ data: [], value: 0, loading: true, window: 86400 });
    var chartState = state[0];
    var setChartState = state[1];

    React.useEffect(function () {
      function handle(e) {
        try {
          var raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
          var msg = JSON.parse(raw);
          if (msg.type === 'STEP_DATA') {
            // Compute window from data span (midnight → now) so the chart
            // always fills its x-axis with exactly today's data.
            var d = msg.data;
            var w = d.length > 1 ? (d[d.length - 1].time - d[0].time + 60) : 86400;
            setChartState({ data: d, value: msg.value, loading: false, window: w });
          }
        } catch (_) {}
      }
      window.addEventListener('message', handle);
      document.addEventListener('message', handle);
      try {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CHART_READY' }));
      } catch (_) {}
      return function () {
        window.removeEventListener('message', handle);
        document.removeEventListener('message', handle);
      };
    }, []);

    return React.createElement(
      'div',
      { style: { width: '100%', height: '100%' } },
      React.createElement(Liveline, {
        data: chartState.data,
        value: chartState.value,
        loading: chartState.loading,
        theme: 'light',
        color: '#111111',
        window: chartState.window,
        grid: true,
        fill: true,
        badge: true,
        badgeVariant: 'minimal',
        pulse: false,
        momentum: false,
        scrub: true,
        referenceLine: { value: 10000, label: '10k' },
        formatValue: function (v) { return Math.round(v).toLocaleString(); },
        formatTime: function (t) {
          var d = new Date(t * 1000);
          var h = d.getHours();
          var ampm = h >= 12 ? 'pm' : 'am';
          return (h % 12 || 12) + ampm;
        },
        style: { width: '100%', height: '100%' },
      })
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Chart));
})();
`.trim();

const html = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #root { width: 100%; height: 100%; }
    body { background: #EBEBEB; overflow: hidden; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>${reactUmd}</script>
  <script>${reactDomUmd}</script>
  <script>${livelineWrapped}</script>
  <script>${chartScript}</script>
</body>
</html>`;

// Escape backticks and template literal syntax so the string is safe inside
// a TypeScript template literal.
const escaped = html
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$\{/g, '\\${');

const ts = `// AUTO-GENERATED — do not edit by hand.
// Re-generate with: node scripts/generate-chart-html.js
export const CHART_HTML = \`${escaped}\`;
`;

const outPath = path.join(root, 'src', 'chartHtml.ts');
fs.writeFileSync(outPath, ts, 'utf8');
console.log('Generated', outPath, `(${(ts.length / 1024).toFixed(0)} KB)`);
