(window.webpackJsonp=window.webpackJsonp||[]).push([[27,10,21,22],{277:function(t,e,n){"use strict";n.r(e);var o=n(289),r={name:"Nav",directives:{clickOutside:n.n(o).a.directive},data:function(){return{isMobileDropdown:!1,isMobileMenu:!1,isDropDownShow:!1}},methods:{closeDropdown:function(t){this.isDropDownShow=!1},close:function(){this.isMobileMenu=!1,this.isMobileDropdown=!1},openDropdown:function(){this.isMobileDropdown=!this.isMobileDropdown}}},c=n(44),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"menu"},[e("nav",{staticClass:"navbar py-0 navbar-expand-lg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"menu__block"},[e("div",{staticClass:"menu__block--logo"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{staticClass:"d-block mx-auto img-fluid",attrs:{src:n(279),alt:"Logo"}})])],1),t._v(" "),e("div",{staticClass:"menu__block--desktop d-none d-lg-block"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("NuxtLink",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("span",{on:{click:function(e){t.isDropDownShow=!t.isDropDownShow}}},[e("img",{staticClass:"ms-1",attrs:{src:n(280),alt:"Dropdown"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.isDropDownShow?e("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-menu"},[e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Software Development")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Product Design")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Cloud & DevOps")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Analytic Solutions")])],1)]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/projects"}},[t._v("Case studies")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),e("div",{staticClass:"menu__block--mobile d-block d-lg-none",on:{click:function(e){t.isMobileMenu=!t.isMobileMenu}}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")]),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},[t.isMobileMenu?e("div",{staticClass:"menu__block--mobile--show"},[e("div",[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",[e("img",{staticClass:"mx-auto img-fluid",attrs:{src:n(279),alt:"Logo"}})]),t._v(" "),e("div",{staticClass:"menu__block--mobile--close",on:{click:t.close}},[e("img",{attrs:{src:n(288),alt:"Close"}})])]),t._v(" "),e("ul",{staticClass:"navbar-nav mt-4"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("span",{staticClass:"menu__block--mobile--arrow"},[e("img",{staticClass:"ms-1",attrs:{src:n(280),alt:"Dropdown"},on:{click:t.openDropdown}})]),t._v(" "),e("ul",{staticClass:"dropdown-menu menu__block--mobile--dropdown",class:{"d-block":t.isMobileDropdown}},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Software Development")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Product Design")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Cloud & DevOps")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Analytic Solutions")])],1)])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/projects"}},[t._v("Case Studies")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])]):t._e()]),t._v(" "),e("div",{staticClass:"menu__block--cta d-none d-lg-block"},[e("NuxtLink",{staticClass:"btn-blue",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-items-center"},[t._v("\n                            Quote for Project\n                        ")])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(277).default,Header:n(284).default})},279:function(t,e,n){t.exports=n.p+"img/logo.a479f33.svg"},280:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDVfODQ0KSI+CjxwYXRoIGQ9Ik01Ljg1Nzk4IDUuNTE0NkwxMC44NDQ4IDAuNTYxNDU2QzExLjAxNDUgMC4zOTI5MzEgMTEuMjg1OCAwLjM5NjcyMyAxMS40NTA5IDAuNTY5OTE0QzExLjYxNTkgMC43NDMxMDYgMTEuNjEyMiAxLjAyMDA3IDExLjQ0MjYgMS4xODg1NEw2LjE1Njg0IDYuNDM4NTRDNS45OTA0OSA2LjYwMzggNS43MjU0NyA2LjYwMzggNS41NTkxMiA2LjQzODU0TDAuMjczNDA4IDEuMTg4NTRDMC4xMDM3NSAxLjAyMDA3IDAuMTAwMDM3IDAuNzQzMTA1IDAuMjY1MTIyIDAuNTY5OTE0QzAuNDMwMTUxIDAuMzk2NzIyIDAuNzAxNDY2IDAuMzkyOTMgMC44NzExMjIgMC41NjE0NTVMNS44NTc5OCA1LjUxNDZaIiBmaWxsPSIjMDkwOTIwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTA1Xzg0NCI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},282:function(t,e,n){t.exports=n.p+"img/header-ornament-1.e5d3a4a.svg"},283:function(t,e,n){t.exports=n.p+"img/header-ornament-2.755680a.svg"},284:function(t,e,n){"use strict";n.r(e);var o=n(282),r=n.n(o),c=n(283),l=n.n(c),d=n(285),v=n.n(d),M=n(286),m=n.n(M),I=n(287),D=n.n(I),N={name:"Header",data:function(){return{header_ornament_1:r.a,header_ornament_2:l.a,header_font_style:v.a,header_banner:m.a,right_arrow:D.a}}},w=n(44),component=Object(w.a)(N,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header position-relative"},[e("img",{staticClass:"position-absolute header__top--1 d-none d-xxl-block float",attrs:{src:t.header_ornament_1,alt:"Header Ornament"}}),t._v(" "),e("img",{staticClass:"position-absolute header__bottom--1 d-none d-lg-block",attrs:{src:t.header_ornament_2,alt:"Header Ornament"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("h2",[t._v("Build your")]),t._v(" "),e("h1",[e("span",{staticClass:"position-relative"},[e("img",{staticClass:"position-absolute start-0 bottom-0 d-none d-md-block",attrs:{src:t.header_font_style,alt:"Header Font"}}),t._v("\n                        Offshorey\n                    ")]),t._v(" Team\n                ")]),t._v(" "),e("h3",[t._v("First & Reasonable Price")]),t._v(" "),e("p",[t._v("Bitsware is a leading design agency based in USA. We help startups & Fortune 30+ companies delight humans on the other side of the screen.")]),t._v(" "),e("NuxtLink",{staticClass:"btn-blue",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-items-center"},[t._v("\n                        View Project"),e("img",{attrs:{src:t.right_arrow,alt:"Arrow"}})])])],1),t._v(" "),e("div",{staticClass:"col-lg-5 d-lg-flex"},[e("img",{staticClass:"d-block mx-auto img-fluid mt-4",attrs:{src:t.header_banner,alt:"Header Banner"}})])])])])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg5IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMjg5IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEuOTk5MDIgMkMxLjk5OTAyIDcgNy40OTkwMiAxNS41IDE5LjQ5OSAxMy41QzM2Ljk5OSAxMC41ODMzIDQyLjk5OSAxMy44NzU3IDM2Ljk5OSAyMC40Mzc4QzMwLjk5OSAyNyAxNS40OTkgMzIgMTMuNDk5IDI3QzExLjQ5OSAyMiAxOC42Nzc1IDIwLjUgMjQuOTk5IDE4LjVDNjIuOTk5IDYuNDc3NjYgNTYuOTk5IDMxLjM0NTYgMTIxLjQ5OSAyMC40Mzc4QzIwNy45OTkgNS44MDk2NiAyMDcuOTk5IDMyIDI4Ny40OTkgMTMuNSIgc3Ryb2tlPSIjRkI4NjE0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo="},286:function(t,e,n){t.exports=n.p+"img/header-banner.7001e53.svg"},287:function(t,e,n){t.exports=n.p+"img/arrow-circle-right.b27324b.svg"},288:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8ZyBpZD0ic3VyZmFjZTUzODI4Nzk4Ij4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDQuNzA3MDMxIDMuMjkyOTY5IEwgMy4yOTI5NjkgNC43MDcwMzEgTCAxMC41ODU5MzggMTIgTCAzLjI5Mjk2OSAxOS4yOTI5NjkgTCA0LjcwNzAzMSAyMC43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOS4yOTI5NjkgMjAuNzA3MDMxIEwgMjAuNzA3MDMxIDE5LjI5Mjk2OSBMIDEzLjQxNDA2MiAxMiBMIDIwLjcwNzAzMSA0LjcwNzAzMSBMIDE5LjI5Mjk2OSAzLjI5Mjk2OSBMIDEyIDEwLjU4NTkzOCBaIE0gNC43MDcwMzEgMy4yOTI5NjkgIi8+CjwvZz4KPC9zdmc+Cg=="},289:function(t,e,n){t.exports=function(){var t="__v-click-outside",e="undefined"!=typeof window,n="undefined"!=typeof navigator,o=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(t){var e=t.event,n=t.handler;(0,t.middleware)(e)&&n(e)}function a(e,n){var a=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||o,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe),capture:!!t.capture}}(n.value),r=a.handler,c=a.middleware,l=a.detectIframe,u=a.capture;if(a.isActive){if(e[t]=a.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(t){var e=t.el,n=t.event,o=t.handler,a=t.middleware,r=n.composedPath&&n.composedPath()||n.path;(r?r.indexOf(e)<0:!e.contains(n.target))&&i({event:n,handler:o,middleware:a})}({el:e,event:t,handler:r,middleware:c})},capture:u}})),l){var d={event:"blur",srcTarget:window,handler:function(t){return function(t){var e=t.el,n=t.event,o=t.handler,a=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&i({event:n,handler:o,middleware:a})}),0)}({el:e,event:t,handler:r,middleware:c})},capture:u};e[t]=[].concat(e[t],[d])}e[t].forEach((function(n){var o=n.event,i=n.srcTarget,a=n.handler;return setTimeout((function(){e[t]&&i.addEventListener(o,a,u)}),0)}))}}function r(e){(e[t]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,t.capture)})),delete e[t]}var c=e?{bind:a,update:function(t,e){var n=e.value,o=e.oldValue;JSON.stringify(n)!==JSON.stringify(o)&&(r(t),a(t,{value:n}))},unbind:r}:{};return{install:function(t){t.directive("click-outside",c)},directive:c}}()},391:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIzIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMjIzIDEwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSA1LjQ1MDNDNTguMTA1NyAtOC4yODc4IDU4Ljc0MDIgMTUuMDY3NyAxMDUuNDgzIDUuNDUwM0MxNzQuNTQ0IC04Ljc1OTAzIDE3MS42ODMgMTguMjQ1NSAyMjIgNS40NTAzIiBzdHJva2U9IiNGQjg2MTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},418:function(t,e,n){"use strict";n.r(e);n(19),n(33),n(34);var o=n(277),r=n(391),c=n.n(r),l={name:"Projects",components:{Nav:o.default,"header-inner":function(){return n.e(1).then(n.bind(null,422))}},data:function(){return{headlineFontStyle:c.a}}},d=n(44),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("Nav"),t._v(" "),e("header-inner",{attrs:{headline:"Our ",headlineStyle:"Projects",ornaments:t.headlineFontStyle,subheadline:"Our experienced team of designers & developers are eager to assist you on your path to success."}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(277).default})}}]);