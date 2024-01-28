<script setup lang="ts">
defineProps<{
  header: string
}>()
</script>

<template>
  <div class="nuomi-collapseItem">

    <div class="nuomi-collapse-header">
      <span class="nuomi-collapse-arrow">
        <svg ref="svgRef">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </span>
      <span>{{ header }}</span>
    </div>

    <div class="nuomi-collapse-content">
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
