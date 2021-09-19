(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{10:function(e,t,n){e.exports={header:"header_header__HZ6Fg",container:"header_container__3hoMn",themeContainer:"header_themeContainer__2ubwV",title:"header_title__3EkoF",nav:"header_nav__2v8dK",login:"header_login__1zFFR",registration:"header_registration__2dc-t",link:"header_link__3XF52",name:"header_name__1gB5Y",authname:"header_authname__1n1HJ",icon:"header_icon__1EhbJ",phonebookIcon:"header_phonebookIcon__35Eyp",loginIcon:"header_loginIcon__1D9GB",logoutBtn:"header_logoutBtn__3unf-"}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"g",(function(){return d}));var c=n(3),r=Object(c.b)("contact/add/Request"),a=Object(c.b)("contact/add/Succes"),o=Object(c.b)("contact/add/Error"),u=Object(c.b)("contact/get/Request"),i=Object(c.b)("contact/get/Succes"),s=Object(c.b)("contact/get/Error"),b=Object(c.b)("contact/delete/Request"),l=Object(c.b)("contact/delete/Succes"),j=Object(c.b)("contact/delete/Error"),d=Object(c.b)("contact/filter")},23:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var c=function(e){return e.auth.user.name},r=function(e){return e.auth.isLogin},a=function(e){return e.auth.error}},26:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return j}));var c=n(15),r=n.n(c);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var a="/contacts",o=function(e){return r.a.post("/users/signup",e).then((function(e){return e.data}))},u=function(e){return r.a.post("/users/login",e).then((function(e){return e.data}))},i=function(e){return r.a.post("/users/logout")},s=function(e){return r.a.get("/users/current")},b=function(){return r.a.get(a).then((function(e){return e.data}))},l=function(e){return r.a.post(a,e).then((function(e){return e.data}))},j=function(e){return r.a.delete("".concat(a,"/").concat(e))}},29:function(e,t,n){e.exports={toolbar:"themeSwitch_toolbar__1Q0-S",themeSwitch:"themeSwitch_themeSwitch__3L0yI",themeSwitchIcon:"themeSwitch_themeSwitchIcon__11u7y",themeSwitchControl:"themeSwitch_themeSwitchControl__3wCwz",themeSwitchToggle:"themeSwitch_themeSwitchToggle__FBpc4",themeSwitchTrack:"themeSwitch_themeSwitchTrack__3IaF4",themeSwitchMarker:"themeSwitch_themeSwitchMarker__3zvPZ"}},30:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return m}));var c=n(20),r=n.n(c),a=n(28),o=n(15),u=n.n(o),i=n(24),s=(n(61),n(42)),b=(n(62),n(63),n(26)),l=n(4);i.defaultModules.set(s,{});var j=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){u.a.defaults.headers.common.Authorization=""},h=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.k)()),t.prev=1,t.next=4,Object(b.f)(e);case 4:c=t.sent,j(c.token),n(Object(l.l)(c)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(l.j)(t.t0.message)),Object(i.alert)({text:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.b)()),t.prev=1,t.next=4,Object(b.c)(e);case 4:c=t.sent,j(c.token),n(Object(l.c)(c)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(l.a)(t.t0.message)),Object(i.alert)({text:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.e)()),e.prev=1,e.next=4,Object(b.b)();case 4:d(),t(Object(l.f)()),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(l.d)(e.t0.message)),Object(i.alert)({text:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n(),a=c.auth.token){e.next=3;break}return e.abrupt("return");case 3:return j(a),t(Object(l.h)()),e.prev=5,e.next=8,Object(b.d)();case 8:o=e.sent,t(Object(l.i)(o.data)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),t(Object(l.g)(e.t0.message)),Object(i.alert)({text:e.t0});case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},4:function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"l",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return f}));var c=n(3),r=Object(c.b)("user/signup/Request"),a=Object(c.b)("user/signup/Succes"),o=Object(c.b)("user/signup/Error"),u=Object(c.b)("user/login/Request"),i=Object(c.b)("user/login/Succes"),s=Object(c.b)("user/login/Error"),b=Object(c.b)("user/logout/Request"),l=Object(c.b)("user/logout/Succes"),j=Object(c.b)("user/logout/Error"),d=Object(c.b)("user/refresh/Request"),h=Object(c.b)("user/refresh/Succes"),f=Object(c.b)("user/refresh/Error")},56:function(e,t,n){e.exports={container:"container_container__3TiUU"}},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(31),a=n.n(r),o=n(1),u=n.n(o),i=n(8),s=n(17),b=(n(73),n(19)),l=n(60),j=n(41),d=n(0),h=n(30),f=n(23),O=n(10),m=n.n(O),p=n.p+"static/media/phonebook.9e31df3c.svg",g=n(29),x=n.n(g),_="lightTheme",v="darkTheme",k=document.querySelector("body");var w=function(){return Object(o.useEffect)((function(){var e=document.querySelector("#theme-switch-toggle");"dark"===localStorage.getItem("theme")?(k.classList.add(v),e.checked=!0):(k.classList.add(_),e.checked=!1)}),[]),Object(c.jsx)("div",{className:"toolbar",children:Object(c.jsx)("div",{className:"themeSwitch",children:Object(c.jsxs)("div",{className:x.a.themeSwitchControl,children:[Object(c.jsx)("input",{onChange:function(e){e.target.checked?(k.classList.add(v),k.classList.remove(_),localStorage.setItem("theme","dark")):(k.classList.add(_),k.classList.remove(v),localStorage.setItem("theme","light"))},className:x.a.themeSwitchToggle,type:"checkbox",name:"theme",id:"theme-switch-toggle","aria-label":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0442\u0451\u043c\u043d\u043e\u0439 \u0438 \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0442\u0435\u043c\u043e\u0439"}),Object(c.jsx)("label",{"aria-hidden":"true",className:x.a.themeSwitchTrack,htmlFor:"theme-switch-toggle"}),Object(c.jsx)("div",{"aria-hidden":"true",className:x.a.themeSwitchMarker})]})})})};var S={onLogout:h.b},y=Object(s.b)((function(e){return{islogin:Object(f.b)(e),name:Object(f.c)(e)}}),S)(Object(i.g)((function(e){var t=e.islogin,n=e.name,r=e.onLogout;return Object(c.jsx)("div",{className:m.a.header,children:Object(c.jsxs)("div",{className:m.a.container,children:[Object(c.jsxs)(b.b,{className:m.a.link,to:"/",children:[Object(c.jsx)("span",{className:m.a.title,children:" Phonebook"})," ",Object(c.jsx)(l.a,{src:p,beforeInjection:function(e){e.classList.add(m.a.phonebookIcon),e.setAttribute("style","width: 70px")}})]}),Object(c.jsxs)("div",{className:m.a.themeContainer,children:[t?Object(c.jsxs)("div",{className:m.a.authname,children:[Object(c.jsxs)("span",{className:m.a.name,children:["Welcome, ",n&&n.toUpperCase()]}),Object(c.jsxs)("button",{className:m.a.logoutBtn,type:"button",onClick:r,children:[Object(c.jsxs)(d.b.Provider,{value:{className:m.a.loginIcon},children:[Object(c.jsx)(j.b,{})," "]}),"Logout"]})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:m.a.nav,children:[Object(c.jsx)(b.b,{className:m.a.login,to:"/login",children:Object(c.jsxs)(d.b.Provider,{value:{className:m.a.loginIcon},children:[Object(c.jsx)(j.a,{})," ",Object(c.jsx)("span",{className:m.a.loginTitle,children:"Login"})]})}),Object(c.jsx)(b.b,{className:m.a.registration,to:"/registr",children:Object(c.jsx)("span",{children:"Registration"})})]})}),Object(c.jsx)(w,{})]})]})})}))),N=n(56),L=n.n(N);var I=function(e){var t=e.children;return Object(c.jsx)("div",{className:L.a.container,children:t})},E=n(22),R=n(35),C=Object(s.b)((function(e){return{isLogin:Object(f.b)(e)}}))((function(e){var t=e.component,n=e.isLogin,r=e.restricted,a=Object(R.a)(e,["component","isLogin","restricted"]);return Object(c.jsx)(i.b,Object(E.a)(Object(E.a)({},a),{},{render:function(e){return n&&r?Object(c.jsx)(i.a,{to:"/contacts"}):Object(c.jsx)(t,Object(E.a)({},e))}}))})),q=Object(s.b)((function(e){return{token:Object(f.b)(e)}}),null)((function(e){var t=e.component,n=e.token,r=Object(R.a)(e,["component","token"]);return Object(c.jsx)(i.b,Object(E.a)(Object(E.a)({},r),{},{render:function(e){return n?Object(c.jsx)(t,Object(E.a)({},e)):Object(c.jsx)(i.a,{to:"/"})}}))})),z=u.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,125))})),F=u.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,123))})),T=u.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,111))})),P=u.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,124))}));var B,U,M,A,J,H={onRefreshUser:h.c},Z=Object(s.b)(null,H)((function(e){var t=e.onRefreshUser;return Object(o.useEffect)((function(){t()}),[t]),Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)(y,{}),Object(c.jsx)(I,{children:Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)("p",{children:"Loud..."}),children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(C,{restricted:!0,exact:!0,path:"/login",component:T}),Object(c.jsx)(C,{restricted:!0,exact:!0,path:"/registr",component:P}),Object(c.jsx)(q,{component:z,path:"/contacts",exact:!0}),Object(c.jsx)(C,{restricted:!0,path:"/",component:F})]})})})]})})),D=n(57),G=n(3),K=n(6),Q=n(59),V=n(9),W=n(21),X=Object(G.c)([],(B={},Object(K.a)(B,W.c,(function(e,t){var n=t.payload;return[].concat(Object(Q.a)(e),[n])})),Object(K.a)(B,W.j,(function(e,t){return t.payload})),Object(K.a)(B,W.f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),B)),Y=Object(G.c)("",Object(K.a)({},W.g,(function(e,t){return t.payload}))),$=Object(V.c)({items:X,filter:Y}),ee=n(4),te={name:null,email:null},ne=Object(G.c)(te,(U={},Object(K.a)(U,ee.l,(function(e,t){return t.payload.user})),Object(K.a)(U,ee.c,(function(e,t){return t.payload.user})),Object(K.a)(U,ee.f,(function(){return te})),Object(K.a)(U,ee.i,(function(e,t){return t.payload})),U)),ce=Object(G.c)(null,(M={},Object(K.a)(M,ee.l,(function(e,t){return t.payload.token})),Object(K.a)(M,ee.c,(function(e,t){return t.payload.token})),Object(K.a)(M,ee.f,(function(){return null})),M)),re=Object(G.c)(null,(A={},Object(K.a)(A,ee.j,(function(e,t){return t.payload})),Object(K.a)(A,ee.a,(function(e,t){return t.payload})),Object(K.a)(A,ee.d,(function(e,t){return t.payload})),Object(K.a)(A,ee.g,(function(e,t){return t.payload})),A)),ae=Object(G.c)(!1,(J={},Object(K.a)(J,ee.i,(function(){return!0})),Object(K.a)(J,W.c,(function(){return!0})),Object(K.a)(J,W.j,(function(){return!0})),Object(K.a)(J,ee.l,(function(){return!0})),Object(K.a)(J,ee.c,(function(){return!0})),Object(K.a)(J,ee.h,(function(){return!0})),Object(K.a)(J,ee.f,(function(){return!1})),Object(K.a)(J,ee.a,(function(){return!1})),Object(K.a)(J,ee.j,(function(){return!1})),J)),oe=Object(V.c)({user:ne,token:ce,error:re,isLogin:ae}),ue=n(18),ie=n(58),se={key:"token",storage:n.n(ie).a,whitelist:["token"]},be=Object(ue.g)(se,oe),le=Object(V.c)({contacts:$,auth:be}),je=Object(G.a)({reducer:le,middleware:Object(G.d)({serializableCheck:{ignoredActions:[ue.a,ue.f,ue.b,ue.c,ue.d,ue.e]}})}),de=Object(ue.h)(je);n(97);a.a.render(Object(c.jsx)(s.a,{store:je,children:Object(c.jsx)(D.a,{loading:null,persistor:de,children:Object(c.jsx)(b.a,{children:Object(c.jsx)(Z,{})})})}),document.querySelector("#root"))}},[[98,2,3]]]);
//# sourceMappingURL=main.7f662993.chunk.js.map