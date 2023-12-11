<demo>支持事件</demo>

<script setup lang="ts">
import NButton from '@/lib/NButton.vue';

const handleClick = () => {
  alert('点击事件');
};
</script>

<template>
  <n-button @click="handleClick">按钮</n-button>
</template>
