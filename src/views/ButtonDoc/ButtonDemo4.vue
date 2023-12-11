<demo>支持 disabled 属性</demo>

<script setup lang="ts">
import NButton from '@/lib/NButton.vue';
</script>

<template>
  <n-button disabled>禁用按钮</n-button>
  <n-button theme="link" disabled>禁用链接按钮</n-button>
  <n-button theme="text" disabled>禁用文本按钮</n-button>
</template>
