<template>
  <nav>
    <router-link to="/" class="home"
      ><img src="../assets/logo.png" alt="" /> tide | exchange</router-link
    >
    <div class="nav-links">
      <router-link to="/market-overview" class="nav-link">Markets</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/support" class="nav-link">Support</router-link>
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
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <input type="email" id="loginEmail" placeholder="Email" />
                <input type="password" id="loginPass" placeholder="Password" />
                <button data-bs-dismiss="modal">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
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
.home {
  padding-left: 10rem;
}
img {
  width: 60px;
  height: auto;
}
.home {
  text-decoration: none;
  color: white;
  font-family: "Satoshi-Variable";
  font-size: 22px;
  font-weight: bold;
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
</style>