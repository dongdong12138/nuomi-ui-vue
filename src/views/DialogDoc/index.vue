<script setup lang="ts">
import { h } from 'vue'
import VueDemo from '@/components/VueDemo.vue';
import DialogDemo1 from './DialogDemo1.vue';
import DialogDemo2 from './DialogDemo2.vue';
import DialogDemo3 from './DialogDemo3.vue';
import NButton from '@/lib/NButton.vue';
import { openDialog } from '@/lib/openDialog';

const toggleDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: '你好',
    ok: () => {
      console.log('ok')
    },
    cancel: () => {
      console.log('cancel')
    },
    closeOnClickOverlay: true
  })
}
</script>

<template>
  <h2>Dialog 组件示例</h2>
  <vue-demo :component="DialogDemo1" />
  <vue-demo :component="DialogDemo2" />
  <vue-demo :component="DialogDemo3" />
  <n-button @click="toggleDialog">toggleDialog</n-button>
</template>
