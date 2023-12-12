<script setup lang="ts">
import { ref } from 'vue';
import NDialog from '@/lib/NDialog.vue';
import NButton from '@/lib/NButton.vue';

const dialogVisible1 = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const toggleDialog1 = () => {
  dialogVisible1.value = !dialogVisible1.value;
};
const toggleDialog2 = () => {
  dialogVisible2.value = !dialogVisible2.value;
};
const toggleDialog3 = () => {
  dialogVisible3.value = !dialogVisible3.value;
};
const handleOk = () => {
  console.log('ok')
}
const handleCancel = () => {
  console.log('cancel')
  return false
}
</script>

<template>
  <h2>Dialog 组件示例</h2>

  <div>支持 visible 属性</div>
  <n-button @click="toggleDialog1">toggle Dialog</n-button>
  <n-dialog v-model:visible="dialogVisible1">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello World</strong>
      <div>你好世界</div>
    </template>
  </n-dialog>

  <div>支持 ok、cancel 属性</div>
  <n-button @click="toggleDialog2">toggle Dialog</n-button>
  <n-dialog v-model:visible="dialogVisible2" :ok="handleOk" :cancel="handleCancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello World</strong>
      <div>你好世界</div>
    </template>
  </n-dialog>

  <div>支持 closeOnClickOverlay 属性</div>
  <n-button @click="toggleDialog3">toggle Dialog</n-button>
  <n-dialog v-model:visible="dialogVisible3" close-on-click-overlay>
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
