<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Número registro</th>
                    <th>Tipo</th>
                    <th>Ficha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="animal in animals" :key="animal.id">
                    <td>{{ animal.nombre }}</td>
                    <td>{{ animal.sexo }}</td>
                    <td>
                        <span v-if="!animal.numeroRegistro">Sin número de registro</span>
                        <span v-else>{{ animal.numeroRegistro }}</span>
                    </td>
                    <td>{{ animal.tipo }}</td>
                    <router-link :to="{ name: 'DatosAnimal', params: { id: animal.id } }">Modificar</router-link>
                </tr>
            </tbody>
        </table>
    </div>

</template>
  
<script>
export default {
    data() {
        return {
            animals: [],
        };
    },
    methods: {
        async getAnimals() {
            const animalsFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
            const animalsJson = await animalsFetch.json();
            // Guardo la array del servidor en mi variable reactiva
            this.animals = animalsJson;
        },
    },
    mounted() {
        // Llamada inicial cuando el componente se monta
        this.getAnimals();
    },
};
</script>


<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}
</style>
  