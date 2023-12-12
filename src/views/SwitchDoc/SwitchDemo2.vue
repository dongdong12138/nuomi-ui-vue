<demo>支持 disabled 属性</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NSwitch from '@/lib/NSwitch.vue';

const open = ref(false);
</script>

<template>
  <n-switch v-model="open" disabled></n-switch>
</template>
