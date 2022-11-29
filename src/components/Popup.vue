<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined depressed class="white--text" v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Add a New Project</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            outlined
            name="title"
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            name="info"
            v-model="content"
            outlined
            :rules="inputRules"
            auto-grow
            rows="6"
            prepend-icon="mdi-pencil"
          ></v-textarea>

          <v-menu offset-y transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                :value="formattedDate"
                :rules="dateRules"
                outlined
                readonly
                label="Due date"
                prepend-icon="mdi-calendar-range"
              ></v-text-field>
            </template>
            <v-date-picker full-width v-model="due"></v-date-picker>
          </v-menu>
          <v-combobox
            v-model="status"
            label="Status"
            outlined
            prepend-icon="mdi-list-status"
            :items="statusOption"
          ></v-combobox>
          <v-btn
            outlined
            block
            :loading="loading"
            :disabled="loading"
            color="primary"
            class="mx-0 mt-3"
            @click="submitForm"
          >
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";

export default {
  emits: ["projectAdded"],
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: "",
      status: "",
      loading: false,

      statusOption: ["ongoing", "overdue", "complete"],

      // Each rule is a function
      inputRules: [
        (v) => v.length >= 3 || v === "" || "Min length is 3 characters",
      ],
      dateRules: [(v) => v.length >= 3 || v === "" || "Should be a due date"],
    };
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "EEEE, MMMM do yyyy") : "";
    },
  },
  methods: {
    async submitForm() {
      try {
        if (this.$refs.form.validate()) {
          this.loading = true;

          const project = {
            title: this.title,
            content: this.content,
            due: this.due,
            person: "Ahmed Shaheen",
            status: this.status || "ongoing",
          };
          const res = await fetch(
            "https://todo-ninja-f752a-default-rtdb.firebaseio.com/projects.json",
            {
              method: "POST",
              body: JSON.stringify(project),
            }
          );

          this.$emit("projectAdded"); // snackbar

          this.loading = false;
          this.dialog = false;
          this.title = "";
          this.content = "";
          this.due = "";
          console.log("added to our database");
        } else {
          console.log("Form Not Valid !!!");
        }
      } catch (err) {
        console.log("Something in async" + err);
      }
    },
  },
};
</script>
