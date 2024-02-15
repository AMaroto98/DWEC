<template>
    <div>
        <template v-if="cancionesFiltradas.length !== 0">
            <div class="cancion" v-for="cancion in cancionesFiltradas" :key="cancion.id">
                <h1>{{ cancion.titulo }}</h1>
                <p>{{ cancion.fecha }}</p>
                <span>{{ cancion.letra }}</span>
            </div>
        </template>

        <template v-else>
            <div class="cancion" v-for="cancion in canciones" :key="cancion.id">
                <h1>{{ cancion.titulo }}</h1>
                <p>{{ cancion.fecha }}</p>
                <span>{{ cancion.letra }}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        canciones: {
            type: Array,
            required: true
        },
        cancionesFiltradas: {
            type: Array,
            default: () => []
        },
    }
};
</script>

<style scoped>
span {
  white-space: pre-line;
}
div {
    margin: 50px auto;
    text-align: center;
}

div.cancion:nth-child(even) {
    background-color: #eeeeee;
}
</style>
