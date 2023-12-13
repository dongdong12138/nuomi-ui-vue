import{_ as u,V as v}from"./VueDemo-mpdMXPxU.js";import{d as p,f as O,e as l,g as h,a as i,w as r,T as U,i as w,o as m,b as d,r as D,c as f,F as b,j as E,h as B}from"./index-ee7QsQGF.js";const F={class:"nuomi-dialog-wrapper"},j={class:"nuomi-dialog"},k=p({__name:"NDialog",props:{visible:{type:Boolean,default:!1},ok:{},cancel:{},closeOnClickOverlay:{type:Boolean,default:!1}},emits:["update:visible"],setup(o,{emit:e}){const n=o,s=e,t=()=>{s("update:visible",!1)},a=()=>{n.ok&&n.ok(),t()},c=()=>{n.cancel&&n.cancel(),t()},_=()=>{n.closeOnClickOverlay&&t()};return(g,C)=>g.visible?(m(),O(U,{key:0,to:"body"},[l("div",{class:"nuomi-dialog-overlay",onClick:_}),l("div",F,[l("div",j,[l("header",null,[h(g.$slots,"title"),l("span",{class:"nuomi-dialog-close",onClick:t})]),l("main",null,[h(g.$slots,"content")]),l("footer",null,[i(u,{level:"main",onClick:a},{default:r(()=>[d("OK")]),_:1}),i(u,{onClick:c},{default:r(()=>[d("Cancel")]),_:1})])])])])):w("",!0)}}),A=l("strong",null,"标题",-1),K=l("strong",null,"Hello World",-1),S=l("div",null,"你好世界",-1),x=p({__name:"DialogDemo1",setup(o){const e=D(!1),n=()=>{e.value=!e.value};return(s,t)=>(m(),f(b,null,[i(u,{onClick:n},{default:r(()=>[d("toggle Dialog")]),_:1}),i(k,{visible:e.value,"onUpdate:visible":t[0]||(t[0]=a=>e.value=a)},{title:r(()=>[A]),content:r(()=>[K,S]),_:1},8,["visible"])],64))}}),V=o=>{o.__sourceCode=`<script setup lang="ts">\r
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
</template>`,o.__sourceCodeTitle="支持 visible 属性"};typeof V=="function"&&V(x);const q=l("strong",null,"标题",-1),z=l("strong",null,"Hello World",-1),G=l("div",null,"你好世界",-1),T=p({__name:"DialogDemo2",setup(o){const e=D(!1),n=()=>{e.value=!e.value},s=()=>{alert("ok")},t=()=>{alert("cancel")};return(a,c)=>(m(),f(b,null,[i(u,{onClick:n},{default:r(()=>[d("toggle Dialog")]),_:1}),i(k,{visible:e.value,"onUpdate:visible":c[0]||(c[0]=_=>e.value=_),ok:s,cancel:t},{title:r(()=>[q]),content:r(()=>[z,G]),_:1},8,["visible"])],64))}}),$=o=>{o.__sourceCode=`<script setup lang="ts">\r
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
</template>`,o.__sourceCodeTitle="支持 ok、cancel 属性"};typeof $=="function"&&$(T);const I=l("strong",null,"标题",-1),J=l("strong",null,"Hello World",-1),L=l("div",null,"你好世界",-1),H=p({__name:"DialogDemo3",setup(o){const e=D(!1),n=()=>{e.value=!e.value};return(s,t)=>(m(),f(b,null,[i(u,{onClick:n},{default:r(()=>[d("toggle Dialog")]),_:1}),i(k,{visible:e.value,"onUpdate:visible":t[0]||(t[0]=a=>e.value=a),"close-on-click-overlay":""},{title:r(()=>[I]),content:r(()=>[J,L]),_:1},8,["visible"])],64))}}),y=o=>{o.__sourceCode=`<script setup lang="ts">\r
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
</template>`,o.__sourceCodeTitle="支持 closeOnClickOverlay 属性"};typeof y=="function"&&y(H);const M=o=>{const{title:e,content:n,ok:s,cancel:t,closeOnClickOverlay:a}=o,c=document.createElement("div");document.body.appendChild(c);const _=()=>{g.unmount(),c.remove()},g=E({render(){return B(k,{visible:!0,"onUpdate:visible":C=>{C===!1&&_()},ok:s,cancel:t,closeOnClickOverlay:a},{title:e,content:n})}});g.mount(c)},W=p({__name:"DialogDemo4",setup(o){const e=()=>{M({title:B("strong",{},"标题"),content:"你好",ok:()=>{console.log("ok")},cancel:()=>{console.log("cancel")},closeOnClickOverlay:!0})};return(n,s)=>(m(),O(u,{onClick:e},{default:r(()=>[d("toggleDialog")]),_:1}))}}),N=o=>{o.__sourceCode=`<script setup lang="ts">\r
import { h } from 'vue';\r
import { openDialog } from '@/lib/openDialog';\r
import NButton from '@/lib/NButton.vue';\r
\r
const toggleDialog = () => {\r
  openDialog({\r
    title: h('strong', {}, '标题'),\r
    content: '你好',\r
    ok: () => {\r
      console.log('ok')\r
    },\r
    cancel: () => {\r
      console.log('cancel')\r
    },\r
    closeOnClickOverlay: true\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <n-button @click="toggleDialog">toggleDialog</n-button>\r
</template>`,o.__sourceCodeTitle="提供 openDialog 方法"};typeof N=="function"&&N(W);const P=l("h2",null,"Dialog 组件示例",-1),X=p({__name:"index",setup(o){return(e,n)=>(m(),f(b,null,[P,i(v,{component:x}),i(v,{component:T}),i(v,{component:H}),i(v,{component:W})],64))}});export{X as default};
