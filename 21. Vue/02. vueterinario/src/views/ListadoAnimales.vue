<template>
    <div>
        <h1>Listado de Animales</h1>
        <TablaAnimales/>
    </div>
</template>

<script>
import TablaAnimales from '@/components/TablaAnimales.vue';

// Cuando se usa un componente dentro de otro componente hay que poner el siguiente código siempre?
// Y si es el caso de App.vue? Hace falta?
export default {
    components: {
        TablaAnimales,
    },
};
</script>
