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
    <img src="../assets/Crypto-Dashboard.png" alt="" />
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
  width: 40vw;
  height: auto;
  object-fit: cover;
  object-position: left;
  margin-right: 3rem;
  border-radius: 3px;
  top: -4rem;
  position: relative;
  opacity: .9;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
  section{
    flex-direction: column;
  }
  .text{
    padding: 0;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-right: 1rem;
    margin: 2rem;
    padding-bottom: 2rem;
    height: 25rem;
    border-radius: 10px;
    width: 100%;
    padding-right: 3rem;
  }
}
@media only screen and (max-width: 600px) {
  /*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
}
</style>