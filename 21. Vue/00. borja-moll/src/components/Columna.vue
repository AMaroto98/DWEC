<template>
  <div>
    <td><slot></slot></td>
  </div>
</template>

<script>
export default {
  name: "ColumnaComponent",
  props: {
    valor: String,
  },
};
</script>

<style scoped lang="scss">
td {
  border: 1px solid red;
}
</style>
