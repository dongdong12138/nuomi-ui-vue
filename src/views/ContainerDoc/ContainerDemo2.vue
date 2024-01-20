<demo>左右布局</demo>

<script setup lang="ts">
import NContainer from '@/lib/Container/NContainer.vue';
import NAside from '@/lib/Container/NAside.vue';
import NMain from '@/lib/Container/NMain.vue';
</script>

<template>
  <n-container direction="horizontal">
    <n-aside>Aside</n-aside>
    <n-main>Main</n-main>
  </n-container>
</template>
