<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
