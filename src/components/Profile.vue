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
  }
};
</script>

<style>
</style>
