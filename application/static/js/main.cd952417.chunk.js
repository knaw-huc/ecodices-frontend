(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a.n(c),n=a(21),i=a.n(n),r=a(12),l=a.n(r),o=a(15),h=a(8),d=a(2);var j=function(e){return Object(d.jsxs)("div",{className:"hcColumnsAuto hcPointer hcRowCard",onClick:function(){return e.view(!0,e.item)},children:[Object(d.jsx)("div",{className:"hcCell--x2",children:Object(d.jsx)("strong",{children:e.item.title})}),Object(d.jsx)("div",{children:e.item.origPlace}),Object(d.jsx)("div",{children:e.item.origDate})]})};var u=function(e){return Object(d.jsx)("div",{className:"hcLists hcMarginBottom2",children:e.lst.items.map((function(t){return Object(d.jsx)(j,{item:t,view:e.view},t.xml)}))})},b="https://ecoservice.sd.di.huc.knaw.nl/";var m=function(e){var t=Object(c.useState)(e.min),a=Object(h.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),r=Object(h.a)(i,2),j=r[0],u=r[1],m=Object(c.useState)(!0),O=Object(h.a)(m,2),f=O[0],v=O[1],x=Object(c.useState)(!0),g=Object(h.a)(x,2),p=g[0],N=g[1],y=Object(c.useState)(!0),k=Object(h.a)(y,2),w=k[0],C=k[1];function S(){return(S=Object(o.a)(l.a.mark((function t(){var a,c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b+"facet?name="+e.field+"&amount="+s,t.next=3,fetch(a);case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,u(n),N(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[f]),Object(d.jsxs)("div",{className:"hcFacet",children:[Object(d.jsx)("div",{className:"hcFacetTitle",children:Object(d.jsx)("span",{children:e.label})}),Object(d.jsxs)("div",{className:"hcFacetItems",children:[p?Object(d.jsx)("div",{className:"hcFacetItem",children:"Loading..."}):Object(d.jsx)("div",{children:j.map((function(t){return Object(d.jsxs)("div",{className:"hcFacetItem",onClick:function(){return e.parentCallback({facet:e.label,field:e.field,candidate:t.key})},children:[t.key," ",Object(d.jsx)("span",{className:"hcFacetCount",children:t.doc_count})]})}))}),w?Object(d.jsx)("div",{className:"hcClickable",onClick:function(){n(e.max),C(!1),v(!f)},children:"More"}):Object(d.jsx)("div",{className:"hcClickable",onClick:function(){n(e.min),C(!0),v(!f)},children:"Less"})]})]})};var O=function(e){var t=Object(c.useState)(e.min),a=Object(h.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),r=Object(h.a)(i,2),j=r[0],u=r[1],m=Object(c.useState)(!0),O=Object(h.a)(m,2),f=O[0],v=O[1],x=Object(c.useState)(!0),g=Object(h.a)(x,2),p=g[0],N=g[1],y=Object(c.useState)(!0),k=Object(h.a)(y,2),w=k[0],C=k[1],S=Object(c.useState)(""),B=Object(h.a)(S,2),L=B[0],F=B[1];function M(){return(M=Object(o.a)(l.a.mark((function t(){var a,c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b+"filter-facet?name="+e.field+"&amount="+s+"&filter="+L,t.next=3,fetch(a);case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,u(n),N(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[f]),Object(d.jsxs)("div",{className:"hcFacet",children:[Object(d.jsx)("div",{className:"hcFacetTitle",children:Object(d.jsx)("span",{children:e.label})}),Object(d.jsx)("div",{className:"hcFacetFilter",children:Object(d.jsx)("input",{type:"text",name:"",onChange:function(e){e.currentTarget.value.length>0&&(F(e.currentTarget.value),v(!f))},id:"shipMasterFilter",placeholder:"Type to filter"})}),Object(d.jsxs)("div",{className:"hcFacetItems",children:[p?Object(d.jsx)("div",{className:"hcFacetItem",children:"Loading..."}):Object(d.jsx)("div",{children:j.map((function(t){return Object(d.jsxs)("div",{className:"hcFacetItem",onClick:function(){return e.parentCallback({facet:e.label,field:e.field,candidate:t.key})},children:[t.key," ",Object(d.jsx)("span",{className:"hcFacetCount",children:t.doc_count})]})}))}),w?Object(d.jsx)("div",{className:"hcClickable",onClick:function(){n(e.max),C(!1),v(!f)},children:"More"}):Object(d.jsx)("div",{className:"hcClickable",onClick:function(){n(e.min),C(!0),v(!f)},children:"Less"})]})]})};var f=function(e){var t=Object(c.useState)(""),a=Object(h.a)(t,2),s=a[0],n=a[1];function i(){""!==s&&e.add({facet:"Free text",field:"FREE_TEXT",candidate:s})}return Object(d.jsxs)("div",{className:"hcFacet",children:[Object(d.jsx)("div",{className:"hcFacetTitle",children:"Text search"}),Object(d.jsxs)("div",{className:"hcFacetSearch",children:[Object(d.jsx)("input",{type:"text",name:"",id:"freeText",placeholder:"Press ENTER to search",onChange:function(e){n(e.currentTarget.value)},onKeyUp:function(e){"Enter"===e.key&&i()}}),Object(d.jsx)("button",{type:"button",name:"button",onClick:function(){i()},children:"Search"})]})]})},v=a.p+"static/media/logo-data-huygensing.5276f91a.png";var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"hcContentContainer bgColorBrand1 hcMarginBottom1",children:Object(d.jsxs)("header",{className:" hcPageHeaderSimple hcBasicSideMargin",children:[Object(d.jsx)("div",{className:"hcBrand",children:Object(d.jsx)("div",{className:"hcBrandLogo",children:Object(d.jsx)("img",{src:v,className:"logo"})})}),Object(d.jsx)("nav",{children:Object(d.jsx)("a",{href:"",children:"About"})})]})}),Object(d.jsx)("div",{className:"hcContentContainer hcMarginBottom5 hcBorderBottom",children:Object(d.jsx)("div",{className:"hcBarDataset hcBasicSideMargin",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("span",{className:"hcSmallTxt hcTxtColorGreyMid",children:"Dataset"}),Object(d.jsx)("select",{className:"",name:"",children:Object(d.jsx)("option",{value:"",children:"Manuscripts eCodices NL"})})]})})})]})},g=a(22);var p=function(e){var t={searchvalues:"none",page:1,page_length:30,sortorder:"title"},a=Object(c.useState)({amount:0}),s=Object(h.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(!0),j=Object(h.a)(r,2),v=j[0],p=j[1],N=Object(c.useState)(!0),y=Object(h.a)(N,2),k=y[0],w=y[1],C=Object(c.useState)(t),S=Object(h.a)(C,2),B=S[0],L=S[1],F=Object(c.useState)([]),M=Object(h.a)(F,2),T=M[0],_=M[1],E=Object(c.useState)(!1),I=Object(h.a)(E,2),P=I[0],D=I[1],A=Object(c.useState)({xml:"",origDate:"",origPlace:"",title:"Test",shelfmark:"",itemAuthor:"",itemTitle:"",measure:"",textLang:[],summary:"",layout:""}),H=Object(h.a)(A,2),R=H[0],J=H[1];if("none"!==e.search_string)try{t=JSON.parse(g.a.fromBase64(e.search_string)),L(t)}catch(W){window.scroll(0,0),window.location.href="/"}var z="0",G="";G=1===n.amount?" result":" results",z=n.amount>=1e4?n.amount.toLocaleString("nl-NL")+"+"+G:n.amount.toLocaleString("nl-NL")+G;var U=[];function q(){return(q=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b+"browse",e.next=3,fetch("https://ecoservice.sd.di.huc.knaw.nl/browse",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Origin:"http://localhost:8091"},body:JSON.stringify(B)});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a),_(Z(a)),p(!1),w(k);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"object"===typeof B.searchvalues&&(U=B.searchvalues),Object(c.useEffect)((function(){!function(){q.apply(this,arguments)}()}),[k]);var K=function(e){if(t=B,"none"===B.searchvalues)t.searchvalues=[{name:e.facet,field:e.field,values:[e.candidate]}],L(t),w(!k);else{if("object"===typeof t.searchvalues){var a=!1;t.searchvalues.forEach((function(t){t.name===e.facet&&(a=!0,t.values.includes(e.candidate)||t.values.push(e.candidate))})),a||t.searchvalues.push({name:e.facet,field:e.field,values:[e.candidate]})}t.page=1,L(t),w(!k),console.log(B),window.scroll(0,0)}};function Z(e){for(var t=[],a=1;a<=e.pages;a++)t.push(a);return t}var V=function(e){(t=B).page=e,L(t),w(!k),window.scroll(0,0)};return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),P?Object(d.jsx)("div",{className:"hcContentContainer",children:Object(d.jsxs)("div",{className:"hcBasicSideMargin hcMarginTop4 hcMarginBottom1",children:[Object(d.jsx)("h1",{children:R.title}),Object(d.jsxs)("div",{className:"hcFormStack hcMarginBottom3 hcBasicSideMargin",children:[Object(d.jsxs)("div",{className:"hcStackInfo",children:[Object(d.jsx)("div",{className:"hcClickable",children:"Show TEI file"}),Object(d.jsx)("div",{className:"hcClickable",children:"Edit"}),Object(d.jsx)("div",{className:"hcClickable",onClick:function(){return D(!1)},children:"Back"})]}),Object(d.jsxs)("div",{className:"hcStackFormItems",children:[Object(d.jsx)("div",{className:"hcLabel",children:"Original place"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.origPlace,Object(d.jsx)("br",{}),"Dordrecht"]}),Object(d.jsx)("div",{className:"hcLabel",children:"Original date"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.origDate,Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"Shelfmark"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.shelfmark,Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"Title"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.itemTitle,Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"Author"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.itemAuthor,Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"Layout"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:[R.layout,Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"TEI file"}),Object(d.jsx)("div",{className:"hcMarginBottom1",children:R.xml})]})]})]})}):Object(d.jsxs)("div",{className:"hcContentContainer",children:[Object(d.jsx)("div",{className:"hcBasicSideMargin hcMarginTop1 hcMarginBottom1",children:Object(d.jsx)("h1",{children:"Manuscript search"})}),v?Object(d.jsx)("div",{className:"loader",children:"Loading..."}):Object(d.jsxs)("div",{className:"hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15",children:[Object(d.jsxs)("div",{className:"hcLayoutFacets",children:[Object(d.jsx)("button",{type:"button",name:"button",id:"showFacets",className:"hcfixedSideButton",children:Object(d.jsx)("img",{src:"https://d33wubrfki0l68.cloudfront.net/191a405740a4ade92836ba6eea6a6ceaa798bf2f/a4d8b/images/icons/icon-set-facets.svg",className:"icon"})}),Object(d.jsxs)("div",{className:"hcLayoutFacetsToggel",id:"hcLayoutFacetsToggel",children:[Object(d.jsx)(f,{add:K}),Object(d.jsx)(O,{parentCallback:K,label:"title",field:"itemTitle",min:5,max:20}),Object(d.jsx)(m,{parentCallback:K,label:"Original language",field:"textLang.language",min:5,max:50}),Object(d.jsx)(m,{parentCallback:K,label:"Location",field:"location",min:5,max:50}),Object(d.jsx)(m,{parentCallback:K,label:"Original place",field:"origPlace",min:5,max:100})]})]}),Object(d.jsxs)("div",{className:"hcLayoutResults",children:[Object(d.jsxs)("div",{className:"hcResultsHeader hcMarginBottom1",children:[Object(d.jsxs)("div",{children:[z,", page ",B.page," of ",n.pages]}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"",name:"",value:B.sortorder,onChange:function(e){var a;a=e.target.value,(t=B).sortorder=a,t.page=1,L(t),w(!k)},children:[Object(d.jsx)("option",{value:"title",children:"Order by Title"}),Object(d.jsx)("option",{value:"origPlace",children:"Order by Place"}),Object(d.jsx)("option",{value:"origDate",children:"Order by Date"})]})})]}),Object(d.jsx)("div",{className:"hcMarginBottom2",children:Object(d.jsxs)("div",{className:"hcSmallTxt hcTxtColorGreyMid",children:["Selected facets:",Object(d.jsx)("span",{className:"hcFacetReset hcClickable",onClick:function(){(t=B).page=1,t.searchvalues="none",L(t),w(!k)},children:"Reset facets"})]})}),"none"===B.searchvalues?Object(d.jsx)("div",{}):U.map((function(e){return Object(d.jsxs)("span",{className:"hcSelectedFacet",children:[Object(d.jsxs)("span",{className:"hcSelectedFacetType",children:[e.name,": "]}),e.values.map((function(a,c){return Object(d.jsxs)("div",{className:"hcFacetValues",onClick:function(){return c=e.name,s=a,"object"===typeof(t=B).searchvalues&&(t.searchvalues.forEach((function(e){e.name===c&&(e.values=e.values.filter((function(e){return e!==s})))})),t.searchvalues=t.searchvalues.filter((function(e){return e.values.length>0})),0===t.searchvalues.length&&(t.searchvalues="none")),L(t),void w(!k);var c,s},children:[a,"  "]},c)}))]})})),Object(d.jsx)("div",{className:"hcList",children:Object(d.jsxs)("div",{className:"hcListHeader",children:[Object(d.jsx)("div",{className:"hcLabel hcListItemLong",children:"Title"}),Object(d.jsx)("div",{className:"hcLabel",children:"Place"}),Object(d.jsx)("div",{className:"hcLabel",children:"Date"})]})}),Object(d.jsx)(u,{lst:n,view:function(e,t){D(e),J(t)}}),!v&&n.amount>B.page_length?Object(d.jsxs)("div",{className:"hcPagination",children:[B.page<2?Object(d.jsx)("div",{}):Object(d.jsx)("div",{className:"hcClickable",onClick:function(){B.page>0&&V(B.page-1)},children:"\u2190 Previous"}),Object(d.jsx)("div",{className:"hcClickable",children:Object(d.jsx)("select",{className:"hcPageSelector",onChange:function(e){return function(e){var t=Number(e);NaN!=t&&V(t)}(e.target.value)},children:T.map((function(e){return e===B.page?Object(d.jsx)("option",{value:e,selected:!0,children:e}):Object(d.jsx)("option",{value:e,children:e})}))})}),B.page<n.pages?Object(d.jsx)("div",{className:"hcClickable",onClick:function(){V(B.page+1)},children:"Next \u2192"}):Object(d.jsx)("div",{})]}):Object(d.jsx)("div",{})]})]})]})]})};var N=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{className:"hcContentContainer",children:Object(d.jsxs)("div",{className:"hcStackFormItems",children:[Object(d.jsx)("div",{className:"hcLabel",children:"Birth"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:["1851",Object(d.jsx)("br",{}),"Dordrecht"]}),Object(d.jsx)("div",{className:"hcLabel",children:"Death"}),Object(d.jsxs)("div",{className:"hcMarginBottom1",children:["1929",Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"hcLabel",children:"Gender"}),Object(d.jsx)("div",{className:"hcMarginBottom1",children:"male"}),Object(d.jsx)("div",{className:"hcLabel",children:"Short bio"}),Object(d.jsx)("div",{className:"hcMarginBottom1",children:"Jan Boeke was born in 1874 in Hengelo. He attended the gymnasium in Utrecht and in 1894 he went to study medicine in Amsterdam. As a third year student he won a gold medal that the Amsterdam Medical Faculty had put up for the best answer to the prize question Over de invloed van aethyl-alcohol op het hart, met name op de hartspier. After sitting his medical finals in 1900, Boeke left for the Zoological Station (Deep Sea Institute) in Naples to study the development of muraenoids. With the publication arising from this, De ontwikkelingsgeschiedenis der muraenoieden he firmly established his name as a zoologist. Back in the Netherlands he assisted professor Thomas Place at the Physiological laboratory in Amsterdam and after one year he gained his doctorate under Place for his thesis Bijdrage tot de pharmacologie van het hart, a more detailed version of his answer to the prize question. Back in Naples, he became acquainted with the famous Hungarian professor Stefan Ap\xe1thy, expert in the area of the anatomy and histology of nervous tissue. He taught Boeke about the problems and methods of research in this area. Fur thermore, Boeke was his guest for four months in his laboratory in Kolozsvar Hungary. Back in Amsterdam Boeke worked for a shor t period at the Histology Depar tment of the Physiology Laboratory, but he soon left the university to accept a position as first assistant at the newly founded Rijksinstituut voor Onderzoek der Zee [National Institute for Marine Research] in Den Helder. From there he took part in a number of fishing investigations on the Nor th Sea and the Caribbean Sea."})]})})]})};function y(e){return"function"===typeof e}function k(e){for(var t in e){var a=e[t];return y(a)?a:k(a)}}function w(e,t){if("string"===typeof e){var a=t[e];return void 0===a?void 0===t[e]?t[""]:t[e]:y(a)?a:(console.error("Non-terminal state config for an atomic state!"),k(a))}var c,s={},n=0;for(var i in e){var r=void 0===t[i]?t[""]:t[i];if(y(r))n++,s[i]=r,c=r;else if("object"===typeof r){var l=w(e[i],r);void 0!==l&&(n++,s[i]=l,c=l)}}if(1===n)return c;var o=t[":merge"];return function(e){return o({state:e.state,input:s})}}var C,S,B=a(33),L=a(34),F=a(6),M=Object(L.a)({id:"fetch",initial:"search",context:{search_string:"none",manuscript_id:""},on:{detail:{actions:Object(F.b)({manuscript_id:function(e,t){return t.manuscript_id}}),target:"detail"},search:{actions:Object(F.b)({search_string:function(e,t){return t.search_string}}),target:"search"},"*":"fourOhFour"},states:{fourOhFour:{},detail:{on:{search:"search",detail:"detail"}},search:{on:{item:"detail"}}}}),T=(a(31),Object(B.a)(M));function _(){if(0===window.location.hash.substr(1).indexOf("detail/")){var e=window.location.hash.substr(window.location.hash.indexOf("/")+1);T.send("fourOhFour"),T.send("detail",{manuscript_id:e})}else if(0===window.location.hash.substr(1).indexOf("search"))if(window.location.hash.substr(1).length>6&&-1!==window.location.hash.substr(1).indexOf("search")){var t=window.location.hash.substr(window.location.hash.indexOf("/")+1);T.send("search",{search_string:t})}else{T.send("search",{search_string:"none"})}else{T.send("search",{search_string:"none"})}}T.start(),_(),window.onhashchange=_,i.a.render(Object(d.jsx)("div",{children:(C=T,S={detail:function(e){var t=e.state;return Object(d.jsx)(N,{manuscriptID:(t.context||{}).manuscript_id})},search:function(e){var t=e.state;return Object(d.jsx)(p,{search_string:(t.context||{}).search_string})},fourOhFour:function(e){return e.state,Object(d.jsx)("div",{children:"404"})},"":function(e){var t=e.state;return Object(d.jsxs)("div",{children:["The GUI for ",t.value," is not yet defined"]})}},s.a.createElement((function(){var e=Object(c.useState)(C.state),t=Object(h.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){var e=function(e){return n(e)};return C.onTransition(e),function(){C.off(e)}}),[C,S]);var i=w(a.value,S);if(void 0!==i){var r={state:a};return s.a.createElement(i,r)}return Object(d.jsxs)("div",{children:["No GUI defined for ",JSON.stringify(a.value)]})})))}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cd952417.chunk.js.map