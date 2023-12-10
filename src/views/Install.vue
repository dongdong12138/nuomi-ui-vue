<script setup lang="ts">
import md from '@/markdown/install.md';
</script>

<template>
  <article v-html="(md as any).render().props.innerHTML" class="markdown-body"></article>
</template>

<style scoped lang="scss">

</style>
