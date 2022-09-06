import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: null,
    cryptos: null,
    blogs: null,
    url: "https://capstone-eomp.herokuapp.com/",
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setCryptos: (state, cryptos) => {
      state.cryptos = cryptos;
    },
    setCrypto: (state, crypto) => {
      state.crypto = crypto;
    },
    setBlogs: (state, blogs) => {
      state.blogs = blogs;
    },
    setBlog: (state, blog) => {
      state.blog = blog;
    },
  },
  actions: {
    getCryptos: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/cryptos")
        .then((response) => response.json())
        .then((json) => context.commit("setCryptos", json));
    },
    getCrypto: async (context) => {
      fetch(
        "https://capstone-eomp.herokuapp.com/cryptos/" + this.$route.params.id
      )
        .then((response) => response.json())
        .then((json) => context.commit("setCrypto", json));
    },
    getBlogs: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/blogs")
        .then((response) => response.json())
        .then((json) => context.commit("setBlogs", json));
    },
    getBlog: async (context) => {
      fetch(
        "https://capstone-eomp.herokuapp.com/blogs/" + this.$route.params.id
      )
        .then((response) => response.json())
        .then((json) => context.commit("setBlog", json));
    },
    signUp: async (context, payload) => {
      fetch("https://capstone-eomp.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          user_name: payload.user_name,
          email: payload.email,
          password: payload.password,
          phone_number: payload.phone_number,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  modules: {},
});
