<script setup lang="ts">
import { ref } from 'vue'
import NTabs from '@/lib/NTabs.vue';
import NTab from '@/lib/NTab.vue';

const item = ref('导航1');
</script>

<template>
  <h2>Tabs 组件示例</h2>
<!--  <n-tabs>-->
<!--    <n-tab title="导航1">内容1</n-tab>-->
<!--    <n-tab title="导航2">内容2</n-tab>-->
<!--  </n-tabs>-->
  <n-tabs v-model:selected="item"></n-tabs>
</template>
