#!/usr/bin/env node
// Generates src/chartHtml.ts — a TypeScript module that exports a single
// CHART_HTML string with React, ReactDOM, Liveline, and Pasito fully inlined.
// Run: node scripts/generate-chart-html.js
// Re-run whenever any of the packages are upgraded.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

const reactUmd     = read('node_modules/react/umd/react.production.min.js');
const reactDomUmd  = read('node_modules/react-dom/umd/react-dom.production.min.js');
const livelineCjs  = read('node_modules/liveline/dist/index.cjs');
const pasitoCjs    = read('node_modules/pasito/dist/index.js');
const pasitoCss    = read('node_modules/pasito/dist/index.css');

// Wrap a CJS bundle in an IIFE that supplies a browser-compatible require shim.
function wrapCjs(cjsSource, globalExportExpr) {
  return `
(function () {
  var module = { exports: {} };
  var exports = module.exports;
  function require(id) {
    if (id === 'react') return window.React;
    if (id === 'react/jsx-runtime') {
      function jsxFn(type, props, key) {
        if (key !== undefined) props = Object.assign({}, props, { key: key });
        return window.React.createElement(type, props);
      }
      return { jsx: jsxFn, jsxs: jsxFn, Fragment: window.React.Fragment };
    }
    throw new Error('require: unknown module ' + id);
  }
  ${cjsSource}
  ${globalExportExpr};
})();
`.trim();
}

const livelineWrapped = wrapCjs(livelineCjs, 'window.Liveline = module.exports.Liveline');
const pasitoWrapped   = wrapCjs(pasitoCjs,   'window.PasitoStepper = module.exports.Stepper');

// Chart bootstrap: renders two Liveline charts with a Pasito stepper to switch
// between them, and wires up the STEP_DATA / MONTHLY_DATA / CHART_READY protocol.
const chartScript = `
(function () {
  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var Liveline = window.Liveline;
  var Stepper = window.PasitoStepper;

  function App() {
    var activeState = React.useState(0);
    var active = activeState[0];
    var setActive = activeState[1];

    var todayState = React.useState({ data: [], value: 0, loading: true, window: 86400 });
    var todayChart = todayState[0];
    var setTodayChart = todayState[1];

    var monthlyState = React.useState({ data: [], value: 0, loading: true, window: 365 * 24 * 3600 });
    var monthlyChart = monthlyState[0];
    var setMonthlyChart = monthlyState[1];

    var stepGoalState = React.useState(10000);
    var stepGoal = stepGoalState[0];
    var setStepGoal = stepGoalState[1];

    React.useEffect(function () {
      function handle(e) {
        try {
          var raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
          var msg = JSON.parse(raw);
          if (msg.type === 'STEP_DATA') {
            var d = msg.data;
            var w = d.length > 1 ? (d[d.length - 1].time - d[0].time + 60) : 86400;
            setTodayChart({ data: d, value: msg.value, loading: false, window: w });
            if (msg.stepGoal) setStepGoal(msg.stepGoal);
          } else if (msg.type === 'MONTHLY_DATA') {
            var md = msg.data;
            var mv = md.length > 0 ? md[md.length - 1].value : 0;
            var mw = md.length > 1
              ? (md[md.length - 1].time - md[0].time + 30 * 24 * 3600)
              : 365 * 24 * 3600;
            setMonthlyChart({ data: md, value: mv, loading: false, window: mw });
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

    var absChart = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };

    return React.createElement(
      'div',
      { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' } },

      // Chart area — both charts stacked, only active one visible
      React.createElement(
        'div',
        { style: { flex: 1, position: 'relative' } },

        React.createElement(
          'div',
          { style: Object.assign({}, absChart, {
              opacity: active === 0 ? 1 : 0,
              pointerEvents: active === 0 ? 'auto' : 'none',
            }) },
          React.createElement('div', {
            style: {
              position: 'absolute', top: '10px', left: '14px',
              fontSize: '11px', fontWeight: '500',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              color: 'rgba(0,0,0,0.5)', zIndex: 10,
              pointerEvents: 'none', letterSpacing: '0.02em',
              paddingBottom: '16px',
            }
          }, "Today's Steps"),
          React.createElement(Liveline, {
            data: todayChart.data,
            value: todayChart.value,
            loading: todayChart.loading,
            theme: 'light',
            color: '#32B482',
            window: todayChart.window,
            grid: true,
            fill: true,
            badge: true,
            badgeVariant: 'minimal',
            pulse: false,
            momentum: false,
            scrub: true,
            referenceLine: { value: stepGoal, label: stepGoal.toLocaleString() },
            formatValue: function (v) { return Math.round(v).toLocaleString(); },
            formatTime: function (t) {
              var d = new Date(t * 1000);
              var h = d.getHours();
              var ampm = h >= 12 ? 'pm' : 'am';
              return (h % 12 || 12) + ampm;
            },
            style: { width: '100%', height: '100%' },
          })
        ),

        React.createElement(
          'div',
          { style: Object.assign({}, absChart, {
              opacity: active === 1 ? 1 : 0,
              pointerEvents: active === 1 ? 'auto' : 'none',
            }) },
          React.createElement('div', {
            style: {
              position: 'absolute', top: '10px', left: '14px',
              fontSize: '11px', fontWeight: '500',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              color: 'rgba(0,0,0,0.5)', zIndex: 10,
              pointerEvents: 'none', letterSpacing: '0.02em',
              paddingBottom: '16px',
            }
          }, 'Average Steps'),
          React.createElement(Liveline, {
            data: monthlyChart.data,
            value: monthlyChart.value,
            loading: monthlyChart.loading,
            theme: 'light',
            color: '#32B482',
            window: monthlyChart.window,
            grid: true,
            fill: true,
            badge: true,
            badgeVariant: 'minimal',
            pulse: false,
            momentum: false,
            scrub: true,
            formatValue: function (v) { return Math.round(v).toLocaleString() + ' avg'; },
            formatTime: function (t) {
              var d = new Date(t * 1000);
              return d.toLocaleString('en-US', { month: 'short' });
            },
            style: { width: '100%', height: '100%' },
          })
        )
      ),

      // Pasito stepper
      React.createElement(
        'div',
        { style: { display: 'flex', justifyContent: 'center', paddingBottom: '10px' } },
        React.createElement(Stepper, {
          count: 2,
          active: active,
          onStepClick: setActive,
          transitionDuration: 400,
          className: 'tennies-stepper',
        })
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
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
    ${pasitoCss}
    .tennies-stepper {
      --pill-active-bg: rgba(0, 0, 0, 0.7);
      --pill-bg: rgba(0, 0, 0, 0.18);
      --pill-container-bg: rgba(0, 0, 0, 0.05);
      --pill-container-border: rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>${reactUmd}</script>
  <script>${reactDomUmd}</script>
  <script>${livelineWrapped}</script>
  <script>${pasitoWrapped}</script>
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
