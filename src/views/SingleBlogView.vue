<template>
  <section>
    <div v-for="blog in blogs" :key="blog.id" class="item">
      <p>{{ blog.title }}</p>
      <p>{{ blog.article }}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  mounted() {
    this.$store.dispatch("getBlog");
  },
  methods: {},
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>
<style scoped></style>