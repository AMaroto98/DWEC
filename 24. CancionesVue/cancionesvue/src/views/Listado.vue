<template>
  <div class="container-fluid">
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

    <div class="row m-2">
      <input type="text" v-model="busqueda" placeholder="Buscar por letra de canción..." @input="buscarPorLetra()">
    </div>

    <main>
      <template v-if="cancionesFiltradas.length !== 0">
        <div class="cancion" v-for="cancion in cancionesFiltradas" :key="cancion.id">
          <h1>{{ cancion.titulo }}</h1>
          <span>{{ cancion.letra }}</span>
        </div>
      </template>

      <template v-else>
        <div class="cancion" v-for="cancion in canciones" :key="cancion.id">
          <h1>{{ cancion.titulo }}</h1>
          <span>{{ cancion.letra }}</span>
        </div>
      </template>
    </main>


  </div>
</template>

<script>
export default {
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
span {
  white-space: pre-line;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div {
  margin: 50px auto;
  text-align: center;
}

div.cancion:nth-child(even) {
  background-color: #eeeeee;
}
</style>
