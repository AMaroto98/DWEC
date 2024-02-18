<template>
  <div>
    <TablaComponent titulo="Tabla">
      <FilaComponent>
        <!-- Se puede pasar como atributo del TAG o poniendo slot en el componente y pasarselo como en la primera row. -->
        <ColumnaComponent valor="Antonio">Antonio</ColumnaComponent>
        <ColumnaComponent>Maroto</ColumnaComponent>
      </FilaComponent>
    </TablaComponent>

    <TablaComponent titulo="Coches">
      <FilaComponent>
        <ColumnaComponent valor="Opel Corsa"></ColumnaComponent>
        <ColumnaComponent valor="Audi"></ColumnaComponent>
      </FilaComponent>
    </TablaComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TablaComponent from "@/components/Tabla.vue";
import FilaComponent from "@/components/Fila.vue";
import ColumnaComponent from "@/components/Columna.vue";

export default {
  name: "HomeView",
  components: {
    TablaComponent,
    FilaComponent,
    ColumnaComponent,
  },
};
</script>
