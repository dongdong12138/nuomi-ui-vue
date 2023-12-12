<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value): void
}>()

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button :class="{ checked: modelValue }" class="nuomi-switch" @click="toggle">
    <span></span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

// 基本样式
.nuomi-switch {
  display: inline-block;
  width: $h * 2;
  height: $h;
  background-color: #bfbfbf;
  border: none;
  border-radius: 11px;
  vertical-align: middle;
  line-height: $h;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.25s;
  > span {
    width: $h2;
    height: $h2;
    background-color: #fff;
    border-radius: 11px;
    border: none;
    position: absolute;
    left: 2px;
    top: 2px;
  }
  &:focus {
    box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);
    &:hover {
      box-shadow: none;
    }
  }
  &:active {
    box-shadow: none;
    > span {
      width: $h + 2px;
    }
  }
}

// 选中
.nuomi-switch.checked {
  background-color: #1890ff;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
    &:hover {
      box-shadow: none;
    }
  }
  &:active {
    box-shadow: none;
    > span {
      width: $h + 2px;
      margin-left: -6px;
    }
  }
}
</style>
