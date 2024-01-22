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
        <li><router-link to="/doc/container">Container 布局容器</router-link></li>
        <li><router-link to="/doc/input">Input 输入框</router-link></li>
      </ol>
    </aside>

    <main>
      <router-view />
    </main>

  </div>

</template>

<style scoped lang="scss">
.layout {
  height: calc(100vh - 80px);
  display: flex;
}

aside {
  width: 300px;
  box-shadow: 5px 0 5px rgba(51,51,51,.1);
  overflow-y: auto;
  padding: 0 40px;
  > h2 {
    margin: 20px 0;
  }
  > ol > li {
    > a {
      display: block;
      padding: 8px 16px;
    }
    .router-link-active {
      color: #409eff; font-weight: bold;
      background: rgba(64, 158, 255, .1);
      border-radius: 8px;
    }
  }
}

main {
  flex: 1;
  overflow-y: auto;
  padding: 40px;
}
</style>
