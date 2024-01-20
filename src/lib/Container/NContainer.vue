<script setup lang="ts">
import { computed, useSlots } from 'vue';
import NHeader from './NHeader.vue';
import NFooter from './NFooter.vue';

const props = defineProps<{
  direction?: 'vertical' | 'horizontal'
}>();

const isVertical = computed(() => {
  const directionMap = { 'vertical': true, 'horizontal': false };
  if (props.direction) return directionMap[props.direction];
  return useSlots().default?.()?.some(node => {
    return node.type === NHeader || node.type === NFooter;
  });
});
</script>

<template>
  <section :class="{'is-vertical': isVertical}" class="nuomi-container">
    <slot></slot>
  </section>
</template>

<style lang="scss">
.nuomi-container {
  display: flex;
  flex-direction: row;
  &.is-vertical {
    flex-direction: column;
  }
}
</style>
