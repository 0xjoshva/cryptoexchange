<template>
  <Landing />
  <About />
  <BlogPreview />
  <Analytics />
  <App />
  <Footer />
</template>
<script>
import Landing from "@/components/HomeLanding.vue";
import About from "@/components/HomeAbout.vue";
import Branding from "@/components/HomeTestimonial.vue";
import Tutorial from "@/components/HomeTutorial.vue";
import Analytics from "@/components/HomeDashboard.vue";
import App from "@/components/HomeApp.vue";
import Footer from "@/components/TheFooter.vue";
import BlogPreview from "@/components/HomeBlogPreview.vue";

export default {
  name: "HomeView",
  components: {
    Landing,
    About,
    Branding,
    Tutorial,
    Analytics,
    App,
    Footer,
    BlogPreview,
  },
};
</script>