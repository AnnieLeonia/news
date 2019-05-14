<template>
  <div class="hello">
    <h1>News</h1>
    <ul>
      <li v-for="(n, index) in news" v-bind:key="index">
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
      news: []
    };
  },
  methods: {
    hello2: async function() {
      console.log(this.news);
    },
    getArticle(index) {
      console.log(index);
      this.$router.push("/news");
      this.$store.commit("setCurrentArticle", index);
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

<style scoped>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>
