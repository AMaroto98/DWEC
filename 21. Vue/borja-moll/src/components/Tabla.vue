<template>
  <div>
    <table>
      <caption>
        {{
          titulo
        }}
      </caption>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaComponent",
  props: {
    titulo: String,
  },
};
</script>

<!-- Scope limita style a solo este componente -->
<style scoped lang="scss">
table {
  border: 1px solid black;
}
</style>
