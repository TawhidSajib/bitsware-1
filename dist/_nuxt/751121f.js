(window.webpackJsonp=window.webpackJsonp||[]).push([[29,10,14,15,21,22],{277:function(t,e,n){"use strict";n.r(e);var o=n(289),l={name:"Nav",directives:{clickOutside:n.n(o).a.directive},data:function(){return{isMobileDropdown:!1,isMobileMenu:!1,isDropDownShow:!1}},methods:{closeDropdown:function(t){this.isDropDownShow=!1},close:function(){this.isMobileMenu=!1,this.isMobileDropdown=!1},openDropdown:function(){this.isMobileDropdown=!this.isMobileDropdown}}},r=n(44),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"menu"},[e("nav",{staticClass:"navbar py-0 navbar-expand-lg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"menu__block"},[e("div",{staticClass:"menu__block--logo"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{staticClass:"d-block mx-auto img-fluid",attrs:{src:n(279),alt:"Logo"}})])],1),t._v(" "),e("div",{staticClass:"menu__block--desktop d-none d-lg-block"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("NuxtLink",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("span",{on:{click:function(e){t.isDropDownShow=!t.isDropDownShow}}},[e("img",{staticClass:"ms-1",attrs:{src:n(280),alt:"Dropdown"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.isDropDownShow?e("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-menu"},[e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Software Development")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Product Design")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Cloud & DevOps")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Analytic Solutions")])],1)]):t._e()])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/projects"}},[t._v("Case studies")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),e("div",{staticClass:"menu__block--mobile d-block d-lg-none",on:{click:function(e){t.isMobileMenu=!t.isMobileMenu}}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")]),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},[t.isMobileMenu?e("div",{staticClass:"menu__block--mobile--show"},[e("div",[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",[e("img",{staticClass:"mx-auto img-fluid",attrs:{src:n(279),alt:"Logo"}})]),t._v(" "),e("div",{staticClass:"menu__block--mobile--close",on:{click:t.close}},[e("img",{attrs:{src:n(288),alt:"Close"}})])]),t._v(" "),e("ul",{staticClass:"navbar-nav mt-4"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("span",{staticClass:"menu__block--mobile--arrow"},[e("img",{staticClass:"ms-1",attrs:{src:n(280),alt:"Dropdown"},on:{click:t.openDropdown}})]),t._v(" "),e("ul",{staticClass:"dropdown-menu menu__block--mobile--dropdown",class:{"d-block":t.isMobileDropdown}},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Software Development")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Product Design")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Cloud & DevOps")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/service-single"}},[t._v("Analytic Solutions")])],1)])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/projects"}},[t._v("Case Studies")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])]):t._e()]),t._v(" "),e("div",{staticClass:"menu__block--cta d-none d-lg-block"},[e("NuxtLink",{staticClass:"btn-blue",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-items-center"},[t._v("\n                            Quote for Project\n                        ")])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(277).default,Header:n(284).default})},278:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCAxNjcgOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xLjUgNS4wNzg3NEM0My44NzcxIC00LjQ5OTk3IDQ0LjM0OCAxMS43ODQzIDc5LjAzNSA1LjA3ODc0QzEzMC4yODQgLTQuODI4NTMgMTI4LjE2IDE0IDE2NS41IDUuMDc4NzQiIHN0cm9rZT0iI0ZCODYxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjwvc3ZnPg0K"},279:function(t,e,n){t.exports=n.p+"img/logo.a479f33.svg"},280:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDVfODQ0KSI+CjxwYXRoIGQ9Ik01Ljg1Nzk4IDUuNTE0NkwxMC44NDQ4IDAuNTYxNDU2QzExLjAxNDUgMC4zOTI5MzEgMTEuMjg1OCAwLjM5NjcyMyAxMS40NTA5IDAuNTY5OTE0QzExLjYxNTkgMC43NDMxMDYgMTEuNjEyMiAxLjAyMDA3IDExLjQ0MjYgMS4xODg1NEw2LjE1Njg0IDYuNDM4NTRDNS45OTA0OSA2LjYwMzggNS43MjU0NyA2LjYwMzggNS41NTkxMiA2LjQzODU0TDAuMjczNDA4IDEuMTg4NTRDMC4xMDM3NSAxLjAyMDA3IDAuMTAwMDM3IDAuNzQzMTA1IDAuMjY1MTIyIDAuNTY5OTE0QzAuNDMwMTUxIDAuMzk2NzIyIDAuNzAxNDY2IDAuMzkyOTMgMC44NzExMjIgMC41NjE0NTVMNS44NTc5OCA1LjUxNDZaIiBmaWxsPSIjMDkwOTIwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTA1Xzg0NCI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},282:function(t,e,n){t.exports=n.p+"img/header-ornament-1.e5d3a4a.svg"},283:function(t,e,n){t.exports=n.p+"img/header-ornament-2.755680a.svg"},284:function(t,e,n){"use strict";n.r(e);var o=n(282),l=n.n(o),r=n(283),c=n.n(r),d=n(285),v=n.n(d),m=n(286),f=n.n(m),_=n(287),I=n.n(_),C={name:"Header",data:function(){return{header_ornament_1:l.a,header_ornament_2:c.a,header_font_style:v.a,header_banner:f.a,right_arrow:I.a}}},M=n(44),component=Object(M.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header position-relative"},[e("img",{staticClass:"position-absolute header__top--1 d-none d-xxl-block float",attrs:{src:t.header_ornament_1,alt:"Header Ornament"}}),t._v(" "),e("img",{staticClass:"position-absolute header__bottom--1 d-none d-lg-block",attrs:{src:t.header_ornament_2,alt:"Header Ornament"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("h2",[t._v("Build your")]),t._v(" "),e("h1",[e("span",{staticClass:"position-relative"},[e("img",{staticClass:"position-absolute start-0 bottom-0 d-none d-md-block",attrs:{src:t.header_font_style,alt:"Header Font"}}),t._v("\n                        Offshorey\n                    ")]),t._v(" Team\n                ")]),t._v(" "),e("h3",[t._v("First & Reasonable Price")]),t._v(" "),e("p",[t._v("Bitsware is a leading design agency based in USA. We help startups & Fortune 30+ companies delight humans on the other side of the screen.")]),t._v(" "),e("NuxtLink",{staticClass:"btn-blue",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-items-center"},[t._v("\n                        View Project"),e("img",{attrs:{src:t.right_arrow,alt:"Arrow"}})])])],1),t._v(" "),e("div",{staticClass:"col-lg-5 d-lg-flex"},[e("img",{staticClass:"d-block mx-auto img-fluid mt-4",attrs:{src:t.header_banner,alt:"Header Banner"}})])])])])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg5IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMjg5IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEuOTk5MDIgMkMxLjk5OTAyIDcgNy40OTkwMiAxNS41IDE5LjQ5OSAxMy41QzM2Ljk5OSAxMC41ODMzIDQyLjk5OSAxMy44NzU3IDM2Ljk5OSAyMC40Mzc4QzMwLjk5OSAyNyAxNS40OTkgMzIgMTMuNDk5IDI3QzExLjQ5OSAyMiAxOC42Nzc1IDIwLjUgMjQuOTk5IDE4LjVDNjIuOTk5IDYuNDc3NjYgNTYuOTk5IDMxLjM0NTYgMTIxLjQ5OSAyMC40Mzc4QzIwNy45OTkgNS44MDk2NiAyMDcuOTk5IDMyIDI4Ny40OTkgMTMuNSIgc3Ryb2tlPSIjRkI4NjE0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo="},286:function(t,e,n){t.exports=n.p+"img/header-banner.7001e53.svg"},287:function(t,e,n){t.exports=n.p+"img/arrow-circle-right.b27324b.svg"},288:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8ZyBpZD0ic3VyZmFjZTUzODI4Nzk4Ij4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDQuNzA3MDMxIDMuMjkyOTY5IEwgMy4yOTI5NjkgNC43MDcwMzEgTCAxMC41ODU5MzggMTIgTCAzLjI5Mjk2OSAxOS4yOTI5NjkgTCA0LjcwNzAzMSAyMC43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOS4yOTI5NjkgMjAuNzA3MDMxIEwgMjAuNzA3MDMxIDE5LjI5Mjk2OSBMIDEzLjQxNDA2MiAxMiBMIDIwLjcwNzAzMSA0LjcwNzAzMSBMIDE5LjI5Mjk2OSAzLjI5Mjk2OSBMIDEyIDEwLjU4NTkzOCBaIE0gNC43MDcwMzEgMy4yOTI5NjkgIi8+CjwvZz4KPC9zdmc+Cg=="},289:function(t,e,n){t.exports=function(){var t="__v-click-outside",e="undefined"!=typeof window,n="undefined"!=typeof navigator,o=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(t){var e=t.event,n=t.handler;(0,t.middleware)(e)&&n(e)}function a(e,n){var a=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||o,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe),capture:!!t.capture}}(n.value),l=a.handler,r=a.middleware,c=a.detectIframe,u=a.capture;if(a.isActive){if(e[t]=a.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(t){var e=t.el,n=t.event,o=t.handler,a=t.middleware,l=n.composedPath&&n.composedPath()||n.path;(l?l.indexOf(e)<0:!e.contains(n.target))&&i({event:n,handler:o,middleware:a})}({el:e,event:t,handler:l,middleware:r})},capture:u}})),c){var d={event:"blur",srcTarget:window,handler:function(t){return function(t){var e=t.el,n=t.event,o=t.handler,a=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&i({event:n,handler:o,middleware:a})}),0)}({el:e,event:t,handler:l,middleware:r})},capture:u};e[t]=[].concat(e[t],[d])}e[t].forEach((function(n){var o=n.event,i=n.srcTarget,a=n.handler;return setTimeout((function(){e[t]&&i.addEventListener(o,a,u)}),0)}))}}function l(e){(e[t]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,t.capture)})),delete e[t]}var r=e?{bind:a,update:function(t,e){var n=e.value,o=e.oldValue;JSON.stringify(n)!==JSON.stringify(o)&&(l(t),a(t,{value:n}))},unbind:l}:{};return{install:function(t){t.directive("click-outside",r)},directive:r}}()},293:function(t,e,n){"use strict";n.r(e);n(281),n(45);var o=n(314),l=n.n(o),r=n(315),c=n.n(r),d={name:"Footer",data:function(){return{footer_arrow:l.a,footer_left:c.a,companylinks:[{name:"Home",link:"/"},{name:"About Us",link:"/"},{name:"FAQs",link:"/"},{name:"Contact Us",link:"/"}],servicelinks:[{name:"Software Development",link:"/"},{name:"Product Design",link:"/"},{name:"Cloud and DevOps",link:"/"},{name:"Analytic Solutions",link:"/"}],socials:[{social:"fa fa-facebook",socialClass:"facebook",link:"#"},{social:"fa fa-twitter",socialClass:"twitter",link:"#"},{social:"fa fa-pinterest",socialClass:"pinterest",link:"#"},{social:"fa fa-github",socialClass:"github",link:"#"}]}}},v=n(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer position-relative overflow-hidden"},[e("img",{staticClass:"position-absolute footer__ornament1 d-none d-xxl-block",attrs:{src:t.footer_left,alt:"Footer"}}),t._v(" "),e("img",{staticClass:"position-absolute footer__ornament2 d-none d-xxl-block float",attrs:{src:t.footer_arrow,alt:"Footer"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"footer__line"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"footer__block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(313),alt:"Logo"}}),t._v(" "),e("div",{staticClass:"footer__block--intro"},[e("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),t._v(" "),e("div",{staticClass:"footer__socials"},[e("ul",{staticClass:"list-inline"},t._l(t.socials,(function(t,i){return e("li",{key:i,staticClass:"list-inline-item"},[e("a",{attrs:{href:t.link,target:"_blank"}},[e("i",{class:[t.social,t.socialClass]})])])})),0)])])])]),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"footer__block"},[e("div",{staticClass:"footer__block"},[e("h3",[t._v("Company")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},t._l(t.companylinks,(function(n,i){return e("li",{key:i},[e("NuxtLink",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"footer__block"},[e("h3",[t._v("IT Services")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},t._l(t.servicelinks,(function(n,i){return e("li",{key:i},[e("NuxtLink",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)})),0)])]),t._v(" "),t._m(0)])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"footer__block"},[e("h3",[t._v("Newsletter")]),t._v(" "),e("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),t._v(" "),e("div",{staticClass:"footer__block--newsletter"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your email"}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn-blue",attrs:{type:"button"}},[t._v("Subscribe")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"footer__copyright text-center"},[t("p",[this._v("© 2022 All Rights Reserved. Developed By Bitsware.")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(293).default})},295:function(t,e,n){t.exports=n.p+"img/testimonial-01.d05b403.png"},296:function(t,e,n){t.exports=n.p+"img/circle-2.3dc6ad5.png"},297:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("73877db8",content,!0,{sourceMap:!1})},299:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNV83NDEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9Ii0xIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiPgo8cmVjdCB4PSIwLjUiIHk9Ii0wLjAwMDI0NDE0MSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDVfNzQxKSI+CjxwYXRoIGQ9Ik0xNC40OTk2IDE3LjY0OTlMOC44NDk2MSAxMS45OTk5TDE0LjQ5OTYgNi4zNDk4NUwxNS41NDk2IDcuMzk5ODVMMTAuOTQ5NiAxMS45OTk5TDE1LjU0OTYgMTYuNTk5OUwxNC40OTk2IDE3LjY0OTlaIiBmaWxsPSIjNDI4NUY0Ii8+CjwvZz4KPC9zdmc+Cg=="},300:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxtYXNrIGlkPSJtYXNrMF8xMDVfNjA3IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPg0KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRDlEOUQ5Ii8+DQo8L21hc2s+DQo8ZyBtYXNrPSJ1cmwoI21hc2swXzEwNV82MDcpIj4NCjxwYXRoIGQ9Ik05LjM5OTYxIDE3LjY1MDFMOC4zNDk2MSAxNi42MDAxTDEyLjk0OTYgMTIuMDAwMUw4LjM0OTYxIDcuNDAwMUw5LjM5OTYxIDYuMzUwMUwxNS4wNDk2IDEyLjAwMDFMOS4zOTk2MSAxNy42NTAxWiIgZmlsbD0iIzQyODVGNCIvPg0KPC9nPg0KPC9zdmc+DQo="},305:function(t,e,n){t.exports=n.p+"img/fox-hub.cbe1d82.png"},306:function(t,e,n){t.exports=n.p+"img/aven.995dcf5.png"},307:function(t,e,n){t.exports=n.p+"img/circle.dbe89c5.png"},308:function(t,e,n){t.exports=n.p+"img/code-lab.a23e780.png"},309:function(t,e,n){t.exports=n.p+"img/earth-2.ec96959.png"},310:function(t,e,n){t.exports=n.p+"img/quote.6cdca19.svg"},311:function(t,e,n){"use strict";n(297)},312:function(t,e,n){var o=n(35),l=n(186),r=n(299),c=n(300),d=o((function(i){return i[1]})),v=l(r),m=l(c);d.push([t.i,".testimonial .slick-dots{left:0;right:0;bottom:-45px}.testimonial .slick-dots li button:before{font-size:8px}.testimonial .slick-dots li.slick-active button:before{color:#4583e6;opacity:1}.testimonial .slick-prev:before{content:url("+v+")}.testimonial .slick-prev{background:#fff;border:1px solid #e0e0e6;width:48px;height:48px;border-radius:24px;left:-12.5px;z-index:100}.testimonial .slick-prev:focus,.testimonial .slick-prev:hover{background-color:#fff}.testimonial .slick-next:before{content:url("+m+")}.testimonial .slick-next{background:#fff;border:1px solid #e0e0e6;width:48px;height:48px;border-radius:24px;right:-12.5px;z-index:100}.testimonial .slick-next:focus,.testimonial .slick-next:hover{background-color:#fff}",""]),d.locals={},t.exports=d},313:function(t,e,n){t.exports=n.p+"img/footer-logo.83f8523.svg"},314:function(t,e,n){t.exports=n.p+"img/footer-arrow.36ff1e7.svg"},315:function(t,e,n){t.exports=n.p+"img/footer-left.d2d9f4f.svg"},317:function(t,e,n){"use strict";n.r(e);var o=n(316),l=n.n(o),r=n(305),c=n.n(r),d=n(306),v=n.n(d),circle=n(307),m=n.n(circle),f=n(308),_=n.n(f),I=n(309),C=n.n(I),M=n(310),x=n.n(M),k={name:"Testimonial",components:{VueSlickCarousel:l.a},data:function(){return{quote_left:x.a,slickOptions:{slidesToShow:1,arrows:!0,dots:!1,responsive:[{breakpoint:1199,settings:{slidesToShow:1,dots:!1,arrows:!0}},{breakpoint:991,settings:{slidesToShow:1,dots:!1,arrows:!0}},{breakpoint:768,settings:{slidesToShow:1,dots:!1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,dots:!0,arrows:!1}}]},logos:[{img:c.a,alt:"Fox Hub"},{img:v.a,alt:"Aven"},{img:m.a,alt:"Circle"},{img:_.a,alt:"Code Lab"},{img:C.a,alt:"Earth"}]}}},D=(n(311),n(44)),component=Object(D.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonial"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.slickOptions,!1),[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"testimonial__block mx-auto"},[e("div",{staticClass:"testimonial__block--inner"},[e("ul",{staticClass:"list-unstyled mb-0"},[e("li",[e("img",{attrs:{src:n(295),alt:"Person"}})]),t._v(" "),e("li",{staticClass:"mt-5"},[e("img",{attrs:{src:n(296),alt:"Logo"}})])]),t._v(" "),e("ul",{staticClass:"list-unstyled testimonial__content"},[e("li",[e("div",{staticClass:"testimonial__quote"},[e("img",{attrs:{src:t.quote_left,alt:"Quote"}})]),t._v(" "),e("p",[t._v('"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."')]),t._v(" "),e("div",{staticClass:"testimonial__author mt-5"},[e("div",{staticClass:"testimonial__author--name"},[t._v("\n                                            — Jacob Jones\n                                        ")]),t._v(" "),e("div",{staticClass:"testimonial__author--company ms-2"},[t._v("\n                                            CEO & Co-Founder\n                                        ")])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"testimonial__block mx-auto"},[e("div",{staticClass:"testimonial__block--inner"},[e("ul",{staticClass:"list-unstyled mb-0"},[e("li",[e("img",{attrs:{src:n(295),alt:"Person"}})]),t._v(" "),e("li",{staticClass:"mt-5"},[e("img",{attrs:{src:n(296),alt:"Logo"}})])]),t._v(" "),e("ul",{staticClass:"list-unstyled testimonial__content"},[e("li",[e("div",{staticClass:"testimonial__quote"},[e("img",{attrs:{src:t.quote_left,alt:"Quote"}})]),t._v(" "),e("p",[t._v('"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."')]),t._v(" "),e("div",{staticClass:"testimonial__author mt-5"},[e("div",{staticClass:"testimonial__author--name"},[t._v("\n                                            — Jacob Jones\n                                        ")]),t._v(" "),e("div",{staticClass:"testimonial__author--company ms-2"},[t._v("\n                                            CEO & Co-Founder\n                                        ")])])])])])])])])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"testimonial__company"},t._l(t.logos,(function(t,i){return e("span",{key:i},[e("img",{attrs:{src:t.img,alt:t.alt}})])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){t.exports=n.p+"img/figma.8568e9e.svg"},334:function(t,e,n){t.exports=n.p+"img/nodejs.f4ca0f6.svg"},335:function(t,e,n){t.exports=n.p+"img/python.17669a2.svg"},336:function(t,e,n){t.exports=n.p+"img/php.ba570f1.svg"},337:function(t,e,n){t.exports=n.p+"img/adobexd.468a2f0.svg"},338:function(t,e,n){t.exports=n.p+"img/sketch.908e357.svg"},339:function(t,e,n){t.exports=n.p+"img/invision.b08f4cb.svg"},340:function(t,e,n){t.exports=n.p+"img/ruby.da72956.svg"},341:function(t,e,n){t.exports=n.p+"img/react.a48f88b.svg"},342:function(t,e,n){t.exports=n.p+"img/flutter.f9cca35.svg"},343:function(t,e,n){t.exports=n.p+"img/laravel.341eee8.svg"},356:function(t,e,n){"use strict";n.r(e);n(19),n(33),n(34);var o=n(278),l=n.n(o),r=n(333),c=n.n(r),d=n(334),v=n.n(d),m=n(335),f=n.n(m),_=n(336),I=n.n(_),C=n(337),M=n.n(C),x=n(338),k=n.n(x),D=n(339),N=n.n(D),ruby=n(340),w=n.n(ruby),h=n(341),y=n.n(h),j=n(342),A=n.n(j),T=n(343),S=n.n(T),L={name:"Technology",components:{subheadline:function(){return n.e(0).then(n.bind(null,423))}},data:function(){return{subheaderFontStyle:l.a,technologies:[{image:c.a,alt:"Figma"},{image:v.a,alt:"Node Js"},{image:f.a,alt:"Python"},{image:I.a,alt:"PHP"},{image:M.a,alt:"Adobe XD"},{image:k.a,alt:"Sketch"},{image:N.a,alt:"Invision"},{image:w.a,alt:"Ruby"},{image:y.a,alt:"React"},{image:A.a,alt:"Flutter"},{image:S.a,alt:"Laravel"}]}}},O=n(44),component=Object(O.a)(L,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"technology"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 text-center"},[e("subheadline",{attrs:{title:"Technology",titleStyle:"Experts",ornaments:t.subheaderFontStyle,extraTitle:"In"}}),t._v(" "),e("h3",{staticClass:"mx-auto"},[t._v("Over a dozen reusable features built to provide iconography, dropdowns, input groups, alerts, and much more. Over a dozen reusable features")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"technology__block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"technology__block--inner"},t._l(t.technologies,(function(t,i){return e("span",{key:i},[e("img",{attrs:{src:t.image,alt:t.alt}})])})),0)])])])])])])])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);n(19),n(33),n(34);var o=n(277),l=n(415),r=n(356),c=n(317),d=n(293),v=n(278),m=n.n(v),f={name:"Services",components:{Nav:o.default,OurServices:l.default,Technology:r.default,Testimonial:c.default,Footer:d.default,"header-inner":function(){return n.e(1).then(n.bind(null,422))}},data:function(){return{headlineFontStyle:m.a}}},_=n(44),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("section",[e("Nav"),t._v(" "),e("header-inner",{attrs:{headline:"We Think Big, and Make it ",headlineStyle:"Bigger",ornaments:t.headlineFontStyle,subheadline:"A fantastic range of services awaits you."}}),t._v(" "),e("OurServices"),t._v(" "),e("Technology"),t._v(" "),e("Testimonial"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(277).default,Footer:n(293).default})}}]);