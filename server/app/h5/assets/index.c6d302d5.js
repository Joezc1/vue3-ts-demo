import{c as p,a as m,b as _,d as h,u as y,r as v,o as g,e as k,f as L,B as b,N as E,F as O,g as x,C,h as P,i as S,I as $}from"./vendor.4a9224a2.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};A();const B="modulepreload",u={},I="/",a=function(o,c){return!c||c.length===0?o():Promise.all(c.map(r=>{if(r=`${I}${r}`,r in u)return;u[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":B,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((d,f)=>{s.addEventListener("load",d),s.addEventListener("error",f)})})).then(()=>o())},N=[{path:"/",component:()=>a(()=>import("./index.71d6a143.js"),["assets/index.71d6a143.js","assets/index.91b980ff.css","assets/vendor.4a9224a2.js","assets/vendor.9e5e37bb.css"])},{path:"/home",component:()=>a(()=>import("./index.502064ac.js"),["assets/index.502064ac.js","assets/vendor.4a9224a2.js","assets/vendor.9e5e37bb.css"])}],w=p({history:m(),routes:N}),F={namespaced:!0,state:()=>({counter:0}),mutations:{increment(i,o){i.counter=o}}},l=Symbol(),R=_({modules:{user:F},plugins:[h({paths:["user"]})]});function V(){return y(l)}var j=(i,o)=>{const c=i.__vccOpts||i;for(const[r,e]of o)c[r]=e;return c};const q={};function D(i,o){const c=v("router-view");return g(),k(c)}var G=j(q,[["render",D]]);const n=L(G);n.use(b);n.use(E);n.use(O);n.use(x);n.use(C);n.use(P);n.use(S);n.use($);n.use(R,l);n.use(w);n.mount("#app");export{j as _,V as u};