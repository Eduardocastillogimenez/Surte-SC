// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/guards/Auth'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/default/NoLoggedView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'signIn',
        name: 'Sign in',
        component: () => import('@/views/SignIn.vue'),
      }
    ]
  },
  {
    path: '/app',
    component: () => import('@/layouts/default/LoggedView.vue'),
    beforeEnter: Auth,
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'station-detail/:id',
        name: 'StationDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/StationDetail.vue'),
      },
      {
        path: 'station-report/:id',
        name: 'StationReport',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/StationReport.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
