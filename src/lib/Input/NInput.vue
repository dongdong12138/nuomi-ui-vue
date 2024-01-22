<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="nuomi-input">
    <input type="text" :value="modelValue" @input="onInput" />
  </div>
</template>

<style lang="scss">
.nuomi-input {
  color: #000000d9;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 1px 11px;
  > input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
  }
}
</style>
