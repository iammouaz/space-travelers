(this["webpackJsonpspace-travelers"]=this["webpackJsonpspace-travelers"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(20),i=n.n(r),a=n(6),o=n(15),d=n(23),j=n(31),l=n(3),u=n(35),b=n(10),h=n.n(b),O=n(17),p="spaceTravelers/rockets/GET_ROCKETS_SUCCESS",m="spaceTravelers/rockets/REGISTER_ROCKET",f="spaceTravelers/rockets/CANCEL_REGISTER",x=[],v="spaceTravelers/rockets/GET_MISSIONS_SUCCESS",N="spaceTravelers/rockets/REGISTER_MISSIONS",k="spaceTravelers/rockets/CANCEL_MISSIONS",g=[],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;case N:return e.map((function(e){return e.mission_id!==t.id?e:Object(l.a)(Object(l.a)({},e),{},{reserved:!0})}));case k:return e.map((function(e){return e.mission_id!==t.id?e:Object(l.a)(Object(l.a)({},e),{},{reserved:!1})}));default:return e}},S=Object(d.b)({rocketsRducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(t.payload);case m:return e.map((function(e){return e.id!==t.id?e:Object(l.a)(Object(l.a)({},e),{},{reserved:!0})}));case f:return e.map((function(e){return e.id!==t.id?e:Object(l.a)(Object(l.a)({},e),{},{reserved:!1})}));default:return e}},MissionReducer:y}),_=Object(d.c)(S,Object(d.a)(j.a)),E=n(4),C=n.p+"static/media/icon.3f6fb274.png",M=n(1),R=function(){return Object(M.jsxs)("header",{className:"header",children:[Object(M.jsxs)("span",{className:"head",children:[Object(M.jsx)("img",{className:"img navbar-brand",src:C,alt:"logo"}),Object(M.jsx)("h1",{children:"Space Travelers's Hub"})]}),Object(M.jsxs)("nav",{className:"nav justify-content-end",children:[Object(M.jsx)(o.b,{to:"/",className:"nav-link",activeClassName:"is-active",exact:!0,children:Object(M.jsx)("span",{className:"rockets",children:"Rockets"})}),Object(M.jsx)(o.b,{to:"/missions",className:"nav-link",activeClassName:"is-active",children:Object(M.jsx)("span",{className:"missions ",children:"Missions"})}),Object(M.jsx)(o.b,{to:"/profile",className:"nav-link profile",activeClassName:"is-active",children:Object(M.jsx)("span",{children:"My profile"})})]})]})},T=n(53),w=function(){var e=Object(a.c)((function(e){return e.rocketsRducer})).filter((function(e){return e.reserved})),t=Object(a.c)((function(e){return e.MissionReducer})).filter((function(e){return e.reserved}));return Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"My Rockets"}),Object(M.jsx)(T.a,{children:e.map((function(e){return Object(M.jsx)(T.a.Item,{children:e.title},e.id)}))})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"My Missiosn "}),Object(M.jsx)(T.a,{children:t.map((function(e){return Object(M.jsx)(T.a.Item,{children:e.mission_name},e.mission_id)}))})]})]})})},I=function(e){var t=e.id,n=e.image,c=e.title,s=e.description,r=e.reserved,i=Object(a.b)(),o=function(){r?r&&i(function(e){return{type:f,id:e}}(t)):i(function(e){return{type:m,id:e}}(t))};return Object(M.jsxs)("li",{className:"row",children:[Object(M.jsx)("img",{src:n,className:"img-thumbnail col-sm-3",alt:"rocket-img"}),r&&Object(M.jsxs)("div",{className:"col-sm-9  flex-column ",children:[Object(M.jsx)("h2",{children:c}),Object(M.jsxs)("div",{className:"d-inline-flex ",children:[Object(M.jsx)("span",{className:"bg-success text-white",children:"reserved"}),s]}),Object(M.jsx)("button",{onClick:o,type:"button",className:"btn btn-outline-secondary",children:"cancel reservation"})]}),!r&&Object(M.jsxs)("div",{className:"col-sm-9",children:[Object(M.jsx)("h2",{children:c}),Object(M.jsx)("p",{className:"description",children:s}),Object(M.jsx)("button",{onClick:o,type:"button",className:"btn btn-primary",children:"reserve rocket"})]})]},t)},A=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.rocketsRducer}));return Object(c.useEffect)((function(){var n=function(){var t=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(O.a)(h.a.mark((function e(t){var n,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/rockets");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s=[],c.forEach((function(e){var t={id:e.id,title:e.rocket_name,image:e.flickr_images[0],description:e.description};s.push(t)})),t({type:p,payload:s});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();0===t.length&&n()}),[]),Object(M.jsx)("div",{children:Object(M.jsx)("ul",{className:"rockets-list",children:t.map((function(e){return Object(M.jsx)(I,{id:e.id,title:e.title,image:e.image,description:e.description,reserved:e.reserved},e.id)}))})})},G=n(52),L=n(51),F=function(e){var t=Object(a.b)(),n=e.id,c=e.mission_name,s=e.description,r=e.reserved,i=function(e,n){t(!1===n?function(e){return{type:N,id:e}}(e):function(e){return{type:k,id:e}}(e))};return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:c}),Object(M.jsx)("td",{children:s}),Object(M.jsx)("td",{children:r?Object(M.jsx)("div",{className:"p-1 mb-1 rounded bg-info text-white",children:"Active Member"}):Object(M.jsx)("div",{className:"p-1 mb-2 rounded bg-secondary text-white",children:"NOT A MEMBER"})}),Object(M.jsx)("td",{children:r?Object(M.jsx)(L.a,{variant:"outline-danger",onClick:function(){return i(n,r)},children:"Leave Mission"}):Object(M.jsx)(L.a,{variant:"outline-primary",onClick:function(){return i(n,r)},children:"Join Mission"})})]},n)},B=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.MissionReducer}));return Object(c.useEffect)((function(){0===t.length&&e(function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacexdata.com/v3/missions").then((function(e){return e.json()})).then((function(e){var n=[];e.forEach((function(e){n.push({mission_id:e.mission_id,mission_name:e.mission_name,description:e.description,reserved:!1})})),t({type:v,payload:n})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(M.jsx)(G.a,{striped:!0,bordered:!0,hover:!0,children:Object(M.jsxs)("thead",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"Mission"}),Object(M.jsx)("th",{children:"Description"}),Object(M.jsx)("th",{children:"Status"})]}),t.map((function(e){return Object(M.jsx)(F,{id:e.mission_id,mission_name:e.mission_name,description:e.description,reserved:e.reserved},e.mission_id)}))]})})},J=(n(49),function(){return Object(M.jsx)(o.a,{children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(R,{}),Object(M.jsxs)(E.c,{children:[Object(M.jsx)(E.a,{exact:!0,path:"/",children:Object(M.jsx)(A,{})}),Object(M.jsx)(E.a,{path:"/missions",children:Object(M.jsx)(B,{})}),Object(M.jsx)(E.a,{path:"/profile",children:Object(M.jsx)(w,{})})]})]})})}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(a.a,{store:_,children:Object(M.jsx)(o.a,{children:Object(M.jsx)(J,{})})})}),document.getElementById("root")),D()}},[[50,1,2]]]);
//# sourceMappingURL=main.85835cd8.chunk.js.map