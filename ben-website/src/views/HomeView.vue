<template>
  <div id="home">
    <div class="hero-container">
      <!-- <img alt="hero" id="hero" /> -->
      <div class="header">
        <h1 id="name">Ben Mullaly</h1>
        <img alt="headshot" id="headshot" src="../assets/IMG_7524.jpg" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <home-page-feature />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomePageFeature from "@/components/HomePageFeature.vue";

export default {
  name: "HomeView",
  components: {
    HomePageFeature,
  },
};
</script>
<style scoped>
#hero {
  width: 100vw;
  margin: auto;
}
.hero-container {
  /* position: absolute; */
  text-align: center;
  color: white;
  width: 100vw;
  margin: 0 auto 2rem;
}
.header {
  background: rgba(43, 88, 143, 0.7);
  border-style: none;
  padding: 10px 15%;
  margin: 10px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
}
#headshot {
  width: 15vw;
  border: none;
  border-radius: 60px;
  display: inline-block;
}
#name {
  margin: auto;
}
</style>
