import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    cryptos: null,
    blogs: null,
    url: "https://capstone-eomp.herokuapp.com/",
  },
  getters: {},
  mutations: {
    setCryptos: (state, cryptos) => {
      state.cryptos = cryptos;
    },
    setBlogs: (state, blogs) => {
      state.blogs = blogs;
    },
  },
  actions: {
    getCryptos: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/cryptos")
        .then((response) => response.json())
        .then((json) => context.commit("setCryptos", json));
    },
    getBlogs: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/blogs")
        .then((response) => response.json())
        .then((json) => context.commit("setBlogs", json));
    },
  },
  modules: {},
});
