import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/doc', name: 'doc', component: Doc,
      children: [
        { path: 'intro', name: 'intro', component: () => import('@/views/Intro.vue') },
        { path: 'install', name: 'install', component: () => import('@/views/Install.vue') },
        { path: 'get-started', name: 'getStarted', component: () => import('@/views/GetStarted.vue') },
        { path: 'button', name: 'button', component: () => import('@/views/ButtonDoc/index.vue') },
        { path: 'switch', name: 'switch', component: () => import('@/views/SwitchDoc/index.vue') },
        { path: 'dialog', name: 'dialog', component: () => import('@/views/DialogDoc/index.vue') },
        { path: 'tabs', name: 'tabs', component: () => import('@/views/TabsDoc/index.vue') },
        { path: 'container', name: 'container', component: () => import('@/views/ContainerDoc/index.vue') },
        { path: 'input', name: 'input', component: () => import('@/views/InputDoc/index.vue') },
        { path: 'collapse', name: 'collapse', component: () => import('@/views/CollapseDoc/index.vue') },
        { path: '', name: 'redirect', redirect: '/doc/intro' }
      ]
    },
  ]
})

export default router
