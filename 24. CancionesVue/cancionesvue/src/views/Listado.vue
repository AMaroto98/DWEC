<template>
  <div class="container-fluid">
    <div class="row m-2">
      <input type="text" v-model="busqueda" placeholder="Buscar por letra de canción..." @input="buscarPorLetra()">
    </div>

    <header>
      <div class="row" v-for="categoria in categorias" :key="categoria.id">
        <button class="col-sm btn btn-danger btn-lg m-1" type="button" @click="filtrarPorCategoria(categoria.id)">
          {{ categoria.nombre }}
        </button>
      </div>

      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="ordenarAscendentemente()">
          Order ascendente
        </button>
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="ordenarDescendentemente()">
          Order descendente
        </button>
      </div>
    </header>

    <div v-if="cancionesFiltradas.length !== 0">
      <div v-for="cancion in cancionesFiltradas" :key="cancion.id">
        <Tarjeta :titulo="cancion.titulo" :fecha="cancion.fecha">
          {{ cancion.letra }}
        </Tarjeta>
      </div>
    </div>

    <div v-else>
      <div v-for="cancion in canciones" :key="cancion.id" >
        <Tarjeta :titulo="cancion.titulo" :fecha="cancion.fecha">
          {{ cancion.letra }}
        </Tarjeta>
      </div>
    </div>

  </div>
</template>

<script>
import Tarjeta from '../components/Tarjeta.vue';

export default {
  components: {
    Tarjeta
  },

  data() {
    return {
      cancionesFiltradas: [],
      cancionesFilter: "",
      categorias: [],
      canciones: [],
      busqueda: "",
    };
  },

  methods: {

    async fetchCanciones() {
      const cancionesFetch = await fetch("./bbdd/canciones.json");
      const cancionesJson = await cancionesFetch.json();
      this.canciones = cancionesJson;
    },

    async fetchCategories() {
      const categoriasFetch = await fetch("./bbdd/categorias.json");
      const categoriasJson = await categoriasFetch.json();
      this.categorias = categoriasJson;
    },

    filtrarPorCategoria(categoriaId) {
      if (this.cancionesFilter === categoriaId) {
        this.cancionesFilter = '';
        this.cancionesFiltradas = [];
      } else {
        this.cancionesFilter = categoriaId;
        this.cancionesFiltradas = this.canciones.filter(cancion => cancion.categoria_id === this.cancionesFilter);
      }
    },

    buscarPorLetra() {
      this.cancionesFiltradas = this.canciones.filter((cancion) => {
        return cancion.letra.toUpperCase().includes(this.busqueda.toUpperCase());
      });
    },

    ordenarAscendentemente() {
      this.canciones.sort(this.compararFechasAscendente);
    },

    ordenarDescendentemente() {
      this.canciones.sort(this.compararFechasDescendente);
    },

    compararFechasAscendente(cancionA, cancionB) {
      const fechaA = moment(cancionA.fecha, 'YYYY/MM/DD');
      const fechaB = moment(cancionB.fecha, 'YYYY/MM/DD');
      return fechaA.isAfter(fechaB) ? 1 : fechaA.isBefore(fechaB) ? -1 : 0;
    },

     compararFechasDescendente(cancionA, cancionB) {
      const fechaA = moment(cancionA.fecha, 'YYYY/MM/DD');
      const fechaB = moment(cancionB.fecha, 'YYYY/MM/DD');

      return fechaA.isBefore(fechaB) ? 1 : fechaA.isAfter(fechaB) ? -1 : 0;
    }
  },

  mounted() {
    this.fetchCanciones();
    this.fetchCategories();
  },
};
</script>

<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

span {
  white-space: pre-line;
}

// div {
//   margin: 50px auto;
//   text-align: center;
// }

// div.cancion:nth-child(even) {
//   background-color: #eeeeee;
// }
</style>
