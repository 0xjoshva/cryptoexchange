import { nullLiteral } from "@babel/types";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    url: "https://capstone-eomp.herokuapp.com/",
    cryptos: null,
  },
  getters: {},
  mutations: {
    setCryptos: (state, cryptos) => {
      state.cryptos = cryptos;
    }
  },
  actions: {
    getCryptos: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/cryptos")
        .then((response) => response.json())
        .then((json) => context.commit("setCryptos", json));
    },
  },
  modules: {},
});
