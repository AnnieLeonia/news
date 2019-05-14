import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "./components/Feed";
import Article from "./components/Article";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Feed
    },
    {
      path: "/news",
      component: Article
    }
  ]
});
