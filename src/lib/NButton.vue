<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  theme?: string
  size?: string
  level?: string
}>(), {
  theme: '',
  size: '',
  level: ''
})

const classes = computed(() => {
  const { theme, size, level } = props
  return {
    [`nuomi-theme-${theme}`]: theme,
    [`nuomi-size-${size}`]: size,
    [`nuomi-level-${level}`]: level,
  }
})
</script>

<template>
  <button :class="classes" class="nuomi-button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
$color: #333;
$h: 32px;
$border-color: #d9d9d9;
$radius: 4px;
$blue: #40a9ff;
$red: #f56c6c;

// 基础样式
.nuomi-button {
  box-sizing: border-box;
  color: $color;
  height: $h;
  background: #fff;
  border: 1px solid $border-color; border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(#000, 0.95);
  cursor: pointer; white-space: nowrap;
  display: inline-flex; justify-content: center; align-items: center;
  padding: 0 12px;
  & + & {
    margin-left: 8px;
  }
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.nuomi-button {
  // 大尺寸
  &.nuomi-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  // 小尺寸
  &.nuomi-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}

.nuomi-button {
  // 主要按钮
  &.nuomi-level-main {
    color: white;
    background: $blue;
    border-color: $blue;
    &:hover, &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  // 危险按钮
  &.nuomi-level-danger {
    color: white;
    background: $red;
    border-color: $red;
    &:hover, &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }
}

.nuomi-button {
  // 链接形式
  &.nuomi-theme-link {
    background: none;
    border-color: transparent;
    box-shadow: none;
    &:hover, &:focus {
      color: inherit;
      text-decoration: underline;
      background: none;
      border-color: transparent;
    }
    // 链接形式-主要按钮
    &.nuomi-level-main {
      color: $blue;
      &:hover, &:focus {
        color: darken($blue, 10%);
      }
    }
    // 链接形式-危险按钮
    &.nuomi-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }
  // 文本形式
  &.nuomi-theme-text {
    color: inherit;
    border-color: transparent;
    background: none;
    box-shadow: none;
    &:hover, &:focus {
      background: darken(white, 5%);
    }
    // 文本形式-主要按钮
    &.nuomi-level-main {
      color: $blue;
      &:hover, &:focus {
        color: darken($blue, 10%);
        border-color: transparent;
      }
    }
    // 文本形式-危险按钮
    &.nuomi-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
        border-color: transparent;
      }
    }
  }
}
</style>
