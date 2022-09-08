<template>
  <section class="landing">
    <div class="text">
      <h1>
        Invest in cryptocurrency, <br />
        you wont regret it
      </h1>
      <p id="subheading">
        Buying cryptocurrency has never been easier. <br />
        Its as simple as point and click. <br />
      </p>
      <p>
        <span id="highlight">Emma</span> and
        <span id="highlight">16 others</span> have <br />
        already joined us...
      </p>
      <div class="users">
        <img class="user-item" src="../assets/memoji1.png" alt="" />
        <img class="user-item" src="../assets/memoji2.png" alt="" />
        <img class="user-item" src="../assets/memoji3.png" alt="" />
        <img class="user-item" src="../assets/memoji4.png" alt="" />
        <div class="user-item user-count">+</div>
      </div>
      <router-link to="/register" class="join">Get Started</router-link>
    </div>
    <img src="../assets/bitcoin.png" alt="" id="hero" />
    
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.landing {
  width: 100%;
  height: 100vh;
  background: var(--bgcolor);
  color: white;
  display: flex;
}
.text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 10rem;
  margin-top: -12rem;
}
.text h1 {
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 64px;
  line-height: 60px;
}
.text p {
  font-size: 16px;
  font-family: "Satoshi-Variable";
  font-weight: 600;
  color: #c5c5c5;
  padding-top: 1rem;
}
#hero {
  width: 1000px;
  height: fit-content;
  display: flex;
  align-self: center;
}
.join {
  width: fit-content;
  padding: 0.7rem 1.2rem;
  border: none;
  background: linear-gradient(
    90deg,
    #6a9dff -21.47%,
    rgba(107, 128, 170, 0) 153.21%
  );
  border-radius: 29px;
  color: white;
  padding: 0.6rem 1.9rem;
  font-family: "Satoshi-Variable";
  font-weight: 600;
  margin-top: 1.5rem;
  text-decoration: none;
  font-size: 22px;
  transition: all .2s linear;
}

.users {
  display: flex;
  width: fit-content;
}
.user-item {
  background: white;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin-right: -1.2rem;
  font-size: x-large;
  border: 5px solid var(--bgcolor);
  font-family: "Satoshi-Variable";
  color: var(--bgcolor);
  background-color: #ffffff;
  transition: all 0.2s linear;
}
.users:hover > .user-item {
  margin-right: -0.6rem;
}
#highlight {
  color: rgba(255, 255, 255, 0.918);
  text-decoration: underline;
}
#subheading {
  font-size: 22px;
  color: white;
  filter: opacity(0.7);
}
</style>