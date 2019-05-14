<template>
  <div class="hello">
    Hello
    <button v-on:click="hello2()">NAME</button>
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
      this.$router.push("/news:index");
    }
  },
  created: async function() {
    console.log("hej");
    var parseString = require("xml2js").parseString;
    var res = await fetch("/rss.xml");
    var html = await res.text();
    var news1;
    parseString(html, function(err, result) {
      console.dir(result.rss.channel[0].item);
      const news = result.rss.channel[0].item;
      news1 = news;
    });
    this.news = news1;
    this.$store.commit("setNews", this.news);
  }
};
</script>

<style scoped>
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
}
a {
  color: #42b983;
}
</style>
