import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) next()
      else next({ name: 'Home' })
    },
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
