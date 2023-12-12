import{_ as c,V as b}from"./VueDemo-XAPICWUY.js";import{d as u,o as d,c as _,e,g as V,a as i,w as s,F as v,i as O,b as g,r as k}from"./index-7rD8b92H.js";const x={class:"nuomi-dialog-wrapper"},H={class:"nuomi-dialog"},D=u({__name:"NDialog",props:{visible:{type:Boolean,default:!1},ok:{},cancel:{},closeOnClickOverlay:{type:Boolean,default:!1}},emits:["update:visible"],setup(o,{emit:l}){const t=o,a=l,n=()=>{a("update:visible",!1)},r=()=>{t.ok&&t.ok(),n()},m=()=>{t.cancel&&t.cancel(),n()},p=()=>{t.closeOnClickOverlay&&n()};return(f,z)=>f.visible?(d(),_(v,{key:0},[e("div",{class:"nuomi-dialog-overlay",onClick:p}),e("div",x,[e("div",H,[e("header",null,[V(f.$slots,"title"),e("span",{class:"nuomi-dialog-close",onClick:n})]),e("main",null,[V(f.$slots,"content")]),e("footer",null,[i(c,{level:"main",onClick:r},{default:s(()=>[g("OK")]),_:1}),i(c,{onClick:m},{default:s(()=>[g("Cancel")]),_:1})])])])],64)):O("",!0)}}),W=e("strong",null,"标题",-1),T=e("strong",null,"Hello World",-1),w=e("div",null,"你好世界",-1),N=u({__name:"DialogDemo1",setup(o){const l=k(!1),t=()=>{l.value=!l.value};return(a,n)=>(d(),_(v,null,[i(c,{onClick:t},{default:s(()=>[g("toggle Dialog")]),_:1}),i(D,{visible:l.value,"onUpdate:visible":n[0]||(n[0]=r=>l.value=r)},{title:s(()=>[W]),content:s(()=>[T,w]),_:1},8,["visible"])],64))}}),h=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NDialog from '@/lib/NDialog.vue';\r
import NButton from '@/lib/NButton.vue';\r
\r
const dialogVisible = ref(false);\r
const toggleDialog = () => {\r
  dialogVisible.value = !dialogVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <n-button @click="toggleDialog">toggle Dialog</n-button>\r
  <n-dialog v-model:visible="dialogVisible">\r
    <template v-slot:title>\r
      <strong>标题</strong>\r
    </template>\r
    <template v-slot:content>\r
      <strong>Hello World</strong>\r
      <div>你好世界</div>\r
    </template>\r
  </n-dialog>\r
</template>`,o.__sourceCodeTitle="支持 visible 属性"};typeof h=="function"&&h(N);const U=e("strong",null,"标题",-1),F=e("strong",null,"Hello World",-1),E=e("div",null,"你好世界",-1),y=u({__name:"DialogDemo2",setup(o){const l=k(!1),t=()=>{l.value=!l.value},a=()=>{alert("ok")},n=()=>{alert("cancel")};return(r,m)=>(d(),_(v,null,[i(c,{onClick:t},{default:s(()=>[g("toggle Dialog")]),_:1}),i(D,{visible:l.value,"onUpdate:visible":m[0]||(m[0]=p=>l.value=p),ok:a,cancel:n},{title:s(()=>[U]),content:s(()=>[F,E]),_:1},8,["visible"])],64))}}),C=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NDialog from '@/lib/NDialog.vue';\r
import NButton from '@/lib/NButton.vue';\r
\r
const dialogVisible = ref(false);\r
const toggleDialog = () => {\r
  dialogVisible.value = !dialogVisible.value;\r
};\r
const handleOk = () => {\r
  alert('ok');\r
};\r
const handleCancel = () => {\r
  alert('cancel');\r
};\r
<\/script>\r
\r
<template>\r
  <n-button @click="toggleDialog">toggle Dialog</n-button>\r
  <n-dialog v-model:visible="dialogVisible" :ok="handleOk" :cancel="handleCancel">\r
    <template v-slot:title>\r
      <strong>标题</strong>\r
    </template>\r
    <template v-slot:content>\r
      <strong>Hello World</strong>\r
      <div>你好世界</div>\r
    </template>\r
  </n-dialog>\r
</template>`,o.__sourceCodeTitle="支持 ok、cancel 属性"};typeof C=="function"&&C(y);const K=e("strong",null,"标题",-1),S=e("strong",null,"Hello World",-1),j=e("div",null,"你好世界",-1),B=u({__name:"DialogDemo3",setup(o){const l=k(!1),t=()=>{l.value=!l.value};return(a,n)=>(d(),_(v,null,[i(c,{onClick:t},{default:s(()=>[g("toggle Dialog")]),_:1}),i(D,{visible:l.value,"onUpdate:visible":n[0]||(n[0]=r=>l.value=r),"close-on-click-overlay":""},{title:s(()=>[K]),content:s(()=>[S,j]),_:1},8,["visible"])],64))}}),$=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue';\r
import NDialog from '@/lib/NDialog.vue';\r
import NButton from '@/lib/NButton.vue';\r
\r
const dialogVisible = ref(false);\r
const toggleDialog = () => {\r
  dialogVisible.value = !dialogVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <n-button @click="toggleDialog">toggle Dialog</n-button>\r
  <n-dialog v-model:visible="dialogVisible" close-on-click-overlay>\r
    <template v-slot:title>\r
      <strong>标题</strong>\r
    </template>\r
    <template v-slot:content>\r
      <strong>Hello World</strong>\r
      <div>你好世界</div>\r
    </template>\r
  </n-dialog>\r
</template>`,o.__sourceCodeTitle="支持 closeOnClickOverlay 属性"};typeof $=="function"&&$(B);const q=e("h2",null,"Dialog 组件示例",-1),I=u({__name:"index",setup(o){return(l,t)=>(d(),_(v,null,[q,i(b,{component:N}),i(b,{component:y}),i(b,{component:B})],64))}});export{I as default};
