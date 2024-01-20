<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import ContainerDemo1 from './ContainerDemo1.vue';
import ContainerDemo2 from './ContainerDemo2.vue';
import ContainerDemo3 from './ContainerDemo3.vue';
</script>

<template>
  <h2>Container 组件示例</h2>
  <vue-demo :component="ContainerDemo1" />
  <vue-demo :component="ContainerDemo2" />
  <vue-demo :component="ContainerDemo3" />
</template>
