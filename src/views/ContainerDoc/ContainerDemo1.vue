<demo>基础布局</demo>

<script setup lang="ts">
import NContainer from '@/lib/Container/NContainer.vue';
import NHeader from '@/lib/Container/NHeader.vue';
import NMain from '@/lib/Container/NMain.vue';
import NFooter from '@/lib/Container/NFooter.vue';
</script>

<template>
  <n-container>
    <n-header>Header</n-header>
    <n-main>Main</n-main>
    <n-footer>Footer</n-footer>
  </n-container>
</template>
