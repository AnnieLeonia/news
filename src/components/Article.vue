<template>
  <div>
    <button v-on:click="back()">GO BACK</button>
    <h1>{{ currentArticle.title[0] }}</h1>
    <div class="article">
      <p>{{ currentArticle.description[0] }}</p>
      <i>{{ currentArticle.pubDate[0] }}</i>
    </div>
    <a :href="currentArticle.link[0]" target="_blank">
      Go to page
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    currentArticle: function() {
      return this.$store.state.currentArticle;
    }
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
h1 {
  background-color: #42b983;
  margin: 1em 0 0 0;
}

.article {
  border: #42b983 solid 5px;
  padding: 1em;
}
</style>
