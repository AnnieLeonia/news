import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    news: [],
    readArticles: [],
    currentArticle: -1
  },
  mutations: {
    setNews(state, newNews) {
      state.news = newNews;
    },
    setCurrentArticle(state, index) {
      state.currentArticle = state.news[index];
      if (state.readArticles.indexOf(index) == -1) {
        state.readArticles.push(index);
      }
    }
  }
});

export default Store;
