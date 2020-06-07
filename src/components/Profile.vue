<template>
  <div class="container">
    <p>Profile of: {{id}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    updateId() {
      this.id = this.$route.params.id;
    }
  },
  watch: {
    $route: "updateId"
  }
};
</script>

<style>
</style>
