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
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  display: flex;
  padding-bottom: 10rem;
  padding-top: 8rem;
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
</style>