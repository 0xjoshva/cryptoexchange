<template>
  <section>
    <div id="markets">
      <table>
        <h1>Cryptocurrencies</h1>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24H Change</th>
          <th>Market Cap</th>
          <th>Graph</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/crypto-icons-png/ethereum_state1.svg"
              alt=""
              class="cryptoicon"
            />
            <span class="name">Ethereum</span><span class="abv">ETH</span>
          </td>
          <td>R27 376</td>
          <td>+1.23%</td>
          <td id="column"><span>$192.994B</span><span>122.24M ETH</span></td>
          <td>
            <!-- graph -->
          </td>
          <td>
            <router-link to=""> Buy </router-link>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
<script>
export default {};
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
  border: 1px solid white;
}
#column {
  display: flex;
  flex-direction: column;
}
.cryptoicon {
  width: 2rem;
  filter: brightness(0%);
}
th {
  padding-right: 2rem;
}
td {
  padding-right: 1rem;
}
</style>