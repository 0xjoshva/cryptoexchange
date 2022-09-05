<template>
  <section>
    <div class="footer">
      <div class="container">
        <div class="flogo">
          <img src="../assets/logo2.png" alt="logo" /> tide | exchange
        </div>
      </div>

      <div class="container">
        <p class="header">Get Started</p>
        <a href="">Support</a>
        <a href="">Register</a>
        <a href="">Login</a>
      </div>

      <div class="container">
        <p class="header">Buy/Trade</p>
        <a href="">Pricing</a>
        <a href="">Buy Bitcoin</a>
        <a href="">Buy Ethereum</a>
        <a href="">Buy Solana</a>
        <a href="">Buy Monero</a>
        <a href="">Buy XRP</a>
      </div>

      <div class="container">
        <p class="header">Social</p>
        <a href="">Blog</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="payment">
        <img src="../assets/visa.svg" alt="" />
        <img src="../assets/mastercard.svg" alt="" />
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
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  background: white;
  padding-top: 2rem;
}
.footer {
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
  font-weight: 600;
  width: fit-content;
}
</style>