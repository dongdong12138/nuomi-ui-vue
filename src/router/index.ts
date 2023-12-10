import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/doc', name: 'doc', component: Doc,
      children: [
        { path: 'intro', component: () => import('@/views/Intro.vue') },
        { path: 'install', component: () => import('@/views/Install.vue') },
        { path: 'get-started', component: () => import('@/views/GetStarted.vue') },
        { path: 'button', component: () => import('@/views/Button.vue') },
        { path: 'switch', component: () => import('@/views/Switch.vue') },
        { path: 'dialog', component: () => import('@/views/Dialog.vue') },
        { path: 'tabs', component: () => import('@/views/Tabs.vue') },
      ]
    },
  ]
})

export default router
