import { createRouter, createWebHashHistory } from 'vue-router'
import PortfolioView from '../views/Portfolio.vue'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
