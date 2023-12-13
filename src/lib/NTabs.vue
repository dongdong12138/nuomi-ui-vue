<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

const props = defineProps<{
  selected: string
}>()

const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>()

const indicator = ref()
const selectedItem = ref()
const container = ref()

onMounted(() => {
  watchEffect(() => {
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + 'px';
    const { left: left1 } = container.value.getBoundingClientRect();
    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;
    indicator.value.style.left = left + 'px';
  })
})

const titles = ['导航1', '导航2']
const selectNavItem = (title) => {
  emit('update:selected', title)
}
</script>

<template>

  <!-- 导航 -->
  <div ref="container" class="nuomi-tabs-nav">
    <div
      v-for="title in titles" :key="title"
      :ref="el => {
        if (selected === title) selectedItem = el
      }"
      :class="{ selected: title === selected }" class="nuomi-tabs-nav-item"
      @click="selectNavItem(title)"
    >{{ title }}</div>
    <div ref="indicator" class="nuomi-tabs-nav-indicator"></div>
  </div>
</template>

<style lang="scss">
$color: #333;
$border-color: #d9d9d9;
$blue: #40a9ff;

.nuomi-tabs-nav {
  color: $color;
  border-bottom: 1px solid $border-color;
  display: flex;
  position: relative;
  &-item {
    cursor: pointer;
    padding: 8px 0; margin: 0 16px;
    &:first-child {
      margin-left: 0;
    }
    &.selected {
      color: $blue;
    }
  }
  &-indicator {
    width: 100px; height: 3px;
    background: $blue;
    position: absolute; left: 0; bottom: -1px;
    transition: all 0.25s;
  }
}
</style>
