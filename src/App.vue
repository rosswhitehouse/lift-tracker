<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import * as api from "./utils/api.js";
import "./styles/reset.css";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
html {
  font-size: 10px;
  background: #15d176;
}
main {
  padding: 2rem;
}
h1 {
  font-size: 3.2rem;
  text-align: center;
  text-transform: capitalize;
}
h2 {
  font-size: 2.4rem;
  text-transform: capitalize;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
}
h3 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
  text-transform: capitalize;
  display: inline-block;
}
p {
  font-weight: normal;
  font-size: 1.8rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
}
a {
  color: inherit;
  text-decoration: none;
}
a:visited {
  color: inherit;
}
.white-box {
  border: 1px white solid;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
}
</style>
