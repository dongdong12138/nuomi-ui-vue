<demo>综合布局1</demo>

<script setup lang="ts">
import NContainer from '@/lib/Container/NContainer.vue';
import NHeader from '@/lib/Container/NHeader.vue';
import NMain from '@/lib/Container/NMain.vue';
import NFooter from '@/lib/Container/NFooter.vue';
import NAside from '@/lib/Container/NAside.vue';
</script>

<template>
  <n-container>
    <n-header>Header</n-header>
    <n-container>
      <n-aside width="200">Aside</n-aside>
      <n-container>
        <n-main>Main</n-main>
        <n-footer>Footer</n-footer>
      </n-container>
    </n-container>
  </n-container>
</template>
