<template>
  <div class="projects mx-4 mb-4">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.status }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
        //   title: "Design a new website. using vuetify",
        //   person: "The Net Ninja",
        //   due: "30th Oct 2023",
        //   status: "ongoing",
        // },
      ],
    };
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
  computed: {
    myProjects() {
      return this.projects.filter(
        (project) => project.person === "Ahmed Shaheen"
      );
    },
  },
};
</script>
