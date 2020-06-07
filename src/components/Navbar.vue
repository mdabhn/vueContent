<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home'}">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'About'}">About</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
