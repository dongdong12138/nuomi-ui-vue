<script setup lang="ts">
import { ref } from 'vue';
import NSwitch from '@/lib/NSwitch.vue';

const open = ref(false);
const open1 = ref(false);
</script>

<template>
  <h2>Switch 组件示例</h2>
  <div>
    <n-switch v-model="open"></n-switch>
  </div>
  <div>
    <n-switch v-model="open1" disabled></n-switch>
  </div>
</template>

<style scoped lang="scss">

</style>
