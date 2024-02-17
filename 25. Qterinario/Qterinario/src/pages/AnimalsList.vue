<template>
  <AnimalsList v-for="animal in animals" :key="animal.id" :nombre="animal.nombre" :sexo="animal.sexo"
    :numeroRegistro="animal.numeroRegistro" :tipo="animal.tipo">
  </AnimalsList>
</template>

<script>
import AnimalsList from "../components/AnimalsList.vue";

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
    async getAnimals() {
      const animalsFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
      this.animals = await animalsFetch.json();
    },
  },

  mounted() {
    this.getAnimals();
  },
};
</script>
