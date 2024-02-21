<template>
  <div class="home">
    <div class="container mt-5">
      <h1>Portfolio</h1>
      <div class="row mt-4">
        
        <!-- Categorias -->
        <div class="row mt-4">
          <div class="col-2" v-for="categoria in categories" :key="categoria.id_categoria">
            <button type="button" class="btn btn-primary" @click="filtrarPorCategoria(categoria.id_categoria)">
              {{ categoria.nombre }}
            </button>
          </div>
          <button type="button" class="btn btn-primary col-2" @click="mostrarTodo()">Todas</button>
        </div>

        <button @click="ordenarDescendentemente()">
          Ordenar descendentemente
        </button>

        <!-- Tarjetas -->
        <div class="row mt-4">
          <div class="col-md-3 mb-4" v-for="entrada in entradesFiltrades" :key="entrada.id">
            <div class="card">
              <img :src="entrada.ruta" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ entrada.titulo }}</h5>
                <p class="card-text">{{ entrada.fecha }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de las tarjetas -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      entrades: [],
      categories: [],
      entradesFiltrades: [],
    };
  },
  methods: {
    async getGaleria() {
      const galeriaFetch = await fetch(
        "http://34.90.153.139/examen2/getgaleria.php"
      );
      this.entrades = await galeriaFetch.json();
      console.log("Entradas", this.entrades);
      this.entradesFiltrades = this.entrades;
      console.log("Entradas filtradas: ", this.entradesFiltrades);
    },

    async getCategories() {
      const categoriaFetch = await fetch(
        "http://34.90.153.139/examen2/getcategorias.php"
      );
      this.categories = await categoriaFetch.json();
      console.log(this.categories);
    },

    ordenarDescendentemente() {
      this.entradesFiltrades.sort(this.compararFechasDescendentemente);
    },

    compararFechasDescendentemente(entradaA, entradaB) {
      const fechaA = moment(entradaA.fecha, "YYYY/MM/DD");
      const fechaB = moment(entradaB.fecha, "YYYY/MM/DD");
      return fechaA.isBefore(fechaB) ? 1 : fechaA.isAfter(fechaB) ? -1 : 0;
    },

    filtrarPorCategoria(idCategoria) {
      this.entradesFiltrades = this.entrades.filter(entrada => entrada.id_categoria === idCategoria);
    },

    mostrarTodo() {
      this.entradesFiltrades = this.entrades;
    }

  },

  mounted() {
    this.getGaleria();
    this.getCategories();
  },
};
</script>
