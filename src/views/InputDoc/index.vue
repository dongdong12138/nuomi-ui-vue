<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import InputDemo1 from './InputDemo1.vue';
import InputDemo2 from './InputDemo2.vue';
import InputDemo3 from './InputDemo3.vue';
import InputDemo4 from './InputDemo4.vue';
import InputDemo5 from './InputDemo5.vue';
</script>

<template>
  <h2>Input 组件示例</h2>
  <vue-demo :component="InputDemo1"></vue-demo>
  <vue-demo :component="InputDemo2"></vue-demo>
  <vue-demo :component="InputDemo3"></vue-demo>
  <vue-demo :component="InputDemo4"></vue-demo>
  <vue-demo :component="InputDemo5"></vue-demo>
</template>
