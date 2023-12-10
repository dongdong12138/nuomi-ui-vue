<script setup lang="ts">

</script>

<template>
  <div class="topNav">

    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-nuomi"></use>
        </svg>
      </router-link>
    </div>

    <ul class="menu">
      <li>
        <a href="https://github.com/dongdong12138/nuomi-ui-vue.git" target="_blank">
          <svg class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://gitee.com/barrydong/nuomi-ui-vue.git" target="_blank">
          <svg class="icon">
            <use xlink:href="#icon-gitee"></use>
          </svg>
        </a>
      </li>
    </ul>

  </div>
</template>

<style scoped lang="scss">
.topNav {
  box-shadow: 0 5px 5px rgba(51,51,51,.1);
  display: flex; justify-content: center; align-items: center;
  padding: 16px 20px;
  position: relative; z-index: 1;
}

.logo {
  margin-right: auto;
  > a {
    display: inline-block;
    > svg { font-size: 3em; }
  }
}

.menu {
  display: flex;
  > li {
    &:last-child { margin-left: 10px; }
    > a {
      display: inline-block;
      width: 24px; height: 24px;
      > svg {
        width: 100%; height: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
