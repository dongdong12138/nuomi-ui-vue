<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
</script>

<template>

  <top-nav />

  <div class="layout">

    <aside>
      <h2>文档</h2>
      <ol>
        <li><router-link to="/doc/intro">介绍</router-link></li>
        <li><router-link to="/doc/install">安装</router-link></li>
        <li><router-link to="/doc/get-started">开始使用</router-link></li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li><router-link to="/doc/button">Button 组件</router-link></li>
        <li><router-link to="/doc/switch">Switch 组件</router-link></li>
        <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
        <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
      </ol>
    </aside>

    <main>
      <router-view />
    </main>

  </div>

</template>

<style scoped lang="scss">

</style>
