<template>
  <section id="blog">
    <div class="container">
      <span id="badge">Featured</span>
      <h6 class="header">
        Mark Zuckerberg responds to <br />
        graphics backlash <br />
      </h6>
      <div class="info">
        <p class="blurb">
          Horizon Worlds will look better than what the Facebook-maker showed
          off, actually. Horizon Worlds is one of the best examples of the kind
          of metaverse experiences Meta is building – it won’t just be something
          that works on VR headsets, but also on mobile apps, websites and with
          portals into existing apps like Facebook and Instagram.
        </p>
        <p class="author">
          <img src="../assets/memoji2.png" alt="" class="authorimg" /> David
          Lupus
        </p>
      </div>
    </div>
    <div class="news">
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
      <div v-for="blog in blogs" v-bind:key="blog.id" class="article" >
        <img v-bind:src="blog.image" alt="" />
        <div class="text">
          <h6 class="aheader">{{blog.title}}</h6>
          <p class="ablurb">
            {{blog.blurb}}
          </p>
          <p class="aauthor">
            <img src="../assets/memoji3.png" alt="" class="aauthorimg" /> {{blog.author}}
          </p>
        </div>
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
  height: 200vh;
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
  color: rgb(0, 0, 255);
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
</style>