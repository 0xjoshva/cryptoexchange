<template lang="">
  <section>
    <img src="../assets/phone.png" alt="" class="phone" />
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
}
#appstore {
  height: 54px;
  width: auto;
}
#googleplay {
  height: 80px;
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
  transform: rotateY(180deg), translateY(-10px);

}

.custom-shape-divider-bottom-1662370420 .shape-fill {
  fill: #ffffff;
}
</style>