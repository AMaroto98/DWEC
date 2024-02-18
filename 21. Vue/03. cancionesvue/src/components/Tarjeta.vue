<template>
    <div class="cancion">
        <h1>{{ titulo }}</h1>
        <p>{{ fecha }}</p>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String
        },

        fecha: {
            type: String
        }

    }
};
</script>

<style scoped>

div {
    margin: 50px auto;
    text-align: center;
}

div.cancion:nth-child(even) {
    background-color: #eeeeee;
}
</style>
