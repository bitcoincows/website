import{a1 as s}from"./framework.da3b0f29.js";import{x as r,B as i,S as l,i as c}from"../app.d6828095.js";import"./theme.80eb2a50.js";var d=Object.defineProperty,a=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,n=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))m.call(e,t)&&n(o,t,e[t]);if(a)for(var t of a(e))b.call(e,t)&&n(o,t,e[t]);return o};class h{constructor(e){this.openModal=r.open,this.closeModal=r.close,this.subscribeModal=r.subscribe,this.setTheme=i.setThemeConfig,i.setThemeConfig(e),l.setConfig(p({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await s(()=>import("./index.3dbdf2e0.js"),["assets/chunks/index.3dbdf2e0.js","assets/app.d6828095.js","assets/chunks/framework.da3b0f29.js","assets/chunks/theme.80eb2a50.js","assets/chunks/browser.a1ac24ac.js"]);const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),c.setIsUiLoaded(!0)}}}export{h as Web3Modal};
