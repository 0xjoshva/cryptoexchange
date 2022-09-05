<template>
  <section id="blog">
    <div class="container">
      <div class="info"></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      blogs: null,
    };
  },
  methods: {},
  mounted() {
    fetch("https://capstone-eomp.herokuapp.com/blogs", {})
      .then((res) => res.json())
      .then((data) => (this.blogs = data), console.log(this.blogs));
  },
};
</script>
<style scoped>
#blog {
  width: 100%;
  height: 120vh;
  background: var(--bgcolor);
  color: white;
  padding-top: 7rem;
}
.container {
  background: url(../assets/markzuck.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 45rem;
  width: 80vw;
  border-radius: 24px;
  cursor: pointer;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  filter: blur(0.05rem);
}
.info {
  background: rgb(255, 255, 255);
  width: 25rem;
  height: 20rem;
  border-radius: 20px;
  margin-top: auto;
  filter: opacity(0.94);
  transition: 0.2s all ease-in-out;
  box-shadow: 0px 0px 2px  1px white;
}
.info:hover {
  filter: opacity(1);
}
</style>