<template>
  <section>
    
    <div class="footer">
      <div class="flogo"><img src="../assets/logo2.png" alt="logo" /> tide | exchange</div>
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
        <p class="header">Get Started</p>
        <a href="">Support</a>
        <a href="">Register</a>
        <a href="">Login</a>
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
      <p>© 2022 Joshua Steed, All Rights Reserved</p>
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
}
.footer {
  display: flex;
}
.container {
  display: flex;
  flex-direction: column;
}
.bottom-bar {
  display: flex;
  justify-content: center;
}
</style>