<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  height?: string
}>();

const style = computed(() => {
  return props.height ? { height: `${props.height}px` } : {};
});
</script>

<template>
  <footer :style="style" class="nuomi-footer">
    <slot></slot>
  </footer>
</template>

<style lang="scss">
.nuomi-footer {
  color: #333;
  height: 60px;
  background-color: #c6e2ff;
  display: flex; justify-content: center; align-items: center;
  padding: 0 20px;
}
</style>
