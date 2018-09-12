<template>
  <div id="app">
    <div class="header">
      <a href="/" class="ffcg-logo"></a>
    </div>

    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "app",
  components: {
    MainContainer
  }
};
</script>

<style>
html,
#app {
  background-color: #0e0e0e;
}

#app {
  font-family: GothamBold, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
}

.ffcg-logo {
  background: url("../images/ffcg-logo.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 110px;
  height: 50px;
  margin-top: 15px;
  margin-left: 30px;
  position: relative;
  z-index: 5;
  float: left;
}

@media (min-width: 1023px) {
  #app {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../images/bg.png");
    margin-bottom: 100px;
  }
}

.header {
  height: 80px;
}
</style>
