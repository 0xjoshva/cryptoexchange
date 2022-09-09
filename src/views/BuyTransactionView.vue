<template lang="">
  <section>
    <form action="">
      <select name="" id="">
        <option
          v-bind:value="crypto.abbreviation"
          v-for="crypto of cryptos"
          :key="crypto.crypto_id"
          :crypto="crypto"
        >
         {{ crypto.crypto_name }}
        </option>
      </select>
      <input type="number" min="50" max="1000">
      <button type="submit">Buy</button>
    </form>
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
    section{
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items:center;
    }
</style>