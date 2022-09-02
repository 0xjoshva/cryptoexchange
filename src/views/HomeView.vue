<template>
<Landing/>
<About/>
<Tutorial/>
</template>
<script>
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";
import Branding from "@/components/Branding.vue";
import Tutorial from "@/components/Tutorial.vue";

export default {
  name: "HomeView",
  components: {
    Landing,
    About,
    Branding,
    Tutorial
},
};
</script>
