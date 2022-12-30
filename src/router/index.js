// Composables
import { createRouter, createWebHistory } from 'vue-router'

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
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
