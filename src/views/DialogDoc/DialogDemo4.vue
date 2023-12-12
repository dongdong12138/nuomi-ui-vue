<demo>提供 openDialog 方法</demo>

<script setup lang="ts">
import { h } from 'vue';
import { openDialog } from '@/lib/openDialog';
import NButton from '@/lib/NButton.vue';

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
  <n-button @click="toggleDialog">toggleDialog</n-button>
</template>
