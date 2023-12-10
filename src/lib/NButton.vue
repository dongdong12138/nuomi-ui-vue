<script setup lang="ts">

</script>

<template>
  <button class="nuomi-button">按钮</button>
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
</style>
