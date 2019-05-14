<template>
  <div class="hello">
    <h1>{{ header }}</h1>
    <div class="slideshow">
      <span class="icon left" v-on:click="back()">
        <v-icon name="chevron-left" scale="2" />
      </span>
      <span class="icon right" v-on:click="next()">
        <v-icon name="chevron-right" scale="2" />
      </span>
      <p>{{ slideArticle }}</p>
    </div>
    <div class="search">
      <p>Search for news articles:</p>
      <input type="text" v-model="filter" />
    </div>
    <ul>
      <li v-for="(article, index) in filteredNews" v-bind:key="index">
        <v-icon class="check" v-if="ifRead(article)" name="check" />
        <a v-on:click="getArticle(article)">{{ article.title[0] }}</a>
        <v-icon class="star" name="star" scale="1.5" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      header: "NEWS",
      slideIndex: 0,
      filter: ""
    };
  },
  computed: {
    news: function() {
      return this.$store.state.news;
    },
    filteredNews: function() {
      var filteredNews = [];
      for (var i = 0; i < this.news.length; i += 1) {
        if (
          this.news[i].title[0]
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        ) {
          filteredNews.push(this.news[i]);
        }
      }
      return filteredNews;
    },
    slideArticle: function() {
      const res = this.news[this.slideIndex];
      if (res) {
        return res.title[0];
      }
      return "";
    },
    readArticles: function() {
      return this.$store.state.readArticles;
    }
  },
  methods: {
    getArticle: function(article) {
      this.$router.push("/news");
      this.$store.commit("setCurrentArticle", this.news.indexOf(article));
    },
    ifRead: function(n) {
      const article = this.news.indexOf(n);
      return this.readArticles.indexOf(article) !== -1;
    },
    back: function() {
      this.slideIndex -= 1;
      if (this.slideIndex == -1) {
        this.slideIndex = this.news.length;
      }
    },
    next: function() {
      this.slideIndex += 1;
      if (this.slideIndex == this.news.length) {
        this.slideIndex = 0;
      }
    },
    favorite: function() {}
  },
  created: async function() {
    var parseString = require("xml2js").parseString;
    var res = await fetch("/rss.xml");
    var html = await res.text();
    var res;
    parseString(html, function(err, result) {
      res = result.rss.channel[0].item;
    });
    this.$store.commit("setNews", res);
  }
};
</script>

<style >
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h1 {
  text-align: center;
}

p {
  margin: 0;
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1em 0;
}

a {
  color: #42b983;
  cursor: pointer;
}

input[type="text"] {
  margin: 0 1em;
  width: 50%;
}

.slideshow {
  background-color: #42b983;
  width: 100%;
  height: 6em;
}

.slideshow p {
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 26px;
  margin: 0 2em;
}

.search {
  padding: 1em;
  border: #42b983 solid 5px;
  text-align: center;
}

.icon {
  position: absolute;
  margin-top: 1em;
}

.left {
  left: 1em;
}

.right {
  right: 1em;
}

.check {
  padding-right: 0.5em;
}

.star {
  float: right;
  color: #888;
}
</style>
