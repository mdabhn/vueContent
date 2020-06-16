<template>
  <div class="container text-center">
    <h3 class="_h3">Welcome To the Message Box</h3>
    <div class="card mx-auto">
      <div class="card-header overflow-auto" v-chat-scroll>
        <div class="float-left">
          <div v-for="message in messages" :key="message.id">
            <p style="font-size: 20px; color: #1269bf">
              {{ message.sender }} :
              <span style="color:black"> {{ message.content }} </span>
            </p>
            <p class="text-muted ">
              <small>Time:</small> {{ message.timeStamp }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="messages">
          <mesasgeInput :name="name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mesasgeInput from './mesasgeInput'
  import db from '../firebase'
  import moment from 'moment'
  export default {
    name: 'Chat',
    props: ['name'],
    components: {
      mesasgeInput,
    },
    data() {
      return {
        messages: [],
      }
    },
    created() {
      let ref = db.collection('messages').orderBy('timeStamp')

      ref.onSnapshot(sanpshot => {
        sanpshot.docChanges().forEach(content => {
          console.log(content.doc.data().timeStamp.toMillis())
          this.messages.push({
            id: content.doc.id,
            content: content.doc.data().content,
            sender: content.doc.data().sender,
            timeStamp: moment(content.doc.data().timeStamp.toMillis()).format(
              'lll'
            ),
          })
        })
      })
    },
  }
</script>

<style>
  .messages {
    text-align: left;
  }

  .card-header {
    min-height: 490px;
    max-height: 490px;
  }

  .card {
    width: 60vw;
  }

  p {
    text-align: left;
  }

  ._h3 {
    font-family: initial;
  }
</style>
