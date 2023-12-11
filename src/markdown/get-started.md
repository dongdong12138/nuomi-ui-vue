# 开始使用

请先[安装](#/doc/install)本组件库。

在 main.ts 中引入组件库样式：

```ts
import 'nuomi-ui-vue/dist/lib/nuomi.css';
```

引入组件（以 `Button` 组件为例）：

```html
<script setup lang="ts">
import { NButton } from 'nuomi-ui-vue';
</script>

<template>
  <n-button>按钮</n-button>
</template>
```
