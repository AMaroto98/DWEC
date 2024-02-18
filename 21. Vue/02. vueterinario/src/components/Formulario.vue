<template>

    <div>
        <h1>{{ title }}</h1>

        <form>
            <label for="name">Nombre: </label>
            <input type="text" name="name" v-model="animal.nombre"> <br>

            <label for="sex">Sexo: </label>
            <input type="radio" name="sexM" v-model="animal.sexo" value="M"> M
            <input type="radio" name="sexF" v-model="animal.sexo" value="F"> F <br>

            <label for="registryNumber">Número de registro: </label>
            <input type="text" name="registryNumber" v-model="animal.numeroRegistro"> <br>

            <label for="type">Tipo: </label>
            <select name="" v-model="animal.tipo">
                <option value="Caballo">Caballo</option>
                <option value="Gato">Gato</option>
                <option value="Perro">Perro</option>
            </select> <br>

            <button type="submit" @click="save()">Añadir animal</button>
            <button type="submit" @click="modify()">Modificar animal</button>

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
                sexo: "F",
                numeroRegistro: "",
                tipo: "Caballo",
            },
            responseSave: "",
            animals: [],
        };
    },
    methods: {

        async save() {
            const response = await fetch("http://34.90.153.139/ejercicios/veterinario/save.php", {
            method: "POST",
            body: JSON.stringify({
                nombre: this.animal.nombre,
                sexo: this.animal.sexo,
                numeroRegistro: this.animal.numeroRegistro,
                tipo: this.animal.tipo
            },),
        });
        },

        async modify() {
            const response = await fetch("http://34.90.153.139/ejercicios/veterinario/save.php", {
            method: "POST",
            body: JSON.stringify(this.animal),
        });
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
        this.title = 'Modificar Animal';

        } else {
        this.title = 'Crear Animal';
        };

        await this.getAnimals();
        this.fillInputs();
    },
};
</script>


<style scoped>

</style>
  