import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import MyWorkView from '@/views/MyWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/my-work',
      name: 'my-work',
      component: MyWorkView,
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('@/views/Examples.vue')
    },
  ]
})

export default router
