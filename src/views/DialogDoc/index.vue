<script setup lang="ts">
import NDialog from '@/lib/NDialog.vue';
</script>

<template>
  <h2>Dialog 组件示例</h2>
  <n-dialog>
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
