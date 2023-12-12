<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import DialogDemo1 from './DialogDemo1.vue';
import DialogDemo2 from './DialogDemo2.vue';
import DialogDemo3 from './DialogDemo3.vue';
</script>

<template>
  <h2>Dialog 组件示例</h2>
  <vue-demo :component="DialogDemo1" />
  <vue-demo :component="DialogDemo2" />
  <vue-demo :component="DialogDemo3" />
</template>
