import{r as p,o as i,c as m,a as $,M as R,b,V as N,u as M,d as O,e as g,f as h,g as _,w as c,p as q,h as X,i as v,j as k,k as A,l as P,t as L,m as l,n as I,F as x,T as z,q as B,s as K,v as W,x as F,y as J,A as G,z as U}from"./vendor.466f03f8.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Q();var E=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const Y={};function Z(e,t){const n=p("router-view");return i(),m(n)}var ee=E(Y,[["render",Z]]);const T=$.create({baseURL:{}.VITE_HOST});T.interceptors.response.use(e=>{const t=e.data;return e.status>=400?(globalThis.$message.error(e.data.message),Promise.reject(new Error(t.message||"Error"))):e},e=>(R.error(e.response.data.message),Promise.reject(e)));function te(e){return T({url:"/api/login",method:"post",data:e})}function ne(){return T({url:"/api/logout",method:"delete"})}const w="arco_admin_template_token";function oe(){return b.get(w)}function re(e){return b.set(w,e)}function se(){return b.remove(w)}const j=()=>({token:"token",name:"",avatar:"",role:null}),ae=j(),ie={async login({commit:e},t){try{const n=await te(t);return e("SET_TOKEN",n.data.token),re(n.data.token),!0}catch{return!1}},async logout({commit:e}){try{await ne()}catch{}se(),e("RESET_STATE")}},ce={RESET_STATE:e=>{Object.assign(e,j())},SET_TOKEN:(e,t)=>{e.token=t}};var ue={namespaced:!0,state:ae,actions:ie,mutations:ce};const le=new N.Store({modules:{user:ue}}),de="modulepreload",C={},pe="/arco_admin_template/dist/",y=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${pe}${r}`,r in C)return;C[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":de,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((u,f)=>{a.addEventListener("load",u),a.addEventListener("error",f)})})).then(()=>t())};var me="/arco_admin_template/dist/assets/icon.cff29bb4.svg";const D=e=>(q("data-v-187f38d5"),e=e(),X(),e),_e={class:"navbar"},he=D(()=>h("div",{class:"side-left"},[h("div",{style:{height:"38px"}},[h("img",{src:me})]),h("h5",{class:"arco-typography brand"},"Arco Design")],-1)),fe={class:"side-right"},ye=D(()=>h("img",{alt:"avatar",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"},null,-1)),ge=v("Github"),ve=v("\u9000\u51FA\u767B\u5F55"),be={setup(e){const t=M(),n=O(),r=async o=>{switch(o){case"\u9000\u51FA\u767B\u5F55":await t.dispatch("user/logout"),await n.replace("/login");break;case"Github":window.open("https://github.com/zhaozhentao/arco_admin_template","_blank");break}};return(o,s)=>{const a=p("a-avatar"),u=p("a-doption"),f=p("a-dropdown");return i(),g("div",_e,[he,h("ul",fe,[h("li",null,[_(f,{onSelect:r},{content:c(()=>[_(u,null,{default:c(()=>[ge]),_:1}),_(u,null,{default:c(()=>[ve]),_:1})]),default:c(()=>[_(a,{size:32},{default:c(()=>[ye]),_:1})]),_:1})])])])}}};var ke=E(be,[["__scopeId","data-v-187f38d5"]]);const V={props:{item:Object,parentPath:String},setup(e){const t=e,n=k(()=>{let r=t.item.path.startsWith("/")?t.item.path.substr(1):t.item.path;return r=t.parentPath+"/"+r,r.replaceAll("//","/")});return(r,o)=>{const s=p("a-menu-item"),a=p("a-sub-menu");return e.item.children===void 0||e.item.children.length===1?(i(),m(s,{key:l(n)},A({default:c(()=>[v(" "+L(e.item.children===void 0?e.item.meta.title:e.item.children[0].meta.title),1)]),_:2},[e.item.children!==void 0?{name:"icon",fn:c(()=>[(i(),m(P(e.item.children[0].meta.icon)))])}:void 0]),1024)):(i(),m(a,{key:l(n)},A({title:c(()=>[v(L(e.item.meta.title),1)]),default:c(()=>[(i(!0),g(x,null,I(e.item.children,u=>(i(),m(l(V),{key:u.path,item:u,"parent-path":l(n)},null,8,["item","parent-path"]))),128))]),_:2},[e.item.meta.icon?{name:"icon",fn:c(()=>[(i(),m(P(e.item.meta.icon)))])}:void 0]),1024))}}},xe={setup(e){const t=O(),n=k(()=>t.options.routes.filter(s=>!s.hidden)),r=k(()=>t.currentRoute.value.path),o=s=>t.push(s);return(s,a)=>{const u=p("a-menu");return i(),m(u,{style:{width:"220px",height:"100%",flexShrink:0},"default-selected-keys":[l(r)],"auto-open":!0,onMenuItemClick:o,"show-collapse-button":""},{default:c(()=>[(i(!0),g(x,null,I(l(n),f=>(i(),m(l(V),{key:f.path,item:f,"parent-path":""},null,8,["item"]))),128))]),_:1},8,["default-selected-keys"])}}};const Ee={setup(e){return(t,n)=>{const r=p("router-view");return i(),g(x,null,[_(l(ke)),_(l(xe)),_(z,{name:"fade-transform",mode:"out-in"},{default:c(()=>[_(r,{class:"content"})]),_:1})],64)}}};var S=E(Ee,[["__scopeId","data-v-12a03072"]]);const Te=[{path:"/404",component:()=>y(()=>import("./404.df7c3bbf.js"),["assets/404.df7c3bbf.js","assets/vendor.466f03f8.js"]),hidden:!0},{path:"/login",component:()=>y(()=>import("./index.fd7d4967.js"),["assets/index.fd7d4967.js","assets/index.8aeda2c1.css","assets/vendor.466f03f8.js"]),hidden:!0},{path:"/",component:S,meta:{title:"Example",icon:"icon-apps"},children:[{name:"table",path:"/table",component:()=>y(()=>import("./index.b8c74cec.js"),["assets/index.b8c74cec.js","assets/index.14fbe298.css","assets/vendor.466f03f8.js"]),meta:{title:"table"}},{name:"form",path:"/form",component:()=>y(()=>import("./index.ef75acd1.js"),["assets/index.ef75acd1.js","assets/index.58975bd8.css","assets/vendor.466f03f8.js"]),meta:{title:"form"}}]},{path:"/arco",component:S,children:[{path:"",component:()=>y(()=>import("./index.ffce9194.js"),[]),name:"Arco Design",meta:{title:"Arco Design Doc",icon:"icon-bytedance-color"}}]},{path:"/donate",component:S,children:[{path:"",name:"donate",component:()=>y(()=>import("./index.2a61a5c9.js"),["assets/index.2a61a5c9.js","assets/vendor.466f03f8.js"]),meta:{title:"Donate",icon:"icon-thumb-up"}}]},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}],we=()=>B({history:K(),routes:Te}),H=we();H.beforeEach(async(e,t,n)=>{if(e.path==="/login"){n();return}if(!oe()){R.info("\u8BF7\u5148\u767B\u5F55"),n("/login");return}n()});const d=F;function Se(e){d.XHR.prototype.__send=d.XHR.prototype.send,d.XHR.prototype.send=function(){if(this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.custom.requestHeaders){const t={};for(let n in this.custom.requestHeaders)t[n.toString().toLowerCase()]=this.custom.requestHeaders[n];this.custom.options=Object.assign({},this.custom.options,{headers:t})}this.__send.apply(this,arguments)},d.XHR.prototype.proxy_open=d.XHR.prototype.open,d.XHR.prototype.open=function(){let t=this.responseType;this.proxy_open(...arguments),this.custom.xhr&&t&&(this.custom.xhr.responseType=t)};for(const{url:t,method:n,response:r,timeout:o}of e)Ae(o),d.mock(W(t,void 0,{end:!1}),n||"get",Oe(r))}function Re(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function Oe(e){return function(t){let n=null;if(typeof e=="function"){const{body:r,type:o,url:s,headers:a}=t;n=e({method:o,body:JSON.parse(r),query:Re(s),headers:a})}else n=e;return d.mock(n)}}function Ae(e=0){e&&d.setup({timeout:e})}var Pe=[{url:"/api/login",method:"post",statusCode:200,response:({body:e})=>({token:"user token",name:"Captain"})},{url:"/api/logout",method:"delete",statusCode:200,response:()=>({message:"success"})}];function Le(){Se([...Pe])}J(ee).use(G).use(U).use(le).use(H).mount("#app");Le();export{E as _};
