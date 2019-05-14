import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    name: ""
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    }
  }
});

export default Store;
