import{V as D}from"./VueDemo-lq-smuxF.js";import{d as m,c as r,g as E,o as a,k as R,l as S,r as u,m as F,p as I,e as d,F as b,q,u as z,f as x,s as L,n as M,t as U,w as _,a as v,b as N}from"./index-JUJhnazY.js";const h=m({__name:"NTab",props:{title:{}},setup(t){return(n,l)=>(a(),r("div",null,[E(n.$slots,"default")]))}}),j=["onClick"],A={class:"nuomi-tabs-content"},G=m({__name:"NTabs",props:{selected:{}},emits:["update:selected"],setup(t,{emit:n}){var g,y;const l=t,c=n,o=((y=(g=R()).default)==null?void 0:y.call(g))||[];o&&o.forEach(e=>{if(e.type!==h)throw new Error("Tabs 子标签必须是 Tab")});const T=S(()=>o.find(e=>e.props.title===l.selected)),$=o.map(e=>e.props.title||""),p=u(),f=u(),k=u();F(()=>{I(()=>{const{width:e}=f.value.getBoundingClientRect();p.value.style.width=e+"px";const{left:C}=k.value.getBoundingClientRect(),{left:s}=f.value.getBoundingClientRect(),i=s-C;p.value.style.left=i+"px"})});const V=e=>{c("update:selected",e)};return(e,C)=>(a(),r(b,null,[d("div",{ref_key:"container",ref:k,class:"nuomi-tabs-nav"},[(a(!0),r(b,null,q(z($),s=>(a(),r("div",{key:s,ref_for:!0,ref:i=>{e.selected===s&&(f.value=i)},class:M([{selected:s===e.selected},"nuomi-tabs-nav-item"]),onClick:i=>V(s)},U(s),11,j))),128)),d("div",{ref_key:"indicator",ref:p,class:"nuomi-tabs-nav-indicator"},null,512)],512),d("div",A,[(a(),x(L(T.value),{key:T.value.props.title,class:"nuomi-tabs-content-item"}))])],64))}}),B=m({__name:"TabsDemo1",setup(t){const n=u("导航1");return(l,c)=>(a(),x(G,{selected:n.value,"onUpdate:selected":c[0]||(c[0]=o=>n.value=o)},{default:_(()=>[v(h,{title:"导航1"},{default:_(()=>[N("内容1")]),_:1}),v(h,{title:"导航2"},{default:_(()=>[N("内容2")]),_:1})]),_:1},8,["selected"]))}}),w=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NTabs from '@/lib/NTabs.vue';\r
import NTab from '@/lib/NTab.vue';\r
\r
const item = ref('导航1');\r
<\/script>\r
\r
<template>\r
  <n-tabs v-model:selected="item">\r
    <n-tab title="导航1">内容1</n-tab>\r
    <n-tab title="导航2">内容2</n-tab>\r
  </n-tabs>\r
</template>`,t.__sourceCodeTitle="基本使用"};typeof w=="function"&&w(B);const H=d("h2",null,"Tabs 组件示例",-1),O=m({__name:"index",setup(t){return(n,l)=>(a(),r(b,null,[H,v(D,{component:B})],64))}});export{O as default};
