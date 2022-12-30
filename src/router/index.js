// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../plugins/firebase.js'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
      },
      {
        path: '/app',
        name: 'app',
        component: () => import('@/views/app/Dashboard.vue'),
        meta: {
          requiresAuth: true
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const user = auth.currentUser

  if (requiresAuth && !user) next('/')
  else if (requiresAuth && user) next()
  else next()
})

export default router
