<template>
  <div class="container">
    <div class="card mx-auto">
      <div class="card-body">
        <h3 class="text-center">Welcome</h3>
        <form @submit.prevent="submitUser">
          <div class="form-group">
            <label for="userName">User name</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              placeholder="Enter User Name"
              v-model="name"
              required
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        name: null,
      }
    },
    methods: {
      submitUser() {
        if (this.name) {
          this.$router.push({ name: 'Chat', params: { name: this.name } })
        }
      },
    },
  }
</script>

<style scoped>
  .container {
    margin-top: 13%;
  }

  .card {
    max-width: 500px;
    border-color: rgb(61, 61, 61);
  }

  @media only screen and (max-width: 600px) {
    .container {
      margin-top: 45%;
    }
  }
</style>
