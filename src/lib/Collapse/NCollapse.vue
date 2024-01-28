<script setup lang="ts">
import { onMounted, provide, watch } from 'vue';
import Mitt from '@/store/mitt';

const props = withDefaults(defineProps<{
  activeKey: Array
  accordion?: boolean
}>(), {
  accordion: false
});

const emit = defineEmits<{
  (e: 'update:activeKey', value: string): void
}>();

const collapseId = Math.random();
provide('collapseId', collapseId);

onMounted(() => {
  changeCollapseEmit(props.activeKey);
  openCollapseEmit();
  closeCollapseEmit();
});

watch(() => props.activeKey, (val) => {
  changeCollapseEmit(val);
});

const changeCollapseEmit = (val) => {
  Mitt.emit(`changeCollapseKey${collapseId}`, val);
};

function updateActiveKey(value) {
  emit('update:activeKey', value);
}
function openCollapseEmit() {
  Mitt.on(`openCollapse${collapseId}`, val => {
    let selectedItem = props.accordion ? [val] : props.activeKey.concat(val);
    updateActiveKey(selectedItem);
  });
}
function closeCollapseEmit() {
  Mitt.on(`closeCollapse${collapseId}`, val => {
    let selectedItem = JSON.parse(JSON.stringify(props.activeKey));
    const index = selectedItem.indexOf(val);
    selectedItem.splice(index, 1);
    updateActiveKey(selectedItem);
  });
}
</script>

<template>
  <div class="nuomi-collapse">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.nuomi-collapse {
  color: #000000d9; font-size: 14px;
  background-color: #fafafa;
  border: 1px solid #d9d9d9; border-bottom: 0; border-radius: 2px;
}
</style>
