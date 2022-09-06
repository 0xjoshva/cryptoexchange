<template>
  <section>
    <div v-if="cryptos">
      <div id="markets">
        <h1>Cryptocurrencies</h1>
        <input type="search" />
        <button onclick="filteredCryptos()">S</button>
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-0lax">Name</th>
              <th class="tg-0lax"></th>
              <th class="tg-0lax"></th>
              <th class="tg-0lax">Price</th>
              <th class="tg-0lax">24H Change</th>
              <th class="tg-0lax">Market Cap</th>
              <th class="tg-0lax">Graph</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="crypto of cryptos"
              :key="crypto.crypto_id"
              :crypto="crypto"
            >
              <td class="tg-0lax"><img v-bind:src="crypto.icon" alt="" /></td>
              <td class="tg-0lax">{{ crypto.crypto_name }}</td>
              <td class="tg-0lax">{{ crypto.abbreviation }}</td>
              <td class="tg-0lax">R {{ crypto.price }}</td>
              <td class="tg-0lax">+0.5%</td>
              <td class="tg-0lax">123123</td>
              <td class="tg-0lax">12321313</td>
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
export default {
  props: ["crypto_id"],
  mounted() {
    this.$store.dispatch("getCryptos");
  },
  methods: {},
  computed: {
    cryptos() {
      return this.$store.state.cryptos;
    },
    filteredCryptos() {
      return this.$store.state.cryptos?.filter((crypto) => {
        let isMatch = true;
        if (
          !crypto.crypto_name
            ?.toLowerCase()
            .includes(this.searchTitle.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.categoryFilter !== "All" &&
          piece.category !== this.categoryFilter
        ) {
          isMatch = false;
        }
        return isMatch;
      });
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
  padding-top: 10rem;
}
#markets {
  height: fit-content;
  width: fit-content;
  background: white;
  padding: 3rem;
  border-radius: 20px;
}
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
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
img {
  width: 32px;
  height: 32px;
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
</style>