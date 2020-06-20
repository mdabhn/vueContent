<template>
  <div class="container mx-auto mt-4">
    <form class="w-50 mx-auto" @submit.prevent="signup">
      <div class="form-group">
        <label for="emial">Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="email"
          required
        />
        <small id="email" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="alias">Alias</label>
        <input
          type="text"
          class="form-control"
          placeholder="your user name"
          v-model="alias"
          required
        />
      </div>
      <div class="form-group">
        <label for="passsword">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import slugify from 'slugify'
  import db from '../../firebase'

  export default {
    name: 'Signup',
    data() {
      return {
        email: null,
        slug: null,
        alias: null,
        password: null,
        feedback: null,
        passed: true,
      }
    },
    methods: {
      signup() {
        this.slug = slugify(this.alias, {
          replacement: '-',
          lower: true,
        })
        let ref = db.collection('users').doc(`${this.slug}`)
        ref.get().then(doc => {
          if (!doc.exists) {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .catch(err => {
                console.log(err)
              })
          }
        })
      },
    },
  }
</script>

<style></style>
