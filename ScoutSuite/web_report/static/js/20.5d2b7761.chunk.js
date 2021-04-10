(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{565:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(642),i=n(640),s=n(103),u=n(645),l=n(654),o=n(194),b=function(e){return Object(s.k)(e,"",(function(e){return function(e){return Object(a.jsx)(o.a,{service:"aad",resource:"users",id:e.id,name:e.name})}(e)}))},d=function(e,t){return Object(s.k)(e,"",(function(e){return function(e){var n=t.find((function(t){return t.role_id===e.id})).subscription_id;return Object(a.jsxs)("span",{children:[Object(a.jsx)(o.a,{service:"rbac",resource:"roles",id:e.id,name:e.name})," ","(subscription ",n,")"]})}(e)}))};t.default=function(e){var t=e.data,n=e.item,o=Object(l.a)("aad","users",n.users).data,j=Object(r.useMemo)((function(){return n.roles.map((function(e){return e.role_id}))}),[n.roles]),f=Object(l.a)("rbac","roles",j).data;return t?Object(a.jsxs)(i.a,{data:t,children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(i.c,{label:"Name",valuePath:"name",renderValue:s.n}),Object(a.jsx)(i.c,{label:"Type",valuePath:"object_type",renderValue:s.n}),Object(a.jsx)(i.c,{label:"Mail Nickname",valuePath:"mail_nickname",renderValue:s.n}),Object(a.jsx)(i.c,{label:"Mail Status",valuePath:"mail_enabled",renderValue:s.c}),Object(a.jsx)(i.c,{label:"Mail",valuePath:"mail",renderValue:s.n}),Object(a.jsx)(i.c,{label:"Security Status",valuePath:"security_enabled",renderValue:s.c}),Object(a.jsx)(i.c,{label:"Deletion Timestamp",valuePath:"deletion_timestamp",renderValue:s.n})]}),Object(a.jsxs)(u.b,{children:[Object(a.jsx)(u.a,{title:"Role Assignments",children:d(f,n.roles)}),Object(a.jsx)(u.a,{title:"Members",children:b(o)})]})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),s=r.a.createContext(""),u=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),s=n(7),u=n.n(s),l=n(15),o=n.n(l),b=n(10),d=n.n(b),j=n(637),f=n(103),p=n(83),O=(n(641),n(624)),v=n(191),h=n.n(v),x=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,s=Object(c.useContext)(m.a),u=s.exceptions,l=s.addException,b=Object(x.b)().enqueueSnackbar,d=o()(u,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(O.a,{disabled:d,size:"small",startIcon:Object(r.jsx)(h.a,{}),className:"exception-btn",onClick:function(){l(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},k=n(29),g=function(e){var t,n=e.label,s=e.separator,l=e.valuePath,b=e.errorPath,O=e.className,v=e.inline,h=e.tooltip,x=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,_=Object(k.g)(),C=Object(c.useContext)(j.a),S=Object(c.useContext)(j.b),N=Object(c.useContext)(j.c),V=Object(f.a)(g||S,l),w=m(e.value||o()(C.item,V,e.value));("boolean"===typeof w&&(w=String(w)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(f.a)(g||S,e)})):t=[V];var y=t.some((function(e){return C.path_to_issues.includes(e)})),A=C.level;if(Object(c.useEffect)((function(){y&&N(A)}),[A]),void 0===w||null===w)return null;var M=Object(r.jsx)(P,{service:_.service,finding:_.finding,path:"".concat(C.path,".").concat(t[0])}),D=Object(r.jsxs)("span",{className:u()(y&&u()("issue",A)),children:[w,y&&M]});return Object(r.jsx)(p.a,{className:u()(O,"partial-value",{inline:v}),label:n,separator:s,value:h?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},x),{},{children:D})):D})};g.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=g},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,s=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(s,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),s=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u.b}));var a=n(1),r=n(18),c=n(0),i=n(7),s=n.n(i),u=n(104),l=n(637),o=n(56),b=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,b=e.onClick,d=e.children,j=Object(c.useState)(""),f=Object(r.a)(j,2),p=f[0],O=f[1],v=p?Object(a.jsxs)(a.Fragment,{children:[t,o.a[p].icon]}):t;return Object(a.jsx)(l.c.Provider,{value:O,children:Object(a.jsx)(u.a,{title:v,className:s()("partial-tab-pane",p),isSelected:n,disabled:i,onClick:b,children:d})})})},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(45),r=n.n(a),c=n(84),i=n(18),s=n(0),u=n(195),l=function(e,t,n){var a=Object(s.useState)([]),l=Object(i.a)(a,2),o=l[0],b=l[1],d=Object(s.useState)(!0),j=Object(i.a)(d,2),f=j[0],p=j[1];return Object(s.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var c,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&t&&n)){a.next=15;break}return p(!0),a.prev=2,c=n.map((function(n){return u.a("services/".concat(e,"/resources/").concat(t,"/").concat(n))})),a.next=6,Promise.all(c);case 6:i=a.sent,console.info("useResources response",e,t,n,i),b(i),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.error(a.t0.message);case 14:p(!1);case 15:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}})()()}),[n]),{data:o,loading:f}}}}]);
//# sourceMappingURL=20.5d2b7761.chunk.js.map