<template>
  <section>
    <div v-if="user" class="section">
      <div class="wrapper">
        <div class="transactions">
          <table>
            <tr id="headers">
              <th>#</th>
              <th>Amount</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>User #</th>
            </tr>
          </table>
        </div>
        <div class="account">
          <div id="img-div">
            <img src="../assets/memoji2.png" class="pfp" alt="" />
            <div id="user-details">
              <p>
                {{
                  user.user_name.charAt(0).toUpperCase() +
                  user.user_name.slice(1)
                }}
              </p>
              <p>{{ user.user_type }}</p>
            </div>
          </div>
          <div class="details">
            <p>
              {{
                user.user_name.charAt(0).toUpperCase() + user.user_name.slice(1)
              }}
            </p>
            <p>{{ user.email }}</p>
            <p>{{ user.user_type }}</p>
            <p>{{ user.phone_number }}</p>
            <div class="buttons">
              <button class="btn-primary btn" @click="Logout()">Logout</button>
              <button class="btn-danger btn">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper2"></div>
    </div>
    <div v-else class="warning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-alert-triangle"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9v2m0 4v.01" />
        <path
          d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"
        />
      </svg>
      <p>Unauthorized access!</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ["user.user_id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    Logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  mounted() {
    function guestAlert() {
      if (!user) {
        alert("You need to be logged in to access this page!");
      }
      guest;
    }
  },
};
</script>
<style scoped>
section {
  width: 100%;
  height: 100vh;
}
.section {
  background: var(--bgcolor);
  color: black;
  font-family: "Satoshi-Variable";
  display: flex;
  align-items: flex-end;
  justify-content: center;
  column-gap: 2rem;
  padding-top: 3rem;
}
.container {
  background: 1px solid white;
  width: 30rem;
  height: fit-content;
  z-index: 3;
}
.pfp {
  border-radius: 50%;
  border: 10px solid var(--bgcolor);
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  object-position: center;
}
.details {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  padding-top: 5rem;
  width: 30rem;
}
#img-div {
  position: relative;
  top: 4rem;
  display: flex;
  align-items: center;
  color: white;
  height: min-content;
}
#user-details {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1rem;
}
#img-div p {
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.3rem;
}
#img-div p:nth-last-child(1) {
  font-weight: 100;
  font-size: 1rem;
}
.buttons {
  display: flex;
  column-gap: 1rem;
  padding-top: 1rem;
}
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  width: 30rem;
  row-gap: 1rem;
  padding-left: 1rem;
  height: fit-content;
}
.transactions {
  width: 30rem;
  background: white;
  height: 30rem;
  border-radius: 20px;
  overflow-y: hidden;
}
.wrapper2 {
  height: 76.5vh;
  width: 80rem;
  background: white;
  border-radius: 20px;
}
th {
  border-bottom: 1px solid rgba(221, 221, 221, 0.521);
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  word-break: normal;
  color: #aab0bd;
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 0.8rem;
  transition: 0.1s all ease-in-out;
  white-space: nowrap;
  width: 100%;
  padding: 10px 24px;
}

th:hover {
  color: #365fb3;
}
#headers {
  width: 100%;
  padding-right: 1rem;
}
.warning {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.warning p {
  color: white;
  font-weight: bold;
  font-family: "Satoshi-Variable";
  font-size: 1.4rem;
  padding-left: 1rem;
}
</style>
