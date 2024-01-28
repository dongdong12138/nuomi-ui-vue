<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import CollapseDemo1 from './CollapseDemo1.vue';
import CollapseDemo2 from './CollapseDemo2.vue';
</script>

<template>
  <h2>Collapse 组件示例</h2>
  <vue-demo :component="CollapseDemo1" />
  <vue-demo :component="CollapseDemo2" />
</template>
