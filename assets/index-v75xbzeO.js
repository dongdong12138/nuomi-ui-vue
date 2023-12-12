import{V as c}from"./VueDemo-PZU5t6xl.js";import{d as l,o as a,c as m,n as b,e as p,r as _,f,a as i,F as v}from"./index-hQWXWpBk.js";const S=["disabled"],k=p("span",null,null,-1),N=[k],h=l({__name:"NSwitch",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,o=t,n=()=>{o("update:modelValue",!s.modelValue)};return(r,g)=>(a(),m("button",{disabled:r.disabled,class:b([{checked:r.modelValue},"nuomi-switch"]),onClick:n},N,10,S))}}),V=l({__name:"SwitchDemo1",setup(e){const t=_(!1);return(s,o)=>(a(),f(h,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},null,8,["modelValue"]))}}),u=e=>{e.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NSwitch from '@/lib/NSwitch.vue';\r
\r
const open = ref(false);\r
<\/script>\r
\r
<template>\r
  <n-switch v-model="open"></n-switch>\r
</template>`,e.__sourceCodeTitle="基本使用"};typeof u=="function"&&u(V);const w=l({__name:"SwitchDemo2",setup(e){const t=_(!1);return(s,o)=>(a(),f(h,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),disabled:""},null,8,["modelValue"]))}}),d=e=>{e.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NSwitch from '@/lib/NSwitch.vue';\r
\r
const open = ref(false);\r
<\/script>\r
\r
<template>\r
  <n-switch v-model="open" disabled></n-switch>\r
</template>`,e.__sourceCodeTitle="支持 disabled 属性"};typeof d=="function"&&d(w);const B=p("h2",null,"Switch 组件示例",-1),x=l({__name:"index",setup(e){return(t,s)=>(a(),m(v,null,[B,i(c,{component:V}),i(c,{component:w})],64))}});export{x as default};
