import{V as m}from"./VueDemo-zsvikH8V.js";import{d as l,l as p,o as i,c as _,g as d,v,n as z,k as D,_ as T,f,w as e,a as r,b as o,F as B,e as S}from"./index-9_xIDPeW.js";const h=l({__name:"NHeader",props:{height:{}},setup(n){const t=n,a=p(()=>t.height?{height:`${t.height}px`}:{});return(s,u)=>(i(),_("header",{style:v(a.value),class:"nuomi-header"},[d(s.$slots,"default")],4))}}),N=l({__name:"NFooter",props:{height:{}},setup(n){const t=n,a=p(()=>t.height?{height:`${t.height}px`}:{});return(s,u)=>(i(),_("footer",{style:v(a.value),class:"nuomi-footer"},[d(s.$slots,"default")],4))}}),c=l({__name:"NContainer",props:{direction:{}},setup(n){const t=n,a=p(()=>{var u,$,M;const s={vertical:!0,horizontal:!1};return t.direction?s[t.direction]:(M=($=(u=D()).default)==null?void 0:$.call(u))==null?void 0:M.some(F=>F.type===h||F.type===N)});return(s,u)=>(i(),_("section",{class:z([{"is-vertical":a.value},"nuomi-container"])},[d(s.$slots,"default")],2))}}),E={},j={class:"nuomi-main"};function q(n,t){return i(),_("main",j,[d(n.$slots,"default")])}const C=T(E,[["render",q]]),H=l({__name:"ContainerDemo1",setup(n){return(t,a)=>(i(),f(c,null,{default:e(()=>[r(h,null,{default:e(()=>[o("Header")]),_:1}),r(C,null,{default:e(()=>[o("Main")]),_:1}),r(N,null,{default:e(()=>[o("Footer")]),_:1})]),_:1}))}}),g=n=>{n.__sourceCode=`<script setup lang="ts">\r
import NContainer from '@/lib/Container/NContainer.vue';\r
import NHeader from '@/lib/Container/NHeader.vue';\r
import NMain from '@/lib/Container/NMain.vue';\r
import NFooter from '@/lib/Container/NFooter.vue';\r
<\/script>\r
\r
<template>\r
  <n-container>\r
    <n-header>Header</n-header>\r
    <n-main>Main</n-main>\r
    <n-footer>Footer</n-footer>\r
  </n-container>\r
</template>`,n.__sourceCodeTitle="上中下布局"};typeof g=="function"&&g(H);const b=l({__name:"NAside",props:{width:{}},setup(n){const t=n,a=p(()=>t.width?{width:`${t.width}px`}:{});return(s,u)=>(i(),_("aside",{style:v(a.value),class:"nuomi-aside"},[d(s.$slots,"default")],4))}}),k=l({__name:"ContainerDemo2",setup(n){return(t,a)=>(i(),f(c,{direction:"horizontal"},{default:e(()=>[r(b,null,{default:e(()=>[o("Aside")]),_:1}),r(C,null,{default:e(()=>[o("Main")]),_:1})]),_:1}))}}),x=n=>{n.__sourceCode=`<script setup lang="ts">\r
import NContainer from '@/lib/Container/NContainer.vue';\r
import NAside from '@/lib/Container/NAside.vue';\r
import NMain from '@/lib/Container/NMain.vue';\r
<\/script>\r
\r
<template>\r
  <n-container direction="horizontal">\r
    <n-aside>Aside</n-aside>\r
    <n-main>Main</n-main>\r
  </n-container>\r
</template>`,n.__sourceCodeTitle="左右布局"};typeof x=="function"&&x(k);const w=l({__name:"ContainerDemo3",setup(n){return(t,a)=>(i(),f(c,null,{default:e(()=>[r(h,null,{default:e(()=>[o("Header")]),_:1}),r(c,null,{default:e(()=>[r(b,{width:"200"},{default:e(()=>[o("Aside")]),_:1}),r(c,null,{default:e(()=>[r(C,null,{default:e(()=>[o("Main")]),_:1}),r(N,null,{default:e(()=>[o("Footer")]),_:1})]),_:1})]),_:1})]),_:1}))}}),y=n=>{n.__sourceCode=`<script setup lang="ts">\r
import NContainer from '@/lib/Container/NContainer.vue';\r
import NHeader from '@/lib/Container/NHeader.vue';\r
import NMain from '@/lib/Container/NMain.vue';\r
import NFooter from '@/lib/Container/NFooter.vue';\r
import NAside from '@/lib/Container/NAside.vue';\r
<\/script>\r
\r
<template>\r
  <n-container>\r
    <n-header>Header</n-header>\r
    <n-container>\r
      <n-aside width="200">Aside</n-aside>\r
      <n-container>\r
        <n-main>Main</n-main>\r
        <n-footer>Footer</n-footer>\r
      </n-container>\r
    </n-container>\r
  </n-container>\r
</template>`,n.__sourceCodeTitle="综合布局1"};typeof y=="function"&&y(w);const V=l({__name:"ContainerDemo4",setup(n){return(t,a)=>(i(),f(c,null,{default:e(()=>[r(b,null,{default:e(()=>[o("Aside")]),_:1}),r(c,null,{default:e(()=>[r(h,null,{default:e(()=>[o("Header")]),_:1}),r(C,null,{default:e(()=>[o("Main")]),_:1}),r(N,null,{default:e(()=>[o("Footer")]),_:1})]),_:1})]),_:1}))}}),A=n=>{n.__sourceCode=`<script setup lang="ts">\r
import NContainer from '@/lib/Container/NContainer.vue';\r
import NHeader from '@/lib/Container/NHeader.vue';\r
import NMain from '@/lib/Container/NMain.vue';\r
import NFooter from '@/lib/Container/NFooter.vue';\r
import NAside from '@/lib/Container/NAside.vue';\r
<\/script>\r
\r
<template>\r
  <n-container>\r
    <n-aside>Aside</n-aside>\r
    <n-container>\r
      <n-header>Header</n-header>\r
      <n-main>Main</n-main>\r
      <n-footer>Footer</n-footer>\r
    </n-container>\r
  </n-container>\r
</template>`,n.__sourceCodeTitle="综合布局2"};typeof A=="function"&&A(V);const G=S("h2",null,"Container 组件示例",-1),K=l({__name:"index",setup(n){return(t,a)=>(i(),_(B,null,[G,r(m,{component:H}),r(m,{component:k}),r(m,{component:w}),r(m,{component:V})],64))}});export{K as default};
