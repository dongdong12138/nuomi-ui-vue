import{V as f}from"./VueDemo-zsvikH8V.js";import{d as i,c as p,e as r,n as w,o as s,r as c,a,t as V,F as m,m as A,x,y as U,u as B}from"./index-9_xIDPeW.js";const P=["value","placeholder","disabled"],b=i({__name:"NInput",props:{modelValue:{},placeholder:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const u=e,l=n=>{u("update:modelValue",n.target.value)};return(n,v)=>(s(),p("div",{class:w([{"is-disabled":n.disabled},"nuomi-input"])},[r("input",{type:"text",value:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,class:w({"nuomi-input-disabled":n.disabled}),onInput:l},null,42,P)],2))}}),C=i({__name:"InputDemo1",setup(t){const e=c("");return(u,l)=>(s(),p(m,null,[a(b,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n)},null,8,["modelValue"]),r("p",null,V(e.value),1)],64))}}),y=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NInput from '@/lib/Input/NInput.vue';\r
\r
const inputValue = ref('');\r
<\/script>\r
\r
<template>\r
  <n-input v-model="inputValue"></n-input>\r
  <p>{{ inputValue }}</p>\r
</template>`,t.__sourceCodeTitle="基础用法"};typeof y=="function"&&y(C);const z=i({__name:"InputDemo2",setup(t){const e=c("");return(u,l)=>(s(),p(m,null,[a(b,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),placeholder:"请输入"},null,8,["modelValue"]),r("p",null,V(e.value),1)],64))}}),g=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NInput from '@/lib/Input/NInput.vue';\r
\r
const inputValue = ref('');\r
<\/script>\r
\r
<template>\r
  <n-input v-model="inputValue" placeholder="请输入"></n-input>\r
  <p>{{ inputValue }}</p>\r
</template>`,t.__sourceCodeTitle="支持 placeholder"};typeof g=="function"&&g(z);const R=i({__name:"InputDemo3",setup(t){const e=c("");return(u,l)=>(s(),p(m,null,[a(b,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),placeholder:"请输入",disabled:""},null,8,["modelValue"]),r("p",null,V(e.value),1)],64))}}),N=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NInput from '@/lib/Input/NInput.vue';\r
\r
const inputValue = ref('');\r
<\/script>\r
\r
<template>\r
  <n-input v-model="inputValue" placeholder="请输入" disabled></n-input>\r
  <p>{{ inputValue }}</p>\r
</template>`,t.__sourceCodeTitle="支持 disabled"};typeof N=="function"&&N(R);const F={class:"nuomi-input-wrapper"},H=["type","value","placeholder"],M={class:"icon"},j=["xlink:href"],E=i({__name:"NInputPassword",props:{modelValue:{},placeholder:{default:"请输入"}},emits:["update:modelValue"],setup(t,{emit:e}){const u=e,l=c(!1),n=c("password"),v=d=>{u("update:modelValue",d.target.value)},_=()=>{l.value=!l.value,n.value=n.value==="password"?"text":"password"};return(d,I)=>(s(),p("div",F,[r("input",{type:n.value,value:d.modelValue,placeholder:d.placeholder,onInput:v},null,40,H),r("span",{class:"svgContainer",onClick:_},[(s(),p("svg",M,[r("use",{"xlink:href":l.value?"#icon-eye":"#icon-eye-close"},null,8,j)]))])]))}}),T=i({__name:"InputDemo4",setup(t){const e=c("");return(u,l)=>(s(),p(m,null,[a(E,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),placeholder:"请输入密码"},null,8,["modelValue"]),r("p",null,V(e.value),1)],64))}}),$=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NInputPassword from '@/lib/Input/NInputPassword.vue';\r
\r
const inputValue = ref('');\r
\r
<\/script>\r
\r
<template>\r
  <n-input-password v-model="inputValue" placeholder="请输入密码" />\r
  <p>{{ inputValue }}</p>\r
</template>`,t.__sourceCodeTitle="密码框"};typeof $=="function"&&$(T);const Y=["value","rows","placeholder"],q=i({__name:"NInputArea",props:{modelValue:{},placeholder:{default:"请输入"},autoSize:{default:()=>({minRow:2,maxRow:10})}},emits:["update:modelValue"],setup(t,{emit:e}){const u=t,l=e,n=c();let{minRow:v,maxRow:_}=u.autoSize;A(()=>{u.autoSize&&x(I)}),U(()=>u.modelValue,()=>{u.autoSize&&x(I)});const d=o=>{l("update:modelValue",o.target.value)},I=()=>{let o=n.value;o.style.height="auto",_&&(o.style.maxHeight=_*24+"px");const h=o.scrollHeight;if(h){o.style.height=h+"px";const S=Math.round(h/24);o.style.overflowY=S>_?"scroll":"hidden"}};return(o,h)=>(s(),p("textarea",{ref_key:"textArea",ref:n,value:o.modelValue,rows:B(v)??1,placeholder:o.placeholder,class:"nuomi-textarea",onInput:d},null,40,Y))}}),D=i({__name:"InputDemo5",setup(t){const e=c("");return(u,l)=>(s(),p(m,null,[a(q,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),placeholder:"请输入","auto-size":{minRow:2,maxRow:8}},null,8,["modelValue"]),r("p",null,V(e.value),1)],64))}}),k=t=>{t.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NInputArea from '@/lib/Input/NInputArea.vue';\r
\r
const inputValue = ref('');\r
<\/script>\r
\r
<template>\r
  <n-input-area v-model="inputValue" placeholder="请输入" :auto-size="{ minRow: 2, maxRow: 8 }" />\r
  <p>{{ inputValue }}</p>\r
</template>`,t.__sourceCodeTitle="多行输入框"};typeof k=="function"&&k(D);const G=r("h2",null,"Input 组件示例",-1),L=i({__name:"index",setup(t){return(e,u)=>(s(),p(m,null,[G,a(f,{component:C}),a(f,{component:z}),a(f,{component:R}),a(f,{component:T}),a(f,{component:D})],64))}});export{L as default};
