<template>
  <section>
    <div class="headings">
      <h1 class="heading">Browse trending articles</h1>
      <p class="subheading">
        Discover the top articles trending in the Web3 space. Learn all about
        crypto, the Metaverse, and NFT's
      </p>
    </div>

    <div class="container">
      <router-link to="/blog/7" class="cards">
        <img src="../assets/adidas.jpg" alt="" class="img" />
        <div class="text">
          <h6 class="title">How Your Brand Should Use NFTs</h6>
          <p class="blurb">
            Suddenly, NFTs are everywhere. For brands, wading into a new space
            can be daunting, but there’s also risk in not engaging at all. So
            how should they proceed here? First, recognize that releasing
            collectables is a good place to start, but it’s also just a first
            step
          </p>
          <p class="author">Tony Hawk</p>
        </div>
      </router-link>

      <router-link to="/blog/3" class="cards">
        <img src="../assets/markzuck.jpg" alt="" class="img" />
        <div class="text">
          <h6 class="title">
            Mark Zuckerberg responds to graphics backlash, promises Metaverse
            won't be depressing
          </h6>
          <p class="blurb">
            Horizon Worlds will look better than what the Facebook-maker showed
            off, actually. Horizon Worlds is one of the best examples of the
            kind of metaverse experiences Meta is building – it won’t just be
            something that works on VR headsets, but also on mobile apps,
            websites and with portals into existing apps like Facebook and
            Instagram.
          </p>
          <p class="author">David Lupus</p>
        </div>
      </router-link>

      <router-link to="/blog/5" class="cards">
        <img src="../assets/nftmoney.jpg" alt="" class="img" />
        <div class="text">
          <h6 class="title">How NFTs Create Value</h6>
          <p class="blurb">
            How much could a cluster of pixels possibly be worth? More
            pointedly, why is it worth anything at all? The explosion of NFTs
            and their accompanying marketplaces have left many baffled,
            incredulous, and deeply skeptical
          </p>
          <p class="author">Todd Duffy</p>
        </div>
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
  padding-top: 10rem;
}
router-link {
  text-decoration: none;
}
a {
  text-decoration: none;
}
.headings {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
}
.heading {
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 3rem;
  line-height: 60px;
  color: white;
  white-space: nowrap;
  text-align: center;
}
.subheading {
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 1.2rem;
  filter: opacity(0.7);
}
.container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
}
.cards {
  border: 3px solid white;
  width: 30rem;
  height: fit-content;
  background: white;
  color: black;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px 10px #00000021;
}
.cards:nth-child(3):hover {
  transform: perspective(30rem) rotatey(-10deg);
}
.cards:nth-child(1):hover {
  transform: perspective(30rem) rotatey(10deg);
}
.cards:nth-child(2):hover {
  transform: scale(1.05);
}
.cards:focus {
  transform: scale(0.85);
}
.img {
  width: 30rem;
  height: 15rem;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
}
.text {
  padding: 1rem;
}
.title {
  font-family: "Satoshi-Variable";
  font-weight: 800;
  color: rgb(0, 0, 0);
  font-size: 1.3rem;
  text-decoration: none;
  padding-bottom: 0.4rem;
}
.blurb {
  padding-bottom: 0.8rem;
  color: rgba(81, 81, 81, 0.833);
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 1rem;
}
.author {
  font-family: "Segoe UI";
  font-weight: 600;
  color: rgb(0, 0, 0);
}
</style>