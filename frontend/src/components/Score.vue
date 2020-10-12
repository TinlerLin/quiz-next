<template>
  <div class="score">
    <div class="grade-container">
      <div>
        <div class="letter-grade">
          {{ letterGrade.grade }}
        </div>
        <div class="percent">({{ letterGrade.percent }}%)</div>
      </div>
      <div>
        <img class="meme-image" :src="letterGrade.meme" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store/index';

export default {
  name: 'Score',
  data() {
    return {};
  },
  computed: {
    numOfQuestionAnswered() {
      return store.getters.getNumberOfAnsweredQuestions;
    },
    letterGrade() {
      let grade,
        meme,
        currentTotalScore = store.getters.getCurrentScore * 100;
      if (currentTotalScore >= 90)
        return {
          grade: 'A',
          meme: require('../assets/rockMeme.png'),
          percent: currentTotalScore,
        };
      if (currentTotalScore >= 80 && this.totalScore < 90)
        return {
          grade: 'B',
          meme: require('../assets/kidsMeme.jpg'),
          percent: currentTotalScore,
        };
      if (currentTotalScore >= 70 && this.totalScore < 80)
        return {
          grade: 'C',
          meme: require('../assets/catsMeme.jpg'),
          percent: currentTotalScore,
        };
      if (currentTotalScore >= 60 && this.totalScore < 70)
        return {
          grade: 'D',
          meme: require('../assets/horsemenMeme.jpg'),
          percent: currentTotalScore,
        };
      if (currentTotalScore < 60)
        return {
          grade: 'F',
          meme: require('../assets/doctorMeme.jpg'),
          percent: currentTotalScore,
        };
      return {
        grade,
        meme: meme,
        percent: currentTotalScore,
      };
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

.score {
  background: linear-gradient(
    180deg,
    rgba(0, 141, 255, 1) 0%,
    rgb(7, 117, 207) 100%
  );

  background-repeat: no-repeat;
  width: 100%;
  margin: auto;
  padding-bottom: 8em;
}

.meme-image {
  width: 100%;
  -webkit-box-shadow: 5px 5px 0px 1px #0c0c0c;
  box-shadow: 5px 5px 0px 1px #0c0c0c;
}

.grade-container {
  font-family: 'Kalam', cursive;
  /* color: rgb(255, 44, 44); */
  color: white;
  font-size: 3em;
  border: 5px solid white;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  -webkit-box-shadow: 5px 5px 0px 1px #0c0c0c;
  box-shadow: 3px 3px 0px 1px #0c0c0c;
}

.grade-container div {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
.letter-grade {
  font-family: 'Kalam', cursive;
  font-size: 5em;
  line-height: 100%;
  text-shadow: 5px 5px #0c0c0c;
  /* box-shadow: 5px 5px 0px 1px #0c0c0c; */
}
.percent {
  font-size: 0.5em;
  text-shadow: 2px 2px #0c0c0c;
}
</style>
