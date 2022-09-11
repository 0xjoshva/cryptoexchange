<template>
  <section v-if="user.user_type === 'admin'">
    <div class="container">
      <div class="blog-panel item"></div>
      <div class="transaction-panel item"></div>
    </div>

    <div class="user-panel">
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-0lax">#</th>
            <th class="tg-0lax">Username</th>
            <th class="tg-0lax">Email</th>
            <th class="tg-0lax">User Type</th>
            <th class="tg-0lax">Phone Number</th>
            <th class="tg-0lax">Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user of users" :key="user.user_id" :user="user">
            <td>{{ user.user_id }}</td>
            <td>{{ user.user_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.user_type }}</td>
            <td>{{ user.phone_number }}</td>
            <td>R {{ user.balance }}</td>
            <td>
              <button type="button" @click="deleteUser()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ff4500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7h16" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  <path d="M10 12l4 4m0 -4l-4 4" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section v-else>not authed</section>
</template>
<script>
export default {
  props: ["id"],
  mounted() {
    this.$store.dispatch("getUsers", this.$route.params.id);
  },
  methods: {
    deleteUser(id) {
      return this.$store.dispatch("deleteUser", id);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  background: var(--bgcolor);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 10.5rem;
  column-gap: 3rem;
}
.container {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
}
.item {
  width: 35rem;
  height: 20rem;
  border: 5px solid white;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px 0px #5f5f5f75;
}
.user-panel {
  width: 65rem;
  height: 43rem;
  border: 5px solid white;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px 0px #5f5f5f75;
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
  background-color: #bfd5ff1f;
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
  padding-right: 2rem;
  padding-left: 2rem;
  width: 100%;
  white-space: nowrap;
}
th:hover {
  color: #365fb3;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
tr {
  width: 60rem;
}
button {
  padding: 0;
  border: none;
  background: transparent;
}
</style>