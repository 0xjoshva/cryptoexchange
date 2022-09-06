<template>
  <section>
    <div id="markets">
      <h1>Cryptocurrencies</h1>
      <input type="search" />
      <button>S</button>
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
          <div v-if="cryptos">
            <tr v-for="crypto of cryptos" :key="crypto.crypto_id" :crypto="crypto">

              <td class="tg-0lax"><img v-bind:src="crypto.icon" alt="" /></td>
              <td class="tg-0lax">{{ crypto.crypto_name }}</td>
              <td class="tg-0lax">{{ crypto.abbreviation }}</td>
              <td class="tg-0lax">R {{ crypto.price }}</td>
              <td class="tg-0lax">+0.5%</td>
              <td class="tg-0lax">123123</td>
              <td class="tg-0lax">12321313</td>
            </tr>
          </div>
        </tbody>
      </table>
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
  methods: {},
  mounted() {
    this.$store.dispatch("getCryptos");
  },
  cryptos() {
    return this.$store.state.cryptos;
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
</style>