<template>
  <section>
    <div v-for="blog in blogs" v-bind:key="blog.id" class="item">
      <p>{{ blog.title }}</p>
      <p>{{ blog.article }}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ["blog_id"],
  mounted() {
    this.$store.dispatch("getBlogsg");
  },
  methods: {},
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },


  mounted() {
    fetch("https://capstone-eomp.herokuapp.com/blogs/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.blog = data));
    console.log(this.blog);
  },
};
</script>
<style scoped></style>