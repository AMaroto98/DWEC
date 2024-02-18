import { createRouter, createWebHistory } from 'vue-router';
import ListadoAnimales from '../views/ListadoAnimales.vue';
import AñadirAnimal from '../views/AñadirAnimal.vue';
import DatosAnimal from '../views/DatosAnimal.vue';


const routes = [
  {
    path: '/ListadoAnimales',
    name: 'ListadoAnimales',
    component: ListadoAnimales
  },
  {
    path: '/AñadirAnimal',
    name: 'AñadirAnimal',
    component: AñadirAnimal
  },
  {
    path: '/DatosAnimal/:id',
    name: 'DatosAnimal',
    component: DatosAnimal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
