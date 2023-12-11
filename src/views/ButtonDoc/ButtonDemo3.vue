<demo>支持 level 属性</demo>

<script setup lang="ts">
import NButton from '@/lib/NButton.vue';
</script>

<template>
  <div>
    <n-button level="main">主要按钮</n-button>
    <n-button>普通按钮</n-button>
    <n-button level="danger">危险按钮</n-button>
  </div>
  <div>
    <n-button theme="link" level="main">主要链接按钮</n-button>
    <n-button theme="link">普通链接按钮</n-button>
    <n-button theme="link" level="danger">危险链接按钮</n-button>
  </div>
  <div>
    <n-button theme="text" level="main">主要文字按钮</n-button>
    <n-button theme="text">普通文字按钮</n-button>
    <n-button theme="text" level="danger">危险文字按钮</n-button>
  </div>
</template>
