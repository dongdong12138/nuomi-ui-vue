<script setup lang="ts">
import VueDemo from '@/components/VueDemo.vue';
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
</script>

<template>
  <h2>Switch 组件示例</h2>
  <vue-demo :component="SwitchDemo1" />
  <vue-demo :component="SwitchDemo2" />
</template>
