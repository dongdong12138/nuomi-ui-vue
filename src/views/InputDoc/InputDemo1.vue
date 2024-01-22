<demo>基础用法</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NInput from '@/lib/Input/NInput.vue';

const inputValue = ref('');
</script>

<template>
  <n-input v-model="inputValue"></n-input>
  <p>{{ inputValue }}</p>
</template>
