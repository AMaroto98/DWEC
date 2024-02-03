<template>

    <div>
        <h1>{{ title }}</h1>

        <form>
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model="animal.nombre"> <br>

            <label for="sex">Sexo</label>
            <input type="radio" name="sexM" v-model="animal.sexo" value="M"> M
            <input type="radio" name="sexF" v-model="animal.sexo" value="F"> F <br>

            <label for="registryNumber">Número de registro</label>
            <input type="text" name="registryNumber" v-model="animal.numeroRegistro"> <br>

            <label for="type">Tipo</label>
            <input type="text" name="type" v-model="animal.tipo"> <br>

            <button type="submit" @click="save()">Guardar</button>
        </form>

        <p>{{ responseSave }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            title: "",
            animal: {
                id: "",
                nombre: "",
                sexo: "",
                numeroRegistro: "",
                tipo: "",
            },
            responseSave: "",
            animals: [],
        };
    },
    methods: {

        async save() {
            const response = await fetch("http://34.90.153.139/ejercicios/veterinario/save.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.animal),
        });

        if (response.ok) {
            this.responseSave = "Animal añadido con éxito"

        } else {
            this.responseSave = "Error al intentar añadir el animal"
            console.error(response.statusText);
        }
        },

        async getAnimals() {
            const animalsFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
            const animalsJson = await animalsFetch.json();
            this.animals = animalsJson;
        },

        fillInputs() {
            const animal = this.animals.find(animal => animal.id == this.$route.params.id);
            if (animal) {
                this.animal.id = animal.id;
                this.animal.nombre = animal.nombre;
                this.animal.sexo = animal.sexo;
                this.animal.numeroRegistro = animal.numeroRegistro;
                this.animal.tipo = animal.tipo;
            }
        }
    },

    async mounted() {
        const idAnimal = this.$route.params.id;
        if (idAnimal) {
        this.titulo = 'Modificar Animal';

        } else {
        this.titulo = 'Crear Animal';
        };

        await this.getAnimals();
        this.fillInputs();
    },
};
</script>


<style scoped>

</style>
  