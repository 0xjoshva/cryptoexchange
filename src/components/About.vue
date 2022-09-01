<template>
  <section class="about">
    <div class="custom-shape-divider-top-1662031929">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="text">
      <h3>Build your digital asset portfolio with ease</h3>
      <p>
        Choose from a growing list of 6 different cryptocurrencies, all at your
        own time and in the comfort of your own home. Get the best service you
        could possible imagine only with us, boasting 24/7 realtime support all
        across the globe
      </p>
      <div class="container">
        <div class="cards"></div>
        <div class="cards"></div>
        <div class="cards"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.custom-shape-divider-top-1662031755 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662031929 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662031929 svg {
  position: relative;
  display: block;
  width: calc(118% + 1.3px);
  height: 140px;
}

.custom-shape-divider-top-1662031929 .shape-fill {
  fill: #192185;
}

.about {
  background: #3299f6;
  height: fit-content;
  width: 100%;
  padding-bottom: 6rem;
}

.icons {
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.row1 {
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;
}
.row1 > img {
  width: 50px;
  height: 50px;
}
.row2 {
  display: flex;
  column-gap: 1rem;
  display: none;
}
.row2 > img {
  width: 50px;
  height: 50px;
}
.container {
  width: 50%;
  display: flex;
  column-gap: 3rem;
  padding-top: 4rem;
}
.cards {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 300px;
  height: 270px;
  box-shadow: 20px 17px 0px 0px white;
}
.text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
}
.text p {
  color: white;
  font-family: "Satoshi-Variable";
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  width: 40%;
  margin: 0 auto;
}
h3 {
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 44px;
  line-height: 60px;
  color: white;
  white-space: nowrap;
  text-align: center;
}
.bigcontainer {
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
}
</style>

<!-- <div class="bigcontainer">
        <div class="container">
          <div class="icons">
            <div class="row1">
              <img src="../assets/about/bitcoin_state2.svg" alt="" />
              <img src="../assets/about/ethereum_state1.svg" alt="" />
              <img src="../assets/about/solana_state2.svg" alt="" />
            </div>
          </div>
          <div class="text">
            <h3>Bitcoin <span>BTC</span></h3>
            <p>
              Bitcoin is one of the most popular cryptocurrencies in the market.
              First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the
              crypto market’s number one spot according to market
              capitalization. Bitcoin paved the way for many existing altcoins
              in the market and marked a pivotal moment for digital payment
              solutions.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="icons">
            <div class="row1">
              <img src="../assets/about/bitcoin_state1.svg" alt="" />
              <img src="../assets/about/ethereum_state2.svg" alt="" />
              <img src="../assets/about/solana_state2.svg" alt="" />
            </div>
          </div>
          <div class="text">
            <h3>Ethereum <span>ETH</span></h3>
            <p>
              Bitcoin is one of the most popular cryptocurrencies in the market.
              First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the
              crypto market’s number one spot according to market
              capitalization. Bitcoin paved the way for many existing altcoins
              in the market and marked a pivotal moment for digital payment
              solutions.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="icons">
            <div class="row1">
              <img src="../assets/about/bitcoin_state1.svg" alt="" />
              <img src="../assets/about/ethereum_state1.svg" alt="" />
              <img src="../assets/about/solana_state1.svg" alt="" />
            </div>
          </div>
          <div class="text">
            <h3>Solana <span>SOL</span></h3>
            <p>
              Bitcoin is one of the most popular cryptocurrencies in the market.
              First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the
              crypto market’s number one spot according to market
              capitalization. Bitcoin paved the way for many existing altcoins
              in the market and marked a pivotal moment for digital payment
              solutions.
            </p>
          </div>
        </div>
      </div> -->