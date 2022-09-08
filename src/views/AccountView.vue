<template>
  <section>
    <p>{{ user.user_id }}</p>
    <p>{{ user.user_name }}</p>
    <p>{{ user.balance }}</p>
    <p>{{ user.email }}</p>
  </section>
</template>
<script>
export default {
  props: ["user.user_id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style></style>