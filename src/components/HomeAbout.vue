<template>
  <section class="about">
    <div class="custom-shape-divider-top-1662031929">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="text">
      <h3 class="title">Tide is a crypto exchange for everyone</h3>
      <p class="subheading">
        Choose from a growing list of 7 different cryptocurrencies, and pay with
        your bank card
      </p>
      <div class="container">
        <div class="cards">
          <h1 class="header">50+</h1>
          <p class="content">
            Countries
          </p>
      
        </div>
        <div class="cards">
          <h1 class="header">24/7</h1>
          <p class="content">
            Customer support
          </p>
        </div>
        <div class="cards">
          <h1 class="header">4K+</h1>
          <p class="content">
            Users
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="custom-shape-divider-top-1662401280">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.custom-shape-divider-top-1662031755 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662031929 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662031929 svg {
  position: relative;
  display: block;
  width: calc(118% + 1.3px);
  height: 140px;
}

.custom-shape-divider-top-1662031929 .shape-fill {
  fill: #192185;
}

.about {
  background: rgb(243, 243, 243);
  height: fit-content;
  width: 100%;
  padding-bottom: 10rem;
}

.icons {
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.row1 {
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;
}
.row1 > img {
  width: 50px;
  height: 50px;
}
.row2 {
  display: flex;
  column-gap: 1rem;
  display: none;
}
.row2 > img {
  width: 50px;
  height: 50px;
}
.container {
  width: fit-content;
  display: flex;
  column-gap: 20rem;
  padding-top: 4rem;
}
.cards {
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  transition: 0.4s all ease-in-out;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
}
.subheading {
  color: rgba(81, 81, 81, 0.833);
  font-family: "Satoshi-Variable";
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  width: 50%;
  margin: 0 auto;
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 1.2rem;
}
.title {
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 3rem;
  line-height: 60px;
  color: var(--bgcolor);
  white-space: nowrap;
  text-align: center;
  white-space: nowrap;
  text-align: center;
}
.content {
  padding-bottom: 0.5rem;
  color: rgba(81, 81, 81, 0.833);
  font-family: "Satoshi-Variable";
  font-weight: 500;
  font-size: 18px;
  margin: 0 auto;
  padding-right: 0.5rem;
}
.header {
  font-family: "Satoshi-Variable";
  font-weight: 700;
  font-size: 3.5rem;
  color: var(--bgcolor);
  padding-bottom: 0.3rem;
}
.debitcredit {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.visa {
  width: 100px;
  background: rgba(255, 255, 255, 0.534);
  border-radius: 50%;
  padding: 1rem;
  margin-left: -1rem;
  box-shadow: 0px 0px 2px 1px rgba(22, 22, 22, 0.212);
  z-index: 0;
}
.mastercard {
  width: 100px;

  border-radius: 50%;
  object-fit: contain;
  padding: 1rem;
  box-shadow: 0px 0px 2px 1px rgba(22, 22, 22, 0.212);
  background: rgba(255, 255, 255, 0.795);
  z-index: 1;
}
.custom-shape-divider-top-1662401280 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662401280 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 36px;
}

.custom-shape-divider-top-1662401280 .shape-fill {
  fill: #f3f3f3;
}
.support {
  width: 130px;
  height: fit-content;
  object-fit: fill;
  object-position: center;
  background: #dae9fd;
  padding: 1.3rem;
  border-radius: 50%;
  margin-top: 2rem;
}
.message {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  height: 10rem;
}
.cryptos {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.creditcards {
  background: #dae9fd;
  border-radius: 3px;
  margin-top: 0.5rem;
  padding: 1rem;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
  .title{
    font-size: 2.3rem;
  }
  .subheading{
    width: 80%;
  }
  .container{
    column-gap: 1rem;
  }
  img{
    display: none;
  }
  .cards{
    height: 15rem;
  }

}
@media only screen and (max-width: 600px) {
  /*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
}
</style>