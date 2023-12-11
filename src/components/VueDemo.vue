<script setup lang="ts">
import { computed, ref } from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import NButton from '@/lib/NButton.vue';

const props = defineProps<{
  component: any
}>();

const Prism = (window as any).Prism;
const html = computed(() => {
  return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
});
const codeVisible = ref(false);
const toggleCode = () => (codeVisible.value = !codeVisible.value);
</script>

<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <n-button @click="toggleCode">{{ codeVisible ? '隐藏' : '查看' }}代码</n-button>
    </div>
    <div v-if="codeVisible" class="demo-code">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    border-bottom: 1px solid $border-color;
    padding: 8px 16px;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    border-top: 1px dashed $border-color;
    padding: 8px 16px;
  }
  &-code {
    border-top: 1px dashed $border-color;
    overflow: auto;
    padding: 8px 16px;
    > pre {
      font-family: Consolas, "Courier New", Courier, monospace;
      line-height: 1.1;
      margin: 0;
    }
  }
}
</style>
