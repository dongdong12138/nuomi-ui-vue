<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
</script>

<template>

  <top-nav />

  <div class="bannerAndFeatures">

    <div class="banner">
      <h1>糯米 UI</h1>
      <h2>纸上得来终觉浅，绝知此事要躬行。</h2>
      <p class="actions">
        <router-link to="/doc">开始</router-link>
      </p>
    </div>

    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue3</h3>
          <p>使用了最新的 Vue3.3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-lights"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>

  </div>

</template>

<style scoped lang="scss">
.bannerAndFeatures {
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.banner {
  color: #007974;
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  line-height: 2;
  clip-path: ellipse(80% 60% at 50% 40%);
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 150px 0;
  > .actions {
    color: white;
    outline: none;
    padding: 8px 0; margin-top: 10px;
    > a {
      font-size: 18px;
      background: #02bcb0;
      border-radius: 4px;
      padding: 8px 24px;
    }
  }
}

.features {
  display: flex; justify-content: center;
  margin: 64px 0;
  > ul {
    display: flex; flex-wrap: wrap;
    > li {
      padding: 0 20px;
      margin: 16px 0;
      display: grid;
      grid-template-areas:
              "icon title"
              "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      justify-content: start;
      align-content: space-between;
      > svg {
        width: 64px; height: 64px;
        grid-area: icon;
      }
      > h3 {
        font-size: 28px;
        grid-area: title;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
