(this["webpackJsonpgiffy-app"]=this["webpackJsonpgiffy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));var c="https://api.giphy.com/v1",i="7XIrr16tQKMClBgk5uWHFjHbowtammMS",r="".concat(c,"/gifs/trending?api_key=").concat(i,"&limit=25&rating=g");function a(e,t){var n="".concat(c,"/gifs/search?api_key=").concat(i,"&q=").concat(e,"&limit=10&offset=").concat(10*t,"&rating=g&lang=en");return{$api_url:e?n:r}}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(8),a=n.n(r),s=(n(14),n(2)),u=n(0),o=i.a.createContext({});function f(e){var t=e.children,n=Object(c.useState)([]),i=Object(s.a)(n,2),r=i[0],a=i[1];return Object(u.jsx)(o.Provider,{value:{gifs:r,setGifs:a},children:t})}var j=o,l=n(3),d=(n(16),n(7));function b(e,t){var n=Object(d.c)(e,t).$api_url;return fetch(n).then((function(e){return e.json()})).then(O)}var O=function(e){var t=e.data;return(void 0===t?[]:t).map((function(e){return{title:e.title,id:e.id,url:e.images.downsized_medium.url}}))};function v(e){var t=Object(c.useContext)(j),n=t.gifs,i=t.setGifs,r=Object(c.useState)(!1),a=Object(s.a)(r,2),u=a[0],o=a[1],f=Object(c.useState)(0),l=Object(s.a)(f,2),d=l[0],O=l[1];return Object(c.useEffect)((function(){o(!0),b(e).then((function(e){i(e),o(!1)}))}),[e,i]),Object(c.useEffect)((function(){0!==d&&b(e,d).then((function(e){i((function(t){return t.concat(e)}))}))}),[d,e,i]),{gifs:n,loading:u,setPage:O}}n(17);function h(e){var t=e.title,n=e.url,c=e.id;return Object(u.jsx)(l.a,{to:"/giffy-app/gifs/detail/".concat(c),children:Object(u.jsx)("div",{className:"wrapImgGif",children:Object(u.jsx)("img",{className:"imgGif",loading:"lazy",src:n,alt:t})})})}n(18);function p(){return Object(u.jsx)("div",{className:"spinner"})}n(19);function g(e){var t=e.keyword,n=v(t),c=n.gifs,i=n.loading;return Object(u.jsxs)("div",{className:"containerGifList",children:[t?Object(u.jsx)("h2",{className:"tittleGifList",children:decodeURI(t)}):Object(u.jsxs)("h2",{className:"tittleGifList",children:["Trending ",Object(u.jsx)("i",{className:"fas fa-chart-line"})]}),Object(u.jsx)("div",{className:"wrpaListOfGifs",children:i?Object(u.jsx)(p,{}):c.map((function(e){return Object(u.jsx)(h,{id:e.id,title:e.title,url:e.url},e.id)}))})]})}n(20);function x(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(l.c)(),a=Object(s.a)(r,2),o=(a[0],a[1]);return Object(u.jsxs)("form",{className:"wrapInputSearch",onSubmit:function(e){e.preventDefault(),o("/giffy-app/gifs/".concat(n))},value:n,children:[Object(u.jsx)("label",{children:Object(u.jsx)("i",{className:"fas fa-search"})}),Object(u.jsx)("input",{className:"inputSearch",onChange:function(e){i(e.target.value)},placeholder:"Search you favorite gifs ..."})]})}n(21);var m=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("div",{className:"containerHeader",children:[Object(u.jsxs)("div",{className:"wrapTitle-DarkMode",children:[Object(u.jsx)(l.a,{className:"title",to:"/giffy-app/",children:"Giffy"}),Object(u.jsxs)("div",{className:"wrapDarkMode",onClick:function(e){var t=document.body.classList;t.toggle("isDarkMode"),i(t.contains("isDarkMode"))},children:[n?Object(u.jsx)("i",{className:"fas fa-sun"}):Object(u.jsx)("i",{className:"far fa-moon"}),"DarkMode"]})]}),Object(u.jsx)(x,{})]})};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.once,n=void 0===t||t,i=Object(c.useState)(!1),r=Object(s.a)(i,2),a=r[0],u=r[1],o=Object(c.useRef)();return Object(c.useEffect)((function(){var e=new IntersectionObserver((function(e,t){e[0].isIntersecting?(u(!0),n&&t.disconnect()):!n&&u(!1)}),{rootMargin:"200px"});return e.observe(o.current),function(){return e.disconnect()}}),[]),{isNearScreen:a,elementOfObserver:o}}var y=i.a.lazy((function(){return n.e(3).then(n.bind(null,27))}));function k(){var e=N(),t=e.isNearScreen,n=e.elementOfObserver;return Object(u.jsx)("div",{ref:n,children:Object(u.jsx)(c.Suspense,{fallback:null,children:t?Object(u.jsx)(y,{}):null})})}var S=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"wrpaHome",children:[Object(u.jsx)(g,{}),Object(u.jsx)(k,{})]})]})},w=(n(22),n(9)),G=n.n(w);var C=function(e){var t=e.params,n=v(t.keyword).setPage,i=N({once:!1}),r=i.isNearScreen,a=i.elementOfObserver,s=Object(c.useCallback)(G()((function(){return n((function(e){return e+1}))}),500),[]);return Object(c.useEffect)((function(){r&&s()}),[s,r]),Object(u.jsxs)("div",{className:"wrapSearchResults",children:[Object(u.jsx)(m,{}),Object(u.jsx)(g,{keyword:t.keyword}),Object(u.jsx)("div",{ref:a})]})};n(23);function D(e){var t=e.params,n=Object(c.useContext)(j).gifs.find((function(e){return e.id===t.id})),i=n.title,r=n.id,a=n.url;return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"containerGifDetali",children:[Object(u.jsx)("h2",{className:"titleGifDetail",children:i}),Object(u.jsx)(h,{title:i,id:r,url:a})]})]})}var M=function(){return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.b,{path:"/giffy-app/",component:S}),Object(u.jsx)(l.b,{path:"/giffy-app/gifs/:keyword",component:C}),Object(u.jsx)(l.b,{path:"/giffy-app/gifs/detail/:id",component:D})]})},I=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),I()}],[[24,1,2]]]);
//# sourceMappingURL=main.e950e502.chunk.js.map