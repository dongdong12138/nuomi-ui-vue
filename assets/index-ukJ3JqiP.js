import{V as g}from"./VueDemo-zsvikH8V.js";import{d as y,z as B,m as V,y as S,c as v,g as N,o as r,A as D,B as M,r as k,e as u,t as O,i as A,f as x,w as c,a as i,b as d,F as T}from"./index-9_xIDPeW.js";function U(o){return{all:o=o||new Map,on:function(a,e){var t=o.get(a);t?t.push(e):o.set(a,[e])},off:function(a,e){var t=o.get(a);t&&(e?t.splice(t.indexOf(e)>>>0,1):o.set(a,[]))},emit:function(a,e){var t=o.get(a);t&&t.slice().map(function(l){l(e)}),(t=o.get("*"))&&t.slice().map(function(l){l(a,e)})}}}const n=U(),F={class:"nuomi-collapse"},I=y({__name:"NCollapse",props:{activeKey:{},accordion:{type:Boolean,default:!1}},emits:["update:activeKey"],setup(o,{emit:a}){const e=o,t=a,l=Math.random();B("collapseId",l),V(()=>{C(e.activeKey),h(),p()}),S(()=>e.activeKey,s=>{C(s)});const C=s=>{n.emit(`changeCollapseKey${l}`,s)};function _(s){t("update:activeKey",s)}function h(){n.on(`openCollapse${l}`,s=>{let m=e.accordion?[s]:e.activeKey.concat(s);_(m)})}function p(){n.on(`closeCollapse${l}`,s=>{let m=JSON.parse(JSON.stringify(e.activeKey));const w=m.indexOf(s);m.splice(w,1),_(m)})}return(s,m)=>(r(),v("div",F,[N(s.$slots,"default")]))}}),J={class:"nuomi-collapseItem"},j={class:"nuomi-collapse-arrow"},z=u("use",{"xlink:href":"#icon-arrow-right"},null,-1),q=[z],G={key:0,class:"nuomi-collapse-content"},H={class:"nuomi-collapse-content-box"},f=y({__name:"NCollapseItem",props:{header:{},itemKey:{}},setup(o){const a=o;D(()=>{n.off(`closeCollapse${e}`),n.off(`openCollapse${e}`),n.off(`changeCollapseKey${e}`,_)});const e=M("collapseId"),t=k(!1),l=k();n.on(`changeCollapseKey${e}`,_);const C=()=>{n.emit(t.value?`closeCollapse${e}`:`openCollapse${e}`,a.itemKey),h()};function _(p){t.value=p.includes(a.itemKey),h()}function h(){l.value.style.transform=`rotate(${t.value?90:0}deg)`}return(p,s)=>(r(),v("div",J,[u("div",{class:"nuomi-collapse-header",onClick:C},[u("span",j,[(r(),v("svg",{ref_key:"svgElement",ref:l},q,512))]),u("span",null,O(p.header),1)]),t.value?(r(),v("div",G,[u("div",H,[N(p.$slots,"default")])])):A("",!0)]))}}),b=y({__name:"CollapseDemo1",setup(o){const a=k([1]);return(e,t)=>(r(),x(I,{"active-key":a.value,"onUpdate:activeKey":t[0]||(t[0]=l=>a.value=l)},{default:c(()=>[i(f,{"item-key":1,header:"标题1"},{default:c(()=>[d("内容1")]),_:1}),i(f,{"item-key":2,header:"标题2"},{default:c(()=>[d("内容2")]),_:1}),i(f,{"item-key":3,header:"标题3"},{default:c(()=>[d("内容3")]),_:1})]),_:1},8,["active-key"]))}}),K=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NCollapse from '@/lib/Collapse/NCollapse.vue';\r
import NCollapseItem from '@/lib/Collapse/NCollapseItem.vue';\r
\r
const activeKey = ref([1]);\r
<\/script>\r
\r
<template>\r
  <n-collapse v-model:active-key="activeKey">\r
    <n-collapse-item :item-key="1" header="标题1">内容1</n-collapse-item>\r
    <n-collapse-item :item-key="2" header="标题2">内容2</n-collapse-item>\r
    <n-collapse-item :item-key="3" header="标题3">内容3</n-collapse-item>\r
  </n-collapse>\r
</template>`,o.__sourceCodeTitle="支持全部展开"};typeof K=="function"&&K(b);const E=y({__name:"CollapseDemo2",setup(o){const a=k([1]);return(e,t)=>(r(),x(I,{"active-key":a.value,"onUpdate:activeKey":t[0]||(t[0]=l=>a.value=l),accordion:""},{default:c(()=>[i(f,{"item-key":1,header:"标题1"},{default:c(()=>[d("内容1")]),_:1}),i(f,{"item-key":2,header:"标题2"},{default:c(()=>[d("内容2")]),_:1}),i(f,{"item-key":3,header:"标题3"},{default:c(()=>[d("内容3")]),_:1})]),_:1},8,["active-key"]))}}),$=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NCollapse from '@/lib/Collapse/NCollapse.vue';\r
import NCollapseItem from '@/lib/Collapse/NCollapseItem.vue';\r
\r
const activeKey = ref([1]);\r
<\/script>\r
\r
<template>\r
  <n-collapse v-model:active-key="activeKey" accordion>\r
    <n-collapse-item :item-key="1" header="标题1">内容1</n-collapse-item>\r
    <n-collapse-item :item-key="2" header="标题2">内容2</n-collapse-item>\r
    <n-collapse-item :item-key="3" header="标题3">内容3</n-collapse-item>\r
  </n-collapse>\r
</template>`,o.__sourceCodeTitle="支持一次展开一个"};typeof $=="function"&&$(E);const L=u("h2",null,"Collapse 组件示例",-1),R=y({__name:"index",setup(o){return(a,e)=>(r(),v(T,null,[L,i(g,{component:b}),i(g,{component:E})],64))}});export{R as default};
