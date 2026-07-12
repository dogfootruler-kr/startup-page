const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/solarGraph-fod9mn6G.js","assets/rolldown-runtime-BYbx6iT9.js","assets/vendor-react-BHQt1cwJ.js","assets/settings-QeUcYeKs.js","assets/WeatherBox-CiGkn7e7.js","assets/BookmarksPage-BvQANwYG.js","assets/ResourceVaultPage-Dli6DbU9.js","assets/WeatherPreview-D1cxaQoY.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-BYbx6iT9.js";import{a as n,c as r,f as i,i as a,l as o,n as s,o as c,s as l,t as u,u as d}from"./vendor-react-BHQt1cwJ.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./settings-QeUcYeKs.js";import{_ as b,a as x,b as S,c as C,d as w,f as T,g as ee,h as E,i as te,l as ne,m as re,n as D,o as ie,p as ae,r as O,s as oe,t as k,u as se,v as ce,x as le,y as ue}from"./vendor-ui-BYBPdF2F.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var A=e(i(),1),j=d(),de=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},fe=(e=>e?de(e):de),M=e=>e;function pe(e,t=M){let n=A.useSyncExternalStore(e.subscribe,A.useCallback(()=>t(e.getState()),[e,t]),A.useCallback(()=>t(e.getInitialState()),[e,t]));return A.useDebugValue(n),n}var me=e=>{let t=fe(e),n=e=>pe(t,e);return Object.assign(n,t),n},he=(e=>e?me(e):me),ge=(e,t)=>typeof t==`function`?t(e):t,N=he((e,t)=>({settings:g(),reloadSettings:()=>{let t=g();return e({settings:t}),t},setSettings:n=>{let r=ge(t().settings,n);return e({settings:r}),r},persistSettings:async n=>{let r=ge(t().settings,n);return e({settings:r}),await p(r),r}})),_e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ve=A.createContext&&A.createContext(_e),ye=[`attr`,`size`,`title`];function be(e,t){if(e==null)return{};var n,r,i=xe(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(null,arguments)}function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ce(Object(n),!0).forEach(function(t){Te(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Te(e,t,n){return(t=Ee(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e){var t=De(e,`string`);return typeof t==`symbol`?t:t+``}function De(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Oe(e){return e&&e.map((e,t)=>A.createElement(e.tag,we({key:t},e.attr),Oe(e.child)))}function P(e){return t=>A.createElement(ke,Se({attr:we({},e.attr)},t),Oe(e.child))}function ke(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=be(e,ye),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),A.createElement(`svg`,Se({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:we(we({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&A.createElement(`title`,null,i),e.children)};return ve===void 0?t(_e):A.createElement(ve.Consumer,null,e=>t(e))}var Ae=le();function je(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z`,clipRule:`evenodd`},child:[]}]})(e)}function Me(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z`,clipRule:`evenodd`},child:[]}]})(e)}function Ne(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z`,clipRule:`evenodd`},child:[]}]})(e)}function Pe(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z`,clipRule:`evenodd`},child:[]}]})(e)}function Fe(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z`},child:[]}]})(e)}function Ie(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z`,clipRule:`evenodd`},child:[]}]})(e)}function Le(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z`,clipRule:`evenodd`},child:[]}]})(e)}function Re(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z`},child:[]},{tag:`path`,attr:{d:`m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z`},child:[]}]})(e)}function ze(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z`},child:[]}]})(e)}function Be(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z`,clipRule:`evenodd`},child:[]}]})(e)}function Ve(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z`,clipRule:`evenodd`},child:[]}]})(e)}function He(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z`,clipRule:`evenodd`},child:[]}]})(e)}function Ue(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z`,clipRule:`evenodd`},child:[]}]})(e)}function We(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z`,clipRule:`evenodd`},child:[]}]})(e)}function Ge(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z`},child:[]}]})(e)}function Ke(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z`,clipRule:`evenodd`},child:[]}]})(e)}function qe(e){return P({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z`},child:[]},{tag:`path`,attr:{fillRule:`evenodd`,d:`m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z`,clipRule:`evenodd`},child:[]}]})(e)}function Je(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18 18 6M6 6l12 12`},child:[]}]})(e)}function Ye(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`},child:[]}]})(e)}function Xe(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z`},child:[]}]})(e)}function Ze(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z`},child:[]}]})(e)}function Qe(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88`},child:[]}]})(e)}function $e(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495`},child:[]}]})(e)}function et(e){return P({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`1.5`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},child:[]}]})(e)}var tt=[{value:`zen`,title:`Zen`,description:`Warm paper neutrals with quiet contrast.`,swatches:{light:{background:`oklch(0.9195 0.0169 88.003)`,card:`oklch(0.953 0.0156 86.4257)`,primary:`oklch(0.3012 0 0)`,accent:`oklch(0.9169 0.0175 99.616)`,muted:`oklch(0.834 0.0232 87.163)`},dark:{background:`oklch(0.1913 0 0)`,card:`oklch(0.2264 0 0)`,primary:`oklch(0.852 0.0205 100.6306)`,accent:`oklch(0.3329 0 0)`,muted:`oklch(0.285 0 0)`}}},{value:`chalk`,title:`Chalk`,description:`Cool editorial surfaces with crisp navy ink.`,swatches:{light:{background:`oklch(0.9745 0.0079 253.8524)`,card:`oklch(0.9897 0.0051 247.8755)`,primary:`oklch(0.2038 0.0264 260.9332)`,accent:`oklch(0.9442 0.0137 258.3455)`,muted:`oklch(0.9442 0.0137 258.3455)`},dark:{background:`oklch(0.2292 0.0304 259.0329)`,card:`oklch(0.261 0.0307 254.7604)`,primary:`oklch(0.8993 0.0119 239.9205)`,accent:`oklch(0.3438 0.0389 254.6348)`,muted:`oklch(0.2947 0.0308 258.3315)`}}},{value:`astrovista`,title:`Astrovista`,description:`Soft space-age neutrals with brighter highlights.`,swatches:{light:{background:`oklch(0.9383 0.0042 236.4993)`,card:`oklch(1 0 0)`,primary:`oklch(0.642 0.1691 38.5815)`,accent:`oklch(0.9119 0.0222 243.8174)`,muted:`oklch(0.9846 0.0017 247.8389)`},dark:{background:`oklch(0.2178 0 0)`,card:`oklch(0.2435 0 0)`,primary:`oklch(0.642 0.1691 38.5815)`,accent:`oklch(0.338 0.0589 267.5867)`,muted:`oklch(0.285 0 0)`}}},{value:`saas-blue`,title:`SaaS Blue`,description:`Polished corporate blue with clean surfaces.`,swatches:{light:{background:`oklch(0.9725 0.0125 250)`,card:`oklch(0.995 0.0025 250)`,primary:`oklch(0.545 0.195 260)`,accent:`oklch(0.935 0.035 250)`,muted:`oklch(0.945 0.015 250)`},dark:{background:`oklch(0.195 0.025 260)`,card:`oklch(0.235 0.03 258)`,primary:`oklch(0.665 0.18 255)`,accent:`oklch(0.315 0.045 260)`,muted:`oklch(0.275 0.03 260)`}}},{value:`moss`,title:`Moss`,description:`Earthy olive greens with organic warmth.`,swatches:{light:{background:`oklch(0.955 0.02 130)`,card:`oklch(0.98 0.012 130)`,primary:`oklch(0.42 0.1 145)`,accent:`oklch(0.925 0.035 130)`,muted:`oklch(0.91 0.025 135)`},dark:{background:`oklch(0.2 0.02 145)`,card:`oklch(0.24 0.025 142)`,primary:`oklch(0.65 0.12 140)`,accent:`oklch(0.32 0.04 145)`,muted:`oklch(0.28 0.025 142)`}}},{value:`resolve`,title:`Resolve`,description:`Deep violet focus with crisp readability.`,swatches:{light:{background:`oklch(0.965 0.015 295)`,card:`oklch(0.99 0.006 295)`,primary:`oklch(0.49 0.2 290)`,accent:`oklch(0.93 0.04 295)`,muted:`oklch(0.94 0.02 295)`},dark:{background:`oklch(0.2 0.025 290)`,card:`oklch(0.245 0.03 288)`,primary:`oklch(0.65 0.175 285)`,accent:`oklch(0.325 0.05 290)`,muted:`oklch(0.28 0.03 290)`}}},{value:`vtron`,title:`VTRON`,description:`Neon terminal glow on midnight black.`,swatches:{light:{background:`oklch(0.955 0.025 165)`,card:`oklch(0.985 0.01 165)`,primary:`oklch(0.72 0.19 165)`,accent:`oklch(0.93 0.04 165)`,muted:`oklch(0.935 0.02 165)`},dark:{background:`oklch(0.145 0.015 165)`,card:`oklch(0.185 0.02 165)`,primary:`oklch(0.78 0.2 165)`,accent:`oklch(0.25 0.04 165)`,muted:`oklch(0.22 0.025 165)`}}}];function nt(e){return tt.some(t=>t.value===e)}var rt=/--([\w-]+)\s*:\s*([^;]+)/g;function it(e){let t={},n={},r=/([^{]*)\{([^}]*)\}/g,i;for(;(i=r.exec(e))!==null;){let e=i[1].trim(),r=i[2],a=e.includes(`.dark`)||e.includes(`[class*="dark"]`)||e.includes(`dark`),o=e.includes(`:root`)||e.includes(`html`)||e===``||e===`*`,s=a&&!o||e.includes(`.dark`)?n:t,c;for(rt.lastIndex=0;(c=rt.exec(r))!==null;){let e=`--${c[1]}`;s[e]=c[2].trim()}}if(Object.keys(t).length===0&&Object.keys(n).length===0)throw Error(`No CSS custom properties found. Paste CSS with :root { --variable: value; } blocks.`);return{light:t,dark:n}}var at=[`--background`,`--card`,`--primary`,`--accent`,`--muted`];function ot(e,t){let n=t===`dark`?e.dark:e.light,r={};for(let e of at){let t=e.replace(`--`,``);r[t]=n[e]||`oklch(0.5 0 0)`}return r}var st=he(e=>({editing:!1,setEditing:t=>e({editing:t}),toggleEditing:()=>e(e=>({editing:!e.editing}))})),F=u(),ct=e=>e===`system`&&typeof window<`u`&&window.matchMedia(`(prefers-color-scheme: dark)`).matches||e===`dark`?`dark`:`light`,lt=A.createContext({theme:`light`,themeMode:`system`,setThemeMode:()=>void 0,themePalette:`zen`,setThemePalette:()=>void 0,customThemeVars:null,setCustomThemeVars:()=>void 0}),ut=e=>e===`light`||e===`dark`||e===`system`,dt=e=>{if(e)return e;if(typeof window<`u`&&window.localStorage){let e=window.localStorage.getItem(`color-theme-mode`);if(ut(e))return e;let t=window.localStorage.getItem(`color-theme`);if(t===`light`||t===`dark`)return t}return`system`},ft=e=>{if(e)return e;if(typeof window<`u`&&window.localStorage){let e=window.localStorage.getItem(`color-theme-palette`);if(typeof e==`string`)return e}return`zen`},pt=`--background.--foreground.--card.--card-foreground.--popover.--popover-foreground.--primary.--primary-foreground.--secondary.--secondary-foreground.--muted.--muted-foreground.--accent.--accent-foreground.--destructive.--destructive-foreground.--border.--input.--ring.--chart-1.--chart-2.--chart-3.--chart-4.--chart-5.--sidebar.--sidebar-foreground.--sidebar-primary.--sidebar-primary-foreground.--sidebar-accent.--sidebar-accent-foreground.--sidebar-border.--sidebar-ring.--font-sans.--font-serif.--font-mono.--radius.--shadow-2xs.--shadow-xs.--shadow-sm.--shadow.--shadow-md.--shadow-lg.--shadow-xl.--shadow-2xl.--tracking-normal`.split(`.`);function mt(e){for(let t of pt)e.style.removeProperty(t)}function ht({initialThemeMode:e,initialThemePalette:t,initialCustomThemeVars:n,children:r}){let[i,a]=A.useState(()=>dt(e)),[o,s]=A.useState(()=>ft(t)),[c,l]=A.useState(()=>ct(dt(e))),[u,d]=A.useState(n||null),f=A.useCallback((e,t,n)=>{let r=ct(e),i=window.document.documentElement,a=r===`dark`;if(i.classList.remove(a?`light`:`dark`),i.classList.add(r),mt(i),n){i.dataset.theme=`custom`;let e=a?n.dark:n.light;if(e)for(let[t,n]of Object.entries(e))i.style.setProperty(t,n)}else i.dataset.theme=t;localStorage.setItem(`color-theme`,r),localStorage.setItem(`color-theme-mode`,e),localStorage.setItem(`color-theme-palette`,t),l(r)},[]);A.useEffect(()=>{f(i,o,u)},[f,i,o,u]),A.useEffect(()=>{if(i!==`system`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`),t=()=>f(`system`,o,u);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[f,i,o,u]);let p=A.useMemo(()=>({theme:c,themeMode:i,setThemeMode:a,themePalette:o,setThemePalette:s,customThemeVars:u,setCustomThemeVars:d}),[c,i,o,u]);return(0,F.jsx)(lt.Provider,{value:p,children:r})}function gt(e){return P({tag:`svg`,attr:{viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z`,clipRule:`evenodd`},child:[]}]})(e)}function _t(e){return P({tag:`svg`,attr:{viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{d:`M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z`},child:[]}]})(e)}var vt=()=>{let{theme:e,themeMode:t,setThemeMode:n}=A.useContext(lt),r=t===`dark`?`light`:`dark`;return(0,F.jsx)(`div`,{className:`transition duration-500 ease-in-out rounded-full p-1`,children:e===`dark`?(0,F.jsx)(_t,{onClick:()=>n(r),className:`text-current text-4xl cursor-pointer`}):(0,F.jsx)(gt,{onClick:()=>n(r),className:`text-current text-4xl cursor-pointer`})})},yt=`https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google.png/640px-Google.png`;function bt(e){let t=e.preview?.images?.[0]?.source?.url;return t?t.replaceAll(`&amp;`,`&`):typeof e.thumbnail==`string`&&e.thumbnail.startsWith(`http`)?e.thumbnail:yt}function xt(e){return{id:e.id,title:e.title,url:e.url_overridden_by_dest||e.url||`https://www.reddit.com${e.permalink}`,image:bt(e),source:e.domain||`reddit.com`,publishedLabel:new Date((e.created_utc||Date.now()/1e3)*1e3).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`})}}function St(){let e=A.useMemo(()=>g(),[]),t=e.news?.subreddit||`worldnews`,n=Math.max(Number(e.news?.rotationSeconds||8),4),[r,i]=A.useState([]),[a,o]=A.useState(0),[s,c]=A.useState(`loading`),[l,u]=A.useState(0);A.useEffect(()=>{let e=!1;async function n(){c(`loading`);try{let n=((await(await fetch(`https://www.reddit.com/r/${t}.json?raw_json=1&limit=25`)).json())?.data?.children||[]).map(e=>e.data).filter(e=>!e.stickied).filter(e=>e.title).map(xt);e||(i(n),o(0),u(e=>e+1),c(n.length?`ready`:`empty`))}catch{e||(i([]),c(`error`))}}return n(),()=>{e=!0}},[t]),A.useEffect(()=>{if(r.length<=1)return;let e=window.setInterval(()=>{o(e=>(e+1)%r.length),u(e=>e+1)},n*1e3);return()=>window.clearInterval(e)},[r,n]);let d=A.useCallback(e=>{r.length&&(o(t=>(t+e+r.length)%r.length),u(e=>e+1))},[r]);if(s===`loading`)return(0,F.jsx)(`div`,{className:`headlines-hero flex h-full w-full items-end overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,var(--color-primary)_30%,transparent),transparent_40%),linear-gradient(160deg,color-mix(in_oklab,var(--color-card)_88%,black_12%),color-mix(in_oklab,var(--color-accent)_35%,var(--color-card)))]`,children:(0,F.jsxs)(`div`,{className:`w-full space-y-3`,children:[(0,F.jsx)(`div`,{className:`h-3 w-24 rounded-full bg-white/20`}),(0,F.jsx)(`div`,{className:`h-8 w-4/5 rounded-full bg-white/25`}),(0,F.jsx)(`div`,{className:`h-8 w-3/5 rounded-full bg-white/15`})]})});if(!r.length)return(0,F.jsx)(`div`,{className:`headlines-hero flex h-full w-full items-end overflow-hidden rounded-[inherit] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-secondary)_55%,var(--color-card)),color-mix(in_oklab,var(--color-accent)_35%,var(--color-card)))]`,children:(0,F.jsxs)(`div`,{className:`headlines-card rounded-2xl border border-white/10 bg-black/25 text-white backdrop-blur-sm`,children:[(0,F.jsx)(`p`,{className:`headlines-kicker font-semibold uppercase text-white/70`,children:`Headlines`}),(0,F.jsx)(`p`,{className:`headlines-empty font-semibold`,children:`No image-led headlines available right now.`})]})});let f=r[a];return(0,F.jsxs)(`a`,{className:`group relative block h-full w-full overflow-hidden rounded-[inherit] !text-white`,href:f.url,target:`_blank`,rel:`noreferrer`,style:{color:`#ffffff`},children:[(0,F.jsx)(`img`,{src:f.image,alt:f.title,className:`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]`}),(0,F.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.22),rgba(15,23,42,0.38)_34%,rgba(2,6,23,0.9)_100%)]`}),(0,F.jsxs)(`div`,{className:`headlines-topbar absolute flex items-center justify-between`,children:[(0,F.jsx)(`div`,{className:`headlines-pill rounded-full border border-white/25 bg-white/8 font-semibold uppercase !text-white backdrop-blur-md`,style:{color:`#ffffff`},children:t}),(0,F.jsxs)(`div`,{className:`headlines-controls flex items-center`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),d(-1)},className:`headlines-nav rounded-full border border-white/25 bg-white/8 !text-white backdrop-blur-md transition hover:bg-white/14`,"aria-label":`Previous headline`,children:(0,F.jsx)(He,{className:`size-4`})}),(0,F.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),d(1)},className:`headlines-nav rounded-full border border-white/25 bg-white/8 !text-white backdrop-blur-md transition hover:bg-white/14`,"aria-label":`Next headline`,children:(0,F.jsx)(Ve,{className:`size-4`})})]})]}),(0,F.jsx)(`div`,{className:`headlines-bottom absolute inset-x-0 bottom-0`,children:(0,F.jsxs)(`div`,{className:`headlines-card overflow-hidden rounded-[1.4rem] border border-white/20 bg-white/8 !text-white shadow-xl backdrop-blur-xl`,style:{color:`#ffffff`},children:[(0,F.jsxs)(`div`,{className:`headlines-meta flex items-center justify-between gap-3 uppercase !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]`,style:{color:`#ffffff`},children:[(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:f.source}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:f.publishedLabel})]}),(0,F.jsx)(`h2`,{className:`headlines-title max-w-3xl font-semibold leading-tight !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.82)]`,style:{color:`#ffffff`},children:f.title}),(0,F.jsx)(`div`,{className:`headlines-progress overflow-hidden rounded-full bg-white/20`,children:(0,F.jsx)(`div`,{className:`h-full rounded-full bg-white/85 animate-[headline-progress_var(--headline-duration)_linear_forwards]`,style:{"--headline-duration":`${n}s`}},l)})]})})]})}var Ct=[5,15,25,50];function wt({remaining:e,totalSeconds:t,running:n}){let[r,i]=A.useState(e);A.useEffect(()=>{if(!n){i(e);return}let t=e,r=performance.now(),a,o=()=>{let e=(performance.now()-r)/1e3;i(Math.max(0,t-e)),a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>cancelAnimationFrame(a)},[n,e]);let a=r/60,o=100/3,s=Math.floor(a),c=[];for(let e=s+2;e>=Math.max(0,s-2);e--)c.push(e);return(0,F.jsxs)(`div`,{className:`relative flex-1 overflow-hidden`,style:{background:`#f97316`},children:[c.map(e=>{let t=e-a;return(0,F.jsx)(`div`,{style:{position:`absolute`,top:0,bottom:`18px`,width:`${o}%`,left:`${50+t*o}%`,transform:`translateX(-50%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`none`,userSelect:`none`},children:(0,F.jsx)(`span`,{style:{fontWeight:900,fontSize:`clamp(2rem,12cqw,3.8rem)`,color:`#1a0800`,fontVariantNumeric:`tabular-nums`,lineHeight:1,letterSpacing:`-0.02em`},children:e})},e)}),(0,F.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 left-0`,style:{width:`10%`,background:`linear-gradient(to right,#f97316,transparent)`}}),(0,F.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 right-0`,style:{width:`10%`,background:`linear-gradient(to left,#f97316,transparent)`}}),(0,F.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 left-1/2`,style:{width:`1px`,background:`rgba(0,0,0,0.15)`,transform:`translateX(-50%)`}}),(0,F.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 flex items-end`,style:{height:`18px`,gap:`1px`,padding:`0 3px 2px`},children:Array.from({length:60},(e,t)=>{let n=t%15==0,r=t%5==0;return(0,F.jsx)(`div`,{style:{flex:1,height:n?`8px`:r?`5px`:`3px`,background:`rgba(255,255,255,${n?.85:r?.55:.35})`,alignSelf:`flex-end`,borderRadius:`0.5px`}},t)})})]})}function Tt(){let e=A.useMemo(()=>g(),[]),t=Math.max(Number(e.timer?.focusMinutes||25),1),[n,r]=A.useState(t*60),[i,a]=A.useState(t*60),[o,s]=A.useState(!1),[c,l]=A.useState(!1),[u,d]=A.useState(String(t)),[f,m]=A.useState(`00`);A.useEffect(()=>{if(!o)return;let e=window.setInterval(()=>{a(e=>e<=1?(s(!1),0):e-1)},1e3);return()=>window.clearInterval(e)},[o]);let h=i===0,_=Math.floor(i%3600/60),v=Math.floor(i/3600),y=i%60,b=()=>{let e=Math.max(0,Math.min(999,parseInt(u)||0)),t=Math.max(0,Math.min(59,parseInt(f)||0)),n=e*60+t;n>0&&(r(n),a(n),s(!1),p({...g(),timer:{focusMinutes:e}})),l(!1)},x=e=>{d(String(e)),m(`00`)},S=()=>{a(n),s(!1)};return(0,F.jsx)(`div`,{className:`timer-box flex h-full w-full flex-col overflow-hidden rounded-[inherit]`,children:c?(0,F.jsxs)(`div`,{className:`flex h-full flex-col justify-between p-3`,style:{background:`linear-gradient(135deg,#1c1c1c 0%,#111 100%)`},children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/30`,children:`Set Timer`}),(0,F.jsxs)(`div`,{className:`mb-2.5 flex items-center gap-1.5`,children:[(0,F.jsx)(`input`,{type:`number`,min:`0`,max:`999`,value:u,onChange:e=>d(e.target.value),onKeyDown:e=>e.key===`Enter`&&b(),autoFocus:!0,className:`w-14 rounded-lg border border-white/10 bg-white/8 px-2 py-1.5 text-center text-base font-bold text-white outline-none focus:border-orange-500`}),(0,F.jsx)(`span`,{className:`text-sm font-bold text-white/35`,children:`M`}),(0,F.jsx)(`input`,{type:`number`,min:`0`,max:`59`,value:f,onChange:e=>m(e.target.value),onKeyDown:e=>e.key===`Enter`&&b(),className:`w-14 rounded-lg border border-white/10 bg-white/8 px-2 py-1.5 text-center text-base font-bold text-white outline-none focus:border-orange-500`}),(0,F.jsx)(`span`,{className:`text-sm font-bold text-white/35`,children:`S`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-4 gap-1.5`,children:Ct.map(e=>(0,F.jsxs)(`button`,{type:`button`,onClick:()=>x(e),className:`rounded-lg py-1 text-[11px] font-semibold transition ${u===String(e)&&f===`00`?`bg-orange-500 text-white`:`bg-white/8 text-white/45 hover:bg-white/12 hover:text-white/70`}`,children:[e,`m`]},e))})]}),(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:b,className:`flex-1 rounded-full bg-orange-500 py-1.5 text-xs font-bold text-white transition hover:bg-orange-400`,children:`Set Timer`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>l(!1),className:`rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/45 transition hover:bg-white/14`,children:`Cancel`})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(wt,{remaining:i,totalSeconds:n,running:o}),(0,F.jsxs)(`div`,{className:`flex shrink-0 items-center gap-2 px-3 py-2`,style:{background:`linear-gradient(135deg,#1c1c1c 0%,#111 100%)`,borderTop:`1px solid rgba(255,255,255,0.05)`},children:[(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>{l(!0),d(String(_+v*60)),m(String(y).padStart(2,`0`))},className:`flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/30 transition hover:text-white/60`,children:[`Timer `,(0,F.jsx)(Fe,{className:`size-2.5`})]}),(0,F.jsx)(`p`,{className:`text-[7.5px] font-semibold uppercase tracking-[0.18em] text-white/25`,children:h?`TIME'S UP`:o?`COUNTING DOWN`:`READY`})]}),(0,F.jsxs)(`button`,{type:`button`,onClick:()=>h?S():s(e=>!e),className:`flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-white transition`,style:{background:o?`rgba(255,255,255,0.1)`:`#f97316`},children:[o?(0,F.jsx)(Ie,{className:`size-3.5`}):(0,F.jsx)(Pe,{className:`size-3.5`}),o?`Pause`:h?`Restart`:`Start`]}),(0,F.jsx)(`button`,{type:`button`,onClick:S,"aria-label":`Reset timer`,className:`flex shrink-0 items-center justify-center rounded-full bg-white/8 p-1.5 text-white/50 transition hover:bg-white/14 hover:text-white`,children:(0,F.jsx)(Me,{className:`size-3.5`})})]})]})})}var Et=g(),Dt=class extends A.Component{constructor(e){super(e),this.state={link:``}}setLink(e,t){let n=`https://embed.windy.com/embed.html?type=map&lat=${String(e)}&lon=${String(t)}`;this.setState({link:n})}componentDidMount(){Et.latitude?this.setLink(Et.latitude,Et.longitude):navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.setLink(e.coords.latitude,e.coords.longitude)},()=>{this.setState({link:`https://embed.windy.com/embed.html?type=map`})}):this.setState({link:`https://embed.windy.com/embed.html?type=map`})}render(){return(0,F.jsx)(`div`,{className:this.props.cardClass||`sticky rounded-xl overflow-hidden h-80`,children:(0,F.jsx)(`iframe`,{className:`h-full w-full overflow-hidden rounded-[inherit] bg-card`,width:`505`,height:`320`,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,src:this.state.link||void 0,title:`Windy map`})})}};function Ot(e,t){return function(){return e.apply(t,arguments)}}var{toString:kt}=Object.prototype,{getPrototypeOf:At}=Object,{iterator:jt,toStringTag:Mt}=Symbol,Nt=(e=>t=>{let n=kt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Pt=e=>(e=e.toLowerCase(),t=>Nt(t)===e),Ft=e=>t=>typeof t===e,{isArray:It}=Array,Lt=Ft(`undefined`);function Rt(e){return e!==null&&!Lt(e)&&e.constructor!==null&&!Lt(e.constructor)&&Ht(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var zt=Pt(`ArrayBuffer`);function Bt(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&zt(e.buffer),t}var Vt=Ft(`string`),Ht=Ft(`function`),Ut=Ft(`number`),Wt=e=>typeof e==`object`&&!!e,Gt=e=>e===!0||e===!1,Kt=e=>{if(Nt(e)!==`object`)return!1;let t=At(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Mt in e)&&!(jt in e)},qt=e=>{if(!Wt(e)||Rt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Jt=Pt(`Date`),Yt=Pt(`File`),Xt=e=>!!(e&&e.uri!==void 0),Zt=e=>e&&e.getParts!==void 0,Qt=Pt(`Blob`),$t=Pt(`FileList`),en=e=>Wt(e)&&Ht(e.pipe);function tn(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var nn=tn(),rn=nn.FormData===void 0?void 0:nn.FormData,an=e=>{if(!e)return!1;if(rn&&e instanceof rn)return!0;let t=At(e);if(!t||t===Object.prototype||!Ht(e.append))return!1;let n=Nt(e);return n===`formdata`||n===`object`&&Ht(e.toString)&&e.toString()===`[object FormData]`},on=Pt(`URLSearchParams`),[sn,cn,ln,un]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Pt),dn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function fn(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),It(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Rt(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function pn(e,t){if(Rt(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var mn=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,hn=e=>!Lt(e)&&e!==mn;function gn(){let{caseless:e,skipUndefined:t}=hn(this)&&this||{},n={},r=(r,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=e&&pn(n,i)||i;Kt(n[a])&&Kt(r)?n[a]=gn(n[a],r):Kt(r)?n[a]=gn({},r):It(r)?n[a]=r.slice():(!t||!Lt(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&fn(arguments[e],r);return n}var _n=(e,t,n,{allOwnKeys:r}={})=>(fn(t,(t,r)=>{n&&Ht(t)?Object.defineProperty(e,r,{value:Ot(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),vn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},bn=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&At(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Sn=e=>{if(!e)return null;if(It(e))return e;let t=e.length;if(!Ut(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Cn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&At(Uint8Array)),wn=(e,t)=>{let n=(e&&e[jt]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Tn=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},En=Pt(`HTMLFormElement`),Dn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),On=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),kn=Pt(`RegExp`),An=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};fn(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},jn=e=>{An(e,(t,n)=>{if(Ht(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(Ht(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Mn=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return It(e)?r(e):r(String(e).split(t)),n},Nn=()=>{},Pn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Fn(e){return!!(e&&Ht(e.append)&&e[Mt]===`FormData`&&e[jt])}var In=e=>{let t=Array(10),n=(e,r)=>{if(Wt(e)){if(t.indexOf(e)>=0)return;if(Rt(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=It(e)?[]:{};return fn(e,(e,t)=>{let a=n(e,r+1);!Lt(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Ln=Pt(`AsyncFunction`),Rn=e=>e&&(Wt(e)||Ht(e))&&Ht(e.then)&&Ht(e.catch),zn=((e,t)=>e?setImmediate:t?((e,t)=>(mn.addEventListener(`message`,({source:n,data:r})=>{n===mn&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),mn.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Ht(mn.postMessage)),I={isArray:It,isArrayBuffer:zt,isBuffer:Rt,isFormData:an,isArrayBufferView:Bt,isString:Vt,isNumber:Ut,isBoolean:Gt,isObject:Wt,isPlainObject:Kt,isEmptyObject:qt,isReadableStream:sn,isRequest:cn,isResponse:ln,isHeaders:un,isUndefined:Lt,isDate:Jt,isFile:Yt,isReactNativeBlob:Xt,isReactNative:Zt,isBlob:Qt,isRegExp:kn,isFunction:Ht,isStream:en,isURLSearchParams:on,isTypedArray:Cn,isFileList:$t,forEach:fn,merge:gn,extend:_n,trim:dn,stripBOM:vn,inherits:yn,toFlatObject:bn,kindOf:Nt,kindOfTest:Pt,endsWith:xn,toArray:Sn,forEachEntry:wn,matchAll:Tn,isHTMLForm:En,hasOwnProperty:On,hasOwnProp:On,reduceDescriptors:An,freezeMethods:jn,toObjectSet:Mn,toCamelCase:Dn,noop:Nn,toFiniteNumber:Pn,findKey:pn,global:mn,isContextDefined:hn,isSpecCompliantForm:Fn,toJSONObject:In,isAsyncFn:Ln,isThenable:Rn,setImmediate:zn,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(mn):typeof process<`u`&&process.nextTick||zn,isIterable:e=>e!=null&&Ht(e[jt])},L=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.status}}};L.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,L.ERR_BAD_OPTION=`ERR_BAD_OPTION`,L.ECONNABORTED=`ECONNABORTED`,L.ETIMEDOUT=`ETIMEDOUT`,L.ERR_NETWORK=`ERR_NETWORK`,L.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,L.ERR_DEPRECATED=`ERR_DEPRECATED`,L.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,L.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,L.ERR_CANCELED=`ERR_CANCELED`,L.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,L.ERR_INVALID_URL=`ERR_INVALID_URL`,L.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Bn(e){return I.isPlainObject(e)||I.isArray(e)}function Vn(e){return I.endsWith(e,`[]`)?e.slice(0,-2):e}function Hn(e,t,n){return e?e.concat(t).map(function(e,t){return e=Vn(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Un(e){return I.isArray(e)&&!e.some(Bn)}var Wn=I.toFlatObject(I,{},null,function(e){return/^is[A-Z]/.test(e)});function Gn(e,t,n){if(!I.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!I.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&I.isSpecCompliantForm(t);if(!I.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(I.isDate(e))return e.toISOString();if(I.isBoolean(e))return e.toString();if(!l&&I.isBlob(e))throw new L(`Blob is not supported. Use a Buffer instead.`);return I.isArrayBuffer(e)||I.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(I.isReactNative(t)&&I.isReactNativeBlob(e))return t.append(Hn(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(I.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&Un(e)||(I.isFileList(e)||I.endsWith(n,`[]`))&&(s=I.toArray(e)))return n=Vn(n),s.forEach(function(e,r){!(I.isUndefined(e)||e===null)&&t.append(o===!0?Hn([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return Bn(e)?!0:(t.append(Hn(i,n,a),u(e)),!1)}let f=[],p=Object.assign(Wn,{defaultVisitor:d,convertValue:u,isVisitable:Bn});function m(e,n,r=0){if(!I.isUndefined(e)){if(r>c)throw new L(`Object is too deeply nested (`+r+` levels). Max depth: `+c,L.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),I.forEach(e,function(e,a){(!(I.isUndefined(e)||e===null)&&i.call(t,e,I.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!I.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function Kn(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function qn(e,t){this._pairs=[],e&&Gn(e,this,t)}var Jn=qn.prototype;Jn.append=function(e,t){this._pairs.push([e,t])},Jn.toString=function(e){let t=e?function(t){return e.call(this,t,Kn)}:Kn;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Yn(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Xn(e,t,n){if(!t)return e;let r=n&&n.encode||Yn,i=I.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):I.isURLSearchParams(t)?t.toString():new qn(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Zn=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){I.forEach(this.handlers,function(t){t!==null&&e(t)})}},Qn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},$n={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:qn,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},er=t({hasBrowserEnv:()=>tr,hasStandardBrowserEnv:()=>rr,hasStandardBrowserWebWorkerEnv:()=>ir,navigator:()=>nr,origin:()=>ar}),tr=typeof window<`u`&&typeof document<`u`,nr=typeof navigator==`object`&&navigator||void 0,rr=tr&&(!nr||[`ReactNative`,`NativeScript`,`NS`].indexOf(nr.product)<0),ir=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,ar=tr&&window.location.href||`http://localhost`,or={...er,...$n};function sr(e,t){return Gn(e,new or.classes.URLSearchParams,{visitor:function(e,t,n,r){return or.isNode&&I.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function cr(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function lr(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function ur(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&I.isArray(r)?r.length:a,s?(I.hasOwnProp(r,a)?r[a]=I.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!r[a]||!I.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&I.isArray(r[a])&&(r[a]=lr(r[a])),!o)}if(I.isFormData(e)&&I.isFunction(e.entries)){let n={};return I.forEachEntry(e,(e,r)=>{t(cr(e),r,n,0)}),n}return null}var dr=(e,t)=>e!=null&&I.hasOwnProp(e,t)?e[t]:void 0;function fr(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var pr={transitional:Qn,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=I.isObject(e);if(i&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return r?JSON.stringify(ur(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e)||I.isReadableStream(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=dr(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return sr(e,t).toString();if((a=I.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=dr(this,`env`),r=n&&n.FormData;return Gn(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),fr(e)):e}],transformResponse:[function(e){let t=dr(this,`transitional`)||pr.transitional,n=t&&t.forcedJSONParsing,r=dr(this,`responseType`),i=r===`json`;if(I.isResponse(e)||I.isReadableStream(e))return e;if(e&&I.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,dr(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?L.from(e,L.ERR_BAD_RESPONSE,this,null,dr(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:or.classes.FormData,Blob:or.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{pr.headers[e]={}});var mr=I.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),hr=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&mr[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},gr=Symbol(`internals`),_r=/[^\x09\x20-\x7E\x80-\xFF]/g;function vr(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function yr(e){return e&&String(e).trim().toLowerCase()}function br(e){return vr(e.replace(_r,``))}function xr(e){return e===!1||e==null?e:I.isArray(e)?e.map(xr):br(String(e))}function Sr(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Cr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function wr(e,t,n,r,i){if(I.isFunction(r))return r.call(this,t,n);if(i&&(t=n),I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function Tr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Er(e,t){let n=I.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Dr=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=yr(t);if(!i)throw Error(`header name must be a non-empty string`);let a=I.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=xr(e))}let a=(e,t)=>I.forEach(e,(e,n)=>i(e,n,t));if(I.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(I.isString(e)&&(e=e.trim())&&!Cr(e))a(hr(e),t);else if(I.isObject(e)&&I.isIterable(e)){let n={},r,i;for(let t of e){if(!I.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?I.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=yr(e),e){let n=I.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Sr(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=yr(e),e){let n=I.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||wr(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=yr(e),e){let i=I.findKey(n,e);i&&(!t||wr(n,n[i],i,t))&&(delete n[i],r=!0)}}return I.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||wr(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return I.forEach(this,(r,i)=>{let a=I.findKey(n,i);if(a){t[a]=xr(r),delete t[i];return}let o=e?Tr(i):String(i).trim();o!==i&&delete t[i],t[o]=xr(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return I.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&I.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[gr]=this[gr]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=yr(e);t[r]||(Er(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}};Dr.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),I.reduceDescriptors(Dr.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),I.freezeMethods(Dr);function Or(e,t){let n=this||pr,r=t||n,i=Dr.from(r.headers),a=r.data;return I.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function kr(e){return!!(e&&e.__CANCEL__)}var Ar=class extends L{constructor(e,t,n){super(e??`canceled`,L.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function jr(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L(`Request failed with status code `+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Mr(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function Nr(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Pr(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Fr=(e,t,n=3)=>{let r=0,i=Nr(50,250);return Pr(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Ir=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Lr=e=>(...t)=>I.asap(()=>e(...t)),Rr=or.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,or.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(or.origin),or.navigator&&/(msie|trident)/i.test(or.navigator.userAgent)):()=>!0,zr=or.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];I.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),I.isString(r)&&s.push(`path=${r}`),I.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),I.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.match(RegExp(`(?:^|; )`+e+`=([^;]*)`));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function Br(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function Vr(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Hr(e,t,n){let r=!Br(t);return e&&(r||n===!1)?Vr(e,t):t}var Ur=e=>e instanceof Dr?{...e}:e;function Wr(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,`hasOwnProperty`,{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:r},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function i(e,t,n,i){if(!I.isUndefined(t))return r(e,t,n,i);if(!I.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!I.isUndefined(t))return r(void 0,t)}function o(e,t){if(!I.isUndefined(t))return r(void 0,t);if(!I.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(I.hasOwnProp(t,a))return r(n,i);if(I.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Ur(e),Ur(t),n,!0)};return I.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=I.hasOwnProp(c,r)?c[r]:i,o=a(I.hasOwnProp(e,r)?e[r]:void 0,I.hasOwnProp(t,r)?t[r]:void 0,r);I.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Gr=e=>{let t=Wr({},e),n=e=>I.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Dr.from(s),t.url=Xn(Hr(l,d,u),e.params,e.paramsSerializer),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?unescape(encodeURIComponent(c.password)):``))),I.isFormData(r)){if(or.hasStandardBrowserEnv||or.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(I.isFunction(r.getHeaders)){let e=r.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&s.set(e,n)})}}if(or.hasStandardBrowserEnv&&(I.isFunction(i)&&(i=i(t)),i===!0||i==null&&Rr(t.url))){let e=a&&o&&zr.read(o);e&&s.set(a,e)}return t},Kr=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Gr(e),i=r.data,a=Dr.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Dr.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());jr(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new L(`Request aborted`,L.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=new L(t&&t.message?t.message:`Network Error`,L.ERR_NETWORK,e,h);r.event=t||null,n(r),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||Qn;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new L(t,i.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&I.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),I.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Fr(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Fr(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Ar(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Mr(r.url);if(_&&or.protocols.indexOf(_)===-1){n(new L(`Unsupported protocol `+_+`:`,L.ERR_BAD_REQUEST,e));return}h.send(i||null)})},qr=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof L?t:new Ar(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new L(`timeout of ${t}ms exceeded`,L.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>I.asap(o),s}},Jr=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Yr=async function*(e,t){for await(let n of Xr(e))yield*Jr(n,t)},Xr=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Zr=(e,t,n,r)=>{let i=Yr(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Qr=64*1024,{isFunction:$r}=I,ei=(({Request:e,Response:t})=>({Request:e,Response:t}))(I.global),{ReadableStream:ti,TextEncoder:ni}=I.global,ri=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ii=e=>{e=I.merge.call({skipUndefined:!0},ei,e);let{fetch:t,Request:n,Response:r}=e,i=t?$r(t):typeof fetch==`function`,a=$r(n),o=$r(r);if(!i)return!1;let s=i&&$r(ti),c=i&&(typeof ni==`function`?(e=>t=>e.encode(t))(new ni):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&ri(()=>{let e=!1,t=new n(or.origin,{body:new ti,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),u=o&&s&&ri(()=>I.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new L(`Response type '${e}' is not supported`,L.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(I.isBlob(e))return e.size;if(I.isSpecCompliantForm(e))return(await new n(or.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(I.isArrayBufferView(e)||I.isArrayBuffer(e))return e.byteLength;if(I.isURLSearchParams(e)&&(e+=``),I.isString(e))return(await c(e)).byteLength},p=async(e,t)=>I.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=Gr(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=qr([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),T;try{if(g&&l&&o!==`get`&&o!==`head`&&(T=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(I.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=Ir(T,Fr(Lr(g)));s=Zr(e.body,Qr,t,n)}}I.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype;if(I.isFormData(s)){let e=v.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&v.delete(`content-type`)}let c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=I.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&Ir(t,Fr(Lr(h),!0))||[];f=new r(Zr(f.body,Qr,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let ee=await d[I.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{jr(t,n,{data:ee,headers:Dr.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new L(`Network Error`,L.ERR_NETWORK,e,C,t&&t.response),{cause:t.cause||t}):L.from(t,t&&t.code,e,C,t&&t.response)}}},ai=new Map,oi=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=ai;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:ii(t)),l=c;return c};oi();var si={http:null,xhr:Kr,fetch:{get:oi}};I.forEach(si,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var ci=e=>`- ${e}`,li=e=>I.isFunction(e)||e===null||e===!1;function ui(e,t){e=I.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!li(r)&&(i=si[(n=String(r)).toLowerCase()],i===void 0))throw new L(`Unknown adapter '${n}'`);if(i&&(I.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new L(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(ci).join(`
`):` `+ci(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var di={getAdapter:ui,adapters:si};function fi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ar(null,e)}function pi(e){return fi(e),e.headers=Dr.from(e.headers),e.data=Or.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),di.getAdapter(e.adapter||pr.adapter,e)(e).then(function(t){return fi(e),t.data=Or.call(e,e.transformResponse,t),t.headers=Dr.from(t.headers),t},function(t){return kr(t)||(fi(e),t&&t.response&&(t.response.data=Or.call(e,e.transformResponse,t.response),t.response.headers=Dr.from(t.response.headers))),Promise.reject(t)})}var mi=`1.15.2`,hi={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{hi[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var gi={};hi.transitional=function(e,t,n){function r(e,t){return`[Axios v`+mi+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new L(r(i,` has been removed`+(t?` in `+t:``)),L.ERR_DEPRECATED);return t&&!gi[i]&&(gi[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},hi.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function _i(e,t,n){if(typeof e!=`object`)throw new L(`options must be an object`,L.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new L(`option `+a+` must be `+n,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L(`Unknown option `+a,L.ERR_BAD_OPTION)}}var vi={assertOptions:_i,validators:hi},yi=vi.validators,bi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zn,response:new Zn}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Wr(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&vi.assertOptions(n,{silentJSONParsing:yi.transitional(yi.boolean),forcedJSONParsing:yi.transitional(yi.boolean),clarifyTimeoutError:yi.transitional(yi.boolean),legacyInterceptorReqResOrdering:yi.transitional(yi.boolean)},!1),r!=null&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:vi.assertOptions(r,{encode:yi.function,serialize:yi.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),vi.assertOptions(t,{baseUrl:yi.spelling(`baseURL`),withXsrfToken:yi.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&I.merge(i.common,i[t.method]);i&&I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Dr.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||Qn;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[pi.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=pi.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Wr(this.defaults,e),Xn(Hr(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};I.forEach([`delete`,`get`,`head`,`options`],function(e){bi.prototype[e]=function(t,n){return this.request(Wr(n||{},{method:e,url:t,data:(n||{}).data}))}}),I.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(Wr(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}bi.prototype[e]=t(),bi.prototype[e+`Form`]=t(!0)});var xi=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Ar(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Si(e){return function(t){return e.apply(null,t)}}function Ci(e){return I.isObject(e)&&e.isAxiosError===!0}var wi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(wi).forEach(([e,t])=>{wi[t]=e});function Ti(e){let t=new bi(e),n=Ot(bi.prototype.request,t);return I.extend(n,bi.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Ti(Wr(e,t))},n}var R=Ti(pr);R.Axios=bi,R.CanceledError=Ar,R.CancelToken=xi,R.isCancel=kr,R.VERSION=mi,R.toFormData=Gn,R.AxiosError=L,R.Cancel=R.CanceledError,R.all=function(e){return Promise.all(e)},R.spread=Si,R.isAxiosError=Ci,R.mergeConfig=Wr,R.AxiosHeaders=Dr,R.formToJSON=e=>ur(I.isHTMLForm(e)?new FormData(e):e),R.getAdapter=di.getAdapter,R.HttpStatusCode=wi,R.default=R;var Ei=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,Di=1920*1080*4,Oi=class{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=Mi();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,n,r,i=0,a=0,o=2,s=Di,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error(`Paper Shaders: parent element must be an HTMLElement`);if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector(`style[data-paper-shader]`)){let e=this.ownerDocument.createElement(`style`);e.innerHTML=ji,e.setAttribute(`data-paper-shader`,``),this.ownerDocument.head.prepend(e)}let l=this.ownerDocument.createElement(`canvas`);this.canvasElement=l,this.parentElement.prepend(l),this.fragmentShader=t,this.providedUniforms=n,this.mipmaps=c,this.currentFrame=a,this.minPixelRatio=o,this.maxPixelCount=s;let u=l.getContext(`webgl2`,r);if(!u)throw Error(`Paper Shaders: WebGL is not supported in this browser`);this.gl=u,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener(`resize`,this.handleVisualViewportChange),this.setSpeed(i),this.parentElement.setAttribute(`data-paper-shader`,``),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener(`visibilitychange`,this.handleDocumentVisibilityChange)}initProgram=()=>{let e=Ai(this.gl,Ei,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`)};Object.entries(this.providedUniforms).forEach(([t,n])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),n instanceof HTMLImageElement){let n=`${t}AspectRatio`;e[n]=this.gl.getUniformLocation(this.program,n)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];t!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,n=Math.max(1,window.devicePixelRatio),r=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/n);e=this.parentDevicePixelWidth*i*r,t=this.parentDevicePixelHeight*i*r}else{let i=Math.max(n,this.minPixelRatio)*r;if(this.isSafari){let e=Ni(this.ownerDocument);i*=Math.max(1,e)}e=Math.round(this.parentWidth)*i,t=Math.round(this.parentHeight)*i}let i=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t),a=Math.min(1,i),o=Math.round(e*a),s=Math.round(t*a),c=o/Math.round(this.parentWidth);(this.canvasElement.width!==o||this.canvasElement.height!==s||this.renderScale!==c)&&(this.renderScale=c,this.canvasElement.width=o,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn(`Tried to render before program or gl was initialized`);return}let t=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed===0?this.rafId=null:this.requestRender()};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||t.naturalWidth===0)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let n=this.textures.get(e);n&&this.gl.deleteTexture(n),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let r=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+r);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let a=this.gl.getError();if(a!==this.gl.NO_ERROR||i===null){console.error(`Paper Shaders: WebGL error when uploading texture:`,a);return}this.textures.set(e,i);let o=this.uniformLocations[e];if(o){this.gl.uniform1i(o,r);let n=`${e}AspectRatio`,i=this.uniformLocations[n];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t?!0:Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((e,n)=>this.areUniformValuesEqual(e,t[n])):!1;setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let n=t;if(t instanceof HTMLImageElement&&(n=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],n))return;this.uniformCache[e]=n;let r=this.uniformLocations[e];if(!r){console.warn(`Uniform location for ${e} not found`);return}if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let n=null,i=null;if(t[0]!==void 0&&Array.isArray(t[0])){let r=t[0].length;if(t.every(e=>e.length===r))n=t.flat(),i=r;else{console.warn(`All child arrays must be the same length for ${e}`);return}}else n=t,i=n.length;switch(i){case 2:this.gl.uniform2fv(r,n);break;case 3:this.gl.uniform3fv(r,n);break;case 4:this.gl.uniform4fv(r,n);break;case 9:this.gl.uniformMatrix3fv(r,!1,n);break;case 16:this.gl.uniformMatrix4fv(r,!1,n);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else typeof t==`number`?this.gl.uniform1f(r,t):typeof t==`boolean`?this.gl.uniform1i(r,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=Di)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),visualViewport?.removeEventListener(`resize`,this.handleVisualViewportChange),this.ownerDocument.removeEventListener(`visibilitychange`,this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}};function ki(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: `+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function Ai(e,t,n){let r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,`precision highp float;`),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,`precision highp float`).replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,`$1 highp $3`));let a=ki(e,e.VERTEX_SHADER,t),o=ki(e,e.FRAGMENT_SHADER,n);if(!a||!o)return null;let s=e.createProgram();return s?(e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,a),e.detachShader(s,o),e.deleteShader(a),e.deleteShader(o),s):(console.error(`Unable to initialize the shader program: `+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(a),e.deleteShader(o),null)):null}var ji=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function Mi(){let e=navigator.userAgent.toLowerCase();return e.includes(`safari`)&&!e.includes(`chrome`)&&!e.includes(`android`)}function Ni(e){let t=visualViewport?.scale??1,n=visualViewport?.width??window.innerWidth,r=window.innerWidth-e.documentElement.clientWidth,i=t*n+r,a=outerWidth/i,o=Math.round(100*a);return o%5==0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:a}var z={fit:`contain`,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},Pi={none:0,contain:1,cover:2},Fi=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Ii=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,Li=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,Ri=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,zi=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,Bi=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,Vi=`
float fiberRandom(vec2 p) {
  vec2 uv = floor(p) / 100.;
  return texture(u_noiseTexture, fract(uv)).b;
}

float fiberValueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = fiberRandom(i);
  float b = fiberRandom(i + vec2(1.0, 0.0));
  float c = fiberRandom(i + vec2(0.0, 1.0));
  float d = fiberRandom(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float fiberNoiseFbm(in vec2 n, vec2 seedOffset) {
  float total = 0.0, amplitude = 1.;
  for (int i = 0; i < 4; i++) {
    n = rotate(n, .7);
    total += fiberValueNoise(n + seedOffset) * amplitude;
    n *= 2.;
    amplitude *= 0.6;
  }
  return total;
}

float fiberNoise(vec2 uv, vec2 seedOffset) {
  float epsilon = 0.001;
  float n1 = fiberNoiseFbm(uv + vec2(epsilon, 0.0), seedOffset);
  float n2 = fiberNoiseFbm(uv - vec2(epsilon, 0.0), seedOffset);
  float n3 = fiberNoiseFbm(uv + vec2(0.0, epsilon), seedOffset);
  float n4 = fiberNoiseFbm(uv - vec2(0.0, epsilon), seedOffset);
  return length(vec2(n1 - n2, n3 - n4)) / (2.0 * epsilon);
}
`;`${Bi}${Fi}${Li}${Ri}`;var Hi={random:1,"2x2":2,"4x4":3,"8x8":4},Ui=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_contrast;
uniform float u_roughness;
uniform float u_fiber;
uniform float u_fiberSize;
uniform float u_crumples;
uniform float u_crumpleSize;
uniform float u_folds;
uniform float u_foldCount;
uniform float u_drops;
uniform float u_seed;
uniform float u_fade;

uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;

out vec4 fragColor;

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1. - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1. - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

${Fi}
${Ii}
${zi}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
float fbm(vec2 n) {
  float total = 0.0, amplitude = .4;
  for (int i = 0; i < 3; i++) {
    total += valueNoise(n) * amplitude;
    n *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}


float randomG(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float roughness(vec2 p) {
  p *= .1;
  float o = 0.;
  for (float i = 0.; ++i < 4.; p *= 2.1) {
    vec4 w = vec4(floor(p), ceil(p));
    vec2 f = fract(p);
    o += mix(
    mix(randomG(w.xy), randomG(w.xw), f.y),
    mix(randomG(w.zy), randomG(w.zw), f.y),
    f.x);
    o += .2 / exp(2. * abs(sin(.2 * p.x + .5 * p.y)));
  }
  return o / 3.;
}

${Vi}

vec2 randomGB(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).gb;
}
float crumpledNoise(vec2 t, float pw) {
  vec2 p = floor(t);
  float wsum = 0.;
  float cl = 0.;
  for (int y = -1; y < 2; y += 1) {
    for (int x = -1; x < 2; x += 1) {
      vec2 b = vec2(float(x), float(y));
      vec2 q = b + p;
      vec2 q2 = q - floor(q / 8.) * 8.;
      vec2 c = q + randomGB(q2);
      vec2 r = c - t;
      float w = pow(smoothstep(0., 1., 1. - abs(r.x)), pw) * pow(smoothstep(0., 1., 1. - abs(r.y)), pw);
      cl += (.5 + .5 * sin((q2.x + q2.y * 5.) * 8.)) * w;
      wsum += w;
    }
  }
  return pow(wsum != 0.0 ? cl / wsum : 0.0, .5) * 2.;
}
float crumplesShape(vec2 uv) {
  return crumpledNoise(uv * .25, 16.) * crumpledNoise(uv * .5, 2.);
}


vec2 folds(vec2 uv) {
  vec3 pp = vec3(0.);
  float l = 9.;
  for (float i = 0.; i < 15.; i++) {
    if (i >= u_foldCount) break;
    vec2 rand = randomGB(vec2(i, i * u_seed));
    float an = rand.x * TWO_PI;
    vec2 p = vec2(cos(an), sin(an)) * rand.y;
    float dist = distance(uv, p);
    l = min(l, dist);

    if (l == dist) {
      pp.xy = (uv - p.xy);
      pp.z = dist;
    }
  }
  return mix(pp.xy, vec2(0.), pow(pp.z, .25));
}

float drops(vec2 uv) {
  vec2 iDropsUV = floor(uv);
  vec2 fDropsUV = fract(uv);
  float dropsMinDist = 1.;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 neighbor = vec2(float(i), float(j));
      vec2 offset = randomGB(iDropsUV + neighbor);
      offset = .5 + .5 * sin(10. * u_seed + TWO_PI * offset);
      vec2 pos = neighbor + offset - fDropsUV;
      float dist = length(pos);
      dropsMinDist = min(dropsMinDist, dropsMinDist*dist);
    }
  }
  return 1. - smoothstep(.05, .09, pow(dropsMinDist, .5));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = 5. * (patternUV * vec2(u_imageAspectRatio, 1.));

  vec2 roughnessUv = 1.5 * (gl_FragCoord.xy - .5 * u_resolution) / u_pixelRatio;
  float roughness = roughness(roughnessUv + vec2(1., 0.)) - roughness(roughnessUv - vec2(1., 0.));

  vec2 crumplesUV = fract(patternUV * .02 / u_crumpleSize - u_seed) * 32.;
  float crumples = u_crumples * (crumplesShape(crumplesUV + vec2(.05, 0.)) - crumplesShape(crumplesUV));

  vec2 fiberUV = 2. / u_fiberSize * patternUV;
  float fiber = fiberNoise(fiberUV, vec2(0.));
  fiber = .5 * u_fiber * (fiber - 1.);

  vec2 normal = vec2(0.);
  vec2 normalImage = vec2(0.);

  vec2 foldsUV = patternUV * .12;
  foldsUV = rotate(foldsUV, 4. * u_seed);
  vec2 w = folds(foldsUV);
  foldsUV = rotate(foldsUV + .007 * cos(u_seed), .01 * sin(u_seed));
  vec2 w2 = folds(foldsUV);

  float drops = u_drops * drops(patternUV * 2.);

  float fade = u_fade * fbm(.17 * patternUV + 10. * u_seed);
  fade = clamp(8. * fade * fade * fade, 0., 1.);

  w = mix(w, vec2(0.), fade);
  w2 = mix(w2, vec2(0.), fade);
  crumples = mix(crumples, 0., fade);
  drops = mix(drops, 0., fade);
  fiber *= mix(1., .5, fade);
  roughness *= mix(1., .5, fade);

  normal.xy += u_folds * min(5. * u_contrast, 1.) * 4. * max(vec2(0.), w + w2);
  normalImage.xy += u_folds * 2. * w;

  normal.xy += crumples;
  normalImage.xy += 1.5 * crumples;

  normal.xy += 3. * drops;
  normalImage.xy += .2 * drops;

  normal.xy += u_roughness * 1.5 * roughness;
  normal.xy += fiber;

  normalImage += u_roughness * .75 * roughness;
  normalImage += .2 * fiber;

  vec3 lightPos = vec3(1., 2., 1.);
  float res = dot(normalize(vec3(normal, 9.5 - 9. * pow(u_contrast, .1))), normalize(lightPos));

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  imageUV += .02 * normalImage;
  float frame = getUvFrame(imageUV);
  vec4 image = texture(u_image, imageUV);
  image.rgb += .6 * pow(u_contrast, .4) * (res - .7);

  frame *= image.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);
  opacity = mix(opacity, 1., frame);

  color -= .007 * drops;

  color.rgb = mix(color, image.rgb, frame);

  fragColor = vec4(color, opacity);
}
`,Wi=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_highlights;
uniform float u_layering;
uniform float u_edges;
uniform float u_caustic;
uniform float u_waves;

in vec2 v_imageUV;

out vec4 fragColor;

${Fi}
${Ii}
${Bi}

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1.0 - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1.0 - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

mat2 rotate2D(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

float getCausticNoise(vec2 uv, float t, float scale) {
  vec2 n = vec2(.1);
  vec2 N = vec2(.1);
  mat2 m = rotate2D(.5);
  for (int j = 0; j < 6; j++) {
    uv *= m;
    n *= m;
    vec2 q = uv * scale + float(j) + n + (.5 + .5 * float(j)) * (mod(float(j), 2.) - 1.) * t;
    n += sin(q);
    N += cos(q) / scale;
    scale *= 1.1;
  }
  return (N.x + N.y + 1.);
}

void main() {
  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = (patternUV * vec2(u_imageAspectRatio, 1.));
  patternUV /= (.01 + .09 * u_size);

  float t = u_time;

  float wavesNoise = snoise((.3 + .1 * sin(t)) * .1 * patternUV + vec2(0., .4 * t));

  float causticNoise = getCausticNoise(patternUV + u_waves * vec2(1., -1.) * wavesNoise, 2. * t, 1.5);

  causticNoise += u_layering * getCausticNoise(patternUV + 2. * u_waves * vec2(1., -1.) * wavesNoise, 1.5 * t, 2.);
  causticNoise = causticNoise * causticNoise;

  float edgesDistortion = smoothstep(0., .1, imageUV.x);
  edgesDistortion *= smoothstep(0., .1, imageUV.y);
  edgesDistortion *= (smoothstep(1., 1.1, imageUV.x) + (1.0 - smoothstep(.8, .95, imageUV.x)));
  edgesDistortion *= (1.0 - smoothstep(.9, 1., imageUV.y));
  edgesDistortion = mix(edgesDistortion, 1., u_edges);

  float causticNoiseDistortion = .02 * causticNoise * edgesDistortion;

  float wavesDistortion = .1 * u_waves * wavesNoise;

  imageUV += vec2(wavesDistortion, -wavesDistortion);
  imageUV += (u_caustic * causticNoiseDistortion);

  float frame = getUvFrame(imageUV);

  vec4 image = texture(u_image, imageUV);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;

  vec3 color = mix(backColor.rgb, image.rgb, image.a * frame);
  float opacity = backColor.a + image.a * frame;

  causticNoise = max(-.2, causticNoise);

  float hightlight = .025 * u_highlights * causticNoise;
  hightlight *= u_colorHighlight.a;
  color = mix(color, u_colorHighlight.rgb, .05 * u_highlights * causticNoise);
  opacity += hightlight;

  color += hightlight * (.5 + .5 * wavesNoise);
  opacity += hightlight * (.5 + .5 * wavesNoise);

  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Gi=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_rotation;

uniform vec4 u_colorBack;
uniform vec4 u_colorShadow;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_shadows;
uniform float u_angle;
uniform float u_stretch;
uniform float u_shape;
uniform float u_distortion;
uniform float u_highlights;
uniform float u_distortionShape;
uniform float u_shift;
uniform float u_blur;
uniform float u_edges;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_imageUV;

out vec4 fragColor;

${Fi}
${Ii}
${Ri}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, float softness) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);
  float left   = smoothstep(0., aax + softness, uv.x);
  float right  = 1. - smoothstep(1. - softness - aax, 1., uv.x);
  float bottom = smoothstep(0., aay + softness, uv.y);
  float top    = 1. - smoothstep(1. - softness - aay, 1., uv.y);
  return left * right * bottom * top;
}

const int MAX_RADIUS = 50;
vec4 samplePremultiplied(sampler2D tex, vec2 uv) {
  vec4 c = texture(tex, uv);
  c.rgb *= c.a;
  return c;
}
vec4 getBlur(sampler2D tex, vec2 uv, vec2 texelSize, vec2 dir, float sigma) {
  if (sigma <= .5) return texture(tex, uv);
  int radius = int(min(float(MAX_RADIUS), ceil(3.0 * sigma)));

  float twoSigma2 = 2.0 * sigma * sigma;
  float gaussianNorm = 1.0 / sqrt(TWO_PI * sigma * sigma);

  vec4 sum = samplePremultiplied(tex, uv) * gaussianNorm;
  float weightSum = gaussianNorm;

  for (int i = 1; i <= MAX_RADIUS; i++) {
    if (i > radius) break;

    float x = float(i);
    float w = exp(-(x * x) / twoSigma2) * gaussianNorm;

    vec2 offset = dir * texelSize * x;
    vec4 s1 = samplePremultiplied(tex, uv + offset);
    vec4 s2 = samplePremultiplied(tex, uv - offset);

    sum += (s1 + s2) * w;
    weightSum += 2.0 * w;
  }

  vec4 result = sum / weightSum;
  if (result.a > 0.) {
    result.rgb /= result.a;
  }

  return result;
}

vec2 rotateAspect(vec2 p, float a, float aspect) {
  p.x *= aspect;
  p = rotate(p, a);
  p.x /= aspect;
  return p;
}

float smoothFract(float x) {
  float f = fract(x);
  float w = fwidth(x);

  float edge = abs(f - 0.5) - 0.5;
  float band = smoothstep(-w, w, edge);

  return mix(f, 1.0 - f, band);
}

void main() {

  float patternRotation = -u_angle * PI / 180.;
  float patternSize = mix(200., 5., u_size);

  vec2 uv = v_imageUV;

  vec2 uvMask = gl_FragCoord.xy / u_resolution.xy;
  vec2 sw = vec2(.005);
  vec4 margins = vec4(u_marginLeft, u_marginTop, u_marginRight, u_marginBottom);
  float mask =
  smoothstep(margins[0], margins[0] + sw.x, uvMask.x + sw.x) *
  smoothstep(margins[2], margins[2] + sw.x, 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1], margins[1] + sw.y, uvMask.y + sw.y) *
  smoothstep(margins[3], margins[3] + sw.y, 1.0 - uvMask.y + sw.y);
  float maskOuter =
  smoothstep(margins[0] - sw.x, margins[0], uvMask.x + sw.x) *
  smoothstep(margins[2] - sw.x, margins[2], 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1] - sw.y, margins[1], uvMask.y + sw.y) *
  smoothstep(margins[3] - sw.y, margins[3], 1.0 - uvMask.y + sw.y);
  float maskStroke = maskOuter - mask;
  float maskInner =
  smoothstep(margins[0] - 2. * sw.x, margins[0], uvMask.x) *
  smoothstep(margins[2] - 2. * sw.x, margins[2], 1.0 - uvMask.x) *
  smoothstep(margins[1] - 2. * sw.y, margins[1], uvMask.y) *
  smoothstep(margins[3] - 2. * sw.y, margins[3], 1.0 - uvMask.y);
  float maskStrokeInner = maskInner - mask;

  uv -= .5;
  uv *= patternSize;
  uv = rotateAspect(uv, patternRotation, u_imageAspectRatio);

  float curve = 0.;
  float patternY = uv.y / u_imageAspectRatio;
  if (u_shape > 4.5) {
    // pattern
    curve = .5 + .5 * sin(.5 * PI * uv.x) * cos(.5 * PI * patternY);
  } else if (u_shape > 3.5) {
    // zigzag
    curve = 10. * abs(fract(.1 * patternY) - .5);
  } else if (u_shape > 2.5) {
    // wave
    curve = 4. * sin(.23 * patternY);
  } else if (u_shape > 1.5) {
    // lines irregular
    curve = .5 + .5 * sin(.5 * uv.x) * sin(1.7 * uv.x);
  } else {
    // lines
  }

  vec2 UvToFract = uv + curve;
  vec2 fractOrigUV = fract(uv);
  vec2 floorOrigUV = floor(uv);

  float x = smoothFract(UvToFract.x);
  float xNonSmooth = fract(UvToFract.x) + .0001;

  float highlightsWidth = 2. * max(.001, fwidth(UvToFract.x));
  highlightsWidth += 2. * maskStrokeInner;
  float highlights = smoothstep(0., highlightsWidth, xNonSmooth);
  highlights *= smoothstep(1., 1. - highlightsWidth, xNonSmooth);
  highlights = 1. - highlights;
  highlights *= u_highlights;
  highlights = clamp(highlights, 0., 1.);
  highlights *= mask;

  float shadows = pow(x, 1.3);
  float distortion = 0.;
  float fadeX = 1.;
  float frameFade = 0.;

  float aa = fwidth(xNonSmooth);
  aa = max(aa, fwidth(uv.x));
  aa = max(aa, fwidth(UvToFract.x));
  aa = max(aa, .0001);

  if (u_distortionShape == 1.) {
    distortion = -pow(1.5 * x, 3.);
    distortion += (.5 - u_shift);

    frameFade = pow(1.5 * x, 3.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
  } else if (u_distortionShape == 2.) {
    distortion = 2. * pow(x, 2.);
    distortion -= (.5 + u_shift);

    frameFade = pow(abs(x - .5), 4.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
    frameFade = mix(1., frameFade, .5 * fadeX);
  } else if (u_distortionShape == 3.) {
    distortion = pow(2. * (xNonSmooth - .5), 6.);
    distortion -= .25;
    distortion -= u_shift;

    frameFade = 1. - 2. * pow(abs(x - .4), 2.);
    aa = .15;
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    frameFade = mix(1., frameFade, fadeX);

  } else if (u_distortionShape == 4.) {
    x = xNonSmooth;
    distortion = sin((x + .25) * TWO_PI);
    shadows = .5 + .5 * asin(distortion) / (.5 * PI);
    distortion *= .5;
    distortion -= u_shift;
    frameFade = .5 + .5 * sin(x * TWO_PI);
  } else if (u_distortionShape == 5.) {
    distortion -= pow(abs(x), .2) * x;
    distortion += .33;
    distortion -= 3. * u_shift;
    distortion *= .33;

    frameFade = .3 * (smoothstep(.0, 1., x));
    shadows = pow(x, 2.5);

    aa = max(.1, aa);
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion *= fadeX;
  }

  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= (.8 / vec2(length(dudx), length(dudy)));
  grainUV += .5;
  float grain = valueNoise(grainUV);
  grain = smoothstep(.4, .7, grain);
  grain *= u_grainMixer;
  distortion = mix(distortion, 0., grain);

  shadows = min(shadows, 1.);
  shadows += maskStrokeInner;
  shadows *= mask;
  shadows = min(shadows, 1.);
  shadows *= pow(u_shadows, 2.);
  shadows = clamp(shadows, 0., 1.);

  distortion *= 3. * u_distortion;
  frameFade *= u_distortion;

  fractOrigUV.x += distortion;
  floorOrigUV = rotateAspect(floorOrigUV, -patternRotation, u_imageAspectRatio);
  fractOrigUV = rotateAspect(fractOrigUV, -patternRotation, u_imageAspectRatio);

  uv = (floorOrigUV + fractOrigUV) / patternSize;
  uv += pow(maskStroke, 4.);

  uv += vec2(.5);

  uv = mix(v_imageUV, uv, smoothstep(0., .7, mask));
  float blur = mix(0., 50., u_blur);
  blur = mix(0., blur, smoothstep(.5, 1., mask));

  float edgeDistortion = mix(.0, .04, u_edges);
  edgeDistortion += .06 * frameFade * u_edges;
  edgeDistortion *= mask;
  float frame = getUvFrame(uv, edgeDistortion);

  float stretch = 1. - smoothstep(0., .5, xNonSmooth) * smoothstep(1., 1. - .5, xNonSmooth);
  stretch = pow(stretch, 2.);
  stretch *= mask;
  stretch *= getUvFrame(uv, .1 + .05 * mask * frameFade);
  uv.y = mix(uv.y, .5, u_stretch * stretch);

  vec4 image = getBlur(u_image, uv, 1. / u_resolution / u_pixelRatio, vec2(0., 1.), blur);
  image.rgb *= image.a;
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;
  vec4 highlightColor = u_colorHighlight;
  highlightColor.rgb *= highlightColor.a;
  vec4 shadowColor = u_colorShadow;

  vec3 color = highlightColor.rgb * highlights;
  float opacity = highlightColor.a * highlights;

  shadows = mix(shadows * shadowColor.a, 0., highlights);
  color = mix(color, shadowColor.rgb * shadowColor.a, .5 * shadows);
  color += .5 * pow(shadows, .5) * shadowColor.rgb;
  opacity += shadows;
  color = clamp(color, vec3(0.), vec3(1.));
  opacity = clamp(opacity, 0., 1.);

  color += image.rgb * (1. - opacity) * frame;
  opacity += image.a * (1. - opacity) * frame;

  color += backColor.rgb * (1. - opacity);
  opacity += backColor.a * (1. - opacity);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  grainOverlayStrength *= mask;
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Ki={lines:1,linesIrregular:2,wave:3,zigzag:4,pattern:5},qi={prism:1,lens:2,contour:3,cascade:4,flat:5},Ji=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_colorSteps;

out vec4 fragColor;


${Ri}
${Fi}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

vec2 getImageUV(vec2 uv) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 imageUV = getImageUV(normalizedUV);
  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);
  lum = u_inverted ? (1. - lum) : lum;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), lum);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  float colorSteps = max(floor(u_colorSteps), 1.);
  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering / colorSteps, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  brightness = mix(0.0, brightness, image.a);
  float quantLum = floor(brightness * colorSteps + 0.5) / colorSteps;
  quantLum = mix(0.0, quantLum, frame);

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * colorSteps + 0.5) / colorSteps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }

  fragColor = vec4(color, opacity);
}
`,Yi=`#version 300 es
precision mediump float;

