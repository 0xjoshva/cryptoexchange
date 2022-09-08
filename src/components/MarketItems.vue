<template>
  <section>
    <!-- WIDGET -->
    <!-- <div
      style="
        height: 42px;
        background-color: #ffffff;
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid #56667f;
        border-radius: 4px;
        text-align: right;
        line-height: 14px;
        block-size: 42px;
        font-size: 12px;
        font-feature-settings: normal;
        text-size-adjust: 100%;
        padding: 1px;
        padding: 0px;
        margin: 0px;
        width: 100%;
      "
    >
      <div style="height: 40px; padding: 0px; margin: 0px; width: 100%">
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1522&invert_hover=no"
          width="100%"
          height="36px"
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          border="0"
          style="border: 0; margin: 0; padding: 0"
        ></iframe>
      </div>
      
    </div> -->
    <div v-if="cryptos" id="marketcon">
      <div id="markets">
        <!-- <h1>Cryptocurrencies</h1>
        <input type="search" />
        <button onclick="filteredCryptos()">S</button> -->
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-0lax">Name</th>
              <th class="tg-0lax">Price</th>
              <th class="tg-0lax">24H Change</th>
              <th class="tg-0lax">24H Volume</th>
              <th class="tg-0lax">Market Cap</th>
              <th class="tg-0lax">Graph</th>
              <th class="tg-0lax"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="crypto of cryptos"
              :key="crypto.crypto_id"
              :crypto="crypto"
            >
              <td class="name-container">
                <img v-bind:src="crypto.icon" alt="" class="icon" />
                <div class="name-wrapper">
                  <p class="name">{{ crypto.crypto_name }}</p>
                  <p class="abv">{{ crypto.abbreviation }}</p>
                </div>
              </td>
              <td>R {{ crypto.price }}</td>
              <td>+0.5%</td>
              <td>123123</td>
              <td>123123</td>
              <td>12321313</td>
              <td>
                <router-link
                  id="buybtn"
                  :to="{
                    name: 'MarketSingleView',
                    params: { id: crypto.crypto_id },
                  }"
                  >Buy</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else class="spinnerboxx">
      <svg
        role="status"
        class="spinner animation-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        ></path>
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: ["crypto_id", "crypto"],
  mounted() {
    this.$store.dispatch("getCryptos");
  },
  methods: {},
  computed: {
    cryptos() {
      return this.$store.state.cryptos;
    },
  },
};
</script>

<style scoped>
section {
  background: var(--bgcolor);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
}
#markets {
  height: fit-content;
  width: fit-content;
  background: white;
  border-radius: 20px;
  padding-top: 1rem;
}
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.name-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
}
img {
  width: 40px;
  height: 40px;
}
.name-wrapper {
  display: flex;
  flex-direction: column;
}
.name-wrapper p {
  font-family: "Segoe UI";
  font-weight: 500;
}
.abv {
  filter: opacity(0.6);
}
.tg td {
  font-family: "Segoe UI";
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  word-break: normal;
  font-size: 1rem;
  padding: 1rem;
  padding-left: 2rem;
}
tr {
  border-bottom: 1px solid rgba(221, 221, 221, 0.521);
  transition: background 0.3s ease-in-out;
}
tr:nth-last-of-type(1) {
  border-bottom: none;
  padding-bottom: 2rem;
}
tr:nth-last-of-type(1):hover {
  background-color: white;
  border-radius: 20px;
}
tr:hover {
  background-color: #bfd5ff1f;
}
.tg th {
  border-bottom: 1px solid rgba(221, 221, 221, 0.521);
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
  color: #aab0bd;
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 0.8rem;
  transition: 0.1s all ease-in-out;
  padding-right: 6rem;
  padding-left: 2rem;
}
.tg th:hover {
  color: #365fb3;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
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
.namerow {
  display: flex;
  column-gap: 1rem;
}

/* Spinner */
.spinner {
  color: rgb(229, 231, 235);
  height: 50px;
  width: 50px;
  fill: #1c64f2;
}

/* Animation Spin */
.animation-spin {
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.spinnerboxx {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
  align-items: center;
}
#buybtn {
  text-decoration: none;
  background: rgba(48, 115, 216, 0.116);
  padding: 0.4rem 1rem;
  border-radius: 5px;
  border: 3px solid rgba(48, 115, 216, 0);
  transition: 0.3s border ease-in-out;
}
#buybtn:hover {
  border: 3px solid rgba(48, 115, 216, 0.116);
}
#buybtn:focus {
  box-shadow: 0px 0px 0px 2px rgba(48, 115, 216, 0.5);
}
#marketcon {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}
</style>