<template>
  <section id="section">
    <div v-if="cryptos" class="item">
      <p>{{ cryptos.info }}</p>

      <div
        style="
          width: 250px;
          height: 220px;
          background-color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
          border: 1px solid #56667f;
          border-radius: 4px;
          text-align: right;
          line-height: 14px;
          block-size: 220px;
          font-size: 12px;
          font-feature-settings: normal;
          text-size-adjust: 100%;
          box-shadow: inset 0 -20px 0 0 #56667f;
          padding: 1px;
          padding: 0px;
          margin: 0px;
        "
      >
        <div style="height: 200px; padding: 0px; margin: 0px; width: 100%">
          <iframe
            src="https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505"
            width="250"
            height="196px"
            scrolling="auto"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
            border="0"
            style="border: 0; margin: 0; padding: 0; line-height: 14px"
          ></iframe>
        </div>
        <div
          style="
            color: #ffffff;
            line-height: 14px;
            font-weight: 400;
            font-size: 11px;
            box-sizing: border-box;
            padding: 2px 6px;
            width: 100%;
            font-family: Verdana, Tahoma, Arial, sans-serif;
          "
        >
          
        </div>
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
  <TheFooter />
</template>
<script>
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
  props: ["id"],
  mounted() {
    this.$store.dispatch("getCrypto", this.$route.params.id);
  },
  methods: {},
  computed: {
    cryptos() {
      return this.$store.state.crypto;
    },
  },
};
</script>
<style scoped>
#section {
  height: 100vh;
  width: 100%;
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
  height: 100vh;
  align-items: center;
}
.single-widget-header {
  display: none !important;
}
</style>