uniform float u_rotation;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_radius;
uniform float u_contrast;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainSize;
uniform float u_grid;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_type;

in vec2 v_imageUV;

out vec4 fragColor;

${Fi}
${Ii}
${Ri}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float getCircle(vec2 uv, float r, float baseR) {
  r = mix(.25 * baseR, 0., r);
  float d = length(uv - .5);
  float aa = fwidth(d);
  return 1. - smoothstep(r - aa, r + aa, d);
}

float getCell(vec2 uv) {
  float insideX = step(0.0, uv.x) * (1.0 - step(1.0, uv.x));
  float insideY = step(0.0, uv.y) * (1.0 - step(1.0, uv.y));
  return insideX * insideY;
}

float getCircleWithHole(vec2 uv, float r, float baseR) {
  float cell = getCell(uv);

  r = mix(.75 * baseR, 0., r);
  float rMod = mod(r, .5);

  float d = length(uv - .5);
  float aa = fwidth(d);
  float circle = 1. - smoothstep(rMod - aa, rMod + aa, d);
  if (r < .5) {
    return circle;
  } else {
    return cell - circle;
  }
}

float getGooeyBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = .3;
  if (u_grid == 1.) {
    sizeRadius = .42;
  }
  sizeRadius = mix(sizeRadius * baseR, 0., r);
  d = 1. - sst(0., sizeRadius, d);

  d = pow(d, 2. + baseR);
  return d;
}

float getSoftBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = clamp(baseR, 0., 1.);
  sizeRadius = mix(.5 * sizeRadius, 0., r);
  d = 1. - lst(0., sizeRadius, d);
  float powRadius = 1. - lst(0., 2., baseR);
  d = pow(d, 4. + 3. * powRadius);
  return d;
}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

float sigmoid(float x, float k) {
  return 1.0 / (1.0 + exp(-k * (x - 0.5)));
}

float getLumAtPx(vec2 uv, float contrast) {
  vec4 tex = texture(u_image, uv);
  vec3 color = vec3(
  sigmoid(tex.r, contrast),
  sigmoid(tex.g, contrast),
  sigmoid(tex.b, contrast)
  );
  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color);
  lum = mix(1., lum, tex.a);
  lum = u_inverted ? (1. - lum) : lum;
  return lum;
}

float getLumBall(vec2 p, vec2 pad, vec2 inCellOffset, float contrast, float baseR, float stepSize, out vec4 ballColor) {
  p += inCellOffset;
  vec2 uv_i = floor(p);
  vec2 uv_f = fract(p);
  vec2 samplingUV = (uv_i + .5 - inCellOffset) * pad + vec2(.5);
  float outOfFrame = getUvFrame(samplingUV, pad * stepSize);

  float lum = getLumAtPx(samplingUV, contrast);
  ballColor = texture(u_image, samplingUV);
  ballColor.rgb *= ballColor.a;
  ballColor *= outOfFrame;

  float ball = 0.;
  if (u_type == 0.) {
    // classic
    ball = getCircle(uv_f, lum, baseR);
  } else if (u_type == 1.) {
    // gooey
    ball = getGooeyBall(uv_f, lum, baseR);
  } else if (u_type == 2.) {
    // holes
    ball = getCircleWithHole(uv_f, lum, baseR);
  } else if (u_type == 3.) {
    // soft
    ball = getSoftBall(uv_f, lum, baseR);
  }

  return ball * outOfFrame;
}


void main() {

  float stepMultiplier = 1.;
  if (u_type == 0.) {
    // classic
    stepMultiplier = 2.;
  } else if (u_type == 1. || u_type == 3.) {
    // gooey & soft
    stepMultiplier = 6.;
  }

  float cellsPerSide = mix(300., 7., pow(u_size, .7));
  cellsPerSide /= stepMultiplier;
  float cellSizeY = 1. / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1. / u_imageAspectRatio, 1.);
  if (u_type == 1. && u_grid == 1.) {
    // gooey diagonal grid works differently
    pad *= .7;
  }

  vec2 uv = v_imageUV;
  uv -= vec2(.5);
  uv /= pad;

  float contrast = mix(0., 15., pow(u_contrast, 1.5));
  float baseRadius = u_radius;
  if (u_originalColors == true) {
    contrast = mix(.1, 4., pow(u_contrast, 2.));
    baseRadius = 2. * pow(.5 * u_radius, .3);
  }

  float totalShape = 0.;
  vec3 totalColor = vec3(0.);
  float totalOpacity = 0.;

  vec4 ballColor;
  float shape;
  float stepSize = 1. / stepMultiplier;
  for (float x = -0.5; x < 0.5; x += stepSize) {
    for (float y = -0.5; y < 0.5; y += stepSize) {
      vec2 offset = vec2(x, y);

      if (u_grid == 1.) {
        float rowIndex = floor((y + .5) / stepSize);
        float colIndex = floor((x + .5) / stepSize);
        if (stepSize == 1.) {
          rowIndex = floor(uv.y + y + 1.);
          if (u_type == 1.) {
            colIndex = floor(uv.x + x + 1.);
          }
        }
        if (u_type == 1.) {
          if (mod(rowIndex + colIndex, 2.) == 1.) {
            continue;
          }
        } else {
          if (mod(rowIndex, 2.) == 1.) {
            offset.x += .5 * stepSize;
          }
        }
      }

      shape = getLumBall(uv, pad, offset, contrast, baseRadius, stepSize, ballColor);
      totalColor   += ballColor.rgb * shape;
      totalShape   += shape;
      totalOpacity += shape;
    }
  }

  const float eps = 1e-4;

  totalColor /= max(totalShape, eps);
  totalOpacity /= max(totalShape, eps);

  float finalShape = 0.;
  if (u_type == 0.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 1.) {
    float aa = fwidth(totalShape);
    float th = .5;
    finalShape = smoothstep(th - aa, th + aa, totalShape);
  } else if (u_type == 2.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 3.) {
    finalShape = totalShape;
  }

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= grainSize;
  grainUV += .5;
  float grain = valueNoise(grainUV);
  grain = smoothstep(.55, .7 + .2 * u_grainMixer, grain);
  grain *= u_grainMixer;
  finalShape = mix(finalShape, 0., grain);

  vec3 color = vec3(0.);
  float opacity = 0.;

  if (u_originalColors == true) {
    color = totalColor * finalShape;
    opacity = totalOpacity * finalShape;

    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    color = color + bgColor * (1. - opacity);
    opacity = opacity + u_colorBack.a * (1. - opacity);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;

    color = fgColor * finalShape;
    opacity = fgOpacity * finalShape;
    color += bgColor * (1. - opacity);
    opacity += bgOpacity * (1. - opacity);
  }

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Xi={classic:0,gooey:1,holes:2,soft:3},Zi={square:0,hex:1},Qi=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colorC;
uniform vec4 u_colorM;
uniform vec4 u_colorY;
uniform vec4 u_colorK;
uniform float u_size;
uniform float u_minDot;
uniform float u_contrast;
uniform float u_grainSize;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_gridNoise;
uniform float u_softness;
uniform float u_floodC;
uniform float u_floodM;
uniform float u_floodY;
uniform float u_floodK;
uniform float u_gainC;
uniform float u_gainM;
uniform float u_gainY;
uniform float u_gainK;
uniform float u_type;
uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;
out vec4 fragColor;

const float shiftC = -.5;
const float shiftM = -.25;
const float shiftY = .2;
const float shiftK = 0.;

// Precomputed sin/cos for rotation angles (15\xB0, 75\xB0, 0\xB0, 45\xB0)
const float cosC = 0.9659258;  const float sinC = 0.2588190;   // 15\xB0
const float cosM = 0.2588190;  const float sinM = 0.9659258;   // 75\xB0
const float cosY = 1.0;        const float sinY = 0.0;         // 0\xB0
const float cosK = 0.7071068;  const float sinK = 0.7071068;   // 45\xB0

${Fi}

vec2 randomRG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).rg;
}
vec3 hash23(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.3183099, 0.3678794, 0.3141592)) + 0.1;
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec3(p3.x * p3.y, p3.y * p3.z, p3.z * p3.x));
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

vec3 valueNoise3(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec3 a = hash23(i);
  vec3 b = hash23(i + vec2(1.0, 0.0));
  vec3 c = hash23(i + vec2(0.0, 1.0));
  vec3 d = hash23(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec3 x1 = mix(a, b, u.x);
  vec3 x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, vec2 pad) {
  float left   = smoothstep(-pad.x, 0., uv.x);
  float right  = smoothstep(1. + pad.x, 1., uv.x);
  float bottom = smoothstep(-pad.y, 0., uv.y);
  float top    = smoothstep(1. + pad.y, 1., uv.y);

  return left * right * bottom * top;
}

vec4 RGBAtoCMYK(vec4 rgba) {
  float k = 1. - max(max(rgba.r, rgba.g), rgba.b);
  float denom = 1. - k;
  vec3 cmy = vec3(0.);
  if (denom > 1e-5) {
    cmy = (1. - rgba.rgb - vec3(k)) / denom;
  }
  return vec4(cmy, k) * rgba.a;
}

vec3 applyContrast(vec3 rgb) {
  return clamp((rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
}

// Single-component CMYK extractors with contrast built-in, alpha-aware
float getCyan(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.r) / maxRGB : 0.) * rgba.a;
}
float getMagenta(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.g) / maxRGB : 0.) * rgba.a;
}
float getYellow(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.b) / maxRGB : 0.) * rgba.a;
}
float getBlack(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  return (1. - max(max(c.r, c.g), c.b)) * rgba.a;
}

vec2 cellCenterPos(vec2 uv, vec2 cellOffset, float channelIdx) {
  vec2 cellCenter = floor(uv) + .5 + cellOffset;
  return cellCenter + (randomRG(cellCenter + channelIdx * 50.) - .5) * u_gridNoise;
}

vec2 gridToImageUV(vec2 cellCenter, float cosA, float sinA, float shift, vec2 pad) {
  vec2 uvGrid = mat2(cosA, -sinA, sinA, cosA) * (cellCenter - shift);
  return uvGrid * pad + 0.5;
}

void colorMask(vec2 pos, vec2 cellCenter, float rad, float transparency, float grain, float channelAddon, float channelgain, float generalComp, bool isJoined, inout float outMask) {
  float dist = length(pos - cellCenter);

  float radius = rad;
  radius *= (1. + generalComp);
  radius += (.15 + channelgain * radius);
  radius = max(0., radius);
  radius = mix(0., radius, transparency);
  radius += channelAddon;
  radius *= (1. - grain);

  float mask = 1. - sst(0., radius, dist);
  if (isJoined) {
    // ink or sharp (joined)
    mask = pow(mask, 1.2);
  } else {
    // dots (separate)
    mask = sst(.5 - .5 * u_softness, .51 + .49 * u_softness, mask);
  }

  mask *= mix(1., mix(.5, 1., 1.5 * radius), u_softness);
  outMask += mask;
}

vec3 applyInk(vec3 paper, vec3 inkColor, float cov) {
  vec3 inkEffect = mix(vec3(1.0), inkColor, clamp(cov, 0.0, 1.0));
  return paper * inkEffect;
}

