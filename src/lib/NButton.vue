<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  theme?: string
  size?: string
}>(), {
  theme: '',
  size: 'normal'
})

const classes = computed(() => {
  const { theme, size } = props
  return {
    [`nuomi-theme-${theme}`]: theme,
    [`nuomi-size-${size}`]: size,
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

// 链接形式
.nuomi-button.nuomi-theme-link {
  color: $blue;
  border-color: transparent;
  box-shadow: none;
  &:hover, &:focus {
    color: lighten($blue, 20%);
    text-decoration: underline;
  }
}

// 文本形式
.nuomi-button.nuomi-theme-text {
  color: inherit;
  border-color: transparent;
  box-shadow: none;
  &:hover, &:focus {
    background: darken(white, 5%);
  }
}

// 大尺寸
.nuomi-button.nuomi-size-big {
  font-size: 24px;
  height: 48px;
  padding: 0 16px;
}

// 小尺寸
.nuomi-button.nuomi-size-small {
  font-size: 12px;
  height: 20px;
  padding: 0 4px;
}
</style>
