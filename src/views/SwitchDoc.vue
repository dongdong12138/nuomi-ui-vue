<script setup lang="ts">
import { ref } from 'vue';
import NSwitch from '@/lib/NSwitch.vue';

const open = ref(false);
</script>

<template>
  <h2>Switch 组件示例</h2>
  <n-switch v-model="open"></n-switch>
  <span>{{ open ? '开' : '关' }}</span>
</template>

<style scoped lang="scss">

</style>
