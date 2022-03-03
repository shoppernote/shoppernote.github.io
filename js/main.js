(()=>{"use strict";var e,t={9124:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Orders=void 0;const l=n(r(7294)),u=r(5518),d=i(r(5693)),s=i(r(4984)),c=r(1308),f=i(r(6486)),p=r(9094),h=r(9120),m=e=>e.value?e.value.toLocaleString({style:"currency",currency:"KRW"})+"원":"",g=[{field:"market",headerName:"마켓",minWidth:100,type:"singleSelect",valueOptions:["auction","gmarket"]},{field:"orderNumber",headerName:"주문번호",minWidth:120,renderCell:e=>{const t=(0,h.getOrderDetailLink)(e.row,u.isMobile);return t?l.default.createElement(s.default,{href:t,target:"_blank"},e.value):e.value}},{field:"orderDate",headerName:"주문일",minWidth:120,type:"date",valueGetter:({value:e})=>e&&e.toDate&&e.toDate()||new Date(e)},{field:"productImageUrl",headerName:"이미지",width:70,renderCell:e=>l.default.createElement(d.default,{component:"img",sx:{height:1,width:1},src:e.value||"http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"})},{field:"productName",headerName:"이름",minWidth:400},{field:"status",headerName:"상태",minWidth:80},{field:"price",headerName:"주문가격",minWidth:100,valueFormatter:m},{field:"discount",headerName:"할인",minWidth:100,valueFormatter:m}];t.Orders=({})=>{const[e,t]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(0,p.getOrders)().then((e=>t(e)))}),[]),l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{style:{height:800,minWidth:"100%"}},l.default.createElement(c.DataGrid,{autoHeight:!0,disableSelectionOnClick:!0,columns:g,rows:f.default.flatMap(e,(e=>function(e){return(0,f.default)(e.orderDetails).map(((t,r)=>Object.assign(Object.assign(Object.assign({},e),t),{id:`${e.id}_${r}`}))).value()}(e.data())))})))}},7435:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.UserProfile=void 0;const a=o(r(7294)),n=o(r(5727)),i=o(r(2441)),l=o(r(1261)),u=o(r(3506)),d=r(5745);function s(e){let t,r=0;for(t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r);let o="#";for(t=0;t<3;t+=1)o+=`00${(r>>8*t&255).toString(16)}`.substr(-2);return o}t.UserProfile=({user:e})=>{const[t,r]=a.default.useState(null),o=Boolean(t),c=()=>{r(null)};return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,{title:(null==e?void 0:e.displayName)+"\n"+(null==e?void 0:e.email)},a.default.createElement(n.default,Object.assign({},{sx:{bgcolor:s(f=null==e?void 0:e.displayName)},children:`${f.split(" ")[0][0]}${f.split(" ")[1][0]}`},{onClick:e=>{r(e.currentTarget)}}))),a.default.createElement(i.default,{id:"basic-menu",anchorEl:t,open:o,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"}},a.default.createElement(l.default,{onClick:()=>{c(),d.firebaseAppAuth.signOut()}},"Logout")));var f}},7581:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(r(7294)),u=i(r(5607)),d=i(r(5693)),s=r(6178),c=r(1336),f=i(r(3935)),p=r(5745),h=r(9094),m=r(6645),g=r(9124),b=r(7435),v=(0,s.styled)("div")((({theme:e})=>e.mixins.toolbar));f.default.render(l.default.createElement(l.default.StrictMode,null,l.default.createElement((()=>{const[e,t]=(0,l.useState)(void 0),[r,o]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(0,h.getOrders)().then((e=>console.log(e))),(0,h.getOrders)().then((e=>o(e)))}),[]),p.firebaseAppAuth.onAuthStateChanged((e=>{t(e)})),l.default.createElement(l.default.Fragment,null,!e&&l.default.createElement("button",{onClick:async()=>{try{"chrome-extension:"==window.location.protocol?await(0,c.signInWithPopup)(p.firebaseAppAuth,p.authProviders.googleProvider):await(0,c.signInWithRedirect)(p.firebaseAppAuth,p.authProviders.googleProvider)}catch(e){m.logger.error(e)}}},"login"),l.default.createElement(u.default,{position:"fixed"},l.default.createElement(d.default,{sx:{m:.5}}),e&&l.default.createElement(b.UserProfile,{user:e}),l.default.createElement(d.default,{sx:{m:.5}})),l.default.createElement(v,null),l.default.createElement(g.Orders,null))}),null)),document.getElementById("root"))},5745:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.authProviders=t.userStore=t.firebaseAppAuth=void 0,r(1336);const o=r(1336),a=r(8059);t.firebaseAppAuth=(0,o.getAuth)(a.firebaseApp),t.firebaseAppAuth.setPersistence(o.browserLocalPersistence),t.userStore=new class{async refreshCurrentUser(){return new Promise((e=>{t.firebaseAppAuth.onAuthStateChanged((t=>{t&&(this.currentUser=t,e(t))}))}))}},t.userStore.refreshCurrentUser();const n=new o.GoogleAuthProvider;n.addScope("https://www.googleapis.com/auth/userinfo.email"),n.addScope("https://www.googleapis.com/auth/userinfo.profile"),n.addScope("openid"),t.authProviders={googleProvider:n}},8059:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseApp=void 0;const o=r(5503);t.firebaseApp=(0,o.initializeApp)({apiKey:"AIzaSyB2IQVqUKIvy2bYOZWzgpjCoGBZ1798lJE",authDomain:"shopper-note.firebaseapp.com",projectId:"shopper-note",storageBucket:"shopper-note.appspot.com",messagingSenderId:"860271096502",appId:"1:860271096502:web:3e545e6eb5c6bbbc426c17",measurementId:"G-F5QCEEVY75"})},9094:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getOrders=t.putOrders=t.putOrder=t.firebaseFirestore=void 0;const a=r(1591),n=o(r(6486)),i=r(5745),l=r(8059);function u(){const e=i.userStore.currentUser;return`users/${null==e?void 0:e.uid}/orders`}async function d(e){var r;const o=u(),n=(0,a.doc)(t.firebaseFirestore,o,e.id),l=(await(0,a.getDoc)(n)).exists;return e.orderDate=new Date(e.orderDate),await(0,a.setDoc)(n,Object.assign({user:null===(r=i.userStore.currentUser)||void 0===r?void 0:r.uid},e),{merge:!0}),!l}t.firebaseFirestore=(0,a.getFirestore)(l.firebaseApp),t.putOrder=d,t.putOrders=async function(e){return console.log("putOrders",e),n.default.filter(await Promise.all(e.map(d))).length},t.getOrders=async function(){await i.userStore.refreshCurrentUser();const e=u(),r=(0,a.query)((0,a.collection)(t.firebaseFirestore,e),(0,a.orderBy)("orderDate","desc"));return(await(0,a.getDocs)(r)).docs}},9120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderDetailLink=void 0,t.getOrderDetailLink=function(e,t){switch(e.market){case"gmarket":return`https://mmyg.gmarket.co.kr/v2/Contract/ContractDetail?cartNo=${e.orderNumber}`;case"st11":return t?`https://m.11st.co.kr/MW/MyPage/V1/orderDetailV1.tmall?ordNo=${e.orderNumber}`:`https://buy.11st.co.kr/my11st/order/BuyManager.tmall?method=getOrderDetailInfo&ordNo=${e.orderNumber}`;case"auction":return t?`https://mmya.auction.co.kr/MyAuction/Order/#/MyOrderDetail/${e.orderNumber}/0`:`https://ssl.auction.co.kr/Close/BuyAwardInfolayer.aspx?order_no=${e.orderDetailId}`;default:return}}},6645:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0,t.logger=console}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=t,o.amdO={},e=[],o.O=(t,r,a,n)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,a,n]=e[s],l=!0,u=0;u<r.length;u++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(l=!1,n<i&&(i=n));if(l){e.splice(s--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,a,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=179,(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[i,l,u]=r,d=0;if(i.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(u)var s=u(o)}for(t&&t(r);d<i.length;d++)n=i[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(s)},r=self.webpackChunkshoppernote=self.webpackChunkshoppernote||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[736],(()=>o(7581)));a=o.O(a)})();