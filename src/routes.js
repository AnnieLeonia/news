import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Article from "./components/Article";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/news:id",
      component: Article
    }
  ]
});
