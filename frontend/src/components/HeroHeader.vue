<template>
  <div id="hero-header" class="wave">
    <img class="cardi-hero" src="../assets/CardiBHero.png" alt="" />
    <h1>Cardi B Quiz</h1>
  </div>
</template>
<script>
// import CardiHero from '../assets/CardiBHero.png';
export default {
  name: 'HeroHeader',
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,700;1,900&display=swap');

#hero-header {
  padding-top: 8em;
  background: white;
  width: 100%;
  z-index: 1;
}
h1 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: rgb(51, 51, 51);
}

.extra-bold {
  font-family: 'Raleway', sans-serif;
  font-size: 1.25em;
  font-weight: 900;
}

.cardi-hero {
  max-width: 300px;
  transition: 1s;
  transform: translate(0px, 200px);
}
</style>
