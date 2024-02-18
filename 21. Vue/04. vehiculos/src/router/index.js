import { createRouter, createWebHistory } from 'vue-router';
import TablaVehiculos from '../views/TablaVehiculos.vue';

const routes = [
  {
    path: '/',
    name: 'TablaVehiculos',
    component: TablaVehiculos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
