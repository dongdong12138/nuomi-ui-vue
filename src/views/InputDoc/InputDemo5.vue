<demo>多行输入框</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NInputArea from '@/lib/Input/NInputArea.vue';

const inputValue = ref('');

</script>

<template>
<!--  <n-input-password v-model="inputValue" placeholder="请输入密码" />-->
  <n-input-area />
  <p>{{ inputValue }}</p>
</template>
