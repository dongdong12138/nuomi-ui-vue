<script setup lang="ts">
import NButton from '@/lib/NButton.vue';
</script>

<template>
  <h3>Button 组件示例</h3>

  <h4>按钮的三种形式</h4>
  <n-button>按钮</n-button>
  <n-button theme="link">链接按钮</n-button>
  <n-button theme="text">文本按钮</n-button>

  <h4>支持 size 属性</h4>
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

  <h4>支持 level 属性</h4>
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

  <h4>支持 disabled 属性</h4>
  <n-button disabled>禁用按钮</n-button>
  <n-button theme="link" disabled>禁用链接按钮</n-button>
  <n-button theme="text" disabled>禁用文本按钮</n-button>

  <h4>支持 loading 属性</h4>
  <n-button loading>加载中</n-button>
</template>

<style scoped lang="scss">
h4 {
  margin: 40px 0 10px;
}
</style>
