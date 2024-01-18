<template>
  <main class="nuomi-main">
    <slot></slot>
  </main>
</template>

<style lang="scss">
.nuomi-main {
  color: #303133;
  height: 150px;
  background-color: #ecf5ff;
  display: flex; justify-content: center; align-items: center;
  overflow: auto;
  padding: 20px;
}
</style>
