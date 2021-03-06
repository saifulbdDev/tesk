<template>
  <v-card class="addpost_card">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col md="6">
          <v-text-field v-model="title" label="Title" required></v-text-field>
        </v-col>

        <v-col md="6">
          <v-combobox
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :items="category"
            :search-input.sync="search"
            hide-selected
            label="Search for an option"
            multiple
            small-chips
            solo
          >
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading">Create</span>
                <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small>
                  {{ search }}
                </v-chip>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selected"
                label
                small
              >
                <span class="pr-2">
                  {{ item.text }}
                </span>
                <v-icon small @click="parent.selectItem(item)">
                  close
                </v-icon>
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
              ></v-text-field>
              <v-chip
                v-else
                :color="`${item.color} lighten-3`"
                dark
                label
                small
              >
                {{ item.text }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-list-item-action @click.stop>
                <v-btn icon @click.stop.prevent="edit(index, item)">
                  <v-icon>{{
                    editing !== item ? "mdi-pencil" : "mdi-check"
                  }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-combobox>
        </v-col>
        <v-col md="12">
          <v-textarea
            v-model="description"
            label="Description"
            counter
            maxlength="120"
            full-width
            single-line
          ></v-textarea>
        </v-col>
      </v-row>

      <v-btn color="success" class="mr-4" @click="NewPost">
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    title: "",
    description: "",

    activator: null,
    attach: null,
    colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
    editing: null,
    editingIndex: -1,
    items: [{ header: "Select an option or create one" }],
    nonce: 1,
    menu: false,
    model: [],
    x: 0,
    search: null,
    y: 0,
  }),
  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;

      this.model = val.map((v) => {
        if (typeof v === "string") {
          v = {
            userId: this.user.id,
            text: v,
            color: this.colors[this.nonce - 1],
          };
          console.log("ee", v)
        
      this.$store.dispatch("post/PostCategory", v)
          this.category.push(v);

          this.nonce++;
        }

        return v;
      });
    },
  },
  created(){
       this.PostCategoryData();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("post", ["category"]),
  },
  methods: {
    ...mapActions("auth", ["UserData"]),
    ...mapActions("post", ["PostCategoryData"]),
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.editingIndex = index;
      } else {
        this.editing = null;
        this.editingIndex = -1;
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = (val) => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      );
    },

    NewPost() {
      let data = {
        userId: this.user.id,
        title: this.title,
        author:  this.user.name,
        img:'https://via.placeholder.com/600/92c952',
        description: this.description,
        category: this.model,
      };
      this.$store.dispatch("post/PostCreated", data).then(() => {
        this.$router.push({ path: "/admin" });
      });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped>
.addpost_card {
  padding: 20px;
  margin-top: 30px;
}
</style>
