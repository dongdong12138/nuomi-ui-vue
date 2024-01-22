<demo>支持 placeholder</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NInput from '@/lib/Input/NInput.vue';

const inputValue = ref('');
</script>

<template>
  <n-input v-model="inputValue" placeholder="请输入"></n-input>
  <p>{{ inputValue }}</p>
</template>
