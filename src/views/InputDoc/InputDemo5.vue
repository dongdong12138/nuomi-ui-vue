<demo>多行输入框</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NInputArea from '@/lib/Input/NInputArea.vue';

const inputValue = ref('');
</script>

<template>
  <n-input-area v-model="inputValue" placeholder="请输入" :auto-size="{ minRow: 2, maxRow: 8 }" />
  <p>{{ inputValue }}</p>
</template>
