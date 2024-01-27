<demo>密码框</demo>

<script setup lang="ts">
import { ref } from 'vue';
import NInputPassword from '@/lib/Input/NInputPassword.vue';

const inputValue = ref('');

</script>

<template>
  <n-input-password v-model="inputValue" placeholder="请输入密码" />
  <p>{{ inputValue }}</p>
</template>
