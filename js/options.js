(()=>{"use strict";var e,t,r,o={88169:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(67294));a(r(73935)).default.render(u.default.createElement(u.default.StrictMode,null,u.default.createElement((()=>{const[e,t]=(0,u.useState)(),[r,o]=(0,u.useState)(),[n,l]=(0,u.useState)();return(0,u.useEffect)((()=>{chrome.storage.sync.get({favoriteColor:"red",likesColor:!0},(e=>{t(e.favoriteColor),l(e.likesColor)}))}),[]),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",null,"Favorite color: ",u.default.createElement("select",{value:e,onChange:e=>t(e.target.value)},u.default.createElement("option",{value:"red"},"red"),u.default.createElement("option",{value:"green"},"green"),u.default.createElement("option",{value:"blue"},"blue"),u.default.createElement("option",{value:"yellow"},"yellow"))),u.default.createElement("div",null,u.default.createElement("label",null,u.default.createElement("input",{type:"checkbox",checked:n,onChange:e=>l(e.target.checked)}),"I like colors.")),u.default.createElement("div",null,r),u.default.createElement("button",{onClick:()=>{chrome.storage.sync.set({favoriteColor:e,likesColor:n},(()=>{o("Options saved.");const e=setTimeout((()=>{o(void 0)}),1e3);return()=>clearTimeout(e)}))}},"Save"))}),null)),document.getElementById("root"))}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=o,l.amdO={},e=[],l.O=(t,r,o,n)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,n]=e[f],u=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(u=!1,n<a&&(a=n));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var u=2&o&&e;"object"==typeof u&&!~t.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(n,a),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.j=798,(()=>{var e={798:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,u,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in u)l.o(u,o)&&(l.m[o]=u[o]);if(i)var f=i(l)}for(t&&t(r);c<a.length;c++)n=a[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(f)},r=self.webpackChunkshoppernote=self.webpackChunkshoppernote||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[736],(()=>l(88169)));a=l.O(a)})();