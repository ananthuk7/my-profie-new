import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    transition: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { transition: 'fade' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { transition: 'fade' }
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/Skills.vue'),
      meta: { transition: 'grow' }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue'),
      meta: { transition: 'grow' }
    },
    {
      path: '/qualification',
      name: 'qualification',
      component: () => import('../views/Education.vue'),
      meta: { transition: 'grow' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
      meta: { transition: 'grow' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { transition: 'fade' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ]
})

export default router
