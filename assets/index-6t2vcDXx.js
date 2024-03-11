import{_ as n,V as _}from"./VueDemo-zsvikH8V.js";import{d as i,c,a as t,w as e,F as m,o as a,b as o,e as r,f as k}from"./index-9_xIDPeW.js";const x=i({__name:"ButtonDemo1",setup(l){return(u,s)=>(a(),c(m,null,[t(n,null,{default:e(()=>[o("按钮")]),_:1}),t(n,{theme:"link"},{default:e(()=>[o("链接按钮")]),_:1}),t(n,{theme:"text"},{default:e(()=>[o("文本按钮")]),_:1})],64))}}),d=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
<\/script>\r
\r
<template>\r
  <n-button>按钮</n-button>\r
  <n-button theme="link">链接按钮</n-button>\r
  <n-button theme="text">文本按钮</n-button>\r
</template>`,l.__sourceCodeTitle="按钮的三种形式"};typeof d=="function"&&d(x);const B=i({__name:"ButtonDemo2",setup(l){return(u,s)=>(a(),c(m,null,[r("div",null,[t(n,{size:"big"},{default:e(()=>[o("按钮")]),_:1}),t(n,null,{default:e(()=>[o("按钮")]),_:1}),t(n,{size:"small"},{default:e(()=>[o("按钮")]),_:1})]),r("div",null,[t(n,{theme:"link",size:"big"},{default:e(()=>[o("链接按钮")]),_:1}),t(n,{theme:"link"},{default:e(()=>[o("链接按钮")]),_:1}),t(n,{theme:"link",size:"small"},{default:e(()=>[o("链接按钮")]),_:1})]),r("div",null,[t(n,{theme:"text",size:"big"},{default:e(()=>[o("文本按钮")]),_:1}),t(n,{theme:"text"},{default:e(()=>[o("文本按钮")]),_:1}),t(n,{theme:"text",size:"small"},{default:e(()=>[o("文本按钮")]),_:1})])],64))}}),b=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
<\/script>\r
\r
<template>\r
  <div>\r
    <n-button size="big">按钮</n-button>\r
    <n-button>按钮</n-button>\r
    <n-button size="small">按钮</n-button>\r
  </div>\r
  <div>\r
    <n-button theme="link" size="big">链接按钮</n-button>\r
    <n-button theme="link">链接按钮</n-button>\r
    <n-button theme="link" size="small">链接按钮</n-button>\r
  </div>\r
  <div>\r
    <n-button theme="text" size="big">文本按钮</n-button>\r
    <n-button theme="text">文本按钮</n-button>\r
    <n-button theme="text" size="small">文本按钮</n-button>\r
  </div>\r
</template>`,l.__sourceCodeTitle="支持 size 属性"};typeof b=="function"&&b(B);const g=i({__name:"ButtonDemo3",setup(l){return(u,s)=>(a(),c(m,null,[r("div",null,[t(n,{level:"main"},{default:e(()=>[o("主要按钮")]),_:1}),t(n,null,{default:e(()=>[o("普通按钮")]),_:1}),t(n,{level:"danger"},{default:e(()=>[o("危险按钮")]),_:1})]),r("div",null,[t(n,{theme:"link",level:"main"},{default:e(()=>[o("主要链接按钮")]),_:1}),t(n,{theme:"link"},{default:e(()=>[o("普通链接按钮")]),_:1}),t(n,{theme:"link",level:"danger"},{default:e(()=>[o("危险链接按钮")]),_:1})]),r("div",null,[t(n,{theme:"text",level:"main"},{default:e(()=>[o("主要文字按钮")]),_:1}),t(n,{theme:"text"},{default:e(()=>[o("普通文字按钮")]),_:1}),t(n,{theme:"text",level:"danger"},{default:e(()=>[o("危险文字按钮")]),_:1})])],64))}}),p=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
<\/script>\r
\r
<template>\r
  <div>\r
    <n-button level="main">主要按钮</n-button>\r
    <n-button>普通按钮</n-button>\r
    <n-button level="danger">危险按钮</n-button>\r
  </div>\r
  <div>\r
    <n-button theme="link" level="main">主要链接按钮</n-button>\r
    <n-button theme="link">普通链接按钮</n-button>\r
    <n-button theme="link" level="danger">危险链接按钮</n-button>\r
  </div>\r
  <div>\r
    <n-button theme="text" level="main">主要文字按钮</n-button>\r
    <n-button theme="text">普通文字按钮</n-button>\r
    <n-button theme="text" level="danger">危险文字按钮</n-button>\r
  </div>\r
</template>`,l.__sourceCodeTitle="支持 level 属性"};typeof p=="function"&&p(g);const N=i({__name:"ButtonDemo4",setup(l){return(u,s)=>(a(),c(m,null,[t(n,{disabled:""},{default:e(()=>[o("禁用按钮")]),_:1}),t(n,{theme:"link",disabled:""},{default:e(()=>[o("禁用链接按钮")]),_:1}),t(n,{theme:"text",disabled:""},{default:e(()=>[o("禁用文本按钮")]),_:1})],64))}}),f=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
<\/script>\r
\r
<template>\r
  <n-button disabled>禁用按钮</n-button>\r
  <n-button theme="link" disabled>禁用链接按钮</n-button>\r
  <n-button theme="text" disabled>禁用文本按钮</n-button>\r
</template>`,l.__sourceCodeTitle="支持 disabled 属性"};typeof f=="function"&&f(N);const z=i({__name:"ButtonDemo5",setup(l){return(u,s)=>(a(),k(n,{loading:""},{default:e(()=>[o("加载中")]),_:1}))}}),h=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
<\/script>\r
\r
<template>\r
  <n-button loading>加载中</n-button>\r
</template>`,l.__sourceCodeTitle="支持 loading 属性"};typeof h=="function"&&h(z);const C=i({__name:"ButtonDemo6",setup(l){const u=()=>{alert("点击事件")};return(s,D)=>(a(),k(n,{onClick:u},{default:e(()=>[o("按钮")]),_:1}))}}),v=l=>{l.__sourceCode=`<script setup lang="ts">\r
import NButton from '@/lib/NButton.vue';\r
\r
const handleClick = () => {\r
  alert('点击事件');\r
};\r
<\/script>\r
\r
<template>\r
  <n-button @click="handleClick">按钮</n-button>\r
</template>`,l.__sourceCodeTitle="支持事件"};typeof v=="function"&&v(C);const $=r("h2",null,"Button 组件示例",-1),V=i({__name:"index",setup(l){return(u,s)=>(a(),c(m,null,[$,t(_,{component:x}),t(_,{component:B}),t(_,{component:g}),t(_,{component:N}),t(_,{component:z}),t(_,{component:C})],64))}});export{V as default};
