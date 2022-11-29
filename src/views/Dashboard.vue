<template>
  <div class="dashboard mx-4 mb-4">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3 pl-3" justify-end>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row :class="`pa-3 ma-0 project ${project.status}`">
          <v-flex xs12 md6 class="white pa-3">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="white pa-3">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="white pa-3">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2 class="white pa-3">
            <div class="float-right">
              <v-chip :class="`${project.status} white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        // {
        //   title: "Design a new website",
        //   person: "The Net Ninja",
        //   due: "1st Jan 2023",
        //   status: "ongoing",
        // },
        // {
        //   title: "Code up the homepage",
        //   person: "Chun Li",
        //   due: "10th Jan 2020",
        //   status: "complete",
        // },
        // {
        //   title: "Design video thumbnails",
        //   person: "Ryu",
        //   due: "20th Dec 2019",
        //   status: "complete",
        // },
        // {
        //   title: "Create a community forum",
        //   person: "Gouken",
        //   due: "20st Oct 2018",
        //   status: "overdue",
        // },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  async created() {
    try {
      const res = await fetch(
        "https://todo-ninja-f752a-default-rtdb.firebaseio.com/projects.json"
      );
      // console.log(res);
      const responseData = await res.json(); // { key: {}, key2: {} }

      const LoadedProjects = [];
      for (const key in responseData) {
        const project = {
          title: responseData[key].title,
          person: responseData[key].person,
          due: responseData[key].due,
          status: responseData[key].status,
          content: responseData[key].content,
        };
        LoadedProjects.push(project);
      }
      this.projects = LoadedProjects;
    } catch (err) {
      console.log("something went wrong !!!" + err);
    }
  },
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
/* v-chip -> added the class of .v-chip auto in vuetify */
.v-chip.complete {
  background-color: #3cd1c2;
}
.v-chip.ongoing {
  background-color: orange;
}
.v-chip.overdue {
  background-color: tomato;
}
</style>
