<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  width?: string
}>();

const style = computed(() => {
  return props.width ? { width: `${props.width}px` } : {};
});
</script>

<template>
  <aside :style="style" class="nuomi-aside">
    <slot></slot>
  </aside>
</template>

<style lang="scss">
.nuomi-aside {
  width: 300px;
  background-color: #d9ecff;
  overflow: auto;
  display: flex; justify-content: center; align-items: center;
  flex-shrink: 0;
}
</style>
