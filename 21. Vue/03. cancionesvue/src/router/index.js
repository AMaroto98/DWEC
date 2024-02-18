import { createRouter, createWebHashHistory } from 'vue-router'
import Listado from '../views/Listado.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Listado
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
