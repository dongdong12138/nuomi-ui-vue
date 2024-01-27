<script setup lang="ts">

</script>

<template>
  <textarea rows="1" class="nuomi-textarea"></textarea>
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
