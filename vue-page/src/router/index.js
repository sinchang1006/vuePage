import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: () => import("@/views/Home.vue"),
      meta:{
        layout: "MainLayout"
      }
    },
    {
      path: '/Works',
      name: 'Works',
      component: () => import('@/views/Works.vue'),
      meta: { title: 'Works' } // 여기에 제목 정의
    },
    {
      path: '/WebviewLab',
      name: 'WebviewLab',
      component: () => import('@/views/WebviewLab.vue'),
      meta: { title: 'Webview LAB' } // 여기에 제목 정의
    },
    {
      path: '/ComponentGuide',
      name: 'ComponentGuide',
      component: () => import('@/views/ComponentGuide.vue')
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