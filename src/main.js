import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import Routes from "./routes";
import Store from "./store";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons";

Vue.use(VueResource);
Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Routes,
  store: Store,
  components: { "v-icon": Icon }
}).$mount("#app");
