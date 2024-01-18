<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  height?: string
}>()

const style = computed(() => {
  return props.height ? { height: `${props.height}px` } : {}
})
</script>

<template>
  <header :style="style" class="nuomi-header">
    <slot></slot>
  </header>
</template>

<style lang="scss">
.nuomi-header {
  height: 60px;
  background-color: #c6e2ff;
  display: flex; justify-content: center; align-items: center;
  padding: 0 20px;
}
</style>
