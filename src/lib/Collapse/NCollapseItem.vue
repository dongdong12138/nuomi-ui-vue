<script setup lang="ts">
import { ref, inject, onUnmounted } from 'vue';
import Mitt from '@/store/mitt';

const props = defineProps<{
  header: string
  itemKey: number
}>();

onUnmounted(() => {
  Mitt.off(`closeCollapse${collapseId}`);
  Mitt.off(`openCollapse${collapseId}`);
  Mitt.off(`changeCollapseKey${collapseId}`, listenCollapseKey);
});

const collapseId = inject('collapseId');
const isExtend = ref(false);
const svgElement = ref<HTMLElement>();

Mitt.on(`changeCollapseKey${collapseId}`, listenCollapseKey);

const toggle = () => {
  Mitt.emit(isExtend.value ? `closeCollapse${collapseId}` : `openCollapse${collapseId}`, props.itemKey);
  setSvgAngle();
};

function listenCollapseKey(val) {
  isExtend.value = val.includes(props.itemKey);
  setSvgAngle();
}
function setSvgAngle() {
  svgElement.value.style.transform = `rotate(${isExtend.value ? 90 : 0}deg)`;
}
</script>

<template>
  <div class="nuomi-collapseItem">

    <div class="nuomi-collapse-header" @click="toggle">
      <span class="nuomi-collapse-arrow">
        <svg ref="svgElement">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </span>
      <span>{{ header }}</span>
    </div>

    <div v-if="isExtend" class="nuomi-collapse-content">
      <div class="nuomi-collapse-content-box">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.nuomi-collapseItem {
  border-bottom: 1px solid #d9d9d9;
}

.nuomi-collapse-header {
  color: #000000d9;
  background-color: #fafafa;
  cursor: pointer;
  padding: 12px 16px;
  > .nuomi-collapse-arrow > svg {
    width: 14px;
    height: 14px;
    margin-right: 12px;
  }
}

.nuomi-collapse-content {
  color: #000000d9;
  background-color: #fff;
  border-top: 1px solid #d9d9d9;
  > .nuomi-collapse-content-box {
    padding: 16px;
  }
}
</style>
