<template>
  <section>
    <TheFooterWave />
    <div class="footer">
      <div class="container">
        <div class="flogo">
          <img src="../assets/logo2.png" alt="logo" /> tide | exchange
        </div>
      </div>

      <div class="container">
        <p class="header">Get Started</p>
        <router-link to="/support">About Us</router-link>
        <router-link to="/support">Support</router-link>
        <router-link to="/register">Register</router-link>
      </div>

      <div class="container">
        <p class="header">Buy/Trade</p>
        <router-link to="/market-overview" href="">Pricing</router-link>
        <router-link to="/crypto/1" href="">Buy Bitcoin</router-link>
        <router-link to="/crypto/2" href="">Buy Ethereum</router-link>
        <router-link to="/crypto/7" href="">Buy Solana</router-link>
        <router-link to="/crypto/5" href="">Buy Monero</router-link>
        <router-link to="/crypto/6" href="">Buy Dogecoin</router-link>
        <router-link to="/crypto/4" href="">Buy XRP</router-link>
        <router-link to="/crypto/3" href="">Buy BNB</router-link>
      </div>

      <div class="container">
        <p class="header">Social</p>
        <router-link to="/blog" href="">Blog</router-link>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="payment">
        <img src="../assets/visa.svg" alt="" class="pmethod visa" />
        <img src="../assets/mastercard.svg" alt="" class="pmethod" />
        <img src="../assets/amex.svg" alt="" class="pmethod" />
      </div>
      <p>© 2022 Joshua Steed, All Rights Reserved</p>
      <div>
        <a href=""
          ><img src="../assets/googleplay.svg" alt="" class="googleplay"
        /></a>
        <a href="">
          <img src="../assets/app-store.svg" alt="" class="appstore"
        /></a>
      </div>
    </div>
  </section>
</template>
<script>
import TheFooterWave from "./TheFooterWave.vue";
export default { components: { TheFooterWave } };
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  background: white;
}
.footer {
  padding-top: 2rem;
  width: 100%;
  display: flex;
  padding-bottom: 2rem;
  justify-content: flex-start;
}
.container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 11.5rem;
  padding-right: 11.5rem;
}
.flogo {
  white-space: nowrap;
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 1.2rem;
}
.flogo img {
  height: 35px;
}
.container a {
  width: fit-content;
}
.header {
  font-family: "Segoe UI";
  color: black;
  font-weight: 600;
  width: fit-content;
}
.container a {
  text-decoration: none;
  color: rgb(93, 120, 183);
  font-family: "Segoe UI";
}
.container a:hover {
  color: rgb(13, 67, 191);
}
.googleplay {
  height: 35px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.appstore {
  height: 35px;
  margin-left: 0.2rem;
}
.payment img {
  margin-left: 0.2rem;
  width: 40px;
}
.bottom-bar p {
  font-family: "Segoe UI";
  color: rgb(89, 90, 143);
  font-weight: 00;
  width: fit-content;
}
.pmethod {
  border-radius: 2px;
  border: 1px solid rgb(194, 194, 194);
}
</style>