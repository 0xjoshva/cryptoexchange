import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    cryptos: null,
    blogs: null,
    url: "https://capstone-eomp.herokuapp.com/",
  },
  getters: {},
  mutations: {
    logout(state) {
      (state.user = ""),
        (state.token = ""),
        (state.users = "");
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
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
    Login: async (context, payload) => {
      fetch(`https://capstone-eomp.herokuapp.com/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            context.commit("setToken", data.token);

            // verify
            fetch(`https://capstone-eomp.herokuapp.com/users/users/verify`, {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                context.commit("setUser", data.user);
                alert(data.user.email);
              });
          }
        });
    },

    getCryptos: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/cryptos")
        .then((response) => response.json())
        .then((json) => context.commit("setCryptos", json));
    },
    getCrypto: async (context, id) => {
      fetch("https://capstone-eomp.herokuapp.com/cryptos/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setCrypto", data[0]);
        });
    },
    getBlogs: async (context) => {
      fetch("https://capstone-eomp.herokuapp.com/blogs")
        .then((response) => response.json())
        .then((json) => context.commit("setBlogs", json));
    },
    getBlog: async (context, id) => {
      fetch("https://capstone-eomp.herokuapp.com/blogs/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setBlog", data[0]);
        });
    },
    signUp: async (context, payload) => {
      fetch("https://capstone-eomp.herokuapp.com/users/register/", {
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
  plugins: [createPersistedState()],
});
