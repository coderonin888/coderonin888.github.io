(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{247:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return g}));n(45);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function p(t){return a.test(t)}function c(t){if(p(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+n}function l(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function u(t,e,n){if(p(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return h(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return u(n,e,r);if(Array.isArray(e))return Object.assign(u(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(u(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function h(t){const e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},275:function(t,e,n){},289:function(t,e,n){"use strict";n(275)},306:function(t,e,n){"use strict";n.r(e);n(45);var r=n(247);function i(t,e,n){const r=[];!function t(e,n){for(let r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(let e=0;e<r.length;e++){const i=r[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return r[e+n]}}var s={props:["sidebarItems"],computed:{showPageToc(){return this.prev||this.next},lastUpdated(){return this.$page.lastUpdated?this.$page.lastUpdated.split(" ")[0]:this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(r.h)(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,i(e,n,-1));var e,n},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(r.h)(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,i(e,n,1));var e,n},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:n="",docsBranch:r="master",docsRepo:i=t}=this.$site.themeConfig;return i&&e&&this.$page.relativePath?this.createEditLink(t,i,n,r,this.$page.relativePath):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,s){if(/bitbucket.org/.test(t)){return(r.e.test(e)?e:t).replace(r.a,"")+"/src"+`/${i}/`+(n?n.replace(r.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}return(r.e.test(e)?e:"https://github.com/"+e).replace(r.a,"")+"/edit"+`/${i}/`+(n?n.replace(r.a,"")+"/":"")+s}}},a=(n(289),n(7)),o=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("main",{class:{withouttoc:!t.showPageToc,page:!0}},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null);e.default=o.exports}}]);