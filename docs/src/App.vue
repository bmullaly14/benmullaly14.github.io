<template>
  <div id="app">
    <nav id="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/resume">Resume</router-link>
      <router-link class="link" to="/links">Links</router-link>
      <!-- <router-link class="link" to="/contact">Contact</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgba(4, 197, 251, 0.2);
  width: 100%;
  min-height: 100vh;
}
// template {
//   background: rgba(4, 197, 251, 0.2);
//   height: auto;
// }
.link {
  width: 25%;
}
.link:hover {
  color: #3c7ab8;
}
nav {
  display: flex;
  padding: 1em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px 0px 5px 0px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #3c7ab8;
}

@media only screen and (min-width: 576px) {
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
