(function(t){function e(e){for(var r,n,i=e[0],l=e[1],u=e[2],c=0,f=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+".css",s=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===s))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],c=u.getAttribute("data-href");if(c===r||c===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t);var f=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,a[1](f)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1daf":function(t,e,a){"use strict";var r=a("debd"),n=a.n(r);n.a},"2acc":function(t,e,a){},3695:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"slideCont w-100 px-2 px-sm-3 pb-3 m-0",attrs:{"align-v":"center","align-h":"center"}},[a("b-col",{staticClass:"slide w-100 bg-white"},[a("b-row",{staticClass:"slide-header theme-bg text-center px-2 px-sm-3 px-md-4 py-4 text-white"},[a("b-col",{staticClass:"w-100"},[t._t("header",[t._v("Header")])],2)],1),a("b-row",{staticClass:"slide-content px-1 px-sm-2 px-md-3 py-3"},[a("b-col",{staticClass:"w-100",attrs:{sm:""}},[t._t("default")],2)],1)],1)],1)},n=[],s={},o=s,i=(a("f389"),a("2877")),l=Object(i["a"])(o,r,n,!1,null,null,null);e["a"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-100 themer",attrs:{id:"app"}},[a("div",{staticClass:"h-100 w-100 p-0 d-flex flex-column",attrs:{id:"appWrapper"}},[a("b-navbar",{staticClass:"w-100 theme-bg",attrs:{id:"pageHeadNav",tag:"header",type:"dark"}},[a("b-container",{staticClass:"navCont px-sm-4 px-md-4 px-lg-4",attrs:{fluid:""}},[a("b-collapse",{attrs:{id:"head-nav","is-nav":""}},[a("b-navbar-nav",{staticClass:"mx-auto"},t._l(t.slides,(function(e){return a("b-nav-item",{staticClass:"header-btn mx-2",attrs:{to:e}},[a("span",{staticClass:"text-white"},[t._v(t._s(t._f("capitalize")(e)))])])})),1)],1)],1)],1),a("b-container",{staticClass:"flex-grow-1",attrs:{id:"slidesCont",tag:"main",fluid:""}},[a("b-row",{staticClass:"h-100 p-0 pt-3",attrs:{id:"slides","align-v":"center"}},[a("transition",[a("router-view")],1)],1)],1)],1)])},s=[],o={name:"app",data(){return{slides:["About","Resume","Portfolio"],colors:["#E74C3C","#8E44AD","#3498DB","#16A085","#2ECC71","#F39C12"]}},mounted(){this.setThemeColor(this.colors[Math.floor(Math.random()*this.colors.length)])},methods:{setThemeColor(t){this.$el.style.setProperty("--themeColor",t)}}},i=o,l=(a("5c0b"),a("2877")),u=Object(l["a"])(i,n,s,!1,null,null,null),c=u.exports,f=a("498a"),p=a("a7e2"),d=a("7049"),h=a("f9bc"),b=a("40aa"),m=a("b720"),v=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.about?a("p-slide",{scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",[a("b-col",{staticClass:"p-sm-0",attrs:{sm:"4"}},[a("b-row",{staticClass:"photoAbout mx-auto h-100 text-center p-3 p-sm-1",attrs:{"align-v":"center"}},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:t.$root.publicPath+"images/myimg.jpg",alt:"avatar"}})])],1),a("b-col",[a("b-row",{staticClass:"h-100",attrs:{"align-v":"center"}},[a("b-col",[a("h1",[t._v(t._s(t.about.name))]),a("transition",{attrs:{name:"_prof",mode:"out-in"}},[a("p",{key:t.prof},[t._v(t._s(t._f("capitalize")(t.prof)))])]),a("ul",{staticClass:"list-inline"},t._l(t.about.social,(function(t){return a("li",{staticClass:"list-inline-item mx-2 soc bg-white"},[a("b-link",{staticClass:"theme-color",class:"fab fa-"+t.name+" fa-lg",attrs:{href:t.link,target:"_blank"}})],1)})),0)],1)],1)],1)],1)]},proxy:!0}],null,!1,1520692910)},[a("b-row",{staticClass:"mt-sm-2 mt-md-4"},[a("b-col",{attrs:{md:""}},[a("h2",[t._v(t._s(t.about.desc.title[0])+" "),a("strong",{staticClass:"theme-color"},[t._v(t._s(t.about.desc.title[1]))])]),a("p",[t._v(t._s(t.about.desc.text))])]),a("b-col",{attrs:{md:""}},[a("b-row",{staticClass:"h-100"},[a("b-col",[a("ul",{staticClass:"list-unstyled about-list d-flex flex-column justify-content-around"},t._l(t.about.infoList,(function(e){return a("li",[a("span",{staticClass:"title text-dark"},[t._v(t._s(e.key))]),a("span",{staticClass:"value text-secondary"},[t._v(t._s(e.value))])])})),0)])],1)],1)],1)],1):t._e()},C=[],y=a("3695"),_=a("ee8a"),w={data(){return{about:null,prof:""}},async beforeCreate(){await _["a"].fetchDataJson("about").then(t=>{this.about=t})},mountedt(){this.profCarousel()},methods:{profCarousel(){let t=0;this.prof=about.prof[t++],setInterval(()=>{this.prof=about.prof[t++],t>=about.prof.length&&(t=0)},5e3)}},components:{PSlide:y["a"]}},x=w,j=(a("d3d4"),a("1daf"),Object(l["a"])(x,g,C,!1,null,"057f3638",null)),k=j.exports;r["a"].use(v["a"]);const E=[{path:"/about",alias:"/",name:"About",component:k},{path:"/resume",name:"Resume",component:function(){return a.e("about").then(a.bind(null,"70d2"))}},{path:"/portfolio",name:"Portfolio",component:function(){return a.e("about").then(a.bind(null,"3def"))}},{path:"*",redirect:"/"}],P=new v["a"]({mode:"history",routes:E,scrollBehavior(t,e,a){return a||{x:0,y:0}}});var O=P;r["a"].config.productionTip=!1,r["a"].use(f["a"]),r["a"].use(p["a"]),r["a"].use(d["a"]),r["a"].use(h["a"]),r["a"].use(b["a"]),r["a"].use(m["a"]),r["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})),new r["a"]({data:{publicPath:"/"},router:O,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},b025:function(t,e,a){},d3d4:function(t,e,a){"use strict";var r=a("b025"),n=a.n(r);n.a},debd:function(t,e,a){},ee8a:function(t,e,a){"use strict";var r={};e["a"]={async fetchDataJson(t){return r[t]?r[t]:fetch(`data/${t}.json`).then(t=>{if(t.ok)return t.json();throw new Error("Resourse not loaded")}).then(e=>{return r[t]=e}).catch(t=>{return t instanceof Error?t.message:t})}}},f389:function(t,e,a){"use strict";var r=a("2acc"),n=a.n(r);n.a}});
//# sourceMappingURL=app.js.map