void main() {
  vec2 uv = v_imageUV;

  float cellsPerSide = mix(400.0, 7.0, pow(u_size, 0.7));
  float cellSizeY = 1.0 / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1.0 / u_imageAspectRatio, 1.0);
  vec2 uvGrid = (uv - .5) / pad;
  float insideImageBox = getUvFrame(uv, pad);

  float generalComp = .1 * u_softness + .1 * u_gridNoise + .1 * (1. - step(0.5, u_type)) * (1.5 - u_softness);

  vec2 uvC = mat2(cosC, sinC, -sinC, cosC) * uvGrid + shiftC;
  vec2 uvM = mat2(cosM, sinM, -sinM, cosM) * uvGrid + shiftM;
  vec2 uvY = mat2(cosY, sinY, -sinY, cosY) * uvGrid + shiftY;
  vec2 uvK = mat2(cosK, sinK, -sinK, cosK) * uvGrid + shiftK;

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = (v_imageUV - .5) * grainSize + .5;
  vec3 noiseValues = valueNoise3(grainUV);
  float grain = sst(.55, 1., noiseValues.r);
  grain *= u_grainMixer;

  vec4 outMask = vec4(0.);
  bool isJoined = u_type > 0.5;

  if (u_type < 1.5) {
    // dots or ink: per-cell color sampling
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        vec2 cellCenterC = cellCenterPos(uvC, cellOffset, 0.);
        vec4 texC = texture(u_image, gridToImageUV(cellCenterC, cosC, sinC, shiftC, pad));
        colorMask(uvC, cellCenterC, getCyan(texC), insideImageBox * texC.a, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);

        vec2 cellCenterM = cellCenterPos(uvM, cellOffset, 1.);
        vec4 texM = texture(u_image, gridToImageUV(cellCenterM, cosM, sinM, shiftM, pad));
        colorMask(uvM, cellCenterM, getMagenta(texM), insideImageBox * texM.a, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);

        vec2 cellCenterY = cellCenterPos(uvY, cellOffset, 2.);
        vec4 texY = texture(u_image, gridToImageUV(cellCenterY, cosY, sinY, shiftY, pad));
        colorMask(uvY, cellCenterY, getYellow(texY), insideImageBox * texY.a, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);

        vec2 cellCenterK = cellCenterPos(uvK, cellOffset, 3.);
        vec4 texK = texture(u_image, gridToImageUV(cellCenterK, cosK, sinK, shiftK, pad));
        colorMask(uvK, cellCenterK, getBlack(texK), insideImageBox * texK.a, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  } else {
    // sharp: direct px color sampling
    vec4 tex = texture(u_image, uv);
    tex.rgb = applyContrast(tex.rgb);
    insideImageBox *= tex.a;
    vec4 cmykOriginal = RGBAtoCMYK(tex);
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        colorMask(uvC, cellCenterPos(uvC, cellOffset, 0.), cmykOriginal.x, insideImageBox, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);
        colorMask(uvM, cellCenterPos(uvM, cellOffset, 1.), cmykOriginal.y, insideImageBox, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);
        colorMask(uvY, cellCenterPos(uvY, cellOffset, 2.), cmykOriginal.z, insideImageBox, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);
        colorMask(uvK, cellCenterPos(uvK, cellOffset, 3.), cmykOriginal.w, insideImageBox, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  }

  float shape;

  float C = outMask[0];
  float M = outMask[1];
  float Y = outMask[2];
  float K = outMask[3];

  if (isJoined) {
    // ink or sharp: apply threshold for joined dots
    float th = .5;
    float sLeft = th * u_softness;
    float sRight = (1. - th) * u_softness + .01;
    C = smoothstep(th - sLeft - fwidth(C), th + sRight, C);
    M = smoothstep(th - sLeft - fwidth(M), th + sRight, M);
    Y = smoothstep(th - sLeft - fwidth(Y), th + sRight, Y);
    K = smoothstep(th - sLeft - fwidth(K), th + sRight, K);
  }

  C *= u_colorC.a;
  M *= u_colorM.a;
  Y *= u_colorY.a;
  K *= u_colorK.a;

  vec3 ink = vec3(1.);
  ink = applyInk(ink, u_colorK.rgb, K);
  ink = applyInk(ink, u_colorC.rgb, C);
  ink = applyInk(ink, u_colorM.rgb, M);
  ink = applyInk(ink, u_colorY.rgb, Y);

  shape = clamp(max(max(C, M), max(Y, K)), 0., 1.);

  vec3 color = u_colorBack.rgb * u_colorBack.a;

  float opacity = u_colorBack.a;
  color = mix(color, ink, shape);
  opacity += shape;
  opacity = clamp(opacity, 0., 1.);

  float grainOverlay = mix(noiseValues.g, noiseValues.b, .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,$i={dots:0,ink:1,sharp:2};function ea(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:oa;if(typeof e!=`string`)return oa;let t,n,r,i=1;if(e.startsWith(`#`))[t,n,r,i]=ta(e);else if(e.startsWith(`rgb`))[t,n,r,i]=na(e);else if(e.startsWith(`hsl`))[t,n,r,i]=ia(ra(e));else return console.error(`Unsupported color format`,e),oa;return[aa(t,0,1),aa(n,0,1),aa(r,0,1),aa(i,0,1)]}function ta(e){return e=e.replace(/^#/,``),e.length===3&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]}function na(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function ra(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function ia(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}var aa=(e,t,n)=>Math.min(Math.max(e,t),n),oa=[0,0,0,1];function sa(){if(typeof window>`u`)return;let e=new Image;return e.src=ca,e}var ca=`data:image/png;base64,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`;function la(e){let t=A.useRef(void 0),n=A.useCallback(t=>{let n=e.map(e=>{if(e!=null){if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}}});return()=>{n.forEach(e=>e?.())}},e);return A.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}function ua(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function da(e){let t={},n=[],r=e=>{try{return e.startsWith(`/`)||new URL(e),!0}catch{return!1}},i=e=>{try{return e.startsWith(`/`)?!1:new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([e,a])=>{if(typeof a==`string`){let o=a||`data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;if(!r(o)){console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);return}let s=new Promise((n,r)=>{let a=new Image;i(o)&&(a.crossOrigin=`anonymous`),a.onload=()=>{ua(a),t[e]=a,n()},a.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),r()},a.src=o});n.push(s)}else a instanceof HTMLImageElement&&ua(a),t[e]=a}),await Promise.all(n),t}var fa=(0,A.forwardRef)(function({fragmentShader:e,uniforms:t,webGlContextAttributes:n,speed:r=0,frame:i=0,width:a,height:o,minPixelRatio:s,maxPixelCount:c,mipmaps:l,style:u,...d},f){let[p,m]=(0,A.useState)(!1),h=(0,A.useRef)(null),g=(0,A.useRef)(null),_=(0,A.useRef)(n);return(0,A.useEffect)(()=>((async()=>{let n=await da(t);h.current&&!g.current&&(g.current=new Oi(h.current,e,n,_.current,r,i,s,c,l),m(!0))})(),()=>{g.current?.dispose(),g.current=null}),[e]),(0,A.useEffect)(()=>{let e=!1;return(async()=>{let n=await da(t);e||g.current?.setUniforms(n)})(),()=>{e=!0}},[t,p]),(0,A.useEffect)(()=>{g.current?.setSpeed(r)},[r,p]),(0,A.useEffect)(()=>{g.current?.setMaxPixelCount(c)},[c,p]),(0,A.useEffect)(()=>{g.current?.setMinPixelRatio(s)},[s,p]),(0,A.useEffect)(()=>{g.current?.setFrame(i)},[i,p]),(0,F.jsx)(`div`,{ref:la([h,f]),style:a!==void 0||o!==void 0?{width:typeof a==`string`&&isNaN(+a)===!1?+a:a,height:typeof o==`string`&&isNaN(+o)===!1?+o:o,...u}:u,...d})});fa.displayName=`ShaderMount`;function pa(e,t){for(let n in e){if(n===`colors`){let n=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!n||!r){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,n)=>e===t.colors?.[n]))return!1;continue}if(Object.is(e[n],t[n])===!1)return!1}return!0}var B={name:`Default`,params:{...z,fit:`cover`,scale:.6,speed:0,frame:0,colorFront:`#9fadbc`,colorBack:`#ffffff`,contrast:.3,roughness:.4,fiber:.3,fiberSize:.2,crumples:.3,crumpleSize:.35,folds:.65,foldCount:5,fade:0,drops:.2,seed:5.8}},ma={name:`Abstract`,params:{...z,fit:`cover`,speed:0,frame:0,scale:.6,colorFront:`#00eeff`,colorBack:`#ff0a81`,contrast:.85,roughness:0,fiber:.1,fiberSize:.2,crumples:0,crumpleSize:.3,folds:1,foldCount:3,fade:0,drops:.2,seed:2.2}},ha=[B,{name:`Cardboard`,params:{...z,fit:`cover`,speed:0,frame:0,scale:.6,colorFront:`#c7b89e`,colorBack:`#999180`,contrast:.4,roughness:0,fiber:.35,fiberSize:.14,crumples:.7,crumpleSize:.1,folds:0,foldCount:1,fade:0,drops:.1,seed:1.6}},ma,{name:`Details`,params:{...z,speed:0,frame:0,fit:`cover`,scale:3,colorFront:`#00000000`,colorBack:`#00000000`,contrast:0,roughness:1,fiber:.27,fiberSize:.22,crumples:1,crumpleSize:.5,folds:1,foldCount:15,fade:0,drops:0,seed:6}}],ga=(0,A.memo)(function({speed:e=B.params.speed,frame:t=B.params.frame,colorFront:n=B.params.colorFront,colorBack:r=B.params.colorBack,image:i=``,contrast:a=B.params.contrast,roughness:o=B.params.roughness,fiber:s=B.params.fiber,crumples:c=B.params.crumples,folds:l=B.params.folds,drops:u=B.params.drops,seed:d=B.params.seed,fiberScale:f,fiberSize:p=f===void 0?B.params.fiberSize:.2/f,crumplesScale:m,crumpleSize:h=m===void 0?B.params.crumpleSize:.2/m,blur:g,fade:_=g===void 0?B.params.fade:g,foldsNumber:v,foldCount:y=v===void 0?B.params.foldCount:v,fit:b=B.params.fit,scale:x=B.params.scale,rotation:S=B.params.rotation,originX:C=B.params.originX,originY:w=B.params.originY,offsetX:T=B.params.offsetX,offsetY:ee=B.params.offsetY,worldWidth:E=B.params.worldWidth,worldHeight:te=B.params.worldHeight,...ne}){let re=typeof window<`u`&&{u_noiseTexture:sa()},D={u_image:i,u_colorFront:ea(n),u_colorBack:ea(r),u_contrast:a,u_roughness:o,u_fiber:s,u_fiberSize:p,u_crumples:c,u_crumpleSize:h,u_foldCount:y,u_folds:l,u_fade:_,u_drops:u,u_seed:d,...re,u_fit:Pi[b],u_scale:x,u_rotation:S,u_offsetX:T,u_offsetY:ee,u_originX:C,u_originY:w,u_worldWidth:E,u_worldHeight:te};return(0,F.jsx)(fa,{...ne,speed:e,frame:t,fragmentShader:Ui,mipmaps:[`u_image`],uniforms:D})},pa),V={name:`Default`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#00000000`,colorShadow:`#000000`,colorHighlight:`#ffffff`,shadows:.25,size:.5,angle:0,distortionShape:`prism`,highlights:.1,shape:`lines`,distortion:.5,shift:0,blur:0,edges:.25,stretch:0,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:0}},_a={name:`Waves`,params:{...z,fit:`cover`,scale:1.2,speed:0,frame:0,colorBack:`#00000000`,colorShadow:`#000000`,colorHighlight:`#ffffff`,shadows:0,size:.9,angle:0,distortionShape:`contour`,highlights:0,shape:`wave`,distortion:.5,shift:0,blur:.1,edges:.5,stretch:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:.05}},va=[V,{name:`Abstract`,params:{...z,fit:`cover`,scale:4,speed:0,frame:0,colorBack:`#00000000`,colorShadow:`#000000`,colorHighlight:`#ffffff`,shadows:0,size:.7,angle:30,distortionShape:`flat`,highlights:0,shape:`linesIrregular`,distortion:1,shift:0,blur:1,edges:.5,stretch:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:.1,grainOverlay:.1}},_a,{name:`Folds`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#00000000`,colorShadow:`#000000`,colorHighlight:`#ffffff`,shadows:.4,size:.4,angle:0,distortionShape:`cascade`,highlights:0,shape:`lines`,distortion:.75,shift:0,blur:.25,edges:.5,stretch:0,margin:.1,marginLeft:.1,marginRight:.1,marginTop:.1,marginBottom:.1,grainMixer:0,grainOverlay:0}}],ya=(0,A.memo)(function({speed:e=V.params.speed,frame:t=V.params.frame,colorBack:n=V.params.colorBack,colorShadow:r=V.params.colorShadow,colorHighlight:i=V.params.colorHighlight,image:a=``,shadows:o=V.params.shadows,angle:s=V.params.angle,distortion:c=V.params.distortion,distortionShape:l=V.params.distortionShape,highlights:u=V.params.highlights,shape:d=V.params.shape,shift:f=V.params.shift,blur:p=V.params.blur,edges:m=V.params.edges,margin:h,marginLeft:g=h??V.params.marginLeft,marginRight:_=h??V.params.marginRight,marginTop:v=h??V.params.marginTop,marginBottom:y=h??V.params.marginBottom,grainMixer:b=V.params.grainMixer,grainOverlay:x=V.params.grainOverlay,stretch:S=V.params.stretch,count:C,size:w=C===void 0?V.params.size:(1/(C*1.6))**(1/6)/.7-.5,fit:T=V.params.fit,scale:ee=V.params.scale,rotation:E=V.params.rotation,originX:te=V.params.originX,originY:ne=V.params.originY,offsetX:re=V.params.offsetX,offsetY:D=V.params.offsetY,worldWidth:ie=V.params.worldWidth,worldHeight:ae=V.params.worldHeight,...O}){let oe={u_image:a,u_colorBack:ea(n),u_colorShadow:ea(r),u_colorHighlight:ea(i),u_shadows:o,u_size:w,u_angle:s,u_distortion:c,u_shift:f,u_blur:p,u_edges:m,u_stretch:S,u_distortionShape:qi[l],u_highlights:u,u_shape:Ki[d],u_marginLeft:g,u_marginRight:_,u_marginTop:v,u_marginBottom:y,u_grainMixer:b,u_grainOverlay:x,u_fit:Pi[T],u_scale:ee,u_rotation:E,u_offsetX:re,u_offsetY:D,u_originX:te,u_originY:ne,u_worldWidth:ie,u_worldHeight:ae};return(0,F.jsx)(fa,{...O,speed:e,frame:t,fragmentShader:Gi,mipmaps:[`u_image`],uniforms:oe})}),H={name:`Default`,params:{...z,scale:.8,speed:1,frame:0,colorBack:`#909090`,colorHighlight:`#ffffff`,highlights:.07,layering:.5,edges:.8,waves:.3,caustic:.1,size:1}},ba={name:`Abstract`,params:{...z,fit:`cover`,scale:3,speed:1,frame:0,colorBack:`#909090`,colorHighlight:`#ffffff`,highlights:0,layering:0,edges:1,waves:1,caustic:.4,size:.15}},xa={name:`Streaming`,params:{...z,fit:`contain`,scale:.4,speed:2,frame:0,colorBack:`#909090`,colorHighlight:`#ffffff`,highlights:0,layering:0,edges:0,waves:.5,caustic:0,size:.5}},Sa=[H,{name:`Slow-mo`,params:{...z,fit:`cover`,scale:1,speed:.1,frame:0,colorBack:`#909090`,colorHighlight:`#ffffff`,highlights:.4,layering:0,edges:0,waves:0,caustic:.2,size:.7}},ba,xa],Ca=(0,A.memo)(function({speed:e=H.params.speed,frame:t=H.params.frame,colorBack:n=H.params.colorBack,colorHighlight:r=H.params.colorHighlight,image:i=``,highlights:a=H.params.highlights,layering:o=H.params.layering,waves:s=H.params.waves,edges:c=H.params.edges,caustic:l=H.params.caustic,effectScale:u,size:d=u===void 0?H.params.size:10/9/u-1/9,fit:f=H.params.fit,scale:p=H.params.scale,rotation:m=H.params.rotation,originX:h=H.params.originX,originY:g=H.params.originY,offsetX:_=H.params.offsetX,offsetY:v=H.params.offsetY,worldWidth:y=H.params.worldWidth,worldHeight:b=H.params.worldHeight,...x}){let S={u_image:i,u_colorBack:ea(n),u_colorHighlight:ea(r),u_highlights:a,u_layering:o,u_waves:s,u_edges:c,u_caustic:l,u_size:d,u_fit:Pi[f],u_rotation:m,u_scale:p,u_offsetX:_,u_offsetY:v,u_originX:h,u_originY:g,u_worldWidth:y,u_worldHeight:b};return(0,F.jsx)(fa,{...x,speed:e,frame:t,fragmentShader:Wi,mipmaps:[`u_image`],uniforms:S})},pa),U={name:`Default`,params:{...z,fit:`cover`,speed:0,frame:0,colorFront:`#94ffaf`,colorBack:`#000c38`,colorHighlight:`#eaff94`,type:`8x8`,size:2,colorSteps:2,originalColors:!1,inverted:!1}},wa={name:`Retro`,params:{...z,fit:`cover`,speed:0,frame:0,colorFront:`#eeeeee`,colorBack:`#5452ff`,colorHighlight:`#eeeeee`,type:`2x2`,size:3,colorSteps:1,originalColors:!0,inverted:!1}},Ta=[U,{name:`Noise`,params:{...z,fit:`cover`,speed:0,frame:0,colorFront:`#a2997c`,colorBack:`#000000`,colorHighlight:`#ededed`,type:`random`,size:1,colorSteps:1,originalColors:!1,inverted:!1}},wa,{name:`Natural`,params:{...z,fit:`cover`,speed:0,frame:0,colorFront:`#ffffff`,colorBack:`#000000`,colorHighlight:`#ffffff`,type:`8x8`,size:2,colorSteps:5,originalColors:!0,inverted:!1}}],Ea=(0,A.memo)(function({speed:e=U.params.speed,frame:t=U.params.frame,colorFront:n=U.params.colorFront,colorBack:r=U.params.colorBack,colorHighlight:i=U.params.colorHighlight,image:a=``,type:o=U.params.type,colorSteps:s=U.params.colorSteps,originalColors:c=U.params.originalColors,inverted:l=U.params.inverted,pxSize:u,size:d=u===void 0?U.params.size:u,fit:f=U.params.fit,scale:p=U.params.scale,rotation:m=U.params.rotation,originX:h=U.params.originX,originY:g=U.params.originY,offsetX:_=U.params.offsetX,offsetY:v=U.params.offsetY,worldWidth:y=U.params.worldWidth,worldHeight:b=U.params.worldHeight,...x}){let S={u_image:a,u_colorFront:ea(n),u_colorBack:ea(r),u_colorHighlight:ea(i),u_type:Hi[o],u_pxSize:d,u_colorSteps:s,u_originalColors:c,u_inverted:l,u_fit:Pi[f],u_rotation:m,u_scale:p,u_offsetX:_,u_offsetY:v,u_originX:h,u_originY:g,u_worldWidth:y,u_worldHeight:b};return(0,F.jsx)(fa,{...x,speed:e,frame:t,fragmentShader:Ji,uniforms:S})},pa),W={name:`Default`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#f2f1e8`,colorFront:`#2b2b2b`,size:.5,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:`hex`,type:`gooey`}},Da=[W,{name:`LED screen`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#000000`,colorFront:`#29ff7b`,size:.5,radius:1.5,contrast:.3,originalColors:!1,inverted:!1,grainMixer:0,grainOverlay:0,grainSize:.5,grid:`square`,type:`soft`}},{name:`Mosaic`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#000000`,colorFront:`#b2aeae`,size:.6,radius:2,contrast:.01,originalColors:!0,inverted:!1,grainMixer:0,grainOverlay:0,grainSize:.5,grid:`hex`,type:`classic`}},{name:`Round and square`,params:{...z,fit:`cover`,speed:0,frame:0,colorBack:`#141414`,colorFront:`#ff8000`,size:.8,radius:1,contrast:1,originalColors:!1,inverted:!0,grainMixer:.05,grainOverlay:.3,grainSize:.5,grid:`square`,type:`holes`}}],Oa=(0,A.memo)(function({speed:e=W.params.speed,frame:t=W.params.frame,colorFront:n=W.params.colorFront,colorBack:r=W.params.colorBack,image:i=``,size:a=W.params.size,radius:o=W.params.radius,contrast:s=W.params.contrast,originalColors:c=W.params.originalColors,inverted:l=W.params.inverted,grainMixer:u=W.params.grainMixer,grainOverlay:d=W.params.grainOverlay,grainSize:f=W.params.grainSize,grid:p=W.params.grid,type:m=W.params.type,fit:h=W.params.fit,scale:g=W.params.scale,rotation:_=W.params.rotation,originX:v=W.params.originX,originY:y=W.params.originY,offsetX:b=W.params.offsetX,offsetY:x=W.params.offsetY,worldWidth:S=W.params.worldWidth,worldHeight:C=W.params.worldHeight,...w}){let T={u_image:i,u_colorFront:ea(n),u_colorBack:ea(r),u_size:a,u_radius:o,u_contrast:s,u_originalColors:c,u_inverted:l,u_grainMixer:u,u_grainOverlay:d,u_grainSize:f,u_grid:Zi[p],u_type:Xi[m],u_fit:Pi[h],u_rotation:_,u_scale:g,u_offsetX:b,u_offsetY:x,u_originX:v,u_originY:y,u_worldWidth:S,u_worldHeight:C};return(0,F.jsx)(fa,{...w,speed:e,frame:t,fragmentShader:Yi,uniforms:T})},pa),G={name:`Default`,params:{...z,scale:1,fit:`cover`,speed:0,frame:0,colorBack:`#fbfaf5`,colorC:`#00b4ff`,colorM:`#fc519f`,colorY:`#ffd800`,colorK:`#231f20`,size:.2,contrast:1,softness:1,grainSize:.5,grainMixer:0,grainOverlay:0,gridNoise:.2,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:.3,gainM:0,gainY:.2,gainK:0,type:`ink`}},ka=[G,{name:`Drops`,params:{...z,scale:1,fit:`cover`,speed:0,frame:0,colorBack:`#eeefd7`,colorC:`#00b2ff`,colorM:`#fc4f4f`,colorY:`#ffd900`,colorK:`#231f20`,size:.88,contrast:1.15,softness:0,grainSize:.01,grainMixer:.05,grainOverlay:.25,gridNoise:.5,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:1,gainM:.44,gainY:-1,gainK:0,type:`ink`}},{name:`Newspaper`,params:{...z,scale:1,fit:`cover`,speed:0,frame:0,colorBack:`#f2f1e8`,colorC:`#7a7a75`,colorM:`#7a7a75`,colorY:`#7a7a75`,colorK:`#231f20`,size:.01,contrast:2,softness:.2,grainSize:0,grainMixer:0,grainOverlay:.2,gridNoise:.6,floodC:0,floodM:0,floodY:0,floodK:.1,gainC:-.17,gainM:-.45,gainY:-.45,gainK:0,type:`dots`}},{name:`Vintage`,params:{...z,scale:1,fit:`cover`,speed:0,frame:0,colorBack:`#fffaf0`,colorC:`#59afc5`,colorM:`#d8697c`,colorY:`#fad85c`,colorK:`#2d2824`,size:.2,contrast:1.25,softness:.4,grainSize:.5,grainMixer:.15,grainOverlay:.1,gridNoise:.45,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:.3,gainM:0,gainY:.2,gainK:0,type:`sharp`}}],Aa={paperTexture:ga,flutedGlass:ya,water:Ca,imageDithering:Ea,halftoneDots:Oa,halftoneCmyk:(0,A.memo)(function({speed:e=G.params.speed,frame:t=G.params.frame,colorBack:n=G.params.colorBack,colorC:r=G.params.colorC,colorM:i=G.params.colorM,colorY:a=G.params.colorY,colorK:o=G.params.colorK,image:s=``,size:c=G.params.size,contrast:l=G.params.contrast,softness:u=G.params.softness,grainSize:d=G.params.grainSize,grainMixer:f=G.params.grainMixer,grainOverlay:p=G.params.grainOverlay,gridNoise:m=G.params.gridNoise,floodC:h=G.params.floodC,floodM:g=G.params.floodM,floodY:_=G.params.floodY,floodK:v=G.params.floodK,gainC:y=G.params.gainC,gainM:b=G.params.gainM,gainY:x=G.params.gainY,gainK:S=G.params.gainK,type:C=G.params.type,fit:w=G.params.fit,scale:T=G.params.scale,rotation:ee=G.params.rotation,originX:E=G.params.originX,originY:te=G.params.originY,offsetX:ne=G.params.offsetX,offsetY:re=G.params.offsetY,worldWidth:D=G.params.worldWidth,worldHeight:ie=G.params.worldHeight,...ae}){let O={u_image:s,u_noiseTexture:sa(),u_colorBack:ea(n),u_colorC:ea(r),u_colorM:ea(i),u_colorY:ea(a),u_colorK:ea(o),u_size:c,u_contrast:l,u_softness:u,u_grainSize:d,u_grainMixer:f,u_grainOverlay:p,u_gridNoise:m,u_floodC:h,u_floodM:g,u_floodY:_,u_floodK:v,u_gainC:y,u_gainM:b,u_gainY:x,u_gainK:S,u_type:$i[C],u_fit:Pi[w],u_rotation:ee,u_scale:T,u_offsetX:ne,u_offsetY:re,u_originX:E,u_originY:te,u_worldWidth:D,u_worldHeight:ie};return(0,F.jsx)(fa,{...ae,speed:e,frame:t,fragmentShader:Qi,uniforms:O})},pa)};function ja({image:e,filterKey:t,filterSettings:n,className:r}){let i=Aa[t];return!i||!e||!n?null:(0,F.jsx)(i,{...n,image:e,className:r,width:`100%`,height:`100%`})}var Ma=[{key:`paperTexture`,label:`Paper texture`,presets:ha,controls:[{key:`contrast`,label:`Contrast`,min:0,max:1,step:.01},{key:`roughness`,label:`Roughness`,min:0,max:1,step:.01},{key:`fiber`,label:`Fiber`,min:0,max:1,step:.01},{key:`folds`,label:`Folds`,min:0,max:1,step:.01},{key:`foldCount`,label:`Fold count`,min:1,max:10,step:1},{key:`drops`,label:`Drops`,min:0,max:1,step:.01}]},{key:`flutedGlass`,label:`Fluted glass`,presets:va,controls:[{key:`size`,label:`Size`,min:0,max:1,step:.01},{key:`distortion`,label:`Distortion`,min:0,max:1,step:.01},{key:`blur`,label:`Blur`,min:0,max:1,step:.01},{key:`edges`,label:`Edges`,min:0,max:1,step:.01},{key:`angle`,label:`Angle`,min:0,max:180,step:1},{key:`shadows`,label:`Shadows`,min:0,max:1,step:.01}]},{key:`water`,label:`Water`,presets:Sa,controls:[{key:`speed`,label:`Speed`,min:0,max:2,step:.01},{key:`highlights`,label:`Highlights`,min:0,max:1,step:.01},{key:`layering`,label:`Layering`,min:0,max:1,step:.01},{key:`waves`,label:`Waves`,min:0,max:1,step:.01},{key:`caustic`,label:`Caustic`,min:0,max:1,step:.01},{key:`size`,label:`Scale`,min:.2,max:2,step:.01}]},{key:`imageDithering`,label:`Image dithering`,presets:Ta,controls:[{key:`size`,label:`Pixel size`,min:.5,max:6,step:.1},{key:`colorSteps`,label:`Color steps`,min:1,max:8,step:1},{key:`originalColors`,label:`Keep original colors`,type:`boolean`},{key:`inverted`,label:`Invert`,type:`boolean`}]},{key:`halftoneDots`,label:`Halftone dots`,presets:Da,controls:[{key:`size`,label:`Grid size`,min:.1,max:1,step:.01},{key:`radius`,label:`Dot radius`,min:.1,max:2,step:.01},{key:`contrast`,label:`Contrast`,min:0,max:1.5,step:.01},{key:`grainMixer`,label:`Grain mix`,min:0,max:1,step:.01},{key:`grainOverlay`,label:`Grain overlay`,min:0,max:1,step:.01},{key:`originalColors`,label:`Keep original colors`,type:`boolean`}]},{key:`halftoneCmyk`,label:`Halftone CMYK`,presets:ka,controls:[{key:`size`,label:`Dot size`,min:.1,max:1,step:.01},{key:`contrast`,label:`Contrast`,min:0,max:2,step:.01},{key:`softness`,label:`Softness`,min:0,max:1,step:.01},{key:`gridNoise`,label:`Grid noise`,min:0,max:1,step:.01},{key:`gainC`,label:`Cyan gain`,min:-1,max:1,step:.01},{key:`gainM`,label:`Magenta gain`,min:-1,max:1,step:.01},{key:`gainY`,label:`Yellow gain`,min:-1,max:1,step:.01}]}],Na={enabledFilters:Object.fromEntries(Ma.map(e=>[e.key,!1])),filterSettings:Object.fromEntries(Ma.map(e=>[e.key,{...e.presets[0].params}]))};function Pa(e){let t=e?.enabledFilters||{};return Ma.filter(e=>t[e.key]).map(e=>e.key)}var Fa=g(),Ia=`startup-page-photos-v1`,La=`startup-page.photo-urls`;function Ra(e){return[...e].sort().join(`,`)}function za(e){if(!e?.length)return null;try{return JSON.parse(localStorage.getItem(La)||`{}`)[Ra(e)]?.url??null}catch{return null}}var Ba=3600*1e3;function Va(e){if(!e?.length)return!0;try{let t=JSON.parse(localStorage.getItem(La)||`{}`)[Ra(e)]?.cachedAt;return!t||Date.now()-t>Ba}catch{return!0}}function Ha(e,t){try{let n=JSON.parse(localStorage.getItem(La)||`{}`);n[Ra(e)]={url:t,cachedAt:Date.now()},localStorage.setItem(La,JSON.stringify(n))}catch{}}async function Ua(e){if(!(`caches`in window))return null;try{let t=await(await caches.open(Ia)).match(e);return t?URL.createObjectURL(await t.blob()):null}catch{return null}}async function Wa(e){if(!(`caches`in window))return null;try{let t=await fetch(e,{mode:`cors`});return t.ok?(await(await caches.open(Ia)).put(e,t.clone()),URL.createObjectURL(await t.blob())):null}catch{return null}}var Ga=class extends A.Component{constructor(e){super(e),this._mounted=!1,this._blobUrl=null,this.state={photos:null,category:``,loaded:!1,filterKey:null,imageReady:!1}}componentDidMount(){this._mounted=!0,this._loadPhoto()}componentWillUnmount(){this._mounted=!1,this._revokeBlobUrl()}_revokeBlobUrl(){this._blobUrl&&=(URL.revokeObjectURL(this._blobUrl),null)}_show(e,t){this._mounted&&(this._revokeBlobUrl(),e?.startsWith(`blob:`)&&(this._blobUrl=e),this.setState({photos:e,category:t,loaded:!1,filterKey:this.pickFilterKey(),imageReady:!1}))}async _loadPhoto(){let e=this.getRandomCategory(),t=this.props.search||[],n=za(t);if(n){let r=await Ua(n);this._show(r||n,e),r||Wa(n),Va(t)&&this._refreshInBackground(e,t);return}await this._fetchDisplayAndCache(e,t,!0)}async _refreshInBackground(e,t){await this._fetchDisplayAndCache(e,t,!1)}async _fetchDisplayAndCache(e,t,n){let r=Fa.unsplashCredential;if(!r){await this._fetchFallback(e,t,n);return}try{let i=(await R.get(`https://api.unsplash.com/search/photos`,{params:{query:e,per_page:100},headers:{Authorization:`Client-ID `+r}})).data.results;if(!i?.length){await this._fetchFallback(e,t,n);return}let a=i[Math.floor(Math.random()*i.length)].urls.regular;Ha(t,a);let o=await Wa(a);n&&this._show(o||a,e)}catch{await this._fetchFallback(e,t,n)}}async _fetchFallback(e,t,n){let r=`${e} filetype:bitmap`,i=this.buildFallbackImageUrl(e);try{let a=await(await fetch(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(r)}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*`)).json(),o=Object.values(a.query?.pages||{}).map(e=>e.imageinfo?.[0]?.thumburl||e.imageinfo?.[0]?.url).filter(Boolean),s=o.length?o[Math.floor(Math.random()*o.length)]:i;Ha(t,s);let c=await Wa(s);n&&this._show(c||s,e)}catch{Ha(t,i),n&&this._show(i,e)}}getRandomCategory(){let e=this.props.search||[];return e.length===0?`landscape`:e[Math.floor(Math.random()*e.length)]}buildFallbackImageUrl(e){let t={mountains:`https://upload.wikimedia.org/wikipedia/commons/4/4f/Matterhorn_from_Domhütte_-_2.jpg`,city:`https://upload.wikimedia.org/wikipedia/commons/0/06/Lower_Manhattan_skyline_-_June_2017.jpg`,bridge:`https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg`,ocean:`https://upload.wikimedia.org/wikipedia/commons/0/00/Atlantic_near_Faroe_Islands.jpg`,lake:`https://upload.wikimedia.org/wikipedia/commons/b/bd/Lake_McDonald_in_Glacier_National_Park.jpg`,architecture:`https://upload.wikimedia.org/wikipedia/commons/a/a6/Paris_Night.jpg`,aircraft:`https://upload.wikimedia.org/wikipedia/commons/5/56/F-35_Lightning_II.jpg`,default:`https://upload.wikimedia.org/wikipedia/commons/4/4f/Matterhorn_from_Domhütte_-_2.jpg`},n=e.toLowerCase();return t[Object.keys(t).find(e=>n.includes(e))||`default`]}pickFilterKey(){let e=Pa(Fa.ui?.imageEffects);return e.length===0?null:e[Math.floor(Math.random()*e.length)]}render(){let e=Fa.ui?.imageEffects?.filterSettings?.[this.state.filterKey]||null,t=!!(this.state.filterKey&&e&&this.state.photos);return(0,F.jsxs)(`div`,{className:this.props.cardClass||`relative rounded-xl overflow-hidden h-full bg-center bg-no-repeat border-0 dark:border-4 dark:border-off-white2`,children:[!this.state.loaded&&(0,F.jsx)(`div`,{className:`absolute inset-0 flex items-end bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-accent)_55%,transparent),transparent_45%),linear-gradient(135deg,color-mix(in_oklab,var(--color-card)_96%,black_4%),color-mix(in_oklab,var(--color-secondary)_24%,var(--color-card)))] p-3`,children:(0,F.jsx)(`span`,{className:`rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground shadow-sm`,children:this.state.category||`Loading image`})}),(0,F.jsx)(`img`,{className:t?`hidden`:`min-w-full min-h-full object-cover`,src:this.state.photos||void 0,alt:`Theme tile for ${this.state.category||`landscape`}`,onLoad:()=>this.setState({loaded:!0,imageReady:!0}),onError:()=>{let{photos:e,category:t}=this.state;if(e&&!e.startsWith(`blob:`)&&!e.includes(`upload.wikimedia.org`)){this._fetchFallback(t||this.getRandomCategory(),this.props.search||[],!0);return}this.setState({loaded:!1,imageReady:!1})}}),t&&this.state.imageReady?(0,F.jsx)(ja,{image:this.state.photos,filterKey:this.state.filterKey,filterSettings:e,className:`pointer-events-none absolute inset-0 z-10 h-full w-full`}):null]})}},Ka=[{max:50,label:`Good`,color:`#22c55e`,textClass:`text-green-400`,bgClass:`bg-green-500/15`},{max:100,label:`Moderate`,color:`#eab308`,textClass:`text-yellow-400`,bgClass:`bg-yellow-500/15`},{max:150,label:`Unhealthy for Sensitive Groups`,color:`#f97316`,textClass:`text-orange-400`,bgClass:`bg-orange-500/15`},{max:200,label:`Unhealthy`,color:`#ef4444`,textClass:`text-red-400`,bgClass:`bg-red-500/15`},{max:300,label:`Very Unhealthy`,color:`#a855f7`,textClass:`text-purple-400`,bgClass:`bg-purple-500/15`},{max:1/0,label:`Hazardous`,color:`#7f1d1d`,textClass:`text-red-300`,bgClass:`bg-red-900/30`}];function qa(e){return Ka.find(t=>e<=t.max)??Ka[Ka.length-1]}function Ja(){let e=A.useMemo(()=>g(),[]),[t,n]=A.useState(null),[r,i]=A.useState(`loading`);if(A.useEffect(()=>{let t=!1;async function r(e,r){try{let a=await(await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${e}&longitude=${r}&current=us_aqi,pm2_5,pm10,european_aqi&timezone=auto`)).json();if(t)return;n({aqi:a.current?.us_aqi??a.current?.european_aqi??0,pm25:a.current?.pm2_5?.toFixed(1)??`—`,pm10:a.current?.pm10?.toFixed(1)??`—`}),i(`ready`)}catch{t||i(`error`)}}return e.latitude?r(e.latitude,e.longitude):navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>r(e.coords.latitude,e.coords.longitude),()=>i(`location-error`)):i(`location-error`),()=>{t=!0}},[]),r!==`ready`||!t)return(0,F.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-[inherit] bg-card`,children:(0,F.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:r===`loading`?`Loading air quality…`:r===`location-error`?`Set coordinates in Settings.`:`Air quality unavailable.`})});let a=qa(t.aqi),o=Math.min(100,t.aqi/300*100);return(0,F.jsxs)(`div`,{className:`flex h-full w-full flex-col items-center justify-center gap-4 rounded-[inherit] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-card)_88%,black_12%),color-mix(in_oklab,var(--color-accent)_20%,var(--color-card)))] p-6`,children:[(0,F.jsx)(`p`,{className:`text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground`,children:`Air Quality · US AQI`}),(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1 rounded-2xl ${a.bgClass} px-10 py-5`,children:[(0,F.jsx)(`span`,{className:`text-6xl font-bold tabular-nums ${a.textClass}`,children:t.aqi}),(0,F.jsx)(`span`,{className:`text-center text-xs font-semibold ${a.textClass}`,children:a.label})]}),(0,F.jsxs)(`div`,{className:`w-full max-w-xs`,children:[(0,F.jsx)(`div`,{className:`h-2 w-full overflow-hidden rounded-full bg-border/40`,children:(0,F.jsx)(`div`,{className:`h-full rounded-full transition-all duration-700`,style:{width:`${o}%`,backgroundColor:a.color}})}),(0,F.jsxs)(`div`,{className:`mt-1 flex justify-between text-[10px] text-muted-foreground`,children:[(0,F.jsx)(`span`,{children:`0 Good`}),(0,F.jsx)(`span`,{children:`300 Hazardous`})]})]}),(0,F.jsxs)(`div`,{className:`flex gap-8 text-center`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`text-[10px] text-muted-foreground`,children:`PM2.5`}),(0,F.jsxs)(`div`,{className:`text-sm font-semibold text-foreground`,children:[t.pm25,` µg/m³`]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`text-[10px] text-muted-foreground`,children:`PM10`}),(0,F.jsxs)(`div`,{className:`text-sm font-semibold text-foreground`,children:[t.pm10,` µg/m³`]})]})]})]})}var Ya=`
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Xa=`
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_phase;      // 0=day, 1=sunset, 2=night, 3=storm
uniform float u_coverage;   // 0-1
uniform float u_style;      // 1=stratocumulus,2=cumulus,3=stratus,4=nimbostratus,5=cumulonimbus,6=supercell
uniform float u_hour;       // 0-24 wall-clock hour
uniform float u_fog;        // 0-1 fog intensity

// ---- noise ----
float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i),           hash(i+vec3(1,0,0)), f.x),
        mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x), f.y),
    mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
        mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x), f.y),
    f.z);
}
float fbm(vec3 p) {
  float v = 0.0, a = 0.55;
  mat3 m = mat3(1.6,0.2,0.0, -0.2,1.5,0.1, 0.1,-0.1,1.7);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = m * p + vec3(11.7,3.4,7.1); a *= 0.52; }
  return v;
}
float ridge(float x) { return 1.0 - abs(x * 2.0 - 1.0); }

// ---- sky & cloud colours ----
// Eight-stop piecewise sky aligned to real twilight bands.
// Phase bands (mirror of getTimePhase() civil/nautical/astronomical encoding):
//   0.00       midday
//   0.00→0.55  day
//   0.55→0.85  day → pre-golden (sky warms, colour saturation rises)
//   0.85→1.00  pre-golden → golden hour (amber horizon, indigo zenith)
//   1.00→1.18  golden → civil twilight peak / sunset (deep orange–purple)
//   1.18→1.45  sunset → civil (blue hour: Belt of Venus at horizon, cobalt above)
//   1.45→1.80  civil → nautical (deep navy, no orange, planets visible)
//   1.80→1.92  nautical → astronomical (near-black, faintest horizon glow)
//   1.92→2.00  astronomical → full night
// mix(horizon, zenith, tY): horizon at tY≈0.34, zenith at tY≈0.68
vec3 skyColor(float y) {
  float tY = mix(0.34, 0.68, y);

  // Supercell: sickly dark green-gray — override everything
  if (u_style > 5.5) return mix(vec3(0.025,0.030,0.022), vec3(0.06,0.08,0.06), tY);

  float p = clamp(u_phase, 0.0, 2.0);

  // Clear-sky colour stops (horizon_col, zenith_col)
  vec3 sDay   = mix(vec3(0.56,0.82,1.00), vec3(0.10,0.30,0.84), tY); // crisp azure
  vec3 sPreGo = mix(vec3(0.88,0.66,0.26), vec3(0.16,0.24,0.70), tY); // warming pre-golden
  vec3 sGold  = mix(vec3(1.00,0.60,0.08), vec3(0.18,0.12,0.52), tY); // amber horizon, indigo zenith
  vec3 sSunst = mix(vec3(0.98,0.32,0.06), vec3(0.28,0.06,0.42), tY); // deep orange, dark purple
  // Civil / blue hour — Belt of Venus (pink-mauve) at horizon, rich cobalt above
  vec3 sCivil = mix(vec3(0.51,0.51,0.98), vec3(0.04,0.04,0.22), tY); // periwinkle-mauve → deep indigo
  // Nautical — deep navy, no colour left at horizon
  vec3 sNaut  = mix(vec3(0.07,0.11,0.32), vec3(0.02,0.02,0.12), tY); // dark navy
  // Astronomical — near-black, only the faintest blue trace
  vec3 sAstro = mix(vec3(0.03,0.05,0.16), vec3(0.01,0.01,0.07), tY);
  vec3 sNight = mix(vec3(0.02,0.04,0.12), vec3(0.01,0.015,0.05), tY); // full dark

  // Overcast grey-shift (stratus=3, nimbostratus=4 → oc 0→1)
  float oc = clamp((u_style - 2.5) / 2.0, 0.0, 1.0);
  if (oc > 0.01) {
    sDay    = mix(sDay,    mix(vec3(0.42,0.50,0.64), vec3(0.20,0.26,0.42), tY), oc * 0.70);
    sPreGo  = mix(sPreGo,  mix(vec3(0.36,0.30,0.30), vec3(0.14,0.12,0.18), tY), oc * 0.68);
    sGold   = mix(sGold,   mix(vec3(0.36,0.28,0.24), vec3(0.14,0.10,0.16), tY), oc * 0.68);
    sSunst  = mix(sSunst,  mix(vec3(0.26,0.16,0.16), vec3(0.10,0.06,0.14), tY), oc * 0.68);
    sCivil  = mix(sCivil,  mix(vec3(0.14,0.16,0.32), vec3(0.04,0.04,0.14), tY), oc * 0.65);
    sNaut   = mix(sNaut,   mix(vec3(0.06,0.07,0.14), vec3(0.02,0.02,0.07), tY), oc * 0.55);
  }
  // Cumulonimbus bruised shift
  float cb = clamp((u_style - 4.5) / 1.0, 0.0, 1.0);
  if (cb > 0.01) {
    sDay   = mix(sDay,   mix(vec3(0.18,0.20,0.26), vec3(0.08,0.09,0.16), tY), cb * 0.72);
    sGold  = mix(sGold,  mix(vec3(0.22,0.14,0.14), vec3(0.08,0.05,0.10), tY), cb * 0.72);
    sSunst = mix(sSunst, mix(vec3(0.14,0.08,0.10), vec3(0.05,0.03,0.08), tY), cb * 0.72);
  }

  vec3 col = sDay;
  col = mix(col, sPreGo, smoothstep(0.55, 0.85, p)); // golden approach
  col = mix(col, sGold,  smoothstep(0.85, 1.00, p)); // golden hour
  col = mix(col, sSunst, smoothstep(1.00, 1.18, p)); // peak sunset
  col = mix(col, sCivil, smoothstep(1.18, 1.45, p)); // civil twilight / blue hour
  col = mix(col, sNaut,  smoothstep(1.45, 1.80, p)); // nautical twilight
  col = mix(col, sAstro, smoothstep(1.80, 1.92, p)); // astronomical twilight
  col = mix(col, sNight, smoothstep(1.92, 2.00, p)); // full night
  return col;
}

// Cloud highlight colour — top/sunlit faces
vec3 cloudLight() {
  if (u_style > 5.5) return vec3(0.34,0.38,0.34);
  if (u_style > 4.5) return vec3(0.44,0.46,0.50);
  if (u_style > 3.5) return vec3(0.54,0.58,0.66);
  float p = clamp(u_phase, 0.0, 2.0);
  vec3 col = vec3(1.00, 0.98, 0.92);                          // midday: warm white
  col = mix(col, vec3(1.00, 0.88, 0.58), smoothstep(0.55, 0.85, p)); // pre-golden: soft gold
  col = mix(col, vec3(1.00, 0.76, 0.32), smoothstep(0.85, 1.00, p)); // golden: deep amber tops
  col = mix(col, vec3(1.00, 0.48, 0.22), smoothstep(1.00, 1.18, p)); // sunset: fiery orange
  col = mix(col, vec3(0.52, 0.64, 0.96), smoothstep(1.18, 1.38, p)); // blue hour: cool lavender-blue
  col = mix(col, vec3(0.36, 0.44, 0.70), smoothstep(1.38, 1.65, p)); // nautical: steel blue
  col = mix(col, vec3(0.28, 0.32, 0.50), smoothstep(1.65, 2.00, p)); // night: muted
  return col;
}

// Cloud shadow colour — undersides / shaded faces
vec3 cloudShadow() {
  if (u_style > 5.5) return vec3(0.015,0.022,0.018);
  if (u_style > 4.5) return vec3(0.025,0.028,0.036);
  if (u_style > 3.5) return vec3(0.046,0.056,0.078);
  float p = clamp(u_phase, 0.0, 2.0);
  vec3 col = vec3(0.44, 0.56, 0.74);                          // midday: soft blue-gray
  col = mix(col, vec3(0.52, 0.30, 0.36), smoothstep(0.55, 0.85, p)); // pre-golden: rose shadow
  col = mix(col, vec3(0.50, 0.20, 0.32), smoothstep(0.85, 1.00, p)); // golden: deep rose-purple
  col = mix(col, vec3(0.36, 0.10, 0.22), smoothstep(1.00, 1.18, p)); // sunset: dark crimson
  col = mix(col, vec3(0.08, 0.12, 0.40), smoothstep(1.18, 1.38, p)); // blue hour: deep indigo
  col = mix(col, vec3(0.04, 0.06, 0.20), smoothstep(1.38, 1.65, p)); // nautical: dark navy
  col = mix(col, vec3(0.02, 0.04, 0.12), smoothstep(1.65, 2.00, p)); // night: near black
  return col;
}

// ---- celestial positions ----
// Sun tracks east->west based on clock hour; elevation follows sine arc
vec2 sunUV() {
  float t = clamp((u_hour - 5.5) / 13.0, 0.0, 1.0);
  float x = mix(0.04, 0.96, t);
  float elev = sin(3.14159265 * t);
  // Phase additionally pulls it down toward horizon
  float y = mix(0.08, 0.76, elev) * clamp(1.6 - u_phase, 0.0, 1.0) + 0.08 * clamp(u_phase - 0.0, 0.0, 1.0);
  return vec2(x, y);
}
// Moon drifts right->left during the night half of u_phase
vec2 moonUV() {
  float t = clamp((u_phase - 1.2) / 0.8, 0.0, 1.0);
  float x = mix(0.80, 0.20, t);
  float y = 0.13 + sin(3.14159265 * t) * 0.52;
  return vec2(x, y);
}

// ---- sun rendering ----
vec3 drawSun(vec2 uv, vec3 col, float coverage) {
  float vis = clamp(1.6 - u_phase, 0.0, 1.0);
  if (vis < 0.01 || u_style > 5.5) return col;
  vec2 sp = sunUV();
  float d  = length(uv - sp);
  vec3 hue = mix(vec3(1.0,0.97,0.86), vec3(1.0,0.58,0.22), smoothstep(0.0,1.0,u_phase));

  // Wide atmospheric corona
  float coR = mix(0.26, 0.44, smoothstep(0.0,1.0,u_phase));
  float corona = pow(max(0.0, 1.0 - d / coR), 2.4) * vis * (1.0 - coverage * 0.68);
  col += hue * corona * 0.52;

  // Inner glow
  float glow = pow(max(0.0, 1.0 - d / 0.09), 3.8) * vis * (1.0 - coverage * 0.82);
  col += hue * glow * 0.58;

  // Disc
  float disc = smoothstep(0.030, 0.020, d) * vis * (1.0 - coverage * 0.88);
  col = mix(col, hue * 1.5, disc);

  // Horizon scatter band near sunset/rise
  float nearHorizon = smoothstep(0.28, 1.0, u_phase);
  if (nearHorizon > 0.01) {
    float hg = exp(-abs(uv.y - 0.13) * 6.5) * exp(-abs(uv.x - sp.x) * 1.6);
    hg *= nearHorizon * (1.0 - coverage * 0.6) * 0.55;
    vec3 hCol = mix(vec3(1.0,0.72,0.28), vec3(0.88,0.30,0.48), smoothstep(0.28,1.0,u_phase));
    col += hCol * hg;
  }

  // Crepuscular / god rays fanning out through cloud gaps
  if (coverage > 0.08 && u_phase < 1.3) {
    float rayDir = atan(uv.y - sp.y, uv.x - sp.x);
    float rayDist = length(uv - sp);
    float rays = noise(vec3(rayDir * 3.2, u_time * 0.045, 0.5));
    rays *= exp(-rayDist * 3.8) * coverage * (1.3 - u_phase) * 0.16;
    col += hue * max(0.0, rays);
  }
  return col;
}

// ---- moon rendering ----
vec3 drawMoon(vec2 uv, vec3 col, float coverage) {
  float vis = smoothstep(1.35, 2.0, u_phase);
  if (vis < 0.01) return col;
  vec2 mp = moonUV();
  float d = length(uv - mp);
  float clr = 1.0 - coverage * 0.90;

  // Soft glow
  float glow = pow(max(0.0, 1.0 - d / 0.14), 2.6) * vis * clr;
  col += vec3(0.52,0.60,0.78) * glow * 0.30;

  // Lunar halo ring (thin, subtle)
  float halo = smoothstep(0.060, 0.050, d) * (1.0 - smoothstep(0.052, 0.065, d));
  col += vec3(0.56,0.64,0.80) * halo * vis * clr * 0.24;

  // Disc
  float disc = smoothstep(0.026, 0.017, d) * vis * clr;
  col = mix(col, vec3(0.88,0.92,0.97) * 1.12, disc);
  return col;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p  = uv * 2.0 - 1.0;
  p.x *= u_resolution.x / max(u_resolution.y, 1.0);

  vec3 color = skyColor(uv.y);
  float coverage = clamp(u_coverage, 0.0, 1.0);

  color = drawSun(uv, color, coverage);
  color = drawMoon(uv, color, coverage);

  // ---- clouds ----
  float alpha  = 0.0;
  vec3  clouds = vec3(0.0);

  float threshold = mix(0.86, 0.48, coverage);
  if (u_style > 2.5 && u_style < 4.5) threshold -= 0.08;
  if (u_style > 4.5) threshold -= 0.16;
  if (u_phase > 1.5 && u_phase < 2.5) threshold -= 0.08;

  // Broken-cloud mode: stratocumulus(1) or cumulus(2) with visible coverage
  // Three fully independent depth layers — far, mid, near — composited in order.
  float brokenMode = step(u_style, 2.49) * step(0.05, coverage);
  float isCumulus  = step(1.51, u_style) * step(u_style, 2.49);

  if (brokenMode > 0.5) {
    float a1 = 0.0, a2 = 0.0, a3 = 0.0;
    vec3  c1 = vec3(0.0), c2 = vec3(0.0), c3 = vec3(0.0);

    // ---- FAR layer (12 steps) ----
    // Small-ish cloud blobs high in sky, slow left drift, cool atmospheric tint
    for (int i = 0; i < 12; i++) {
      float t  = float(i) / 11.0;
      // Cumulus: taller shelf so towers poke up; stratocumulus: flatter band
      float sL = mix(-0.52, -0.36, isCumulus);
      float sH = mix(-0.04,  0.16, isCumulus);
      float tF = mix( 0.70,  0.96, isCumulus);
      float vS = mix( 0.86,  1.28, isCumulus);
      vec3 sp = vec3(
        p.x * 1.72 + u_time * 0.009 + t * 0.34,
        p.y * vS   + u_time * 0.003 - t * 0.07,
        t * 2.4 + u_time * 0.011 + 0.0
      );
      float shelf = smoothstep(sL, sH, p.y + t * 0.54)
                  * (1.0 - smoothstep(tF, tF + 0.18, p.y + t * 0.22));
      float broad    = fbm(sp * 1.90);
      float detail   = fbm(sp * 7.2 + 6.0);
      float cellular = ridge(fbm(sp * 3.6 + 24.0));
      // Stratocumulus: smooth sheets; cumulus: more cellular (puffy tops)
      float shape = mix(broad * 0.74 + detail * 0.26,
                        broad * 0.44 + detail * 0.24 + cellular * 0.42,
                        isCumulus);
      float thr = threshold + 0.05;
      float d   = smoothstep(thr, thr + 0.062, shape) * shelf;
      d = pow(d, 0.78) * mix(0.55, 1.05, coverage);
      if (coverage < 0.01) d = 0.0;
      float shade = smoothstep(0.30, 0.78, broad + detail * 0.44);
      // Cool blue-gray tint: atmospheric perspective makes distant clouds desaturate
      vec3 lit = mix(cloudShadow() * 0.86, cloudLight() * 0.88, shade);
      lit += vec3(0.002, 0.006, 0.020) * (1.0 - step(2.5, u_phase));
      lit += vec3(0.030, 0.026, 0.022) * (1.0 - step(2.5, u_phase));
      float sA = d * 0.084 * (1.0 - a1);
      c1 += lit * sA; a1 += sA;
    }

    // ---- MID layer (10 steps) ----
    // Medium blobs in mid-sky, moderate speed, standard neutral lighting
    for (int i = 0; i < 10; i++) {
      float t  = float(i) / 9.0;
      float sL = mix(-0.68, -0.46, isCumulus);
      float sH = mix(-0.16,  0.08, isCumulus);
      float tF = mix( 0.82,  1.08, isCumulus);
      float vS = mix( 0.92,  1.38, isCumulus);
      vec3 sp = vec3(
        p.x * 1.26 + u_time * 0.026 + t * 0.44,
        p.y * vS   + u_time * 0.008 - t * 0.11,
        t * 3.0 + u_time * 0.022 + 14.0
      );
      float shelf = smoothstep(sL, sH, p.y + t * 0.62)
                  * (1.0 - smoothstep(tF, tF + 0.22, p.y + t * 0.26));
      float broad    = fbm(sp * 1.45);
      float detail   = fbm(sp * 5.8 + 6.0);
      float curl     = ridge(fbm(sp * 9.2 + 19.0));
      float cellular = ridge(fbm(sp * 3.8 + 24.0));
      float shape = mix(broad * 0.74 + detail * 0.32 + curl * 0.14,
                        broad * 0.42 + detail * 0.30 + cellular * 0.46,
                        isCumulus);
      float thr = threshold;
      float d   = smoothstep(thr, thr + 0.074, shape) * shelf;
      d = pow(d, 0.70) * mix(0.72, 1.32, coverage);
      if (coverage < 0.01) d = 0.0;
      float shade = smoothstep(0.28, 0.78, broad + detail * 0.5 + curl * 0.18);
      vec3 lit = mix(cloudShadow(), cloudLight(), shade);
      lit += vec3(0.044, 0.040, 0.034) * (1.0 - step(2.5, u_phase));
      float sA = d * 0.092 * (1.0 - a2);
      c2 += lit * sA; a2 += sA;
    }

    // ---- NEAR layer (10 steps) ----
    // Large blobby clouds low-mid sky, fast drift, warm bright tops, deep shadows
    for (int i = 0; i < 10; i++) {
      float t  = float(i) / 9.0;
      float sL = mix(-0.90, -0.66, isCumulus);
      float sH = mix(-0.38, -0.04, isCumulus);
      float tF = mix( 0.90,  1.22, isCumulus);
      float vS = mix( 0.98,  1.50, isCumulus);
      vec3 sp = vec3(
        p.x * 0.80 + u_time * 0.056 + t * 0.52,
        p.y * vS   + u_time * 0.016 - t * 0.15,
        t * 3.6 + u_time * 0.038 + 28.0
      );
      float shelf = smoothstep(sL, sH, p.y + t * 0.68)
                  * (1.0 - smoothstep(tF, tF + 0.24, p.y + t * 0.30));
      float broad    = fbm(sp * 0.88);   // low frequency = large blobs
      float detail   = fbm(sp * 4.0 + 6.0);
      float curl     = ridge(fbm(sp * 7.6 + 19.0));
      float cellular = ridge(fbm(sp * 3.2 + 24.0));
      // Lumpy/puffier silhouette on the near layer
      float shape = mix(broad * 0.68 + detail * 0.26 + curl * 0.20 + cellular * 0.16,
                        broad * 0.34 + detail * 0.22 + cellular * 0.56 + curl * 0.22,
                        isCumulus);
      float thr = threshold - 0.07;
      float d   = smoothstep(thr, thr + 0.080, shape) * shelf;
      d = pow(d, 0.64) * mix(0.88, 1.56, coverage);
      if (coverage < 0.01) d = 0.0;
      float shade = smoothstep(0.26, 0.76, broad + detail * 0.48 + curl * 0.20);
      // Bright warm tops, deeper undershadow — closest layer catches most direct light
      vec3 lit = mix(cloudShadow() * 1.08, cloudLight() * 1.20, shade);
      lit += vec3(0.058, 0.050, 0.040) * (1.0 - step(2.5, u_phase));
      lit += vec3(0.030, 0.018, 0.004) * (1.0 - step(1.0, u_phase)); // warm sun tint
      float sA = d * 0.100 * (1.0 - a3);
      c3 += lit * sA; a3 += sA;
    }

    // Composite far → mid → near (premultiplied "over" operator)
    // Near is topmost; its alpha occludes mid+far beneath it.
    vec3  comp  = c1;
    float compA = a1;
    comp  = c2 + comp  * (1.0 - a2);
    compA = a2 + compA * (1.0 - a2);
    comp  = c3 + comp  * (1.0 - a3);
    compA = a3 + compA * (1.0 - a3);

    clouds = comp;
    alpha  = clamp(compA, 0.0, 1.0);

  } else {
    // ---- STANDARD CLOUD MODE (stratus / nimbostratus / cumulonimbus / supercell) ----
    for (int i = 0; i < 32; i++) {
      float t = float(i) / 31.0;
      float verticalScale = 0.92;
      float shelfLow = -0.78, shelfHigh = -0.28, topFade = 0.86;
      if (u_style > 2.5 && u_style < 4.5) { verticalScale = 0.52; shelfLow = -0.96; shelfHigh = -0.56; topFade = 0.58; }
      if (u_style > 4.5)                   { verticalScale = 1.55; shelfLow = -0.88; shelfHigh = -0.12; topFade = 1.12; }

      vec3 sp = vec3(
        p.x * 1.15 + u_time * 0.035 + t * 0.46,
        p.y * verticalScale + u_time * 0.012 - t * 0.12,
        t * 3.0 + u_time * 0.018
      );
      float shelf = smoothstep(shelfLow, shelfHigh, p.y + t * 0.64)
                  * (1.0 - smoothstep(topFade, topFade + 0.22, p.y + t * 0.28));

      float broad    = fbm(sp * 1.45);
      float detail   = fbm(sp * 5.8 + 6.0);
      float curl     = ridge(fbm(sp * 9.2 + 19.0));
      float cellular = ridge(fbm(sp * 3.8 + 24.0));

      float shape = broad * 0.74 + detail * 0.32 + curl * 0.14;
      if (u_style > 2.5 && u_style < 3.5) shape = broad * 0.90 + detail * 0.14;
      if (u_style > 3.5) shape = broad * 0.72 + detail * 0.28 + curl * 0.34 + cellular * 0.18;

      float d = smoothstep(threshold, threshold + 0.075, shape) * shelf;
      d = pow(d, 0.7) * mix(0.78, 1.42, coverage);
      if (coverage < 0.01) d = 0.0;

      float shade = smoothstep(0.28, 0.78, broad + detail * 0.5 + curl * 0.18);
      vec3 lit = mix(cloudShadow(), cloudLight(), shade);
      lit += vec3(0.045, 0.040, 0.035) * (1.0 - step(2.5, u_phase));

      float sA = d * 0.095 * (1.0 - alpha);
      clouds += lit * sA; alpha += sA;
    }
  }

  // ---- fog ground bands ----
  if (u_fog > 0.01) {
    vec3 fogCol = mix(
      mix(vec3(0.82, 0.85, 0.90), vec3(0.26, 0.30, 0.40), smoothstep(0.0, 2.0, u_phase)),
      vec3(0.90, 0.93, 0.96), uv.y * 0.6
    );
    float b1 = smoothstep(0.42, 0.00, uv.y)
             * (0.5 + 0.5 * noise(vec3(uv.x * 2.2 + u_time * 0.020, uv.y * 3.5, u_time * 0.012)));
    float b2 = smoothstep(0.24, 0.00, uv.y)
             * (0.4 + 0.6 * noise(vec3(uv.x * 3.6 - u_time * 0.016, uv.y * 5.5, u_time * 0.010 + 4.0)));
    float b3 = smoothstep(0.13, 0.00, uv.y)
             * (0.6 + 0.4 * noise(vec3(uv.x * 5.0 + u_time * 0.025, uv.y * 8.0, u_time * 0.018 + 8.0)));
    float upper = smoothstep(0.82, 0.50, uv.y) * u_fog * 0.38
                * (0.5 + 0.5 * noise(vec3(uv.x * 1.6 - u_time * 0.010, uv.y * 1.8, u_time * 0.007)));
    float fd = clamp(b1 * 0.42 + b2 * 0.52 + b3 * 0.72, 0.0, 1.0) * u_fog;
    color = mix(color, fogCol, fd + upper);
    // let cloud layer show faintly through fog
    color = color * (1.0 - alpha * 0.55) + clouds * 0.55;
  } else {
    float haze = 0.018 + smoothstep(0.55, 1.0, uv.y) * 0.012;
    color = mix(color, cloudLight(), haze * coverage);
    color = color * (1.0 - alpha) + clouds;
  }

  // top-sky darkening + overall tints
  float topEq = smoothstep(0.76, 1.0, uv.y) * (1.0 - step(2.5, u_phase));
  color = mix(color, color * 0.80, topEq);
  color += vec3(0.055, 0.052, 0.048) * coverage * (1.0 - step(2.5, u_phase));
  if (u_style > 4.5) color = mix(color, vec3(0.06,0.075,0.07), 0.26);
  color = mix(color, vec3(0.02,0.025,0.035), smoothstep(0.0, 0.22, 1.0 - uv.y) * 0.22);

  gl_FragColor = vec4(color, 1.0);
}
`;function Za(e){let t=e.createShader(e.VERTEX_SHADER);e.shaderSource(t,Ya),e.compileShader(t);let n=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(n,Xa),e.compileShader(n);let r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.deleteShader(t),e.deleteShader(n),r}function Qa(e){return typeof e==`number`?e:e===`storm`?3:e===`night`?2:+(e===`sunset`)}function $a(e){return e===`storm`?.72:e===`full`?.62:e===`partly`?.24:0}function eo(e){return e===`cumulus`?2:e===`stratus`?3:e===`nimbostratus`?4:e===`cumulonimbus`?5:e===`supercell`?6:1}function to({coverage:e=`full`,phase:t=`day`,cloudStyle:n=`stratocumulus`,fogIntensity:r=0}){let i=(0,A.useRef)(null),[a,o]=(0,A.useState)(!0),s=(0,A.useRef)({coverage:e,phase:t,cloudStyle:n,fogIntensity:r});if(s.current={coverage:e,phase:t,cloudStyle:n,fogIntensity:r},(0,A.useEffect)(()=>{let e=i.current,t=e?.getContext(`webgl`,{antialias:!1,alpha:!1,powerPreference:`low-power`});if(!e||!t){o(!1);return}let n=0,r=Za(t),a=t.getExtension(`KHR_parallel_shader_compile`),c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);let l=performance.now(),u=!1,d=-1,f=null,p=null,m=null,h=null,g=null,_=null,v=null;function y(){let n=Math.min(window.devicePixelRatio||1,1),r=Math.max(1,Math.floor(e.clientWidth*n)),i=Math.max(1,Math.floor(e.clientHeight*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i),t.viewport(0,0,r,i)}y();let b=new ResizeObserver(y);b.observe(e);let x=0;function S(i){if(n=requestAnimationFrame(S),!e.clientWidth)return;if(!u){if(a&&!t.getProgramParameter(r,a.COMPLETION_STATUS_KHR))return;if(!t.getProgramParameter(r,t.LINK_STATUS)){o(!1),cancelAnimationFrame(n);return}d=t.getAttribLocation(r,`a_position`),f=t.getUniformLocation(r,`u_resolution`),p=t.getUniformLocation(r,`u_time`),m=t.getUniformLocation(r,`u_phase`),h=t.getUniformLocation(r,`u_coverage`),g=t.getUniformLocation(r,`u_style`),_=t.getUniformLocation(r,`u_hour`),v=t.getUniformLocation(r,`u_fog`),u=!0}if(i-x<50)return;x=i;let y=new Date,b=y.getHours()+y.getMinutes()/60+y.getSeconds()/3600;t.useProgram(r),t.bindBuffer(t.ARRAY_BUFFER,c),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);let C=s.current;t.uniform2f(f,e.width,e.height),t.uniform1f(p,(i-l)/1e3),t.uniform1f(m,Qa(C.coverage===`storm`?`storm`:C.phase)),t.uniform1f(h,$a(C.coverage)),t.uniform1f(g,eo(C.cloudStyle)),t.uniform1f(_,b),t.uniform1f(v,C.fogIntensity),t.drawArrays(t.TRIANGLES,0,6)}return n=requestAnimationFrame(S),()=>{cancelAnimationFrame(n),b.disconnect(),t.deleteBuffer(c),t.deleteProgram(r)}},[]),!a){let n=Qa(t);return(0,F.jsxs)(`div`,{className:`weather-sky weather-sky-${e===`storm`?`storm`:n>=1.5?`night`:n>=.5?`sunset`:`day`} weather-cloud-coverage-${e} absolute inset-0 overflow-hidden pointer-events-none`,children:[(0,F.jsx)(`div`,{className:`weather-cloud-field weather-cloud-field-1`}),(0,F.jsx)(`div`,{className:`weather-cloud-field weather-cloud-field-2`}),(0,F.jsx)(`div`,{className:`weather-cloud-field weather-cloud-field-3`}),(0,F.jsx)(`div`,{className:`weather-cloud-field weather-cloud-field-4`}),(0,F.jsx)(`div`,{className:`weather-cloud-vignette`})]})}return(0,F.jsx)(`canvas`,{ref:i,className:`absolute inset-0 h-full w-full pointer-events-none`,"aria-hidden":`true`})}function no(e){if(e===null)return`--`;let t=[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`];return t[Math.round(e/45)%t.length]}function ro(e,t=``){return e===null||!Number.isFinite(e)?`--`:`${Math.round(e)}${t}`}function io({degrees:e,color:t}){return(0,F.jsx)(`svg`,{className:`weather-wind-dir-arrow`,viewBox:`0 0 10 14`,"aria-hidden":`true`,style:{transform:`rotate(${e}deg)`,color:t},children:(0,F.jsx)(`path`,{d:`M5 0.5 L9.5 7 H6.3 V13.5 H3.7 V7 H0.5 Z`,fill:`currentColor`})})}function ao(e,t,n){let r=Math.max(0,Math.min(n,1)),i=e.map((e,n)=>Math.round(e+(t[n]-e)*r));return`rgb(${i[0]} ${i[1]} ${i[2]})`}function oo(e){let t=Math.max(0,Math.min(e/11,1));return t<.27?ao([187,247,208],[253,224,71],t/.27):t<.55?ao([253,224,71],[251,146,60],(t-.27)/.28):ao([251,146,60],[244,114,182],(t-.55)/.45)}function so({samples:e}){return e.length?(0,F.jsx)(`div`,{className:`weather-uv-bar`,children:(0,F.jsx)(`div`,{className:`weather-uv-track`,style:{background:`linear-gradient(90deg, ${e.map((t,n)=>{let r=e.length>1?n/(e.length-1)*100:50;return`${oo(t.uvIndex??0)} ${r.toFixed(1)}%`}).join(`, `)})`},children:e.map((t,n)=>{let r=e.length>1?n/(e.length-1)*100:50,i=n===0?`translateX(0.45em) translateY(-50%)`:n===e.length-1?`translateX(calc(-100% - 0.45em)) translateY(-50%)`:`translate(-50%, -50%)`;return(0,F.jsx)(`span`,{className:`weather-uv-num`,style:{left:`${r}%`,transform:i},children:t.uvIndex===null?`—`:Math.round(t.uvIndex)},t.time)})})}):(0,F.jsx)(`div`,{className:`weather-uv-bar`})}function co(e,t,n){if(t===null||!Number.isFinite(t))return`rgb(148 163 184)`;let r=Math.max(0,Math.min(t/n,1));return e===`uv`?r<.45?ao([187,247,208],[250,204,21],r/.45):r<.73?ao([250,204,21],[251,146,60],(r-.45)/.28):ao([251,146,60],[244,114,182],(r-.73)/.27):e===`humidity`?ao([167,243,208],[14,165,233],r):e===`wind`?ao([226,232,240],[79,70,229],r):ao([191,219,254],[30,64,175],r)}function lo(e){return e.filter((e,t)=>t%3==0).slice(0,8)}function uo(e,t){return e.length<=1?``:e.map((n,r)=>{let i=t.getValue(n)??0,a=r/(e.length-1)*100,o=100-Math.max(0,Math.min(i/t.max,1))*100;return`${a.toFixed(2)},${o.toFixed(2)}`}).join(` `)}function fo({day:e,unit:t,mode:n=`bars`,onClose:r}){let i=lo(e.hourly),a=t===`imperial`?`in`:`mm`,o=t===`imperial`?`mph`:`km/h`,s=[{key:`humidity`,label:`Humidity`,max:100,color:`rgb(45 212 191)`,getValue:e=>e.humidity,format:e=>ro(e.humidity,`%`)},{key:`uv`,label:`UV index`,max:11,color:`rgb(244 114 182)`,getValue:e=>e.uvIndex,format:e=>e.uvIndex===null?`--`:e.uvIndex.toFixed(1)},{key:`wind`,label:`Wind`,max:t===`imperial`?35:55,color:`rgb(129 140 248)`,getValue:e=>e.windSpeed,format:e=>`${ro(e.windSpeed)} ${o} ${no(e.windDirection)}`,marker:e=>e.windDirection===null?null:(0,F.jsx)(`span`,{className:`weather-detail-wind-arrow`,style:{transform:`rotate(${e.windDirection}deg)`},children:`↑`})},{key:`precipitation`,label:`Precipitation`,max:100,color:`rgb(37 99 235)`,getValue:e=>e.precipitationProbability,format:e=>`${ro(e.precipitationProbability,`%`)} ${e.precipitation?`${e.precipitation}${a}`:``}`}];return(0,F.jsxs)(`div`,{className:`weather-detail-panel`,children:[(0,F.jsx)(`div`,{className:`weather-detail-shader`,"aria-hidden":`true`,children:(0,F.jsx)(to,{coverage:`partly`,phase:`night`,cloudStyle:`stratocumulus`})}),(0,F.jsxs)(`div`,{className:`weather-detail-content`,children:[(0,F.jsxs)(`div`,{className:`weather-detail-header`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:e.dayName}),(0,F.jsxs)(`p`,{children:[e.low,`° low · `,e.high,`° high · `,e.precip,`% precip · `,n===`bars`?`bars`:`trend`]})]}),r&&(0,F.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Close hourly forecast`,children:`x`})]}),e.hourly.length>0?n===`lines`?(0,F.jsxs)(`div`,{className:`weather-detail-line-panel`,children:[(0,F.jsxs)(`svg`,{className:`weather-detail-line-chart`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Hourly weather metric trends`,children:[(0,F.jsx)(`line`,{x1:`0`,y1:`25`,x2:`100`,y2:`25`}),(0,F.jsx)(`line`,{x1:`0`,y1:`50`,x2:`100`,y2:`50`}),(0,F.jsx)(`line`,{x1:`0`,y1:`75`,x2:`100`,y2:`75`}),s.map(e=>(0,F.jsx)(`polyline`,{points:uo(i,e),style:{stroke:e.color}},e.key))]}),(0,F.jsx)(`div`,{className:`weather-detail-line-times`,children:i.map(e=>(0,F.jsx)(`span`,{children:e.hourLabel},e.time))}),(0,F.jsx)(`div`,{className:`weather-detail-legend`,children:s.map(e=>(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`i`,{style:{background:e.color}}),e.label]},e.key))})]}):(0,F.jsxs)(`div`,{className:`weather-detail-table`,children:[(0,F.jsxs)(`div`,{className:`weather-detail-time-axis`,children:[(0,F.jsx)(`span`,{}),i.map(e=>(0,F.jsx)(`span`,{children:e.hourLabel},e.time))]}),s.map(e=>(0,F.jsxs)(`section`,{className:`weather-detail-row`,"data-metric":e.key,children:[(0,F.jsx)(`h4`,{children:e.label}),e.key===`uv`?(0,F.jsx)(so,{samples:i}):(0,F.jsx)(`div`,{className:`weather-detail-row-values`,children:i.map(t=>{let n=e.getValue(t),r=`${Math.max(6,Math.min((n??0)/e.max*100,100))}%`,i=co(e.key,n,e.max);return(0,F.jsxs)(`div`,{className:`weather-detail-cell`,children:[(0,F.jsx)(`span`,{className:`weather-detail-bar`,"aria-hidden":`true`,children:(0,F.jsx)(`span`,{className:`weather-detail-bar-fill`,style:{height:r,background:`linear-gradient(to top, color-mix(in oklab, ${i} 68%, black), ${i})`,boxShadow:`0 0 8px color-mix(in oklab, ${i} 40%, transparent), 0 -1px 6px color-mix(in oklab, ${i} 28%, transparent)`}})}),(0,F.jsxs)(`div`,{className:`weather-detail-label`,children:[(0,F.jsxs)(`span`,{className:`weather-detail-num`,children:[e.key===`humidity`&&ro(t.humidity),e.key===`wind`&&ro(t.windSpeed),e.key===`precipitation`&&ro(t.precipitationProbability)]}),(0,F.jsxs)(`span`,{className:`weather-detail-subtext`,children:[e.key===`humidity`&&`%`,e.key===`wind`&&(0,F.jsxs)(F.Fragment,{children:[t.windDirection!==null&&(0,F.jsx)(io,{degrees:t.windDirection,color:i}),(0,F.jsx)(`span`,{className:`weather-detail-unit-text`,children:o}),t.windDirection!==null&&(0,F.jsx)(`span`,{className:`weather-detail-compass`,children:no(t.windDirection)})]}),e.key===`precipitation`&&`%`]}),e.key===`precipitation`&&t.precipitation?(0,F.jsxs)(`span`,{className:`weather-detail-subtext weather-detail-precip-amt`,children:[t.precipitation,a]}):null]})]},`${e.key}-${t.time}`)})})]},e.key))]}):(0,F.jsx)(`p`,{className:`weather-detail-empty`,children:`Hourly forecast unavailable for this day.`})]})]})}var po=he(e=>({data:null,error:null,location:`Weather`,clockTime:Date.now(),lastFetchedAt:null,selectedDay:null,setData:t=>e({data:t}),setError:t=>e({error:t}),setLocation:t=>e({location:t}),setLastFetchedAt:t=>e({lastFetchedAt:t}),setSelectedDay:t=>e({selectedDay:t}),tickClock:()=>e({clockTime:Date.now()})}));function mo(){let[e,t]=A.useState(null),[n,r]=A.useState(`loading`);return A.useEffect(()=>{let e=!1;async function n(){try{let n=new Date,i=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,`0`),o=String(n.getDate()).padStart(2,`0`),s=await(await fetch(`https://en.wikipedia.org/api/rest_v1/feed/featured/${i}/${a}/${o}`,{headers:{Accept:`application/json`}})).json();if(e)return;let c=s.tfa;if(!c){r(`empty`);return}t({title:c.normalizedtitle||c.title,extract:c.extract,thumbnail:c.thumbnail?.source,url:c.content_urls?.desktop?.page}),r(`ready`)}catch{e||r(`error`)}}return n(),()=>{e=!0}},[]),n!==`ready`||!e?(0,F.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-[inherit] bg-card`,children:(0,F.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:n===`loading`?`Loading…`:`Featured article unavailable.`})}):(0,F.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`group flex h-full w-full overflow-hidden rounded-[inherit] bg-card text-foreground`,children:[e.thumbnail&&(0,F.jsx)(`div`,{className:`w-2/5 shrink-0 overflow-hidden`,children:(0,F.jsx)(`img`,{src:e.thumbnail,alt:e.title,className:`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]`})}),(0,F.jsxs)(`div`,{className:`flex flex-1 flex-col justify-between overflow-hidden p-5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground`,children:`Wikipedia · Featured Article`}),(0,F.jsx)(`h2`,{className:`line-clamp-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary`,children:e.title}),(0,F.jsx)(`p`,{className:`mt-2 line-clamp-5 text-xs leading-relaxed text-muted-foreground`,children:e.extract})]}),(0,F.jsx)(`span`,{className:`text-xs font-medium text-primary group-hover:underline`,children:`Read full article →`})]})]})}function ho(e){let t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?`${t}s ago`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}function go(){let e=A.useMemo(()=>g(),[]).featurePanel?.rssFeedUrl,[t,n]=A.useState(null),[r,i]=A.useState([]),[a,o]=A.useState(`loading`);return A.useEffect(()=>{if(!e){o(`no-feed`);return}let t=!1;async function r(){try{let r=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(e)}&count=12`)).json();if(t)return;if(r.status!==`ok`)throw Error(r.message||`Feed error`);n(r.feed),i(r.items||[]),o(`ready`)}catch{t||o(`error`)}}return r(),()=>{t=!0}},[e]),a===`no-feed`?(0,F.jsx)(`div`,{className:`rss-feed flex h-full w-full items-center justify-center rounded-[inherit] bg-card text-center`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`rss-title font-semibold text-foreground`,children:`RSS Feed`}),(0,F.jsx)(`p`,{className:`rss-subtitle text-muted-foreground`,children:`Set an RSS feed URL in Settings, Content, Feature Panel.`})]})}):a===`loading`?(0,F.jsx)(`div`,{className:`rss-feed flex h-full w-full items-center justify-center rounded-[inherit] bg-card`,children:(0,F.jsx)(`span`,{className:`rss-subtitle text-muted-foreground`,children:`Loading feed...`})}):a===`error`?(0,F.jsx)(`div`,{className:`rss-feed flex h-full w-full items-center justify-center rounded-[inherit] bg-card text-center`,children:(0,F.jsx)(`span`,{className:`rss-subtitle text-muted-foreground`,children:`Could not load feed. Check the URL in Settings.`})}):(0,F.jsxs)(`div`,{className:`rss-feed flex h-full w-full flex-col rounded-[inherit] bg-card`,children:[(0,F.jsxs)(`div`,{className:`rss-header flex items-center border-b border-border/50`,children:[t?.image&&(0,F.jsx)(`img`,{src:t.image,alt:``,className:`rss-feed-icon shrink-0 rounded object-cover`}),(0,F.jsx)(`p`,{className:`rss-feed-title truncate font-semibold uppercase text-muted-foreground`,children:t?.title||`RSS Feed`})]}),(0,F.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:(0,F.jsx)(`div`,{className:`divide-y divide-border/30`,children:r.map((e,t)=>(0,F.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`rss-item flex items-start transition-colors hover:bg-accent/30`,children:[e.thumbnail&&(0,F.jsx)(`img`,{src:e.thumbnail,alt:``,className:`rss-thumbnail shrink-0 rounded-md object-cover`}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsx)(`p`,{className:`rss-item-title line-clamp-2 font-medium leading-snug text-foreground`,children:e.title}),(0,F.jsxs)(`div`,{className:`rss-item-meta flex items-center text-muted-foreground`,children:[e.author&&(0,F.jsx)(`span`,{className:`truncate`,children:e.author}),e.pubDate&&(0,F.jsx)(`span`,{className:`shrink-0`,children:ho(e.pubDate)})]})]})]},t))})})]})}function _o(e){let t=Math.floor((Date.now()-new Date(e))/1e3);return t<60?`${t}s ago`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}function vo(e){let t=e.payload||{};switch(e.type){case`PushEvent`:{let e=t.commits?.length??0,n=t.commits?.[0]?.message?.split(`
`)[0];return{icon:`📦`,text:`${e} commit${e===1?``:`s`}${n?` · ${n}`:``}`}}case`CreateEvent`:return{icon:`✨`,text:`Created ${t.ref_type||`branch`}${t.ref?` ${t.ref}`:``}`};case`PullRequestEvent`:return{icon:`🔀`,text:`${t.action} PR: ${t.pull_request?.title||``}`};case`IssuesEvent`:return{icon:`🐛`,text:`${t.action} issue: ${t.issue?.title||``}`};case`IssueCommentEvent`:return{icon:`💬`,text:`Commented: ${t.issue?.title||``}`};case`WatchEvent`:return{icon:`⭐`,text:`Starred`};case`ForkEvent`:return{icon:`🍴`,text:`Forked → ${t.forkee?.full_name||``}`};case`ReleaseEvent`:return{icon:`🚀`,text:`Released ${t.release?.tag_name||``}`};default:return{icon:`🔧`,text:e.type.replace(`Event`,``)}}}function yo(){let e=A.useMemo(()=>g(),[]).featurePanel?.githubUsername,[t,n]=A.useState([]),[r,i]=A.useState(`loading`);return A.useEffect(()=>{if(!e){i(`no-user`);return}let t=!1;async function r(){try{let r=await fetch(`https://api.github.com/users/${e}/events?per_page=20`);if(!r.ok)throw Error(`GitHub API error`);let a=await r.json();if(t)return;let o=new Set,s=a.filter(e=>{let t=`${e.repo?.name}:${e.type}:${e.created_at?.slice(0,13)}`;return o.has(t)?!1:(o.add(t),!0)}).slice(0,10);n(s),i(s.length?`ready`:`empty`)}catch{t||i(`error`)}}return r(),()=>{t=!0}},[e]),r===`no-user`?(0,F.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-[inherit] bg-card p-6 text-center`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-foreground`,children:`GitHub Activity`}),(0,F.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Set a GitHub username in Settings → Content → Feature Panel.`})]})}):r===`loading`?(0,F.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-[inherit] bg-card`,children:(0,F.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Loading GitHub activity…`})}):(0,F.jsxs)(`div`,{className:`flex h-full w-full flex-col rounded-[inherit] bg-card`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-border/50 px-4 py-2.5`,children:[(0,F.jsx)(`span`,{children:`🐙`}),(0,F.jsxs)(`p`,{className:`text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground`,children:[`GitHub ·`,` `,(0,F.jsx)(`a`,{href:`https://github.com/${e}`,target:`_blank`,rel:`noreferrer`,className:`text-foreground transition-colors hover:text-primary`,children:e})]})]}),(0,F.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:t.length===0?(0,F.jsx)(`div`,{className:`flex h-full items-center justify-center`,children:(0,F.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`No recent public activity.`})}):(0,F.jsx)(`div`,{className:`divide-y divide-border/30`,children:t.map(e=>{let{icon:t,text:n}=vo(e),r=e.repo?.name?.split(`/`)?.[1]||e.repo?.name;return(0,F.jsxs)(`a`,{href:`https://github.com/${e.repo?.name}`,target:`_blank`,rel:`noreferrer`,className:`flex items-start gap-3 px-4 py-2.5 transition-colors hover:bg-accent/30`,children:[(0,F.jsx)(`span`,{className:`mt-0.5 shrink-0`,children:t}),(0,F.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`truncate text-xs font-medium text-foreground`,children:r}),(0,F.jsx)(`span`,{className:`shrink-0 text-[10px] text-muted-foreground`,children:_o(e.created_at)})]}),(0,F.jsx)(`p`,{className:`mt-0.5 truncate text-[11px] text-muted-foreground`,children:n})]})]},e.id)})})})]})}var bo=`user-read-currently-playing user-read-playback-state user-modify-playback-state`,xo=`sp_access_token`,So=`sp_refresh_token`,Co=`sp_token_expiry`,wo=`sp_code_verifier`;function To(){return`${window.location.origin.replace(/^(https?:\/\/)localhost\b/,`$1127.0.0.1`)}${window.location.pathname}`}function Eo(){let e=new Uint8Array(64);return crypto.getRandomValues(e),btoa(String.fromCharCode(...e)).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}async function Do(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}async function Oo(e){let t=Eo();localStorage.setItem(wo,t);let n=new URLSearchParams({client_id:e,response_type:`code`,redirect_uri:To(),scope:bo,code_challenge_method:`S256`,code_challenge:await Do(t)});window.location.href=`https://accounts.spotify.com/authorize?${n}`}async function ko(e,t){let n=localStorage.getItem(wo);if(!n)throw Error(`No verifier`);let r=await fetch(`https://accounts.spotify.com/api/token`,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:new URLSearchParams({client_id:e,grant_type:`authorization_code`,code:t,redirect_uri:To(),code_verifier:n})});if(!r.ok)throw Error(`Exchange failed`);return r.json()}async function Ao(e){let t=localStorage.getItem(So);if(!t)throw Error(`No refresh token`);let n=await fetch(`https://accounts.spotify.com/api/token`,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:new URLSearchParams({client_id:e,grant_type:`refresh_token`,refresh_token:t})});if(!n.ok)throw Error(`Refresh failed`);return n.json()}function jo(e){localStorage.setItem(xo,e.access_token),e.refresh_token&&localStorage.setItem(So,e.refresh_token),localStorage.setItem(Co,String(Date.now()+e.expires_in*1e3)),localStorage.removeItem(wo)}function Mo(){let e=localStorage.getItem(xo),t=Number(localStorage.getItem(Co)||0);return e&&Date.now()<t-6e4?e:null}function No(){[xo,So,Co,wo].forEach(e=>localStorage.removeItem(e))}async function Po(e){let t=Mo();if(t)return t;let n=await Ao(e);return jo(n),n.access_token}async function Fo(e,t,n={}){let r=await Po(e),i=await fetch(`https://api.spotify.com/v1${t}`,{...n,headers:{Authorization:`Bearer ${r}`,...n.headers}});if(i.status===401)throw No(),Error(`Unauthorized`);return i}function Io(e){let t=Math.floor(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function Lo(){let e=A.useMemo(()=>g(),[]).featurePanel?.spotifyClientId,[t,n]=A.useState(null),[r,i]=A.useState(`init`),[a,o]=A.useState(0),s=A.useRef(null);A.useEffect(()=>{if(!e){i(`no-client`);return}let t=new URLSearchParams(window.location.search),n=t.get(`code`);if(t.get(`error`)){window.history.replaceState({},``,window.location.pathname),i(`no-auth`);return}if(n){window.history.replaceState({},``,window.location.pathname),ko(e,n).then(e=>{jo(e),i(`poll`)}).catch(()=>i(`no-auth`));return}i(Mo()||localStorage.getItem(So)?`poll`:`no-auth`)},[e]),A.useEffect(()=>{if(!e||![`poll`,`playing`,`paused`,`idle`].includes(r))return;let t=!1;async function a(){try{let r=await Fo(e,`/me/player/currently-playing`);if(t)return;if(r.status===204){n(null),i(`idle`);return}if(!r.ok)throw Error(`Player error`);let a=await r.json();if(!a?.item){n(null),i(`idle`);return}n(a),o(a.progress_ms),i(a.is_playing?`playing`:`paused`)}catch(e){t||i(e.message===`Unauthorized`?`no-auth`:`error`)}}a();let s=setInterval(a,5e3);return()=>{t=!0,clearInterval(s)}},[e,r]),A.useEffect(()=>{if(clearInterval(s.current),!(r!==`playing`||!t))return s.current=setInterval(()=>{o(e=>Math.min(e+1e3,t.item.duration_ms))},1e3),()=>clearInterval(s.current)},[r,t?.item?.id]);let c=A.useCallback(async t=>{if(e)try{t===`play`?await Fo(e,`/me/player/play`,{method:`PUT`}):t===`pause`?await Fo(e,`/me/player/pause`,{method:`PUT`}):t===`next`?await Fo(e,`/me/player/next`,{method:`POST`}):t===`prev`&&await Fo(e,`/me/player/previous`,{method:`POST`}),setTimeout(async()=>{try{let t=await Fo(e,`/me/player/currently-playing`);if(t.ok&&t.status!==204){let e=await t.json();e?.item&&(n(e),o(e.progress_ms),i(e.is_playing?`playing`:`paused`))}}catch{}},600)}catch{}},[e]);if(r===`no-client`)return(0,F.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-[inherit] bg-card p-6 text-center`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`text-4xl`,children:`🎵`}),(0,F.jsx)(`p`,{className:`mt-2 text-sm font-semibold text-foreground`,children:`Spotify Now Playing`}),(0,F.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Add your Spotify App Client ID in Settings → Content → Feature Panel.`})]})});if(r===`no-auth`||r===`init`){let t=To();return(0,F.jsxs)(`div`,{className:`flex h-full w-full flex-col items-center justify-center gap-5 rounded-[inherit] bg-[linear-gradient(135deg,color-mix(in_oklab,#1DB954_8%,var(--color-card)),var(--color-card))] p-6 text-center`,children:[(0,F.jsx)(`div`,{className:`text-5xl`,children:`🎵`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-base font-semibold text-foreground`,children:`Spotify Now Playing`}),(0,F.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Connect your Spotify account to see what's playing.`})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>Oo(e),className:`rounded-full bg-[#1DB954] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-[#1ed760] hover:scale-105`,children:`Connect Spotify`}),(0,F.jsxs)(`div`,{className:`w-full rounded-lg border border-border/40 bg-black/20 px-3 py-2 text-left`,children:[(0,F.jsx)(`p`,{className:`mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/40`,children:`Add this exact URI to your Spotify app`}),(0,F.jsx)(`p`,{className:`break-all font-mono text-[10px] text-white/70`,children:t})]})]})}if(r===`idle`||!t)return(0,F.jsxs)(`div`,{className:`flex h-full w-full flex-col items-center justify-center gap-3 rounded-[inherit] bg-card p-4 text-center`,children:[(0,F.jsx)(`div`,{className:`text-4xl`,children:`🎵`}),(0,F.jsx)(`p`,{className:`text-sm font-medium text-foreground`,children:`Nothing playing`}),(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Open Spotify and start playing something.`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{No(),i(`no-auth`)},className:`mt-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground`,children:`Disconnect`})]});if(r===`error`)return(0,F.jsxs)(`div`,{className:`flex h-full w-full flex-col items-center justify-center gap-2 rounded-[inherit] bg-card p-4 text-center`,children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-foreground`,children:`Connection error`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{No(),i(`no-auth`)},className:`text-xs text-primary hover:underline`,children:`Reconnect`})]});let l=t.item,u=l.album?.images?.[0]?.url,d=l.artists?.map(e=>e.name).join(`, `),f=l.duration_ms,p=f?a/f*100:0,m=r===`playing`;return(0,F.jsxs)(`div`,{className:`relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]`,children:[u&&(0,F.jsx)(`img`,{src:u,alt:`Album art`,className:`absolute inset-0 h-full w-full object-cover`}),(0,F.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/20`}),(0,F.jsxs)(`div`,{className:`relative flex flex-1 flex-col justify-end gap-3 p-5`,children:[(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsx)(`p`,{className:`truncate text-base font-bold text-white drop-shadow`,children:l.name}),(0,F.jsx)(`p`,{className:`truncate text-sm text-white/75`,children:d}),(0,F.jsx)(`p`,{className:`truncate text-xs text-white/50`,children:l.album?.name})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`mb-1 h-1 w-full overflow-hidden rounded-full bg-white/20`,children:(0,F.jsx)(`div`,{className:`h-full rounded-full bg-[#1DB954]`,style:{width:`${p}%`}})}),(0,F.jsxs)(`div`,{className:`flex justify-between text-[10px] text-white/50`,children:[(0,F.jsx)(`span`,{children:Io(a)}),(0,F.jsx)(`span`,{children:Io(f)})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-center gap-7`,children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>c(`prev`),"aria-label":`Previous`,className:`text-white/75 transition hover:text-white hover:scale-110`,children:(0,F.jsx)(Ge,{className:`size-6`})}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>c(m?`pause`:`play`),"aria-label":m?`Pause`:`Play`,className:`text-white transition hover:scale-110`,children:m?(0,F.jsx)(Ie,{className:`size-9`}):(0,F.jsx)(Pe,{className:`size-9`})}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>c(`next`),"aria-label":`Next`,className:`text-white/75 transition hover:text-white hover:scale-110`,children:(0,F.jsx)(ze,{className:`size-6`})})]})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{No(),i(`no-auth`)},className:`absolute right-2 top-2 rounded-full bg-black/30 px-2 py-0.5 text-[9px] text-white/40 backdrop-blur-sm transition hover:text-white/80`,children:`disconnect`})]})}var Ro=[{key:`windy`,label:`Windy`},{key:`headlines`,label:`Headlines`},{key:`airQuality`,label:`Air Quality`},{key:`timer`,label:`Timer`},{key:`wikipedia`,label:`Wikipedia`},{key:`rss`,label:`RSS`},{key:`github`,label:`GitHub`},{key:`spotify`,label:`Spotify`},{key:`unsplash`,label:`Unsplash`}];function zo({mode:e,settings:t}){return e===`windy`?(0,F.jsx)(Dt,{cardClass:`h-full w-full overflow-hidden rounded-[inherit]`}):e===`timer`?(0,F.jsx)(Tt,{}):e===`unsplash`?(0,F.jsx)(Ga,{search:t.unsplash.unsplashBox6,cardClass:`relative overflow-hidden h-full w-full bg-center bg-no-repeat rounded-[inherit]`}):e===`airQuality`?(0,F.jsx)(Ja,{}):e===`wikipedia`?(0,F.jsx)(mo,{}):e===`rss`?(0,F.jsx)(go,{}):e===`github`?(0,F.jsx)(yo,{}):e===`spotify`?(0,F.jsx)(Lo,{}):(0,F.jsx)(St,{})}function Bo(){let e=A.useMemo(()=>g(),[]),{selectedDay:t,setSelectedDay:n}=po(),r=e.featurePanel?.enabledModes,i=r?.length?Ro.filter(e=>r.includes(e.key)):Ro,a=e.featurePanel?.mode,o=i.some(e=>e.key===a)?a:i[0].key,[s,c]=A.useState(o),l=i.findIndex(e=>e.key===s),u=l>=0?l:0,d=e=>{let t=i[(u+e+i.length)%i.length].key;c(t);let n=g();p({...n,featurePanel:{...n.featurePanel,mode:t}})};return(0,F.jsx)(`div`,{className:`relative h-full w-full overflow-visible rounded-[inherit]`,children:t?(0,F.jsx)(fo,{day:t.day,unit:t.unit,mode:t.mode,onClose:()=>n(null)}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:`h-full w-full overflow-hidden rounded-[inherit]`,children:i.map(t=>(0,F.jsx)(`div`,{className:`h-full w-full`,style:{display:t.key===s?`block`:`none`},children:(0,F.jsx)(zo,{mode:t.key,settings:e})},t.key))}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>d(-1),className:`absolute -left-3 top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/92 text-foreground shadow-md backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground`,"aria-label":`Previous feature`,children:(0,F.jsx)(He,{className:`size-3.5`})}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>d(1),className:`absolute -right-3 top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/92 text-foreground shadow-md backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground`,"aria-label":`Next feature`,children:(0,F.jsx)(Ve,{className:`size-3.5`})}),(0,F.jsx)(`div`,{className:`absolute inset-x-0 -bottom-4 z-10 flex items-center justify-center gap-1.5`,children:i.map((e,t)=>(0,F.jsx)(`button`,{type:`button`,onClick:()=>d(t-u),className:`size-1.5 rounded-full transition ${t===u?`bg-foreground shadow-sm`:`bg-border hover:bg-muted-foreground`}`,"aria-label":`Show ${e.label}`},e.key))})]})})}function Vo(e){return P({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function Ho(e){return P({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z`},child:[]}]})(e)}function Uo(e){return P({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function Wo(e){return P({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z`},child:[]}]})(e)}function Go(e){return P({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z`},child:[]}]})(e)}function Ko(e){return P({tag:`svg`,attr:{viewBox:`0 0 488 512`},child:[{tag:`path`,attr:{d:`M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z`},child:[]}]})(e)}function qo(e){return P({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`},child:[]}]})(e)}function Jo(e){return P({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z`},child:[]}]})(e)}function Yo(e){return P({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z`},child:[]}]})(e)}function Xo(e){return P({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function Zo(e){return P({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M15.74 10.7c-.53-1.53.14-4 .14-4S13.6 8.01 11.93 8 8.13 6.7 8.13 6.7s.56 2.46.07 4.04c-.48 1.58-2.47 3.34-2.47 3.34s2.58.23 3.85 1.1S12 18.64 12 18.64s.78-2.35 2.32-3.41c1.54-1.07 3.96-1.15 3.96-1.15s-2-1.84-2.54-3.37zm-2 3.69c-1.09.81-1.75 2.19-1.75 2.19s-.76-1.43-1.8-2.22c-1.05-.79-2.57-.97-2.57-.97a5.06 5.06 0 0 0 1.53-2.37c.46-1.54.18-2.73.18-2.73s.92.7 2.62.7c1.7 0 2.79-.7 2.79-.7s-.38 1.58.07 2.7c.44 1.14 1.57 2.41 1.57 2.41s-1.56.17-2.64.99zM13.73 9.6s-.95.38-1.77.37c-.82 0-1.7-.37-1.7-.37.05.58 0 1.15-.17 1.7-.27.86-.91 1.64-.91 1.64A4.23 4.23 0 0 1 12 14.95s.45-.85 1.18-1.33c.5-.31 1.05-.55 1.63-.7 0 0-.74-.78-1.02-1.57-.28-.78-.06-1.75-.06-1.75zM20.1 12l3.31-3.7-4.85-1.07.5-4.94-4.56 2L12 0 9.5 4.29l-4.55-2 .49 4.95L.59 8.29 3.89 12 .6 15.7l4.85 1.07-.5 4.94 4.55-2L12 24l2.5-4.29 4.56 2-.5-4.94 4.85-1.06-3.3-3.71zm-5.27 3.95C14 16.56 12 20.81 12 20.81S10.5 16.95 9 15.95c-1.48-1-5.38-1.22-5.38-1.22s2.99-2.37 3.57-4.47c.59-2.1-.37-5.37-.37-5.37s2.9 2.1 5.08 2.1c2.17 0 5.26-2.1 5.26-2.1s-.82 4.5-.53 5.46c.3.96 3.73 4.38 3.73 4.38s-4.7.62-5.54 1.22z`},child:[]}]})(e)}function Qo(e){return P({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z`},child:[]}]})(e)}function $o(e){return P({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z`},child:[]}]})(e)}function es(e){return P({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M15.68 0l2.096 2.38s1.84-.512 2.709.358c.868.87 1.584 1.638 1.584 1.638l-.562 1.381.715 2.047s-2.104 7.98-2.35 8.955c-.486 1.919-.818 2.66-2.198 3.633-1.38.972-3.884 2.66-4.293 2.916-.409.256-.92.692-1.38.692-.46 0-.97-.436-1.38-.692a185.796 185.796 0 01-4.293-2.916c-1.38-.973-1.712-1.714-2.197-3.633-.247-.975-2.351-8.955-2.351-8.955l.715-2.047-.562-1.381s.716-.768 1.585-1.638c.868-.87 2.708-.358 2.708-.358L8.321 0h7.36zm-3.679 14.936c-.14 0-1.038.317-1.758.69-.72.373-1.242.637-1.409.742-.167.104-.065.301.087.409.152.107 2.194 1.69 2.393 1.866.198.175.489.464.687.464.198 0 .49-.29.688-.464.198-.175 2.24-1.759 2.392-1.866.152-.108.254-.305.087-.41-.167-.104-.689-.368-1.41-.741-.72-.373-1.617-.69-1.757-.69zm0-11.278s-.409.001-1.022.206-1.278.46-1.584.46c-.307 0-2.581-.434-2.581-.434S4.119 7.152 4.119 7.849c0 .697.339.881.68 1.243l2.02 2.149c.192.203.59.511.356 1.066-.235.555-.58 1.26-.196 1.977.384.716 1.042 1.194 1.464 1.115.421-.08 1.412-.598 1.776-.834.364-.237 1.518-1.19 1.518-1.554 0-.365-1.193-1.02-1.413-1.168-.22-.15-1.226-.725-1.247-.95-.02-.227-.012-.293.284-.851.297-.559.831-1.304.742-1.8-.089-.495-.95-.753-1.565-.986-.615-.232-1.799-.671-1.947-.74-.148-.068-.11-.133.339-.175.448-.043 1.719-.212 2.292-.052.573.16 1.552.403 1.632.532.079.13.149.134.067.579-.081.445-.5 2.581-.541 2.96-.04.38-.12.63.288.724.409.094 1.097.256 1.333.256s.924-.162 1.333-.256c.408-.093.329-.344.288-.723-.04-.38-.46-2.516-.541-2.961-.082-.445-.012-.45.067-.579.08-.129 1.059-.372 1.632-.532.573-.16 1.845.009 2.292.052.449.042.487.107.339.175-.148.069-1.332.508-1.947.74-.615.233-1.476.49-1.565.986-.09.496.445 1.241.742 1.8.297.558.304.624.284.85-.02.226-1.026.802-1.247.95-.22.15-1.413.804-1.413 1.169 0 .364 1.154 1.317 1.518 1.554.364.236 1.355.755 1.776.834.422.079 1.08-.4 1.464-1.115.384-.716.039-1.422-.195-1.977-.235-.555.163-.863.355-1.066l2.02-2.149c.341-.362.68-.546.68-1.243 0-.697-2.695-3.96-2.695-3.96s-2.274.436-2.58.436c-.307 0-.972-.256-1.585-.461-.613-.205-1.022-.206-1.022-.206z`},child:[]}]})(e)}var ts={google:Ko,duckduckgo:$o,youtube:Vo,wikipedia:Ho,brave:es,perplexity:Qo,stackoverflow:Wo,wolfram:Zo,reddit:Go,github:qo,amazon:Jo,twitter:Uo,globe:Xo,search:Yo},ns=[{key:`search`,label:`Search (generic)`},{key:`globe`,label:`Globe (generic)`},{key:`google`,label:`Google`},{key:`duckduckgo`,label:`DuckDuckGo`},{key:`youtube`,label:`YouTube`},{key:`wikipedia`,label:`Wikipedia`},{key:`brave`,label:`Brave`},{key:`perplexity`,label:`Perplexity`},{key:`stackoverflow`,label:`Stack Overflow`},{key:`wolfram`,label:`Wolfram Alpha`},{key:`reddit`,label:`Reddit`},{key:`github`,label:`GitHub`},{key:`amazon`,label:`Amazon`},{key:`twitter`,label:`X / Twitter`}],rs=[{id:`google`,name:`Google`,url:`https://www.google.com/search?q=`,icon:`google`},{id:`duckduckgo`,name:`DuckDuckGo`,url:`https://duckduckgo.com/?q=`,icon:`duckduckgo`},{id:`youtube`,name:`YouTube`,url:`https://www.youtube.com/results?search_query=`,icon:`youtube`},{id:`wikipedia`,name:`Wikipedia`,url:`https://en.wikipedia.org/w/index.php?search=`,icon:`wikipedia`}];function is(e){return e&&ts[e]||ts.search}function as(e){if(!Array.isArray(e))return rs;let t=e.filter(e=>!!e&&typeof e==`object`).map((e,t)=>({id:String(e.id||`engine-${t}`),name:String(e.name||``).trim()||`Search`,url:String(e.url||``).trim(),icon:String(e.icon||`search`)})).filter(e=>e.url!==``);return t.length?t:rs}function os(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=os(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function ss(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=os(e))&&(r&&(r+=` `),r+=t);return r}var cs=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,ls=ss,us=(e,t)=>n=>{if(t?.variants==null)return ls(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=cs(t)||cs(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return ls(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},ds=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},fs=(e,t)=>({classGroupId:e,validator:t}),ps=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),ms=`-`,hs=[],gs=`arbitrary..`,_s=e=>{let t=bs(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return ys(e);let n=e.split(ms);return vs(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?ds(i,t):t:i||hs}return n[e]||hs}}},vs=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=vs(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(ms):e.slice(t).join(ms),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},ys=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?gs+r:void 0})(),bs=e=>{let{theme:t,classGroups:n}=e;return xs(n,t)},xs=(e,t)=>{let n=ps();for(let r in e){let i=e[r];Ss(i,n,r,t)}return n},Ss=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Cs(i,t,n,r)}},Cs=(e,t,n,r)=>{if(typeof e==`string`){ws(e,t,n);return}if(typeof e==`function`){Ts(e,t,n,r);return}Es(e,t,n,r)},ws=(e,t,n)=>{let r=e===``?t:Ds(t,e);r.classGroupId=n},Ts=(e,t,n,r)=>{if(Os(e)){Ss(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(fs(n,e))},Es=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Ss(o,Ds(t,a),n,r)}},Ds=(e,t)=>{let n=e,r=t.split(ms),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=ps(),n.nextPart.set(t,i)),n=i}return n},Os=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,ks=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},As=`!`,js=`:`,Ms=[],Ns=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Ps=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===js){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(As)?(c=s.slice(0,-1),l=!0):s.startsWith(As)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Ns(t,l,c,u)};if(t){let e=t+js,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Ns(Ms,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Fs=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Is=e=>({cache:ks(e.cacheSize),parseClassName:Ps(e),sortModifiers:Fs(e),..._s(e)}),Ls=/\s+/,Rs=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Ls),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+As:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},zs=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Bs(n))&&(i&&(i+=` `),i+=r);return i},Bs=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Bs(e[r]))&&(n&&(n+=` `),n+=t);return n},Vs=(e,...t)=>{let n,r,i,a,o=o=>(n=Is(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Rs(e,n);return i(e,a),a};return a=o,(...e)=>a(zs(...e))},Hs=[],K=e=>{let t=t=>t[e]||Hs;return t.isThemeGetter=!0,t},Us=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ws=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Gs=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Ks=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qs=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Js=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ys=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xs=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zs=e=>Gs.test(e),q=e=>!!e&&!Number.isNaN(Number(e)),Qs=e=>!!e&&Number.isInteger(Number(e)),$s=e=>e.endsWith(`%`)&&q(e.slice(0,-1)),ec=e=>Ks.test(e),tc=()=>!0,nc=e=>qs.test(e)&&!Js.test(e),rc=()=>!1,ic=e=>Ys.test(e),ac=e=>Xs.test(e),oc=e=>!J(e)&&!Y(e),sc=e=>Sc(e,Ec,rc),J=e=>Us.test(e),cc=e=>Sc(e,Dc,nc),lc=e=>Sc(e,Oc,q),uc=e=>Sc(e,Ac,tc),dc=e=>Sc(e,kc,rc),fc=e=>Sc(e,wc,rc),pc=e=>Sc(e,Tc,ac),mc=e=>Sc(e,jc,ic),Y=e=>Ws.test(e),hc=e=>Cc(e,Dc),gc=e=>Cc(e,kc),_c=e=>Cc(e,wc),vc=e=>Cc(e,Ec),yc=e=>Cc(e,Tc),bc=e=>Cc(e,jc,!0),xc=e=>Cc(e,Ac,!0),Sc=(e,t,n)=>{let r=Us.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Cc=(e,t,n=!1)=>{let r=Ws.exec(e);return r?r[1]?t(r[1]):n:!1},wc=e=>e===`position`||e===`percentage`,Tc=e=>e===`image`||e===`url`,Ec=e=>e===`length`||e===`size`||e===`bg-size`,Dc=e=>e===`length`,Oc=e=>e===`number`,kc=e=>e===`family-name`,Ac=e=>e===`number`||e===`weight`,jc=e=>e===`shadow`,Mc=Vs(()=>{let e=K(`color`),t=K(`font`),n=K(`text`),r=K(`font-weight`),i=K(`tracking`),a=K(`leading`),o=K(`breakpoint`),s=K(`container`),c=K(`spacing`),l=K(`radius`),u=K(`shadow`),d=K(`inset-shadow`),f=K(`text-shadow`),p=K(`drop-shadow`),m=K(`blur`),h=K(`perspective`),g=K(`aspect`),_=K(`ease`),v=K(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),Y,J],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[Y,J,c],T=()=>[Zs,`full`,`auto`,...w()],ee=()=>[Qs,`none`,`subgrid`,Y,J],E=()=>[`auto`,{span:[`full`,Qs,Y,J]},Qs,Y,J],te=()=>[Qs,`auto`,Y,J],ne=()=>[`auto`,`min`,`max`,`fr`,Y,J],re=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],D=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ie=()=>[`auto`,...w()],ae=()=>[Zs,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],O=()=>[Zs,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],oe=()=>[Zs,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],k=()=>[e,Y,J],se=()=>[...b(),_c,fc,{position:[Y,J]}],ce=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],le=()=>[`auto`,`cover`,`contain`,vc,sc,{size:[Y,J]}],ue=()=>[$s,hc,cc],A=()=>[``,`none`,`full`,l,Y,J],j=()=>[``,q,hc,cc],de=()=>[`solid`,`dashed`,`dotted`,`double`],fe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],M=()=>[q,$s,_c,fc],pe=()=>[``,`none`,m,Y,J],me=()=>[`none`,q,Y,J],he=()=>[`none`,q,Y,J],ge=()=>[q,Y,J],N=()=>[Zs,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[ec],breakpoint:[ec],color:[tc],container:[ec],"drop-shadow":[ec],ease:[`in`,`out`,`in-out`],font:[oc],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[ec],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[ec],shadow:[ec],spacing:[`px`,q],text:[ec],"text-shadow":[ec],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Zs,J,Y,g]}],container:[`container`],columns:[{columns:[q,J,Y,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Qs,`auto`,Y,J]}],basis:[{basis:[Zs,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[q,Zs,`auto`,`initial`,`none`,J]}],grow:[{grow:[``,q,Y,J]}],shrink:[{shrink:[``,q,Y,J]}],order:[{order:[Qs,`first`,`last`,`none`,Y,J]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ne()}],"auto-rows":[{"auto-rows":ne()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...re(),`normal`]}],"justify-items":[{"justify-items":[...D(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...D()]}],"align-content":[{content:[`normal`,...re()]}],"align-items":[{items:[...D(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...D(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...D(),`baseline`]}],"place-self":[{"place-self":[`auto`,...D()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:ie()}],mx:[{mx:ie()}],my:[{my:ie()}],ms:[{ms:ie()}],me:[{me:ie()}],mbs:[{mbs:ie()}],mbe:[{mbe:ie()}],mt:[{mt:ie()}],mr:[{mr:ie()}],mb:[{mb:ie()}],ml:[{ml:ie()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ae()}],"inline-size":[{inline:[`auto`,...O()]}],"min-inline-size":[{"min-inline":[`auto`,...O()]}],"max-inline-size":[{"max-inline":[`none`,...O()]}],"block-size":[{block:[`auto`,...oe()]}],"min-block-size":[{"min-block":[`auto`,...oe()]}],"max-block-size":[{"max-block":[`none`,...oe()]}],w:[{w:[s,`screen`,...ae()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ae()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ae()]}],h:[{h:[`screen`,`lh`,...ae()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ae()]}],"max-h":[{"max-h":[`screen`,`lh`,...ae()]}],"font-size":[{text:[`base`,n,hc,cc]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,xc,uc]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,$s,J]}],"font-family":[{font:[gc,dc,t]}],"font-features":[{"font-features":[J]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Y,J]}],"line-clamp":[{"line-clamp":[q,`none`,Y,lc]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,Y,J]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Y,J]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...de(),`wavy`]}],"text-decoration-thickness":[{decoration:[q,`from-font`,`auto`,Y,cc]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[q,`auto`,Y,J]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Y,J]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Y,J]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:se()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:le()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Qs,Y,J],radial:[``,Y,J],conic:[Qs,Y,J]},yc,pc]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:ue()}],"gradient-via-pos":[{via:ue()}],"gradient-to-pos":[{to:ue()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:j()}],"border-w-x":[{"border-x":j()}],"border-w-y":[{"border-y":j()}],"border-w-s":[{"border-s":j()}],"border-w-e":[{"border-e":j()}],"border-w-bs":[{"border-bs":j()}],"border-w-be":[{"border-be":j()}],"border-w-t":[{"border-t":j()}],"border-w-r":[{"border-r":j()}],"border-w-b":[{"border-b":j()}],"border-w-l":[{"border-l":j()}],"divide-x":[{"divide-x":j()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":j()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...de(),`hidden`,`none`]}],"divide-style":[{divide:[...de(),`hidden`,`none`]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...de(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[q,Y,J]}],"outline-w":[{outline:[``,q,hc,cc]}],"outline-color":[{outline:k()}],shadow:[{shadow:[``,`none`,u,bc,mc]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":[`none`,d,bc,mc]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:j()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[q,cc]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":j()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":[`none`,f,bc,mc]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[q,Y,J]}],"mix-blend":[{"mix-blend":[...fe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[q]}],"mask-image-linear-from-pos":[{"mask-linear-from":M()}],"mask-image-linear-to-pos":[{"mask-linear-to":M()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":M()}],"mask-image-t-to-pos":[{"mask-t-to":M()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":M()}],"mask-image-r-to-pos":[{"mask-r-to":M()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":M()}],"mask-image-b-to-pos":[{"mask-b-to":M()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":M()}],"mask-image-l-to-pos":[{"mask-l-to":M()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":M()}],"mask-image-x-to-pos":[{"mask-x-to":M()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":M()}],"mask-image-y-to-pos":[{"mask-y-to":M()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[Y,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":M()}],"mask-image-radial-to-pos":[{"mask-radial-to":M()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[q]}],"mask-image-conic-from-pos":[{"mask-conic-from":M()}],"mask-image-conic-to-pos":[{"mask-conic-to":M()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:se()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:le()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Y,J]}],filter:[{filter:[``,`none`,Y,J]}],blur:[{blur:pe()}],brightness:[{brightness:[q,Y,J]}],contrast:[{contrast:[q,Y,J]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,bc,mc]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:[``,q,Y,J]}],"hue-rotate":[{"hue-rotate":[q,Y,J]}],invert:[{invert:[``,q,Y,J]}],saturate:[{saturate:[q,Y,J]}],sepia:[{sepia:[``,q,Y,J]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Y,J]}],"backdrop-blur":[{"backdrop-blur":pe()}],"backdrop-brightness":[{"backdrop-brightness":[q,Y,J]}],"backdrop-contrast":[{"backdrop-contrast":[q,Y,J]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,q,Y,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[q,Y,J]}],"backdrop-invert":[{"backdrop-invert":[``,q,Y,J]}],"backdrop-opacity":[{"backdrop-opacity":[q,Y,J]}],"backdrop-saturate":[{"backdrop-saturate":[q,Y,J]}],"backdrop-sepia":[{"backdrop-sepia":[``,q,Y,J]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Y,J]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[q,`initial`,Y,J]}],ease:[{ease:[`linear`,`initial`,_,Y,J]}],delay:[{delay:[q,Y,J]}],animate:[{animate:[`none`,v,Y,J]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Y,J]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":[`scale-3d`],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[Y,J,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:N()}],"translate-x":[{"translate-x":N()}],"translate-y":[{"translate-y":N()}],"translate-z":[{"translate-z":N()}],"translate-none":[`translate-none`],accent:[{accent:k()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Y,J]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Y,J]}],fill:[{fill:[`none`,...k()]}],"stroke-w":[{stroke:[q,hc,cc,lc]}],stroke:[{stroke:[`none`,...k()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function X(...e){return Mc(ss(e))}var Nc=us(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow-sm hover:bg-primary/90`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,outline:`border border-border bg-background hover:bg-accent hover:text-accent-foreground`,ghost:`hover:bg-accent hover:text-accent-foreground`,destructive:`bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`},size:{default:`h-10 px-4 py-2`,sm:`h-9 rounded-md px-3`,lg:`h-11 rounded-md px-8`,icon:`size-10`}},defaultVariants:{variant:`default`,size:`default`}});function Z({className:e,variant:t,size:n,asChild:r=!1,...i}){return(0,F.jsx)(r?S:`button`,{"data-slot":`button`,className:X(Nc({variant:t,size:n,className:e})),...i})}function Pc({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`card`,className:X(`rounded-xl border border-border/60 bg-card text-card-foreground shadow-sm`,e),...t})}function Fc({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`card-header`,className:X(`flex flex-col gap-1.5 p-6`,e),...t})}function Ic({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`card-title`,className:X(`font-semibold leading-none tracking-tight`,e),...t})}function Lc({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`card-description`,className:X(`text-sm text-muted-foreground`,e),...t})}function Rc({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`card-content`,className:X(`p-6 pt-0`,e),...t})}function zc(e){return(0,F.jsx)(b,{"data-slot":`dialog`,...e})}function Bc(e){return(0,F.jsx)(ue,{"data-slot":`dialog-trigger`,...e})}function Vc(e){return(0,F.jsx)(ee,{"data-slot":`dialog-portal`,...e})}function Hc({className:e,...t}){return(0,F.jsx)(E,{"data-slot":`dialog-overlay`,className:X(`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out`,e),...t})}function Uc({className:e,children:t,showCloseButton:n=!0,...r}){return(0,F.jsxs)(Vc,{children:[(0,F.jsx)(Hc,{}),(0,F.jsxs)(ae,{"data-slot":`dialog-content`,className:X(`fixed top-[50%] left-[50%] z-50 grid w-[min(96vw,1120px)] max-h-[92vh] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-hidden rounded-2xl border border-border/70 bg-background p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out`,e),...r,children:[t,n&&(0,F.jsxs)(T,{className:`absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground`,children:[(0,F.jsx)(Je,{className:`size-4`}),(0,F.jsx)(`span`,{className:`sr-only`,children:`Close`})]})]})]})}function Wc({className:e,...t}){return(0,F.jsx)(`div`,{"data-slot":`dialog-header`,className:X(`flex flex-col gap-2`,e),...t})}function Gc({className:e,...t}){return(0,F.jsx)(ce,{"data-slot":`dialog-title`,className:X(`text-xl font-semibold leading-none tracking-tight`,e),...t})}function Kc({className:e,...t}){return(0,F.jsx)(re,{"data-slot":`dialog-description`,className:X(`text-sm text-muted-foreground`,e),...t})}function Q({className:e,type:t,...n}){return(0,F.jsx)(`input`,{type:t,"data-slot":`input`,className:X(`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50`,e),...n})}function qc({className:e,...t}){return(0,F.jsx)(w,{"data-slot":`label`,className:X(`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,e),...t})}function Jc({className:e,...t}){return(0,F.jsxs)(C,{"data-slot":`slider`,className:X(`relative flex w-full touch-none select-none items-center`,e),...t,children:[(0,F.jsx)(se,{"data-slot":`slider-track`,className:`relative h-2 w-full grow overflow-hidden rounded-full bg-muted`,children:(0,F.jsx)(oe,{"data-slot":`slider-range`,className:`absolute h-full bg-primary`})}),(0,F.jsx)(ne,{"data-slot":`slider-thumb`,className:`block size-4 rounded-full border border-primary/40 bg-background shadow transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring/50`})]})}function Yc({className:e,...t}){return(0,F.jsx)(x,{"data-slot":`switch`,className:X(`peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent bg-input shadow-xs transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted`,e),...t,children:(0,F.jsx)(ie,{"data-slot":`switch-thumb`,className:`pointer-events-none block size-5 rounded-full bg-background shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0`})})}function Xc({className:e,...t}){return(0,F.jsx)(O,{"data-slot":`tabs`,className:X(`flex gap-6`,e),...t})}function Zc({className:e,...t}){return(0,F.jsx)(D,{"data-slot":`tabs-list`,className:X(`inline-flex h-auto flex-col gap-2 rounded-xl bg-sidebar p-2 text-sidebar-foreground`,e),...t})}function Qc({className:e,...t}){return(0,F.jsx)(te,{"data-slot":`tabs-trigger`,className:X(`inline-flex items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=active]:bg-sidebar-accent data-[state=active]:text-sidebar-accent-foreground`,e),...t})}function $c({className:e,...t}){return(0,F.jsx)(k,{"data-slot":`tabs-content`,className:X(`flex-1 outline-none`,e),...t})}var el=[{id:`videoTall`,label:`Tall media tile`},{id:`videoSmall`,label:`Small media tile`},{id:`search`,label:`Search box`},{id:`weather`,label:`Weather`},{id:`featurePanel`,label:`Feature panel`},{id:`solarGraph`,label:`Solar graph`},{id:`vaultPreview`,label:`Vault preview`},{id:`clock`,label:`Clock`},{id:`bookmark1`,label:`Bookmark box 1`},{id:`bookmark2`,label:`Bookmark box 2`},{id:`bookmark3`,label:`Bookmark box 3`},{id:`bookmark4`,label:`Bookmark box 4`},{id:`bookmark5`,label:`Bookmark box 5`},{id:`unsplash1`,label:`Photo tile 1`},{id:`unsplash2`,label:`Photo tile 2`},{id:`unsplash3`,label:`Photo tile 3`},{id:`unsplash4`,label:`Photo tile 4`},{id:`unsplash5`,label:`Photo tile 5`},{id:`unsplash6`,label:`Photo tile 6`}],tl=[{value:`appearance`,label:`Appearance`,icon:Ye},{value:`layout`,label:`Layout`,icon:Xe},{value:`content`,label:`Content`,icon:Ze}];function nl({swatches:e,mode:t}){let n=t===`dark`?e.dark:e.light;return(0,F.jsx)(`div`,{className:`mb-2 flex h-12 items-center justify-center gap-1.5 rounded-md border border-border/40 bg-muted/30`,children:[`background`,`card`,`primary`,`accent`,`muted`].map(e=>(0,F.jsx)(`div`,{className:`size-5 rounded-full border border-border/60 shadow-sm`,style:{backgroundColor:n[e]},title:e},e))})}function $({label:e,description:t,children:n}){return(0,F.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,F.jsx)(qc,{className:`text-xs font-medium text-foreground`,children:e}),n,t?(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:t}):null]})}function rl({label:e,value:t,min:n,max:r,step:i,onChange:a}){return(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,F.jsx)(qc,{className:`text-xs text-foreground`,children:e}),(0,F.jsx)(`span`,{className:`text-xs font-medium text-muted-foreground`,children:Number(t).toFixed(i>=1?0:2)})]}),(0,F.jsx)(Jc,{value:[Number(t)],min:n,max:r,step:i,onValueChange:e=>a(e[0])})]})}function il({selected:e,title:t,description:n,onClick:r}){return(0,F.jsxs)(`button`,{type:`button`,onClick:r,className:X(`rounded-md border p-2.5 text-left text-xs transition`,e?`border-primary bg-accent text-accent-foreground shadow-sm`:`border-border bg-card hover:bg-accent/50`),children:[(0,F.jsx)(`div`,{className:`font-medium leading-tight`,children:t}),(0,F.jsx)(`div`,{className:`mt-0.5 text-[11px] leading-snug text-muted-foreground`,children:n})]})}function al(){let e=N(e=>e.settings),t=N(e=>e.reloadSettings),n=N(e=>e.persistSettings),{theme:r,themeMode:i,setThemeMode:a,themePalette:o,setThemePalette:s,setCustomThemeVars:c}=(0,A.useContext)(lt),[l,u]=(0,A.useState)(!1),[d,p]=(0,A.useState)(e),[m,g]=(0,A.useState)(null),[b,x]=(0,A.useState)(``),[S,C]=(0,A.useState)(``),[w,T]=(0,A.useState)(``),[ee,E]=(0,A.useState)(``),te=A.useRef(null),[ne,re]=(0,A.useState)({}),D=A.useCallback(async()=>{g(await _())},[]);A.useEffect(()=>{D()},[D]);let ie=()=>{let e=t();p(e),a(e.ui.themeMode),s(e.ui.themePalette||`zen`),D(),u(!0)},ae=e=>{if(e){u(!0);return}let n=t();p(n),a(n.ui.themeMode),s(n.ui.themePalette||`zen`),u(!1)},O=e=>{p(t=>e(t))},oe=(e,t)=>{O(n=>({...n,[e]:t}))},k=(e,t)=>{O(n=>({...n,ui:{...n.ui,[e]:t}}))},se=(e,t)=>{O(n=>({...n,news:{...n.news,[e]:t}}))},ce=(e,t)=>{O(n=>({...n,timer:{...n.timer,[e]:t}}))},le=e=>e?.urls?.length?e.urls:[``],ue=(e,t)=>{p(n=>{let r=n.decorativeVideo||{},i=[...le(r)];return i[e]=t,{...n,decorativeVideo:{...r,urls:i.slice(0,10),zoom:r.zoom??r.tall?.zoom??1.6,offsetX:r.offsetX??r.tall?.offsetX??0,offsetY:r.offsetY??r.tall?.offsetY??0}}})},j=()=>{p(e=>{let t=e.decorativeVideo||{},n=le(t);return{...e,decorativeVideo:{...t,urls:[...n,``].slice(0,10)}}})},de=e=>{p(t=>{let n=t.decorativeVideo||{},r=le(n).filter((t,n)=>n!==e);return{...t,decorativeVideo:{...n,urls:r.length?r:[``]}}})},fe=(e,t)=>{p(n=>{let r=n.decorativeVideo||{};return{...n,decorativeVideo:{...r,urls:le(r).slice(0,10),zoom:r.zoom??r.tall?.zoom??1.6,offsetX:r.offsetX??r.tall?.offsetX??0,offsetY:r.offsetY??r.tall?.offsetY??0,[e]:t}}})},M=e=>{k(`themeMode`,e),a(e)},pe=(e,t)=>{k(`themePalette`,e),s(e),c(t||null)},me=()=>{E(``);let e=S.trim();if(!e){E(`Please enter a theme name.`);return}try{let t=it(w),n={id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:e,light:t.light,dark:t.dark};O(e=>({...e,customThemes:[...e.customThemes||[],n]})),C(``),T(``)}catch(e){E(e.message)}},he=e=>{O(t=>({...t,customThemes:(t.customThemes||[]).filter(t=>t.id!==e)})),d.ui?.themePalette===e&&pe(`zen`,null)},ge=(e,t)=>{O(n=>({...n,ui:{...n.ui,imageEffects:{enabledFilters:{...Na.enabledFilters,...n.ui?.imageEffects?.enabledFilters,[e]:t},filterSettings:{...Na.filterSettings,...n.ui?.imageEffects?.filterSettings}}}}))},_e=(e,t,n)=>{O(r=>({...r,ui:{...r.ui,imageEffects:{enabledFilters:{...Na.enabledFilters,...r.ui?.imageEffects?.enabledFilters},filterSettings:{...Na.filterSettings,...r.ui?.imageEffects?.filterSettings,[e]:{...Na.filterSettings[e],...r.ui?.imageEffects?.filterSettings?.[e],[t]:n}}}}}))},ve=(e,t)=>{O(n=>({...n,ui:{...n.ui,imageEffects:{enabledFilters:{...Na.enabledFilters,...n.ui?.imageEffects?.enabledFilters},filterSettings:{...Na.filterSettings,...n.ui?.imageEffects?.filterSettings,[e]:{...t.params}}}}}))},ye=(e,t)=>{O(n=>({...n,layout:{...n.layout,hiddenBoxes:{...n.layout.hiddenBoxes,[e]:!t}}}))},be=e=>{let t=(ne[e]||``).trim();t&&(O(n=>({...n,unsplash:{...n.unsplash,[e]:[...n.unsplash[e]||[],t]}})),re(t=>({...t,[e]:``})))},xe=(e,t)=>{O(n=>({...n,unsplash:{...n.unsplash,[e]:n.unsplash[e].filter((e,n)=>n!==t)}}))},Se=(e,t)=>{O(n=>({...n,featurePanel:{...n.featurePanel,[e]:t}}))},Ce=(e,t)=>{O(n=>{let r=n.featurePanel?.enabledModes??Ro.map(e=>e.key),i=t?[...r,e]:r.filter(t=>t!==e);return{...n,featurePanel:{...n.featurePanel,enabledModes:i}}})},we=e=>Array.isArray(e.search?.engines)&&e.search.engines.length?e.search.engines:rs,Te=(e,t,n)=>{O(r=>{let i=we(r).map((r,i)=>i===e?{...r,[t]:n}:r);return{...r,search:{...r.search,engines:i}}})},Ee=()=>{O(e=>{let t=[...we(e),{id:`engine-${Date.now()}`,name:``,url:``,icon:`search`}];return{...e,search:{...e.search,engines:t}}})},De=e=>{O(t=>{let n=we(t).filter((t,n)=>n!==e);return{...t,search:{...t.search,engines:n}}})},Oe=(e,t)=>{O(n=>{let r=[...we(n)],i=e+t;return i<0||i>=r.length?n:([r[e],r[i]]=[r[i],r[e]],{...n,search:{...n.search,engines:r}})})},P=(e,t)=>{O(n=>{let r=[...n.bookmark];return r[e]={...r[e],title:t},{...n,bookmark:r}})},ke=()=>{O(e=>({...e,bookmark:[...Array.isArray(e.bookmark)?e.bookmark:[],{title:`bookmark category ${(e.bookmark||[]).length+1}`,content:[]}]}))},Ae=e=>{O(t=>{let n=(Array.isArray(t.bookmark)?t.bookmark:[]).filter((t,n)=>n!==e),r=(t.layout?.bookmarkBoxCategories||[0,1,2,3,4]).map((t,r)=>t===e?Math.min(r,Math.max(n.length-1,0)):t>e?t-1:t);return{...t,bookmark:n,layout:{...t.layout,bookmarkBoxCategories:r}}})},je=(e,t)=>{O(n=>{let r=[...n.layout?.bookmarkBoxCategories||[0,1,2,3,4]];return r[e]=Number(t),{...n,layout:{...n.layout,bookmarkBoxCategories:r}}})},Me=(e,t,n,r)=>{O(i=>{let a=[...i.bookmark],o=[...a[e].content];return o[t]={...o[t],[n]:r},a[e]={...a[e],content:o},{...i,bookmark:a}})},Ne=e=>{O(t=>{let n=[...t.bookmark];return n[e]={...n[e],content:[...n[e].content,{name:``,url:``}]},{...t,bookmark:n}})},Pe=(e,t)=>{O(n=>{let r=[...n.bookmark];return r[e]={...r[e],content:r[e].content.filter((e,n)=>n!==t)},{...n,bookmark:r}})},Fe=async()=>{let e=await v();N.setState({settings:e.settings}),p(e.settings),a(e.settings.ui.themeMode),s(e.settings.ui.themePalette||`zen`),c(null),x(`Settings reset and backup history refreshed.`),await D()},Ie=async()=>{await n(d),a(d.ui.themeMode),s(d.ui.themePalette||`zen`),x(`Saved settings at ${new Date().toLocaleString()}.`),await D(),u(!1),window.location.reload()},Le=()=>{let e=h(d),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=y(),n.click(),URL.revokeObjectURL(t),x(`Backup exported with metadata and schema version.`)},Re=()=>{te.current?.click()},ze=async e=>{let t=e.target.files?.[0];if(t){try{let e=await f(t);N.setState({settings:e.settings}),p(e.settings),a(e.settings.ui.themeMode),s(e.settings.ui.themePalette||`zen`),x(e.metadata.exportedAt?`Backup imported successfully. Original export: ${new Date(e.metadata.exportedAt).toLocaleString()}.`:`Backup imported successfully.`),await D()}catch(e){x(e instanceof Error?e.message:`Backup import failed.`)}e.target.value=``}},Be=d.ui?.themeMode||i,Ve=d.ui?.themePalette||o,He=d.ui?.gridDensity||`comfortable`,Ue=d.ui?.cardStyle||`rounded`,We=d.ui?.imageEffects||Na;return(0,F.jsxs)(zc,{open:l,onOpenChange:ae,children:[(0,F.jsx)(Bc,{asChild:!0,children:(0,F.jsx)(`button`,{className:`text-current text-4xl cursor-pointer`,onClick:ie,"aria-label":`Open workspace settings`,title:`Workspace settings`,children:(0,F.jsx)($e,{})})}),(0,F.jsx)(Uc,{className:`settings-dialog w-[min(92vw,980px)] border-border/60 bg-background/98 p-0 text-[11px] [&_[data-slot=card]]:rounded-lg [&_[data-slot=card-header]]:gap-0.5 [&_[data-slot=card-header]]:p-2.5 [&_[data-slot=card-content]]:p-2.5 [&_[data-slot=card-content]]:pt-0 [&_[data-slot=card-title]]:text-[13px] [&_[data-slot=card-description]]:text-[11px] [&_[data-slot=tabs-trigger]]:px-2 [&_[data-slot=tabs-trigger]]:py-1.5 [&_[data-slot=tabs-trigger]]:text-[11px] [&_[data-slot=input]]:h-7 [&_[data-slot=input]]:text-[11px] [&_[data-slot=button]]:h-7 [&_[data-slot=button]]:px-2.5 [&_[data-slot=button]]:text-[11px]`,children:(0,F.jsxs)(Xc,{defaultValue:`appearance`,orientation:`vertical`,className:`grid min-h-[76vh] lg:grid-cols-[160px_1fr] gap-0`,children:[(0,F.jsxs)(`div`,{className:`border-b border-border bg-sidebar text-sidebar-foreground lg:border-r lg:border-b-0`,children:[(0,F.jsx)(`div`,{className:`p-2.5`,children:(0,F.jsxs)(Wc,{children:[(0,F.jsx)(Gc,{className:`font-serif text-base`,children:`Workspace Settings`}),(0,F.jsx)(Kc,{className:`text-xs leading-snug`,children:`Built on the new shadcn-style UI layer with live theme and palette preview.`})]})}),(0,F.jsx)(Zc,{className:`mx-2 mb-2 bg-transparent p-0`,children:tl.map(e=>{let t=e.icon;return(0,F.jsxs)(Qc,{value:e.value,className:`w-full justify-start`,children:[(0,F.jsx)(t,{className:`size-3.5`}),e.label]},e.value)})})]}),(0,F.jsxs)(`div`,{className:`flex flex-col`,children:[(0,F.jsxs)(`div`,{className:`max-h-[76vh] overflow-y-auto p-2.5 md:p-3`,children:[(0,F.jsxs)($c,{value:`appearance`,className:`mt-0 space-y-3`,children:[(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Theme Mode`}),(0,F.jsx)(Lc,{children:`Choose how light and dark mode should be resolved.`})]}),(0,F.jsx)(Rc,{className:`grid gap-2 md:grid-cols-3`,children:[{value:`system`,title:`System`,description:`Follow the OS preference.`},{value:`light`,title:`Light`,description:`Force the brighter variant.`},{value:`dark`,title:`Dark`,description:`Force the darker variant.`}].map(e=>(0,F.jsx)(il,{selected:Be===e.value,title:e.title,description:e.description,onClick:()=>M(e.value)},e.value))})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Theme Palette`}),(0,F.jsx)(Lc,{children:`Switch the base visual language of the interface.`})]}),(0,F.jsxs)(Rc,{className:`grid gap-2 lg:grid-cols-3`,children:[tt.map(e=>(0,F.jsxs)(`button`,{type:`button`,onClick:()=>pe(e.value),className:X(`rounded-md border p-2.5 text-left transition`,Ve===e.value?`border-primary bg-accent shadow-sm`:`border-border bg-card hover:bg-accent/50`),children:[(0,F.jsx)(nl,{swatches:e.swatches,mode:r}),(0,F.jsx)(`div`,{className:`text-xs font-medium leading-tight`,children:e.title}),(0,F.jsx)(`div`,{className:`mt-0.5 text-[11px] leading-snug text-muted-foreground`,children:e.description})]},e.value)),(d.customThemes||[]).map(e=>{let t={light:ot(e,`light`),dark:ot(e,`dark`)};return(0,F.jsxs)(`button`,{type:`button`,onClick:()=>pe(e.id,{light:e.light,dark:e.dark}),className:X(`rounded-md border p-2.5 text-left transition`,Ve===e.id?`border-primary bg-accent shadow-sm`:`border-border bg-card hover:bg-accent/50`),children:[(0,F.jsx)(nl,{swatches:t,mode:r}),(0,F.jsx)(`div`,{className:`text-xs font-medium leading-tight`,children:e.name}),(0,F.jsx)(`div`,{className:`mt-0.5 text-[11px] leading-snug text-muted-foreground`,children:`Custom theme`})]},e.id)})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Custom Theme`}),(0,F.jsxs)(Lc,{children:[`Paste CSS from a shadcn theme generator. Use `,(0,F.jsx)(`code`,{children:`:root`}),` for light and `,(0,F.jsx)(`code`,{children:`.dark`}),` for dark mode variables.`]})]}),(0,F.jsxs)(Rc,{className:`space-y-4`,children:[(0,F.jsx)($,{label:`Theme Name`,children:(0,F.jsx)(Q,{value:S,onChange:e=>C(e.target.value),placeholder:`My Custom Theme`})}),(0,F.jsx)($,{label:`CSS Variables`,children:(0,F.jsx)(`textarea`,{className:`w-full rounded-lg border border-border bg-card p-3 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`,rows:8,value:w,onChange:e=>T(e.target.value),placeholder:`:root {
  --background: oklch(0.98 0.01 250);
  --primary: oklch(0.55 0.2 260);
  /* ... */
}
.dark {
  --background: oklch(0.2 0.02 260);
  /* ... */
}`})}),ee?(0,F.jsx)(`p`,{className:`text-xs text-destructive`,children:ee}):null,(0,F.jsx)(Z,{type:`button`,onClick:me,children:`Add Theme`}),(d.customThemes||[]).length>0?(0,F.jsxs)(`div`,{className:`mt-4 space-y-2`,children:[(0,F.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:`Saved Custom Themes`}),(d.customThemes||[]).map(e=>(0,F.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2`,children:[(0,F.jsx)(`span`,{className:`text-sm`,children:e.name}),(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>he(e.id),children:`Remove`})]},e.id))]}):null]})]}),(0,F.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-2`,children:[(0,F.jsxs)(Pc,{children:[(0,F.jsx)(Fc,{children:(0,F.jsx)(Ic,{children:`Grid Density`})}),(0,F.jsx)(Rc,{className:`grid gap-3`,children:[`comfortable`,`compact`].map(e=>(0,F.jsx)(il,{selected:He===e,title:e.charAt(0).toUpperCase()+e.slice(1),description:e===`comfortable`?`More air between modules.`:`Tighter dashboard packing.`,onClick:()=>k(`gridDensity`,e)},e))})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsx)(Fc,{children:(0,F.jsx)(Ic,{children:`Card Shape`})}),(0,F.jsx)(Rc,{className:`grid gap-3`,children:[`soft`,`rounded`,`sharp`].map(e=>(0,F.jsx)(il,{selected:Ue===e,title:e.charAt(0).toUpperCase()+e.slice(1),description:e===`soft`?`Large rounded corners.`:e===`sharp`?`Crisper corners.`:`Balanced default radius.`,onClick:()=>k(`cardStyle`,e)},e))})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Atmosphere`}),(0,F.jsx)(Lc,{children:`Decorative tiles can be disabled without affecting the data modules.`})]}),(0,F.jsxs)(Rc,{className:`flex items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-medium`,children:`Decorative media tiles`}),(0,F.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Show or hide the looping desert video modules.`})]}),(0,F.jsx)(Yc,{checked:d.ui?.showDecorativeMedia??!0,onCheckedChange:e=>k(`showDecorativeMedia`,e)})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Image Effects`}),(0,F.jsx)(Lc,{children:`Enable one or more filters for photo tiles. When multiple filters are enabled, each image tile picks one at random.`})]}),(0,F.jsx)(Rc,{className:`space-y-4`,children:Ma.map(e=>{let t=We.enabledFilters?.[e.key]||!1,n=We.filterSettings?.[e.key]||Na.filterSettings[e.key];return(0,F.jsxs)(`div`,{className:`rounded-xl border border-border p-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-medium`,children:e.label}),(0,F.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:t?`Active and eligible for random image selection.`:`Disabled.`})]}),(0,F.jsx)(Yc,{checked:t,onCheckedChange:t=>ge(e.key,t)})]}),t?(0,F.jsxs)(`div`,{className:`mt-4 space-y-4`,children:[(0,F.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.presets.map(t=>(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>ve(e.key,t),children:t.name},t.name))}),(0,F.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:e.controls.map(t=>{let r=n[t.key];return t.type===`boolean`?(0,F.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-3 py-2`,children:[(0,F.jsx)(qc,{className:`text-sm text-foreground`,children:t.label}),(0,F.jsx)(Yc,{checked:!!r,onCheckedChange:n=>_e(e.key,t.key,n)})]},t.key):(0,F.jsx)(rl,{label:t.label,value:Number(r),min:t.min,max:t.max,step:t.step,onChange:n=>_e(e.key,t.key,n)},t.key)})})]}):null]},e.key)})})]})]}),(0,F.jsxs)($c,{value:`layout`,className:`mt-0 space-y-4`,children:[(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Visible Modules`}),(0,F.jsx)(Lc,{children:`Turn tiles on or off while keeping the current grid structure intact.`})]}),(0,F.jsx)(Rc,{className:`grid gap-3 md:grid-cols-2`,children:el.map(e=>{let t=!d.layout?.hiddenBoxes?.[e.id];return(0,F.jsxs)(`div`,{className:`flex items-center justify-between rounded-xl border border-border bg-card p-4`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`font-medium`,children:e.label}),(0,F.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:t?`Currently visible`:`Currently hidden`})]}),(0,F.jsx)(Yc,{checked:t,onCheckedChange:t=>ye(e.id,t)})]},e.id)})})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Tile Size`}),(0,F.jsx)(Lc,{children:`Scale how large each dashboard tile appears. Takes effect after saving.`})]}),(0,F.jsxs)(Rc,{className:`space-y-5`,children:[(0,F.jsx)(rl,{label:`Size (rem)`,value:d.ui?.tileSize??9,min:7,max:14,step:1,onChange:e=>k(`tileSize`,e)}),(0,F.jsx)(rl,{label:`Bookmark pill size (rem)`,value:d.ui?.bookmarkPillSize??3.25,min:2.5,max:5,step:.25,onChange:e=>k(`bookmarkPillSize`,e)})]})]})]}),(0,F.jsxs)($c,{value:`content`,className:`mt-0 space-y-4`,children:[(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Location and API Settings`}),(0,F.jsx)(Lc,{children:`Core values used by weather and photo modules.`})]}),(0,F.jsxs)(Rc,{className:`grid gap-4 md:grid-cols-2`,children:[(0,F.jsx)($,{label:`Latitude`,children:(0,F.jsx)(Q,{value:d.latitude??``,onChange:e=>oe(`latitude`,e.target.value===``?null:Number(e.target.value))})}),(0,F.jsx)($,{label:`Longitude`,children:(0,F.jsx)(Q,{value:d.longitude??``,onChange:e=>oe(`longitude`,e.target.value===``?null:Number(e.target.value))})}),(0,F.jsx)($,{label:`Units`,children:(0,F.jsxs)(`select`,{className:`h-9 w-full rounded-md border border-input bg-card px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring`,value:d.units??`imperial`,onChange:e=>oe(`units`,e.target.value),children:[(0,F.jsx)(`option`,{value:`imperial`,children:`Imperial (°F, mph)`}),(0,F.jsx)(`option`,{value:`metric`,children:`Metric (°C, km/h)`})]})}),(0,F.jsx)($,{label:`OpenWeather Key`,children:(0,F.jsx)(Q,{value:d.openWeatherCredential??``,onChange:e=>oe(`openWeatherCredential`,e.target.value||null)})}),(0,F.jsx)($,{label:`Unsplash Access Key`,description:`Use the Access Key, not the Secret Key.`,className:`md:col-span-2`,children:(0,F.jsx)(Q,{value:d.unsplashCredential??``,onChange:e=>oe(`unsplashCredential`,e.target.value||null)})}),(0,F.jsx)($,{label:`Default Timer Minutes`,children:(0,F.jsx)(Q,{value:d.timer?.focusMinutes??25,onChange:e=>ce(`focusMinutes`,e.target.value===``?25:Number(e.target.value))})})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Decorative Video`}),(0,F.jsx)(Lc,{children:`Add up to 10 looping MP4 links. One is chosen at random on load, and both tiles look into the same shared scene.`})]}),(0,F.jsxs)(Rc,{className:`space-y-5`,children:[(0,F.jsxs)(`div`,{className:`space-y-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:`Video URLs`}),(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Leave blanks empty. The saved list is capped at 10.`})]}),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:j,disabled:(d.decorativeVideo?.urls??[]).length>=10,children:`Add link`})]}),(0,F.jsx)(`div`,{className:`space-y-2`,children:(d.decorativeVideo?.urls?.length?d.decorativeVideo.urls:[``]).map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Q,{value:e,placeholder:`https://example.com/video.mp4`,onChange:e=>ue(t,e.target.value)}),(d.decorativeVideo?.urls?.length||0)>1?(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:()=>de(t),children:`Remove`}):null]},t))})]}),(0,F.jsxs)(`div`,{className:`space-y-4 rounded-xl border border-border bg-muted/20 p-4`,children:[(0,F.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Move and scale the underlying shared video. The box positions stay fixed, but what you see through them changes together.`}),(0,F.jsx)(rl,{label:`Zoom`,value:d.decorativeVideo?.zoom??d.decorativeVideo?.tall?.zoom??1.6,min:1,max:3,step:.05,onChange:e=>fe(`zoom`,e)}),(0,F.jsx)(rl,{label:`Horizontal Offset`,value:d.decorativeVideo?.offsetX??d.decorativeVideo?.tall?.offsetX??0,min:-180,max:180,step:1,onChange:e=>fe(`offsetX`,e)}),(0,F.jsx)(rl,{label:`Vertical Offset`,value:d.decorativeVideo?.offsetY??d.decorativeVideo?.tall?.offsetY??0,min:-180,max:180,step:1,onChange:e=>fe(`offsetY`,e)})]})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Feature Panel`}),(0,F.jsx)(Lc,{children:`Choose which modes appear in the rotating feature panel and provide credentials for services that need them.`})]}),(0,F.jsxs)(Rc,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:`Enabled Modes`}),(0,F.jsx)(`div`,{className:`grid gap-2 md:grid-cols-2`,children:Ro.map(e=>{let t=(d.featurePanel?.enabledModes??Ro.map(e=>e.key)).includes(e.key);return(0,F.jsxs)(`div`,{className:`flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3`,children:[(0,F.jsx)(`p`,{className:`text-sm font-medium`,children:e.label}),(0,F.jsx)(Yc,{checked:t,onCheckedChange:t=>Ce(e.key,t)})]},e.key)})})]}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:`Credentials & Config`}),(0,F.jsx)($,{label:`GitHub Username`,description:`Used by the GitHub Activity mode.`,children:(0,F.jsx)(Q,{value:d.featurePanel?.githubUsername??``,placeholder:`e.g. torvalds`,onChange:e=>Se(`githubUsername`,e.target.value||null)})}),(0,F.jsx)($,{label:`RSS Feed URL`,description:`Any valid RSS or Atom feed URL.`,children:(0,F.jsx)(Q,{value:d.featurePanel?.rssFeedUrl??``,placeholder:`https://example.com/feed.xml`,onChange:e=>Se(`rssFeedUrl`,e.target.value||null)})}),(0,F.jsx)($,{label:`Spotify App Client ID`,description:`Create an app at developer.spotify.com and add this page's URL as a redirect URI.`,children:(0,F.jsx)(Q,{value:d.featurePanel?.spotifyClientId??``,placeholder:`e.g. 1a2b3c4d5e6f7890...`,onChange:e=>Se(`spotifyClientId`,e.target.value||null)})})]})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Search Engines`}),(0,F.jsxs)(Lc,{children:[`Customize the buttons in the search box. Each engine needs a name, an icon, and a search URL that the typed query is appended to (e.g. `,(0,F.jsx)(`code`,{children:`https://duckduckgo.com/?q=`}),`). The first engine is selected by default.`]})]}),(0,F.jsxs)(Rc,{className:`space-y-4`,children:[(d.search?.engines?.length?d.search.engines:rs).map((e,t,n)=>(0,F.jsxs)(`div`,{className:`rounded-xl border border-border bg-muted/25 p-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`flex size-7 items-center justify-center rounded-full border border-border/60 bg-card`,children:(0,F.jsx)(is(e.icon),{className:`size-4`,"aria-hidden":`true`})}),(0,F.jsx)(`p`,{className:`text-sm font-medium`,children:e.name||`Untitled engine`})]}),(0,F.jsxs)(`div`,{className:`flex gap-1`,children:[(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>Oe(t,-1),disabled:t===0,"aria-label":`Move engine up`,children:`↑`}),(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>Oe(t,1),disabled:t===n.length-1,"aria-label":`Move engine down`,children:`↓`}),(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>De(t),children:`Remove`})]})]}),(0,F.jsxs)(`div`,{className:`mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]`,children:[(0,F.jsx)($,{label:`Name`,children:(0,F.jsx)(Q,{value:e.name,placeholder:`e.g. YouTube`,onChange:e=>Te(t,`name`,e.target.value)})}),(0,F.jsx)($,{label:`Search URL`,children:(0,F.jsx)(Q,{value:e.url,placeholder:`https://example.com/search?q=`,onChange:e=>Te(t,`url`,e.target.value)})}),(0,F.jsx)($,{label:`Icon`,children:(0,F.jsx)(`select`,{className:`h-9 w-full rounded-md border border-input bg-card px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring`,value:e.icon||`search`,onChange:e=>Te(t,`icon`,e.target.value),children:ns.map(e=>(0,F.jsx)(`option`,{value:e.key,children:e.label},e.key))})})]})]},e.id??t)),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:Ee,children:`Add engine`})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Headline Source`}),(0,F.jsx)(Lc,{children:`Controls the rotating hero headlines in the large feature panel.`})]}),(0,F.jsxs)(Rc,{className:`grid gap-4 md:grid-cols-2`,children:[(0,F.jsx)($,{label:`Subreddit`,children:(0,F.jsx)(Q,{value:d.news?.subreddit??`worldnews`,onChange:e=>se(`subreddit`,e.target.value||`worldnews`)})}),(0,F.jsx)($,{label:`Rotation Seconds`,children:(0,F.jsx)(Q,{value:d.news?.rotationSeconds??8,onChange:e=>se(`rotationSeconds`,e.target.value===``?8:Number(e.target.value))})})]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Unsplash Topics`}),(0,F.jsx)(Lc,{children:`Keywords for each rotating image tile. Add or remove individual topics.`})]}),(0,F.jsx)(Rc,{className:`space-y-6`,children:Object.keys(d.unsplash).map((e,t)=>{let n=d.unsplash[e]||[],r=ne[e]||``;return(0,F.jsxs)(`div`,{className:`space-y-2`,children:[(0,F.jsxs)(qc,{className:`text-xs font-medium text-foreground`,children:[`Photo tile `,t+1]}),(0,F.jsx)(`div`,{className:`flex min-h-10 flex-wrap gap-2 rounded-lg border border-border bg-muted/20 p-3`,children:n.map((t,n)=>(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground`,children:[t,(0,F.jsx)(`button`,{type:`button`,className:`ml-1 leading-none opacity-60 hover:opacity-100`,onClick:()=>xe(e,n),children:`×`})]},n))}),(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(Q,{value:r,placeholder:`Add topic…`,onChange:t=>re(n=>({...n,[e]:t.target.value})),onKeyDown:t=>{t.key===`Enter`&&(t.preventDefault(),be(e))}}),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:()=>be(e),children:`Add`})]})]},e)})})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsxs)(Fc,{children:[(0,F.jsx)(Ic,{children:`Bookmarks`}),(0,F.jsx)(Lc,{children:`Manage bookmark categories and choose which category each dashboard box shows.`})]}),(0,F.jsxs)(Rc,{className:`space-y-6`,children:[(0,F.jsxs)(`div`,{className:`rounded-xl border border-border bg-muted/20 p-4`,children:[(0,F.jsx)(`p`,{className:`text-sm font-medium text-foreground`,children:`Dashboard box categories`}),(0,F.jsx)(`div`,{className:`mt-3 grid gap-3 md:grid-cols-2`,children:[0,1,2,3,4].map(e=>(0,F.jsx)($,{label:`Bookmark Box ${e+1}`,children:(0,F.jsx)(`select`,{className:`h-9 w-full rounded-md border border-input bg-card px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring`,value:(d.layout?.bookmarkBoxCategories||[0,1,2,3,4])[e]??0,onChange:t=>je(e,t.target.value),children:d.bookmark.map((e,t)=>(0,F.jsx)(`option`,{value:t,children:e.title||`Category ${t+1}`},`${e.title}-${t}`))})},e))})]}),d.bookmark.map((e,t)=>(0,F.jsxs)(`div`,{className:`rounded-xl border border-border bg-muted/25 p-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-end gap-3`,children:[(0,F.jsx)(`div`,{className:`flex-1`,children:(0,F.jsx)($,{label:`Category ${t+1} Name`,children:(0,F.jsx)(Q,{value:e.title,onChange:e=>P(t,e.target.value)})})}),d.bookmark.length>1?(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>Ae(t),children:`Remove category`}):null]}),(0,F.jsx)(`div`,{className:`mt-4 space-y-3`,children:e.content.map((e,n)=>(0,F.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-[1fr_1fr_auto]`,children:[(0,F.jsx)($,{label:`Name`,children:(0,F.jsx)(Q,{value:e.name,onChange:e=>Me(t,n,`name`,e.target.value)})}),(0,F.jsx)($,{label:`URL`,children:(0,F.jsx)(Q,{value:e.url,onChange:e=>Me(t,n,`url`,e.target.value)})}),(0,F.jsx)(`div`,{className:`flex items-end`,children:(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>Pe(t,n),children:`Remove`})})]},n))}),(0,F.jsx)(`div`,{className:`mt-4 flex gap-3`,children:(0,F.jsx)(Z,{type:`button`,size:`sm`,onClick:()=>Ne(t),children:`Add link`})})]},t)),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:ke,children:`Add category`})]})]})]})]}),(0,F.jsx)(`div`,{className:`border-t border-border bg-card/60 px-6 py-4`,children:(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,F.jsxs)(`div`,{className:`space-y-1 text-sm text-muted-foreground`,children:[(0,F.jsxs)(`p`,{children:[`Active preview: `,(0,F.jsx)(`span`,{className:`font-medium text-foreground`,children:Ve}),` in `,(0,F.jsx)(`span`,{className:`font-medium text-foreground`,children:Be}),` mode`]}),(0,F.jsxs)(`p`,{children:[`Storage: `,m?.indexedDbAvailable?`IndexedDB`:`Local mirror only`,` · backups: `,m?.backupCount??0,m?.lastSavedAt?` · last saved ${new Date(m.lastSavedAt).toLocaleString()}`:``]}),b?(0,F.jsx)(`p`,{className:`text-foreground`,children:b}):null]}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:Le,children:`Export backup`}),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:Re,children:`Import backup`}),(0,F.jsx)(Z,{type:`button`,variant:`outline`,onClick:Fe,children:`Reset`}),(0,F.jsx)(Z,{type:`button`,onClick:Ie,children:`Save and reload`})]})]})}),(0,F.jsx)(`input`,{ref:te,type:`file`,accept:`application/json`,className:`hidden`,onChange:ze})]})]})})]})}function ol(){let{results:e}=(0,Ae.useMatches)();return(0,F.jsx)(Ae.KBarResults,{items:e,onRender:({item:e,active:t})=>typeof e==`string`?(0,F.jsx)(`div`,{className:`px-3 pt-3 pb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground select-none`,children:e}):(0,F.jsx)(`div`,{className:`flex items-center gap-2 px-3 py-2.5 mx-1.5 rounded-lg cursor-pointer text-sm transition-colors ${t?`bg-primary/10 text-foreground`:`text-foreground/80`}`,children:e.name})})}function sl(){return(0,F.jsx)(Ae.KBarPortal,{children:(0,F.jsx)(Ae.KBarPositioner,{className:`fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[20vh]`,children:(0,F.jsxs)(Ae.KBarAnimator,{className:`w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl`,children:[(0,F.jsx)(Ae.KBarSearch,{className:`w-full border-b border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none`}),(0,F.jsx)(`div`,{className:`max-h-80 overflow-y-auto pb-2`,children:(0,F.jsx)(ol,{})})]})})})}var cl={videoTall:`Tall Video`,videoSmall:`Small Video`,search:`Search Box`,weather:`Weather`,featurePanel:`Feature Panel`,solarGraph:`Solar Graph`,vaultPreview:`Vault Preview`,clock:`Clock`,themeTools:`Theme Tools`,bookmark1:`Bookmark 1`,bookmark2:`Bookmark 2`,bookmark3:`Bookmark 3`,bookmark4:`Bookmark 4`,bookmark5:`Bookmark 5`,unsplash1:`Photo 1`,unsplash2:`Photo 2`,unsplash3:`Photo 3`,unsplash4:`Photo 4`,unsplash5:`Photo 5`};function ll(){let{setThemeMode:e,setThemePalette:t,setCustomThemeVars:n}=A.useContext(lt),r=A.useMemo(()=>{let r=[],i=g().customThemes||[];return r.push({id:`theme-light`,name:`Light Mode`,shortcut:[],section:`Theme`,perform:()=>e(`light`)}),r.push({id:`theme-dark`,name:`Dark Mode`,shortcut:[],section:`Theme`,perform:()=>e(`dark`)}),r.push({id:`theme-system`,name:`System Mode`,shortcut:[],section:`Theme`,perform:()=>e(`system`)}),tt.forEach(e=>{r.push({id:`palette-${e.value}`,name:`${e.title} Palette`,shortcut:[],section:`Theme`,perform:()=>{t(e.value),n(null)}})}),i.forEach(e=>{r.push({id:`palette-${e.id}`,name:`${e.name} Palette`,shortcut:[],section:`Theme`,perform:()=>{t(e.id),n({light:e.light,dark:e.dark})}})}),r.push({id:`focus-search`,name:`Focus Search`,shortcut:[],section:`Search`,perform:()=>{let e=document.getElementById(`search-input`);e&&e.focus()}}),r.push({id:`feature-headlines`,name:`Show Headlines`,shortcut:[],section:`Feature Panel`,perform:()=>{let e=g();e.featurePanel={...e.featurePanel,mode:`headlines`},p(e).then(()=>window.location.reload())}}),r.push({id:`feature-windy`,name:`Show Windy`,shortcut:[],section:`Feature Panel`,perform:()=>{let e=g();e.featurePanel={...e.featurePanel,mode:`windy`},p(e).then(()=>window.location.reload())}}),r.push({id:`feature-timer`,name:`Show Timer`,shortcut:[],section:`Feature Panel`,perform:()=>{let e=g();e.featurePanel={...e.featurePanel,mode:`timer`},p(e).then(()=>window.location.reload())}}),Object.entries(cl).forEach(([e,t])=>{r.push({id:`toggle-${e}`,name:`Toggle ${t}`,shortcut:[],section:`Layout`,perform:()=>{let t=g(),n=t.layout?.hiddenBoxes||{};n[e]=!n[e],t.layout={...t.layout,hiddenBoxes:n},p(t).then(()=>window.location.reload())}})}),r.push({id:`export-settings`,name:`Export Settings`,shortcut:[],section:`Settings`,perform:()=>{let e=h(g()),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=y(),document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(t)}}),r.push({id:`reset-settings`,name:`Reset Settings`,shortcut:[],section:`Settings`,perform:()=>{v().then(()=>window.location.reload())}}),r},[e,t,n]);(0,Ae.useRegisterActions)(r,[r])}var ul={small:`col-span-1 row-span-1`,wide:`col-span-2 row-span-1`,tall:`col-span-1 row-span-2`,large:`col-span-2 row-span-2`,feature:`grid-feature-responsive row-span-2`},dl=[{key:`small`,label:`1×1`,title:`Small`},{key:`wide`,label:`2×1`,title:`Wide`},{key:`tall`,label:`1×2`,title:`Tall`},{key:`large`,label:`2×2`,title:`Large`},{key:`feature`,label:`3×2`,title:`Feature`}],fl=[`videoTall`,`videoSmall`,`search`,`bookmark1`,`weather`,`unsplash2`,`bookmark2`,`featurePanel`,`unsplash3`,`bookmark3`,`solarGraph`,`bookmark4`,`bookmark5`,`unsplash4`,`unsplash5`,`vaultPreview`,`clock`],pl={videoTall:`tall`,videoSmall:`small`,search:`wide`,bookmark1:`small`,weather:`wide`,unsplash2:`small`,bookmark2:`small`,featurePanel:`feature`,unsplash3:`small`,bookmark3:`small`,solarGraph:`large`,bookmark4:`small`,bookmark5:`small`,unsplash4:`small`,unsplash5:`small`,vaultPreview:`small`,clock:`small`},ml={0:[`111`,`101`,`101`,`101`,`111`],1:[`010`,`110`,`010`,`010`,`111`],2:[`111`,`001`,`111`,`100`,`111`],3:[`111`,`001`,`111`,`001`,`111`],4:[`101`,`101`,`111`,`001`,`001`],5:[`111`,`100`,`111`,`001`,`111`],6:[`111`,`100`,`111`,`101`,`111`],7:[`111`,`001`,`010`,`010`,`010`],8:[`111`,`101`,`111`,`101`,`111`],9:[`111`,`101`,`111`,`001`,`111`]},hl={A:[`010`,`101`,`111`,`101`,`101`],D:[`110`,`101`,`101`,`101`,`110`],E:[`111`,`100`,`110`,`100`,`111`],F:[`111`,`100`,`110`,`100`,`100`],I:[`111`,`010`,`010`,`010`,`111`],M:[`101`,`111`,`111`,`101`,`101`],N:[`101`,`111`,`111`,`111`,`101`],O:[`111`,`101`,`101`,`101`,`111`],R:[`110`,`101`,`110`,`101`,`101`],S:[`111`,`100`,`111`,`001`,`111`],T:[`111`,`010`,`010`,`010`,`010`],U:[`101`,`101`,`101`,`101`,`111`],W:[`101`,`101`,`111`,`111`,`101`]},gl=[`SUN`,`MON`,`TUE`,`WED`,`THU`,`FRI`,`SAT`],_l=21,vl=17;function yl(e){let t=e.getHours(),n=t%12||12,r=e.getMinutes();return{time:`${n}:${String(r).padStart(2,`0`)}`,period:t>=12?`PM`:`AM`,dayLabel:gl[e.getDay()],hourDeg:(n%12+r/60)*30,minuteDeg:r*6,secondDeg:e.getSeconds()*6}}function bl({parts:e}){let t=new Set,n=new Set,r=e.time.split(``),i=r.map(e=>e===`:`?[`0`,`1`,`0`,`1`,`0`]:ml[e]||ml[0]),a=i.map(e=>e[0].length),o=a.reduce((e,t)=>e+t,0)+r.length-1,s=Math.floor((_l-o)/2);i.forEach((e,i)=>{e.forEach((e,a)=>{e.split(``).forEach((e,o)=>{if(e===`1`){let e=`${s+o}-${4+a}`;t.add(e),r[i]===`:`&&n.add(e)}})}),s+=a[i]+1});let c=e.dayLabel.split(``).map(e=>hl[e]||hl.S),l=c.map(e=>e[0].length),u=l.reduce((e,t)=>e+t,0)+c.length-1,d=Math.floor((_l-u)/2);return c.forEach((e,n)=>{e.forEach((e,n)=>{e.split(``).forEach((e,r)=>{e===`1`&&t.add(`${d+r}-${11+n}`)})}),d+=l[n]+1}),(0,F.jsx)(`div`,{className:`clock-digital-grid`,"aria-hidden":`true`,children:Array.from({length:_l*vl},(e,r)=>{let i=r%_l,a=Math.floor(r/_l);return(0,F.jsx)(`span`,{className:[t.has(`${i}-${a}`)?`clock-lit-dot`:``,n.has(`${i}-${a}`)?`clock-colon-dot`:``].filter(Boolean).join(` `)},r)})})}function xl({parts:e}){return(0,F.jsxs)(`div`,{className:`clock-underlay clock-analog-underlay`,"aria-hidden":`true`,children:[(0,F.jsx)(`span`,{className:`clock-hand clock-hour-hand`,style:{"--clock-hand-angle":`${e.hourDeg}deg`}}),(0,F.jsx)(`span`,{className:`clock-hand clock-minute-hand`,style:{"--clock-hand-angle":`${e.minuteDeg}deg`}}),(0,F.jsx)(`span`,{className:`clock-hand clock-second-hand`,style:{"--clock-hand-angle":`${e.secondDeg}deg`}})]})}function Sl(){let[e,t]=(0,A.useState)(()=>new Date),[n,r]=(0,A.useState)(`digital`),i=(0,A.useMemo)(()=>yl(e),[e]);return(0,A.useEffect)(()=>{let e=window.setInterval(()=>t(new Date),1e3);return()=>window.clearInterval(e)},[]),(0,F.jsx)(`button`,{type:`button`,className:`clock-widget flex h-full w-full flex-col items-center justify-center rounded-[inherit] text-center`,onClick:()=>r(e=>e===`digital`?`analog`:`digital`),"aria-label":`Clock showing ${i.time} ${i.period}. Click to switch to ${n===`digital`?`analog`:`digital`} clock.`,children:n===`digital`?(0,F.jsx)(bl,{parts:i}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`clock-hole-field`,"aria-hidden":`true`}),(0,F.jsx)(xl,{parts:i}),(0,F.jsx)(`span`,{className:`clock-perforated-mask`,"aria-hidden":`true`})]})})}function Cl(){let e=N(e=>e.settings.search?.engines),t=A.useMemo(()=>as(e),[e]),[n,r]=A.useState(t[0]?.id),i=A.useRef(null);A.useEffect(()=>{t.some(e=>e.id===n)||r(t[0]?.id)},[t,n]);let a=e=>{r(e),i.current&&(i.current.value=``,i.current.focus())};return(0,F.jsx)(`div`,{className:`search-widget flex h-full w-full items-center justify-center`,children:(0,F.jsxs)(`div`,{className:`search-inner`,children:[(0,F.jsx)(`div`,{className:`search-engines flex justify-center`,children:t.map(e=>{let t=is(e.icon);return(0,F.jsx)(`button`,{type:`button`,className:`search-engine-button flex items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-sm outline-none transition hover:bg-accent/70 disabled:border-primary/40 disabled:bg-primary/14 disabled:opacity-100 opacity-75 cursor-pointer`,disabled:e.id===n,onClick:()=>a(e.id),"aria-label":`Search with ${e.name}`,title:e.name,children:(0,F.jsx)(t,{className:`search-engine-icon`,"aria-hidden":`true`})},e.id)})}),(0,F.jsx)(`input`,{className:`search-input items-center border border-input bg-input/45 text-foreground placeholder:text-muted-foreground rounded-xl shadow-sm transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30`,autoFocus:!0,id:`search-input`,type:`text`,placeholder:t.find(e=>e.id===n)?.name??`Search`,ref:i,onKeyDown:e=>{if(e.key!==`Enter`)return;let r=t.find(e=>e.id===n)||t[0];if(!r)return;let i=encodeURIComponent(e.currentTarget.value.trim());i&&(window.open(`${r.url}${i}`,`_blank`,`noopener,noreferrer`),e.currentTarget.value=``)}})]})})}function wl(e){if(typeof e!=`string`)return``;let t=e.trim();return t?/^[a-z][a-z\d+.-]*:\/\//i.test(t)?t:`http://${t}`:``}function Tl(e){try{return new URL(wl(e)).hostname.replace(/^www\./,``)}catch{return``}}function El(e,t=64){let n=Tl(e);return n?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(n)}&sz=${t}`:null}function Dl(e){if(Tl(e))return[`${El(e,32)} 1x`,`${El(e,64)} 2x`,`${El(e,128)} 3x`].join(`, `)}function Ol(e,t){return(String(e||Tl(t)||`?`).trim().match(/[a-z0-9]/i)?.[0]||`?`).toUpperCase()}function kl(e){return/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(e)}function Al(e){return/^[0-9a-f:]+$/i.test(e)&&e.includes(`:`)}function jl(e){try{let t=new URL(wl(e)).hostname.toLowerCase();return kl(t)||Al(t)||t===`localhost`||t.endsWith(`.local`)}catch{return!1}}function Ml({url:e,className:t=`size-3.5`}){let[n,r]=A.useState(!1);A.useEffect(()=>{let t=wl(e);if(!t){r(!1);return}let n=new AbortController,i=window.setTimeout(()=>{n.abort(),r(!1)},2500);return r(!1),fetch(t,{method:`HEAD`,mode:`no-cors`,cache:`no-store`,signal:n.signal}).then(()=>{window.clearTimeout(i),r(!0)}).catch(()=>{window.clearTimeout(i),r(!1)}),()=>{window.clearTimeout(i),n.abort()}},[e]);let i=n?`#22c55e`:`#ef4444`;return(0,F.jsx)(`span`,{className:`${t} inline-block shrink-0 rounded-full`,style:{backgroundColor:i},title:`Local service ${n?`online`:`offline`}`,"aria-label":`Local service ${n?`online`:`offline`}`})}var Nl=({title:e,content:t,cardClass:n,onTitleClick:r})=>{let i=(0,F.jsx)(`div`,{className:`bookmark-title truncate text-center font-semibold leading-none text-primary-foreground`,children:e});return(0,F.jsx)(`div`,{className:n||`bg-primary text-primary-foreground rounded-xl col-span-1 h-36 w-36 overflow-hidden border border-border/50 shadow-lg`,children:(0,F.jsxs)(`div`,{className:`bookmark-widget flex h-full flex-col`,children:[(0,F.jsx)(`div`,{className:`bookmark-header border-b border-primary-foreground/15`,children:r?(0,F.jsx)(`button`,{type:`button`,onClick:r,className:`block w-full min-w-0 text-center transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-foreground/45`,title:`Open bookmark view`,children:i}):i}),(0,F.jsx)(`div`,{className:`bookmark-list min-h-0 flex-1 overflow-y-auto`,children:(0,F.jsx)(`ul`,{className:`bookmark-items`,children:t.map(({name:e,url:t},n)=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(`a`,{href:t,className:`bookmark-link flex items-center rounded-lg transition hover:bg-primary-foreground/10`,title:t,children:[jl(t)?(0,F.jsx)(Ml,{url:t,className:`bookmark-favicon inline-block shrink-0 rounded-full`}):El(t)?(0,F.jsx)(`img`,{src:El(t),srcSet:Dl(t),alt:``,className:`bookmark-favicon shrink-0 rounded-sm object-contain opacity-90`,onError:e=>{e.currentTarget.style.display=`none`,e.currentTarget.nextElementSibling?.removeAttribute(`hidden`)}}):null,!jl(t)&&(0,F.jsx)(`span`,{hidden:!0,className:`bookmark-favicon-fallback bookmark-favicon shrink-0`,children:Ol(e,t)}),(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsx)(`div`,{className:`bookmark-name truncate font-medium leading-tight text-primary-foreground`,children:e}),(0,F.jsx)(`div`,{className:`bookmark-host truncate leading-none text-primary-foreground/65`,children:Tl(t)})]})]})},n))})})]})})},Pl=[`Read`,`Watch`,`Listen`,`Browse`,`Use`,`Build`,`Learn`,`Join`,`Follow`],Fl={Read:`read-tag-read`,Watch:`read-tag-watch`,Listen:`read-tag-listen`,Browse:`read-tag-browse`,Use:`read-tag-use`,Build:`read-tag-build`,Learn:`read-tag-learn`,Join:`read-tag-join`,Follow:`read-tag-follow`};function Il(e){return(Array.isArray(e)?e:Array.isArray(e?.readItems)?e.readItems:Array.isArray(e?.items)?e.items:[]).map((e,t)=>{let n=String(e?.title||``).trim();if(!n)return null;let r=e?.createdAt&&!Number.isNaN(new Date(e.createdAt).getTime())?new Date(e.createdAt).toISOString():new Date().toISOString(),i=e?.status===`done`?`done`:`todo`,a=i===`done`&&e?.completedAt&&!Number.isNaN(new Date(e.completedAt).getTime())?new Date(e.completedAt).toISOString():i===`done`?r:null;return{id:String(e?.id||`${Date.now()}-${t}-${Math.random().toString(36).slice(2,8)}`),title:n,description:String(e?.description||``).trim(),url:String(e?.url||``).trim(),tag:Pl.includes(e?.tag)?e.tag:`Read`,status:i,createdAt:r,completedAt:a}}).filter(Boolean)}function Ll({items:e,onOpen:t}){let n=A.useMemo(()=>Il(e).sort((e,t)=>{let n=new Date(e.completedAt||e.createdAt||0).getTime();return new Date(t.completedAt||t.createdAt||0).getTime()-n}).slice(0,10),[e]);return(0,F.jsxs)(`button`,{type:`button`,className:`vault-preview`,onClick:t,title:`Open Resource Vault`,children:[(0,F.jsxs)(`div`,{className:`vault-preview-header`,children:[(0,F.jsx)(`span`,{children:`Vault`}),(0,F.jsx)(qe,{className:`size-4`})]}),(0,F.jsx)(`ul`,{className:`vault-preview-list`,children:n.length?n.map(e=>(0,F.jsxs)(`li`,{className:`vault-preview-item`,children:[(0,F.jsx)(`span`,{className:`read-tag-dot ${Fl[e.tag]||`bg-primary`}`}),(0,F.jsx)(`span`,{className:`vault-preview-title ${e.status===`done`?`line-through opacity-55`:``}`,children:e.title})]},e.id)):(0,F.jsx)(`li`,{className:`vault-preview-empty`,children:`No resources yet.`})})]})}var Rl=`https://dogfootruler-kr.github.io/startup-page/assets/desert-BDcAdjyQ.mp4`,zl=A.lazy(()=>o(()=>import(`./solarGraph-fod9mn6G.js`),__vite__mapDeps([0,1,2,3]))),Bl=A.lazy(()=>o(()=>import(`./WeatherBox-CiGkn7e7.js`).then(e=>({default:e.WeatherBox})),__vite__mapDeps([4,1,2,3]))),Vl=`startup-page.active-bookmark-category`;function Hl({className:e,src:t,fallbackSrc:n,width:r,height:i,left:a,top:o}){let[s,c]=A.useState(t||n);return A.useEffect(()=>{c(t||n)},[t,n]),(0,F.jsx)(`div`,{className:`${e} relative overflow-hidden`,children:(0,F.jsx)(`video`,{className:`absolute max-w-none object-cover`,style:{width:r,height:i,left:a,top:o},src:s,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`auto`,referrerPolicy:`no-referrer`,onError:()=>{s!==n&&c(n)}},s)})}function Ul(){let e=r(),t=N(e=>e.settings),n=N(e=>e.persistSettings),i=st(e=>e.editing),a=st(e=>e.setEditing),o=A.useRef(null),[s,c]=A.useState(null),l=t.layout?.hiddenBoxes||{},u=e=>!l[e],d=t.ui||{},f=t.decorativeVideo||{},p=Array.isArray(t.bookmark)?t.bookmark:[],m=t.layout?.bookmarkBoxCategories||[0,1,2,3,4],h=e=>p[m[e]]||p[e]||{title:``,content:[]},g=d.gridDensity===`compact`?`gap-y-4 gap-x-4`:`gap-y-6 gap-x-6`,_=d.gridDensity===`compact`?16:24,v=(d.tileSize||9)*16,y=v*2+_,b=e=>e*v+(e-1)*_+32,x=`
    .dashboard-grid,
    .bookmark-page-grid {
      --dashboard-tile-max: ${v}px;
      --dashboard-gap: ${_}px;
      --dashboard-inline-padding: 2rem;
      --dashboard-tile: clamp(88px, calc((100vw - var(--dashboard-inline-padding) - var(--dashboard-gap)) / 2), var(--dashboard-tile-max));
      grid-template-columns: repeat(2, minmax(0, var(--dashboard-tile)));
      grid-auto-rows: var(--dashboard-tile);
    }
    .dashboard-grid .grid-feature-responsive {
      grid-column: span 2 / span 2;
    }
    @media (min-width: ${b(3)}px) {
      .dashboard-grid,
      .bookmark-page-grid {
        --dashboard-tile: clamp(88px, calc((100vw - var(--dashboard-inline-padding) - ${_*2}px) / 3), var(--dashboard-tile-max));
        grid-template-columns: repeat(3, minmax(0, var(--dashboard-tile)));
      }
      .dashboard-grid .grid-feature-responsive {
        grid-column: span 3 / span 3;
      }
    }
    @media (min-width: ${b(5)}px) {
      .dashboard-grid,
      .bookmark-page-grid {
        --dashboard-tile: clamp(88px, calc((100vw - var(--dashboard-inline-padding) - ${_*4}px) / 5), var(--dashboard-tile-max));
        grid-template-columns: repeat(5, minmax(0, var(--dashboard-tile)));
      }
    }
    @media (min-width: ${b(7)}px) {
      .dashboard-grid,
      .bookmark-page-grid {
        --dashboard-tile: clamp(88px, calc((100vw - var(--dashboard-inline-padding) - ${_*6}px) / 7), var(--dashboard-tile-max));
        grid-template-columns: repeat(7, minmax(0, var(--dashboard-tile)));
      }
    }
  `,S=d.cardStyle===`soft`?`rounded-[2rem]`:d.cardStyle===`sharp`?`rounded-md`:`rounded-xl`,C=d.showDecorativeMedia!==!1,w=Array.isArray(f.urls)?f.urls.filter(e=>typeof e==`string`&&e.trim()!==``):[],[T]=A.useState(()=>w.length?w[Math.floor(Math.random()*w.length)]||`https://dogfootruler-kr.github.io/startup-page/assets/desert-BDcAdjyQ.mp4`:Rl),ee=t=>{window.localStorage?.setItem(Vl,String(t)),e(`/bookmarks`)},E=(e=``)=>`${S} ${e}`,te=`bg-card text-card-foreground border border-border/60 shadow-lg`,ne=`bg-primary text-primary-foreground border border-border/40 shadow-lg`,re=(e,t)=>{let n=v+_+v,r=y,i={tall:{x:0,y:0,width:v,height:y},small:{x:v+_,y:0,width:v,height:v}}[e],a=Number(f.zoom??f.tall?.zoom??1.6),o=Number(f.offsetX??f.tall?.offsetX??0),s=Number(f.offsetY??f.tall?.offsetY??0),c=n*a,l=r*a,u=o-i.x*a,d=s-i.y*a;return(0,F.jsx)(Hl,{className:t,src:T,fallbackSrc:Rl,width:`${c}px`,height:`${l}px`,left:`${u}px`,top:`${d}px`})},D=n=>{switch(n){case`videoTall`:return(0,F.jsx)(`div`,{className:E(`h-full w-full overflow-hidden ${te}`),children:re(`tall`,`sticky h-full w-full rounded-xl overflow-hidden`)});case`videoSmall`:return(0,F.jsx)(`div`,{className:E(`h-full w-full overflow-hidden ${te}`),children:re(`small`,`sticky h-full w-full rounded-xl overflow-hidden`)});case`search`:return(0,F.jsx)(`div`,{className:E(`h-full w-full ${ne}`),children:(0,F.jsx)(Cl,{})});case`weather`:return(0,F.jsx)(`div`,{className:E(`h-full w-full overflow-hidden`),children:(0,F.jsx)(A.Suspense,{fallback:null,children:(0,F.jsx)(Bl,{})})});case`featurePanel`:return(0,F.jsx)(`div`,{className:E(`h-full w-full overflow-visible ${te}`),children:(0,F.jsx)(Bo,{})});case`solarGraph`:return(0,F.jsx)(`div`,{className:E(`h-full w-full bg-black border border-border/60 shadow-lg`),children:(0,F.jsx)(A.Suspense,{fallback:null,children:(0,F.jsx)(zl,{})})});case`vaultPreview`:return(0,F.jsx)(`div`,{className:E(`h-full w-full overflow-hidden ${ne}`),children:(0,F.jsx)(Ll,{items:t.readItems,onOpen:()=>e(`/resources`)})});case`clock`:return(0,F.jsx)(`div`,{className:E(`h-full w-full bg-muted/50 text-foreground border border-border/60 shadow-lg`),children:(0,F.jsx)(Sl,{})});case`bookmark1`:case`bookmark2`:case`bookmark3`:case`bookmark4`:case`bookmark5`:{let e=Number(n.replace(`bookmark`,``))-1,t=h(e);return(0,F.jsx)(Nl,{title:t.title,content:t.content,onTitleClick:()=>ee(m[e]??e),cardClass:E(`h-full w-full overflow-y-auto ${ne}`)})}case`unsplash2`:case`unsplash3`:case`unsplash4`:case`unsplash5`:{let e=`unsplashBox${n.replace(`unsplash`,``)}`;return(0,F.jsx)(`div`,{className:E(`h-full w-full ${te}`),children:(0,F.jsx)(Ga,{search:t.unsplash?.[e],cardClass:E(`relative overflow-hidden h-full w-full bg-center bg-no-repeat`)})})}default:return null}},ie=e=>!(!u(e)||(e===`videoTall`||e===`videoSmall`)&&!C),ae=A.useMemo(()=>{let e=(Array.isArray(t.layout?.order)?t.layout.order:[]).filter(e=>fl.includes(e)),n=fl.filter(t=>!e.includes(t));return e.length?[...e,...n]:fl},[t.layout?.order]),O={...pl,...t.layout?.sizes||{}},oe=e=>{n(t=>{let n=t.layout||{},r=(Array.isArray(n.order)?n.order:[]).filter(e=>fl.includes(e)),i=fl.filter(e=>!r.includes(e)),a=e({order:r.length?[...r,...i]:[...fl],sizes:{...pl,...n.sizes||{}}});return{...t,layout:{...n,order:a.order,sizes:a.sizes}}})},k=(e,t)=>{e!==t&&oe(({order:n,sizes:r})=>{let i=n.filter(t=>t!==e),a=i.indexOf(t);return i.splice(a<0?i.length:a,0,e),{order:i,sizes:r}})},se=(e,t)=>{oe(({order:n,sizes:r})=>({order:n,sizes:{...r,[e]:t}}))},ce=e=>{n(t=>({...t,layout:{...t.layout,hiddenBoxes:{...t.layout?.hiddenBoxes||{},[e]:!0}}}))},le=()=>{oe(()=>({order:[...fl],sizes:{...pl}}))},ue=(e,t)=>{o.current=t,c(t),e.dataTransfer.effectAllowed=`move`;try{e.dataTransfer.setData(`text/plain`,t)}catch{}},j=e=>{o.current&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},de=(e,t)=>{e.preventDefault();let n=o.current;n&&k(n,t),o.current=null,c(null)},fe=()=>{o.current=null,c(null)};return(0,F.jsxs)(`div`,{className:`flex min-h-screen items-center justify-center px-4 pb-10 pt-28`,children:[(0,F.jsx)(`style`,{children:x}),i&&(0,F.jsx)(`div`,{className:`fixed inset-x-0 top-16 z-40 flex justify-center px-4`,children:(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-border/60 bg-background/95 px-4 py-2 text-xs shadow-lg backdrop-blur`,children:[(0,F.jsx)(`span`,{className:`font-medium text-foreground`,children:`Editing layout`}),(0,F.jsx)(`span`,{className:`hidden text-muted-foreground sm:inline`,children:`Drag the handle to move · use the size menu to resize · eye icon hides a tile`}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Z,{type:`button`,size:`sm`,variant:`outline`,onClick:le,children:`Reset layout`}),(0,F.jsx)(Z,{type:`button`,size:`sm`,onClick:()=>a(!1),children:`Done`})]})]})}),(0,F.jsx)(`div`,{className:`dashboard-grid grid w-fit ${g} grid-flow-row-dense content-center justify-center`,children:ae.map(e=>{if(!ie(e))return null;let t=O[e]||pl[e]||`small`;return(0,F.jsxs)(`div`,{"data-tile-id":e,className:`${ul[t]||ul.small} min-h-0 min-w-0 relative ${i?`${S} ring-2 ${s===e?`ring-primary opacity-60`:`ring-primary/40`}`:``}`,onDragOver:i?j:void 0,onDrop:i?t=>de(t,e):void 0,children:[(0,F.jsx)(`div`,{className:i?`pointer-events-none h-full w-full select-none`:`h-full w-full`,children:D(e)}),i&&(0,F.jsxs)(`div`,{className:`pointer-events-auto absolute left-1 top-1 z-30 flex items-center gap-1 rounded-lg border border-border/60 bg-background/95 px-1 py-1 shadow-lg backdrop-blur-sm`,children:[(0,F.jsx)(`button`,{type:`button`,draggable:!0,onDragStart:t=>ue(t,e),onDragEnd:fe,className:`flex size-6 cursor-grab items-center justify-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-accent-foreground active:cursor-grabbing`,"aria-label":`Drag to move tile`,title:`Drag to move`,children:(0,F.jsx)(et,{className:`size-3.5`})}),(0,F.jsx)(`select`,{value:t,onChange:t=>se(e,t.target.value),className:`h-6 rounded-md border border-input bg-card px-1 text-[10px] text-foreground focus:outline-none focus:ring-1 focus:ring-ring`,"aria-label":`Tile size`,title:`Resize tile`,children:dl.map(e=>(0,F.jsx)(`option`,{value:e.key,children:e.label},e.key))}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>ce(e),className:`flex size-6 items-center justify-center rounded-md text-muted-foreground transition hover:bg-destructive/15 hover:text-destructive`,"aria-label":`Hide tile`,title:`Hide tile`,children:(0,F.jsx)(Qe,{className:`size-3.5`})})]})]},e)})})]})}function Wl({children:e}){return ll(),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(sl,{}),e]})}function Gl(){let e=r(),t=A.useMemo(()=>[{id:`open-bookmark-vault`,name:`Open Bookmark Vault`,shortcut:[`3`],section:`Navigation`,perform:()=>e(`/bookmarks`)},{id:`open-resource-vault`,name:`Open Resource Vault`,shortcut:[`1`],section:`Navigation`,perform:()=>e(`/resources`)},{id:`show-dashboard`,name:`Show Dashboard`,shortcut:[`2`],section:`Navigation`,perform:()=>e(`/`)}],[e]);return(0,Ae.useRegisterActions)(t,[t]),null}function Kl(){let e=N(e=>e.settings.ui?.themeMode),t=N(e=>e.settings.ui?.themePalette),n=N(e=>e.settings.customThemes),{setThemeMode:r,setThemePalette:i,setCustomThemeVars:a}=A.useContext(lt),o=A.useRef(void 0),s=A.useRef(void 0);return A.useEffect(()=>{e&&e!==o.current&&(o.current=e,r(e))},[e,r]),A.useEffect(()=>{if(t&&t!==s.current)if(s.current=t,i(t),nt(t))a(null);else{let e=(n||[]).find(e=>e.id===t);a(e?{light:e.light,dark:e.dark}:null)}},[t,i,a,n]),null}function ql(){let e=r(),t=l(),n=t.pathname===`/resources`,i=t.pathname===`/bookmarks`,o=!n&&!i,s=st(e=>e.editing),c=st(e=>e.toggleEditing),u=st(e=>e.setEditing);return A.useEffect(()=>{!o&&s&&u(!1)},[o,s,u]),A.useEffect(()=>{let t=t=>{if(!t.target?.closest?.(`input, textarea, select, [contenteditable='true']`)){if(t.key===`Escape`&&!o){t.preventDefault(),e(`/`);return}if(!t.metaKey&&!t.ctrlKey&&!t.altKey){if(t.key===`1`){t.preventDefault(),e(`/resources`);return}if(t.key===`2`){t.preventDefault(),e(`/`);return}if(t.key===`3`){t.preventDefault(),e(`/bookmarks`);return}}}};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e,o]),(0,F.jsxs)(`section`,{className:`relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors`,onWheel:A.useCallback(t=>{if(!(Math.abs(t.deltaX)<72||Math.abs(t.deltaX)<Math.abs(t.deltaY)*1.35)&&!t.target?.closest?.(`input, textarea, select, [contenteditable='true']`)){if(t.deltaX>0){n?e(`/`):i||e(`/bookmarks`);return}i?e(`/`):n||e(`/resources`)}},[e,n,i]),children:[(0,F.jsx)(Kl,{}),(0,F.jsx)(Gl,{}),(0,F.jsxs)(`nav`,{className:`vault-nav-center`,"aria-label":`Page navigation`,children:[(0,F.jsxs)(`button`,{type:`button`,className:`vault-nav-button ${n?`vault-nav-button-active`:``}`,onClick:()=>e(`/resources`),title:`Open Resource Vault (1)`,"aria-label":`Resource Vault`,"aria-current":n?`page`:void 0,children:[(0,F.jsx)(qe,{className:`size-4`}),(0,F.jsx)(`span`,{className:`vault-nav-number`,children:`1`})]}),(0,F.jsxs)(`button`,{type:`button`,className:`vault-nav-button ${o?`vault-nav-button-active`:``}`,onClick:()=>e(`/`),title:`Dashboard (2)`,"aria-label":`Dashboard`,"aria-current":o?`page`:void 0,children:[(0,F.jsx)(Re,{className:`size-4`}),(0,F.jsx)(`span`,{className:`vault-nav-number`,children:`2`})]}),(0,F.jsxs)(`button`,{type:`button`,className:`vault-nav-button ${i?`vault-nav-button-active`:``}`,onClick:()=>e(`/bookmarks`),title:`Open Bookmark Vault (3)`,"aria-label":`Bookmark Vault`,"aria-current":i?`page`:void 0,children:[(0,F.jsx)(We,{className:`size-4`}),(0,F.jsx)(`span`,{className:`vault-nav-number`,children:`3`})]})]}),(0,F.jsxs)(`div`,{className:`fixed right-5 top-5 z-40 flex items-center gap-3 text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]`,children:[o&&(0,F.jsx)(`button`,{type:`button`,onClick:c,className:`cursor-pointer text-4xl transition ${s?`text-primary`:`text-current opacity-90 hover:opacity-100`}`,title:s?`Finish editing layout`:`Edit layout`,"aria-label":`Edit dashboard layout`,"aria-pressed":s,children:(0,F.jsx)(Xe,{})}),(0,F.jsx)(vt,{}),(0,F.jsx)(al,{})]}),(0,F.jsx)(`div`,{style:{display:o?`block`:`none`},"aria-hidden":!o,children:(0,F.jsx)(Ul,{})}),!o&&(0,F.jsx)(a,{})]})}function Jl(){let e=N(e=>e.settings),t=e.ui||{},n=e.customThemes||[],r=nt(t.themePalette)?null:n.find(e=>e.id===t.themePalette),i=r?{light:r.light,dark:r.dark}:null;return(0,F.jsx)(ht,{initialThemeMode:t.themeMode,initialThemePalette:t.themePalette,initialCustomThemeVars:i,children:(0,F.jsx)(Ae.KBarProvider,{children:(0,F.jsx)(Wl,{children:(0,F.jsx)(ql,{})})})})}var Yl=(0,A.lazy)(()=>o(()=>import(`./BookmarksPage-BvQANwYG.js`),__vite__mapDeps([5,1,2]))),Xl=(0,A.lazy)(()=>o(()=>import(`./ResourceVaultPage-Dli6DbU9.js`),__vite__mapDeps([6,1,2]))),Zl=(0,A.lazy)(()=>o(()=>import(`./WeatherPreview-D1cxaQoY.js`),__vite__mapDeps([7,1,2,4,3]))),Ql=document.getElementById(`root`);if(!Ql)throw Error(`Root element was not found.`);(0,j.createRoot)(Ql).render((0,F.jsx)(A.StrictMode,{children:(0,F.jsx)(s,{children:(0,F.jsx)(A.Suspense,{fallback:null,children:(0,F.jsxs)(c,{children:[(0,F.jsxs)(n,{element:(0,F.jsx)(Jl,{}),children:[(0,F.jsx)(n,{path:`/`}),(0,F.jsx)(n,{path:`/bookmarks`,element:(0,F.jsx)(Yl,{})}),(0,F.jsx)(n,{path:`/resources`,element:(0,F.jsx)(Xl,{})})]}),(0,F.jsx)(n,{path:`/weather-preview`,element:(0,F.jsx)(Zl,{})})]})})})})),m().then(()=>{N.getState().reloadSettings()});export{Ne as C,Fe as S,N as T,Ue as _,Ol as a,Be as b,jl as c,Kc as d,Wc as f,Ke as g,to as h,Ml as i,zc as l,po as m,Pl as n,Dl as o,Gc as p,Fl as r,El as s,Il as t,Uc as u,He as v,je as w,Le as x,Ve as y};