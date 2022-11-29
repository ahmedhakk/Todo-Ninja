<template>
  <div class="team mx-4 mb-4">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 xm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3 hovering">
            <v-responsive class="py-4 grey lighten-2">
              <v-avatar size="100">
                <v-img :src="person.avatar"></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1 font-weight-medium">{{ person.name }}</div>
              <div class="gery--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey" block>
                <v-icon small left>mdi-message-text-outline</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
    };
  },
};
</script>
