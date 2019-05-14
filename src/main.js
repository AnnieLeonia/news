import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import Routes from "./routes";
import Store from "./store";

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Routes,
  store: Store
}).$mount("#app");
