(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(14),l=s.n(i),r=s(3),o=s(5),d=s.n(o),j=(s(38),function(e){var t=e.loading;return Object(c.jsxs)("div",{className:"panel-button-container",children:[Object(c.jsx)("div",{className:"main-light-bg"}),Object(c.jsx)("div",{className:"red-button ".concat(t?"blink":"")}),Object(c.jsx)("div",{className:"yellow-button ".concat(t?"blink":"")}),Object(c.jsx)("div",{className:"green-button ".concat(t?"blink":"")})]})}),b=(s(39),function(e){var t=e.id,s=e.name,n=e.description,i=e.sprites,l=e.loading,o=e.error,d=Object(a.useState)(null),b=Object(r.a)(d,2),m=b[0],u=b[1],h=Object(a.useState)("front"),p=Object(r.a)(h,2),O=p[0],x=p[1],N=Object(a.useState)(""),v=Object(r.a)(N,2),g=v[0],f=v[1],k=Object(a.useState)(""),w=Object(r.a)(k,2),y=w[0],S=w[1],C=Object(a.useState)(null),_=Object(r.a)(C,2),L=_[0],E=_[1];return Object(a.useEffect)((function(){!function(){if(i){var e=null;t===L?e=g||y?O+g+y:O+"_default":(E(t),x("front"),f(""),S(""),e="front_default"),u(i[e])}}()}),[i,t,L,O,y,g]),Object(c.jsxs)("div",{className:"left-panel",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"left-curve",children:[Object(c.jsx)(j,{loading:l}),Object(c.jsx)("div",{className:"panel-border-bottom"}),Object(c.jsx)("div",{className:"triangle-square",children:Object(c.jsx)("div",{className:"triangle-border"})})]}),Object(c.jsx)("div",{className:"right-curve",children:Object(c.jsx)("div",{className:"panel-border-right-bottom "})})]}),Object(c.jsxs)("div",{className:"left-panel-wrapper-screen",children:[Object(c.jsx)("div",{className:"panel-container-left",children:Object(c.jsxs)("div",{className:"screen-left-panel-wrapper",children:[Object(c.jsx)("div",{className:"background-3",children:l?Object(c.jsx)("p",{className:"pokemon-name-id",children:"Loading ... "}):o?Object(c.jsxs)("p",{className:"pokemon-name-id",children:[o," "]}):Object(c.jsxs)("p",{className:"pokemon-name-id",children:["  ",s," No. ",t]})}),Object(c.jsx)("div",{className:"pokemon-screen background-1 ",children:l?Object(c.jsx)("p",{className:"pokemon-name-id fs-35 fw-bold",children:"Loading ... "}):o?Object(c.jsx)("p",{className:"pokemon-name-id fs-35 fw-bold",children:o}):Object(c.jsx)("img",{className:"pokemon-sprites",src:m,alt:"pokemon"})}),Object(c.jsxs)("div",{className:"control-panel",children:[Object(c.jsx)("div",{className:"control ".concat("_female"===y?" sprite-control-selected":""),onClick:function(){i.back_female&&i.front_female&&S(""===y?"_female":"")},children:Object(c.jsx)("i",{class:"fas fa-venus"})}),Object(c.jsx)("div",{className:"shiny-button ".concat("_shiny"===g?" sprite-control-selected":""),onClick:function(){f(g?"":"_shiny")},children:"Shiny"}),Object(c.jsx)("div",{className:"control ".concat("back"===O?" sprite-control-selected":""),onClick:function(){x("front"===O?"back":"front")},children:Object(c.jsx)("i",{class:"fas fa-undo-alt"})})]}),Object(c.jsx)("div",{className:"background-3 pokemon-desc ",children:l?Object(c.jsx)("p",{className:"pokemon-name-id fs-24 fw-bold ta-center",children:"Loading ... "}):o?Object(c.jsx)("p",{className:"pokemon-name-id fs-24 fw-bold ta-center",children:o}):n})]})}),Object(c.jsxs)("div",{className:"hinge",children:[Object(c.jsx)("div",{className:"border-short"}),Object(c.jsx)("div",{className:"gap"}),Object(c.jsx)("div",{className:"border"}),Object(c.jsx)("div",{className:"gap"}),Object(c.jsx)("div",{className:"border-short"})]})]})]})}),m=(s(40),function(e){var t=e.stats,s=e.types,n=e.height,i=e.weight,l=e.onNext,o=e.onPrev,d=e.loading,j=e.onSubmit,b=e.error,m=Object(a.useState)(""),u=Object(r.a)(m,2),h=u[0],p=u[1];return Object(c.jsxs)("div",{className:"right-panel",children:[Object(c.jsx)("div",{className:"yellow-background-clear"}),Object(c.jsx)("div",{className:"right-clear"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"left-panel-curve",children:Object(c.jsx)("div",{className:"triangle-square-right",children:Object(c.jsx)("div",{className:"triangle-border"})})}),Object(c.jsx)("div",{className:"right-panel-curve",children:Object(c.jsx)("div",{className:"right-panel-curve-clear"})})]}),Object(c.jsx)("div",{className:"panel-container-all",children:Object(c.jsxs)("div",{className:"screen-right-panel-wrapper",children:[Object(c.jsxs)("div",{className:"panel-row padding-10",children:[Object(c.jsx)("div",{style:{width:"50%"},className:"pokemon-panel-name background-2 ",children:Object(c.jsx)("div",{className:"statics-container",children:d?Object(c.jsx)("p",{className:"pokemon-name-id fs-35 fw-bold",children:"Loading ... "}):b?Object(c.jsxs)("p",{className:"pokemon-name-id fs-24 fw-bold",children:[" ",b," "]}):t.map((function(e){return Object(c.jsx)("p",{className:"stat-text",children:(t=e.stat.name,s=e.base_stat,a=".",n=26,s=s||"xx","\n        ".concat(t.toString()).concat(a.repeat(n-(s.toString().length+t.toString().length))).concat(s.toString()))},e.stat.name);var t,s,a,n}))})}),Object(c.jsxs)("div",{className:"flex-column",children:[Object(c.jsx)("div",{className:"types-panel",children:"TYPES"}),Object(c.jsx)("div",{className:"background-2 types-container",children:d?Object(c.jsx)("p",{className:"pokemon-name-id",children:"Loading ... "}):b?Object(c.jsx)("p",{className:"pokemon-name-id",children:b}):s.map((function(e){return Object(c.jsx)("div",{className:"types ".concat(e.type.name),children:e.type.name},e.type.name)}))})]})]}),Object(c.jsxs)("div",{className:"button-blue-container",children:[Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"}),Object(c.jsx)("div",{className:"blue-button"})]}),Object(c.jsxs)("div",{className:"hw-wrapper padding-10",children:[Object(c.jsx)("div",{className:"height-weight-container",children:Object(c.jsxs)("div",{className:"input-search",children:[Object(c.jsx)("p",{children:"Height"}),d?Object(c.jsx)("p",{children:"Loading ... "}):b?Object(c.jsx)("p",{children:"404 Not Found"}):Object(c.jsxs)("p",{children:[n," Meter"]})]})}),Object(c.jsx)("div",{className:"height-weight-container",children:Object(c.jsxs)("div",{className:"input-search",children:[Object(c.jsx)("p",{children:"Weight"}),d?Object(c.jsx)("p",{children:"Loading ... "}):b?Object(c.jsx)("p",{children:"404 Not Found"}):Object(c.jsxs)("p",{children:[i," Kg"]})]})})]}),Object(c.jsxs)("div",{className:"control-container",children:[Object(c.jsx)("div",{className:"button-control",onClick:function(){o()}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{value:h,onChange:function(e){p(e.target.value)},placeholder:"ID",min:1,type:"number",className:"input-number gray-screen"}),Object(c.jsx)("div",{onClick:function(){j(h)},className:"submit"})]}),Object(c.jsx)("div",{className:"button-control",onClick:function(){l()}})]})]})})]})}),u=(s(41),function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(!1),l=Object(r.a)(i,2),o=l[0],j=l[1],u=Object(a.useState)(null),h=Object(r.a)(u,2),p=h[0],O=h[1],x=Object(a.useState)({name:null,id:null,abilities:[],description:null,sprites:null,stats:[],types:[],height:null,weight:null}),N=Object(r.a)(x,2),v=N[0],g=N[1];return Object(a.useEffect)((function(){j(!0),O(null),g({name:null,id:null,abilities:[],description:null,sprites:null,stats:[],types:[],height:null,weight:null}),d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(s)).then((function(e){for(var t=e.data.abilities,s=[],c=[],a=0;a<t.length;a++)c.push(d.a.get(e.data.abilities[a].ability.url).then((function(e){s.push(e.data)})));Promise.all(c).then((function(){var t="";s.forEach((function(e){e.effect_entries.forEach((function(e){"en"===e.language.name&&(t+=e.effect)}))})),j(!1),g({name:e.data.name,id:e.data.id,description:t,abilities:e.data.abilities,sprites:e.data.sprites,stats:e.data.stats,types:e.data.types,height:e.data.height,weight:e.data.weight})})).catch((function(e){j(!1);var t=JSON.stringify(e),s=JSON.parse(t);O(s.message)}))})).catch((function(e){j(!1);var t=JSON.stringify(e),s=JSON.parse(t);O(s.message)}))}),[s]),Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"pokedex",children:[Object(c.jsx)(b,{name:v.name,id:v.id,description:v.description,sprites:v.sprites,loading:o,error:p}),Object(c.jsx)(m,{stats:v.stats,types:v.types,height:v.height,weight:v.weight,onPrev:function(){s<=1||n(Number(s)-1)},onNext:function(){n(Number(s)+1)},loading:o,onSubmit:function(e){e&&n(e)},error:p})]})})}),h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.ce4ce357.chunk.js.map