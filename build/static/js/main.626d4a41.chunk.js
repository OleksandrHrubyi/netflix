(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[2],{12:function(e,t,n){e.exports={header:"header_header__HZ6Fg",container:"header_container__3hoMn",themeContainer:"header_themeContainer__2ubwV",title:"header_title__3EkoF",nav:"header_nav__2v8dK",login:"header_login__1zFFR",registration:"header_registration__2dc-t",link:"header_link__3XF52",name:"header_name__1gB5Y",authname:"header_authname__1n1HJ",icon:"header_icon__1EhbJ",phonebookIcon:"header_phonebookIcon__35Eyp",loginIcon:"header_loginIcon__1D9GB",logoutBtn:"header_logoutBtn__3unf-",logOutContainer:"header_logOutContainer__6lj-e",showTitle:"header_showTitle__1v1Jo"}},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=function(e){return e.auth.user.name},c=function(e){return e.auth.isLogin},a=function(e){return e.auth.error}},27:function(e,t,n){"use strict";n.d(t,"i",(function(){return l})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return p})),n.d(t,"h",(function(){return x}));var r=n(10),c=n.n(r),a=n(18),s=n(22),o=n.n(s),i="https://my-net.herokuapp.com/api",u="https://api.tvmaze.com",l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(i,"/users/signup"),t,{headers:{Authorization:null}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(i,"/users/login"),t,{headers:{Authorization:null}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return o.a.post("".concat(i,"/users/logout"))},h=function(){return o.a.get("".concat(i,"/users/current"))},d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.a.patch("".concat(i,"/shows/").concat(t,"/favorite"),t),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){return fetch("".concat(u,"/shows")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, try again"))})).then((function(e){return e}))},O=function(e){return fetch("".concat(u,"/shows?page=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, try again"))})).then((function(e){return e}))},p=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.tvmaze.com/shows/".concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, try again"))})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.tvmaze.com/search/shows?q=".concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, try again"))})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},29:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return p}));var r=n(10),c=n.n(r),a=n(18),s=n(22),o=n.n(s),i=n(23),u=(n(88),n(52)),l=(n(89),n(90),n(27)),j=n(3);i.defaultModules.set(u,{});var b=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},h=function(){o.a.defaults.headers.common.Authorization=""},d=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.k)()),t.prev=1,t.next=4,Object(l.i)(e);case 4:r=t.sent,b(r.token),n(Object(j.l)(r)),Object(i.alert)({text:"Register success"}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),n(Object(j.j)(t.t0.message)),console.log(t.t0,"errr"),Object(i.alert)({text:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.b)()),t.prev=1,t.next=4,Object(l.f)(e);case 4:r=t.sent,b(r.data.token),n(Object(j.c)(r.data)),Object(i.alert)({text:"Login success"}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),n(Object(j.a)(t.t0.message)),Object(i.alert)({text:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(j.e)()),e.prev=1,e.next=4,Object(l.e)();case 4:h(),t(Object(j.f)()),Object(i.alert)({text:"Logout success"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(j.d)(e.t0.message)),Object(i.alert)({text:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),a=r.auth.token){e.next=3;break}return e.abrupt("return");case 3:return b(a),t(Object(j.h)()),e.prev=5,e.next=8,Object(l.g)();case 8:s=e.sent,t(Object(j.i)(s.data)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),h(),t(Object(j.g)(e.t0.message)),Object(i.alert)({text:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},3:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return a})),n.d(t,"j",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return f}));var r=n(9),c=Object(r.b)("user/signup/Request"),a=Object(r.b)("user/signup/Succes"),s=Object(r.b)("user/signup/Error"),o=Object(r.b)("user/login/Request"),i=Object(r.b)("user/login/Succes"),u=Object(r.b)("user/login/Error"),l=Object(r.b)("user/logout/Request"),j=Object(r.b)("user/logout/Succes"),b=Object(r.b)("user/logout/Error"),h=Object(r.b)("user/refresh/Request"),d=Object(r.b)("user/refresh/Succes"),f=Object(r.b)("user/refresh/Error")},38:function(e,t,n){e.exports={loaderWrapper:"preloader_loaderWrapper__G0hAA",loader:"preloader_loader__3Y8TJ",spin:"preloader_spin__MHFzA"}},39:function(e,t,n){"use strict";var r=n(38),c=n.n(r),a=n(2);t.a=function(){return Object(a.jsx)("div",{className:c.a.loaderWrapper,children:Object(a.jsx)("div",{className:c.a.loader})})}},48:function(e,t,n){e.exports={container:"mainLayout_container__1wPEI"}},5:function(e,t,n){e.exports={footer:"footer_footer__2oW47",box:"footer_box__22LGQ",footerContainer:"footer_footerContainer__36auL",title:"footer_title__piRrt",link:"footer_link__2PXAV",footerTitle:"footer_footerTitle__n2L8u",item:"footer_item__1KNGk"}},54:function(e,t,n){e.exports={container:"container_container__3TiUU"}},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(28),c=n.n(r),a=n(1),s=n.n(a),o=n(7),i=n(20),u=(n(65),n(48)),l=n.n(u),j=n(5),b=n.n(j),h=n(2);var d=function(){return Object(h.jsxs)("div",{className:b.a.footer,children:[Object(h.jsxs)("div",{className:b.a.box,children:[Object(h.jsx)("h3",{className:b.a.title,children:"Questions? Call 0800-000-7969"}),Object(h.jsxs)("div",{className:b.a.footerContainer,children:[Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"FAQ"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Investor Relations"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Ways to Watch"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Impressum"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Only on Netflix"})})]})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Help Center"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Jobs"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Terms of Use"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Contact Us"})})]})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Account"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Redeem Gift Cards"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Privacy"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Speed Test"})})]})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Media Center"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Buy Gift Cards"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Cookie Preferences"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:b.a.link,href:"#!",children:"Legal Notices"})})]})})]})]}),Object(h.jsx)("p",{className:b.a.footerTitle,children:"\xa92021 Netflix. All rights reserved"})]})},f=n(19),O=n(57),p=n(37),x=n(0),m=n(29),g=n(25),v=n(12),_=n.n(v),k=n.p+"static/media/logo.9b52e823.svg";var w={onLogout:m.b},N=Object(i.b)((function(e){return{islogin:Object(g.b)(e),name:Object(g.c)(e)}}),w)(Object(o.g)((function(e){var t=e.islogin,n=(e.name,e.onLogout);return Object(h.jsx)("div",{className:_.a.header,children:Object(h.jsxs)("div",{className:_.a.container,children:[Object(h.jsx)(f.b,{className:_.a.link,to:"/",children:Object(h.jsx)(O.a,{src:k,beforeInjection:function(e){e.classList.add(_.a.phonebookIcon),e.setAttribute("style","width: 170px")}})}),Object(h.jsx)("div",{className:_.a.themeContainer,children:t?Object(h.jsx)("div",{className:_.a.authname,children:Object(h.jsxs)("div",{className:_.a.logOutContainer,children:["/shows"!==window.location.pathname&&Object(h.jsx)("div",{children:Object(h.jsx)(f.b,{className:_.a.login,to:"/shows",children:Object(h.jsx)("span",{className:_.a.showTitle,children:"Catalog"})})}),Object(h.jsxs)("button",{className:_.a.logoutBtn,type:"button",onClick:n,children:[Object(h.jsxs)(x.b.Provider,{value:{className:_.a.loginIcon},children:[Object(h.jsx)(p.b,{})," "]}),"Logout"]})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:_.a.nav,children:[t&&Object(h.jsx)("div",{}),Object(h.jsx)(f.b,{className:_.a.login,to:"/login",children:Object(h.jsxs)(x.b.Provider,{value:{className:_.a.loginIcon},children:[Object(h.jsx)(p.a,{})," ",Object(h.jsx)("span",{className:_.a.loginTitle,children:"Log in"})]})}),Object(h.jsx)(f.b,{className:_.a.registration,to:"/registr",children:Object(h.jsx)("span",{children:"Sign up"})})]})})})]})})})));var y=function(e){var t=e.children;return Object(h.jsxs)("div",{className:l.a.container,children:[Object(h.jsx)(N,{}),t,Object(h.jsx)(d,{})]})},C=n(54),L=n.n(C);var z=function(e){var t=e.children;return Object(h.jsx)("div",{className:L.a.container,children:t})},P=n(24),A=n(31),E=["component","isLogin","restricted"],I=Object(i.b)((function(e){return{isLogin:Object(g.b)(e)}}))((function(e){var t=e.component,n=e.isLogin,r=e.restricted,c=Object(A.a)(e,E);return Object(h.jsx)(o.b,Object(P.a)(Object(P.a)({},c),{},{render:function(e){return n&&r?Object(h.jsx)(o.a,{to:"/shows"}):Object(h.jsx)(t,Object(P.a)({},e))}}))})),S=["component","token"],R=Object(i.b)((function(e){return{token:Object(g.b)(e)}}),null)((function(e){var t=e.component,n=e.token,r=Object(A.a)(e,S);return Object(h.jsx)(o.b,Object(P.a)(Object(P.a)({},r),{},{render:function(e){return n?Object(h.jsx)(t,Object(P.a)({},e)):Object(h.jsx)(o.a,{to:"/"})}}))})),T=n(39),F=s.a.lazy((function(){return n.e(6).then(n.bind(null,147))})),B=s.a.lazy((function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,143))})),J=s.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,144))})),q=s.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,148))})),G=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,149))}));var U,W,H,M,Q={onRefreshUser:m.c},K=Object(i.b)(null,Q)((function(e){var t=e.onRefreshUser;return Object(a.useEffect)((function(){t()}),[t]),Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)(z,{children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(T.a,{}),children:Object(h.jsx)(y,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(R,{component:q,path:"/shows",exact:!0}),Object(h.jsx)(I,{exact:!0,path:"/shows/:showsId",component:G}),Object(h.jsx)(I,{restricted:!0,exact:!0,path:"/login",component:B}),Object(h.jsx)(I,{restricted:!0,exact:!0,path:"/registr",component:J}),Object(h.jsx)(I,{restricted:!0,exact:!0,path:"/shows",component:q}),Object(h.jsx)(I,{path:"/",component:F})]})})})})]})})),V=n(55),X=n(9),Y=n(8),D=n(11),Z=n(3),$={name:null,email:null},ee=Object(X.c)($,(U={},Object(Y.a)(U,Z.l,(function(e,t){return t.payload.user})),Object(Y.a)(U,Z.c,(function(e,t){return t.payload.user})),Object(Y.a)(U,Z.f,(function(){return $})),Object(Y.a)(U,Z.i,(function(e,t){return t.payload})),U)),te=Object(X.c)(null,(W={},Object(Y.a)(W,Z.l,(function(e,t){return t.payload.token})),Object(Y.a)(W,Z.c,(function(e,t){return t.payload.token})),Object(Y.a)(W,Z.f,(function(){return null})),W)),ne=Object(X.c)(null,(H={},Object(Y.a)(H,Z.j,(function(e,t){return t.payload})),Object(Y.a)(H,Z.a,(function(e,t){return t.payload})),Object(Y.a)(H,Z.d,(function(e,t){return t.payload})),Object(Y.a)(H,Z.g,(function(e,t){return t.payload})),H)),re=Object(X.c)(!1,(M={},Object(Y.a)(M,Z.i,(function(){return!0})),Object(Y.a)(M,Z.l,(function(){return!0})),Object(Y.a)(M,Z.c,(function(){return!0})),Object(Y.a)(M,Z.h,(function(){return!0})),Object(Y.a)(M,Z.f,(function(){return!1})),Object(Y.a)(M,Z.a,(function(){return!1})),Object(Y.a)(M,Z.j,(function(){return!1})),M)),ce=Object(D.b)({user:ee,token:te,error:ne,isLogin:re}),ae=n(21),se=n(56),oe={key:"token",storage:n.n(se).a,whitelist:["token"]},ie=Object(ae.g)(oe,ce),ue=Object(D.b)({auth:ie}),le=Object(X.a)({reducer:ue,middleware:Object(X.d)({serializableCheck:{ignoredActions:[ae.a,ae.f,ae.b,ae.c,ae.d,ae.e]}})}),je=Object(ae.h)(le);n(94);c.a.render(Object(h.jsx)(i.a,{store:le,children:Object(h.jsx)(V.a,{loading:null,persistor:je,children:Object(h.jsx)(f.a,{children:Object(h.jsx)(K,{})})})}),document.querySelector("#root"))}},[[95,3,4]]]);
//# sourceMappingURL=main.626d4a41.chunk.js.map