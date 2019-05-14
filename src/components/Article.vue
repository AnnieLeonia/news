<template>
  <div>
    <button v-on:click="back()">GO BACK</button>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">
      Go to page
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    currentArticleNbr: function() {
      return this.$store.state.currentArticle;
    },
    title: function() {
      return this.$store.state.news[this.currentArticleNbr].title[0];
    },
    description: function() {
      return this.$store.state.news[this.currentArticleNbr].description[0];
    },
    link: function() {
      return this.$store.state.news[this.currentArticleNbr].link[0];
    }
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created: function() {
    console.log(this.description);
  }
};
</script>

<style>
</style>
