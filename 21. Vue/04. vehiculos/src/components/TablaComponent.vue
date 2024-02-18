<template>
  <div>
    <table v-if="usuarios.length !== 0" class="custom-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Sex</th>
          <th>Transport</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.iduser">
          <td>{{ usuario.username }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.surname }}</td>
          <td>{{ usuario.sex }}</td>
          <td><img :src="usuario.transport" alt="Transport Image"/></td>        
        </tr>
      </tbody>
    </table>
    <p v-else>No hay usuarios.</p>
  </div>
</template>

<script>
export default {
  name: "TablaComponent",
  data() {
    return {
      usuarios: [],
    };
  },

  methods: {
    async getUsuarios() {
      const usuariosFetch = await fetch("http://34.90.153.139/ejercicios/usuarios.php");
      const usuarios = await usuariosFetch.json();

      for (const usuario of usuarios) {
        const transportFetch = await fetch(`http://34.90.153.139/ejercicios/transporte.php?id=${usuario.transport}`);
        const transportData = await transportFetch.json();
        usuario.transport = transportData.url_imagen;
      }
      this.usuarios = usuarios;
    },
  },
  mounted() {
    this.getUsuarios();
  },
};
</script>

<style scoped lang="scss">
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.custom-table th {
  background-color: #f2f2f2;
}
</style>
