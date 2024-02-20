<template>
  <div>
    <q-input v-model="titulo" label="Titulo" />

    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="fecha" />
      </div>
    </div>

    <q-input v-model="urlImagen" label="URL Imagen" />
    <button @click="guardar()">Guardar</button>
  </div>
</template>

<script>
import moment from "moment";
import { api } from "../boot/axios.js";

export default {
  data() {
    return {
      titulo: "",
      fecha: "",
      urlImagen: "",
    };
  },

  methods: {
    async guardar() {
      const data = {
        titulo: this.titulo,
        fecha: moment(this.fecha, "YYYY/MM/DD").format("YYYY-MM-DD"),
        url: this.urlImagen,
      };

      // Con Fetch
      // const response = await fetch(
      //   "http://34.90.153.139/ejercicios/galeria/save.php",
      //   {
      //     method: "POST",
      //     // headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(data),
      //   }
      // );

      // const result = await response.json();
      // console.log(result);

      // Con Axios
      const response = await api.post("/save.php", data,
        {
          headers: {
            "Content-Type": false,
          },
        }
      );

      const result = response.data;
      console.log(result);
    },
  },
};
</script>
