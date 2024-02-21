<template>
  <h3>Nou animal</h3>

  <p>Nom del animal: {{ this.nom }}</p>
  <p>Sexe de l'animal: {{ this.sexe }}</p>
  <p>Número de registre: {{ this.numeroRegistre }}</p>
  <p>Tipus: {{ this.tipus }}</p>

  <q-input v-model="nom" label="Nom" />

  <div class="q-gutter-sm">
    <q-radio v-model="sexe" val="M" label="Masculi" />
    <q-radio v-model="sexe" val="F" label="Femeni" />
  </div>

  <q-input v-model="numeroRegistre" label="Número registre" />

  <div class="q-gutter-md">
    <q-select v-model="tipus" :options="['Perro', 'Gato', 'Caballo']" label="Tipus" />
  </div>

  <q-btn color="primary" label="Desar" @click="save()" />
</template>

<script>
import { api } from "../boot/axios.js";

export default {
  name: "NouAnimal",
  data() {
    return {
      nom: "",
      sexe: "",
      numeroRegistre: "",
      tipus: ""
    };
  },

  methods: {

    async save() {

      const data = {
          id: "",
          nombre: this.nom,
          sexo: this.sexe,
          numeroRegistro: this.numeroRegistre,
          tipo: this.tipus
      };


      const response = await api.post("/save.php", data,
      {
        headers: {
          "Content-Type": false,
        },
      }
      );
      console.log(response.data);
    },

  },
};
</script>
