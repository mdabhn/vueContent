<template>
  <div class="container">
    <small class="text-muted">Your Message ( Enter to add ):</small>
    <form @submit.prevent="submitMessage">
      <div class="form-group">
        <input
          type="text"
          class="form-control mt-2 messageinput"
          v-model="message"
          required
          :placeholder="placeholder"
        />
      </div>
    </form>
  </div>
</template>

<script>
  import db from '@/firebase'
  export default {
    name: 'messageInput',
    props: ['name'],
    data() {
      return {
        message: null,
        placeholder: null,
      }
    },
    methods: {
      submitMessage() {
        db.collection('messages')
          .add({
            content: this.message,
            sender: this.name,
            timeStamp: new Date(),
          })
          .catch(err => {
            console.log(err)
          })

        this.message = null
      },
    },
    created() {
      this.placeholder = `messaging as ${this.name}`
      console.log(this.placeholder)
    },
  }
</script>

<style>
  .messageinput {
    height: 46px;
  }
</style>
