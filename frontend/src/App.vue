<template>
  <div id="app">
    <HeroHeader />
    <Home />
    <Score />
  </div>
</template>
<script>
import Home from './components/Home';
import Score from './components/Score';
import HeroHeader from './components/HeroHeader';
export default {
  components: {
    Home,
    Score,
    HeroHeader,
  },
};
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
