<template>
  <section id="blog">
    <div class="container">
      <div class="info">

      </div>
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
  padding-top: 6rem;
}
.container{
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
}
.info{
  background: rgba(250, 250, 250, 0.795);
  width: 25rem;
  height: 20rem;
  border-radius: 20px;
  margin-top: auto;
}
</style>