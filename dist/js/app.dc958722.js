(function(e){function t(t){for(var c,s,l=t[0],o=t[1],u=t[2],b=0,d=[];b<l.length;b++)s=l[b],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);i&&i(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},r=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/alpha/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2009:function(e,t,n){"use strict";n("acad")},4616:function(e,t,n){"use strict";n("72f0")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("e347"),r=n.n(a);const s={class:"header"},l=Object(c["g"])("img",{class:"header__logo",src:r.a},null,-1),o=[l];function u(e,t){return Object(c["l"])(),Object(c["f"])("header",s,o)}n("2009");var i=n("6b0d"),b=n.n(i);const d={},f=b()(d,[["render",u]]);var j=f;const O={class:"news__card"},p=["src"],v={class:"news__card-content"},g={class:"news__card-date"},_={class:"news__card-date-day"},h={href:"#",class:"news__card-title"},m={class:"news__card-text"},y=["href"];var w={__name:"NewsCard",props:{data:{type:Object,default:()=>{}}},setup(e){const t=e,n=Object(c["b"])(()=>{const e=new Date(1e3*t.data.date);return{day:e.getDay()+1,month:e.toLocaleString("en",{month:"long"}),year:e.getFullYear()}});return(t,a)=>(Object(c["l"])(),Object(c["f"])("div",O,[e.data.image?(Object(c["l"])(),Object(c["f"])("img",{key:0,src:e.data.image,class:"news__card-img"},null,8,p)):Object(c["e"])("",!0),Object(c["g"])("div",v,[Object(c["g"])("div",g,[Object(c["g"])("span",_,Object(c["p"])(n.value.day),1),Object(c["g"])("span",null,[Object(c["g"])("div",null,Object(c["p"])(n.value.month),1),Object(c["g"])("div",null,Object(c["p"])(n.value.year),1)])]),Object(c["g"])("a",h,Object(c["p"])(e.data.name),1),Object(c["g"])("div",m,Object(c["p"])(e.data.previewText),1),Object(c["g"])("a",{href:e.data.link,class:"link-dark news__card-link"},"Новости",8,y)])]))}};n("eb33");const k=w;var x=k;const P={class:"news__list"};var S={__name:"NewsList",props:{cards:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(Object(c["l"])(),Object(c["f"])("div",P,[(Object(c["l"])(!0),Object(c["f"])(c["a"],null,Object(c["n"])(e.cards,(e,t)=>(Object(c["l"])(),Object(c["d"])(x,{key:t,data:e},null,8,["data"]))),128))]))}};n("b13b");const M=S;var T=M;function A(e,t){return Object(c["l"])(),Object(c["f"])("button",Object(c["j"])({class:"btn"},e.$attrs),[Object(c["o"])(e.$slots,"default")],16)}n("e985");const C={},D=b()(C,[["render",A]]);var J=D;const L={class:"main"},N=Object(c["g"])("div",{class:"main__hero"},[Object(c["g"])("h1",{class:"main__title"},"Новости")],-1),$={key:1};var q={__name:"main",setup(e){const t=Object(c["m"])([]),n=Object(c["m"])(!1),a=Object(c["m"])(null),r=async(e="")=>{await fetch("https://flems.github.io/test/api/news/"+e).then(e=>e.json()).then(({items:e,nav:c})=>{t.value=[...t.value,...e],a.value=c,n.value||(n.value=!0)})};return Object(c["k"])(()=>{r()}),(e,s)=>{var l,o;return Object(c["l"])(),Object(c["f"])("main",L,[N,Object(c["i"])(T,{cards:t.value},null,8,["cards"]),t.value.length&&(null===(l=a.value)||void 0===l?void 0:l.total)>(null===(o=a.value)||void 0===o?void 0:o.current)?(Object(c["l"])(),Object(c["d"])(J,{key:0,onClick:s[0]||(s[0]=e=>r(a.value.current+1))},{default:Object(c["q"])(()=>[Object(c["h"])("Загрузить ещё")]),_:1})):!t.value.length&&n.value?(Object(c["l"])(),Object(c["f"])("h2",$,"Ничего не найдено")):Object(c["e"])("",!0)])}}};n("cc8b");const F=q;var Y=F;const z={class:"footer"},B=Object(c["g"])("img",{class:"footer__logo",src:r.a},null,-1),E=Object(c["g"])("div",null,"© alpha, 2023",-1),G=[B,E];function H(e,t){return Object(c["l"])(),Object(c["f"])("footer",z,G)}n("7c5f");const I={},K=b()(I,[["render",H]]);var Q=K;const R={class:"app"};var U={__name:"App",setup(e){return(e,t)=>(Object(c["l"])(),Object(c["f"])("div",R,[Object(c["i"])(j),Object(c["i"])(Y),Object(c["i"])(Q)]))}};n("4616");const V=U;var W=V;Object(c["c"])(W).mount("#app")},"72f0":function(e,t,n){},"7ad0":function(e,t,n){},"7c5f":function(e,t,n){"use strict";n("7ad0")},acad:function(e,t,n){},b13b:function(e,t,n){"use strict";n("f0a0")},c03b:function(e,t,n){},c8a0:function(e,t,n){},cc8b:function(e,t,n){"use strict";n("d7fb")},d7fb:function(e,t,n){},e347:function(e,t,n){e.exports=n.p+"img/logo.372ce664.svg"},e985:function(e,t,n){"use strict";n("c03b")},eb33:function(e,t,n){"use strict";n("c8a0")},f0a0:function(e,t,n){}});
//# sourceMappingURL=app.dc958722.js.map