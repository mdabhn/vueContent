import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Signup from '../components/auth/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]

const router = new VueRouter({
  routes,
})

export default router
