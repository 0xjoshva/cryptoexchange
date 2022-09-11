<template lang="">
  <section>
    <img src="../assets/phone.png" alt="" class="phone" />
    <div class="text">
      <h1 class="header">Trade on the go</h1>
      <p>
        No matter where you are, you can trade crypto on the go... <br />
        <br />
        Track your investment on the go, view prices of leading cryptocurrencies
        <br />
        like Ethereum, Bitcoin and Solana from home or at work. We go where you
        go, <br />
        we have worked hard on our companion app and would love for our loyal
        <br />
        customers to make use of it. <br />
        <br />
        Available on iOS and Android
      </p>
      <div class="icons">
        <img src="../assets/app-store.svg" alt="googleplay" id="appstore" />
        <img src="../assets/googleplay.svg" alt="appstore" id="googleplay" />
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
  display: flex;
  padding-bottom: 10rem;
  padding-top: 2rem;
}
#appstore {
  height: 54px;
  width: auto;
  margin-right: 0.5rem;
}
#googleplay {
  height: 54px;
  width: auto;
}
.icons {
  display: flex;
}
.phone {
  width: 50vw;
}
.text {
  float: right;
  background: white;
  width: 100%;
  height: 30rem;
  padding: 4rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: -10px 10px 19px 10px #00000047;
}
.header {
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 3rem;
  color: black;
}
.text p {
  padding-bottom: 0.5rem;
  color: rgba(81, 81, 81, 0.833);
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 18px;
  margin: 0 auto;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
  section {
    flex-direction: column-reverse;
  }
  .text {
    margin-left: 2rem;
  }
  .phone {
    width: 100vw;
    padding-top: 5rem;
  }
}
@media only screen and (max-width: 600px) {
  /*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
}
</style>