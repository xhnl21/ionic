"use strict";(self["webpackChunksocial"]=self["webpackChunksocial"]||[]).push([[576],{576:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>P});
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const r=e=>{const t=[];let s=0;e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}));const r=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),c={content:r,placeholders:t};return c},c=(e,t)=>t.replace(/__ph-(\d+)__/g,((t,s)=>e[+s])),o="-shadowcsshost",n="-shadowcssslotted",l="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+o+i,"gim"),p=new RegExp("("+l+i,"gim"),h=new RegExp("("+n+i,"gim"),u=o+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",f=/-shadowcsshost/gim,$=/:host/gim,x=/::slotted/gim,_=/:host-context/gim,w=/\/\*\s*[\s\S]*?\*\//g,b=e=>e.replace(w,""),S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,W=e=>e.match(S)||[],k=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,O=/([{}])/g,j=/(^.*?[^\\])??((:+)(.*)|$)/,E="{",R="}",C="%BLOCK%",T=(e,t)=>{const s=L(e);let r=0;return s.escapedString.replace(k,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+C)&&(o=s.blocks[r++],n=n.substring(C.length+1),l="{");const i={selector:c,content:o},a=t(i);return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`}))},L=e=>{const t=e.split(O),s=[],r=[];let c=0,o=[];for(let l=0;l<t.length;l++){const e=t[l];e===R&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(C),o=[]),s.push(e)),e===E&&c++}o.length>0&&(r.push(o.join("")),s.push(C));const n={escapedString:s.join(""),blocks:r};return n},B=e=>(e=e.replace(_,l).replace($,o).replace(x,n),e),I=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(u,o,e[3]))}return r.join(",")}return u+e[3]})),K=(e,t,s)=>e+t.replace(o,"")+s,M=e=>I(e,a,K),U=(e,t,s)=>t.indexOf(o)>-1?K(e,t,s):e+t+s+", "+t+" "+e+s,q=(e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(h,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=n+o,i=`${n.trimRight()}${o.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return u+e[3]})),{selectors:r,cssText:e}},v=e=>I(e,p,U),y=e=>d.reduce(((e,t)=>e.replace(t," ")),e),z=e=>{const t=/\[/g,s=/\]/g;return e=e.replace(t,"\\[").replace(s,"\\]"),new RegExp("^("+e+")"+m,"m")},A=(e,t)=>{const s=z(t);return!s.test(e)},D=(e,t)=>e.replace(j,((e,s="",r,c="",o="")=>s+t+c+o)),F=(e,t,s)=>{if(f.lastIndex=0,f.test(e)){const t=`.${s}`;return e.replace(g,((e,s)=>D(s,t))).replace(f,t+" ")}return t+" "+e},G=(e,t,s)=>{const o=/\[is=([^\]]*)\]/g;t=t.replace(o,((e,...t)=>t[0]));const n="."+t,l=e=>{let r=e.trim();if(!r)return"";if(e.indexOf(u)>-1)r=F(e,t,s);else{const t=e.replace(f,"");t.length>0&&(r=D(t,n))}return r},i=r(e);e=i.content;let a,p="",h=0;const g=/( |>|\+|~(?!=))\s*/g,d=e.indexOf(u)>-1;let m=!d;while(null!==(a=g.exec(e))){const t=a[1],s=e.slice(h,a.index).trim();m=m||s.indexOf(u)>-1;const r=m?l(s):s;p+=`${r} ${t} `,h=g.lastIndex}const $=e.substring(h);return m=m||$.indexOf(u)>-1,p+=m?l($):$,c(i.placeholders,p)},H=(e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():A(e,t)?G(e,t,s).trim():e.trim())).join(", "),J=(e,t,s,r,c)=>T(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=H(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=J(e.content,t,s,r));const n={selector:c.replace(/\s{2,}/g," ").trim(),content:o};return n})),N=(e,t,s,r,c)=>{e=B(e),e=M(e),e=v(e);const o=q(e,r);return e=o.cssText,e=y(e),t&&(e=J(e,t,s,r)),e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:o.selectors}},P=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=W(e);e=b(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=T(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=T(e.content,t),e):e))}const l=N(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=576.e2625c08.js.map