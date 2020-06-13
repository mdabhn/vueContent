import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Create from "@/components/Create";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    }
  ]
});
