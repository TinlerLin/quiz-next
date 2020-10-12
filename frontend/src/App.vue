<template>
  <div id="app">
    <!-- <HeroHeader /> -->
    <Home />
  </div>
</template>
<script>
import Home from './components/Home';
// import HeroHeader from './components/HeroHeader';
export default {
  components: {
    Home,
    // HeroHeader,
  },
};
</script>
<style>
body {
  background: linear-gradient(
    0deg,
    rgba(0, 141, 255, 1) 0%,
    rgba(0, 168, 255, 1) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
