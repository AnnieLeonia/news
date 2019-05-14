import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    name: "",
    news: []
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    setNews(state, newNews) {
      state.news = newNews;
    }
  }
});

export default Store;
