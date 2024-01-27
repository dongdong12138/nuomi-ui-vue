<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  autoSize?: { minRow: number, maxRow: number }
}>(), {
  placeholder: '请输入',
  autoSize: () => ({ minRow: 2, maxRow: 10 })
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const textArea = ref();
let { minRow, maxRow } = props.autoSize;

onMounted(() => {
  props.autoSize && nextTick(adjustTextareaSize);
});

watch(() => props.modelValue, () => {
  props.autoSize && nextTick(adjustTextareaSize);
});

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
const adjustTextareaSize = () => {
  let textarea = textArea.value;
  textarea.style.height = 'auto';
  if (maxRow) {
    textarea.style.maxHeight = maxRow * 24 + 'px';
  }
  const height = textarea.scrollHeight;
  if (height) {
    textarea.style.height = height + 'px';
    const rowsNum = Math.round(height / 24);
    textarea.style.overflowY = rowsNum > maxRow ? 'scroll' : 'hidden';
  }
};
</script>

<template>
  <textarea ref="textArea" :value="modelValue" :rows="minRow ?? 1" :placeholder="placeholder" class="nuomi-textarea" @input="onInput"></textarea>
</template>

<style lang="scss">
$hoverColor: #40a9ff;

.nuomi-textarea {
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  width: 100%;
  min-height: 30px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  vertical-align: bottom;
  resize: none;
  overflow: hidden;
  padding: 4px 11px;
  &:hover {
    border-color: $hoverColor;
  }
  &:focus {
    outline: $hoverColor;
    border-color: $hoverColor;
  }
}
</style>
