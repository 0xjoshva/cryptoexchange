<template>
  <section>
    <div class="container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DqfacmPTU5o?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div class="text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam
          consequatur quibusdam nemo doloribus minus. Tempora tempore autem
          aperiam eum minima maiores eos cupiditate sequi, earum, ipsa a
          repellat magnam, in reiciendis ad! Repellat, et.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.container {
  background: white;
  display: flex;
  column-gap: 4rem;
  padding: 1rem;
  border-radius: 1rem;
  width: fit-content;
  height: fit-content;
}
.container iframe {
  width: 115rem;
  height: 20rem;
  border-radius: 1rem;
}
.text {
  font-family: "Satoshi-Variable";
}
</style>