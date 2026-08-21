import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '綾川星凛' },
    },
    {
      path: '/guestbook',
      name: 'guestbook',
      component: () => import('../views/GuestbookView.vue'),
      meta: { title: '留言板 · 綾川星凛' },
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue'),
      meta: { title: '友情链接 · 綾川星凛' },
    },
  ],
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) ?? '綾川星凛'
})

export default router
