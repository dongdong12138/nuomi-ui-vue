<script setup lang="ts">
import NButton from '@/lib/NButton.vue';
</script>

<template>
  <h3>Button 组件示例</h3>

  <h4>常规使用</h4>
  <n-button>按钮</n-button>
  <n-button theme="link">按钮</n-button>
  <n-button theme="text">按钮</n-button>

  <h4>支持 size 属性</h4>
  <div>
    <n-button size="big">big</n-button>
    <n-button>normal</n-button>
    <n-button size="small">small</n-button>
  </div>
  <div>
    <n-button theme="link" size="big">big</n-button>
    <n-button theme="link">normal</n-button>
    <n-button theme="link" size="small">small</n-button>
  </div>
  <div>
    <n-button theme="text" size="big">big</n-button>
    <n-button theme="text">normal</n-button>
    <n-button theme="text" size="small">small</n-button>
  </div>
</template>

<style scoped lang="scss">

</style>
