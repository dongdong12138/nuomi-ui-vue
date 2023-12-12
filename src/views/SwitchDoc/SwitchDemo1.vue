<demo>基本使用</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NSwitch from '@/lib/NSwitch.vue';

const open = ref(false);
</script>

<template>
  <n-switch v-model="open"></n-switch>
</template>
