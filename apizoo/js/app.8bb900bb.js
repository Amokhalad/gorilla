(function(){"use strict";var t={1680:function(t,a,e){var n=e(7764),i=e(4108);function l(t,a,e,n,l,o){const r=(0,i.E1)("router-view"),s=(0,i.E1)("v-app");return(0,i.Wz)(),(0,i.Az)(s,null,{default:(0,i.Ql)((()=>[(0,i.K2)(r)])),_:1})}var o={name:"App"},r=e(4100);const s=(0,r.c)(o,[["render",l]]);var c=s,u=e(7464),d=e(9096);const p=t=>((0,i.ED)("data-v-25c674d6"),t=t(),(0,i.ii)(),t),f=(0,i.IL)('<div class="navbar" data-v-25c674d6><a href="../index.html" data-v-25c674d6>Home</a><span class="nav-separator" data-v-25c674d6>|</span><a href="../blog.html" data-v-25c674d6>Blog</a><span class="nav-separator" data-v-25c674d6>|</span><a href="" data-v-25c674d6>API Zoo Index</a></div>',1),v={class:"api-zoo-container"},h=p((()=>(0,i.QD)("h1",null,"🦍 Gorilla: API Zoo Index 🚀",-1))),m=p((()=>(0,i.QD)("p",null,"Welcome to the API Zoo, a community-maintained repository of up-to-date API documentation. Our goal is to create and maintain an accessible collection of API documentation that can be utilized by LLMs to extend their capability to use tools through API calls.",-1))),g=p((()=>(0,i.QD)("br",null,null,-1))),b=p((()=>(0,i.QD)("p",null,[(0,i.mY)("If you're interested in contributing to the growth and maintenance of the API Zoo, we encourage you to visit our "),(0,i.QD)("a",{href:"https://github.com/ShishirPatil/gorilla/tree/main",target:"_blank"},"GitHub repository"),(0,i.mY)(". Your contributions can help ensure that the documentation remains current and that new and useful APIs are continually added to our collection. To learn more about how you can contribute, please "),(0,i.QD)("a",{href:"https://github.com/ShishirPatil/gorilla/tree/main/data",target:"_blank"},"go here"),(0,i.mY)(".")],-1))),D=p((()=>(0,i.QD)("br",null,null,-1))),y=["href"];function _(t,a,e,l,o,r){const s=(0,i.E1)("v-text-field"),c=(0,i.E1)("v-btn"),u=(0,i.E1)("v-data-table");return(0,i.Wz)(),(0,i.An)("div",null,[f,(0,i.QD)("div",v,[h,m,g,b,D,(0,i.K2)(s,{modelValue:t.search,"onUpdate:modelValue":a[0]||(a[0]=a=>t.search=a),label:"Search by api name, contributor, version, or functionality...","single-line":"","hide-details":""},null,8,["modelValue"]),(0,i.K2)(u,{headers:t.headers,items:t.apis,search:t.search,"item-key":"api_name",class:"api-data-table"},{["item.api_name"]:(0,i.Ql)((({item:t})=>[(0,i.QD)("a",{href:t.file_url,target:"_blank"},(0,d.WA)(t.api_name),9,y)])),["item.action"]:(0,i.Ql)((({item:t})=>[(0,i.K2)(c,{color:"primary",onClick:(0,n.Y7)((()=>r.goToApiDetail(t)),["stop"])},{default:(0,i.Ql)((()=>[(0,i.mY)("Details")])),_:2},1032,["onClick"])])),_:2},1032,["headers","items","search"])])])}e(3248);var Q={data:()=>({search:"",headers:[{title:"API Name",align:"start",value:"api_name"},{title:"Contributor",value:"user_name"},{title:"API Version",align:"start",value:"api_version"},{title:"Functionality",value:"functionality"},{title:"Actions",value:"action",sortable:!1}],apis:[]}),created(){this.fetchApis()},methods:{async fetchApis(){try{const t=await fetch("http://34.123.98.138/api/data");if(!t.ok)throw new Error("Failed to fetch");const a=await t.json();this.apis=a}catch(t){console.error("There was an error fetching the API data:",t)}},goToApiDetail(t){this.$store.dispatch("updateApiDetails",t),this.$router.push({name:"apiDetail",params:{apiName:t.api_name}})}}};const A=(0,r.c)(Q,[["render",_],["__scopeId","data-v-25c674d6"]]);var w=A;const E=t=>((0,i.ED)("data-v-488c6d18"),t=t(),(0,i.ii)(),t),I=(0,i.IL)('<div class="navbar" data-v-488c6d18><a href="../../index.html" data-v-488c6d18>Home</a><span class="nav-separator" data-v-488c6d18>|</span><a href="../../blog.html" data-v-488c6d18>Blog</a><span class="nav-separator" data-v-488c6d18>|</span><a href="../" data-v-488c6d18>API Zoo Index</a></div>',1),P={class:"api-detail-container"},x=["href"],K={class:"my-6"},W=E((()=>(0,i.QD)("h3",null,"Functionality",-1))),k={class:"functionality-text"},O={class:"my-6"},z=E((()=>(0,i.QD)("h3",null,"API Call",-1))),j={class:"api-call-wrapper"},Y={class:"api-call"},S={class:"my-6"},C=E((()=>(0,i.QD)("h3",null,"API Arguments",-1))),T={class:"my-6"},Z=E((()=>(0,i.QD)("h3",null,"Example Code",-1))),V={class:"code-container",style:{"overflow-x":"auto"}},F={class:"language-python"};function L(t,a,e,n,l,o){const r=(0,i.E1)("v-col"),s=(0,i.E1)("v-icon"),c=(0,i.E1)("v-row"),u=(0,i.E1)("v-card-title"),p=(0,i.E1)("v-card-subtitle"),f=(0,i.E1)("v-divider"),v=(0,i.E1)("v-list-item-title"),h=(0,i.E1)("v-list-item-content"),m=(0,i.E1)("v-list-item"),g=(0,i.E1)("v-list"),b=(0,i.E1)("v-card-text"),D=(0,i.E1)("v-card"),y=(0,i.E1)("v-container");return(0,i.Wz)(),(0,i.An)("div",null,[I,(0,i.QD)("div",P,[(0,i.K2)(y,{class:"pa-6"},{default:(0,i.Ql)((()=>[(0,i.K2)(D,{class:"ma-5 elevation-2"},{default:(0,i.Ql)((()=>[(0,i.K2)(u,{class:"headline"},{default:(0,i.Ql)((()=>[(0,i.K2)(c,{"no-gutters":"",align:"center",justify:"space-between"},{default:(0,i.Ql)((()=>[(0,i.K2)(r,{cols:"11"},{default:(0,i.Ql)((()=>[(0,i.mY)((0,d.WA)(o.apiDetails.api_name),1)])),_:1}),(0,i.K2)(r,{cols:"1",class:"text-right"},{default:(0,i.Ql)((()=>[(0,i.QD)("a",{href:o.apiDetails.file_url,target:"_blank"},[(0,i.K2)(s,{large:""},{default:(0,i.Ql)((()=>[(0,i.mY)("mdi-github")])),_:1})],8,x)])),_:1})])),_:1})])),_:1}),(0,i.K2)(p,{class:"grey--text"},{default:(0,i.Ql)((()=>[(0,i.mY)("Version: "+(0,d.WA)(o.apiDetails.api_version),1)])),_:1}),(0,i.K2)(b,null,{default:(0,i.Ql)((()=>[(0,i.K2)(f),(0,i.QD)("div",K,[W,(0,i.QD)("p",k,(0,d.WA)(o.apiDetails.functionality),1)]),(0,i.QD)("div",O,[z,(0,i.QD)("div",j,[(0,i.QD)("code",Y,(0,d.WA)(o.apiDetails.api_call),1)])]),(0,i.QD)("div",S,[C,(0,i.K2)(g,{dense:""},{default:(0,i.Ql)((()=>[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(o.apiDetails.api_arguments,((t,a)=>((0,i.Wz)(),(0,i.Az)(m,{key:a},{default:(0,i.Ql)((()=>[(0,i.K2)(h,null,{default:(0,i.Ql)((()=>[(0,i.K2)(v,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,d.WA)(a)+": "+(0,d.WA)(t),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),(0,i.QD)("div",T,[Z,(0,i.QD)("div",V,[(0,i.QD)("pre",F,[(0,i.QD)("code",null,(0,d.WA)(o.apiDetails.example_code),1)])])])])),_:1})])),_:1})])),_:1})])])}var M={computed:{apiDetails(){return this.$store.getters.getApiDetails}}};const H=(0,r.c)(M,[["render",L],["__scopeId","data-v-488c6d18"]]);var N=H;const $=[{path:"/",name:"ApiZoo",component:w},{path:"/api/:apiName",name:"apiDetail",component:N,props:!0}],B=(0,u.gv)({history:(0,u.oz)("/apizoo/"),routes:$});var G=B,U=e(7192),q=e(6868);const J=new q.cp({storage:window.localStorage});var R=(0,U.eC)({state:{apiDetails:{}},mutations:{setApiDetails(t,a){t.apiDetails=a}},actions:{updateApiDetails({commit:t},a){t("setApiDetails",a)}},getters:{getApiDetails:t=>t.apiDetails},plugins:[J.plugin]}),X=e(8812),tt=(e(8985),e(7204)),at=e(6332);const et=(0,X.W_)({components:tt,directives:at}),nt=(0,n.W0)(c);nt.use(G),nt.use(et),nt.use(R),nt.mount("#app")}},a={};function e(n){var i=a[n];if(void 0!==i)return i.exports;var l=a[n]={exports:{}};return t[n].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(a,n,i,l){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],l=t[u][2];for(var r=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(e.O).every((function(t){return e.O[t](n[s])}))?n.splice(s--,1):(r=!1,l<o&&(o=l));if(r){t.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[n,i,l]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,n){var i,l,o=n[0],r=n[1],s=n[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(s)var u=s(e)}for(a&&a(n);c<o.length;c++)l=o[c],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=e.O(void 0,[999],(function(){return e(1680)}));n=e.O(n)})();
//# sourceMappingURL=app.8bb900bb.js.map