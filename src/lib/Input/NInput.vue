<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  disabled?: boolean
}>(), {
  placeholder: '',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div :class="{'is-disabled': disabled}" class="nuomi-input">
    <input type="text" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :class="{'nuomi-input-disabled': disabled}" @input="onInput" />
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
  &.is-disabled {
    background-color: #f5f7fa;
  }
  > input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
  }
}

.nuomi-input-disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  &:hover {
    border-color: rgb(217, 217, 217);
  }
}
</style>
