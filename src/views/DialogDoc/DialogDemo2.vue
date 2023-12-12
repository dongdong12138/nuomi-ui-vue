<demo>支持 ok、cancel 属性</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NDialog from '@/lib/NDialog.vue';
import NButton from '@/lib/NButton.vue';

const dialogVisible = ref(false);
const toggleDialog = () => {
  dialogVisible.value = !dialogVisible.value;
};
const handleOk = () => {
  alert('ok');
};
const handleCancel = () => {
  alert('cancel');
};
</script>

<template>
  <n-button @click="toggleDialog">toggle Dialog</n-button>
  <n-dialog v-model:visible="dialogVisible" :ok="handleOk" :cancel="handleCancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello World</strong>
      <div>你好世界</div>
    </template>
  </n-dialog>
</template>
