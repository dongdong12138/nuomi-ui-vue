<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
}>(), {
  placeholder: '请输入'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const pwdVisible = ref(false);
const inputType = ref('password');

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
const changeVisible = () => {
  pwdVisible.value = !pwdVisible.value;
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};
</script>

<template>
  <div class="nuomi-input-wrapper">
    <input :type="inputType" :value="modelValue" :placeholder="placeholder" @input="onInput">
    <span class="svgContainer" @click="changeVisible">
      <svg class="icon">
        <use :xlink:href="pwdVisible ? '#icon-eye' : '#icon-eye-close'"></use>
      </svg>
    </span>
  </div>
</template>

<style lang="scss">
$hoverColor: #40a9ff;

.nuomi-input-wrapper {
  color: #000000d9; font-size: 14px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d9d9d9; border-radius: 2px;
  display: inline-flex; align-items: center;
  padding: 0 11px;
  &:hover {
    border-color: $hoverColor;
  }
  &:focus-within {
    outline: $hoverColor;
    border-color: $hoverColor;
  }
  > input {
    width: 100%; height: 30px;
    border: none; outline: none;
  }
  .svgContainer {
    cursor: pointer;
  }
}
</style>
