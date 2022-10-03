import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import MyWorkView from '@/views/MyWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: () => import('@/views/Examples/ExamplesView.vue'),
      children: [
        {
          path: '',
          name: 'default',
          component: () => import('@/views/Examples/views/DefaultView.vue')
        },
        {
          path: 'cats',
          name: 'cats',
          component: () => import('@/views/Examples/views/CatsView.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to) => {
  // replace all non-existing routes to home
  if (to.name === 'home' && to.path !== '/') {
    router.replace('/')
  }
})

export default router
