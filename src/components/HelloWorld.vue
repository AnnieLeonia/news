<template>
  <div class="hello">
    <h1>News</h1>
    <div class="slideshow"></div>
    Search for news article:
    <input type="text" v-model="filter" />
    <ul>
      <li v-for="(n, index) in filteredNews" v-bind:key="index">
        <v-icon v-if="ifRead(index)" name="check" />
        <a v-on:click="getArticle(index)">{{ n.title[0] }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      news: [],
      filter: ""
    };
  },
  computed: {
    filteredNews: function() {
      var filteredNews = [];
      for (var i = 0; i < this.news.length; i += 1) {
        if (this.news[i].title[0].toLowerCase().includes(this.filter)) {
          filteredNews.push(this.news[i]);
        }
      }
      return filteredNews;
    },
    readArticles: function() {
      return this.$store.state.readArticles;
    }
  },
  methods: {
    hello2: async function() {
      console.log(this.news);
    },
    getArticle(index) {
      console.log(index);
      this.$router.push("/news");
      this.$store.commit("setCurrentArticle", index);
    },
    ifRead(index) {
      return this.readArticles.indexOf(index) !== -1;
    }
  },
  created: async function() {
    var parseString = require("xml2js").parseString;
    var res = await fetch("/rss.xml");
    var html = await res.text();
    var news1;
    parseString(html, function(err, result) {
      const news = result.rss.channel[0].item;
      news1 = news;
    });
    this.news = news1;
    this.$store.commit("setNews", this.news);
  }
};
</script>

<style >
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1em;
  cursor: pointer;
}
a {
  color: #42b983;
}

.slideshow {
  background-color: #42b983;
}

.fa-icon {
  fill: #42b983;
}
</style>
