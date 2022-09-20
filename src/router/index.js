import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/my-work',
    name: 'my-work',
    component: () => import('@/views/MyWorkView.vue')
  },
]

export {
  routes,
}
