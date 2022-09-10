<template>
  <section>
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
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {},
  computed: {
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
  width: 60rem;
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
  padding-right: 6rem;
  padding-left: 2rem;
}
th:hover {
  color: #365fb3;
}
table{
  border-collapse: collapse;
  border-spacing: 0;
}
tr{
  width: 60rem;
}
</style>