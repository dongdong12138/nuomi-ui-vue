<script setup lang="ts">
import NButton from './NButton.vue';

const props = withDefaults(defineProps<{
  visible: boolean
  ok?: Function
  cancel?: Function
  closeOnClickOverlay?: boolean
}>(), {
  visible: false,
  closeOnClickOverlay: false
});

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>();

const closeDialog = () => {
  emit('update:visible', false);
};
const ok = () => {
  props.ok && props.ok();
  closeDialog();
};
const cancel = () => {
  props.cancel && props.cancel();
  closeDialog();
};
const clickOverlay = () => {
  props.closeOnClickOverlay && closeDialog();
};
</script>

<template>
  <template v-if="visible">

    <!-- 蒙层 -->
    <div class="nuomi-dialog-overlay" @click="clickOverlay"></div>

    <!-- 主体内容 -->
    <div class="nuomi-dialog-wrapper">
      <div class="nuomi-dialog">
        <header>
          <slot name="title"></slot>
          <span class="nuomi-dialog-close" @click="closeDialog"></span>
        </header>
        <main>
          <slot name="content"></slot>
        </main>
        <footer>
          <n-button level="main" @click="ok">OK</n-button>
          <n-button @click="cancel">Cancel</n-button>
        </footer>
      </div>
    </div>

  </template>
</template>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

// 蒙层
.nuomi-dialog-overlay {
  width: 100vw; height: 100vh;
  background: fade_out(black, 0.5);
  position: fixed; left: 0; top: 0;
  z-index: 10;
}

// 主体内容
.nuomi-dialog-wrapper {
  position: fixed; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
.nuomi-dialog {
  min-width: 15em;
  max-width: 90%;
  background: #fff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  > header {
    font-size: 20px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid $border-color;
    padding: 12px 16px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    text-align: right;
    padding: 12px 16px;
  }
}

// 关闭按钮
.nuomi-dialog-close {
  display: inline-block;
  width: 32px; height: 32px;
  border-radius: 32px;
  cursor: pointer;
  position: relative;
  &::before, &::after {
    content: "";
    width: 50%; height: 1px;
    background: black;
    position: absolute; left: 50%; top: 50%;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover {
    background-color: #f57272;
    &::before, &::after {
      background-color: #fff;
    }
  }
}
</style>
