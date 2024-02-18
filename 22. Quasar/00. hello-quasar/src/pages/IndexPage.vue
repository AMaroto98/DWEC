<template>
  <q-page class="flex">
    <q-list>
      <q-item v-for="animal in animals" :key="animal.id">
        <q-item-section>
          <q-item-label>{{ animal.nombre }}</q-item-label>
          <q-item-label caption>{{ animal.sexo }}</q-item-label>
          <q-item-label caption>{{ animal.tipo }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      animals: [],
    };
  },

  methods: {
    // Con un Fetch
    // async getAnimals() {
    //   const animalsFecth = await fetch(
    //     "http://34.90.153.139/ejercicios/veterinario/getanimals.php"
    //   );
    //   const animalsJSON = await animalsFecth.json();
    //   this.animals = animalsJSON;
    // },

    // Axios
    async getAnimalsAxios() {
      const animalsAxios = await this.$axios.get(
        "http://34.90.153.139/ejercicios/veterinario/getanimals.php"
      );
      this.animals = animalsAxios.data;
    },
  },

  mounted() {
    // this.getAnimals();
    this.getAnimalsAxios();
  },
};
</script>
