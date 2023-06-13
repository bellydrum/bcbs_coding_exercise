import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'


const token = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/LoginView.vue')
  },
  {
    path: "/register",
    name: "register",
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.name !== 'login' && !token) {
    return { name: 'login'}
  }

})

export default router