import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import("@/views/Main.vue"),
      meta:{
        layout: "MainLayout"
      }
    },
    {
      path: '/Pad',
      name: 'Pad',
      component: () => import('@/views/Pad.vue')
    },
    {
      path: '/UX',
      name: 'UX',
      component: () => import('@/views/UX.vue')
    },
    // {
    //   path: '/testpage',
    //   name: 'testpage',
    //   component: () => import('@/views/TestPageView.vue')
    // }
  ],
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedScrollPosition) {
      return { top: 0 }
  },
})
export default router