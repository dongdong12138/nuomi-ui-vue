<script setup lang="ts">
import { ref } from 'vue';
import NDialog from '@/lib/NDialog.vue';
import NButton from '@/lib/NButton.vue';

const dialogVisible = ref(false);
const toggleDialog = () => {
  dialogVisible.value = !dialogVisible.value;
};
</script>

<template>
  <h2>Dialog 组件示例</h2>
  <n-button @click="toggleDialog">toggle Dialog</n-button>
  <n-dialog v-model:visible="dialogVisible">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello World</strong>
      <div>你好世界</div>
    </template>
  </n-dialog>
</template>

<style scoped lang="scss">

</style>
