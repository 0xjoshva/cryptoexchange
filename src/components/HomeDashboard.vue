<template>
  <section>
    <div class="text">
      <h1 class="header">Track your portfolio</h1>
      <p>With our analytics data you can keep track of your funds.</p>
      <p>
        This gives you insight to the amount you have spent and the amount of
        each crypto you own. <br />
        <br />
        To stay ahead of the curve, we continuously work on strengthening tide's
        functionality and we aim to be a leading platform for digital assets
        while expanding to our full potential.
      </p>
    </div>
      <img src="../assets/dash.png" alt="" />
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10rem;
  padding-top: 17rem;
}
.header {
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 3rem;
  color: black;
}
.text p {
  padding-bottom: 0.5rem;
  color: rgba(81, 81, 81, 0.833);
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 18px;
}
.text {
  background: white;
  float: left;
  width: 50rem;
  height: 30rem;
  padding: 4rem;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: -10px 10px 19px 10px #00000047;
  padding-left: 11rem;
  padding-right: 10rem;
}
img {
  width: 50vw;
}
</style>