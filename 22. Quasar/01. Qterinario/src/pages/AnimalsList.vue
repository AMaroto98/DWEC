<template>
  <AnimalsList v-for="animal in animals" :key="animal.id" :nombre="animal.nombre" :sexo="animal.sexo"
    :numeroRegistro="animal.numeroRegistro" :tipo="animal.tipo">
  </AnimalsList>
</template>

<script>
import AnimalsList from "../components/AnimalsList.vue";
import { api } from '../boot/axios';


export default {
  components: {
    AnimalsList,
  },

  data() {
    return {
      animals: [],
    };
  },

  methods: {

    async getAnimalsFetch() {
      const animalsFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
      this.animals = await animalsFetch.json();
    },

    async getAnimalsAxios() {
      const response = await api.get("/getanimals.php");
      this.animals = response.data;
    }
  },


  mounted() {
    // this.getAnimalsFetch();
    this.getAnimalsAxios();
  },
};
</script>
