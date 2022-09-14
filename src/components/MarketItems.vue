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
              <td class="daychange">{{ crypto.daychange }}%</td>
              <td>R {{ crypto.dayvolume }}</td>
              <td>R {{ crypto.marketcap }}</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="146"
                  height="30"
                >
                  <polyline
                    points=" 0,29.852006978575794 0.9668874172185431,29.5976513798639 1.9337748344370862,29.63913952449692 2.9006622516556293,29.958655672582836 3.8675496688741724,30 4.8344370860927155,29.393447686841302 5.801324503311259,29.123593888563505 6.768211920529802,28.940285061510195 7.735099337748345,28.834573298340857 8.701986754966889,28.03152069447853 9.668874172185431,27.76241641181467 10.635761589403973,27.934081256487513 11.602649006622517,25.000229148555103 12.569536423841061,24.917835220759752 13.536423841059603,25.669694465984787 14.503311258278146,25.305129401447193 15.47019867549669,25.668728712084352 16.437086092715234,26.35052313901754 17.403973509933778,26.25728350187426 18.370860927152318,25.379312929183573 19.337748344370862,25.657893512793514 20.304635761589406,26.18745862551693 21.271523178807946,26.814427082248816 22.23841059602649,26.434777685006367 23.205298013245034,25.73913864821206 24.17218543046358,25.416534925447387 25.139072847682122,26.935845689008474 26.105960264900663,25.355313111882147 27.072847682119207,25.60947470161775 28.03973509933775,26.056703359169198 29.00662251655629,26.321562600418794 29.973509933774835,26.48508676909841 30.94039735099338,25.97896641063549 31.907284768211923,25.319215395203695 32.87417218543047,25.467885501130745 33.84105960264901,25.791452115311348 34.807947019867555,25.51140624165862 35.77483443708609,25.16430241345664 36.741721854304636,25.357549630988856 37.70860927152318,24.671266320983456 38.675496688741724,18.404903826586434 39.64238410596027,16.18770577396434 40.60927152317881,14.761039269502206 41.576158940397356,15.417549577840454 42.54304635761589,14.559466962981048 43.50993377483444,14.47865737329875 44.47682119205298,11.886965930045179 45.443708609271525,12.4115250788102 46.41059602649007,12.183001956722258 47.37748344370861,12.406145929091117 48.34437086092716,10.948335273167842 49.3112582781457,10.637329143065234 50.278145695364245,10.590358143928935 51.24503311258278,11.22667579405357 52.211920529801326,10.3198223614236 53.17880794701987,10.542408948003473 54.145695364238414,10.389593005718407 55.11258278145696,9.549602102979968 56.0794701986755,10.689770960912433 57.046357615894046,10.176591455846616 58.01324503311258,10.583060288515902 58.980132450331126,9.786935146581587 59.94701986754967,9.08000782384617 60.913907284768214,8.298384565154862 61.88079470198676,8.524038903305115 62.8476821192053,9.875244159601817 63.814569536423846,9.800397689498656 64.78145695364239,10.000609939125972 65.74834437086093,10.113611896685189 66.71523178807948,10.359134302509336 67.68211920529802,11.163023225209646 68.64900662251657,10.641934520325101 69.61589403973511,10.948663830701342 70.58278145695364,10.011274284443882 71.54966887417218,9.578600989883348 72.51655629139073,8.452484334154605 73.48344370860927,8.538800733016544 74.45033112582782,8.590016570404714 75.41721854304636,6.688932722287557 76.3841059602649,7.464399002935419 77.35099337748345,8.27643620015358 78.31788079470199,7.928033098604178 79.28476821192054,8.330386536805289 80.25165562913908,7.786146079884489 81.21854304635762,8.000417952892253 82.18543046357617,9.220634460648458 83.15231788079471,7.729165216076947 84.11920529801326,7.292665559226823 85.08609271523179,7.805002688541311 86.05298013245033,7.585409282706735 87.01986754966887,7.854753696693436 87.98675496688742,8.14679884616271 88.95364238410596,8.794524987534363 89.9205298013245,7.148543987832678 90.88741721854305,7.2949111690909945 91.8543046357616,7.244583307650565 92.82119205298014,8.26676995920991 93.78807947019868,7.719467542832071 94.75496688741723,6.971732590716318 95.72185430463577,7.457850804424819 96.68874172185431,7.49515312391193 97.65562913907286,6.690592248394264 98.6225165562914,4.33755820920878 99.58940397350995,6.335121478518744 100.55629139072849,7.409013882782684 101.52317880794702,6.987663820115909 102.49006622516556,6.8653408910838 103.45695364238411,5.4960078313967315 104.42384105960265,3.477137770417748 105.3907284768212,3.3155193251961066 106.35761589403974,3.6113537378497504 107.32450331125828,2.075534841537408 108.29139072847683,2.037146448178106 109.25827814569537,1.7547106392706766 110.22516556291392,2.4044075971170997 111.19205298013246,4.172548139884768 112.158940397351,2.895307824147668 113.12582781456955,2.5345610718277705 114.09271523178809,1.6749678753861126 115.05960264900664,1.4871580585613522 116.02649006622516,1.5555065578936542 116.99337748344371,2.3021235620878926 117.96026490066225,1.7026060558966343 118.9271523178808,2.6956275496659217 119.89403973509934,4.039514372832013 120.86092715231788,3.2090005885394888 121.82781456953643,2.0911138197158756 122.79470198675497,1.6773231310098247 123.76158940397352,1.8605579909591299 124.72847682119206,2.703817090359191 125.6953642384106,2.9867763478667655 126.66225165562915,1.9089099889138659 127.62913907284769,0.34794458520442717 128.59602649006624,0 129.56291390728478,9.851262029083593 130.52980132450332,10.917145017603936 131.49668874172187,13.305077171083251 132.4635761589404,14.239398830708883 133.43046357615896,14.373902766143207 134.3973509933775,18.124826636846162 135.36423841059604,17.92459958209514 136.3311258278146,18.716599181389977 137.29801324503313,19.073926138245355 138.26490066225168,18.954791447235767 139.23178807947022,18.843471182987727 140.19867549668874,18.291257208959163 141.16556291390728,16.8442097692476 142.13245033112582,17.81777369772903 143.09933774834437,17.500202347960627 144.0662251655629,18.036256768404 145.03311258278146,17.9497176198782"
                    stroke="#1bc4ad"
                    stroke-linecap="round"
                    stroke-width="1.4"
                    fill="none"
                  ></polyline>
                </svg>
              </td>
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
td {
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
  background-color: #bfd5ff52;
}
th {
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
th:hover {
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
.daychange{
  color: red;
}
</style>