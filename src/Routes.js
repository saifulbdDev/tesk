import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";
import Home from "@/components/Layout/Layout";

import PostsList from "@/pages/Posts/Index.vue";
import PostsEdit from "@/pages/Posts/Details.vue";
import PostsNew from "@/pages/Posts/New.vue";
import Register from "@/pages/Login/Register";
import Login from "@/pages/Login/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/admin",
      redirect: "/admin/posts",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/admin/posts",
          name: "posts List",
          component: PostsList,
        },
        {
          path: "/admin/posts-edit",
          name: "postsEdit",
          component: PostsEdit,
        },
        {
          path: "/admin/addpost",
          name: "PostsNew",
          component: PostsNew,
        },
      ],
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
