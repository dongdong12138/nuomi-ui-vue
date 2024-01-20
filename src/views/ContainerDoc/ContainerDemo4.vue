<demo>综合布局2</demo>

<script setup lang="ts">
import NContainer from '@/lib/Container/NContainer.vue';
import NHeader from '@/lib/Container/NHeader.vue';
import NMain from '@/lib/Container/NMain.vue';
import NFooter from '@/lib/Container/NFooter.vue';
import NAside from '@/lib/Container/NAside.vue';
</script>

<template>
  <n-container>
    <n-aside>Aside</n-aside>
    <n-container>
      <n-header>Header</n-header>
      <n-main>Main</n-main>
      <n-footer>Footer</n-footer>
    </n-container>
  </n-container>
</template>
