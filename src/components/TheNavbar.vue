<template>
  <nav>
    <router-link to="/" class="home"
      ><img src="../assets/logo.png" alt="" />
      <p>tide | exchange</p>
    </router-link>
    <div class="nav-links">
      <router-link to="/market-overview" class="nav-link"
        >Market Overview</router-link
      >
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/support" class="nav-link">Support</router-link>
      <div v-if="user.user_type === 'admin'">
        <router-link to="/admin" class="nav-link">Admin Panel</router-link>
      </div>
      <div v-if="user.user_type !== 'admin'"></div>
      <div v-if="user" id="accountdiv">
        <router-link to="Account" class="nav-link">{{
          user.user_name.charAt(0).toUpperCase() + user.user_name.slice(1)
        }}</router-link>
        <Button class="nav-link" @click="Logout()" id="logout-btn"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ff2825"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            />
            <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg
        ></Button>
      </div>
      <div v-else class="login-signup">
        <router-link to="/register" class="nav-link">Sign Up</router-link>
        <button
          id="login"
          class=""
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Login
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Sign in
                <label for="email"
                  >Email <br /><input
                    name="email"
                    type="email"
                    v-model="email"
                    required
                /></label>
                <label for="password"
                  >Password <br /><input
                    name="password"
                    type="password"
                    v-model="password"
                    required
                /></label>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="Login()"
                  data-bs-dismiss="modal"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Modal from "@/components/TheNavbarLoginModal.vue";
export default {
  components: {
    Modal,
  },
  props: ["user.user_id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });
    },
    Logout() {
      this.$store.commit("logout");
    },
  },
  mounted() {
    function activeLinks() {
      let navLinks = document.querySelector(".nav-link");
      navLinks.addEventListener("click", changeClass);
      function changeClass() {
        navLinks.classList.add("active");
      }
    }
    function capitalizeFirstLetter(user) {
      return user.user_name.charAt(0).toUpperCase() + user.user_name.slice(1);
    }
    capitalizeFirstLetter(user.user_name);
  },
};
</script>
<style scoped>
nav {
  height: 100px;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 100;
}
#login {
  border: none;
  outline: none;
  height: fit-content;
  width: fit-content;
  background: transparent;
  padding: 0.4rem 1.2rem;
  border: 2px solid var(--highlight);
  font-size: 16px;
  font-family: "Satoshi-Variable";
  color: white;
  border-radius: 26px;
  font-weight: 500;
}

.nav-link {
  font-size: 16px;
  font-family: "Satoshi-Variable";
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-links {
  display: flex;
  padding-right: 10rem;
}
.router-link-active {
  color: var(--highlight);
}
.home {
  padding-left: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
img {
  width: 60px;
  height: auto;
}
.home p {
  text-decoration: none !important;
  color: white;
  font-family: "Satoshi-Variable";
  font-size: 22px;
  font-weight: bold;
  white-space: nowrap;
  padding-left: 0.4rem;
}
.home a {
  text-decoration: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
}

#loginPass {
  width: 332px;
  height: 45px;
  border: 1px solid #555454;
  background: var(--bgcolor);
  border-radius: 4px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
}
#loginEmail {
  width: 332px;
  height: 45px;
  border: 1px solid #555454;
  background: var(--bgcolor);
  border-radius: 4px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
}
#loginEmail:focus,
#loginPass:focus {
  border: 1px solid var(--orange);
  outline: none;
}
.modal-backdrop {
  z-index: -2 !important;
}

.modal-backdrop {
  z-index: 0 !important;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
  .home p {
    display: none;
  }
  .home {
    padding-left: 3rem;
  }
  .nav-links {
    padding-right: 3rem;
  }
}
.login-signup {
  display: flex;
}
#logout-btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -1rem;
}
#accountdiv {
  display: flex;
}
</style>
