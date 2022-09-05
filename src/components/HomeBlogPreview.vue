<template>
  <section>
    <h1>Browse trending articles</h1>
    <p>
      Discover the top articles trending in the Web3 space. Learn all about
      crypto, the Metaverse, and NFT's
    </p>

    <div class="container">
      <router-link to="/blogs" class="cards">
        <img src="" alt="" />
        <h6 class="title"></h6>
        <p class="blurb"></p>
        <p class="author"></p>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: 80vh;
  background: var(--bgcolor);
  color: white;
}
</style>