<demo>支持 size 属性</demo>

<script setup lang="ts">
import NButton from '@/lib/NButton.vue';
</script>

<template>
  <div>
    <n-button size="big">按钮</n-button>
    <n-button>按钮</n-button>
    <n-button size="small">按钮</n-button>
  </div>
  <div>
    <n-button theme="link" size="big">链接按钮</n-button>
    <n-button theme="link">链接按钮</n-button>
    <n-button theme="link" size="small">链接按钮</n-button>
  </div>
  <div>
    <n-button theme="text" size="big">文本按钮</n-button>
    <n-button theme="text">文本按钮</n-button>
    <n-button theme="text" size="small">文本按钮</n-button>
  </div>
</template>
