(this["webpackJsonpgiffy-app"]=this["webpackJsonpgiffy-app"]||[]).push([[3],{24:function(t,n,c){},26:function(t,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return f}));var e=c(2),i=c(1),a=c(4);var s=function(t){var n=t.data;return void 0===n?[]:n},r=c(3),o=(c(24),c(0));function p(t){var n=t.options;return Object(o.jsxs)("div",{className:"wrap-categori-TrendigTopics",children:[Object(o.jsx)("h2",{className:"tittleTopics",children:"Trending Topics"}),Object(o.jsx)("div",{className:"wrap-topics",children:n.map((function(t){return Object(o.jsxs)(r.a,{to:"/giffy-app/gifs/".concat(t),children:[t," "]},t)}))})]})}function f(){var t=Object(i.useState)([]),n=Object(e.a)(t,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){fetch("".concat(a.b,"/trending/searches?api_key=").concat(a.a)).then((function(t){return t.json()})).then(s).then(r)}),[]),Object(o.jsx)(p,{options:c})}}}]);
//# sourceMappingURL=3.309c12de.chunk.js.map