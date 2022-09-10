<template>
  <section class="contact">
    <div class="container">
      <div class="text">
        <h1>Support</h1>
        <p id="subheading">Expect a response withing 3-5 business days</p>
      </div>
      <form action="https://formspree.io/f/mvoygdwl" method="POST">
        <div id="inputgroup">
          <input
            type="text"
            name="name surname"
            placeholder="John Doe"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">
          <p>Send Message</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-wave-right-up"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 10h4v4" />
            <path
              d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2"
            />
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.contact {
  background: var(--bgcolor);
  height: 100vh;
  width: 100%;
  font-family: "Satoshi-Variable";
  padding-left: 9rem;
  padding-right: 10rem;
}
.container {
  height:fit-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding-top: 4rem;
}
.text {
  width: 100%;
}

h1 {
  font-family: "Satoshi-Variable";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  color: white;
}
#subheading {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.699);
  padding-bottom: 1.5rem;
  width: 40rem;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
button {
  color: black;
  background: var(--orange);
  display: flex;
  align-items: center;
  padding: 10px 33px;
  width: fit-content;
  border: none;
  border-radius: 3px;
}
button p {
  font-size: 1rem;
  padding-right: 1rem;
  font-weight: 600;
}
input {
  width: 340px;
  height: 45px;
  border: 1px solid white;
  background: var(--bgcolor);
  border-radius: 4px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
  transition: 0.4s all ease-in-out;
}
input:focus {
  border: 1px solid var(--highlight);
  outline: none;
}
textarea {
  background: var(--bgcolor);
  border-radius: 4px;
  resize: none;
  width: 44.1rem;
  height: 25vh;
  border: 1px solid white;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
  padding-top: 0.5rem;
  transition: 0.4s all ease-in-out;
}
textarea:focus {
  border: 1px solid var(--orange);
  outline: none;
  border: 1px solid var(--highlight);
}
#inputgroup {
  display: flex;
  column-gap: 1.5rem;
}
::placeholder {
  color: #eeeeee6b;
}
button {
  color: white;
  background: var(--highlight);
}
</style>