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
        { path: 'button', name: 'button', component: () => import('@/views/ButtonDoc.vue') },
        { path: 'switch', name: 'switch', component: () => import('@/views/SwitchDoc.vue') },
        { path: 'dialog', name: 'dialog', component: () => import('@/views/DialogDoc.vue') },
        { path: 'tabs', name: 'tabs', component: () => import('@/views/TabsDoc.vue') },
        { path: '', name: 'redirect', redirect: '/doc/intro' }
      ]
    },
  ]
})

export default router
