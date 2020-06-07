<template>
  <div class="container mt-2">
    <div class="input-group input-group-sm mb-3">
      <input class="input-group" v-model="searchValue" type="text" />
    </div>
    <div v-for="(document, index) in search" :key="document.id">{{index + 1}}. {{ document.body }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  components: {},
  data() {
    return {
      documents: [],
      searchValue: ""
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.documents = res.data;
    });
  },
  computed: {
    search() {
      return this.documents.filter(data => {
        return data.body.match(this.searchValue);
      });
    }
  }
};
</script>

<style>
</style>
