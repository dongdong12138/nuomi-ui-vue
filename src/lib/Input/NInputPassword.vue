<script setup lang="ts">

</script>

<template>
  <div class="nuomi-input-wrapper">
    <input type="password">
  </div>
</template>

<style lang="scss">
.nuomi-input-wrapper {
  color: #000000d9; font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9; border-radius: 2px;
  padding: 0 11px;
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  > input {
    width: 100%; height: 30px;
    border: none; outline: none;
  }
}
</style>
