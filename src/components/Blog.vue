<template>
  <section id="blog">
    <div v-if="blogs" class="bigcontainer">
      <router-link to="/blog/3" class="container">
        <span id="badge">Featured</span>
        <h6 class="header">
          Mark Zuckerberg responds to <br />
          graphics backlash <br />
        </h6>
        <div class="info">
          <p class="blurb">
            Horizon Worlds will look better than what the Facebook-maker showed
            off, actually. Horizon Worlds is one of the best examples of the
            kind of metaverse experiences Meta is building – it won’t just be
            something that works on VR headsets, but also on mobile apps,
            websites and with portals into existing apps like Facebook and
            Instagram.
          </p>
          <p class="author">
            <img src="../assets/memoji2.png" alt="" class="authorimg" /> David
            Lupus
          </p>
        </div>
      </router-link>
      <h1 class="headline">
        Trending News
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-trending-up"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="14 7 21 7 21 14" />
        </svg>
      </h1>

      <div v-for="blog in blogs" v-bind:key="blog.id" blog="blog" class="article">
        <router-link :to="{ name: 'BlogSingleView', params: { id: blog.id } }">
          <img v-bind:src="blog.image" alt="" />
          <div class="text">
            <h6 class="aheader">{{ blog.title }}</h6>
            <p class="ablurb">
              {{ blog.blurb }}
            </p>
            <p class="aauthor">
              <img src="../assets/memoji3.png" alt="" class="aauthorimg" />
              {{ blog.author }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="spinnerboxx">
      <svg
        role="status"
        class="spinner animation-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        ></path>
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        ></path>
      </svg>
    </div>
  </section>
  <div class="custom-shape-divider-top-1662369584">
    <div class="custom-shape-divider-top-1662369798">
      <div class="custom-shape-divider-bottom-1662370420">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "blog"],
  mounted() {
    this.$store.dispatch("getBlogs");
  },
  methods: {},
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>
<style scoped>
#blog {
  width: 100%;
  height: fit-content;
  background: var(--bgcolor);
  color: white;
  padding-top: 7rem;
  padding-bottom: 12rem;
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
  transition: all 0.3s ease-in-out;
}
.container:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 0.09);
}
.info {
  background: rgb(255, 255, 255);
  width: 25rem;
  height: fit-content;
  border-radius: 20px;
  margin-top: auto;
  filter: opacity(0.94);
  transition: 0.2s all ease-in-out;
  box-shadow: 0px 0px 2px 1px white;
  color: black;
  padding: 1rem;
}
.info:hover {
  filter: opacity(1);
}
.header {
  color: white;
  font-family: "Satoshi-Variable";
  font-size: 3rem;
  font-weight: 700;
  backdrop-filter: blur(2px);
  width: fit-content;
  box-shadow: 0px 0px 2px 3px transparent;
}
.blurb {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.699);
  padding-bottom: 1.5rem;
  color: rgb(43, 43, 43);
}
.author {
  font-family: "Segoe UI";
  font-weight: 600;
  color: black;
}
.authorimg {
  width: 35px;
  border-radius: 50%;
}

.article {
  display: flex;
  margin: 0 auto;
  height: 21rem;
  max-height: fit-content;
  width: 69vw;
  transition: 0.3s all ease-in-out;
  margin-bottom: 3rem;
  color: black;
}
.article:hover {
  transform: translateX(3rem);
  cursor: pointer;
}

.article img {
  width: 40rem;
  border-top-left-radius: 26px;
  border-bottom-left-radius: 26px;
  object-fit: cover;
  border: 5px solid white;
  object-position: top;
}
.text {
  background: white;
  width: 100%;
  height: 100%;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  padding: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.news {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.headline {
  padding-top: 7rem;
  padding-bottom: 2rem;
  width: 69vw;
  font-family: "Satoshi-Variable";
  font-size: 2rem;
  font-weight: 500;
}
.aheader {
  font-family: "Satoshi-Variable";
  font-weight: 800;
  color: rgb(0, 0, 0);
  font-size: 2rem;
  padding-top: 1rem;
}
.ablurb {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.699);
  padding-bottom: 1.5rem;
  color: rgb(43, 43, 43);
  padding-top: 1rem;
}
.aauthor {
  font-family: "Segoe UI";
  font-weight: 600;
  color: rgb(0, 0, 0);
}
.aauthor img {
  width: 55px;
  height: auto;
  border-radius: 50%;
}
#badge {
  background: var(--highlight);
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 5px;
  width: fit-content;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 500;
}
.custom-shape-divider-bottom-1662370420 {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1662370420 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 78px;
  transform: rotateY(180deg), translateY(-1px);
}

.custom-shape-divider-bottom-1662370420 .shape-fill {
  fill: #ffffff;
}

/* Spinner */
.spinner {
  color: rgb(229, 231, 235);
  height: 50px;
  width: 50px;
  fill: #1c64f2;
}

/* Animation Spin */
.animation-spin {
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.spinnerboxx {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
  align-items: center;
}
.bigcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
a{
  text-decoration: none;
  display: flex;
}
</style>