<template>
  <Navbar />
  <router-view />
</template>
<script>
import Sidebar from "./components/TheSidebar.vue";
import Navbar from "./components/TheNavbar.vue";
export default {
  name: "App",
  components: { Sidebar, Navbar },
};
</script>
<style>
@font-face {
  font-family: "Satoshi-Variable";
  src: url("./fonts/Satoshi-Variable.woff2") format("woff2"),
    url("./fonts/Satoshi-Variable.woff") format("woff"),
    url("./fonts/Satoshi-Variable.ttf") format("truetype");
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}

/* CSS RESET */
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
body {
  background: #192185;
  width: 100%;
}
ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* COLOR SCHEME */
:root {
  /* backgrounds */
  --bgcolor: #192185;
  --highlight: #0084ff;
  --dwhite: #c8c8c8;
  --white: #ffffff;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px transparent;
  box-shadow: inset 0 0 6px transparent;
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: white;
}

.modal-backdrop {
  z-index: 0;
  opacity: 0.5 !important;
}

.pageContent {
}
.modal-content {
  width: 20rem;
  height: fit-content;
  border-radius: 0;
  border-radius: 4px;
  padding-bottom: 1rem;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
}
.modal-header {
  border-bottom: none;
}
.modal-footer {
  border-top: none;
  padding-bottom: 3rem;
}
.btn-primary {
  border-radius: 0;
  padding: 0.5rem 1.6rem;
}
.modal-dialog {
  height: 100vh !important;
  display: flex;
}

.modal-content {
  margin: auto !important;
  height: fit-content !important;
}
</style>