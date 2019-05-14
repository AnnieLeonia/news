<template>
  <div>
    <button v-on:click="back()">GO BACK</button>
    <h1>{{ currentArticle.title[0] }}</h1>
    <p>{{ currentArticle.pubDate[0] }}</p>
    <p>{{ currentArticle.description[0] }}</p>
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
  },
  created: function() {}
};
</script>

<style>
</style>
