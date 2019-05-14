<template>
  <div class="hello">
    Hello
    <button v-on:click="hello()">CLICK</button>
    <button v-on:click="hello2()">NAME</button>
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
    hello: async function() {
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
    }
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
