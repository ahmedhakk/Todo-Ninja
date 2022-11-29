<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="2000" top color="success">
      Added New Project Successfully!
      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          small
          text
          color="white"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar class="grey lighten-4" flat app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            link
            :to="link.route"
            class="grey--text"
          >
            <v-icon left small>mdi-{{ link.icon }}</v-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="@/assets/images/me.jpg"></v-img>
          </v-avatar>
          <p class="white--text subtitle-1 my-2 text-center">Ahmed Ali</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <popup @projectAdded="snackbar = true"></popup>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "view-dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "account", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>
