(this.webpackJsonprecipies=this.webpackJsonprecipies||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),i=n.n(s),a=(n(11),n(2)),u=n.n(a),j=n(4),o=n(5),p=(n(13),n(0)),h=function(e){var t=e.recipe;return Object(p.jsxs)("div",{className:"recipe",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("img",{src:t.thumbnail||"https://lojickse7en.github.io/recipe-search-app-reactjs/placeholder.jpg",alt:t.title}),Object(p.jsx)("p",{children:t.title})]}),t.ingredients&&Object(p.jsx)("ul",{children:t.ingredients.split(",").map((function(e){return Object(p.jsx)("li",{children:e})}))}),Object(p.jsx)("a",{href:t.href,target:"_blank",children:"View Recipe"})]})};var l=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),a=i[0],l=i[1],b=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://lojickse7en.github.io/recipe-search-app-reactjs/?search=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=encodeURIComponent(a))){e.next=6;break}return e.next=4,b(t);case 4:n=e.sent,r(n);case 6:case"end":return e.stop()}}),e)})))()}),[a]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Recipe Search App"}),Object(p.jsxs)("form",{className:"searchForm",onSubmit:function(e){return function(e){e.preventDefault();var t=e.target.querySelector("#searchText");l(t.value)}(e)},children:[Object(p.jsx)("input",{id:"searchText",type:"text"}),Object(p.jsx)("button",{children:"Search"})]}),a&&Object(p.jsxs)("p",{children:["Results for ",a,"..."]}),Object(p.jsx)("div",{className:"recipe-container",children:n.length&&n.map((function(e){return Object(p.jsx)(h,{recipe:e},e.href)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.4fba6839.chunk.js.map