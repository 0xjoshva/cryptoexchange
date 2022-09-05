<template lang="">
  <section>
    <img src="../assets/phone.png" alt="" class="phone"/>
    <div>
      <h1>Buy/Trade wherever</h1>
      <p>no matter where you are, you can trade crypto</p>
      <p>
        track your investment on the go, view prices of leading cryptocurrencies
        like Ethereum, Bitcoin and Solana from home or at work.
      </p>
      <p>Available on iOS and Android</p>
      <div class="icons">
        <img src="../assets/app-store.svg" alt="googleplay" id="appstore" />
        <img src="../assets/google-play.png" alt="appstore" id="googleplay" />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
  section{
    width: 100%;
    height: fit-content;
    display: flex;
  }
#appstore {
  height: 54px;
  width: auto;
}
#googleplay {
  height: 80px;
  width: auto;

}
.icons{
  display: flex;
}
.phone{
  width: 50vw;
}
</style>