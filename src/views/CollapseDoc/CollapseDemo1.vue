<demo>支持全部展开</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NCollapse from '@/lib/Collapse/NCollapse.vue';
import NCollapseItem from '@/lib/Collapse/NCollapseItem.vue';

const activeKey = ref([1]);
</script>

<template>
  <n-collapse v-model:active-key="activeKey">
    <n-collapse-item :item-key="1" header="标题1">内容1</n-collapse-item>
    <n-collapse-item :item-key="2" header="标题2">内容2</n-collapse-item>
    <n-collapse-item :item-key="3" header="标题3">内容3</n-collapse-item>
  </n-collapse>
</template>
