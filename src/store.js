import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    name: "",
    news: [],
    readArticles: [],
    currentArticle: -1
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    setNews(state, newNews) {
      state.news = newNews;
    },
    setReadArticles(state, index) {
      state.readArticles.push(index);
    },
    setCurrentArticle(state, index) {
      state.currentArticle = index;
    }
  }
});

export default Store;
