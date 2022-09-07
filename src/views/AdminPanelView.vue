<template>
  <section>
    <div class="container">
      <div class="blog-panel item"></div>
      <div class="transaction-panel item"></div>
    </div>

    <div class="user-panel"></div>
  </section>
</template>
<script>
export default {};
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
</style>