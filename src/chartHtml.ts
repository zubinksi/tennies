// AUTO-GENERATED — do not edit by hand.
// Re-generate with: node scripts/generate-chart-html.js
export const CHART_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #root { width: 100%; height: 100%; }
    body { background: #EBEBEB; overflow: hidden; }
    /* src/styles/Stepper.css */
.pasito-container {
  --pill-dot-size: 8px;
  --pill-active-width: 24px;
  --pill-gap: 6px;
  --pill-duration: 500ms;
  --pill-easing: cubic-bezier(0.215, 0.61, 0.355, 1);
  --pill-bg: rgba(0, 0, 0, 0.12);
  --pill-active-bg: rgba(0, 0, 0, 0.8);
  --pill-fill-bg: rgba(255, 255, 255, 0.45);
  --pill-container-bg: rgba(0, 0, 0, 0.04);
  --pill-container-radius: 999px;
  --pill-container-border: rgba(0, 0, 0, 0.06);
  display: inline-flex;
  padding: 6px 10px;
  background: var(--pill-container-bg);
  border-radius: var(--pill-container-radius);
  border: 1px solid var(--pill-container-border);
  overflow: hidden;
}
.pasito-track {
  display: flex;
  align-items: center;
  margin-left: calc(-1 * var(--pill-gap));
  transition: transform var(--pill-duration) var(--pill-easing);
}
.pasito-vertical .pasito-track {
  flex-direction: column;
  margin-left: 0;
  margin-top: calc(-1 * var(--pill-gap));
}
.pasito-step {
  position: relative;
  width: var(--pill-dot-size);
  height: var(--pill-dot-size);
  border-radius: 999px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--pill-bg);
  flex-shrink: 0;
  overflow: hidden;
  margin-left: var(--pill-gap);
  margin-top: 0;
  transform-origin: center center;
  transition:
    width var(--pill-duration) var(--pill-easing),
    height var(--pill-duration) var(--pill-easing),
    background var(--pill-duration) var(--pill-easing),
    opacity var(--pill-duration) var(--pill-easing),
    transform var(--pill-duration) var(--pill-easing),
    margin-left var(--pill-duration) var(--pill-easing),
    margin-top var(--pill-duration) var(--pill-easing);
}
.pasito-vertical .pasito-step {
  margin-left: 0;
  margin-top: var(--pill-gap);
}
.pasito-step:focus-visible {
  outline: 2px solid rgba(0, 0, 0, 0.3);
  outline-offset: 2px;
}
.pasito-step-active {
  width: var(--pill-active-width);
  background: var(--pill-active-bg);
}
.pasito-vertical .pasito-step-active {
  width: var(--pill-dot-size);
  height: var(--pill-active-width);
}
.pasito-step::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  border-radius: inherit;
  background: var(--pill-fill-bg);
  pointer-events: none;
}
.pasito-vertical .pasito-step::after {
  right: 0;
  bottom: auto;
  width: auto;
  height: 0;
}
.pasito-step-filling::after {
  width: 100%;
  transition: width var(--pill-fill-duration, 3000ms) linear;
}
.pasito-vertical .pasito-step-filling::after {
  width: auto;
  height: 100%;
  transition: height var(--pill-fill-duration, 3000ms) linear;
}
.pasito-entering {
  width: 0;
  margin-left: 0;
  margin-top: 0;
  opacity: 0;
  transform: scale(0);
  transition-duration: 250ms;
}
.pasito-vertical .pasito-entering {
  width: var(--pill-dot-size);
  height: 0;
}
.pasito-exiting {
  width: 0;
  margin-left: 0;
  margin-top: 0;
  opacity: 0;
  transform: scale(0);
  transition-duration: 250ms;
}
.pasito-vertical .pasito-exiting {
  width: var(--pill-dot-size);
  height: 0;
}
@media (prefers-reduced-motion: reduce) {
  .pasito-step,
  .pasito-track {
    transition-duration: 0ms !important;
  }
  .pasito-step-filling::after {
    transition-duration: 0ms !important;
  }
}

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
  <script>/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function oa(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function pa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?pa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case qa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=oa(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function ra(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}function ka(a){throw Error("act(...) is not supported in production builds of React.");}var y=Symbol.for("react.element"),qa=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),
ta=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),va=Symbol.for("react.provider"),wa=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),za=Symbol.for("react.memo"),Aa=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},la=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,
b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;la(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},
ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Ba=performance;var v=function(){return Ba.now()}}else{var ma=Date,Ca=ma.now();v=function(){return ma.now()-Ca}}var q=[],r=[],Da=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,na="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&
void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof na)var I=function(){na(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Ea=t.port2;t.port1.onmessage=U;I=function(){Ea.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,
ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,
b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Da++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=
k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):
ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=sa;c.Profiler=ua;c.PureComponent=K;c.StrictMode=ta;c.Suspense=ya;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
t;c.act=ka;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var e=la({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=
Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:wa,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:va,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:xa,
render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:Aa,_payload:{_status:-1,_result:a},_init:ra}};c.memo=function(a,b){return{$$typeof:za,type:a,compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=ka;c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};
c.useEffect=function(a,b){return g.current.useEffect(a,b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};
c.useState=function(a){return g.current.useState(a)};c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.3.1"});
})();
</script>
  <script>/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(Q,zb){"object"===typeof exports&&"undefined"!==typeof module?zb(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],zb):(Q=Q||self,zb(Q.ReactDOM={},Q.React))})(this,function(Q,zb){function m(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function mb(a,b){Ab(a,b);Ab(a+"Capture",b)}function Ab(a,b){$b[a]=b;for(a=0;a<b.length;a++)cg.add(b[a])}function bj(a){if(Zd.call(dg,a))return!0;if(Zd.call(eg,a))return!1;if(cj.test(a))return dg[a]=!0;eg[a]=!0;return!1}function dj(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function ej(a,b,c,d){if(null===
b||"undefined"===typeof b||dj(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function Y(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}function $d(a,b,c,d){var e=R.hasOwnProperty(b)?R[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==
b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])ej(b,c,e,d)&&(c=null),d||null===e?bj(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}function ac(a){if(null===a||"object"!==typeof a)return null;a=fg&&a[fg]||a["@@iterator"];return"function"===typeof a?a:null}function bc(a,b,
c){if(void 0===ae)try{throw Error();}catch(d){ae=(b=d.stack.trim().match(/\\n( *(at )?)/))&&b[1]||""}return"\\n"+ae+a}function be(a,b){if(!a||ce)return"";ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(n){var d=n}Reflect.construct(a,[],b)}else{try{b.call()}catch(n){d=n}a.call(b.prototype)}else{try{throw Error();
}catch(n){d=n}a()}}catch(n){if(n&&d&&"string"===typeof n.stack){for(var e=n.stack.split("\\n"),f=d.stack.split("\\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{ce=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?bc(a):
""}function fj(a){switch(a.tag){case 5:return bc(a.type);case 16:return bc("Lazy");case 13:return bc("Suspense");case 19:return bc("SuspenseList");case 0:case 2:case 15:return a=be(a.type,!1),a;case 11:return a=be(a.type.render,!1),a;case 1:return a=be(a.type,!0),a;default:return""}}function de(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Bb:return"Fragment";case Cb:return"Portal";case ee:return"Profiler";case fe:return"StrictMode";
case ge:return"Suspense";case he:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case gg:return(a.displayName||"Context")+".Consumer";case hg:return(a._context.displayName||"Context")+".Provider";case ie:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case je:return b=a.displayName||null,null!==b?b:de(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return de(a(b))}catch(c){}}return null}function gj(a){var b=a.type;
switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(b);case 8:return b===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";
case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Ua(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}function ig(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===
b)}function hj(a){var b=ig(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Pc(a){a._valueTracker||(a._valueTracker=hj(a))}function jg(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ig(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ke(a,b){var c=b.checked;return E({},b,{defaultChecked:void 0,defaultValue:void 0,
value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function kg(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function lg(a,b){b=b.checked;null!=b&&$d(a,"checked",b,!1)}function le(a,b){lg(a,b);var c=Ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?me(a,b.type,c):b.hasOwnProperty("defaultValue")&&me(a,b.type,Ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function mg(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;
c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function me(a,b,c){if("number"!==b||Qc(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Db(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=
!0)}else{c=""+Ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(m(91));return E({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ng(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(m(92));if(cc(c)){if(1<c.length)throw Error(m(93));
c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ua(c)}}function og(a,b){var c=Ua(b.value),d=Ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function pg(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function qg(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function oe(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?qg(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function rg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||dc.hasOwnProperty(a)&&dc[a]?(""+b).trim():b+"px"}function sg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function pe(a,b){if(b){if(ij[a]&&
(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(m(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(m(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(m(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(m(62));}}function qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function re(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tg(a){if(a=ec(a)){if("function"!==typeof se)throw Error(m(280));var b=a.stateNode;b&&(b=Rc(b),se(a.stateNode,a.type,b))}}function ug(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function vg(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;tg(a);if(b)for(a=0;a<b.length;a++)tg(b[a])}}function wg(a,b,c){if(te)return a(b,c);te=!0;try{return xg(a,b,c)}finally{if(te=
!1,null!==Eb||null!==Fb)yg(),vg()}}function fc(a,b){var c=a.stateNode;if(null===c)return null;var d=Rc(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;
if(c&&"function"!==typeof c)throw Error(m(231,b,typeof c));return c}function jj(a,b,c,d,e,f,g,h,k){gc=!1;Sc=null;kj.apply(lj,arguments)}function mj(a,b,c,d,e,f,g,h,k){jj.apply(this,arguments);if(gc){if(gc){var n=Sc;gc=!1;Sc=null}else throw Error(m(198));Tc||(Tc=!0,ue=n)}}function nb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function zg(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,
null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ag(a){if(nb(a)!==a)throw Error(m(188));}function nj(a){var b=a.alternate;if(!b){b=nb(a);if(null===b)throw Error(m(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ag(e),a;if(f===d)return Ag(e),b;f=f.sibling}throw Error(m(188));}if(c.return!==d.return)c=e,d=f;
else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(m(189));}}if(c.alternate!==d)throw Error(m(190));}if(3!==c.tag)throw Error(m(188));return c.stateNode.current===c?a:b}function Bg(a){a=nj(a);return null!==a?Cg(a):null}function Cg(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Cg(a);if(null!==b)return b;a=a.sibling}return null}
function oj(a,b){if(Ca&&"function"===typeof Ca.onCommitFiberRoot)try{Ca.onCommitFiberRoot(Uc,a,void 0,128===(a.current.flags&128))}catch(c){}}function pj(a){a>>>=0;return 0===a?32:31-(qj(a)/rj|0)|0}function hc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&
4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Vc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=hc(h):(f&=g,0!==f&&(d=hc(f)))}else g=c&~e,0!==g?d=hc(g):0!==f&&(d=hc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&
(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ta(b),e=1<<c,d|=a[c],b&=~e;return d}function sj(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tj(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-ta(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=sj(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function ve(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Dg(){var a=Wc;Wc<<=1;0===(Wc&4194240)&&(Wc=64);return a}function we(a){for(var b=[],c=0;31>c;c++)b.push(a);
return b}function ic(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-ta(b);a[b]=c}function uj(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-ta(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function xe(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ta(c),e=1<<d;e&b|a[d]&
b&&(a[d]|=b);c&=~e}}function Eg(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}function Fg(a,b){switch(a){case "focusin":case "focusout":Va=null;break;case "dragenter":case "dragleave":Wa=null;break;case "mouseover":case "mouseout":Xa=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function lc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,
nativeEvent:f,targetContainers:[e]},null!==b&&(b=ec(b),null!==b&&Gg(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}function vj(a,b,c,d,e){switch(b){case "focusin":return Va=lc(Va,a,b,c,d,e),!0;case "dragenter":return Wa=lc(Wa,a,b,c,d,e),!0;case "mouseover":return Xa=lc(Xa,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;jc.set(f,lc(jc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,kc.set(f,lc(kc.get(f)||null,a,b,
c,d,e)),!0}return!1}function Hg(a){var b=ob(a.target);if(null!==b){var c=nb(b);if(null!==c)if(b=c.tag,13===b){if(b=zg(c),null!==b){a.blockedOn=b;wj(a.priority,function(){xj(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=ye(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;
var d=new c.constructor(c.type,c);ze=d;c.target.dispatchEvent(d);ze=null}else return b=ec(c),null!==b&&Gg(b),a.blockedOn=c,!1;b.shift()}return!0}function Ig(a,b,c){Xc(a)&&c.delete(b)}function yj(){Ae=!1;null!==Va&&Xc(Va)&&(Va=null);null!==Wa&&Xc(Wa)&&(Wa=null);null!==Xa&&Xc(Xa)&&(Xa=null);jc.forEach(Ig);kc.forEach(Ig)}function mc(a,b){a.blockedOn===b&&(a.blockedOn=null,Ae||(Ae=!0,Jg(Kg,yj)))}function nc(a){if(0<Yc.length){mc(Yc[0],a);for(var b=1;b<Yc.length;b++){var c=Yc[b];c.blockedOn===a&&(c.blockedOn=
null)}}null!==Va&&mc(Va,a);null!==Wa&&mc(Wa,a);null!==Xa&&mc(Xa,a);b=function(b){return mc(b,a)};jc.forEach(b);kc.forEach(b);for(b=0;b<Ya.length;b++)c=Ya[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Ya.length&&(b=Ya[0],null===b.blockedOn);)Hg(b),null===b.blockedOn&&Ya.shift()}function zj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=1,Be(a,b,c,d)}finally{z=e,Gb.transition=f}}function Aj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=4,Be(a,b,c,d)}finally{z=e,Gb.transition=
f}}function Be(a,b,c,d){if(Zc){var e=ye(a,b,c,d);if(null===e)Ce(a,b,d,$c,c),Fg(a,d);else if(vj(e,a,b,c,d))d.stopPropagation();else if(Fg(a,d),b&4&&-1<Bj.indexOf(a)){for(;null!==e;){var f=ec(e);null!==f&&Cj(f);f=ye(a,b,c,d);null===f&&Ce(a,b,d,$c,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Ce(a,b,d,null,c)}}function ye(a,b,c,d){$c=null;a=re(d);a=ob(a);if(null!==a)if(b=nb(a),null===b)a=null;else if(c=b.tag,13===c){a=zg(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===
b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);$c=a;return null}function Lg(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;
case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(Dj()){case De:return 1;case Mg:return 4;case ad:case Ej:return 16;case Ng:return 536870912;default:return 16}default:return 16}}function Og(){if(bd)return bd;
var a,b=Ee,c=b.length,d,e="value"in Za?Za.value:Za.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return bd=e.slice(a,1<d?1-d:void 0)}function cd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function dd(){return!0}function Pg(){return!1}function ka(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;
for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?dd:Pg;this.isPropagationStopped=Pg;return this}E(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=dd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=dd)},persist:function(){},isPersistent:dd});return b}function Fj(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Gj[a])?!!b[a]:!1}function Fe(a){return Fj}function Qg(a,b){switch(a){case "keyup":return-1!==Hj.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function Rg(a){a=a.detail;return"object"===typeof a&&
"data"in a?a.data:null}function Ij(a,b){switch(a){case "compositionend":return Rg(b);case "keypress":if(32!==b.which)return null;Sg=!0;return Tg;case "textInput":return a=b.data,a===Tg&&Sg?null:a;default:return null}}function Jj(a,b){if(Hb)return"compositionend"===a||!Ge&&Qg(a,b)?(a=Og(),bd=Ee=Za=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return Ug&&"ko"!==b.locale?null:b.data;default:return null}}function Vg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Kj[a.type]:"textarea"===b?!0:!1}function Lj(a){if(!Ia)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Wg(a,b,c,d){ug(d);b=ed(b,"onChange");0<b.length&&(c=new He("onChange","change",null,c,d),a.push({event:c,listeners:b}))}function Mj(a){Xg(a,
0)}function fd(a){var b=Ib(a);if(jg(b))return a}function Nj(a,b){if("change"===a)return b}function Yg(){oc&&(oc.detachEvent("onpropertychange",Zg),pc=oc=null)}function Zg(a){if("value"===a.propertyName&&fd(pc)){var b=[];Wg(b,pc,a,re(a));wg(Mj,b)}}function Oj(a,b,c){"focusin"===a?(Yg(),oc=b,pc=c,oc.attachEvent("onpropertychange",Zg)):"focusout"===a&&Yg()}function Pj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return fd(pc)}function Qj(a,b){if("click"===a)return fd(b)}function Rj(a,b){if("input"===
a||"change"===a)return fd(b)}function Sj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function qc(a,b){if(ua(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!Zd.call(b,e)||!ua(a[e],b[e]))return!1}return!0}function $g(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ah(a,b){var c=$g(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;
if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=$g(c)}}function bh(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?bh(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function ch(){for(var a=window,b=Qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;
b=Qc(a.document)}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Tj(a){var b=ch(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&bh(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);
else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=ah(c,f);var g=ah(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),
a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function dh(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Je||null==Jb||Jb!==Qc(d)||(d=Jb,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d=
{anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),rc&&qc(rc,d)||(rc=d,d=ed(Ke,"onSelect"),0<d.length&&(b=new He("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Jb)))}function gd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function hd(a){if(Le[a])return Le[a];if(!Kb[a])return a;var b=Kb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in eh)return Le[a]=b[c];return a}function $a(a,
b){fh.set(a,b);mb(b,[a])}function gh(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;mj(d,b,void 0,a);a.currentTarget=null}function Xg(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;gh(e,h,n);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;
gh(e,h,n);f=k}}}if(Tc)throw a=ue,Tc=!1,ue=null,a;}function B(a,b){var c=b[Me];void 0===c&&(c=b[Me]=new Set);var d=a+"__bubble";c.has(d)||(hh(b,a,2,!1),c.add(d))}function Ne(a,b,c){var d=0;b&&(d|=4);hh(c,a,d,b)}function sc(a){if(!a[id]){a[id]=!0;cg.forEach(function(b){"selectionchange"!==b&&(Uj.has(b)||Ne(b,!1,a),Ne(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[id]||(b[id]=!0,Ne("selectionchange",!1,b))}}function hh(a,b,c,d,e){switch(Lg(b)){case 1:e=zj;break;case 4:e=Aj;break;default:e=
Be}c=e.bind(null,b,c,a);e=void 0;!Oe||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function Ce(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;
if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=ob(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}wg(function(){var d=f,e=re(c),g=[];a:{var h=fh.get(a);if(void 0!==h){var k=He,m=a;switch(a){case "keypress":if(0===cd(c))break a;case "keydown":case "keyup":k=Vj;break;case "focusin":m="focus";k=Pe;break;case "focusout":m="blur";k=Pe;break;case "beforeblur":case "afterblur":k=Pe;break;
case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=ih;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=Wj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Xj;break;case jh:case kh:case lh:k=Yj;break;case mh:k=Zj;break;case "scroll":k=ak;break;case "wheel":k=bk;break;case "copy":case "cut":case "paste":k=
ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=nh}var l=0!==(b&4),p=!l&&"scroll"===a,w=l?null!==h?h+"Capture":null:h;l=[];for(var A=d,t;null!==A;){t=A;var M=t.stateNode;5===t.tag&&null!==M&&(t=M,null!==w&&(M=fc(A,w),null!=M&&l.push(tc(A,M,t))));if(p)break;A=A.return}0<l.length&&(h=new k(h,m,null,c,e),g.push({event:h,listeners:l}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===
a;k="mouseout"===a||"pointerout"===a;if(h&&c!==ze&&(m=c.relatedTarget||c.fromElement)&&(ob(m)||m[Ja]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(m=c.relatedTarget||c.toElement,k=d,m=m?ob(m):null,null!==m&&(p=nb(m),m!==p||5!==m.tag&&6!==m.tag))m=null}else k=null,m=d;if(k!==m){l=ih;M="onMouseLeave";w="onMouseEnter";A="mouse";if("pointerout"===a||"pointerover"===a)l=nh,M="onPointerLeave",w="onPointerEnter",A="pointer";p=null==k?h:Ib(k);t=null==
m?h:Ib(m);h=new l(M,A+"leave",k,c,e);h.target=p;h.relatedTarget=t;M=null;ob(e)===d&&(l=new l(w,A+"enter",m,c,e),l.target=t,l.relatedTarget=p,M=l);p=M;if(k&&m)b:{l=k;w=m;A=0;for(t=l;t;t=Lb(t))A++;t=0;for(M=w;M;M=Lb(M))t++;for(;0<A-t;)l=Lb(l),A--;for(;0<t-A;)w=Lb(w),t--;for(;A--;){if(l===w||null!==w&&l===w.alternate)break b;l=Lb(l);w=Lb(w)}l=null}else l=null;null!==k&&oh(g,h,k,l,!1);null!==m&&null!==p&&oh(g,p,m,l,!0)}}}a:{h=d?Ib(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===
k&&"file"===h.type)var ma=Nj;else if(Vg(h))if(ph)ma=Rj;else{ma=Pj;var va=Oj}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(ma=Qj);if(ma&&(ma=ma(a,d))){Wg(g,ma,c,e);break a}va&&va(a,h,d);"focusout"===a&&(va=h._wrapperState)&&va.controlled&&"number"===h.type&&me(h,"number",h.value)}va=d?Ib(d):window;switch(a){case "focusin":if(Vg(va)||"true"===va.contentEditable)Jb=va,Ke=d,rc=null;break;case "focusout":rc=Ke=Jb=null;break;case "mousedown":Je=!0;break;case "contextmenu":case "mouseup":case "dragend":Je=
!1;dh(g,c,e);break;case "selectionchange":if(dk)break;case "keydown":case "keyup":dh(g,c,e)}var ab;if(Ge)b:{switch(a){case "compositionstart":var da="onCompositionStart";break b;case "compositionend":da="onCompositionEnd";break b;case "compositionupdate":da="onCompositionUpdate";break b}da=void 0}else Hb?Qg(a,c)&&(da="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(da="onCompositionStart");da&&(Ug&&"ko"!==c.locale&&(Hb||"onCompositionStart"!==da?"onCompositionEnd"===da&&Hb&&(ab=Og()):(Za=e,Ee=
"value"in Za?Za.value:Za.textContent,Hb=!0)),va=ed(d,da),0<va.length&&(da=new qh(da,a,null,c,e),g.push({event:da,listeners:va}),ab?da.data=ab:(ab=Rg(c),null!==ab&&(da.data=ab))));if(ab=ek?Ij(a,c):Jj(a,c))d=ed(d,"onBeforeInput"),0<d.length&&(e=new fk("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=ab)}Xg(g,b)})}function tc(a,b,c){return{instance:a,listener:b,currentTarget:c}}function ed(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==
f&&(e=f,f=fc(a,c),null!=f&&d.unshift(tc(a,f,e)),f=fc(a,b),null!=f&&d.push(tc(a,f,e)));a=a.return}return d}function Lb(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}function oh(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,n=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==n&&(h=n,e?(k=fc(c,f),null!=k&&g.unshift(tc(c,k,h))):e||(k=fc(c,f),null!=k&&g.push(tc(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function rh(a){return("string"===
typeof a?a:""+a).replace(gk,"\\n").replace(hk,"")}function jd(a,b,c,d){b=rh(b);if(rh(a)!==b&&c)throw Error(m(425));}function kd(){}function Qe(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function ik(a){setTimeout(function(){throw a;})}function Re(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=
e.data,"/$"===c){if(0===d){a.removeChild(e);nc(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);nc(b)}function Ka(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function sh(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function ob(a){var b=a[Da];
if(b)return b;for(var c=a.parentNode;c;){if(b=c[Ja]||c[Da]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sh(a);null!==a;){if(c=a[Da])return c;a=sh(a)}return b}a=c;c=a.parentNode}return null}function ec(a){a=a[Da]||a[Ja];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Ib(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(m(33));}function Rc(a){return a[uc]||null}function bb(a){return{current:a}}function v(a,b){0>Mb||(a.current=Se[Mb],Se[Mb]=null,Mb--)}
function y(a,b,c){Mb++;Se[Mb]=a.current;a.current=b}function Nb(a,b){var c=a.type.contextTypes;if(!c)return cb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function ea(a){a=a.childContextTypes;return null!==a&&void 0!==a}function th(a,b,c){if(J.current!==cb)throw Error(m(168));
y(J,b);y(S,c)}function uh(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(m(108,gj(a)||"Unknown",e));return E({},c,d)}function ld(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||cb;pb=J.current;y(J,a);y(S,S.current);return!0}function vh(a,b,c){var d=a.stateNode;if(!d)throw Error(m(169));c?(a=uh(a,b,pb),d.__reactInternalMemoizedMergedChildContext=a,v(S),v(J),y(J,a)):v(S);
y(S,c)}function wh(a){null===La?La=[a]:La.push(a)}function jk(a){md=!0;wh(a)}function db(){if(!Te&&null!==La){Te=!0;var a=0,b=z;try{var c=La;for(z=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}La=null;md=!1}catch(e){throw null!==La&&(La=La.slice(a+1)),xh(De,db),e;}finally{z=b,Te=!1}}return null}function qb(a,b){Ob[Pb++]=nd;Ob[Pb++]=od;od=a;nd=b}function yh(a,b,c){na[oa++]=Ma;na[oa++]=Na;na[oa++]=rb;rb=a;var d=Ma;a=Na;var e=32-ta(d)-1;d&=~(1<<e);c+=1;var f=32-ta(b)+e;if(30<f){var g=e-e%5;
f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Ma=1<<32-ta(b)+e|c<<e|d;Na=f+a}else Ma=1<<f|c<<e|d,Na=a}function Ue(a){null!==a.return&&(qb(a,1),yh(a,1,0))}function Ve(a){for(;a===od;)od=Ob[--Pb],Ob[Pb]=null,nd=Ob[--Pb],Ob[Pb]=null;for(;a===rb;)rb=na[--oa],na[oa]=null,Na=na[--oa],na[oa]=null,Ma=na[--oa],na[oa]=null}function zh(a,b){var c=pa(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ah(a,b){switch(a.tag){case 5:var c=
a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,la=a,fa=Ka(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,la=a,fa=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==rb?{id:Ma,overflow:Na}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pa(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,la=a,fa=null,!0):!1;default:return!1}}function We(a){return 0!==
(a.mode&1)&&0===(a.flags&128)}function Xe(a){if(D){var b=fa;if(b){var c=b;if(!Ah(a,b)){if(We(a))throw Error(m(418));b=Ka(c.nextSibling);var d=la;b&&Ah(a,b)?zh(d,c):(a.flags=a.flags&-4097|2,D=!1,la=a)}}else{if(We(a))throw Error(m(418));a.flags=a.flags&-4097|2;D=!1;la=a}}}function Bh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;la=a}function pd(a){if(a!==la)return!1;if(!D)return Bh(a),D=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Qe(a.type,
a.memoizedProps));if(b&&(b=fa)){if(We(a)){for(a=fa;a;)a=Ka(a.nextSibling);throw Error(m(418));}for(;b;)zh(a,b),b=Ka(b.nextSibling)}Bh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(m(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){fa=Ka(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}fa=null}}else fa=la?Ka(a.stateNode.nextSibling):null;return!0}function Qb(){fa=la=null;D=!1}function Ye(a){null===
wa?wa=[a]:wa.push(a)}function vc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(m(309));var d=c.stateNode}if(!d)throw Error(m(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(m(284));if(!c._owner)throw Error(m(290,a));}return a}function qd(a,b){a=
Object.prototype.toString.call(b);throw Error(m(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ch(a){var b=a._init;return b(a._payload)}function Dh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=eb(a,b);a.index=
0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ze(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===Bb)return l(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ta&&
Ch(f)===b.type))return d=e(b,c.props),d.ref=vc(a,b,c),d.return=a,d;d=rd(c.type,c.key,c.props,null,a.mode,d);d.ref=vc(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=$e(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=sb(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function u(a,b,c){if("string"===
typeof b&&""!==b||"number"===typeof b)return b=Ze(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sd:return c=rd(b.type,b.key,b.props,null,a.mode,c),c.ref=vc(a,null,b),c.return=a,c;case Cb:return b=$e(b,a.mode,c),b.return=a,b;case Ta:var d=b._init;return u(a,d(b._payload),c)}if(cc(b)||ac(b))return b=sb(b,a.mode,c,null),b.return=a,b;qd(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==
e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sd:return c.key===e?k(a,b,c,d):null;case Cb:return c.key===e?n(a,b,c,d):null;case Ta:return e=c._init,r(a,b,e(c._payload),d)}if(cc(c)||ac(c))return null!==e?null:l(a,b,c,d,null);qd(a,c)}return null}function p(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sd:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,
e);case Cb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e);case Ta:var f=d._init;return p(a,b,c,f(d._payload),e)}if(cc(d)||ac(d))return a=a.get(c)||null,l(b,a,d,e,null);qd(b,d)}return null}function x(e,g,h,k){for(var n=null,m=null,l=g,t=g=0,q=null;null!==l&&t<h.length;t++){l.index>t?(q=l,l=null):q=l.sibling;var A=r(e,l,h[t],k);if(null===A){null===l&&(l=q);break}a&&l&&null===A.alternate&&b(e,l);g=f(A,g,t);null===m?n=A:m.sibling=A;m=A;l=q}if(t===h.length)return c(e,l),D&&qb(e,t),n;if(null===l){for(;t<
h.length;t++)l=u(e,h[t],k),null!==l&&(g=f(l,g,t),null===m?n=l:m.sibling=l,m=l);D&&qb(e,t);return n}for(l=d(e,l);t<h.length;t++)q=p(l,e,t,h[t],k),null!==q&&(a&&null!==q.alternate&&l.delete(null===q.key?t:q.key),g=f(q,g,t),null===m?n=q:m.sibling=q,m=q);a&&l.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function I(e,g,h,k){var n=ac(h);if("function"!==typeof n)throw Error(m(150));h=n.call(h);if(null==h)throw Error(m(151));for(var l=n=null,q=g,t=g=0,A=null,w=h.next();null!==q&&!w.done;t++,w=
h.next()){q.index>t?(A=q,q=null):A=q.sibling;var x=r(e,q,w.value,k);if(null===x){null===q&&(q=A);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,t);null===l?n=x:l.sibling=x;l=x;q=A}if(w.done)return c(e,q),D&&qb(e,t),n;if(null===q){for(;!w.done;t++,w=h.next())w=u(e,w.value,k),null!==w&&(g=f(w,g,t),null===l?n=w:l.sibling=w,l=w);D&&qb(e,t);return n}for(q=d(e,q);!w.done;t++,w=h.next())w=p(q,e,t,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?t:w.key),g=f(w,g,t),null===l?n=w:l.sibling=
w,l=w);a&&q.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function v(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Bb&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case sd:a:{for(var k=f.key,n=d;null!==n;){if(n.key===k){k=f.type;if(k===Bb){if(7===n.tag){c(a,n.sibling);d=e(n,f.props.children);d.return=a;a=d;break a}}else if(n.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ta&&Ch(k)===n.type){c(a,n.sibling);d=e(n,f.props);d.ref=vc(a,
n,f);d.return=a;a=d;break a}c(a,n);break}else b(a,n);n=n.sibling}f.type===Bb?(d=sb(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=rd(f.type,f.key,f.props,null,a.mode,h),h.ref=vc(a,d,f),h.return=a,a=h)}return g(a);case Cb:a:{for(n=f.key;null!==d;){if(d.key===n)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=$e(f,a.mode,h);d.return=a;
a=d}return g(a);case Ta:return n=f._init,v(a,d,n(f._payload),h)}if(cc(f))return x(a,d,f,h);if(ac(f))return I(a,d,f,h);qd(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ze(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return v}function af(){bf=Rb=td=null}function cf(a,b){b=ud.current;v(ud);a._currentValue=b}function df(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=
b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Sb(a,b){td=a;bf=Rb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ha=!0),a.firstContext=null)}function qa(a){var b=a._currentValue;if(bf!==a)if(a={context:a,memoizedValue:b,next:null},null===Rb){if(null===td)throw Error(m(308));Rb=a;td.dependencies={lanes:0,firstContext:a}}else Rb=Rb.next=a;return b}function ef(a){null===tb?tb=[a]:tb.push(a)}function Eh(a,b,c,d){var e=b.interleaved;
null===e?(c.next=c,ef(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Oa(a,d)}function Oa(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}function ff(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue=
{baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Pa(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function fb(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(p&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return kk(a,c)}e=d.interleaved;null===e?(b.next=b,ef(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Oa(a,c)}function vd(a,b,c){b=
b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Gh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,
shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}function wd(a,b,c,d){var e=a.updateQueue;gb=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,n=k.next;k.next=null;null===g?f=n:g.next=n;g=k;var l=a.alternate;null!==l&&(l=l.updateQueue,h=l.lastBaseUpdate,h!==g&&(null===h?l.firstBaseUpdate=n:h.next=n,l.lastBaseUpdate=k))}if(null!==f){var m=e.baseState;g=0;l=
n=k=null;h=f;do{var r=h.lane,p=h.eventTime;if((d&r)===r){null!==l&&(l=l.next={eventTime:p,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var x=a,v=h;r=b;p=c;switch(v.tag){case 1:x=v.payload;if("function"===typeof x){m=x.call(p,m,r);break a}m=x;break a;case 3:x.flags=x.flags&-65537|128;case 0:x=v.payload;r="function"===typeof x?x.call(p,m,r):x;if(null===r||void 0===r)break a;m=E({},m,r);break a;case 2:gb=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=
[h]:r.push(h))}else p={eventTime:p,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===l?(n=l=p,k=m):l=l.next=p,g|=r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===l&&(k=m);e.baseState=k;e.firstBaseUpdate=n;e.lastBaseUpdate=l;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);ra|=g;a.lanes=g;a.memoizedState=m}}function Hh(a,
b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(m(191,e));e.call(d)}}}function ub(a){if(a===wc)throw Error(m(174));return a}function gf(a,b){y(xc,b);y(yc,a);y(Ea,wc);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:oe(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=oe(b,a)}v(Ea);y(Ea,b)}function Tb(a){v(Ea);v(yc);v(xc)}function Ih(a){ub(xc.current);
var b=ub(Ea.current);var c=oe(b,a.type);b!==c&&(y(yc,a),y(Ea,c))}function hf(a){yc.current===a&&(v(Ea),v(yc))}function xd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=
b.return;b=b.sibling}return null}function jf(){for(var a=0;a<kf.length;a++)kf[a]._workInProgressVersionPrimary=null;kf.length=0}function V(){throw Error(m(321));}function lf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ua(a[c],b[c]))return!1;return!0}function mf(a,b,c,d,e,f){vb=f;C=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;yd.current=null===a||null===a.memoizedState?lk:mk;a=c(d,e);if(zc){f=0;do{zc=!1;Ac=0;if(25<=f)throw Error(m(301));f+=1;N=K=null;b.updateQueue=null;
yd.current=nk;a=c(d,e)}while(zc)}yd.current=zd;b=null!==K&&null!==K.next;vb=0;N=K=C=null;Ad=!1;if(b)throw Error(m(300));return a}function nf(){var a=0!==Ac;Ac=0;return a}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===N?C.memoizedState=N=a:N=N.next=a;return N}function sa(){if(null===K){var a=C.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===N?C.memoizedState:N.next;if(null!==b)N=b,K=a;else{if(null===a)throw Error(m(310));K=a;
a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===N?C.memoizedState=N=a:N=N.next=a}return N}function Bc(a,b){return"function"===typeof b?b(a):b}function of(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,n=f;do{var l=n.lane;if((vb&
l)===l)null!==k&&(k=k.next={lane:0,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null}),d=n.hasEagerState?n.eagerState:a(d,n.action);else{var u={lane:l,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null};null===k?(h=k=u,g=d):k=k.next=u;C.lanes|=l;ra|=l}n=n.next}while(null!==n&&n!==f);null===k?g=d:k.next=h;ua(d,b.memoizedState)||(ha=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=
e.lane,C.lanes|=f,ra|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function pf(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);ua(f,b.memoizedState)||(ha=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Jh(a,b,c){}function Kh(a,b,c){c=C;var d=sa(),
e=b(),f=!ua(d.memoizedState,e);f&&(d.memoizedState=e,ha=!0);d=d.queue;qf(Lh.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==N&&N.memoizedState.tag&1){c.flags|=2048;Cc(9,Mh.bind(null,c,d,e,b),void 0,null);if(null===O)throw Error(m(349));0!==(vb&30)||Nh(c,b,e)}return e}function Nh(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function Mh(a,b,c,d){b.value=c;b.getSnapshot=
d;Oh(b)&&Ph(a)}function Lh(a,b,c){return c(function(){Oh(b)&&Ph(a)})}function Oh(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!ua(a,c)}catch(d){return!0}}function Ph(a){var b=Oa(a,1);null!==b&&xa(b,a,1,-1)}function Qh(a){var b=Fa();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:a};b.queue=a;a=a.dispatch=ok.bind(null,C,a);return[b.memoizedState,a]}function Cc(a,b,c,d){a={tag:a,create:b,
destroy:c,deps:d,next:null};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Rh(a){return sa().memoizedState}function Bd(a,b,c,d){var e=Fa();C.flags|=a;e.memoizedState=Cc(1|b,c,void 0,void 0===d?null:d)}function Cd(a,b,c,d){var e=sa();d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&lf(d,g.deps)){e.memoizedState=
Cc(b,c,f,d);return}}C.flags|=a;e.memoizedState=Cc(1|b,c,f,d)}function Sh(a,b){return Bd(8390656,8,a,b)}function qf(a,b){return Cd(2048,8,a,b)}function Th(a,b){return Cd(4,2,a,b)}function Uh(a,b){return Cd(4,4,a,b)}function Vh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Wh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Cd(4,4,Vh.bind(null,b,a),c)}function rf(a,b){}function Xh(a,b){var c=
sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Yh(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Zh(a,b,c){if(0===(vb&21))return a.baseState&&(a.baseState=!1,ha=!0),a.memoizedState=c;ua(c,b)||(c=Dg(),C.lanes|=c,ra|=c,a.baseState=!0);return b}function pk(a,b,c){c=z;z=0!==c&&4>c?c:4;a(!0);var d=sf.transition;sf.transition=
{};try{a(!1),b()}finally{z=c,sf.transition=d}}function $h(){return sa().memoizedState}function qk(a,b,c){var d=hb(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,c);else if(c=Eh(a,b,c,d),null!==c){var e=Z();xa(c,a,d,e);ci(c,b,d)}}function ok(a,b,c){var d=hb(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(ua(h,g)){var k=b.interleaved;null===k?(e.next=e,ef(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(n){}finally{}c=Eh(a,b,e,d);null!==c&&(e=Z(),xa(c,a,d,e),ci(c,b,d))}}function ai(a){var b=a.alternate;return a===C||null!==b&&b===C}function bi(a,b){zc=Ad=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function ci(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function ya(a,b){if(a&&
a.defaultProps){b=E({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function tf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:E({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}function di(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}function ei(a,b,c){var d=!1,e=cb;var f=b.contextType;"object"===typeof f&&
null!==f?f=qa(f):(e=ea(b)?pb:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Nb(a,e):cb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Dd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function fi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Dd.enqueueReplaceState(b,b.state,null)}function uf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};ff(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=qa(f):(f=ea(b)?pb:J.current,e.context=Nb(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(tf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==
typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Dd.enqueueReplaceState(e,e.state,null),wd(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ub(a,b){try{var c="",d=b;do c+=fj(d),d=d.return;while(d);var e=c}catch(f){e="\\nError generating stack: "+f.message+
"\\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function vf(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function wf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function gi(a,b,c){c=Pa(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ed||(Ed=!0,xf=d);wf(a,b)};return c}function hi(a,b,c){c=Pa(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};
c.callback=function(){wf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){wf(a,b);"function"!==typeof d&&(null===ib?ib=new Set([this]):ib.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ii(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new rk;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=sk.bind(null,a,b,c),b.then(a,a))}function ji(a){do{var b;
if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}function ki(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Pa(-1,1),b.tag=2,fb(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function aa(a,b,c,d){b.child=null===a?li(b,null,c,d):Vb(b,a.child,c,d)}function mi(a,b,c,d,e){c=c.render;var f=b.ref;Sb(b,e);d=mf(a,b,c,d,f,
e);c=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&c&&Ue(b);b.flags|=1;aa(a,b,d,e);return b.child}function ni(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!yf(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,oi(a,b,f,d,e);a=rd(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:qc;if(c(g,d)&&a.ref===
b.ref)return Qa(a,b,e)}b.flags|=1;a=eb(f,d);a.ref=b.ref;a.return=b;return b.child=a}function oi(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(qc(f,d)&&a.ref===b.ref)if(ha=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(ha=!0);else return b.lanes=a.lanes,Qa(a,b,e)}return zf(a,b,c,d,e)}function pi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},y(Ga,ba),ba|=c;
else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,y(Ga,ba),ba|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;y(Ga,ba);ba|=d}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,y(Ga,ba),ba|=d;aa(a,b,e,c);return b.child}function qi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function zf(a,
b,c,d,e){var f=ea(c)?pb:J.current;f=Nb(b,f);Sb(b,e);c=mf(a,b,c,d,f,e);d=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&d&&Ue(b);b.flags|=1;aa(a,b,c,e);return b.child}function ri(a,b,c,d,e){if(ea(c)){var f=!0;ld(b)}else f=!1;Sb(b,e);if(null===b.stateNode)Fd(a,b),ei(b,c,d),uf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=qa(n):(n=ea(c)?pb:J.current,n=Nb(b,
n));var l=c.getDerivedStateFromProps,m="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate;m||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==n)&&fi(b,g,d,n);gb=!1;var r=b.memoizedState;g.state=r;wd(b,d,g,e);k=b.memoizedState;h!==d||r!==k||S.current||gb?("function"===typeof l&&(tf(b,c,l,d),k=b.memoizedState),(h=gb||di(b,c,h,d,r,k,n))?(m||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Fh(a,b);h=b.memoizedProps;n=b.type===b.elementType?h:ya(b.type,h);g.props=
n;m=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=qa(k):(k=ea(c)?pb:J.current,k=Nb(b,k));var p=c.getDerivedStateFromProps;(l="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==m||r!==k)&&fi(b,g,d,k);gb=!1;r=b.memoizedState;g.state=r;wd(b,d,g,e);var x=b.memoizedState;h!==m||r!==x||S.current||gb?("function"===typeof p&&(tf(b,c,p,d),x=b.memoizedState),
(n=gb||di(b,c,n,d,r,x,k)||!1)?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=
4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=n):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return Af(a,b,c,d,f,e)}function Af(a,b,c,d,e,f){qi(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&vh(b,c,!1),
Qa(a,b,f);d=b.stateNode;tk.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Vb(b,a.child,null,f),b.child=Vb(b,null,h,f)):aa(a,b,h,f);b.memoizedState=d.state;e&&vh(b,c,!0);return b.child}function si(a){var b=a.stateNode;b.pendingContext?th(a,b.pendingContext,b.pendingContext!==b.context):b.context&&th(a,b.context,!1);gf(a,b.containerInfo)}function ti(a,b,c,d,e){Qb();Ye(e);b.flags|=256;aa(a,b,c,d);return b.child}function Bf(a){return{baseLanes:a,
cachePool:null,transitions:null}}function ui(a,b,c){var d=b.pendingProps,e=F.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(F,e&1);if(null===a){Xe(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==
f?(f.childLanes=0,f.pendingProps=g):f=Gd(g,d,0,null),a=sb(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=Bf(c),b.memoizedState=Cf,a):Df(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return uk(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=eb(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=eb(h,f):(f=
sb(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?Bf(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=Cf;return d}f=a.child;a=f.sibling;d=eb(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function Df(a,b,c){b=Gd({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function Hd(a,b,c,d){null!==d&&Ye(d);Vb(b,a.child,null,c);a=Df(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}function uk(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=vf(Error(m(422))),Hd(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=Gd({mode:"visible",children:d.children},e,0,null);f=sb(f,e,g,null);f.flags|=2;d.return=
b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Vb(b,a.child,null,g);b.child.memoizedState=Bf(g);b.memoizedState=Cf;return f}if(0===(b.mode&1))return Hd(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(m(419));d=vf(f,d,void 0);return Hd(a,b,g,d)}h=0!==(g&a.childLanes);if(ha||h){d=O;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=
32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Oa(a,e),xa(d,a,e,-1))}Ef();d=vf(Error(m(421)));return Hd(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vk.bind(null,a),e._reactRetry=b,null;a=f.treeContext;fa=Ka(e.nextSibling);la=b;D=!0;wa=null;null!==a&&(na[oa++]=Ma,na[oa++]=Na,na[oa++]=rb,Ma=a.id,Na=a.overflow,rb=b);b=Df(b,d.children);b.flags|=4096;return b}function vi(a,b,c){a.lanes|=b;var d=a.alternate;
null!==d&&(d.lanes|=b);df(a.return,b,c)}function Ff(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function wi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;aa(a,b,d.children,c);d=F.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&
vi(a,c,b);else if(19===a.tag)vi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(F,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===xd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ff(b,!1,e,c,f);break;case "backwards":c=
null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===xd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ff(b,!0,c,null,f);break;case "together":Ff(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fd(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Qa(a,b,c){null!==a&&(b.dependencies=a.dependencies);ra|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(m(153));if(null!==
b.child){a=b.child;c=eb(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=eb(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function wk(a,b,c){switch(b.tag){case 3:si(b);Qb();break;case 5:Ih(b);break;case 1:ea(b.type)&&ld(b);break;case 4:gf(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;y(ud,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(F,F.current&
1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return ui(a,b,c);y(F,F.current&1);a=Qa(a,b,c);return null!==a?a.sibling:null}y(F,F.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return wi(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(F,F.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,pi(a,b,c)}return Qa(a,b,c)}function Dc(a,b){if(!D)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==
b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,
d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}function xk(a,b,c){var d=b.pendingProps;Ve(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return ea(b.type)&&(v(S),v(J)),W(b),null;case 3:d=b.stateNode;Tb();v(S);v(J);jf();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)pd(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&
256)||(b.flags|=1024,null!==wa&&(Gf(wa),wa=null));xi(a,b);W(b);return null;case 5:hf(b);var e=ub(xc.current);c=b.type;if(null!==a&&null!=b.stateNode)yk(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(m(166));W(b);return null}a=ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Da]=b;d[uc]=f;a=0!==(b.mode&1);switch(c){case "dialog":B("cancel",d);B("close",d);break;case "iframe":case "object":case "embed":B("load",d);break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],d);break;case "source":B("error",d);break;case "img":case "image":case "link":B("error",d);B("load",d);break;case "details":B("toggle",d);break;case "input":kg(d,f);B("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};B("invalid",d);break;case "textarea":ng(d,f),B("invalid",d)}pe(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&
jd(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&jd(d.textContent,h,a),e=["children",""+h]):$b.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&B("scroll",d)}switch(c){case "input":Pc(d);mg(d,f,!0);break;case "textarea":Pc(d);pg(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=kd)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===
a&&(a=qg(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Da]=b;a[uc]=d;zk(a,b,!1,!1);b.stateNode=a;a:{g=qe(c,d);switch(c){case "dialog":B("cancel",a);B("close",a);e=d;break;case "iframe":case "object":case "embed":B("load",a);e=d;break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],a);e=d;break;case "source":B("error",a);e=d;break;case "img":case "image":case "link":B("error",a);B("load",a);e=d;break;case "details":B("toggle",a);e=d;break;case "input":kg(a,d);e=ke(a,d);B("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=E({},d,{value:void 0});B("invalid",a);break;case "textarea":ng(a,d);e=ne(a,d);B("invalid",a);break;default:e=d}pe(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=
h[f];"style"===f?sg(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&yi(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&Fc(a,k):"number"===typeof k&&Fc(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&($b.hasOwnProperty(f)?null!=k&&"onScroll"===f&&B("scroll",a):null!=k&&$d(a,f,k,g))}switch(c){case "input":Pc(a);mg(a,d,!1);break;case "textarea":Pc(a);pg(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ua(d.value));
break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?Db(a,!!d.multiple,f,!1):null!=d.defaultValue&&Db(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=kd)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}W(b);return null;case 6:if(a&&null!=b.stateNode)Ak(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===
b.stateNode)throw Error(m(166));c=ub(xc.current);ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.memoizedProps;d[Da]=b;if(f=d.nodeValue!==c)if(a=la,null!==a)switch(a.tag){case 3:jd(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&jd(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Da]=b,b.stateNode=d}W(b);return null;case 13:v(F);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(D&&
null!==fa&&0!==(b.mode&1)&&0===(b.flags&128)){for(f=fa;f;)f=Ka(f.nextSibling);Qb();b.flags|=98560;f=!1}else if(f=pd(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(m(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(m(317));f[Da]=b}else Qb(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);f=!1}else null!==wa&&(Gf(wa),wa=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&
d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(F.current&1)?0===L&&(L=3):Ef()));null!==b.updateQueue&&(b.flags|=4);W(b);return null;case 4:return Tb(),xi(a,b),null===a&&sc(b.stateNode.containerInfo),W(b),null;case 10:return cf(b.type._context),W(b),null;case 17:return ea(b.type)&&(v(S),v(J)),W(b),null;case 19:v(F);f=b.memoizedState;if(null===f)return W(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dc(f,!1);else{if(0!==L||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=
xd(a);if(null!==g){b.flags|=128;Dc(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,
f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;y(F,F.current&1|2);return b.child}a=a.sibling}null!==f.tail&&P()>Hf&&(b.flags|=128,d=!0,Dc(f,!1),b.lanes=4194304)}else{if(!d)if(a=xd(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dc(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!D)return W(b),null}else 2*P()-f.renderingStartTime>Hf&&1073741824!==c&&(b.flags|=
128,d=!0,Dc(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=P(),b.sibling=null,c=F.current,y(F,d?c&1|2:c&1),b;W(b);return null;case 22:case 23:return ba=Ga.current,v(Ga),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(ba&1073741824)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),null;case 24:return null;
case 25:return null}throw Error(m(156,b.tag));}function Bk(a,b,c){Ve(b);switch(b.tag){case 1:return ea(b.type)&&(v(S),v(J)),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Tb(),v(S),v(J),jf(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return hf(b),null;case 13:v(F);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(m(340));Qb()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return v(F),null;case 4:return Tb(),
null;case 10:return cf(b.type._context),null;case 22:case 23:return ba=Ga.current,v(Ga),null;case 24:return null;default:return null}}function Wb(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){G(a,b,d)}else c.current=null}function If(a,b,c){try{c()}catch(d){G(a,b,d)}}function Ck(a,b){Jf=Zc;a=ch();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();
if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(M){c=null;break a}var g=0,h=-1,k=-1,n=0,q=0,u=a,r=null;b:for(;;){for(var p;;){u!==c||0!==e&&3!==u.nodeType||(h=g+e);u!==f||0!==d&&3!==u.nodeType||(k=g+d);3===u.nodeType&&(g+=u.nodeValue.length);if(null===(p=u.firstChild))break;r=u;u=p}for(;;){if(u===a)break b;r===c&&++n===e&&(h=g);r===f&&++q===d&&(k=g);if(null!==(p=u.nextSibling))break;u=r;r=u.parentNode}u=p}c=-1===h||-1===k?null:
{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Kf={focusedElem:a,selectionRange:c};Zc=!1;for(l=b;null!==l;)if(b=l,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,l=a;else for(;null!==l;){b=l;try{var x=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==x){var v=x.memoizedProps,z=x.memoizedState,w=b.stateNode,A=w.getSnapshotBeforeUpdate(b.elementType===b.type?v:ya(b.type,v),z);w.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var t=
b.stateNode.containerInfo;1===t.nodeType?t.textContent="":9===t.nodeType&&t.documentElement&&t.removeChild(t.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163));}}catch(M){G(b,b.return,M)}a=b.sibling;if(null!==a){a.return=b.return;l=a;break}l=b.return}x=zi;zi=!1;return x}function Gc(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&If(b,c,f)}e=e.next}while(e!==d)}}
function Id(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Lf(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}function Ai(a){var b=a.alternate;null!==b&&(a.alternate=null,Ai(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Da],delete b[uc],delete b[Me],delete b[Dk],
delete b[Ek]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Bi(a){return 5===a.tag||3===a.tag||4===a.tag}function Ci(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Bi(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&
2))return a.stateNode}}function Mf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=kd));else if(4!==d&&(a=a.child,null!==a))for(Mf(a,b,c),a=a.sibling;null!==a;)Mf(a,b,c),a=a.sibling}function Nf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);
else if(4!==d&&(a=a.child,null!==a))for(Nf(a,b,c),a=a.sibling;null!==a;)Nf(a,b,c),a=a.sibling}function jb(a,b,c){for(c=c.child;null!==c;)Di(a,b,c),c=c.sibling}function Di(a,b,c){if(Ca&&"function"===typeof Ca.onCommitFiberUnmount)try{Ca.onCommitFiberUnmount(Uc,c)}catch(h){}switch(c.tag){case 5:X||Wb(c,b);case 6:var d=T,e=za;T=null;jb(a,b,c);T=d;za=e;null!==T&&(za?(a=T,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):T.removeChild(c.stateNode));break;case 18:null!==T&&(za?
(a=T,c=c.stateNode,8===a.nodeType?Re(a.parentNode,c):1===a.nodeType&&Re(a,c),nc(a)):Re(T,c.stateNode));break;case 4:d=T;e=za;T=c.stateNode.containerInfo;za=!0;jb(a,b,c);T=d;za=e;break;case 0:case 11:case 14:case 15:if(!X&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?If(c,b,g):0!==(f&4)&&If(c,b,g));e=e.next}while(e!==d)}jb(a,b,c);break;case 1:if(!X&&(Wb(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=
c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){G(c,b,h)}jb(a,b,c);break;case 21:jb(a,b,c);break;case 22:c.mode&1?(X=(d=X)||null!==c.memoizedState,jb(a,b,c),X=d):jb(a,b,c);break;default:jb(a,b,c)}}function Ei(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Fk);b.forEach(function(b){var d=Gk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Aa(a,b,c){c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=
c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:T=h.stateNode;za=!1;break a;case 3:T=h.stateNode.containerInfo;za=!0;break a;case 4:T=h.stateNode.containerInfo;za=!0;break a}h=h.return}if(null===T)throw Error(m(160));Di(f,g,e);T=null;za=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(n){G(e,b,n)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Fi(b,a),b=b.sibling}function Fi(a,b,c){var d=a.alternate;c=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Aa(b,a);
Ha(a);if(c&4){try{Gc(3,a,a.return),Id(3,a)}catch(I){G(a,a.return,I)}try{Gc(5,a,a.return)}catch(I){G(a,a.return,I)}}break;case 1:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);break;case 5:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);if(a.flags&32){var e=a.stateNode;try{Fc(e,"")}catch(I){G(a,a.return,I)}}if(c&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==d?d.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&lg(e,f);
qe(h,g);var n=qe(h,f);for(g=0;g<k.length;g+=2){var q=k[g],u=k[g+1];"style"===q?sg(e,u):"dangerouslySetInnerHTML"===q?yi(e,u):"children"===q?Fc(e,u):$d(e,q,u,n)}switch(h){case "input":le(e,f);break;case "textarea":og(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var p=f.value;null!=p?Db(e,!!f.multiple,p,!1):r!==!!f.multiple&&(null!=f.defaultValue?Db(e,!!f.multiple,f.defaultValue,!0):Db(e,!!f.multiple,f.multiple?[]:"",!1))}e[uc]=f}catch(I){G(a,a.return,
I)}}break;case 6:Aa(b,a);Ha(a);if(c&4){if(null===a.stateNode)throw Error(m(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(I){G(a,a.return,I)}}break;case 3:Aa(b,a);Ha(a);if(c&4&&null!==d&&d.memoizedState.isDehydrated)try{nc(b.containerInfo)}catch(I){G(a,a.return,I)}break;case 4:Aa(b,a);Ha(a);break;case 13:Aa(b,a);Ha(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(Of=P()));c&4&&Ei(a);break;case 22:q=
null!==d&&null!==d.memoizedState;a.mode&1?(X=(n=X)||q,Aa(b,a),X=n):Aa(b,a);Ha(a);if(c&8192){n=null!==a.memoizedState;if((a.stateNode.isHidden=n)&&!q&&0!==(a.mode&1))for(l=a,q=a.child;null!==q;){for(u=l=q;null!==l;){r=l;p=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Gc(4,r,r.return);break;case 1:Wb(r,r.return);var x=r.stateNode;if("function"===typeof x.componentWillUnmount){c=r;b=r.return;try{d=c,x.props=d.memoizedProps,x.state=d.memoizedState,x.componentWillUnmount()}catch(I){G(c,b,I)}}break;
case 5:Wb(r,r.return);break;case 22:if(null!==r.memoizedState){Gi(u);continue}}null!==p?(p.return=r,l=p):Gi(u)}q=q.sibling}a:for(q=null,u=a;;){if(5===u.tag){if(null===q){q=u;try{e=u.stateNode,n?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=u.stateNode,k=u.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rg("display",g))}catch(I){G(a,a.return,I)}}}else if(6===u.tag){if(null===q)try{u.stateNode.nodeValue=
n?"":u.memoizedProps}catch(I){G(a,a.return,I)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===a)&&null!==u.child){u.child.return=u;u=u.child;continue}if(u===a)break a;for(;null===u.sibling;){if(null===u.return||u.return===a)break a;q===u&&(q=null);u=u.return}q===u&&(q=null);u.sibling.return=u.return;u=u.sibling}}break;case 19:Aa(b,a);Ha(a);c&4&&Ei(a);break;case 21:break;default:Aa(b,a),Ha(a)}}function Ha(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Bi(c)){var d=c;
break a}c=c.return}throw Error(m(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(Fc(e,""),d.flags&=-33);var f=Ci(a);Nf(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Ci(a);Mf(a,h,g);break;default:throw Error(m(161));}}catch(k){G(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function Hk(a,b,c){l=a;Hi(a,b,c)}function Hi(a,b,c){for(var d=0!==(a.mode&1);null!==l;){var e=l,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jd;if(!g){var h=e.alternate,k=null!==h&&null!==
h.memoizedState||X;h=Jd;var n=X;Jd=g;if((X=k)&&!n)for(l=e;null!==l;)g=l,k=g.child,22===g.tag&&null!==g.memoizedState?Ii(e):null!==k?(k.return=g,l=k):Ii(e);for(;null!==f;)l=f,Hi(f,b,c),f=f.sibling;l=e;Jd=h;X=n}Ji(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,l=f):Ji(a,b,c)}}function Ji(a,b,c){for(;null!==l;){b=l;if(0!==(b.flags&8772)){c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:X||Id(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!X)if(null===c)d.componentDidMount();
else{var e=b.elementType===b.type?c.memoizedProps:ya(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&Hh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}Hh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&
c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var n=b.alternate;if(null!==n){var q=n.memoizedState;if(null!==q){var p=q.dehydrated;null!==p&&nc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163));}X||b.flags&512&&Lf(b)}catch(r){G(b,b.return,r)}}if(b===a){l=null;break}c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Gi(a){for(;null!==l;){var b=l;if(b===
a){l=null;break}var c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Ii(a){for(;null!==l;){var b=l;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Id(4,b)}catch(k){G(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){G(b,e,k)}}var f=b.return;try{Lf(b)}catch(k){G(b,f,k)}break;case 5:var g=b.return;try{Lf(b)}catch(k){G(b,g,k)}}}catch(k){G(b,b.return,k)}if(b===a){l=null;break}var h=b.sibling;
if(null!==h){h.return=b.return;l=h;break}l=b.return}}function Hc(){Hf=P()+500}function Z(){return 0!==(p&6)?P():-1!==Kd?Kd:Kd=P()}function hb(a){if(0===(a.mode&1))return 1;if(0!==(p&2)&&0!==U)return U&-U;if(null!==Ik.transition)return 0===Ld&&(Ld=Dg()),Ld;a=z;if(0!==a)return a;a=window.event;a=void 0===a?16:Lg(a.type);return a}function xa(a,b,c,d){if(50<Ic)throw Ic=0,Pf=null,Error(m(185));ic(a,c,d);if(0===(p&2)||a!==O)a===O&&(0===(p&2)&&(Md|=c),4===L&&kb(a,U)),ia(a,d),1===c&&0===p&&0===(b.mode&1)&&
(Hc(),md&&db())}function ia(a,b){var c=a.callbackNode;tj(a,b);var d=Vc(a,a===O?U:0);if(0===d)null!==c&&Ki(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Ki(c);if(1===b)0===a.tag?jk(Li.bind(null,a)):wh(Li.bind(null,a)),Jk(function(){0===(p&6)&&db()}),c=null;else{switch(Eg(d)){case 1:c=De;break;case 4:c=Mg;break;case 16:c=ad;break;case 536870912:c=Ng;break;default:c=ad}c=Mi(c,Ni.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}function Ni(a,b){Kd=-1;
Ld=0;if(0!==(p&6))throw Error(m(327));var c=a.callbackNode;if(Xb()&&a.callbackNode!==c)return null;var d=Vc(a,a===O?U:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Nd(a,d);else{b=d;var e=p;p|=2;var f=Oi();if(O!==a||U!==b)Ra=null,Hc(),wb(a,b);do try{Kk();break}catch(h){Pi(a,h)}while(1);af();Od.current=f;p=e;null!==H?b=0:(O=null,U=0,b=L)}if(0!==b){2===b&&(e=ve(a),0!==e&&(d=e,b=Qf(a,e)));if(1===b)throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;if(6===b)kb(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Lk(e)&&(b=Nd(a,d),2===b&&(f=ve(a),0!==f&&(d=f,b=Qf(a,f))),1===b))throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(m(345));case 2:xb(a,ja,Ra);break;case 3:kb(a,d);if((d&130023424)===d&&(b=Of+500-P(),10<b)){if(0!==Vc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){Z();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),b);break}xb(a,ja,Ra);break;case 4:kb(a,d);if((d&4194240)===d)break;b=a.eventTimes;
for(e=-1;0<d;){var g=31-ta(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=P()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Mk(d/1960))-d;if(10<d){a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),d);break}xb(a,ja,Ra);break;case 5:xb(a,ja,Ra);break;default:throw Error(m(329));}}}ia(a,P());return a.callbackNode===c?Ni.bind(null,a):null}function Qf(a,b){var c=Kc;a.current.memoizedState.isDehydrated&&(wb(a,b).flags|=256);a=Nd(a,b);2!==a&&(b=ja,ja=c,null!==b&&Gf(b));return a}function Gf(a){null===
ja?ja=a:ja.push.apply(ja,a)}function Lk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!ua(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}function kb(a,b){b&=~Sf;b&=~Md;a.suspendedLanes|=b;a.pingedLanes&=
~b;for(a=a.expirationTimes;0<b;){var c=31-ta(b),d=1<<c;a[c]=-1;b&=~d}}function Li(a){if(0!==(p&6))throw Error(m(327));Xb();var b=Vc(a,0);if(0===(b&1))return ia(a,P()),null;var c=Nd(a,b);if(0!==a.tag&&2===c){var d=ve(a);0!==d&&(b=d,c=Qf(a,d))}if(1===c)throw c=Jc,wb(a,0),kb(a,b),ia(a,P()),c;if(6===c)throw Error(m(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;xb(a,ja,Ra);ia(a,P());return null}function Tf(a,b){var c=p;p|=1;try{return a(b)}finally{p=c,0===p&&(Hc(),md&&db())}}function yb(a){null!==
lb&&0===lb.tag&&0===(p&6)&&Xb();var b=p;p|=1;var c=ca.transition,d=z;try{if(ca.transition=null,z=1,a)return a()}finally{z=d,ca.transition=c,p=b,0===(p&6)&&db()}}function wb(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Nk(c));if(null!==H)for(c=H.return;null!==c;){var d=c;Ve(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(v(S),v(J));break;case 3:Tb();v(S);v(J);jf();break;case 5:hf(d);break;case 4:Tb();break;case 13:v(F);break;
case 19:v(F);break;case 10:cf(d.type._context);break;case 22:case 23:ba=Ga.current,v(Ga)}c=c.return}O=a;H=a=eb(a.current,null);U=ba=b;L=0;Jc=null;Sf=Md=ra=0;ja=Kc=null;if(null!==tb){for(b=0;b<tb.length;b++)if(c=tb[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}tb=null}return a}function Pi(a,b){do{var c=H;try{af();yd.current=zd;if(Ad){for(var d=C.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ad=
!1}vb=0;N=K=C=null;zc=!1;Ac=0;Uf.current=null;if(null===c||null===c.return){L=1;Jc=b;H=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var n=k,l=h,p=l.tag;if(0===(l.mode&1)&&(0===p||11===p||15===p)){var r=l.alternate;r?(l.updateQueue=r.updateQueue,l.memoizedState=r.memoizedState,l.lanes=r.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=ji(g);if(null!==v){v.flags&=-257;ki(v,g,h,f,b);v.mode&1&&ii(f,n,b);b=v;k=n;var x=b.updateQueue;
if(null===x){var z=new Set;z.add(k);b.updateQueue=z}else x.add(k);break a}else{if(0===(b&1)){ii(f,n,b);Ef();break a}k=Error(m(426))}}else if(D&&h.mode&1){var y=ji(g);if(null!==y){0===(y.flags&65536)&&(y.flags|=256);ki(y,g,h,f,b);Ye(Ub(k,h));break a}}f=k=Ub(k,h);4!==L&&(L=2);null===Kc?Kc=[f]:Kc.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var w=gi(f,k,b);Gh(f,w);break a;case 1:h=k;var A=f.type,t=f.stateNode;if(0===(f.flags&128)&&("function"===typeof A.getDerivedStateFromError||
null!==t&&"function"===typeof t.componentDidCatch&&(null===ib||!ib.has(t)))){f.flags|=65536;b&=-b;f.lanes|=b;var B=hi(f,h,b);Gh(f,B);break a}}f=f.return}while(null!==f)}Qi(c)}catch(ma){b=ma;H===c&&null!==c&&(H=c=c.return);continue}break}while(1)}function Oi(){var a=Od.current;Od.current=zd;return null===a?zd:a}function Ef(){if(0===L||3===L||2===L)L=4;null===O||0===(ra&268435455)&&0===(Md&268435455)||kb(O,U)}function Nd(a,b){var c=p;p|=2;var d=Oi();if(O!==a||U!==b)Ra=null,wb(a,b);do try{Ok();break}catch(e){Pi(a,
e)}while(1);af();p=c;Od.current=d;if(null!==H)throw Error(m(261));O=null;U=0;return L}function Ok(){for(;null!==H;)Ri(H)}function Kk(){for(;null!==H&&!Pk();)Ri(H)}function Ri(a){var b=Qk(a.alternate,a,ba);a.memoizedProps=a.pendingProps;null===b?Qi(a):H=b;Uf.current=null}function Qi(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=xk(c,b,ba),null!==c){H=c;return}}else{c=Bk(c,b);if(null!==c){c.flags&=32767;H=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;
else{L=6;H=null;return}}b=b.sibling;if(null!==b){H=b;return}H=b=a}while(null!==b);0===L&&(L=5)}function xb(a,b,c){var d=z,e=ca.transition;try{ca.transition=null,z=1,Rk(a,b,c,d)}finally{ca.transition=e,z=d}return null}function Rk(a,b,c,d){do Xb();while(null!==lb);if(0!==(p&6))throw Error(m(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(m(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;
uj(a,f);a===O&&(H=O=null,U=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||Pd||(Pd=!0,Mi(ad,function(){Xb();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ca.transition;ca.transition=null;var g=z;z=1;var h=p;p|=4;Uf.current=null;Ck(a,c);Fi(c,a);Tj(Kf);Zc=!!Jf;Kf=Jf=null;a.current=c;Hk(c,a,e);Sk();p=h;z=g;ca.transition=f}else a.current=c;Pd&&(Pd=!1,lb=a,Qd=e);f=a.pendingLanes;0===f&&(ib=null);oj(c.stateNode,d);ia(a,P());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=
b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Ed)throw Ed=!1,a=xf,xf=null,a;0!==(Qd&1)&&0!==a.tag&&Xb();f=a.pendingLanes;0!==(f&1)?a===Pf?Ic++:(Ic=0,Pf=a):Ic=0;db();return null}function Xb(){if(null!==lb){var a=Eg(Qd),b=ca.transition,c=z;try{ca.transition=null;z=16>a?16:a;if(null===lb)var d=!1;else{a=lb;lb=null;Qd=0;if(0!==(p&6))throw Error(m(331));var e=p;p|=4;for(l=a.current;null!==l;){var f=l,g=f.child;if(0!==(l.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var n=
h[k];for(l=n;null!==l;){var q=l;switch(q.tag){case 0:case 11:case 15:Gc(8,q,f)}var u=q.child;if(null!==u)u.return=q,l=u;else for(;null!==l;){q=l;var r=q.sibling,v=q.return;Ai(q);if(q===n){l=null;break}if(null!==r){r.return=v;l=r;break}l=v}}}var x=f.alternate;if(null!==x){var y=x.child;if(null!==y){x.child=null;do{var C=y.sibling;y.sibling=null;y=C}while(null!==y)}}l=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,l=g;else b:for(;null!==l;){f=l;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gc(9,
f,f.return)}var w=f.sibling;if(null!==w){w.return=f.return;l=w;break b}l=f.return}}var A=a.current;for(l=A;null!==l;){g=l;var t=g.child;if(0!==(g.subtreeFlags&2064)&&null!==t)t.return=g,l=t;else b:for(g=A;null!==l;){h=l;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Id(9,h)}}catch(ma){G(h,h.return,ma)}if(h===g){l=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;l=B;break b}l=h.return}}p=e;db();if(Ca&&"function"===typeof Ca.onPostCommitFiberRoot)try{Ca.onPostCommitFiberRoot(Uc,
a)}catch(ma){}d=!0}return d}finally{z=c,ca.transition=b}}return!1}function Si(a,b,c){b=Ub(c,b);b=gi(a,b,1);a=fb(a,b,1);b=Z();null!==a&&(ic(a,1,b),ia(a,b))}function G(a,b,c){if(3===a.tag)Si(a,a,c);else for(;null!==b;){if(3===b.tag){Si(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ib||!ib.has(d))){a=Ub(c,a);a=hi(b,a,1);b=fb(b,a,1);a=Z();null!==b&&(ic(b,1,a),ia(b,a));break}}b=b.return}}function sk(a,
b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Z();a.pingedLanes|=a.suspendedLanes&c;O===a&&(U&c)===c&&(4===L||3===L&&(U&130023424)===U&&500>P()-Of?wb(a,0):Sf|=c);ia(a,b)}function Ti(a,b){0===b&&(0===(a.mode&1)?b=1:(b=Rd,Rd<<=1,0===(Rd&130023424)&&(Rd=4194304)));var c=Z();a=Oa(a,b);null!==a&&(ic(a,b,c),ia(a,c))}function vk(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ti(a,c)}function Gk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);
break;case 19:d=a.stateNode;break;default:throw Error(m(314));}null!==d&&d.delete(b);Ti(a,c)}function Mi(a,b){return xh(a,b)}function Tk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function yf(a){a=
a.prototype;return!(!a||!a.isReactComponent)}function Uk(a){if("function"===typeof a)return yf(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ie)return 11;if(a===je)return 14}return 2}function eb(a,b){var c=a.alternate;null===c?(c=pa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=
a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function rd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)yf(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Bb:return sb(c.children,e,f,b);case fe:g=8;e|=8;break;case ee:return a=pa(12,c,b,e|2),a.elementType=ee,a.lanes=f,a;case ge:return a=
pa(13,c,b,e),a.elementType=ge,a.lanes=f,a;case he:return a=pa(19,c,b,e),a.elementType=he,a.lanes=f,a;case Ui:return Gd(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case hg:g=10;break a;case gg:g=9;break a;case ie:g=11;break a;case je:g=14;break a;case Ta:g=16;d=null;break a}throw Error(m(130,null==a?a:typeof a,""));}b=pa(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function sb(a,b,c,d){a=pa(7,a,d,b);a.lanes=c;return a}function Gd(a,b,c,d){a=pa(22,a,d,b);a.elementType=
Ui;a.lanes=c;a.stateNode={isHidden:!1};return a}function Ze(a,b,c){a=pa(6,a,null,b);a.lanes=c;return a}function $e(a,b,c){b=pa(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Vk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=
0;this.eventTimes=we(0);this.expirationTimes=we(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=we(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null}function Vf(a,b,c,d,e,f,g,h,k,l){a=new Vk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=pa(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,
pendingSuspenseBoundaries:null};ff(f);return a}function Wk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Vi(a){if(!a)return cb;a=a._reactInternals;a:{if(nb(a)!==a||1!==a.tag)throw Error(m(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(ea(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(m(171));
}if(1===a.tag){var c=a.type;if(ea(c))return uh(a,c,b)}return b}function Wi(a,b,c,d,e,f,g,h,k,l){a=Vf(c,d,!0,a,e,f,g,h,k);a.context=Vi(null);c=a.current;d=Z();e=hb(c);f=Pa(d,e);f.callback=void 0!==b&&null!==b?b:null;fb(c,f,e);a.current.lanes=e;ic(a,e,d);ia(a,d);return a}function Sd(a,b,c,d){var e=b.current,f=Z(),g=hb(e);c=Vi(c);null===b.context?b.context=c:b.pendingContext=c;b=Pa(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=fb(e,b,g);null!==a&&(xa(a,e,g,f),vd(a,e,g));return g}
function Td(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Xi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Wf(a,b){Xi(a,b);(a=a.alternate)&&Xi(a,b)}function Xk(a){a=Bg(a);return null===a?null:a.stateNode}function Yk(a){return null}function Xf(a){this._internalRoot=a}function Ud(a){this._internalRoot=a}function Yf(a){return!(!a||1!==a.nodeType&&9!==
a.nodeType&&11!==a.nodeType)}function Vd(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Yi(){}function Zk(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Td(g);f.call(a)}}var g=Wi(b,d,a,0,null,!1,!1,"",Yi);a._reactRootContainer=g;a[Ja]=g.current;sc(8===a.nodeType?a.parentNode:a);yb();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Td(k);
h.call(a)}}var k=Vf(a,0,!1,null,null,!1,!1,"",Yi);a._reactRootContainer=k;a[Ja]=k.current;sc(8===a.nodeType?a.parentNode:a);yb(function(){Sd(b,k,c,d)});return k}function Wd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Td(g);h.call(a)}}Sd(b,g,a,e)}else g=Zk(c,b,a,e,d);return Td(g)}var cg=new Set,$b={},Ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Zd=Object.prototype.hasOwnProperty,
cj=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,eg={},dg={},R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){R[a]=
new Y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];R[b]=new Y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){R[a]=new Y(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){R[a]=new Y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){R[a]=
new Y(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){R[a]=new Y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){R[a]=new Y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){R[a]=new Y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){R[a]=new Y(a,5,!1,a.toLowerCase(),null,!1,!1)});var Zf=/[\\-:]([a-z])/g,$f=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!1,!1)});R.xlinkHref=new Y("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!0,!0)});var Sa=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sd=Symbol.for("react.element"),Cb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),
he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ui=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var fg=Symbol.iterator,E=Object.assign,ae,ce=!1,cc=Array.isArray,Xd,yi=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,
c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xd=Xd||document.createElement("div");Xd.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Xd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,
borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,
strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$k=["Webkit","ms","Moz","O"];Object.keys(dc).forEach(function(a){$k.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dc[b]=dc[a]})});var ij=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ze=null,se=null,Eb=null,Fb=null,xg=function(a,b){return a(b)},yg=function(){},te=!1,Oe=!1;if(Ia)try{var Lc={};Object.defineProperty(Lc,
"passive",{get:function(){Oe=!0}});window.addEventListener("test",Lc,Lc);window.removeEventListener("test",Lc,Lc)}catch(a){Oe=!1}var kj=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(q){this.onError(q)}},gc=!1,Sc=null,Tc=!1,ue=null,lj={onError:function(a){gc=!0;Sc=a}},Ba=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Jg=Ba.unstable_scheduleCallback,Kg=Ba.unstable_NormalPriority,xh=Jg,Ki=Ba.unstable_cancelCallback,Pk=Ba.unstable_shouldYield,
Sk=Ba.unstable_requestPaint,P=Ba.unstable_now,Dj=Ba.unstable_getCurrentPriorityLevel,De=Ba.unstable_ImmediatePriority,Mg=Ba.unstable_UserBlockingPriority,ad=Kg,Ej=Ba.unstable_LowPriority,Ng=Ba.unstable_IdlePriority,Uc=null,Ca=null,ta=Math.clz32?Math.clz32:pj,qj=Math.log,rj=Math.LN2,Wc=64,Rd=4194304,z=0,Ae=!1,Yc=[],Va=null,Wa=null,Xa=null,jc=new Map,kc=new Map,Ya=[],Bj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),
Gb=Sa.ReactCurrentBatchConfig,Zc=!0,$c=null,Za=null,Ee=null,bd=null,Yb={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=ka(Yb),Mc=E({},Yb,{view:0,detail:0}),ak=ka(Mc),ag,bg,Nc,Yd=E({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fe,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:
a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==Nc&&(Nc&&"mousemove"===a.type?(ag=a.screenX-Nc.screenX,bg=a.screenY-Nc.screenY):bg=ag=0,Nc=a);return ag},movementY:function(a){return"movementY"in a?a.movementY:bg}}),ih=ka(Yd),al=E({},Yd,{dataTransfer:0}),Wj=ka(al),bl=E({},Mc,{relatedTarget:0}),Pe=ka(bl),cl=E({},Yb,{animationName:0,elapsedTime:0,pseudoElement:0}),Yj=ka(cl),dl=E({},Yb,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),
ck=ka(dl),el=E({},Yb,{data:0}),qh=ka(el),fk=qh,fl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},hl=E({},Mc,{key:function(a){if(a.key){var b=fl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=cd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?gl[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,
metaKey:0,repeat:0,locale:0,getModifierState:Fe,charCode:function(a){return"keypress"===a.type?cd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?cd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Vj=ka(hl),il=E({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=ka(il),jl=E({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,
ctrlKey:0,shiftKey:0,getModifierState:Fe}),Xj=ka(jl),kl=E({},Yb,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zj=ka(kl),ll=E({},Yd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=ka(ll),Hj=[9,13,27,32],Ge=Ia&&"CompositionEvent"in window,Oc=null;Ia&&"documentMode"in document&&(Oc=document.documentMode);var ek=Ia&&"TextEvent"in
window&&!Oc,Ug=Ia&&(!Ge||Oc&&8<Oc&&11>=Oc),Tg=String.fromCharCode(32),Sg=!1,Hb=!1,Kj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oc=null,pc=null,ph=!1;Ia&&(ph=Lj("input")&&(!document.documentMode||9<document.documentMode));var ua="function"===typeof Object.is?Object.is:Sj,dk=Ia&&"documentMode"in document&&11>=document.documentMode,Jb=null,Ke=null,rc=null,Je=!1,Kb={animationend:gd("Animation","AnimationEnd"),
animationiteration:gd("Animation","AnimationIteration"),animationstart:gd("Animation","AnimationStart"),transitionend:gd("Transition","TransitionEnd")},Le={},eh={};Ia&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Kb.animationend.animation,delete Kb.animationiteration.animation,delete Kb.animationstart.animation),"TransitionEvent"in window||delete Kb.transitionend.transition);var jh=hd("animationend"),kh=hd("animationiteration"),lh=hd("animationstart"),mh=hd("transitionend"),
fh=new Map,Zi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
(function(){for(var a=0;a<Zi.length;a++){var b=Zi[a],c=b.toLowerCase();b=b[0].toUpperCase()+b.slice(1);$a(c,"on"+b)}$a(jh,"onAnimationEnd");$a(kh,"onAnimationIteration");$a(lh,"onAnimationStart");$a("dblclick","onDoubleClick");$a("focusin","onFocus");$a("focusout","onBlur");$a(mh,"onTransitionEnd")})();Ab("onMouseEnter",["mouseout","mouseover"]);Ab("onMouseLeave",["mouseout","mouseover"]);Ab("onPointerEnter",["pointerout","pointerover"]);Ab("onPointerLeave",["pointerout","pointerover"]);mb("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));mb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mb("onBeforeInput",["compositionend","keypress","textInput","paste"]);mb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ec)),id="_reactListening"+Math.random().toString(36).slice(2),gk=/\\r\\n?/g,hk=/\\u0000|\\uFFFD/g,Jf=null,Kf=null,Rf="function"===typeof setTimeout?setTimeout:void 0,Nk="function"===typeof clearTimeout?
clearTimeout:void 0,$i="function"===typeof Promise?Promise:void 0,Jk="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof $i?function(a){return $i.resolve(null).then(a).catch(ik)}:Rf,Zb=Math.random().toString(36).slice(2),Da="__reactFiber$"+Zb,uc="__reactProps$"+Zb,Ja="__reactContainer$"+Zb,Me="__reactEvents$"+Zb,Dk="__reactListeners$"+Zb,Ek="__reactHandles$"+Zb,Se=[],Mb=-1,cb={},J=bb(cb),S=bb(!1),pb=cb,La=null,md=!1,Te=!1,Ob=[],Pb=0,od=null,nd=0,na=[],oa=0,rb=null,Ma=1,Na="",la=
null,fa=null,D=!1,wa=null,Ik=Sa.ReactCurrentBatchConfig,Vb=Dh(!0),li=Dh(!1),ud=bb(null),td=null,Rb=null,bf=null,tb=null,kk=Oa,gb=!1,wc={},Ea=bb(wc),yc=bb(wc),xc=bb(wc),F=bb(0),kf=[],yd=Sa.ReactCurrentDispatcher,sf=Sa.ReactCurrentBatchConfig,vb=0,C=null,K=null,N=null,Ad=!1,zc=!1,Ac=0,ml=0,zd={readContext:qa,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,
useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},lk={readContext:qa,useCallback:function(a,b){Fa().memoizedState=[a,void 0===b?null:b];return a},useContext:qa,useEffect:Sh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Bd(4194308,4,Vh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Bd(4194308,4,a,b)},useInsertionEffect:function(a,b){return Bd(4,2,a,b)},useMemo:function(a,b){var c=Fa();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Fa();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=qk.bind(null,C,a);return[d.memoizedState,a]},useRef:function(a){var b=Fa();a={current:a};return b.memoizedState=a},useState:Qh,useDebugValue:rf,useDeferredValue:function(a){return Fa().memoizedState=a},useTransition:function(){var a=Qh(!1),b=a[0];a=pk.bind(null,a[1]);Fa().memoizedState=
a;return[b,a]},useMutableSource:function(a,b,c){},useSyncExternalStore:function(a,b,c){var d=C,e=Fa();if(D){if(void 0===c)throw Error(m(407));c=c()}else{c=b();if(null===O)throw Error(m(349));0!==(vb&30)||Nh(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Sh(Lh.bind(null,d,f,a),[a]);d.flags|=2048;Cc(9,Mh.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Fa(),b=O.identifierPrefix;if(D){var c=Na;var d=Ma;c=(d&~(1<<32-ta(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Ac++;0<c&&
(b+="H"+c.toString(32));b+=":"}else c=ml++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},mk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:of,useRef:Rh,useState:function(a){return of(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return Zh(b,K.memoizedState,a)},useTransition:function(){var a=of(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,
useSyncExternalStore:Kh,useId:$h,unstable_isNewReconciler:!1},nk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:pf,useRef:Rh,useState:function(a){return pf(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return null===K?b.memoizedState=a:Zh(b,K.memoizedState,a)},useTransition:function(){var a=pf(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,useSyncExternalStore:Kh,useId:$h,
unstable_isNewReconciler:!1},Dd={isMounted:function(a){return(a=a._reactInternals)?nb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;
var c=Z(),d=hb(a),e=Pa(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=fb(a,e,d);null!==b&&(xa(b,a,d,c),vd(b,a,d))}},rk="function"===typeof WeakMap?WeakMap:Map,tk=Sa.ReactCurrentOwner,ha=!1,Cf={dehydrated:null,treeContext:null,retryLane:0};var zk=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=
c.return;c=c.sibling}};var xi=function(a,b){};var yk=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){a=b.stateNode;ub(Ea.current);e=null;switch(c){case "input":f=ke(a,f);d=ke(a,d);e=[];break;case "select":f=E({},f,{value:void 0});d=E({},d,{value:void 0});e=[];break;case "textarea":f=ne(a,f);d=ne(a,d);e=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(a.onclick=kd)}pe(c,d);var g;c=null;for(l in f)if(!d.hasOwnProperty(l)&&f.hasOwnProperty(l)&&null!=f[l])if("style"===
l){var h=f[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&($b.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in d){var k=d[l];h=null!=f?f[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(e||(e=[]),e.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(e=e||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(e=e||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&($b.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&B("scroll",a),e||h===k||(e=[])):(e=e||[]).push(l,k))}c&&(e=e||[]).push("style",c);var l=e;if(b.updateQueue=l)b.flags|=4}};var Ak=function(a,
b,c,d){c!==d&&(b.flags|=4)};var Jd=!1,X=!1,Fk="function"===typeof WeakSet?WeakSet:Set,l=null,zi=!1,T=null,za=!1,Mk=Math.ceil,Od=Sa.ReactCurrentDispatcher,Uf=Sa.ReactCurrentOwner,ca=Sa.ReactCurrentBatchConfig,p=0,O=null,H=null,U=0,ba=0,Ga=bb(0),L=0,Jc=null,ra=0,Md=0,Sf=0,Kc=null,ja=null,Of=0,Hf=Infinity,Ra=null,Ed=!1,xf=null,ib=null,Pd=!1,lb=null,Qd=0,Ic=0,Pf=null,Kd=-1,Ld=0;var Qk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||S.current)ha=!0;else{if(0===(a.lanes&c)&&0===(b.flags&
128))return ha=!1,wk(a,b,c);ha=0!==(a.flags&131072)?!0:!1}else ha=!1,D&&0!==(b.flags&1048576)&&yh(b,nd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Fd(a,b);a=b.pendingProps;var e=Nb(b,J.current);Sb(b,c);e=mf(null,b,d,a,e,c);var f=nf();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,ea(d)?(f=!0,ld(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ff(b),e.updater=Dd,b.stateNode=
e,e._reactInternals=b,uf(b,d,a,c),b=Af(null,b,d,!0,f,c)):(b.tag=0,D&&f&&Ue(b),aa(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Fd(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Uk(d);a=ya(d,a);switch(e){case 0:b=zf(null,b,d,a,c);break a;case 1:b=ri(null,b,d,a,c);break a;case 11:b=mi(null,b,d,a,c);break a;case 14:b=ni(null,b,d,ya(d.type,a),c);break a}throw Error(m(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),zf(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),ri(a,b,d,e,c);case 3:a:{si(b);if(null===a)throw Error(m(387));d=b.pendingProps;f=b.memoizedState;e=f.element;Fh(a,b);wd(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ub(Error(m(423)),b);b=ti(a,b,d,c,e);break a}else if(d!==e){e=
Ub(Error(m(424)),b);b=ti(a,b,d,c,e);break a}else for(fa=Ka(b.stateNode.containerInfo.firstChild),la=b,D=!0,wa=null,c=li(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Qb();if(d===e){b=Qa(a,b,c);break a}aa(a,b,d,c)}b=b.child}return b;case 5:return Ih(b),null===a&&Xe(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Qe(d,e)?g=null:null!==f&&Qe(d,f)&&(b.flags|=32),qi(a,b),aa(a,b,g,c),b.child;case 6:return null===a&&Xe(b),null;case 13:return ui(a,b,c);case 4:return gf(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Vb(b,null,d,c):aa(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),mi(a,b,d,e,c);case 7:return aa(a,b,b.pendingProps,c),b.child;case 8:return aa(a,b,b.pendingProps.children,c),b.child;case 12:return aa(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;y(ud,d._currentValue);d._currentValue=g;if(null!==f)if(ua(f.value,g)){if(f.children===
e.children&&!S.current){b=Qa(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=Pa(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var p=l.pending;null===p?k.next=k:(k.next=p.next,p.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);df(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===
f.tag){g=f.return;if(null===g)throw Error(m(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);df(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}aa(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Sb(b,c),e=qa(e),d=d(e),b.flags|=1,aa(a,b,d,c),b.child;case 14:return d=b.type,e=ya(d,b.pendingProps),e=ya(d.type,e),ni(a,b,d,e,c);case 15:return oi(a,
b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),Fd(a,b),b.tag=1,ea(d)?(a=!0,ld(b)):a=!1,Sb(b,c),ei(b,d,e),uf(b,d,e,c),Af(null,b,d,!0,a,c);case 19:return wi(a,b,c);case 22:return pi(a,b,c)}throw Error(m(156,b.tag));};var pa=function(a,b,c,d){return new Tk(a,b,c,d)},aj="function"===typeof reportError?reportError:function(a){console.error(a)};Ud.prototype.render=Xf.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(m(409));
Sd(a,b,null,null)};Ud.prototype.unmount=Xf.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;yb(function(){Sd(null,a,null,null)});b[Ja]=null}};Ud.prototype.unstable_scheduleHydration=function(a){if(a){var b=nl();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Ya.length&&0!==b&&b<Ya[c].priority;c++);Ya.splice(c,0,a);0===c&&Hg(a)}};var Cj=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=
hc(b.pendingLanes);0!==c&&(xe(b,c|1),ia(b,P()),0===(p&6)&&(Hc(),db()))}break;case 13:yb(function(){var b=Oa(a,1);if(null!==b){var c=Z();xa(b,a,1,c)}}),Wf(a,1)}};var Gg=function(a){if(13===a.tag){var b=Oa(a,134217728);if(null!==b){var c=Z();xa(b,a,134217728,c)}Wf(a,134217728)}};var xj=function(a){if(13===a.tag){var b=hb(a),c=Oa(a,b);if(null!==c){var d=Z();xa(c,a,b,d)}Wf(a,b)}};var nl=function(){return z};var wj=function(a,b){var c=z;try{return z=a,b()}finally{z=c}};se=function(a,b,c){switch(b){case "input":le(a,
c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Rc(d);if(!e)throw Error(m(90));jg(d);le(d,e)}}}break;case "textarea":og(a,c);break;case "select":b=c.value,null!=b&&Db(a,!!c.multiple,b,!1)}};(function(a,b,c){xg=a;yg=c})(Tf,function(a,b,c,d,e){var f=z,g=ca.transition;try{return ca.transition=null,z=1,a(b,c,d,e)}finally{z=f,ca.transition=
g,0===p&&Hc()}},yb);var ol={usingClientEntryPoint:!1,Events:[ec,Ib,Rc,ug,vg,Tf]};(function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sa.ReactCurrentDispatcher,findHostInstanceByFiber:Xk,
findFiberByHostInstance:a.findFiberByHostInstance||Yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Uc=b.inject(a),Ca=b}catch(c){}a=b.checkDCE?!0:!1}}return a})({findFiberByHostInstance:ob,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",
rendererPackageName:"react-dom"});Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ol;Q.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yf(b))throw Error(m(200));return Wk(a,b,null,c)};Q.createRoot=function(a,b){if(!Yf(a))throw Error(m(299));var c=!1,d="",e=aj;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Vf(a,1,!1,null,null,
c,!1,d,e);a[Ja]=b.current;sc(8===a.nodeType?a.parentNode:a);return new Xf(b)};Q.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(m(188));a=Object.keys(a).join(",");throw Error(m(268,a));}a=Bg(b);a=null===a?null:a.stateNode;return a};Q.flushSync=function(a){return yb(a)};Q.hydrate=function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!0,c)};Q.hydrateRoot=function(a,b,c){if(!Yf(a))throw Error(m(405));
var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=aj;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Wi(b,null,a,1,null!=c?c:null,e,!1,f,g);a[Ja]=b.current;sc(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Ud(b)};Q.render=
function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!1,c)};Q.unmountComponentAtNode=function(a){if(!Vd(a))throw Error(m(40));return a._reactRootContainer?(yb(function(){Wd(null,null,a,!1,function(){a._reactRootContainer=null;a[Ja]=null})}),!0):!1};Q.unstable_batchedUpdates=Tf;Q.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Vd(c))throw Error(m(200));if(null==a||void 0===a._reactInternals)throw Error(m(38));return Wd(a,b,c,!1,d)};Q.version="18.3.1-next-f1338f8080-20240426"});
})();
</script>
  <script>(function () {
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
  "use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Liveline: () => Liveline,
  LivelineTransition: () => LivelineTransition
});
module.exports = __toCommonJS(index_exports);

// src/Liveline.tsx
var import_react2 = require("react");

// src/theme.ts
function parseColorRgb(color) {
  const hex = color.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  const rgb = color.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);
  if (rgb) return [+rgb[1], +rgb[2], +rgb[3]];
  return [128, 128, 128];
}
function rgba(r, g, b, a) {
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
}
function resolveTheme(color, mode) {
  const [r, g, b] = parseColorRgb(color);
  const isDark = mode === "dark";
  return {
    // Line
    line: color,
    lineWidth: 2,
    // Fill gradient
    fillTop: rgba(r, g, b, isDark ? 0.12 : 0.08),
    fillBottom: rgba(r, g, b, 0),
    // Grid
    gridLine: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)",
    gridLabel: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.35)",
    // Dot — always semantic
    dotUp: "#22c55e",
    dotDown: "#ef4444",
    dotFlat: color,
    glowUp: "rgba(34, 197, 94, 0.18)",
    glowDown: "rgba(239, 68, 68, 0.18)",
    glowFlat: rgba(r, g, b, 0.12),
    // Badge
    badgeOuterBg: isDark ? "rgba(40, 40, 40, 0.95)" : "rgba(255, 255, 255, 0.95)",
    badgeOuterShadow: isDark ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.15)",
    badgeBg: color,
    badgeText: "#ffffff",
    // Dash line
    dashLine: rgba(r, g, b, 0.4),
    // Reference line
    refLine: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)",
    refLabel: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.4)",
    // Time axis
    timeLabel: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.3)",
    // Crosshair
    crosshairLine: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.12)",
    tooltipBg: isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
    tooltipText: isDark ? "#e5e5e5" : "#1a1a1a",
    tooltipBorder: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
    // Background
    bgRgb: isDark ? [10, 10, 10] : [255, 255, 255],
    // Fonts
    labelFont: '11px "SF Mono", Menlo, Monaco, "Cascadia Code", monospace',
    valueFont: '600 11px "SF Mono", Menlo, monospace',
    badgeFont: '500 11px "SF Mono", Menlo, monospace'
  };
}
var SERIES_COLORS = [
  "#3b82f6",
  // blue
  "#ef4444",
  // red
  "#22c55e",
  // green
  "#f59e0b",
  // amber
  "#8b5cf6",
  // violet
  "#ec4899",
  // pink
  "#06b6d4",
  // cyan
  "#f97316"
  // orange
];
function resolveSeriesPalettes(series, mode) {
  const map = /* @__PURE__ */ new Map();
  for (let i = 0; i < series.length; i++) {
    const s = series[i];
    const color = s.color || SERIES_COLORS[i % SERIES_COLORS.length];
    map.set(s.id, resolveTheme(color, mode));
  }
  return map;
}

// src/useLivelineEngine.ts
var import_react = require("react");

// src/math/lerp.ts
function lerp(current, target, speed, dt = 16.67) {
  const factor = 1 - Math.pow(1 - speed, dt / 16.67);
  return current + (target - current) * factor;
}

// src/math/range.ts
function computeRange(visible, currentValue, referenceValue, exaggerate) {
  let targetMin = Infinity;
  let targetMax = -Infinity;
  for (const p of visible) {
    if (p.value < targetMin) targetMin = p.value;
    if (p.value > targetMax) targetMax = p.value;
  }
  if (currentValue < targetMin) targetMin = currentValue;
  if (currentValue > targetMax) targetMax = currentValue;
  if (referenceValue !== void 0) {
    if (referenceValue < targetMin) targetMin = referenceValue;
    if (referenceValue > targetMax) targetMax = referenceValue;
  }
  const rawRange = targetMax - targetMin;
  const marginFactor = exaggerate ? 0.01 : 0.12;
  const minRange = rawRange * (exaggerate ? 0.02 : 0.1) || (exaggerate ? 0.04 : 0.4);
  if (rawRange < minRange) {
    const mid = (targetMin + targetMax) / 2;
    targetMin = mid - minRange / 2;
    targetMax = mid + minRange / 2;
  } else {
    const margin = rawRange * marginFactor;
    targetMin -= margin;
    targetMax += margin;
  }
  return { min: targetMin, max: targetMax };
}

// src/math/momentum.ts
function detectMomentum(points, lookback = 20) {
  if (points.length < 5) return "flat";
  const start = Math.max(0, points.length - lookback);
  let min = Infinity;
  let max = -Infinity;
  for (let i = start; i < points.length; i++) {
    const v = points[i].value;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  const range = max - min;
  if (range === 0) return "flat";
  const tailStart = Math.max(start, points.length - 5);
  const first = points[tailStart].value;
  const last = points[points.length - 1].value;
  const delta = last - first;
  const threshold = range * 0.12;
  if (delta > threshold) return "up";
  if (delta < -threshold) return "down";
  return "flat";
}

// src/math/interpolate.ts
function interpolateAtTime(points, time) {
  if (points.length === 0) return null;
  if (time <= points[0].time) return points[0].value;
  if (time >= points[points.length - 1].time) return points[points.length - 1].value;
  let lo = 0;
  let hi = points.length - 1;
  while (hi - lo > 1) {
    const mid = lo + hi >> 1;
    if (points[mid].time <= time) lo = mid;
    else hi = mid;
  }
  const p1 = points[lo];
  const p2 = points[hi];
  const dt = p2.time - p1.time;
  if (dt === 0) return p1.value;
  const t = (time - p1.time) / dt;
  return p1.value + (p2.value - p1.value) * t;
}

// src/canvas/dpr.ts
function getDpr() {
  if (typeof window === "undefined") return 1;
  return Math.min(window.devicePixelRatio || 1, 3);
}
function applyDpr(ctx, dpr, w, h) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
}

// src/draw/grid.ts
function pickInterval(valRange, pxPerUnit, minGap, prev) {
  if (prev > 0) {
    const px = prev * pxPerUnit;
    if (px >= minGap * 0.5 && px <= minGap * 4) return prev;
  }
  const divisorSets = [[2, 2.5, 2], [2, 2, 2.5], [2.5, 2, 2]];
  let best = Infinity;
  for (const divs of divisorSets) {
    let span = Math.pow(10, Math.ceil(Math.log10(valRange)));
    let i = 0;
    while (span / divs[i % 3] * pxPerUnit >= minGap) {
      span /= divs[i % 3];
      i++;
    }
    if (span < best) best = span;
  }
  return best === Infinity ? valRange / 5 : best;
}
function divisible(val, interval) {
  const ratio = val / interval;
  return Math.abs(ratio - Math.round(ratio)) < 0.01;
}
var FADE_IN = 0.18;
var FADE_OUT = 0.12;
function drawGrid(ctx, layout, palette, formatValue, state, dt) {
  const { w, h, pad, valRange, minVal, maxVal, toY } = layout;
  const chartH = h - pad.top - pad.bottom;
  if (chartH <= 0 || valRange <= 0) return;
  const pxPerUnit = chartH / valRange;
  const coarse = pickInterval(valRange, pxPerUnit, 36, state.interval);
  state.interval = coarse;
  const fine = coarse / 2;
  const finePx = fine * pxPerUnit;
  const fineTarget = finePx < 40 ? 0 : finePx >= 60 ? 1 : (finePx - 40) / 20;
  const fadeZone = 32;
  const edgeAlpha = (y) => {
    const fromEdge = Math.min(y - pad.top, h - pad.bottom - y);
    if (fromEdge >= fadeZone) return 1;
    if (fromEdge <= 0) return 0;
    return fromEdge / fadeZone;
  };
  const targets = /* @__PURE__ */ new Map();
  const first = Math.ceil(minVal / fine) * fine;
  for (let val = first; val <= maxVal; val += fine) {
    const y = toY(val);
    if (y < pad.top - 2 || y > h - pad.bottom + 2) continue;
    const isCoarse = divisible(val, coarse);
    const target = (isCoarse ? 1 : fineTarget) * edgeAlpha(y);
    const key = Math.round(val * 1e3);
    targets.set(key, target);
  }
  for (const [key, alpha] of state.labels) {
    const target = targets.get(key) ?? 0;
    const speed = target >= alpha ? FADE_IN : FADE_OUT;
    let next = lerp(alpha, target, speed, dt);
    if (Math.abs(next - target) < 0.02) next = target;
    if (next < 0.01 && target === 0) {
      state.labels.delete(key);
    } else {
      state.labels.set(key, next);
    }
  }
  for (const [key, target] of targets) {
    if (!state.labels.has(key)) {
      state.labels.set(key, target * FADE_IN);
    }
  }
  const baseAlpha = ctx.globalAlpha;
  ctx.setLineDash([1, 3]);
  ctx.lineWidth = 1;
  ctx.font = palette.labelFont;
  ctx.textAlign = "left";
  for (const [key, alpha] of state.labels) {
    if (alpha < 0.02) continue;
    const val = key / 1e3;
    const y = toY(val);
    if (y < pad.top - 10 || y > h - pad.bottom + 10) continue;
    ctx.save();
    ctx.globalAlpha = baseAlpha * alpha;
    ctx.strokeStyle = palette.gridLine;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = palette.gridLabel;
    ctx.fillText(formatValue(val), w - pad.right + 8, y + 4);
    ctx.restore();
  }
  ctx.setLineDash([]);
}

// src/math/spline.ts
function drawSpline(ctx, pts) {
  if (pts.length < 2) return;
  if (pts.length === 2) {
    ctx.lineTo(pts[1][0], pts[1][1]);
    return;
  }
  const n = pts.length;
  const delta = new Array(n - 1);
  const h = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    h[i] = pts[i + 1][0] - pts[i][0];
    delta[i] = h[i] === 0 ? 0 : (pts[i + 1][1] - pts[i][1]) / h[i];
  }
  const m = new Array(n);
  m[0] = delta[0];
  m[n - 1] = delta[n - 2];
  for (let i = 1; i < n - 1; i++) {
    if (delta[i - 1] * delta[i] <= 0) {
      m[i] = 0;
    } else {
      m[i] = (delta[i - 1] + delta[i]) / 2;
    }
  }
  for (let i = 0; i < n - 1; i++) {
    if (delta[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
    } else {
      const alpha = m[i] / delta[i];
      const beta = m[i + 1] / delta[i];
      const s2 = alpha * alpha + beta * beta;
      if (s2 > 9) {
        const s = 3 / Math.sqrt(s2);
        m[i] = s * alpha * delta[i];
        m[i + 1] = s * beta * delta[i];
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    const hi = h[i];
    ctx.bezierCurveTo(
      pts[i][0] + hi / 3,
      pts[i][1] + m[i] * hi / 3,
      pts[i + 1][0] - hi / 3,
      pts[i + 1][1] - m[i + 1] * hi / 3,
      pts[i + 1][0],
      pts[i + 1][1]
    );
  }
}

// src/draw/loadingShape.ts
var LOADING_AMPLITUDE_RATIO = 0.07;
var LOADING_SCROLL_SPEED = 1e-3;
function loadingY(t, centerY, amplitude, scroll) {
  return centerY + amplitude * (Math.sin(t * 9.4 + scroll) * 0.55 + Math.sin(t * 15.7 + scroll * 1.3) * 0.3 + Math.sin(t * 4.2 + scroll * 0.7) * 0.15);
}
function loadingBreath(now_ms) {
  return 0.22 + 0.08 * Math.sin(now_ms / 1200 * Math.PI);
}

// src/draw/line.ts
function parseRgba(color) {
  const hex = color.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), 1];
  }
  const rgba2 = color.match(/rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([\\d.]+)/);
  if (rgba2) return [+rgba2[1], +rgba2[2], +rgba2[3], +rgba2[4]];
  const rgb = color.match(/rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);
  if (rgb) return [+rgb[1], +rgb[2], +rgb[3], 1];
  return [128, 128, 128, 1];
}
function blendColor(c1, c2, t) {
  if (t <= 0) return c1;
  if (t >= 1) return c2;
  const [r1, g1, b1, a1] = parseRgba(c1);
  const [r2, g2, b2, a2] = parseRgba(c2);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  const a = a1 + (a2 - a1) * t;
  if (a >= 0.995) return \`rgb(\${r},\${g},\${b})\`;
  return \`rgba(\${r},\${g},\${b},\${a.toFixed(3)})\`;
}
function renderCurve(ctx, layout, palette, pts, showFill, lineAlpha = 1, fillAlpha = 1, strokeColor) {
  const { h, pad } = layout;
  const baseAlpha = ctx.globalAlpha;
  if (showFill && fillAlpha > 0.01) {
    ctx.globalAlpha = baseAlpha * fillAlpha;
    const grad = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
    grad.addColorStop(0, palette.fillTop);
    grad.addColorStop(1, palette.fillBottom);
    ctx.beginPath();
    ctx.moveTo(pts[0][0], h - pad.bottom);
    ctx.lineTo(pts[0][0], pts[0][1]);
    drawSpline(ctx, pts);
    ctx.lineTo(pts[pts.length - 1][0], h - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
  }
  ctx.globalAlpha = baseAlpha * lineAlpha;
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  drawSpline(ctx, pts);
  ctx.strokeStyle = strokeColor ?? palette.line;
  ctx.lineWidth = palette.lineWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.globalAlpha = baseAlpha;
}
function drawLine(ctx, layout, palette, visible, smoothValue, now, showFill, scrubX, scrubAmount = 0, chartReveal = 1, now_ms = 0, colorBlend = 1, skipDashLine = false, fillScale = 1) {
  const { h, pad, toX, toY, chartW, chartH } = layout;
  const incomingAlpha = ctx.globalAlpha;
  const yMin = pad.top;
  const yMax = h - pad.bottom;
  const clampY = (y) => Math.max(yMin, Math.min(yMax, y));
  const centerY = pad.top + chartH / 2;
  const amplitude = chartH * LOADING_AMPLITUDE_RATIO;
  const scroll = now_ms * LOADING_SCROLL_SPEED;
  const morphY = chartReveal < 1 ? (rawY, x) => {
    const t = Math.max(0, Math.min(1, (x - pad.left) / chartW));
    const centerDist = Math.abs(t - 0.5) * 2;
    const localReveal = Math.max(0, Math.min(1, (chartReveal - centerDist * 0.4) / 0.6));
    const baseY = loadingY(t, centerY, amplitude, scroll);
    return baseY + (rawY - baseY) * localReveal;
  } : (rawY, _x) => rawY;
  const pts = visible.map((p, i) => {
    const x = toX(p.time);
    const y = i === visible.length - 1 ? morphY(clampY(toY(smoothValue)), x) : morphY(clampY(toY(p.value)), x);
    return [x, y];
  });
  const liveTipX = toX(now);
  const fullRightX = pad.left + chartW;
  const tipX = chartReveal < 1 ? liveTipX + (fullRightX - liveTipX) * (1 - chartReveal) : liveTipX;
  pts.push([tipX, morphY(clampY(toY(smoothValue)), tipX)]);
  if (pts.length < 2) return;
  let lineAlpha = 1;
  let fillAlpha = fillScale;
  if (chartReveal < 1) {
    const breath = loadingBreath(now_ms);
    lineAlpha = breath + (1 - breath) * chartReveal;
    fillAlpha = chartReveal * fillScale;
  }
  const colorT = Math.min(1, chartReveal * 3) * colorBlend;
  const strokeColor = chartReveal < 1 || colorBlend < 1 ? blendColor(palette.gridLabel, palette.line, colorT) : void 0;
  const isScrubbing = scrubX !== null;
  ctx.save();
  ctx.beginPath();
  ctx.rect(pad.left - 1, pad.top, chartW + 2, chartH);
  ctx.clip();
  if (isScrubbing) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, scrubX, h);
    ctx.clip();
    renderCurve(ctx, layout, palette, pts, showFill, lineAlpha, fillAlpha, strokeColor);
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.rect(scrubX, 0, layout.w - scrubX, h);
    ctx.clip();
    ctx.globalAlpha = incomingAlpha * (1 - scrubAmount * 0.6);
    renderCurve(ctx, layout, palette, pts, showFill, lineAlpha, fillAlpha, strokeColor);
    ctx.restore();
  } else {
    renderCurve(ctx, layout, palette, pts, showFill, lineAlpha, fillAlpha, strokeColor);
  }
  ctx.restore();
  if (!skipDashLine) {
    const realCurrentY = Math.max(pad.top, Math.min(h - pad.bottom, toY(smoothValue)));
    const currentY = chartReveal < 1 ? centerY + (realCurrentY - centerY) * chartReveal : realCurrentY;
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = palette.dashLine;
    ctx.lineWidth = 1;
    const dashBase = isScrubbing ? 1 - scrubAmount * 0.2 : 1;
    ctx.globalAlpha = incomingAlpha * (chartReveal < 1 ? dashBase * chartReveal : dashBase);
    ctx.beginPath();
    ctx.moveTo(pad.left, currentY);
    ctx.lineTo(layout.w - pad.right, currentY);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.globalAlpha = incomingAlpha;
  const last = pts[pts.length - 1];
  last[1] = Math.max(10, Math.min(h - 10, last[1]));
  return pts;
}

// src/draw/dot.ts
var PULSE_INTERVAL = 1500;
var PULSE_DURATION = 900;
function lerpColor(a, b, t) {
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return \`rgb(\${r},\${g},\${bl})\`;
}
function drawDot(ctx, x, y, palette, pulse = true, scrubAmount = 0, now_ms = performance.now()) {
  const baseAlpha = ctx.globalAlpha;
  const dim = scrubAmount * 0.7;
  if (pulse && dim < 0.3) {
    const t = now_ms % PULSE_INTERVAL / PULSE_DURATION;
    if (t < 1) {
      const radius = 9 + t * 12;
      const pulseAlpha = 0.35 * (1 - t) * (1 - dim * 3);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = palette.line;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = baseAlpha * pulseAlpha;
      ctx.stroke();
    }
  }
  const outerRgb = parseColorRgb(palette.badgeOuterBg);
  ctx.save();
  ctx.globalAlpha = baseAlpha;
  ctx.shadowColor = palette.badgeOuterShadow;
  ctx.shadowBlur = 6 * (1 - dim);
  ctx.shadowOffsetY = 1;
  ctx.beginPath();
  ctx.arc(x, y, 6.5, 0, Math.PI * 2);
  ctx.fillStyle = palette.badgeOuterBg;
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = baseAlpha;
  ctx.beginPath();
  ctx.arc(x, y, 3.5, 0, Math.PI * 2);
  if (dim > 0.01) {
    const lineRgb = parseColorRgb(palette.line);
    ctx.fillStyle = lerpColor(lineRgb, outerRgb, dim);
  } else {
    ctx.fillStyle = palette.line;
  }
  ctx.fill();
}
function drawMultiDot(ctx, x, y, color, pulse = true, now_ms = performance.now(), radius = 3) {
  const baseAlpha = ctx.globalAlpha;
  if (pulse) {
    const t = now_ms % PULSE_INTERVAL / PULSE_DURATION;
    if (t < 1) {
      const ringRadius = 9 + t * 10;
      const pulseAlpha = 0.3 * (1 - t);
      ctx.beginPath();
      ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = baseAlpha * pulseAlpha;
      ctx.stroke();
    }
  }
  ctx.globalAlpha = baseAlpha;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawSimpleDot(ctx, x, y, color, radius = 3) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawArrows(ctx, x, y, momentum, palette, arrows, dt, now_ms = performance.now()) {
  const baseAlpha = ctx.globalAlpha;
  const upTarget = momentum === "up" ? 1 : 0;
  const downTarget = momentum === "down" ? 1 : 0;
  const canFadeInUp = arrows.down < 0.02;
  const canFadeInDown = arrows.up < 0.02;
  arrows.up = lerp(arrows.up, canFadeInUp ? upTarget : 0, upTarget > arrows.up ? 0.08 : 0.04, dt);
  arrows.down = lerp(arrows.down, canFadeInDown ? downTarget : 0, downTarget > arrows.down ? 0.08 : 0.04, dt);
  if (arrows.up < 0.01) arrows.up = 0;
  if (arrows.down < 0.01) arrows.down = 0;
  if (arrows.up > 0.99) arrows.up = 1;
  if (arrows.down > 0.99) arrows.down = 1;
  const cycle = now_ms % 1400 / 1400;
  const drawChevrons = (dir, opacity) => {
    if (opacity < 0.01) return;
    const baseX = x + 19;
    const baseY = y;
    ctx.save();
    ctx.strokeStyle = palette.gridLabel;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (let i = 0; i < 2; i++) {
      const start = i * 0.2;
      const dur = 0.35;
      const localT = cycle - start;
      const wave = localT >= 0 && localT < dur ? Math.sin(localT / dur * Math.PI) : 0;
      const pulse = 0.3 + 0.7 * wave;
      ctx.globalAlpha = baseAlpha * opacity * pulse;
      const nudge = dir === -1 ? -3 : 3;
      const cy = baseY + dir * (i * 8 - 4) + nudge;
      ctx.beginPath();
      ctx.moveTo(baseX - 5, cy - dir * 3.5);
      ctx.lineTo(baseX, cy);
      ctx.lineTo(baseX + 5, cy - dir * 3.5);
      ctx.stroke();
    }
    ctx.restore();
  };
  drawChevrons(-1, arrows.up);
  drawChevrons(1, arrows.down);
  ctx.globalAlpha = baseAlpha;
}

// src/draw/crosshair.ts
function drawCrosshair(ctx, layout, palette, hoverX, hoverValue, hoverTime, formatValue, formatTime, scrubOpacity, tooltipY, liveDotX, tooltipOutline) {
  if (scrubOpacity < 0.01) return;
  const { h, pad, toY } = layout;
  const y = toY(hoverValue);
  ctx.save();
  ctx.globalAlpha = scrubOpacity * 0.5;
  ctx.strokeStyle = palette.crosshairLine;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(hoverX, pad.top);
  ctx.lineTo(hoverX, h - pad.bottom);
  ctx.stroke();
  ctx.restore();
  const dotRadius = 4 * Math.min(scrubOpacity * 3, 1);
  if (dotRadius > 0.5) {
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(hoverX, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = palette.line;
    ctx.fill();
  }
  if (scrubOpacity < 0.1 || layout.w < 300) return;
  const valueText = formatValue(hoverValue);
  const timeText = formatTime(hoverTime);
  const separator = "  \\xB7  ";
  ctx.save();
  ctx.globalAlpha = scrubOpacity;
  ctx.font = '400 13px "SF Mono", Menlo, monospace';
  const valueW = ctx.measureText(valueText).width;
  const sepW = ctx.measureText(separator).width;
  const timeW = ctx.measureText(timeText).width;
  const totalW = valueW + sepW + timeW;
  let tx = hoverX - totalW / 2;
  const minX = pad.left + 4;
  const dotRightEdge = liveDotX != null ? liveDotX + 7 : layout.w - pad.right;
  const maxX = dotRightEdge - totalW;
  if (tx < minX) tx = minX;
  if (tx > maxX) tx = maxX;
  const ty = pad.top + (tooltipY ?? 14) + 10;
  ctx.textAlign = "left";
  if (tooltipOutline) {
    ctx.strokeStyle = palette.tooltipBg;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.strokeText(valueText, tx, ty);
    ctx.strokeText(separator + timeText, tx + valueW, ty);
  }
  ctx.fillStyle = palette.tooltipText;
  ctx.fillText(valueText, tx, ty);
  ctx.fillStyle = palette.gridLabel;
  ctx.fillText(separator + timeText, tx + valueW, ty);
  ctx.restore();
}
function drawMultiCrosshair(ctx, layout, palette, hoverX, hoverTime, entries, formatValue, formatTime, scrubOpacity, tooltipY, tooltipOutline, liveDotX) {
  if (scrubOpacity < 0.01 || entries.length === 0) return;
  const { h, pad, toY } = layout;
  ctx.save();
  ctx.globalAlpha = scrubOpacity * 0.5;
  ctx.strokeStyle = palette.crosshairLine;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(hoverX, pad.top);
  ctx.lineTo(hoverX, h - pad.bottom);
  ctx.stroke();
  ctx.restore();
  const dotRadius = 4 * Math.min(scrubOpacity * 3, 1);
  if (dotRadius > 0.5) {
    ctx.globalAlpha = 1;
    for (const entry of entries) {
      const y = toY(entry.value);
      ctx.beginPath();
      ctx.arc(hoverX, y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = entry.color;
      ctx.fill();
    }
  }
  if (scrubOpacity < 0.1 || layout.w < 300) return;
  ctx.save();
  ctx.globalAlpha = scrubOpacity;
  ctx.font = '400 13px "SF Mono", Menlo, monospace';
  ctx.textAlign = "left";
  const timeText = formatTime(hoverTime);
  const sep = "  \\xB7  ";
  const dotInline = " ";
  const segments = [
    { text: timeText, color: palette.gridLabel }
  ];
  for (const e of entries) {
    segments.push({ text: sep, color: palette.gridLabel });
    segments.push({ text: dotInline, color: e.color, isDot: true });
    const label = e.label ? \`\${e.label} \` : "";
    if (label) segments.push({ text: label, color: palette.gridLabel });
    segments.push({ text: formatValue(e.value), color: palette.tooltipText });
  }
  let totalW = 0;
  const segWidths = [];
  for (const seg of segments) {
    const w = seg.isDot ? 12 : ctx.measureText(seg.text).width;
    segWidths.push(w);
    totalW += w;
  }
  let tx = hoverX - totalW / 2;
  const minX = pad.left + 4;
  const dotRightEdge = liveDotX != null ? liveDotX + 7 : layout.w - pad.right;
  const maxX = dotRightEdge - totalW;
  if (tx < minX) tx = minX;
  if (tx > maxX) tx = maxX;
  const ty = pad.top + (tooltipY ?? 14) + 10;
  if (tooltipOutline !== false) {
    ctx.strokeStyle = palette.tooltipBg;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    let ox2 = tx;
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if (!seg.isDot) {
        ctx.strokeText(seg.text, ox2, ty);
      }
      ox2 += segWidths[i];
    }
  }
  let ox = tx;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (seg.isDot) {
      ctx.beginPath();
      ctx.arc(ox + 4, ty - 4, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = seg.color;
      ctx.fill();
    } else {
      ctx.fillStyle = seg.color;
      ctx.fillText(seg.text, ox, ty);
    }
    ox += segWidths[i];
  }
  ctx.restore();
}

// src/draw/referenceLine.ts
function drawReferenceLine(ctx, layout, palette, ref) {
  const { w, h, pad, toY, chartW } = layout;
  const y = toY(ref.value);
  if (y < pad.top - 10 || y > h - pad.bottom + 10) return;
  const label = ref.label ?? "";
  if (label) {
    ctx.font = "500 11px system-ui, sans-serif";
    const textW = ctx.measureText(label).width;
    const centerX = pad.left + chartW / 2;
    const gapPad = 8;
    ctx.strokeStyle = palette.refLine;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(centerX - textW / 2 - gapPad, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + textW / 2 + gapPad, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = palette.refLabel;
    ctx.textAlign = "center";
    ctx.fillText(label, centerX, y + 4);
  } else {
    ctx.strokeStyle = palette.refLine;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// src/math/intervals.ts
function niceTimeInterval(windowSecs) {
  if (windowSecs <= 15) return 2;
  if (windowSecs <= 30) return 5;
  if (windowSecs <= 60) return 10;
  if (windowSecs <= 120) return 15;
  if (windowSecs <= 300) return 30;
  if (windowSecs <= 600) return 60;
  if (windowSecs <= 1800) return 300;
  if (windowSecs <= 3600) return 600;
  if (windowSecs <= 14400) return 1800;
  if (windowSecs <= 43200) return 3600;
  if (windowSecs <= 86400) return 7200;
  if (windowSecs <= 604800) return 86400;
  return 604800;
}

// src/draw/timeAxis.ts
var FADE = 0.08;
function drawTimeAxis(ctx, layout, palette, windowSecs, targetWindowSecs, formatTime, state, dt) {
  const { h, pad, leftEdge, rightEdge, toX } = layout;
  const chartLeft = pad.left;
  const chartRight = layout.w - pad.right;
  const chartW = chartRight - chartLeft;
  const fadeZone = 50;
  const edgeAlpha = (x) => {
    const fromLeft = x - chartLeft;
    const fromRight = chartRight - x;
    const fromEdge = Math.min(fromLeft, fromRight);
    if (fromEdge >= fadeZone) return 1;
    if (fromEdge <= 0) return 0;
    return fromEdge / fadeZone;
  };
  ctx.font = palette.labelFont;
  const targetPxPerSec = chartW / targetWindowSecs;
  let interval = niceTimeInterval(targetWindowSecs);
  while (interval * targetPxPerSec < 60 && interval < targetWindowSecs) {
    interval *= 2;
  }
  const useLocalDays = interval >= 86400;
  let firstTime;
  if (useLocalDays) {
    const d = new Date((leftEdge - interval) * 1e3);
    d.setHours(0, 0, 0, 0);
    firstTime = d.getTime() / 1e3;
  } else {
    firstTime = Math.ceil((leftEdge - interval) / interval) * interval;
  }
  const targets = /* @__PURE__ */ new Set();
  for (let t = firstTime; t <= rightEdge + interval && targets.size < 30; t += interval) {
    targets.add(Math.round(t * 100));
  }
  for (const key of targets) {
    const text = formatTime(key / 100);
    const existing = state.labels.get(key);
    if (!existing) {
      state.labels.set(key, { alpha: 0, text });
    } else {
      existing.text = text;
    }
  }
  for (const [key, label] of state.labels) {
    const x = toX(key / 100);
    const isTarget = targets.has(key);
    const target = isTarget ? edgeAlpha(x) : 0;
    let next = lerp(label.alpha, target, FADE, dt);
    if (Math.abs(next - target) < 0.02) next = target;
    if (next < 0.01 && target === 0) {
      state.labels.delete(key);
    } else {
      label.alpha = next;
    }
  }
  const baseAlpha = ctx.globalAlpha;
  const lineY = h - pad.bottom;
  const tickLen = 5;
  ctx.strokeStyle = palette.gridLine;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(chartLeft, lineY);
  ctx.lineTo(chartRight, lineY);
  ctx.stroke();
  ctx.textAlign = "center";
  const labels = [];
  for (const [key, label] of state.labels) {
    if (label.alpha < 0.02) continue;
    const x = toX(key / 100);
    if (x < chartLeft - 20 || x > chartRight) continue;
    const w = ctx.measureText(label.text).width;
    labels.push({ x, alpha: label.alpha, text: label.text, w });
  }
  labels.sort((a, b) => a.x - b.x);
  const drawn = [];
  for (const label of labels) {
    const left = label.x - label.w / 2;
    if (drawn.length > 0) {
      const prev = drawn[drawn.length - 1];
      const prevRight = prev.x + prev.w / 2;
      if (left < prevRight + 8) {
        if (label.alpha > prev.alpha) {
          drawn[drawn.length - 1] = label;
        }
        continue;
      }
    }
    drawn.push(label);
  }
  for (const label of drawn) {
    ctx.save();
    ctx.globalAlpha = baseAlpha * label.alpha;
    ctx.strokeStyle = palette.gridLine;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(label.x, lineY);
    ctx.lineTo(label.x, lineY + tickLen);
    ctx.stroke();
    ctx.fillStyle = palette.timeLabel;
    ctx.fillText(label.text, label.x, lineY + tickLen + 14);
    ctx.restore();
  }
}

// src/draw/orderbook.ts
var GREEN = [34, 197, 94];
var RED = [239, 68, 68];
function createOrderbookState() {
  return {
    labels: [],
    spawnTimer: 0,
    smoothSpeed: BASE_SPEED,
    prevBidTotal: 0,
    prevAskTotal: 0,
    churnRate: 0
  };
}
var MAX_LABELS = 50;
var LABEL_LIFETIME = 6;
var SPAWN_INTERVAL = 40;
var MIN_LABEL_GAP = 22;
var BASE_SPEED = 60;
var MAX_SPEED = 160;
function mixColor(from, to, t) {
  const r = Math.round(from[0] + (to[0] - from[0]) * t);
  const g = Math.round(from[1] + (to[1] - from[1]) * t);
  const b = Math.round(from[2] + (to[2] - from[2]) * t);
  return \`rgb(\${r},\${g},\${b})\`;
}
function drawOrderbook(ctx, layout, palette, orderbook, dt, state, swingMagnitude) {
  const { pad, h, chartH } = layout;
  const dtSec = dt / 1e3;
  if (orderbook.bids.length === 0 && orderbook.asks.length === 0) return;
  let maxSize = 0;
  let bidTotal = 0;
  let askTotal = 0;
  for (const [, size] of orderbook.bids) {
    bidTotal += size;
    if (size > maxSize) maxSize = size;
  }
  for (const [, size] of orderbook.asks) {
    askTotal += size;
    if (size > maxSize) maxSize = size;
  }
  if (maxSize === 0) return;
  const totalSize = bidTotal + askTotal;
  const prevTotal = state.prevBidTotal + state.prevAskTotal;
  let churnSignal = 0;
  if (prevTotal > 0) {
    const delta = Math.abs(bidTotal - state.prevBidTotal) + Math.abs(askTotal - state.prevAskTotal);
    churnSignal = Math.min(delta / prevTotal, 1);
  }
  state.prevBidTotal = bidTotal;
  state.prevAskTotal = askTotal;
  const churnLerp = churnSignal > state.churnRate ? 0.3 : 0.05;
  state.churnRate += (churnSignal - state.churnRate) * churnLerp;
  const activity = Math.max(Math.min(swingMagnitude * 5, 1), state.churnRate);
  const targetSpeed = BASE_SPEED + activity * (MAX_SPEED - BASE_SPEED);
  const speedLerp = 1 - Math.pow(0.95, dt / 16.67);
  state.smoothSpeed += (targetSpeed - state.smoothSpeed) * speedLerp;
  const speed = state.smoothSpeed;
  const labelX = pad.left + 8;
  const bottomY = h - pad.bottom - 6;
  const topY = pad.top;
  const bg = palette.bgRgb;
  state.spawnTimer += dt;
  while (state.spawnTimer >= SPAWN_INTERVAL && state.labels.length < MAX_LABELS) {
    state.spawnTimer -= SPAWN_INTERVAL;
    let tooClose = false;
    for (let j = 0; j < state.labels.length; j++) {
      if (Math.abs(state.labels[j].y - bottomY) < MIN_LABEL_GAP) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) break;
    const allLevels = [];
    for (const [, size] of orderbook.bids) allLevels.push({ size, green: true });
    for (const [, size] of orderbook.asks) allLevels.push({ size, green: false });
    let totalWeight = 0;
    for (const l of allLevels) totalWeight += l.size;
    let r = Math.random() * totalWeight;
    let picked = allLevels[0];
    for (const l of allLevels) {
      r -= l.size;
      if (r <= 0) {
        picked = l;
        break;
      }
    }
    const sizeRatio = picked.size / maxSize;
    state.labels.push({
      y: bottomY,
      text: \`+ \${formatSize(picked.size)}\`,
      green: picked.green,
      life: LABEL_LIFETIME,
      maxLife: LABEL_LIFETIME,
      intensity: 0.5 + sizeRatio * 0.5
    });
  }
  const range = bottomY - topY;
  let writeIdx = 0;
  for (let i = 0; i < state.labels.length; i++) {
    const l = state.labels[i];
    l.life -= dtSec;
    if (l.life <= 0) continue;
    const yProgress = range > 0 ? (l.y - topY) / range : 1;
    l.y -= speed * (0.7 + 0.3 * yProgress) * dtSec;
    if (l.y < topY - 14) continue;
    state.labels[writeIdx++] = l;
  }
  state.labels.length = writeIdx;
  const baseAlpha = ctx.globalAlpha;
  ctx.save();
  ctx.font = '600 13px "SF Mono", Menlo, monospace';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = baseAlpha;
  const outlineColor = \`rgb(\${bg[0]},\${bg[1]},\${bg[2]})\`;
  for (let i = 0; i < state.labels.length; i++) {
    const l = state.labels[i];
    const lifeRatio = l.life / l.maxLife;
    const fadeIn = Math.min((1 - lifeRatio) * 10, 1);
    const yRatio = (l.y - topY) / chartH;
    const fadeOut = yRatio < 0.45 ? yRatio / 0.45 : 1;
    const colorStrength = l.intensity * fadeIn * fadeOut;
    const baseColor = l.green ? GREEN : RED;
    const fillColor = mixColor(baseColor, bg, 1 - colorStrength);
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.strokeText(l.text, labelX, l.y);
    ctx.fillStyle = fillColor;
    ctx.fillText(l.text, labelX, l.y);
  }
  ctx.restore();
}
function formatSize(size) {
  if (size >= 10) return \`$\${Math.round(size)}\`;
  if (size >= 1) return \`$\${size.toFixed(1)}\`;
  return \`$\${size.toFixed(2)}\`;
}

// src/draw/particles.ts
function createParticleState() {
  return { particles: [], cooldown: 0, burstCount: 0 };
}
var MAX_PARTICLES = 80;
var PARTICLE_LIFETIME = 1;
var COOLDOWN_MS = 400;
var MAGNITUDE_THRESHOLD = 0.08;
var MAX_BURSTS = 3;
function spawnOnSwing(state, momentum, dotX, dotY, swingMagnitude, accentColor, dt, options) {
  state.cooldown = Math.max(0, state.cooldown - dt);
  if (momentum === "flat") return 0;
  if (state.cooldown > 0) return 0;
  if (swingMagnitude < MAGNITUDE_THRESHOLD) {
    state.burstCount = 0;
    return 0;
  }
  if (momentum === "down" && options?.downMomentum !== true) return 0;
  if (state.burstCount >= MAX_BURSTS) return 0;
  state.cooldown = COOLDOWN_MS;
  const scale = options?.scale ?? 1;
  const isUp = momentum === "up";
  const mag = Math.min(swingMagnitude * 5, 1);
  const burstFalloff = mag > 0.6 ? 1 : [1, 0.6, 0.35][state.burstCount] ?? 0.35;
  state.burstCount++;
  const count = Math.round((12 + mag * 20) * scale * burstFalloff);
  const speedMultiplier = 1 + mag * 0.8;
  for (let i = 0; i < count && state.particles.length < MAX_PARTICLES; i++) {
    const baseAngle = isUp ? -Math.PI / 2 : Math.PI / 2;
    const spread = Math.PI * 1.2;
    const angle = baseAngle + (Math.random() - 0.5) * spread;
    const speed = (60 + Math.random() * 100) * speedMultiplier;
    state.particles.push({
      x: dotX + (Math.random() - 0.5) * 24,
      y: dotY + (Math.random() - 0.5) * 8,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: (1 + Math.random() * 1.2) * scale * burstFalloff,
      color: accentColor
    });
  }
  return burstFalloff;
}
function drawParticles(ctx, state, dt) {
  if (state.particles.length === 0) return;
  const dtSec = dt / 1e3;
  ctx.save();
  let writeIdx = 0;
  for (let i = 0; i < state.particles.length; i++) {
    const p = state.particles[i];
    p.life -= dtSec / PARTICLE_LIFETIME;
    if (p.life <= 0) continue;
    p.x += p.vx * dtSec;
    p.y += p.vy * dtSec;
    p.vx *= 0.95;
    p.vy *= 0.95;
    ctx.globalAlpha = p.life * 0.55;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * (0.5 + p.life * 0.5), 0, Math.PI * 2);
    ctx.fill();
    state.particles[writeIdx++] = p;
  }
  state.particles.length = writeIdx;
  ctx.restore();
}

// src/draw/candlestick.ts
var BULL = "#22c55e";
var BEAR = "#ef4444";
var BULL_RGB = [34, 197, 94];
var BEAR_RGB = [239, 68, 68];
function blendColor2(t) {
  const r = Math.round(BEAR_RGB[0] + (BULL_RGB[0] - BEAR_RGB[0]) * t);
  const g = Math.round(BEAR_RGB[1] + (BULL_RGB[1] - BEAR_RGB[1]) * t);
  const b = Math.round(BEAR_RGB[2] + (BULL_RGB[2] - BEAR_RGB[2]) * t);
  return \`rgb(\${r},\${g},\${b})\`;
}
function parseRgb(color) {
  const hex = color.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const h = hex[1];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  const rgb = color.match(/rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);
  if (rgb) return [+rgb[1], +rgb[2], +rgb[3]];
  return [128, 128, 128];
}
function blendToAccent(candleColor, accentColor, t) {
  if (t <= 0) return candleColor;
  if (t >= 1) return accentColor;
  const [r1, g1, b1] = parseRgb(candleColor);
  const [r2, g2, b2] = parseRgb(accentColor);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return \`rgb(\${r},\${g},\${b})\`;
}
function candleDims(layout, candleWidthSecs) {
  const pxPerSec = layout.chartW / (layout.rightEdge - layout.leftEdge);
  const candlePxW = candleWidthSecs * pxPerSec;
  const bodyW = Math.max(1, candlePxW * 0.7);
  const wickW = Math.max(0.8, Math.min(2, bodyW * 0.15));
  const radius = bodyW > 6 ? 1.5 : 0;
  return { bodyW, wickW, radius };
}
function roundedRect(ctx, x, y, w, h, r) {
  if (r <= 0 || h < r * 2) {
    ctx.rect(x, y, w, h);
    return;
  }
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
function drawCandlesticks(ctx, layout, candles, candleWidthSecs, liveTime, now_ms, scrubX, scrubDim, liveAlpha = 1, liveBullBlend = -1, accentColor, accentBlend = 0) {
  if (candles.length === 0) return;
  const { toX, toY } = layout;
  const { bodyW, wickW, radius } = candleDims(layout, candleWidthSecs);
  const halfBody = bodyW / 2;
  const padL = layout.pad.left;
  const padR = layout.pad.left + layout.chartW;
  const livePulse = 0.12 + Math.sin(now_ms * 4e-3) * 0.08;
  for (const c of candles) {
    const cx = toX(c.time + candleWidthSecs / 2);
    if (cx + halfBody < padL || cx - halfBody > padR) continue;
    const isBull = c.close >= c.open;
    const isLive = c.time === liveTime;
    let color = isLive && liveBullBlend >= 0 ? blendColor2(liveBullBlend) : isBull ? BULL : BEAR;
    if (accentColor && accentBlend > 0.01) {
      color = blendToAccent(color, accentColor, accentBlend);
    }
    let candleAlpha = isLive ? liveAlpha : 1;
    if (scrubDim > 0.01 && scrubX > 0) {
      const dist = cx - scrubX;
      if (dist > 0) {
        const fadeZone = bodyW * 1.5;
        const dimT = Math.min(dist / fadeZone, 1);
        candleAlpha *= 1 - scrubDim * 0.5 * dimT;
      }
    }
    const baseAlpha = ctx.globalAlpha;
    ctx.globalAlpha = baseAlpha * candleAlpha;
    const bodyTop = toY(Math.max(c.open, c.close));
    const bodyBottom = toY(Math.min(c.open, c.close));
    const bodyH = Math.max(1, bodyBottom - bodyTop);
    const wickTop = toY(c.high);
    const wickBottom = toY(c.low);
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    if (bodyTop - wickTop > 0.5) {
      ctx.beginPath();
      ctx.moveTo(cx, bodyTop);
      ctx.lineTo(cx, wickTop);
      ctx.lineWidth = wickW;
      ctx.stroke();
    }
    if (wickBottom - bodyBottom > 0.5) {
      ctx.beginPath();
      ctx.moveTo(cx, bodyBottom);
      ctx.lineTo(cx, wickBottom);
      ctx.lineWidth = wickW;
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    roundedRect(ctx, cx - halfBody, bodyTop, bodyW, bodyH, radius);
    ctx.fill();
    if (isLive) {
      ctx.save();
      ctx.globalAlpha = baseAlpha * candleAlpha * livePulse;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.fillStyle = color;
      ctx.beginPath();
      roundedRect(ctx, cx - halfBody, bodyTop, bodyW, bodyH, radius);
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = baseAlpha;
  }
}
function drawClosePrice(ctx, layout, palette, liveCandle, scrubDim, bullBlend = -1) {
  const y = layout.toY(liveCandle.close);
  if (y < layout.pad.top || y > layout.h - layout.pad.bottom) return;
  const isBull = liveCandle.close >= liveCandle.open;
  const color = bullBlend >= 0 ? blendColor2(bullBlend) : isBull ? BULL : BEAR;
  const baseAlpha = ctx.globalAlpha;
  ctx.save();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.globalAlpha = baseAlpha * (1 - scrubDim * 0.3) * 0.4;
  ctx.beginPath();
  ctx.moveTo(layout.pad.left, y);
  ctx.lineTo(layout.w - layout.pad.right, y);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}
function drawCandleCrosshair(ctx, layout, palette, hoverX, candle, hoverTime, formatValue, formatTime, opacity) {
  if (opacity < 0.01) return;
  const { h, pad } = layout;
  ctx.save();
  ctx.globalAlpha = opacity * 0.5;
  ctx.strokeStyle = palette.crosshairLine;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(hoverX, pad.top);
  ctx.lineTo(hoverX, h - pad.bottom);
  ctx.stroke();
  ctx.restore();
  if (opacity < 0.1 || layout.w < 200) return;
  const isBull = candle.close >= candle.open;
  const valueColor = isBull ? BULL : BEAR;
  const cl = formatValue(candle.close);
  const time = formatTime(hoverTime);
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.font = '400 13px "SF Mono", Menlo, monospace';
  ctx.textAlign = "left";
  let parts;
  if (layout.w >= 400) {
    const o = formatValue(candle.open);
    const hi = formatValue(candle.high);
    const lo = formatValue(candle.low);
    parts = [
      { text: "O ", color: palette.gridLabel },
      { text: o, color: valueColor },
      { text: "   H ", color: palette.gridLabel },
      { text: hi, color: valueColor },
      { text: "   L ", color: palette.gridLabel },
      { text: lo, color: valueColor },
      { text: "   C ", color: palette.gridLabel },
      { text: cl, color: valueColor },
      { text: "  \\xB7  ", color: palette.gridLabel },
      { text: time, color: palette.gridLabel }
    ];
  } else {
    parts = [
      { text: "C ", color: palette.gridLabel },
      { text: cl, color: valueColor },
      { text: "  \\xB7  ", color: palette.gridLabel },
      { text: time, color: palette.gridLabel }
    ];
  }
  let totalW = 0;
  const widths = [];
  for (const p of parts) {
    const w = ctx.measureText(p.text).width;
    widths.push(w);
    totalW += w;
  }
  let tx = hoverX - totalW / 2;
  const minX = pad.left + 4;
  const maxX = layout.w - pad.right - totalW;
  if (tx < minX) tx = minX;
  if (tx > maxX) tx = maxX;
  const ty = pad.top + 24;
  ctx.strokeStyle = palette.tooltipBg;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  let cx = tx;
  for (let i = 0; i < parts.length; i++) {
    ctx.strokeText(parts[i].text, cx, ty);
    cx += widths[i];
  }
  cx = tx;
  for (let i = 0; i < parts.length; i++) {
    ctx.fillStyle = parts[i].color;
    ctx.fillText(parts[i].text, cx, ty);
    cx += widths[i];
  }
  ctx.restore();
}
function drawLineModeCrosshair(ctx, layout, palette, hoverX, value, hoverTime, formatValue, formatTime, opacity) {
  if (opacity < 0.01) return;
  const { h, pad } = layout;
  const y = layout.toY(value);
  ctx.save();
  ctx.globalAlpha = opacity * 0.5;
  ctx.strokeStyle = palette.crosshairLine;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(hoverX, pad.top);
  ctx.lineTo(hoverX, h - pad.bottom);
  ctx.stroke();
  ctx.globalAlpha = opacity * 0.3;
  ctx.beginPath();
  ctx.moveTo(pad.left, y);
  ctx.lineTo(layout.w - pad.right, y);
  ctx.stroke();
  ctx.restore();
  if (opacity < 0.1 || layout.w < 200) return;
  const val = formatValue(value);
  const time = formatTime(hoverTime);
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.font = '400 13px "SF Mono", Menlo, monospace';
  ctx.textAlign = "left";
  const parts = [
    { text: val, color: palette.line },
    { text: "  \\xB7  ", color: palette.gridLabel },
    { text: time, color: palette.gridLabel }
  ];
  let totalW = 0;
  const widths = [];
  for (const p of parts) {
    const w = ctx.measureText(p.text).width;
    widths.push(w);
    totalW += w;
  }
  let tx = hoverX - totalW / 2;
  const minX = pad.left + 4;
  const maxX = layout.w - pad.right - totalW;
  if (tx < minX) tx = minX;
  if (tx > maxX) tx = maxX;
  const ty = pad.top + 24;
  ctx.strokeStyle = palette.tooltipBg;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  let lx = tx;
  for (let i = 0; i < parts.length; i++) {
    ctx.strokeText(parts[i].text, lx, ty);
    lx += widths[i];
  }
  lx = tx;
  for (let i = 0; i < parts.length; i++) {
    ctx.fillStyle = parts[i].color;
    ctx.fillText(parts[i].text, lx, ty);
    lx += widths[i];
  }
  ctx.restore();
}

// src/draw/empty.ts
function drawEmpty(ctx, w, h, pad, palette, alpha = 1, now_ms = 0, skipLine = false, emptyText) {
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const centerY = pad.top + chartH / 2;
  const cx = pad.left + chartW / 2;
  const text = emptyText ?? "No data to display";
  const amplitude = chartH * LOADING_AMPLITUDE_RATIO;
  ctx.save();
  ctx.font = "400 12px system-ui, -apple-system, sans-serif";
  const textW = ctx.measureText(text).width;
  const gapHalf = textW / 2 + 20;
  const fadeW = 30;
  if (!skipLine) {
    const scroll = now_ms * LOADING_SCROLL_SPEED;
    const breath = loadingBreath(now_ms);
    const numPts = 32;
    const pts = [];
    for (let i = 0; i <= numPts; i++) {
      const t = i / numPts;
      const x = pad.left + t * chartW;
      const y = loadingY(t, centerY, amplitude, scroll);
      pts.push([x, y]);
    }
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    drawSpline(ctx, pts);
    ctx.strokeStyle = palette.gridLabel;
    ctx.lineWidth = palette.lineWidth;
    ctx.globalAlpha = breath * alpha;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  const gapLeft = cx - gapHalf - fadeW;
  const gapRight = cx + gapHalf + fadeW;
  const eraseGrad = ctx.createLinearGradient(gapLeft, 0, gapRight, 0);
  eraseGrad.addColorStop(0, "rgba(0,0,0,0)");
  eraseGrad.addColorStop(fadeW / (gapRight - gapLeft), "rgba(0,0,0,1)");
  eraseGrad.addColorStop(1 - fadeW / (gapRight - gapLeft), "rgba(0,0,0,1)");
  eraseGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = eraseGrad;
  ctx.globalAlpha = alpha;
  const eraseH = amplitude * 2 + palette.lineWidth + 6;
  ctx.fillRect(gapLeft, centerY - eraseH / 2, gapRight - gapLeft, eraseH);
  ctx.restore();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.35 * alpha;
  ctx.fillStyle = palette.gridLabel;
  ctx.fillText(text, cx, centerY);
  ctx.restore();
}

// src/draw/index.ts
var SHAKE_DECAY_RATE = 2e-3;
var SHAKE_MIN_AMPLITUDE = 0.2;
var FADE_EDGE_WIDTH = 40;
var CROSSHAIR_FADE_MIN_PX = 5;
function createShakeState() {
  return { amplitude: 0 };
}
function drawFrame(ctx, layout, palette, opts) {
  const shake = opts.shakeState;
  let shakeX = 0;
  let shakeY = 0;
  if (shake && shake.amplitude > SHAKE_MIN_AMPLITUDE) {
    shakeX = (Math.random() - 0.5) * 2 * shake.amplitude;
    shakeY = (Math.random() - 0.5) * 2 * shake.amplitude;
    ctx.save();
    ctx.translate(shakeX, shakeY);
  }
  if (shake) {
    const decayRate = Math.pow(SHAKE_DECAY_RATE, opts.dt / 1e3);
    shake.amplitude *= decayRate;
    if (shake.amplitude < SHAKE_MIN_AMPLITUDE) shake.amplitude = 0;
  }
  const reveal = opts.chartReveal;
  const pause = opts.pauseProgress;
  const revealRamp = (start, end) => {
    const t = Math.max(0, Math.min(1, (reveal - start) / (end - start)));
    return t * t * (3 - 2 * t);
  };
  if (opts.referenceLine && reveal > 0.01) {
    ctx.save();
    if (reveal < 1) ctx.globalAlpha = reveal;
    drawReferenceLine(ctx, layout, palette, opts.referenceLine);
    ctx.restore();
  }
  if (opts.showGrid) {
    const gridAlpha = reveal < 1 ? revealRamp(0.15, 0.7) : 1;
    if (gridAlpha > 0.01) {
      ctx.save();
      if (gridAlpha < 1) ctx.globalAlpha = gridAlpha;
      drawGrid(ctx, layout, palette, opts.formatValue, opts.gridState, opts.dt);
      ctx.restore();
    }
  }
  if (opts.orderbookData && opts.orderbookState && reveal > 0.01) {
    ctx.save();
    if (reveal < 1) ctx.globalAlpha = reveal;
    drawOrderbook(ctx, layout, palette, opts.orderbookData, opts.dt, opts.orderbookState, opts.swingMagnitude);
    ctx.restore();
  }
  const scrubX = opts.scrubAmount > 0.05 ? opts.hoverX : null;
  const pts = drawLine(ctx, layout, palette, opts.visible, opts.smoothValue, opts.now, opts.showFill, scrubX, opts.scrubAmount, reveal, opts.now_ms);
  {
    const timeAlpha = reveal < 1 ? revealRamp(0.15, 0.7) : 1;
    if (timeAlpha > 0.01) {
      ctx.save();
      if (timeAlpha < 1) ctx.globalAlpha = timeAlpha;
      drawTimeAxis(ctx, layout, palette, opts.windowSecs, opts.targetWindowSecs, opts.formatTime, opts.timeAxisState, opts.dt);
      ctx.restore();
    }
  }
  if (pts && pts.length > 0) {
    const lastPt = pts[pts.length - 1];
    let dotScrub = opts.scrubAmount;
    if (opts.hoverX !== null && dotScrub > 0) {
      const distToLive = lastPt[0] - opts.hoverX;
      const fadeStart = Math.min(80, layout.chartW * 0.3);
      dotScrub = distToLive < CROSSHAIR_FADE_MIN_PX ? 0 : distToLive >= fadeStart ? opts.scrubAmount : (distToLive - CROSSHAIR_FADE_MIN_PX) / (fadeStart - CROSSHAIR_FADE_MIN_PX) * opts.scrubAmount;
    }
    const dotAlpha = reveal < 0.3 ? 0 : (reveal - 0.3) / 0.7;
    const showPulse = opts.showPulse && reveal > 0.6 && pause < 0.5;
    if (dotAlpha > 0.01) {
      ctx.save();
      if (dotAlpha < 1) ctx.globalAlpha = dotAlpha;
      drawDot(ctx, lastPt[0], lastPt[1], palette, showPulse, dotScrub, opts.now_ms);
      ctx.restore();
    }
    if (opts.showMomentum) {
      const arrowReveal = reveal < 1 ? revealRamp(0.6, 1) : 1;
      const arrowAlpha = arrowReveal * (1 - pause);
      if (arrowAlpha > 0.01) {
        ctx.save();
        if (arrowAlpha < 1) ctx.globalAlpha = arrowAlpha;
        drawArrows(
          ctx,
          lastPt[0],
          lastPt[1],
          opts.momentum,
          palette,
          opts.arrowState,
          opts.dt,
          opts.now_ms
        );
        ctx.restore();
      }
    }
    if (opts.particleState && reveal > 0.9) {
      const burstIntensity = spawnOnSwing(
        opts.particleState,
        opts.momentum,
        lastPt[0],
        lastPt[1],
        opts.swingMagnitude,
        palette.line,
        opts.dt,
        opts.particleOptions
      );
      if (burstIntensity > 0 && shake) {
        shake.amplitude = (3 + opts.swingMagnitude * 4) * burstIntensity;
      }
      drawParticles(ctx, opts.particleState, opts.dt);
    }
  }
  const fadeW = FADE_EDGE_WIDTH;
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  const fadeGrad = ctx.createLinearGradient(layout.pad.left, 0, layout.pad.left + fadeW, 0);
  fadeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
  fadeGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = fadeGrad;
  ctx.fillRect(0, 0, layout.pad.left + fadeW, layout.h);
  ctx.restore();
  if (opts.hoverX !== null && opts.hoverValue !== null && opts.hoverTime !== null && pts && pts.length > 0) {
    const lastPt = pts[pts.length - 1];
    const distToLive = lastPt[0] - opts.hoverX;
    const fadeStart = Math.min(80, layout.chartW * 0.3);
    const scrubOpacity = distToLive < CROSSHAIR_FADE_MIN_PX ? 0 : distToLive >= fadeStart ? opts.scrubAmount : (distToLive - CROSSHAIR_FADE_MIN_PX) / (fadeStart - CROSSHAIR_FADE_MIN_PX) * opts.scrubAmount;
    if (scrubOpacity > 0.01) {
      drawCrosshair(
        ctx,
        layout,
        palette,
        opts.hoverX,
        opts.hoverValue,
        opts.hoverTime,
        opts.formatValue,
        opts.formatTime,
        scrubOpacity,
        opts.tooltipY,
        lastPt[0],
        // liveDotX — tooltip right edge stops here
        opts.tooltipOutline
      );
    }
  }
  if (shake && (shakeX !== 0 || shakeY !== 0)) {
    ctx.restore();
  }
}
function drawMultiFrame(ctx, layout, opts) {
  const palette = opts.primaryPalette;
  const reveal = opts.chartReveal;
  const revealRamp = (start, end) => {
    const t = Math.max(0, Math.min(1, (reveal - start) / (end - start)));
    return t * t * (3 - 2 * t);
  };
  if (opts.referenceLine && reveal > 0.01) {
    ctx.save();
    if (reveal < 1) ctx.globalAlpha = reveal;
    drawReferenceLine(ctx, layout, palette, opts.referenceLine);
    ctx.restore();
  }
  if (opts.showGrid) {
    const gridAlpha = reveal < 1 ? revealRamp(0.15, 0.7) : 1;
    if (gridAlpha > 0.01) {
      ctx.save();
      if (gridAlpha < 1) ctx.globalAlpha = gridAlpha;
      drawGrid(ctx, layout, palette, opts.formatValue, opts.gridState, opts.dt);
      ctx.restore();
    }
  }
  const scrubX = opts.scrubAmount > 0.05 ? opts.hoverX : null;
  const allPts = [];
  for (let si = 0; si < opts.series.length; si++) {
    const s = opts.series[si];
    const seriesAlpha = s.alpha ?? 1;
    const secondaryFade = si > 0 && reveal < 1 ? Math.min(1, reveal * 2) : 1;
    const combinedAlpha = secondaryFade * seriesAlpha;
    if (combinedAlpha < 0.01) continue;
    ctx.save();
    if (combinedAlpha < 1) ctx.globalAlpha = combinedAlpha;
    const pts = drawLine(
      ctx,
      layout,
      s.palette,
      s.visible,
      s.smoothValue,
      opts.now,
      false,
      // no fill
      scrubX,
      opts.scrubAmount,
      reveal,
      opts.now_ms
    );
    ctx.restore();
    if (pts && pts.length > 0) {
      allPts.push({ pts, palette: s.palette, label: s.label, alpha: seriesAlpha });
    }
  }
  {
    const timeAlpha = reveal < 1 ? revealRamp(0.15, 0.7) : 1;
    if (timeAlpha > 0.01) {
      ctx.save();
      if (timeAlpha < 1) ctx.globalAlpha = timeAlpha;
      drawTimeAxis(ctx, layout, palette, opts.windowSecs, opts.targetWindowSecs, opts.formatTime, opts.timeAxisState, opts.dt);
      ctx.restore();
    }
  }
  if (reveal > 0.3 && allPts.length > 0) {
    const dotAlpha = (reveal - 0.3) / 0.7;
    const showPulse = opts.showPulse && reveal > 0.6 && opts.pauseProgress < 0.5;
    for (const entry of allPts) {
      if (entry.alpha < 0.01) continue;
      const lastPt = entry.pts[entry.pts.length - 1];
      ctx.save();
      ctx.globalAlpha = dotAlpha * entry.alpha;
      if (showPulse && entry.alpha > 0.5) {
        drawMultiDot(ctx, lastPt[0], lastPt[1], entry.palette.line, true, opts.now_ms, 3);
      } else {
        drawSimpleDot(ctx, lastPt[0], lastPt[1], entry.palette.line, 3);
      }
      if (entry.label) {
        ctx.font = '600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
        ctx.textAlign = "left";
        ctx.fillStyle = entry.palette.line;
        ctx.fillText(entry.label, lastPt[0] + 6, lastPt[1] + 3.5);
      }
      ctx.restore();
    }
  }
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  const fadeGrad = ctx.createLinearGradient(layout.pad.left, 0, layout.pad.left + FADE_EDGE_WIDTH, 0);
  fadeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
  fadeGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = fadeGrad;
  ctx.fillRect(0, 0, layout.pad.left + FADE_EDGE_WIDTH, layout.h);
  ctx.restore();
  if (opts.hoverX !== null && opts.hoverTime !== null && opts.hoverEntries.length > 0 && allPts.length > 0 && opts.scrubAmount > 0.01) {
    let maxLiveDotX = 0;
    for (const entry of allPts) {
      if (entry.alpha < 0.01) continue;
      const lastX = entry.pts[entry.pts.length - 1][0];
      if (lastX > maxLiveDotX) maxLiveDotX = lastX;
    }
    const distToLive = maxLiveDotX - opts.hoverX;
    const fadeStart = Math.min(80, layout.chartW * 0.3);
    const scrubOpacity = distToLive < CROSSHAIR_FADE_MIN_PX ? 0 : distToLive >= fadeStart ? opts.scrubAmount : (distToLive - CROSSHAIR_FADE_MIN_PX) / (fadeStart - CROSSHAIR_FADE_MIN_PX) * opts.scrubAmount;
    if (scrubOpacity > 0.01) {
      drawMultiCrosshair(
        ctx,
        layout,
        palette,
        opts.hoverX,
        opts.hoverTime,
        opts.hoverEntries,
        opts.formatValue,
        opts.formatTime,
        scrubOpacity,
        opts.tooltipY,
        opts.tooltipOutline,
        maxLiveDotX
      );
    }
  }
}
function drawCandleFrame(ctx, layout, palette, opts) {
  const { w, h, pad, chartW, chartH } = layout;
  const reveal = opts.chartReveal;
  const fullLineMode = opts.lineModeProg >= 0.99;
  const revealLine = fullLineMode ? 1 - reveal : (1 - reveal) * (1 - reveal) * (1 - reveal);
  const lp = Math.max(opts.lineModeProg, revealLine);
  const colorBlend = lp > 1e-3 ? opts.lineModeProg / lp : 1;
  const revealRamp = (start, end) => {
    const t = Math.max(0, Math.min(1, (reveal - start) / (end - start)));
    return t * t * (3 - 2 * t);
  };
  const gridAlpha = revealRamp(0.25, 0.6);
  if (opts.showGrid && gridAlpha > 0.01) {
    ctx.save();
    if (gridAlpha < 1) ctx.globalAlpha = gridAlpha;
    drawGrid(ctx, layout, palette, opts.formatValue, opts.gridState, opts.dt);
    ctx.restore();
  }
  let linePts;
  if (lp > 0.01 && opts.lineVisible.length >= 2) {
    const scrubX = opts.scrubAmount > 0.05 ? opts.hoverX : null;
    ctx.save();
    ctx.globalAlpha = lp;
    linePts = drawLine(
      ctx,
      layout,
      palette,
      opts.lineVisible,
      opts.lineSmoothValue,
      opts.now,
      opts.lineModeProg > 0.01,
      scrubX,
      opts.scrubAmount,
      opts.chartReveal,
      opts.now_ms,
      colorBlend,
      !fullLineMode,
      opts.lineModeProg
      // fillScale — fill fades smoothly with line mode transition
    );
    ctx.restore();
  }
  const closeAlpha = revealRamp(0.4, 0.8);
  const closeSource = opts.closePriceCandle ?? opts.liveCandle;
  if (closeSource && closeAlpha > 0.01) {
    if (lp < 0.99) {
      ctx.save();
      ctx.globalAlpha = closeAlpha * (1 - lp);
      drawClosePrice(ctx, layout, palette, closeSource, opts.scrubAmount, opts.liveBullBlend);
      ctx.restore();
    }
    if (lp > 0.01 && !fullLineMode) {
      const dashY = layout.toY(closeSource.close);
      if (dashY >= pad.top && dashY <= h - pad.bottom) {
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = palette.dashLine;
        ctx.lineWidth = 1;
        ctx.globalAlpha = closeAlpha * lp * (1 - opts.scrubAmount * 0.2);
        ctx.beginPath();
        ctx.moveTo(pad.left, dashY);
        ctx.lineTo(w - pad.right, dashY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }
    }
  }
  const candleAlpha = opts.chartReveal * (1 - lp);
  if (candleAlpha > 0.01) {
    const ohlcScale = reveal * reveal * (3 - 2 * reveal);
    const collapseC = (c) => ohlcScale >= 0.99 ? c : {
      time: c.time,
      open: c.close + (c.open - c.close) * ohlcScale,
      high: c.close + (c.high - c.close) * ohlcScale,
      low: c.close + (c.low - c.close) * ohlcScale,
      close: c.close
    };
    const revealCandles = ohlcScale < 0.99 ? opts.candles.map(collapseC) : opts.candles;
    const revealOld = ohlcScale < 0.99 && opts.oldCandles.length > 0 ? opts.oldCandles.map(collapseC) : opts.oldCandles;
    ctx.save();
    ctx.beginPath();
    ctx.rect(pad.left - 1, pad.top, chartW + 2, chartH);
    ctx.clip();
    const accentCol = lp > 0.01 ? palette.line : void 0;
    if (opts.morphT >= 0 && revealOld.length > 0) {
      ctx.globalAlpha = (1 - opts.morphT) * candleAlpha;
      drawCandlesticks(
        ctx,
        layout,
        revealOld,
        opts.oldWidth,
        -1,
        opts.now_ms,
        opts.hoverX ?? 0,
        opts.scrubAmount,
        1,
        -1,
        accentCol,
        lp
      );
      ctx.globalAlpha = opts.morphT * candleAlpha;
      drawCandlesticks(
        ctx,
        layout,
        revealCandles,
        opts.displayCandleWidth,
        opts.liveCandle?.time ?? -1,
        opts.now_ms,
        opts.hoverX ?? 0,
        opts.scrubAmount,
        opts.liveBirthAlpha,
        opts.liveBullBlend,
        accentCol,
        lp
      );
      ctx.globalAlpha = 1;
    } else {
      if (candleAlpha < 1) ctx.globalAlpha = candleAlpha;
      drawCandlesticks(
        ctx,
        layout,
        revealCandles,
        opts.displayCandleWidth,
        opts.liveCandle?.time ?? -1,
        opts.now_ms,
        opts.hoverX ?? 0,
        opts.scrubAmount,
        opts.liveBirthAlpha,
        opts.liveBullBlend,
        accentCol,
        lp
      );
    }
    ctx.restore();
  }
  if (lp > 0.5 && linePts && linePts.length > 0 && reveal > 0.3) {
    const lastPt = linePts[linePts.length - 1];
    const dotAlpha = (lp - 0.5) * 2 * ((reveal - 0.3) / 0.7);
    const showPulse = lp > 0.8 && reveal > 0.6;
    if (dotAlpha > 0.01) {
      ctx.save();
      ctx.globalAlpha = dotAlpha;
      drawDot(ctx, lastPt[0], lastPt[1], palette, showPulse, opts.scrubAmount, opts.now_ms);
      ctx.restore();
    }
  }
  const timeAlpha = revealRamp(0.25, 0.6);
  if (timeAlpha > 0.01) {
    ctx.save();
    if (timeAlpha < 1) ctx.globalAlpha = timeAlpha;
    drawTimeAxis(ctx, layout, palette, opts.targetWindowSecs, opts.targetWindowSecs, opts.formatTime, opts.timeAxisState, opts.dt);
    ctx.restore();
  }
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  const fadeGrad = ctx.createLinearGradient(pad.left, 0, pad.left + FADE_EDGE_WIDTH, 0);
  fadeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
  fadeGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = fadeGrad;
  ctx.fillRect(0, 0, pad.left + FADE_EDGE_WIDTH, h);
  ctx.restore();
  if (opts.showEmptyOverlay) {
    const bgAlpha = 1 - opts.chartReveal;
    if (bgAlpha > 0.01) {
      const bgEmptyAlpha = (1 - opts.loadingAlpha) * bgAlpha;
      if (bgEmptyAlpha > 0.01) {
        drawEmpty(ctx, w, h, pad, palette, bgEmptyAlpha, opts.now_ms, true, opts.emptyText);
      }
    }
  }
  if (opts.chartReveal > 0.7 && opts.hoveredCandle && opts.hoverX !== null && opts.scrubAmount > 0.01) {
    if (opts.lineModeProg > 0.5) {
      drawLineModeCrosshair(
        ctx,
        layout,
        palette,
        opts.hoverX,
        opts.hoveredCandle.close,
        opts.hoverTime ?? 0,
        opts.formatValue,
        opts.formatTime,
        opts.scrubAmount
      );
    } else {
      drawCandleCrosshair(
        ctx,
        layout,
        palette,
        opts.hoverX,
        opts.hoveredCandle,
        opts.hoverTime ?? 0,
        opts.formatValue,
        opts.formatTime,
        opts.scrubAmount
      );
    }
  }
}

// src/draw/loading.ts
function drawLoading(ctx, w, h, pad, palette, now_ms, alpha = 1, strokeColor) {
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const centerY = pad.top + chartH / 2;
  const leftX = pad.left;
  const amplitude = chartH * LOADING_AMPLITUDE_RATIO;
  const scroll = now_ms * LOADING_SCROLL_SPEED;
  const breath = loadingBreath(now_ms);
  const numPts = 32;
  const pts = [];
  for (let i = 0; i <= numPts; i++) {
    const t = i / numPts;
    const x = leftX + t * chartW;
    const y = loadingY(t, centerY, amplitude, scroll);
    pts.push([x, y]);
  }
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  drawSpline(ctx, pts);
  ctx.strokeStyle = strokeColor ?? palette.line;
  ctx.lineWidth = palette.lineWidth;
  ctx.globalAlpha = breath * alpha;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();
}

// src/draw/badge.ts
function badgeSvgPath(pillW, pillH, tailLen, tailSpread) {
  const r = pillH / 2;
  const cx = tailLen + pillW - r;
  const tl = tailLen + r;
  return [
    \`M\${tl},0\`,
    \`L\${cx},0\`,
    \`A\${r},\${r},0,0,1,\${cx},\${pillH}\`,
    \`L\${tl},\${pillH}\`,
    \`C\${tailLen + 2},\${pillH},\${3},\${r + tailSpread},0,\${r}\`,
    \`C\${3},\${r - tailSpread},\${tailLen + 2},0,\${tl},0\`,
    "Z"
  ].join(" ");
}
function badgePillOnly(pillW, pillH) {
  const r = pillH / 2;
  return [
    \`M\${r},0\`,
    \`L\${pillW - r},0\`,
    \`A\${r},\${r},0,0,1,\${pillW - r},\${pillH}\`,
    \`L\${r},\${pillH}\`,
    \`A\${r},\${r},0,0,1,\${r},0\`,
    "Z"
  ].join(" ");
}
var BADGE_PAD_X = 10;
var BADGE_PAD_Y = 3;
var BADGE_TAIL_LEN = 5;
var BADGE_TAIL_SPREAD = 2.5;
var BADGE_LINE_H = 16;

// src/useLivelineEngine.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var MAX_DELTA_MS = 50;
var SCRUB_LERP_SPEED = 0.12;
var BADGE_WIDTH_LERP = 0.15;
var BADGE_Y_LERP = 0.35;
var BADGE_Y_LERP_TRANSITIONING = 0.5;
var MOMENTUM_COLOR_LERP = 0.12;
var WINDOW_TRANSITION_MS = 750;
var WINDOW_BUFFER = 0.05;
var VALUE_SNAP_THRESHOLD = 1e-3;
var ADAPTIVE_SPEED_BOOST = 0.2;
var MOMENTUM_GREEN = [34, 197, 94];
var MOMENTUM_RED = [239, 68, 68];
var CHART_REVEAL_SPEED = 0.14;
var CHART_REVEAL_SPEED_FWD = 0.09;
var PAUSE_PROGRESS_SPEED = 0.12;
var PAUSE_CATCHUP_SPEED = 0.08;
var PAUSE_CATCHUP_SPEED_FAST = 0.22;
var LOADING_ALPHA_SPEED = 0.14;
var SERIES_TOGGLE_SPEED = 0.1;
var CANDLE_LERP_SPEED = 0.25;
var CANDLE_WIDTH_TRANS_MS = 300;
var LINE_MORPH_MS = 500;
var CLOSE_LINE_LERP_SPEED = 0.25;
var LINE_DENSITY_MS = 350;
var LINE_LERP_BASE = 0.08;
var LINE_ADAPTIVE_BOOST = 0.2;
var LINE_SNAP_THRESHOLD = 1e-3;
var RANGE_LERP_SPEED = 0.15;
var RANGE_ADAPTIVE_BOOST = 0.2;
var CANDLE_BUFFER = 0.05;
function computeAdaptiveSpeed(value, displayValue, displayMin, displayMax, lerpSpeed, noMotion) {
  const valGap = Math.abs(value - displayValue);
  const prevRange = displayMax - displayMin || 1;
  const gapRatio = Math.min(valGap / prevRange, 1);
  return noMotion ? 1 : lerpSpeed + (1 - gapRatio) * ADAPTIVE_SPEED_BOOST;
}
function updateWindowTransition(cfg, wt, displayWindow, displayMin, displayMax, noMotion, now_ms, now, points, smoothValue, buffer) {
  if (wt.to !== cfg.windowSecs) {
    wt.from = displayWindow;
    wt.to = cfg.windowSecs;
    wt.startMs = now_ms;
    wt.rangeFromMin = displayMin;
    wt.rangeFromMax = displayMax;
    const targetRightEdge = now + cfg.windowSecs * buffer;
    const targetLeftEdge = targetRightEdge - cfg.windowSecs;
    const targetVisible = [];
    for (const p of points) {
      if (p.time >= targetLeftEdge - 2 && p.time <= targetRightEdge) {
        targetVisible.push(p);
      }
    }
    if (targetVisible.length > 0) {
      const targetRange = computeRange(targetVisible, smoothValue, cfg.referenceLine?.value, cfg.exaggerate);
      wt.rangeToMin = targetRange.min;
      wt.rangeToMax = targetRange.max;
    }
  }
  let windowTransProgress = 0;
  let resultWindow;
  if (noMotion || wt.startMs === 0) {
    resultWindow = cfg.windowSecs;
  } else {
    const elapsed = now_ms - wt.startMs;
    const duration = WINDOW_TRANSITION_MS;
    const t = Math.min(elapsed / duration, 1);
    const eased = (1 - Math.cos(t * Math.PI)) / 2;
    windowTransProgress = eased;
    const logFrom = Math.log(wt.from);
    const logTo = Math.log(wt.to);
    resultWindow = Math.exp(logFrom + (logTo - logFrom) * eased);
    if (t >= 1) {
      resultWindow = cfg.windowSecs;
      wt.startMs = 0;
      windowTransProgress = 0;
    }
  }
  return { windowSecs: resultWindow, windowTransProgress };
}
function updateRange(computedRange, rangeInited, targetMin, targetMax, displayMin, displayMax, isTransitioning, windowTransProgress, wt, adaptiveSpeed, chartH, dt) {
  if (!rangeInited) {
    return {
      minVal: computedRange.min,
      maxVal: computedRange.max,
      valRange: computedRange.max - computedRange.min || 1e-3,
      targetMin: computedRange.min,
      targetMax: computedRange.max,
      displayMin: computedRange.min,
      displayMax: computedRange.max,
      rangeInited: true
    };
  }
  if (isTransitioning) {
    displayMin = wt.rangeFromMin + (wt.rangeToMin - wt.rangeFromMin) * windowTransProgress;
    displayMax = wt.rangeFromMax + (wt.rangeToMax - wt.rangeFromMax) * windowTransProgress;
    targetMin = computedRange.min;
    targetMax = computedRange.max;
  } else {
    const curRange = displayMax - displayMin;
    targetMin = computedRange.min;
    targetMax = computedRange.max;
    displayMin = lerp(displayMin, targetMin, adaptiveSpeed, dt);
    displayMax = lerp(displayMax, targetMax, adaptiveSpeed, dt);
    const pxThreshold = 0.5 * curRange / chartH || 1e-3;
    if (Math.abs(displayMin - targetMin) < pxThreshold) displayMin = targetMin;
    if (Math.abs(displayMax - targetMax) < pxThreshold) displayMax = targetMax;
  }
  return {
    minVal: displayMin,
    maxVal: displayMax,
    valRange: displayMax - displayMin || 1e-3,
    targetMin,
    targetMax,
    displayMin,
    displayMax,
    rangeInited: true
  };
}
function updateHoverState(hoverPixelX, pad, w, layout, now, visible, scrubAmount, lastHover, cfg, noMotion, leftEdge, rightEdge, chartW, dt) {
  let hoverValue = null;
  let hoverTime = null;
  let hoverChartX = null;
  let isActiveHover = false;
  if (hoverPixelX !== null && hoverPixelX >= pad.left && hoverPixelX <= w - pad.right) {
    const maxHoverX = layout.toX(now);
    const clampedX = Math.min(hoverPixelX, maxHoverX);
    const t = leftEdge + (clampedX - pad.left) / chartW * (rightEdge - leftEdge);
    const v = interpolateAtTime(visible, t);
    if (v !== null) {
      hoverValue = v;
      hoverTime = t;
      hoverChartX = clampedX;
      isActiveHover = true;
      lastHover = { x: clampedX, value: v, time: t };
      cfg.onHover?.({ time: t, value: v, x: clampedX, y: layout.toY(v) });
    }
  }
  const scrubTarget = isActiveHover ? 1 : 0;
  if (noMotion) {
    scrubAmount = scrubTarget;
  } else {
    scrubAmount += (scrubTarget - scrubAmount) * SCRUB_LERP_SPEED;
    if (scrubAmount < 0.01) scrubAmount = 0;
    if (scrubAmount > 0.99) scrubAmount = 1;
  }
  let drawHoverX = hoverChartX;
  let drawHoverValue = hoverValue;
  let drawHoverTime = hoverTime;
  if (!isActiveHover && scrubAmount > 0 && lastHover) {
    drawHoverX = lastHover.x;
    drawHoverValue = lastHover.value;
    drawHoverTime = lastHover.time;
  }
  return {
    hoverX: drawHoverX,
    hoverValue: drawHoverValue,
    hoverTime: drawHoverTime,
    scrubAmount,
    isActiveHover,
    lastHover
  };
}
function updateBadgeDOM(badge, cfg, smoothValue, layout, momentum, badgeY, badgeColor, isWindowTransitioning, noMotion, ctx, dt, chartReveal = 1) {
  if (!cfg.showBadge || chartReveal < 0.25) {
    badge.container.style.display = "none";
    return badgeY;
  }
  badge.container.style.display = "";
  const badgeOpacity = chartReveal < 0.5 ? (chartReveal - 0.25) / 0.25 : 1;
  badge.container.style.opacity = badgeOpacity < 1 ? String(badgeOpacity) : "";
  const { w, h, pad } = layout;
  const text = cfg.formatValue(smoothValue);
  badge.text.textContent = text;
  badge.text.style.font = cfg.palette.labelFont;
  badge.text.style.lineHeight = \`\${BADGE_LINE_H}px\`;
  const tailLen = cfg.badgeTail ? BADGE_TAIL_LEN : 0;
  badge.text.style.padding = \`\${BADGE_PAD_Y}px \${BADGE_PAD_X}px \${BADGE_PAD_Y}px \${tailLen + BADGE_PAD_X}px\`;
  ctx.font = cfg.palette.labelFont;
  const template = text.replace(/[0-9]/g, "8");
  const targetTextW = ctx.measureText(template).width;
  badge.targetW = targetTextW;
  if (badge.displayW === 0) badge.displayW = targetTextW;
  badge.displayW = lerp(badge.displayW, badge.targetW, BADGE_WIDTH_LERP, dt);
  if (Math.abs(badge.displayW - badge.targetW) < 0.3) badge.displayW = badge.targetW;
  const textW = badge.displayW;
  const pillW = textW + BADGE_PAD_X * 2;
  const pillH = BADGE_LINE_H + BADGE_PAD_Y * 2;
  const totalW = tailLen + pillW;
  badge.svg.setAttribute("width", String(Math.ceil(totalW)));
  badge.svg.setAttribute("height", String(pillH));
  badge.svg.setAttribute("viewBox", \`0 0 \${totalW} \${pillH}\`);
  badge.path.setAttribute("d", cfg.badgeTail ? badgeSvgPath(pillW, pillH, BADGE_TAIL_LEN, BADGE_TAIL_SPREAD) : badgePillOnly(pillW, pillH));
  const centerY = pad.top + layout.chartH / 2;
  const realTargetY = Math.max(pad.top, Math.min(h - pad.bottom, layout.toY(smoothValue)));
  const targetBadgeY = chartReveal < 1 ? centerY + (realTargetY - centerY) * chartReveal : realTargetY;
  if (badgeY === null || noMotion) {
    badgeY = targetBadgeY;
  } else {
    const badgeSpeed = isWindowTransitioning ? BADGE_Y_LERP_TRANSITIONING : BADGE_Y_LERP;
    badgeY = lerp(badgeY, targetBadgeY, badgeSpeed, dt);
  }
  const badgeLeft = w - pad.right + 8 - BADGE_PAD_X - tailLen;
  const badgeTop = badgeY - pillH / 2;
  badge.container.style.transform = \`translate3d(\${badgeLeft}px, \${badgeTop}px, 0)\`;
  if (cfg.badgeVariant === "minimal") {
    badge.path.setAttribute("fill", cfg.palette.badgeOuterBg);
    badge.text.style.color = cfg.palette.tooltipText;
    badge.container.style.filter = \`drop-shadow(0 1px 4px \${cfg.palette.badgeOuterShadow})\`;
  } else {
    badge.container.style.filter = "";
    badge.text.style.color = "#fff";
    const bs = badgeColor;
    let fillColor;
    if (!cfg.showMomentum) {
      fillColor = cfg.palette.line;
    } else {
      const target = momentum === "up" ? 1 : momentum === "down" ? 0 : bs.green;
      bs.green = noMotion ? target : lerp(bs.green, target, MOMENTUM_COLOR_LERP, dt);
      if (bs.green > 0.99) bs.green = 1;
      if (bs.green < 0.01) bs.green = 0;
      const g = bs.green;
      const rr = Math.round(MOMENTUM_RED[0] + (MOMENTUM_GREEN[0] - MOMENTUM_RED[0]) * g);
      const gg = Math.round(MOMENTUM_RED[1] + (MOMENTUM_GREEN[1] - MOMENTUM_RED[1]) * g);
      const bb = Math.round(MOMENTUM_RED[2] + (MOMENTUM_GREEN[2] - MOMENTUM_RED[2]) * g);
      fillColor = \`rgb(\${rr},\${gg},\${bb})\`;
    }
    badge.path.setAttribute("fill", fillColor);
  }
  return badgeY;
}
function computeCandleRange(candles) {
  let min = Infinity;
  let max = -Infinity;
  for (const c of candles) {
    if (c.low < min) min = c.low;
    if (c.high > max) max = c.high;
  }
  if (!isFinite(min) || !isFinite(max)) return { min: 99, max: 101 };
  const range = max - min;
  const margin = range * 0.12;
  const minRange = range * 0.1 || 0.4;
  if (range < minRange) {
    const mid = (min + max) / 2;
    return { min: mid - minRange / 2, max: mid + minRange / 2 };
  }
  return { min: min - margin, max: max + margin };
}
function candleAtX(candles, hoverX, candleWidth, layout) {
  const time = layout.leftEdge + (hoverX - layout.pad.left) / layout.chartW * (layout.rightEdge - layout.leftEdge);
  let lo = 0;
  let hi = candles.length - 1;
  while (lo <= hi) {
    const mid = lo + hi >> 1;
    const c = candles[mid];
    if (time < c.time) hi = mid - 1;
    else if (time >= c.time + candleWidth) lo = mid + 1;
    else return c;
  }
  return null;
}
function updateCandleRange(computedRange, rangeInited, displayMin, displayMax, isTransitioning, windowTransProgress, wt, chartH, dt) {
  if (!rangeInited) {
    return {
      minVal: computedRange.min,
      maxVal: computedRange.max,
      valRange: computedRange.max - computedRange.min || 1e-3,
      displayMin: computedRange.min,
      displayMax: computedRange.max,
      rangeInited: true
    };
  }
  if (isTransitioning) {
    displayMin = wt.rangeFromMin + (wt.rangeToMin - wt.rangeFromMin) * windowTransProgress;
    displayMax = wt.rangeFromMax + (wt.rangeToMax - wt.rangeFromMax) * windowTransProgress;
  } else {
    const curRange = displayMax - displayMin || 1;
    const gapMin = Math.abs(displayMin - computedRange.min);
    const gapMax = Math.abs(displayMax - computedRange.max);
    const gapRatio = Math.min((gapMin + gapMax) / curRange, 1);
    const speed = RANGE_LERP_SPEED + (1 - gapRatio) * RANGE_ADAPTIVE_BOOST;
    displayMin = lerp(displayMin, computedRange.min, speed, dt);
    displayMax = lerp(displayMax, computedRange.max, speed, dt);
    const pxThreshold = 0.5 * curRange / chartH || 1e-3;
    if (Math.abs(displayMin - computedRange.min) < pxThreshold) displayMin = computedRange.min;
    if (Math.abs(displayMax - computedRange.max) < pxThreshold) displayMax = computedRange.max;
  }
  return {
    minVal: displayMin,
    maxVal: displayMax,
    valRange: displayMax - displayMin || 1e-3,
    displayMin,
    displayMax,
    rangeInited: true
  };
}
function updateCandleWindowTransition(targetWindowSecs, wt, displayWindow, displayMin, displayMax, now_ms, now, candles, liveCandle, candleWidth, buffer) {
  if (wt.to !== targetWindowSecs) {
    wt.from = displayWindow;
    wt.to = targetWindowSecs;
    wt.startMs = now_ms;
    wt.rangeFromMin = displayMin;
    wt.rangeFromMax = displayMax;
    const targetRightEdge = now + targetWindowSecs * buffer;
    const targetLeftEdge = targetRightEdge - targetWindowSecs;
    const targetVisible = [];
    for (const c of candles) {
      if (c.time + candleWidth >= targetLeftEdge && c.time <= targetRightEdge) {
        targetVisible.push(c);
      }
    }
    if (liveCandle && liveCandle.time + candleWidth >= targetLeftEdge && liveCandle.time <= targetRightEdge) {
      targetVisible.push(liveCandle);
    }
    if (targetVisible.length > 0) {
      const tr = computeCandleRange(targetVisible);
      wt.rangeToMin = tr.min;
      wt.rangeToMax = tr.max;
    }
  }
  let windowTransProgress = 0;
  let resultWindow;
  if (wt.startMs === 0) {
    resultWindow = targetWindowSecs;
  } else {
    const elapsed = now_ms - wt.startMs;
    const t = Math.min(elapsed / WINDOW_TRANSITION_MS, 1);
    const eased = (1 - Math.cos(t * Math.PI)) / 2;
    windowTransProgress = eased;
    const logFrom = Math.log(wt.from);
    const logTo = Math.log(wt.to);
    resultWindow = Math.exp(logFrom + (logTo - logFrom) * eased);
    if (t >= 1) {
      resultWindow = targetWindowSecs;
      wt.startMs = 0;
      windowTransProgress = 0;
    }
  }
  return { windowSecs: resultWindow, windowTransProgress };
}
function useLivelineEngine(canvasRef, containerRef, config) {
  const configRef = (0, import_react.useRef)(config);
  configRef.current = config;
  const displayValueRef = (0, import_react.useRef)(config.value);
  const displayValuesRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
  const seriesAlphaRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
  const displayMinRef = (0, import_react.useRef)(0);
  const displayMaxRef = (0, import_react.useRef)(0);
  const targetMinRef = (0, import_react.useRef)(0);
  const targetMaxRef = (0, import_react.useRef)(0);
  const rangeInitedRef = (0, import_react.useRef)(false);
  const displayWindowRef = (0, import_react.useRef)(config.windowSecs);
  const windowTransitionRef = (0, import_react.useRef)({
    from: config.windowSecs,
    to: config.windowSecs,
    startMs: 0,
    rangeFromMin: 0,
    rangeFromMax: 0,
    rangeToMin: 0,
    rangeToMax: 0
  });
  const arrowStateRef = (0, import_react.useRef)({ up: 0, down: 0 });
  const gridStateRef = (0, import_react.useRef)({ interval: 0, labels: /* @__PURE__ */ new Map() });
  const timeAxisStateRef = (0, import_react.useRef)({ labels: /* @__PURE__ */ new Map() });
  const orderbookStateRef = (0, import_react.useRef)(createOrderbookState());
  const particleStateRef = (0, import_react.useRef)(createParticleState());
  const shakeStateRef = (0, import_react.useRef)(createShakeState());
  const badgeColorRef = (0, import_react.useRef)({ green: 1 });
  const badgeYRef = (0, import_react.useRef)(null);
  const reducedMotionRef = (0, import_react.useRef)(false);
  const sizeRef = (0, import_react.useRef)({ w: 0, h: 0 });
  const ctxRef = (0, import_react.useRef)(null);
  const rafRef = (0, import_react.useRef)(0);
  const lastFrameRef = (0, import_react.useRef)(0);
  const badgeRef = (0, import_react.useRef)(null);
  const hoverXRef = (0, import_react.useRef)(null);
  const scrubAmountRef = (0, import_react.useRef)(0);
  const lastHoverRef = (0, import_react.useRef)(null);
  const lastHoverEntriesRef = (0, import_react.useRef)([]);
  const chartRevealRef = (0, import_react.useRef)(0);
  const pauseProgressRef = (0, import_react.useRef)(0);
  const timeDebtRef = (0, import_react.useRef)(0);
  const lastDataRef = (0, import_react.useRef)([]);
  const lastMultiSeriesRef = (0, import_react.useRef)([]);
  const frozenNowRef = (0, import_react.useRef)(0);
  const pausedDataRef = (0, import_react.useRef)(null);
  const pausedMultiDataRef = (0, import_react.useRef)(null);
  const loadingAlphaRef = (0, import_react.useRef)(config.loading ? 1 : 0);
  const displayCandleRef = (0, import_react.useRef)(null);
  const liveBirthAlphaRef = (0, import_react.useRef)(1);
  const liveBullRef = (0, import_react.useRef)(0.5);
  const lineSmoothCloseRef = (0, import_react.useRef)(0);
  const lineSmoothInitedRef = (0, import_react.useRef)(false);
  const closeLineSmoothRef = (0, import_react.useRef)(0);
  const closeLineSmoothInitedRef = (0, import_react.useRef)(false);
  const lineModeProgRef = (0, import_react.useRef)(0);
  const lineModeTransRef = (0, import_react.useRef)({ startMs: 0, from: 0, to: 0 });
  const lineDensityProgRef = (0, import_react.useRef)(0);
  const lineDensityTransRef = (0, import_react.useRef)({ startMs: 0, from: 0, to: 0 });
  const lineTickSmoothRef = (0, import_react.useRef)(0);
  const lineTickSmoothInitedRef = (0, import_react.useRef)(false);
  const candleWidthTransRef = (0, import_react.useRef)({
    fromWidth: config.candleWidth ?? 1,
    toWidth: config.candleWidth ?? 1,
    startMs: 0,
    rangeFromMin: 0,
    rangeFromMax: 0,
    rangeToMin: 0,
    rangeToMax: 0,
    oldCandles: [],
    oldWidth: config.candleWidth ?? 1
  });
  const prevCandleDataRef = (0, import_react.useRef)({ candles: [], width: config.candleWidth ?? 1 });
  const pausedCandlesRef = (0, import_react.useRef)(null);
  const pausedLiveRef = (0, import_react.useRef)(null);
  const pausedLineDataRef = (0, import_react.useRef)(null);
  const pausedLineValueRef = (0, import_react.useRef)(null);
  const lastCandlesRef = (0, import_react.useRef)([]);
  const lastLiveRef = (0, import_react.useRef)(null);
  const lastLineDataStashRef = (0, import_react.useRef)([]);
  const lastLineValueStashRef = (0, import_react.useRef)(void 0);
  (0, import_react.useEffect)(() => {
    const container = containerRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;will-change:transform;display:none;z-index:1;";
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.style.cssText = "position:absolute;top:0;left:0;";
    const path = document.createElementNS(SVG_NS, "path");
    svg.appendChild(path);
    const text = document.createElement("span");
    text.style.cssText = "position:relative;display:block;color:#fff;white-space:nowrap;";
    el.appendChild(svg);
    el.appendChild(text);
    container.appendChild(el);
    badgeRef.current = { container: el, svg, path, text, displayW: 0, targetW: 0 };
    return () => {
      container.removeChild(el);
      badgeRef.current = null;
    };
  }, [containerRef]);
  (0, import_react.useEffect)(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      sizeRef.current = { w: width, h: height };
    });
    ro.observe(container);
    const rect = container.getBoundingClientRect();
    sizeRef.current = { w: rect.width, h: rect.height };
    return () => ro.disconnect();
  }, [containerRef]);
  (0, import_react.useEffect)(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMove = (e) => {
      if (!configRef.current.scrub) return;
      const rect = container.getBoundingClientRect();
      hoverXRef.current = e.clientX - rect.left;
    };
    const onLeave = () => {
      hoverXRef.current = null;
      configRef.current.onHover?.(null);
    };
    const onTouchStart = (e) => {
      if (!configRef.current.scrub) return;
      if (e.touches.length !== 1) return;
      const rect = container.getBoundingClientRect();
      hoverXRef.current = e.touches[0].clientX - rect.left;
    };
    const onTouchMove = (e) => {
      if (!configRef.current.scrub) return;
      if (e.touches.length !== 1) return;
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      hoverXRef.current = e.touches[0].clientX - rect.left;
    };
    const onTouchEnd = () => {
      hoverXRef.current = null;
      configRef.current.onHover?.(null);
    };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("touchcancel", onTouchEnd);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [containerRef]);
  (0, import_react.useEffect)(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;
    const onChange = (e) => {
      reducedMotionRef.current = e.matches;
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  (0, import_react.useEffect)(() => {
    const onVisibility = () => {
      if (!document.hidden && !rafRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  const draw = (0, import_react.useCallback)(() => {
    if (document.hidden) {
      rafRef.current = 0;
      return;
    }
    const canvas = canvasRef.current;
    const { w, h } = sizeRef.current;
    if (!canvas || w === 0 || h === 0) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }
    const cfg = configRef.current;
    const dpr = getDpr();
    const now_ms = performance.now();
    const dt = lastFrameRef.current ? Math.min(now_ms - lastFrameRef.current, MAX_DELTA_MS) : 16.67;
    lastFrameRef.current = now_ms;
    const targetW = Math.round(w * dpr);
    const targetH = Math.round(h * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = \`\${w}px\`;
      canvas.style.height = \`\${h}px\`;
    }
    let ctx = ctxRef.current;
    if (!ctx || ctx.canvas !== canvas) {
      ctx = canvas.getContext("2d");
      ctxRef.current = ctx;
    }
    if (!ctx) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }
    applyDpr(ctx, dpr, w, h);
    const noMotion = reducedMotionRef.current;
    const isCandle = cfg.mode === "candle";
    if (isCandle) {
      if (cfg.paused && pausedCandlesRef.current === null && (cfg.candles?.length ?? 0) > 0) {
        pausedCandlesRef.current = cfg.candles.slice();
        pausedLiveRef.current = cfg.liveCandle ?? null;
        pausedLineDataRef.current = cfg.lineData?.slice() ?? null;
        pausedLineValueRef.current = cfg.lineValue ?? null;
      }
      if (!cfg.paused) {
        pausedCandlesRef.current = null;
        pausedLiveRef.current = null;
        pausedLineDataRef.current = null;
        pausedLineValueRef.current = null;
      }
    } else if (cfg.isMultiSeries && cfg.multiSeries) {
      if (cfg.paused && pausedMultiDataRef.current === null) {
        const snap = /* @__PURE__ */ new Map();
        for (const s of cfg.multiSeries) {
          if (s.data.length >= 2) snap.set(s.id, { data: s.data.slice(), value: s.value });
        }
        if (snap.size > 0) pausedMultiDataRef.current = snap;
      }
      if (!cfg.paused) {
        pausedMultiDataRef.current = null;
      }
    } else {
      if (cfg.paused && pausedDataRef.current === null && cfg.data.length >= 2) {
        pausedDataRef.current = cfg.data.slice();
      }
      if (!cfg.paused) {
        pausedDataRef.current = null;
      }
    }
    const points = isCandle ? [] : pausedDataRef.current ?? cfg.data;
    const effectiveCandles = isCandle ? pausedCandlesRef.current ?? (cfg.candles ?? []) : [];
    const hasMultiData = cfg.isMultiSeries && cfg.multiSeries ? cfg.multiSeries.some((s) => s.data.length >= 2) : false;
    const hasData = isCandle ? effectiveCandles.length >= 2 : hasMultiData || points.length >= 2;
    const pad = cfg.padding;
    const chartH = h - pad.top - pad.bottom;
    const pauseTarget = cfg.paused ? 1 : 0;
    pauseProgressRef.current = noMotion ? pauseTarget : lerp(pauseProgressRef.current, pauseTarget, PAUSE_PROGRESS_SPEED, dt);
    if (pauseProgressRef.current < 5e-3) pauseProgressRef.current = 0;
    if (pauseProgressRef.current > 0.995) pauseProgressRef.current = 1;
    const pauseProgress = pauseProgressRef.current;
    const pausedDt = dt * (1 - pauseProgress);
    const realDtSec = dt / 1e3;
    timeDebtRef.current += realDtSec * pauseProgress;
    if (!cfg.paused && timeDebtRef.current > 1e-3) {
      const catchUpSpeed = timeDebtRef.current > 10 ? PAUSE_CATCHUP_SPEED_FAST : PAUSE_CATCHUP_SPEED;
      timeDebtRef.current = lerp(timeDebtRef.current, 0, catchUpSpeed, dt);
      if (timeDebtRef.current < 0.01) timeDebtRef.current = 0;
    }
    const loadingTarget = cfg.loading ? 1 : 0;
    loadingAlphaRef.current = noMotion ? loadingTarget : lerp(loadingAlphaRef.current, loadingTarget, LOADING_ALPHA_SPEED, dt);
    if (loadingAlphaRef.current < 0.01) loadingAlphaRef.current = 0;
    if (loadingAlphaRef.current > 0.99) loadingAlphaRef.current = 1;
    const loadingAlpha = loadingAlphaRef.current;
    const revealTarget = !cfg.loading && hasData ? 1 : 0;
    chartRevealRef.current = noMotion ? revealTarget : lerp(
      chartRevealRef.current,
      revealTarget,
      revealTarget === 1 ? CHART_REVEAL_SPEED_FWD : CHART_REVEAL_SPEED,
      dt
    );
    if (Math.abs(chartRevealRef.current - revealTarget) < 5e-3) {
      chartRevealRef.current = revealTarget;
    }
    const chartReveal = chartRevealRef.current;
    if (chartReveal < 0.01) {
      rangeInitedRef.current = false;
    }
    let useStash;
    let useMultiStash = false;
    if (isCandle) {
      useStash = !hasData && chartReveal > 5e-3 && lastCandlesRef.current.length > 0;
    } else {
      useMultiStash = !hasData && chartReveal > 5e-3 && lastMultiSeriesRef.current.length > 0;
      if (hasMultiData && cfg.multiSeries) {
        lastMultiSeriesRef.current = cfg.multiSeries.map((s) => ({
          id: s.id,
          data: s.data.slice(),
          value: s.value,
          palette: s.palette,
          label: s.label
        }));
      }
      if (hasData && !cfg.isMultiSeries) lastMultiSeriesRef.current = [];
      useStash = !useMultiStash && !hasData && chartReveal > 5e-3 && lastDataRef.current.length >= 2;
      if (hasData && !cfg.isMultiSeries) lastDataRef.current = points;
    }
    if (isCandle) {
      const lmt = lineModeTransRef.current;
      const lineModeTarget = cfg.lineMode ? 1 : 0;
      if (lmt.to !== lineModeTarget) {
        lmt.from = lineModeProgRef.current;
        lmt.to = lineModeTarget;
        lmt.startMs = now_ms;
      }
      if (lmt.startMs > 0) {
        const elapsed = now_ms - lmt.startMs;
        const t = Math.min(elapsed / LINE_MORPH_MS, 1);
        lineModeProgRef.current = lmt.from + (lmt.to - lmt.from) * ((1 - Math.cos(t * Math.PI)) / 2);
        if (t >= 1) {
          lineModeProgRef.current = lmt.to;
          lmt.startMs = 0;
        }
      } else {
        lineModeProgRef.current = lmt.to;
      }
    }
    if (!hasData && !useStash && !useMultiStash) {
      const loadingColor = isCandle || cfg.isMultiSeries || lastMultiSeriesRef.current.length > 0 ? cfg.palette.gridLabel : void 0;
      if (loadingAlpha > 0.01) {
        drawLoading(ctx, w, h, pad, cfg.palette, now_ms, loadingAlpha, loadingColor);
      }
      if (1 - loadingAlpha > 0.01) {
        drawEmpty(ctx, w, h, pad, cfg.palette, 1 - loadingAlpha, now_ms, false, cfg.emptyText);
      }
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      const fadeGrad = ctx.createLinearGradient(pad.left, 0, pad.left + FADE_EDGE_WIDTH, 0);
      fadeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
      fadeGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = fadeGrad;
      ctx.fillRect(0, 0, pad.left + FADE_EDGE_WIDTH, h);
      ctx.restore();
      if (badgeRef.current) badgeRef.current.container.style.display = "none";
      rafRef.current = requestAnimationFrame(draw);
      return;
    }
    if (isCandle) {
      if (hasData) frozenNowRef.current = Date.now() / 1e3 - timeDebtRef.current;
      const now = hasData || chartReveal < 5e-3 ? Date.now() / 1e3 - timeDebtRef.current : frozenNowRef.current;
      const rawLive = pausedCandlesRef.current ? pausedLiveRef.current ?? void 0 : cfg.liveCandle;
      let effectiveLineData = pausedLineDataRef.current ?? cfg.lineData;
      let effectiveLineValue = pausedLineValueRef.current ?? cfg.lineValue;
      if (hasData && effectiveLineData && effectiveLineData.length > 0) {
        lastLineDataStashRef.current = effectiveLineData;
        lastLineValueStashRef.current = effectiveLineValue;
      }
      if (useStash && lastLineDataStashRef.current.length > 0) {
        effectiveLineData = lastLineDataStashRef.current;
        effectiveLineValue = lastLineValueStashRef.current;
      }
      const candleWidthSecs = cfg.candleWidth ?? 1;
      const cwt = candleWidthTransRef.current;
      let morphT = -1;
      let displayCandleWidth;
      if (cwt.startMs > 0) {
        const elapsed = now_ms - cwt.startMs;
        const t = Math.min(elapsed / CANDLE_WIDTH_TRANS_MS, 1);
        morphT = (1 - Math.cos(t * Math.PI)) / 2;
        displayCandleWidth = Math.exp(
          Math.log(cwt.fromWidth) + (Math.log(cwt.toWidth) - Math.log(cwt.fromWidth)) * morphT
        );
        if (t >= 1) {
          displayCandleWidth = cwt.toWidth;
          cwt.startMs = 0;
          morphT = -1;
        }
      } else {
        displayCandleWidth = cwt.toWidth;
      }
      if (candleWidthSecs !== cwt.toWidth) {
        cwt.oldCandles = prevCandleDataRef.current.candles;
        cwt.oldWidth = prevCandleDataRef.current.width;
        cwt.fromWidth = displayCandleWidth;
        cwt.toWidth = candleWidthSecs;
        cwt.startMs = now_ms;
        morphT = 0;
        cwt.rangeFromMin = displayMinRef.current;
        cwt.rangeFromMax = displayMaxRef.current;
        const curWindow = displayWindowRef.current;
        const re = now + curWindow * CANDLE_BUFFER;
        const le = re - curWindow;
        const targetVis = [];
        for (const c of effectiveCandles) {
          if (c.time + candleWidthSecs >= le && c.time <= re) targetVis.push(c);
        }
        if (rawLive) targetVis.push(rawLive);
        if (targetVis.length > 0) {
          const tr = computeCandleRange(targetVis);
          cwt.rangeToMin = tr.min;
          cwt.rangeToMax = tr.max;
        } else {
          cwt.rangeToMin = displayMinRef.current;
          cwt.rangeToMax = displayMaxRef.current;
        }
      }
      prevCandleDataRef.current = { candles: cfg.candles ?? [], width: candleWidthSecs };
      const lineModeProg = lineModeProgRef.current;
      const ldt = lineDensityTransRef.current;
      const hasTickData = effectiveLineData && effectiveLineData.length > 0;
      const densityTarget = cfg.lineMode && lineModeProg >= 0.3 && hasTickData ? 1 : 0;
      if (ldt.to !== densityTarget) {
        ldt.from = lineDensityProgRef.current;
        ldt.to = densityTarget;
        ldt.startMs = now_ms;
      }
      let lineDensityProg;
      if (ldt.startMs > 0) {
        const elapsed = now_ms - ldt.startMs;
        const t = Math.min(elapsed / LINE_DENSITY_MS, 1);
        lineDensityProg = ldt.from + (ldt.to - ldt.from) * (1 - (1 - t) * (1 - t));
        if (t >= 1) {
          lineDensityProg = ldt.to;
          ldt.startMs = 0;
        }
      } else {
        lineDensityProg = ldt.to;
      }
      lineDensityProgRef.current = lineDensityProg;
      const transition = windowTransitionRef.current;
      const windowResult = updateCandleWindowTransition(
        cfg.windowSecs,
        transition,
        displayWindowRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        now_ms,
        now,
        effectiveCandles,
        rawLive,
        candleWidthSecs,
        CANDLE_BUFFER
      );
      displayWindowRef.current = windowResult.windowSecs;
      const windowSecs = windowResult.windowSecs;
      const windowTransProgress = windowResult.windowTransProgress;
      const isWindowTransitioning = transition.startMs > 0;
      const rightEdge = now + windowSecs * CANDLE_BUFFER;
      const leftEdge = rightEdge - windowSecs;
      let smoothLive;
      if (rawLive) {
        const prev = displayCandleRef.current;
        if (!prev || prev.time !== rawLive.time) {
          displayCandleRef.current = {
            time: rawLive.time,
            open: rawLive.open,
            high: rawLive.open,
            low: rawLive.open,
            close: rawLive.open
          };
          liveBirthAlphaRef.current = 0;
        } else {
          const dc2 = displayCandleRef.current;
          dc2.open = lerp(dc2.open, rawLive.open, CANDLE_LERP_SPEED, pausedDt);
          dc2.high = lerp(dc2.high, rawLive.high, CANDLE_LERP_SPEED, pausedDt);
          dc2.low = lerp(dc2.low, rawLive.low, CANDLE_LERP_SPEED, pausedDt);
          dc2.close = lerp(dc2.close, rawLive.close, CANDLE_LERP_SPEED, pausedDt);
        }
        liveBirthAlphaRef.current = lerp(liveBirthAlphaRef.current, 1, 0.2, pausedDt);
        if (liveBirthAlphaRef.current > 0.99) liveBirthAlphaRef.current = 1;
        const dc = displayCandleRef.current;
        const bullTarget = dc.close >= dc.open ? 1 : 0;
        liveBullRef.current = lerp(liveBullRef.current, bullTarget, 0.12, pausedDt);
        if (liveBullRef.current > 0.99) liveBullRef.current = 1;
        if (liveBullRef.current < 0.01) liveBullRef.current = 0;
        smoothLive = dc;
      } else {
        displayCandleRef.current = null;
        liveBirthAlphaRef.current = 1;
        liveBullRef.current = 0.5;
      }
      if (rawLive) {
        if (!closeLineSmoothInitedRef.current) {
          closeLineSmoothRef.current = rawLive.close;
          closeLineSmoothInitedRef.current = true;
        } else {
          closeLineSmoothRef.current = lerp(closeLineSmoothRef.current, rawLive.close, CLOSE_LINE_LERP_SPEED, pausedDt);
          const gap = Math.abs(closeLineSmoothRef.current - rawLive.close);
          const range = displayMaxRef.current - displayMinRef.current || 1;
          if (gap < range * 5e-4) closeLineSmoothRef.current = rawLive.close;
        }
      } else if (!useStash) {
        closeLineSmoothInitedRef.current = false;
      }
      if (rawLive) {
        if (!lineSmoothInitedRef.current) {
          lineSmoothCloseRef.current = rawLive.close;
          lineSmoothInitedRef.current = true;
        } else {
          const valGap = Math.abs(rawLive.close - lineSmoothCloseRef.current);
          const prevRange = displayMaxRef.current - displayMinRef.current || 1;
          const gapRatio = Math.min(valGap / prevRange, 1);
          const adaptiveSpeed = LINE_LERP_BASE + (1 - gapRatio) * LINE_ADAPTIVE_BOOST;
          lineSmoothCloseRef.current = lerp(lineSmoothCloseRef.current, rawLive.close, adaptiveSpeed, pausedDt);
          if (valGap < prevRange * LINE_SNAP_THRESHOLD) lineSmoothCloseRef.current = rawLive.close;
        }
      } else if (!useStash) {
        lineSmoothInitedRef.current = false;
      }
      if (effectiveLineValue !== void 0 && hasTickData) {
        if (!lineTickSmoothInitedRef.current) {
          lineTickSmoothRef.current = effectiveLineValue;
          lineTickSmoothInitedRef.current = true;
        } else {
          const valGap = Math.abs(effectiveLineValue - lineTickSmoothRef.current);
          const prevRange = displayMaxRef.current - displayMinRef.current || 1;
          const gapRatio = Math.min(valGap / prevRange, 1);
          const adaptiveSpeed = LINE_LERP_BASE + (1 - gapRatio) * LINE_ADAPTIVE_BOOST;
          lineTickSmoothRef.current = lerp(lineTickSmoothRef.current, effectiveLineValue, adaptiveSpeed, pausedDt);
          if (valGap < prevRange * LINE_SNAP_THRESHOLD) lineTickSmoothRef.current = effectiveLineValue;
        }
      } else if (!useStash) {
        lineTickSmoothInitedRef.current = false;
      }
      const visible = [];
      for (const c of effectiveCandles) {
        if (c.time + candleWidthSecs >= leftEdge && c.time <= rightEdge) visible.push(c);
      }
      if (smoothLive && smoothLive.time + displayCandleWidth >= leftEdge && smoothLive.time <= rightEdge) {
        visible.push(smoothLive);
      }
      let oldVisible = [];
      if (morphT >= 0 && cwt.oldCandles.length > 0) {
        for (const c of cwt.oldCandles) {
          if (c.time + cwt.oldWidth >= leftEdge && c.time <= rightEdge) oldVisible.push(c);
        }
      }
      if (hasData) {
        lastCandlesRef.current = visible;
        lastLiveRef.current = smoothLive ?? null;
      }
      const effectiveVisible = useStash ? lastCandlesRef.current : visible;
      const effectiveLive = useStash ? lastLiveRef.current ?? void 0 : smoothLive;
      const chartW = w - pad.left - pad.right;
      const computed = effectiveVisible.length > 0 ? computeCandleRange(effectiveVisible) : { min: displayMinRef.current, max: displayMaxRef.current };
      const rangeResult = updateCandleRange(
        computed,
        rangeInitedRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        isWindowTransitioning,
        windowTransProgress,
        transition,
        chartH,
        pausedDt
      );
      if (morphT >= 0) {
        rangeResult.displayMin = cwt.rangeFromMin + (cwt.rangeToMin - cwt.rangeFromMin) * morphT;
        rangeResult.displayMax = cwt.rangeFromMax + (cwt.rangeToMax - cwt.rangeFromMax) * morphT;
        rangeResult.minVal = rangeResult.displayMin;
        rangeResult.maxVal = rangeResult.displayMax;
        rangeResult.valRange = rangeResult.displayMax - rangeResult.displayMin || 1e-3;
      }
      rangeInitedRef.current = rangeResult.rangeInited;
      displayMinRef.current = rangeResult.displayMin;
      displayMaxRef.current = rangeResult.displayMax;
      const { minVal, maxVal, valRange } = rangeResult;
      const layout = {
        w,
        h,
        pad,
        chartW,
        chartH,
        leftEdge,
        rightEdge,
        minVal,
        maxVal,
        valRange,
        toX: (t) => pad.left + (t - leftEdge) / (rightEdge - leftEdge) * chartW,
        toY: (v) => pad.top + (1 - (v - minVal) / valRange) * chartH
      };
      const hoverPx = hoverXRef.current;
      let hoveredCandle = null;
      let isActiveHover = false;
      if (hoverPx !== null && hoverPx >= pad.left && hoverPx <= w - pad.right) {
        hoveredCandle = candleAtX(effectiveVisible, hoverPx, displayCandleWidth, layout);
        if (hoveredCandle) isActiveHover = true;
      }
      const scrubTarget = isActiveHover ? 1 : 0;
      scrubAmountRef.current = lerp(scrubAmountRef.current, scrubTarget, 0.12, dt);
      if (scrubAmountRef.current < 0.01) scrubAmountRef.current = 0;
      if (scrubAmountRef.current > 0.99) scrubAmountRef.current = 1;
      const scrubAmount = scrubAmountRef.current;
      let drawHoverX = hoverPx;
      let drawHoverTime = 0;
      let drawHoverCandle = hoveredCandle;
      if (!isActiveHover && scrubAmount > 0 && lastHoverRef.current) {
        drawHoverX = lastHoverRef.current.x;
        drawHoverTime = lastHoverRef.current.time;
        drawHoverCandle = candleAtX(effectiveVisible, lastHoverRef.current.x, displayCandleWidth, layout);
      } else if (isActiveHover && hoverPx !== null) {
        drawHoverTime = layout.leftEdge + (hoverPx - pad.left) / chartW * (layout.rightEdge - layout.leftEdge);
        lastHoverRef.current = { x: hoverPx, value: hoveredCandle?.close ?? 0, time: drawHoverTime };
      }
      let drawCandles = effectiveVisible;
      let drawOldCandles = oldVisible;
      let drawLive = effectiveLive;
      if (lineModeProg > 0.01 && drawLive && lineSmoothInitedRef.current) {
        const blended = drawLive.close + (lineSmoothCloseRef.current - drawLive.close) * lineModeProg;
        drawLive = { ...drawLive, close: blended };
        const li = drawCandles.length - 1;
        if (li >= 0 && drawCandles[li].time === drawLive.time) {
          drawCandles = drawCandles.slice();
          drawCandles[li] = { ...drawCandles[li], close: blended };
        }
      }
      if (lineModeProg > 0.01 && lineModeProg < 0.99) {
        const collapseOHLC = (c) => {
          const inv = 1 - lineModeProg;
          return {
            time: c.time,
            open: c.close + (c.open - c.close) * inv,
            high: c.close + (c.high - c.close) * inv,
            low: c.close + (c.low - c.close) * inv,
            close: c.close
          };
        };
        drawCandles = drawCandles.map(collapseOHLC);
        if (drawOldCandles.length > 0) drawOldCandles = drawOldCandles.map(collapseOHLC);
        if (drawLive) drawLive = collapseOHLC(drawLive);
      }
      let lineVisible;
      let lineSmoothValue;
      if (effectiveLineData && effectiveLineData.length > 0 && (lineDensityProg > 0.01 || lineModeProg > 0.05)) {
        const closeRefs = [];
        for (const c of drawCandles) {
          closeRefs.push({ t: c.time + displayCandleWidth / 2, v: c.close });
        }
        if (drawLive) closeRefs.push({ t: now, v: drawLive.close });
        lineVisible = [];
        let refIdx = 0;
        for (const pt of effectiveLineData) {
          if (pt.time < leftEdge || pt.time > rightEdge) continue;
          while (refIdx < closeRefs.length - 2 && closeRefs[refIdx + 1].t < pt.time) refIdx++;
          let interpClose;
          if (closeRefs.length === 0) {
            interpClose = pt.value;
          } else if (closeRefs.length === 1 || pt.time <= closeRefs[0].t) {
            interpClose = closeRefs[0].v;
          } else if (refIdx >= closeRefs.length - 1) {
            interpClose = closeRefs[closeRefs.length - 1].v;
          } else {
            const a = closeRefs[refIdx];
            const b = closeRefs[refIdx + 1];
            const span = b.t - a.t;
            const frac = span > 0 ? Math.max(0, Math.min(1, (pt.time - a.t) / span)) : 0;
            interpClose = a.v + (b.v - a.v) * frac;
          }
          const blended = interpClose + (pt.value - interpClose) * lineDensityProg;
          lineVisible.push({ time: pt.time, value: blended });
        }
        const smoothTick = lineTickSmoothInitedRef.current ? lineTickSmoothRef.current : effectiveLineValue ?? effectiveLineData[effectiveLineData.length - 1].value;
        lineSmoothValue = lineSmoothCloseRef.current + (smoothTick - lineSmoothCloseRef.current) * lineDensityProg;
      } else {
        lineVisible = drawCandles.map((c) => ({
          time: c.time + displayCandleWidth / 2,
          value: c.close
        }));
        lineSmoothValue = lineSmoothInitedRef.current ? lineSmoothCloseRef.current : drawLive?.close ?? drawCandles[drawCandles.length - 1]?.close ?? 0;
      }
      if (chartReveal < 1 && lineVisible.length >= 2) {
        const firstTime = lineVisible[0].time;
        const windowSpan = rightEdge - leftEdge;
        if (firstTime - leftEdge > windowSpan * 0.05) {
          const firstVal = lineVisible[0].value;
          const step = windowSpan / 32;
          const padded = [];
          for (let t = leftEdge; t < firstTime - step * 0.5; t += step) {
            padded.push({ time: t, value: firstVal });
          }
          lineVisible = [...padded, ...lineVisible];
        }
      }
      drawCandleFrame(ctx, layout, cfg.palette, {
        candles: drawCandles,
        displayCandleWidth,
        oldCandles: drawOldCandles,
        oldWidth: cwt.oldWidth,
        morphT,
        liveCandle: drawLive,
        closePriceCandle: closeLineSmoothInitedRef.current && rawLive ? { ...rawLive, close: closeLineSmoothRef.current } : rawLive,
        liveTime: effectiveLive?.time ?? -1,
        liveBirthAlpha: liveBirthAlphaRef.current,
        liveBullBlend: liveBullRef.current,
        lineModeProg,
        chartReveal,
        now_ms,
        now,
        pauseProgress,
        showGrid: cfg.showGrid,
        scrubAmount,
        hoverX: drawHoverX,
        hoverValue: drawHoverCandle?.close ?? null,
        hoverTime: drawHoverTime,
        hoveredCandle: drawHoverCandle,
        formatValue: cfg.formatValue,
        formatTime: cfg.formatTime,
        gridState: gridStateRef.current,
        timeAxisState: timeAxisStateRef.current,
        dt: pausedDt,
        targetWindowSecs: cfg.windowSecs,
        tooltipY: cfg.tooltipY,
        tooltipOutline: cfg.tooltipOutline,
        lineVisible,
        lineSmoothValue,
        emptyText: cfg.emptyText,
        loadingAlpha,
        // Show empty overlay when not loading AND loadingAlpha has fully
        // decayed. This prevents the gradient gap from flashing during
        // loading→live (where loadingAlpha starts at ~1), while still
        // allowing smooth fade-out during empty→live (loadingAlpha is 0).
        showEmptyOverlay: !(cfg.loading ?? false) && loadingAlpha < 0.01
      });
      if (badgeRef.current) {
        if (lineModeProg > 0.5 && cfg.showBadge) {
          const momentum = detectMomentum(lineVisible);
          badgeYRef.current = updateBadgeDOM(
            badgeRef.current,
            cfg,
            lineSmoothValue,
            layout,
            momentum,
            badgeYRef.current,
            badgeColorRef.current,
            isWindowTransitioning,
            noMotion,
            ctx,
            pausedDt,
            chartReveal
          );
          const badgeFade = (lineModeProg - 0.5) * 2;
          if (badgeRef.current.container.style.display !== "none") {
            const base = badgeRef.current.container.style.opacity ? parseFloat(badgeRef.current.container.style.opacity) : 1;
            badgeRef.current.container.style.opacity = String(
              base * badgeFade * (1 - pauseProgress)
            );
          }
        } else {
          badgeRef.current.container.style.display = "none";
        }
      }
    } else if (cfg.isMultiSeries && cfg.multiSeries && cfg.multiSeries.length > 0 || useMultiStash) {
      const effectiveMultiSeries = useMultiStash ? lastMultiSeriesRef.current : cfg.multiSeries;
      let labelReserve = 0;
      if (effectiveMultiSeries.some((s) => s.label)) {
        ctx.font = '600 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
        let maxLabelW = 0;
        for (const s of effectiveMultiSeries) {
          if (s.label) {
            const lw = ctx.measureText(s.label).width;
            if (lw > maxLabelW) maxLabelW = lw;
          }
        }
        labelReserve = Math.max(0, maxLabelW - 2) * chartReveal;
      }
      const chartW = w - pad.left - pad.right - labelReserve;
      const buffer = WINDOW_BUFFER;
      if (!useMultiStash) {
        const currentIds = new Set(effectiveMultiSeries.map((s) => s.id));
        for (const key of displayValuesRef.current.keys()) {
          if (!currentIds.has(key)) displayValuesRef.current.delete(key);
        }
      }
      const firstSeries = effectiveMultiSeries[0];
      const transition = windowTransitionRef.current;
      if (hasData) frozenNowRef.current = Date.now() / 1e3 - timeDebtRef.current;
      const now = useMultiStash ? frozenNowRef.current : Date.now() / 1e3 - timeDebtRef.current;
      const smoothValues = /* @__PURE__ */ new Map();
      for (const s of effectiveMultiSeries) {
        let dv = displayValuesRef.current.get(s.id);
        if (dv === void 0) dv = s.value;
        if (!useMultiStash) {
          const adaptiveSpeed2 = computeAdaptiveSpeed(
            s.value,
            dv,
            displayMinRef.current,
            displayMaxRef.current,
            cfg.lerpSpeed,
            noMotion
          );
          dv = lerp(dv, s.value, adaptiveSpeed2, pausedDt);
          const prevRange = displayMaxRef.current - displayMinRef.current || 1;
          if (Math.abs(dv - s.value) < prevRange * VALUE_SNAP_THRESHOLD) dv = s.value;
          displayValuesRef.current.set(s.id, dv);
        }
        smoothValues.set(s.id, dv);
      }
      const hiddenIds = cfg.hiddenSeriesIds;
      const seriesAlphas = seriesAlphaRef.current;
      for (const s of effectiveMultiSeries) {
        let alpha = seriesAlphas.get(s.id) ?? 1;
        const target = hiddenIds?.has(s.id) ? 0 : 1;
        alpha = noMotion ? target : lerp(alpha, target, SERIES_TOGGLE_SPEED, pausedDt);
        if (alpha < 0.01) alpha = 0;
        if (alpha > 0.99) alpha = 1;
        seriesAlphas.set(s.id, alpha);
      }
      const firstData = pausedMultiDataRef.current?.get(firstSeries.id)?.data ?? firstSeries.data;
      const windowResult = updateWindowTransition(
        cfg,
        transition,
        displayWindowRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        noMotion,
        now_ms,
        now,
        firstData,
        smoothValues.get(firstSeries.id) ?? firstSeries.value,
        buffer
      );
      if (transition.startMs > 0 && effectiveMultiSeries.length > 1) {
        const targetRightEdge = now + cfg.windowSecs * buffer;
        const targetLeftEdge = targetRightEdge - cfg.windowSecs;
        let unionMin = Infinity;
        let unionMax = -Infinity;
        for (const s of effectiveMultiSeries) {
          const sData = pausedMultiDataRef.current?.get(s.id)?.data ?? s.data;
          const sv = smoothValues.get(s.id) ?? s.value;
          const targetVisible = [];
          for (const p of sData) {
            if (p.time >= targetLeftEdge - 2 && p.time <= targetRightEdge) targetVisible.push(p);
          }
          if (targetVisible.length > 0) {
            const range = computeRange(targetVisible, sv, cfg.referenceLine?.value, cfg.exaggerate);
            if (range.min < unionMin) unionMin = range.min;
            if (range.max > unionMax) unionMax = range.max;
          }
        }
        if (isFinite(unionMin) && isFinite(unionMax)) {
          transition.rangeToMin = unionMin;
          transition.rangeToMax = unionMax;
        }
      }
      displayWindowRef.current = windowResult.windowSecs;
      const windowSecs = windowResult.windowSecs;
      const windowTransProgress = windowResult.windowTransProgress;
      const isWindowTransitioning = transition.startMs > 0;
      const rightEdge = now + windowSecs * buffer;
      const leftEdge = rightEdge - windowSecs;
      const filterRight = rightEdge - (rightEdge - now) * pauseProgress;
      const seriesEntries = [];
      let globalMin = Infinity;
      let globalMax = -Infinity;
      for (const s of effectiveMultiSeries) {
        const snap = pausedMultiDataRef.current?.get(s.id);
        const seriesData = snap?.data ?? s.data;
        const visible = [];
        for (const p of seriesData) {
          if (p.time >= leftEdge - 2 && p.time <= filterRight) visible.push(p);
        }
        const sv = smoothValues.get(s.id) ?? s.value;
        const alpha = seriesAlphas.get(s.id) ?? 1;
        if (visible.length >= 2) {
          if (alpha > 0.01) {
            const range = computeRange(visible, sv, cfg.referenceLine?.value, cfg.exaggerate);
            if (range.min < globalMin) globalMin = range.min;
            if (range.max > globalMax) globalMax = range.max;
          }
          seriesEntries.push({ visible, smoothValue: sv, palette: s.palette, label: s.label, alpha });
        }
      }
      if (seriesEntries.length === 0) {
        if (loadingAlpha > 0.01) {
          drawLoading(ctx, w, h, pad, cfg.palette, now_ms, loadingAlpha, cfg.palette.gridLabel);
        }
        if (1 - loadingAlpha > 0.01) {
          drawEmpty(ctx, w, h, pad, cfg.palette, 1 - loadingAlpha, now_ms, false, cfg.emptyText);
        }
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        const fadeGrad = ctx.createLinearGradient(pad.left, 0, pad.left + FADE_EDGE_WIDTH, 0);
        fadeGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
        fadeGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = fadeGrad;
        ctx.fillRect(0, 0, pad.left + FADE_EDGE_WIDTH, h);
        ctx.restore();
        if (badgeRef.current) badgeRef.current.container.style.display = "none";
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      const computedRange = { min: isFinite(globalMin) ? globalMin : 0, max: isFinite(globalMax) ? globalMax : 1 };
      const adaptiveSpeed = cfg.lerpSpeed + ADAPTIVE_SPEED_BOOST * 0.5;
      const rangeResult = updateRange(
        computedRange,
        rangeInitedRef.current,
        targetMinRef.current,
        targetMaxRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        isWindowTransitioning,
        windowTransProgress,
        transition,
        adaptiveSpeed,
        chartH,
        pausedDt
      );
      rangeInitedRef.current = rangeResult.rangeInited;
      targetMinRef.current = rangeResult.targetMin;
      targetMaxRef.current = rangeResult.targetMax;
      displayMinRef.current = rangeResult.displayMin;
      displayMaxRef.current = rangeResult.displayMax;
      const { minVal, maxVal, valRange } = rangeResult;
      const layout = {
        w,
        h,
        pad,
        chartW,
        chartH,
        leftEdge,
        rightEdge,
        minVal,
        maxVal,
        valRange,
        toX: (t) => pad.left + (t - leftEdge) / (rightEdge - leftEdge) * chartW,
        toY: (v) => pad.top + (1 - (v - minVal) / valRange) * chartH
      };
      const hoverPx = hoverXRef.current;
      let drawHoverX = null;
      let drawHoverTime = null;
      let isActiveHover = false;
      let hoverEntries = [];
      if (hoverPx !== null && hoverPx >= pad.left && hoverPx <= w - pad.right) {
        const maxHoverX = layout.toX(now);
        const clampedX = Math.min(hoverPx, maxHoverX);
        const t = leftEdge + (clampedX - pad.left) / chartW * (rightEdge - leftEdge);
        drawHoverX = clampedX;
        drawHoverTime = t;
        isActiveHover = true;
        for (const entry of seriesEntries) {
          if ((entry.alpha ?? 1) < 0.5) continue;
          const v = interpolateAtTime(entry.visible, t);
          if (v !== null) {
            hoverEntries.push({ color: entry.palette.line, label: entry.label ?? "", value: v });
          }
        }
        lastHoverRef.current = { x: clampedX, value: hoverEntries[0]?.value ?? 0, time: t };
        lastHoverEntriesRef.current = hoverEntries;
        cfg.onHover?.({ time: t, value: hoverEntries[0]?.value ?? 0, x: clampedX, y: layout.toY(hoverEntries[0]?.value ?? 0) });
      }
      const scrubTarget = isActiveHover ? 1 : 0;
      if (noMotion) {
        scrubAmountRef.current = scrubTarget;
      } else {
        scrubAmountRef.current += (scrubTarget - scrubAmountRef.current) * SCRUB_LERP_SPEED;
        if (scrubAmountRef.current < 0.01) scrubAmountRef.current = 0;
        if (scrubAmountRef.current > 0.99) scrubAmountRef.current = 1;
      }
      if (!isActiveHover && scrubAmountRef.current > 0 && lastHoverRef.current) {
        drawHoverX = lastHoverRef.current.x;
        drawHoverTime = lastHoverRef.current.time;
        hoverEntries = lastHoverEntriesRef.current;
      }
      drawMultiFrame(ctx, layout, {
        series: seriesEntries,
        now,
        showGrid: cfg.showGrid,
        showPulse: cfg.showPulse,
        referenceLine: cfg.referenceLine,
        hoverX: drawHoverX,
        hoverTime: drawHoverTime,
        hoverEntries,
        scrubAmount: scrubAmountRef.current,
        windowSecs,
        formatValue: cfg.formatValue,
        formatTime: cfg.formatTime,
        gridState: gridStateRef.current,
        timeAxisState: timeAxisStateRef.current,
        dt,
        targetWindowSecs: cfg.windowSecs,
        tooltipY: cfg.tooltipY,
        tooltipOutline: cfg.tooltipOutline,
        chartReveal,
        pauseProgress,
        now_ms,
        primaryPalette: cfg.palette
      });
      const bgAlpha = 1 - chartReveal;
      if (bgAlpha > 0.01 && revealTarget === 0 && !cfg.loading) {
        const bgEmptyAlpha = (1 - loadingAlpha) * bgAlpha;
        if (bgEmptyAlpha > 0.01) {
          drawEmpty(ctx, w, h, pad, cfg.palette, bgEmptyAlpha, now_ms, true, cfg.emptyText);
        }
      }
      if (badgeRef.current) badgeRef.current.container.style.display = "none";
    } else {
      const effectivePoints = useStash ? lastDataRef.current : points;
      const adaptiveSpeed = computeAdaptiveSpeed(
        cfg.value,
        displayValueRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        cfg.lerpSpeed,
        noMotion
      );
      if (!useStash) {
        displayValueRef.current = lerp(displayValueRef.current, cfg.value, adaptiveSpeed, pausedDt);
        if (pauseProgress < 0.5) {
          const prevRange = displayMaxRef.current - displayMinRef.current || 1;
          if (Math.abs(displayValueRef.current - cfg.value) < prevRange * VALUE_SNAP_THRESHOLD) {
            displayValueRef.current = cfg.value;
          }
        }
      }
      const smoothValue = displayValueRef.current;
      const chartW = w - pad.left - pad.right;
      const needsArrowRoom = cfg.showMomentum;
      const buffer = needsArrowRoom ? Math.max(WINDOW_BUFFER, 37 / Math.max(chartW, 1)) : WINDOW_BUFFER;
      const transition = windowTransitionRef.current;
      if (hasData) frozenNowRef.current = Date.now() / 1e3 - timeDebtRef.current;
      const now = useStash ? frozenNowRef.current : Date.now() / 1e3 - timeDebtRef.current;
      const windowResult = updateWindowTransition(
        cfg,
        transition,
        displayWindowRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        noMotion,
        now_ms,
        now,
        effectivePoints,
        smoothValue,
        buffer
      );
      displayWindowRef.current = windowResult.windowSecs;
      const windowSecs = windowResult.windowSecs;
      const windowTransProgress = windowResult.windowTransProgress;
      const rightEdge = now + windowSecs * buffer;
      const leftEdge = rightEdge - windowSecs;
      const filterRight = rightEdge - (rightEdge - now) * pauseProgress;
      const visible = [];
      for (const p of effectivePoints) {
        if (p.time >= leftEdge - 2 && p.time <= filterRight) {
          visible.push(p);
        }
      }
      if (visible.length < 2) {
        if (badgeRef.current) badgeRef.current.container.style.display = "none";
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      const computedRange = computeRange(visible, smoothValue, cfg.referenceLine?.value, cfg.exaggerate);
      const isWindowTransitioning = transition.startMs > 0;
      const rangeResult = updateRange(
        computedRange,
        rangeInitedRef.current,
        targetMinRef.current,
        targetMaxRef.current,
        displayMinRef.current,
        displayMaxRef.current,
        isWindowTransitioning,
        windowTransProgress,
        transition,
        adaptiveSpeed,
        chartH,
        pausedDt
      );
      rangeInitedRef.current = rangeResult.rangeInited;
      targetMinRef.current = rangeResult.targetMin;
      targetMaxRef.current = rangeResult.targetMax;
      displayMinRef.current = rangeResult.displayMin;
      displayMaxRef.current = rangeResult.displayMax;
      const { minVal, maxVal, valRange } = rangeResult;
      const layout = {
        w,
        h,
        pad,
        chartW,
        chartH,
        leftEdge,
        rightEdge,
        minVal,
        maxVal,
        valRange,
        toX: (t) => pad.left + (t - leftEdge) / (rightEdge - leftEdge) * chartW,
        toY: (v) => pad.top + (1 - (v - minVal) / valRange) * chartH
      };
      const momentum = cfg.momentumOverride ?? detectMomentum(visible);
      const hoverResult = updateHoverState(
        hoverXRef.current,
        pad,
        w,
        layout,
        now,
        visible,
        scrubAmountRef.current,
        lastHoverRef.current,
        cfg,
        noMotion,
        leftEdge,
        rightEdge,
        chartW,
        dt
      );
      scrubAmountRef.current = hoverResult.scrubAmount;
      lastHoverRef.current = hoverResult.lastHover;
      const { hoverX: drawHoverX, hoverValue: drawHoverValue, hoverTime: drawHoverTime } = hoverResult;
      const lookback = Math.min(5, visible.length - 1);
      const recentDelta = lookback > 0 ? Math.abs(visible[visible.length - 1].value - visible[visible.length - 1 - lookback].value) : 0;
      const swingMagnitude = valRange > 0 ? Math.min(recentDelta / valRange, 1) : 0;
      drawFrame(ctx, layout, cfg.palette, {
        visible,
        smoothValue,
        now,
        momentum,
        arrowState: arrowStateRef.current,
        showGrid: cfg.showGrid,
        showMomentum: cfg.showMomentum,
        showPulse: cfg.showPulse,
        showFill: cfg.showFill,
        referenceLine: cfg.referenceLine,
        hoverX: drawHoverX,
        hoverValue: drawHoverValue,
        hoverTime: drawHoverTime,
        scrubAmount: scrubAmountRef.current,
        windowSecs,
        formatValue: cfg.formatValue,
        formatTime: cfg.formatTime,
        gridState: gridStateRef.current,
        timeAxisState: timeAxisStateRef.current,
        dt,
        targetWindowSecs: cfg.windowSecs,
        tooltipY: cfg.tooltipY,
        tooltipOutline: cfg.tooltipOutline,
        orderbookData: cfg.orderbookData,
        orderbookState: cfg.orderbookData ? orderbookStateRef.current : void 0,
        particleState: cfg.degenOptions ? particleStateRef.current : void 0,
        particleOptions: cfg.degenOptions,
        swingMagnitude,
        shakeState: cfg.degenOptions ? shakeStateRef.current : void 0,
        chartReveal,
        pauseProgress,
        now_ms
      });
      const bgAlpha = 1 - chartReveal;
      if (bgAlpha > 0.01 && revealTarget === 0 && !cfg.loading) {
        const bgEmptyAlpha = (1 - loadingAlpha) * bgAlpha;
        if (bgEmptyAlpha > 0.01) {
          drawEmpty(ctx, w, h, pad, cfg.palette, bgEmptyAlpha, now_ms, true, cfg.emptyText);
        }
      }
      const badge = badgeRef.current;
      if (badge) {
        badgeYRef.current = updateBadgeDOM(
          badge,
          cfg,
          smoothValue,
          layout,
          momentum,
          badgeYRef.current,
          badgeColorRef.current,
          isWindowTransitioning,
          noMotion,
          ctx,
          pausedDt,
          chartReveal
        );
        if (pauseProgress > 0.01 && badge.container.style.display !== "none") {
          const base = badge.container.style.opacity ? parseFloat(badge.container.style.opacity) : 1;
          badge.container.style.opacity = String(base * (1 - pauseProgress));
        }
      }
      const valEl = cfg.valueDisplayRef?.current;
      if (valEl) {
        const displayVal = cfg.valueMomentumColor ? Math.abs(smoothValue) : smoothValue;
        valEl.textContent = cfg.formatValue(displayVal);
        if (cfg.valueMomentumColor) {
          const mc = momentum === "up" ? "#22c55e" : momentum === "down" ? "#ef4444" : "";
          if (mc) valEl.style.color = mc;
          else valEl.style.removeProperty("color");
        }
      }
    }
    rafRef.current = requestAnimationFrame(draw);
  }, [canvasRef]);
  (0, import_react.useEffect)(() => {
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);
}

// src/Liveline.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var defaultFormatValue = (v) => v.toFixed(2);
var defaultFormatTime = (t) => {
  const d = new Date(t * 1e3);
  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");
  const s = d.getSeconds().toString().padStart(2, "0");
  return \`\${h}:\${m}:\${s}\`;
};
function Liveline({
  data,
  value,
  series: seriesProp,
  theme = "dark",
  color = "#3b82f6",
  window: windowSecs = 30,
  grid = true,
  badge = true,
  momentum = true,
  fill = true,
  scrub = true,
  loading = false,
  paused = false,
  emptyText,
  exaggerate = false,
  degen: degenProp,
  badgeTail = true,
  badgeVariant = "default",
  showValue = false,
  valueMomentumColor = false,
  windows,
  onWindowChange,
  windowStyle,
  tooltipY = 14,
  tooltipOutline = true,
  orderbook,
  referenceLine,
  formatValue = defaultFormatValue,
  formatTime = defaultFormatTime,
  lerpSpeed = 0.08,
  padding: paddingOverride,
  onHover,
  cursor = "crosshair",
  pulse = true,
  mode = "line",
  candles,
  candleWidth,
  liveCandle,
  lineMode,
  lineData,
  lineValue,
  onModeChange,
  onSeriesToggle,
  seriesToggleCompact = false,
  className,
  style
}) {
  const canvasRef = (0, import_react2.useRef)(null);
  const containerRef = (0, import_react2.useRef)(null);
  const valueDisplayRef = (0, import_react2.useRef)(null);
  const windowBarRef = (0, import_react2.useRef)(null);
  const windowBtnRefs = (0, import_react2.useRef)(/* @__PURE__ */ new Map());
  const [indicatorStyle, setIndicatorStyle] = (0, import_react2.useState)(null);
  const modeBarRef = (0, import_react2.useRef)(null);
  const modeBtnRefs = (0, import_react2.useRef)(/* @__PURE__ */ new Map());
  const [modeIndicatorStyle, setModeIndicatorStyle] = (0, import_react2.useState)(null);
  const [hiddenSeries, setHiddenSeries] = (0, import_react2.useState)(/* @__PURE__ */ new Set());
  const lastSeriesPropRef = (0, import_react2.useRef)(seriesProp);
  if (seriesProp && seriesProp.length > 0) lastSeriesPropRef.current = seriesProp;
  const palette = (0, import_react2.useMemo)(() => resolveTheme(color, theme), [color, theme]);
  const isDark = theme === "dark";
  const isMultiSeries = seriesProp != null && seriesProp.length > 0;
  const showSeriesToggle = (lastSeriesPropRef.current?.length ?? 0) > 1;
  const seriesPalettes = (0, import_react2.useMemo)(() => {
    if (!seriesProp || seriesProp.length === 0) return null;
    return resolveSeriesPalettes(seriesProp, theme);
  }, [seriesProp, theme]);
  const multiSeries = (0, import_react2.useMemo)(() => {
    if (!seriesProp || !seriesPalettes) return void 0;
    return seriesProp.map((s, i) => ({
      id: s.id,
      data: s.data,
      value: s.value,
      palette: seriesPalettes.get(s.id) ?? resolveTheme(s.color || SERIES_COLORS[i % SERIES_COLORS.length], theme),
      label: s.label
    }));
  }, [seriesProp, seriesPalettes, theme]);
  const showMomentum = momentum !== false;
  const momentumOverride = typeof momentum === "string" ? momentum : void 0;
  const pad = {
    top: paddingOverride?.top ?? 12,
    right: paddingOverride?.right ?? 80,
    bottom: paddingOverride?.bottom ?? 28,
    left: paddingOverride?.left ?? 12
  };
  const degenEnabled = degenProp != null ? degenProp !== false : false;
  const degenOptions = degenEnabled ? typeof degenProp === "object" ? degenProp : {} : void 0;
  const [activeWindowSecs, setActiveWindowSecs] = (0, import_react2.useState)(
    windows && windows.length > 0 ? windows[0].secs : windowSecs
  );
  const effectiveWindowSecs = windows ? activeWindowSecs : windowSecs;
  (0, import_react2.useLayoutEffect)(() => {
    if (!windows || windows.length === 0) return;
    const btn = windowBtnRefs.current.get(activeWindowSecs);
    const bar = windowBarRef.current;
    if (btn && bar) {
      const barRect = bar.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - barRect.left,
        width: btnRect.width
      });
    }
  }, [activeWindowSecs, windows]);
  const activeMode = lineMode ? "line" : "candle";
  (0, import_react2.useLayoutEffect)(() => {
    if (!onModeChange) return;
    const btn = modeBtnRefs.current.get(activeMode);
    const bar = modeBarRef.current;
    if (btn && bar) {
      const barRect = bar.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setModeIndicatorStyle({
        left: btnRect.left - barRect.left,
        width: btnRect.width
      });
    }
  }, [activeMode, onModeChange]);
  const handleSeriesToggle = (0, import_react2.useCallback)((id) => {
    setHiddenSeries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        onSeriesToggle?.(id, true);
      } else {
        const totalSeries = seriesProp?.length ?? 0;
        const visibleCount = totalSeries - next.size;
        if (visibleCount <= 1) return prev;
        next.add(id);
        onSeriesToggle?.(id, false);
      }
      return next;
    });
  }, [seriesProp?.length, onSeriesToggle]);
  const ws = windowStyle ?? "default";
  useLivelineEngine(canvasRef, containerRef, {
    data,
    value,
    palette,
    windowSecs: effectiveWindowSecs,
    lerpSpeed,
    showGrid: grid,
    showBadge: isMultiSeries ? false : badge,
    showMomentum: isMultiSeries ? false : showMomentum,
    momentumOverride,
    showFill: isMultiSeries ? false : fill,
    referenceLine,
    formatValue,
    formatTime,
    padding: pad,
    onHover,
    showPulse: pulse,
    scrub,
    exaggerate,
    degenOptions: isMultiSeries ? void 0 : degenOptions,
    badgeTail,
    badgeVariant,
    tooltipY,
    tooltipOutline,
    valueMomentumColor,
    valueDisplayRef: showValue ? valueDisplayRef : void 0,
    orderbookData: orderbook,
    loading,
    paused,
    emptyText,
    mode,
    candles,
    candleWidth,
    liveCandle,
    lineMode,
    lineData,
    lineValue,
    multiSeries,
    isMultiSeries,
    hiddenSeriesIds: hiddenSeries
  });
  const cursorStyle = scrub ? cursor : "default";
  const activeColor = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)";
  const inactiveColor = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.22)";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    showValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        ref: valueDisplayRef,
        style: {
          display: "block",
          fontSize: 20,
          fontWeight: 500,
          fontFamily: '"SF Mono", Menlo, monospace',
          color: isDark ? "rgba(255,255,255,0.85)" : "#111",
          transition: "color 0.3s",
          letterSpacing: "-0.01em",
          marginBottom: 8,
          paddingTop: 4,
          paddingLeft: pad.left
        }
      }
    ),
    (windows && windows.length > 0 || onModeChange || showSeriesToggle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6, marginLeft: pad.left }, children: [
      windows && windows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref: windowBarRef,
          style: {
            position: "relative",
            display: "inline-flex",
            gap: ws === "text" ? 4 : 2,
            background: ws === "text" ? "transparent" : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            borderRadius: ws === "rounded" ? 999 : 6,
            padding: ws === "text" ? 0 : ws === "rounded" ? 3 : 2
          },
          children: [
            ws !== "text" && indicatorStyle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
              position: "absolute",
              top: ws === "rounded" ? 3 : 2,
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              height: ws === "rounded" ? "calc(100% - 6px)" : "calc(100% - 4px)",
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.035)",
              borderRadius: ws === "rounded" ? 999 : 4,
              transition: "left 0.25s cubic-bezier(0.4, 0, 0.2, 1), width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none"
            } }),
            windows.map((w) => {
              const isActive = w.secs === activeWindowSecs;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  ref: (el) => {
                    if (el) windowBtnRefs.current.set(w.secs, el);
                    else windowBtnRefs.current.delete(w.secs);
                  },
                  onClick: () => {
                    setActiveWindowSecs(w.secs);
                    onWindowChange?.(w.secs);
                  },
                  style: {
                    position: "relative",
                    zIndex: 1,
                    fontSize: 11,
                    padding: ws === "text" ? "2px 6px" : "3px 10px",
                    borderRadius: ws === "rounded" ? 999 : 4,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    background: "transparent",
                    color: isActive ? activeColor : inactiveColor,
                    transition: "color 0.2s, background 0.15s",
                    lineHeight: "16px"
                  },
                  children: w.label
                },
                w.secs
              );
            })
          ]
        }
      ),
      onModeChange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref: modeBarRef,
          style: {
            position: "relative",
            display: "inline-flex",
            gap: ws === "text" ? 4 : 2,
            background: ws === "text" ? "transparent" : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            borderRadius: ws === "rounded" ? 999 : 6,
            padding: ws === "text" ? 0 : ws === "rounded" ? 3 : 2
          },
          children: [
            ws !== "text" && modeIndicatorStyle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
              position: "absolute",
              top: ws === "rounded" ? 3 : 2,
              left: modeIndicatorStyle.left,
              width: modeIndicatorStyle.width,
              height: ws === "rounded" ? "calc(100% - 6px)" : "calc(100% - 4px)",
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.035)",
              borderRadius: ws === "rounded" ? 999 : 4,
              transition: "left 0.25s cubic-bezier(0.4, 0, 0.2, 1), width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                ref: (el) => {
                  if (el) modeBtnRefs.current.set("line", el);
                  else modeBtnRefs.current.delete("line");
                },
                onClick: () => onModeChange("line"),
                style: {
                  position: "relative",
                  zIndex: 1,
                  padding: "5px 7px",
                  borderRadius: ws === "rounded" ? 999 : 4,
                  border: "none",
                  cursor: "pointer",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    d: "M1 8.5C2.5 8.5 3 4 5.5 4S7.5 7 8.5 7C9.5 7 10 3.5 11 3.5",
                    stroke: activeMode === "line" ? activeColor : inactiveColor,
                    strokeWidth: activeMode === "line" ? 1.5 : 1.2,
                    strokeLinecap: "round",
                    fill: "none"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                ref: (el) => {
                  if (el) modeBtnRefs.current.set("candle", el);
                  else modeBtnRefs.current.delete("candle");
                },
                onClick: () => onModeChange("candle"),
                style: {
                  position: "relative",
                  zIndex: 1,
                  padding: "5px 7px",
                  borderRadius: ws === "rounded" ? 999 : 4,
                  border: "none",
                  cursor: "pointer",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "line",
                    {
                      x1: "3.5",
                      y1: "1",
                      x2: "3.5",
                      y2: "11",
                      stroke: activeMode === "candle" ? activeColor : inactiveColor,
                      strokeWidth: "1"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "rect",
                    {
                      x: "2",
                      y: "3",
                      width: "3",
                      height: "5",
                      rx: "0.5",
                      fill: activeMode === "candle" ? activeColor : inactiveColor
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "line",
                    {
                      x1: "8.5",
                      y1: "2",
                      x2: "8.5",
                      y2: "10",
                      stroke: activeMode === "candle" ? activeColor : inactiveColor,
                      strokeWidth: "1"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "rect",
                    {
                      x: "7",
                      y: "4",
                      width: "3",
                      height: "4",
                      rx: "0.5",
                      fill: activeMode === "candle" ? activeColor : inactiveColor
                    }
                  )
                ] })
              }
            )
          ]
        }
      ),
      showSeriesToggle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
        display: "inline-flex",
        gap: ws === "text" ? 4 : 2,
        background: ws === "text" ? "transparent" : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
        borderRadius: ws === "rounded" ? 999 : 6,
        padding: ws === "text" ? 0 : ws === "rounded" ? 3 : 2,
        opacity: isMultiSeries ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: isMultiSeries ? "auto" : "none"
      }, children: (lastSeriesPropRef.current ?? []).map((s, si) => {
        const isHidden = hiddenSeries.has(s.id);
        const seriesColor = s.color || SERIES_COLORS[si % SERIES_COLORS.length];
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            onClick: () => handleSeriesToggle(s.id),
            style: {
              position: "relative",
              zIndex: 1,
              fontSize: 11,
              padding: seriesToggleCompact ? ws === "text" ? "2px 4px" : "5px 7px" : ws === "text" ? "2px 6px" : "3px 8px",
              borderRadius: ws === "rounded" ? 999 : 4,
              border: "none",
              cursor: "pointer",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 500,
              background: isHidden ? "transparent" : ws === "text" ? "transparent" : isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.035)",
              color: isHidden ? inactiveColor : activeColor,
              opacity: isHidden ? 0.4 : 1,
              transition: "opacity 0.2s, background 0.15s, color 0.2s",
              lineHeight: "16px",
              display: "flex",
              alignItems: "center",
              gap: seriesToggleCompact ? 0 : 4
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
                width: seriesToggleCompact ? 8 : 6,
                height: seriesToggleCompact ? 8 : 6,
                borderRadius: "50%",
                background: seriesColor,
                flexShrink: 0,
                opacity: isHidden ? 0.4 : 1,
                transition: "opacity 0.2s"
              } }),
              !seriesToggleCompact && (s.label ?? s.id)
            ]
          },
          s.id
        );
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref: containerRef,
        className,
        style: {
          width: "100%",
          height: "100%",
          position: "relative",
          ...style
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "canvas",
          {
            ref: canvasRef,
            style: { display: "block", cursor: cursorStyle }
          }
        )
      }
    )
  ] });
}

// src/LivelineTransition.tsx
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function LivelineTransition({
  active,
  children,
  duration = 300,
  className,
  style
}) {
  const childArray = Array.isArray(children) ? children : [children];
  const [mounted, setMounted] = (0, import_react3.useState)(() => /* @__PURE__ */ new Set([active]));
  const [visible, setVisible] = (0, import_react3.useState)(active);
  const prevRef = (0, import_react3.useRef)(active);
  (0, import_react3.useEffect)(() => {
    if (active === prevRef.current) return () => {
    };
    const oldKey = prevRef.current;
    prevRef.current = active;
    setMounted((prev) => /* @__PURE__ */ new Set([...prev, active]));
    let raf1 = requestAnimationFrame(() => {
      raf1 = requestAnimationFrame(() => setVisible(active));
    });
    const timer = setTimeout(() => {
      setMounted((prev) => {
        const next = new Set(prev);
        next.delete(oldKey);
        return next;
      });
    }, duration + 50);
    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(timer);
    };
  }, [active, duration]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className, style: { position: "relative", width: "100%", height: "100%", ...style }, children: childArray.map((child) => {
    const key = String(child.key ?? "");
    if (!mounted.has(key)) return null;
    const isActive = key === visible;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          opacity: isActive ? 1 : 0,
          transition: \`opacity \${duration}ms ease\`,
          pointerEvents: isActive ? "auto" : "none"
        },
        children: child
      },
      key
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Liveline,
  LivelineTransition
});

  window.Liveline = module.exports.Liveline;
})();</script>
  <script>(function () {
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
  "use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  Stepper: () => Stepper,
  useAutoPlay: () => useAutoPlay
});
module.exports = __toCommonJS(react_exports);

// src/react/hooks/useStepWindow.ts
var import_react = require("react");

// src/core/computeStepWindow.ts
var DOT_SIZE = 8;
var ACTIVE_WIDTH = 24;
var GAP = 6;
var SLOT_SIZE = DOT_SIZE + GAP;
function computeStepWindow(count, active, maxVisible, orientation) {
  if (maxVisible == null || count <= maxVisible) {
    return {
      windowStart: 0,
      transformValue: "none",
      containerSize: void 0
    };
  }
  const half = Math.floor(maxVisible / 2);
  const windowStart = Math.max(0, Math.min(active - half, count - maxVisible));
  const offset = windowStart * SLOT_SIZE;
  const axis = orientation === "vertical" ? "Y" : "X";
  const transformValue = \`translate\${axis}(-\${offset}px)\`;
  const size = (maxVisible - 1) * DOT_SIZE + ACTIVE_WIDTH + (maxVisible - 1) * GAP;
  return { windowStart, transformValue, containerSize: size };
}

// src/react/hooks/useStepWindow.ts
function useStepWindow(count, active, maxVisible, orientation) {
  return (0, import_react.useMemo)(
    () => computeStepWindow(count, active, maxVisible, orientation),
    [count, active, maxVisible, orientation]
  );
}

// src/react/hooks/useAnimatingSteps.ts
var import_react2 = require("react");

// src/core/StepAnimator.ts
var StepAnimator = class {
  constructor(count) {
    this.keyGen = count;
    this.steps = Array.from({ length: count }, (_, i) => ({
      key: i,
      index: i,
      phase: "stable"
    }));
  }
  reconcile(newCount) {
    const liveCount = this.steps.filter((s) => s.phase !== "exiting").length;
    if (liveCount === newCount) {
      return {
        hasEntering: this.steps.some((s) => s.phase === "entering"),
        exitingCount: this.steps.filter((s) => s.phase === "exiting").length
      };
    }
    if (newCount < liveCount) {
      let seen = 0;
      this.steps = this.steps.map((s) => {
        if (s.phase === "exiting") return s;
        seen++;
        if (seen > newCount) return { ...s, phase: "exiting" };
        return s;
      });
    }
    if (newCount > liveCount) {
      for (let i = liveCount; i < newCount; i++) {
        this.keyGen++;
        this.steps.push({
          key: this.keyGen,
          index: i,
          phase: "entering"
        });
      }
    }
    let idx = 0;
    this.steps = this.steps.map(
      (s) => s.phase === "exiting" ? s : { ...s, index: idx++ }
    );
    return {
      hasEntering: this.steps.some((s) => s.phase === "entering"),
      exitingCount: this.steps.filter((s) => s.phase === "exiting").length
    };
  }
  promoteEntering() {
    this.steps = this.steps.map(
      (s) => s.phase === "entering" ? { ...s, phase: "stable" } : s
    );
  }
  removeExiting() {
    this.steps = this.steps.filter((s) => s.phase !== "exiting");
  }
  getSteps() {
    return [...this.steps];
  }
};

// src/react/hooks/useAnimatingSteps.ts
function useAnimatingSteps(count, _duration) {
  const animatorRef = (0, import_react2.useRef)(null);
  if (animatorRef.current === null) {
    animatorRef.current = new StepAnimator(count);
  }
  const animator = animatorRef.current;
  const [steps, setSteps] = (0, import_react2.useState)(() => animator.getSteps());
  (0, import_react2.useLayoutEffect)(() => {
    animator.reconcile(count);
    setSteps(animator.getSteps());
  }, [count, animator]);
  const hasEntering = steps.some((s) => s.phase === "entering");
  (0, import_react2.useEffect)(() => {
    if (!hasEntering) return;
    let raf1;
    let raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        animator.promoteEntering();
        setSteps(animator.getSteps());
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [hasEntering, animator]);
  const exitingCount = steps.filter((s) => s.phase === "exiting").length;
  (0, import_react2.useEffect)(() => {
    if (exitingCount === 0) return;
    const timer = setTimeout(() => {
      animator.removeExiting();
      setSteps(animator.getSteps());
    }, 300);
    return () => clearTimeout(timer);
  }, [exitingCount, animator]);
  return steps;
}

// src/react/Step.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Step({
  index,
  isActive,
  phase,
  transitionDuration,
  filling,
  fillDuration,
  onClick
}) {
  const classNames = [
    "pasito-step",
    isActive && "pasito-step-active",
    isActive && filling && "pasito-step-filling",
    phase === "entering" && "pasito-entering",
    phase === "exiting" && "pasito-exiting"
  ].filter(Boolean).join(" ");
  const style = {
    "--pill-duration": \`\${transitionDuration}ms\`
  };
  if (isActive && filling && fillDuration) {
    style["--pill-fill-duration"] = \`\${fillDuration}ms\`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: classNames,
      style,
      onClick,
      role: "tab",
      "aria-selected": isActive,
      "aria-label": \`Step \${index + 1}\`,
      tabIndex: isActive ? 0 : -1
    }
  );
}

// src/react/Stepper.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Stepper({
  count,
  active,
  onStepClick,
  orientation = "horizontal",
  maxVisible,
  transitionDuration = 500,
  easing,
  className,
  filling,
  fillDuration
}) {
  const { transformValue, containerSize } = useStepWindow(
    count,
    active,
    maxVisible,
    orientation
  );
  const animatingSteps = useAnimatingSteps(count, transitionDuration);
  const containerClass = [
    "pasito-container",
    orientation === "vertical" && "pasito-vertical",
    className
  ].filter(Boolean).join(" ");
  const sizeStyle = {};
  if (containerSize != null) {
    if (orientation === "vertical") {
      sizeStyle.height = containerSize;
    } else {
      sizeStyle.width = containerSize;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: containerClass,
      role: "tablist",
      "aria-label": "Progress steps",
      style: {
        "--pill-duration": \`\${transitionDuration}ms\`,
        ...easing && { "--pill-easing": easing },
        ...sizeStyle
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "pasito-track",
          style: { transform: transformValue },
          children: animatingSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Step,
            {
              index: step.index,
              isActive: step.index === active,
              phase: step.phase,
              transitionDuration,
              filling: step.index === active && filling,
              fillDuration,
              onClick: onStepClick ? () => onStepClick(step.index) : void 0
            },
            step.key
          ))
        }
      )
    }
  );
}

// src/react/hooks/useAutoPlay.ts
var import_react3 = require("react");

// src/core/AutoPlayController.ts
var AutoPlayController = class {
  constructor({ stepDuration = 3e3, loop = true } = {}) {
    this.stepDuration = stepDuration;
    this.loop = loop;
  }
  computeNext(active, count) {
    return active < count - 1 ? active + 1 : this.loop ? 0 : null;
  }
};

// src/react/hooks/useAutoPlay.ts
function useAutoPlay({
  count,
  active,
  onStepChange,
  stepDuration = 3e3,
  loop = true,
  enabled = true
}) {
  const [playing, setPlaying] = (0, import_react3.useState)(false);
  const timerRef = (0, import_react3.useRef)(null);
  const controllerRef = (0, import_react3.useRef)(null);
  if (!controllerRef.current) {
    controllerRef.current = new AutoPlayController({ stepDuration, loop });
  }
  controllerRef.current.stepDuration = stepDuration;
  controllerRef.current.loop = loop;
  const clearTimer = (0, import_react3.useCallback)(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const toggle = (0, import_react3.useCallback)(() => setPlaying((p) => !p), []);
  (0, import_react3.useEffect)(() => {
    if (!enabled) {
      setPlaying(false);
      clearTimer();
    }
  }, [enabled, clearTimer]);
  (0, import_react3.useEffect)(() => {
    if (!playing || !enabled) {
      clearTimer();
      return;
    }
    timerRef.current = setTimeout(() => {
      const nextStep = controllerRef.current.computeNext(active, count);
      if (nextStep !== null) {
        onStepChange(nextStep);
      } else {
        setPlaying(false);
      }
    }, stepDuration);
    return clearTimer;
  }, [playing, enabled, active, count, stepDuration, loop, onStepChange, clearTimer]);
  const isActive = playing && enabled;
  return {
    playing: isActive,
    toggle,
    filling: isActive,
    fillDuration: stepDuration
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stepper,
  useAutoPlay
});

  window.PasitoStepper = module.exports.Stepper;
})();</script>
  <script>(function () {
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

    React.useEffect(function () {
      function handle(e) {
        try {
          var raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
          var msg = JSON.parse(raw);
          if (msg.type === 'STEP_DATA') {
            var d = msg.data;
            var w = d.length > 1 ? (d[d.length - 1].time - d[0].time + 60) : 86400;
            setTodayChart({ data: d, value: msg.value, loading: false, window: w });
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
          React.createElement(Liveline, {
            data: todayChart.data,
            value: todayChart.value,
            loading: todayChart.loading,
            theme: 'light',
            color: '#FFB700',
            window: todayChart.window,
            grid: true,
            fill: true,
            badge: true,
            badgeVariant: 'minimal',
            pulse: false,
            momentum: false,
            scrub: true,
            referenceLine: { value: 10000, label: 'Reach 10K Daily Steps' },
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
          React.createElement(Liveline, {
            data: monthlyChart.data,
            value: monthlyChart.value,
            loading: monthlyChart.loading,
            theme: 'light',
            color: '#FFB700',
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
})();</script>
</body>
</html>`;
