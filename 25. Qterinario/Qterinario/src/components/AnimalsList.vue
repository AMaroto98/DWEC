<template>
  <div class="" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item expand-separator icon="pets" :label="nombre" :caption="sexo">
        <q-card>
          <q-card-section>
            <p>Número de registro: {{ numeroRegistro }}</p>
            <p>Tipo: {{ tipo }}</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "AnimalsList",
  props: {
    nombre: {
      type: String,
      required: "",
    },
    sexo: {
      type: String,
      default: "",
    },
    numeroRegistro: {
      type: String,
      default: "",
    },
    tipo: {
      type: String,
      default: "",
    },
  },
};
</script>
