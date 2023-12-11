<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import ButtonDemo1 from './ButtonDemo1.vue';
import ButtonDemo2 from './ButtonDemo2.vue';
import ButtonDemo3 from './ButtonDemo3.vue';
import ButtonDemo4 from './ButtonDemo4.vue';
import ButtonDemo5 from './ButtonDemo5.vue';
import ButtonDemo6 from './ButtonDemo6.vue';
</script>

<template>
  <h2>Button 组件示例</h2>
  <vue-demo :component="ButtonDemo1" />
  <vue-demo :component="ButtonDemo2" />
  <vue-demo :component="ButtonDemo3" />
  <vue-demo :component="ButtonDemo4" />
  <vue-demo :component="ButtonDemo5" />
  <vue-demo :component="ButtonDemo6" />
</template>
