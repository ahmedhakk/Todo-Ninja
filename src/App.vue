<template>
  <v-app>
    <the-navbar></the-navbar>
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },

  data() {
    return {};
  },
};
</script>