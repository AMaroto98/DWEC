<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Veterinari </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bordered>

        <q-item clickable v-ripple tag="router-link" :to="'/Animales'">
          <q-item-section avatar>
            <q-icon color="primary" name="pets" />
          </q-item-section>
          <q-item-section>Llistat d'animals</q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="router-link" :to="'/Animal'">
          <q-item-section avatar>
            <q-icon color="primary" name="pets" />
          </q-item-section>
          <q-item-section>Nou animal</q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {

  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
a {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
</style>
