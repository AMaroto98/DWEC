<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="animal in animales"
        :key="animal.id"
        expand-separator
        icon="pets"
        :label="animal.nombre"
        :caption="animal.sexo"
      >
        <q-card>
          <q-card-section>
            Registro: {{ animal.numeroRegistro }}
          </q-card-section>
          <q-card-section> Tipo: {{ animal.tipo }} </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "ListadoAnimales",
  data() {
    return {
      animales: [],
    };
  },
  created() {
    this.list();
  },
  methods: {
    async list() {
      const animalesFetch = await fetch(
        "http://34.90.153.139/ejercicios/veterinario/getanimals.php"
      );
      this.animales = await animalesFetch.json();
    },
  },
};
</script>
