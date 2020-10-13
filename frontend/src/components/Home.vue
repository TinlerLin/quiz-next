<template>
  <div class="home">
    <div
      class="home-container"
      v-if="this.$store.state.loadingQuestions === false"
    >
      <div
        class="question-container"
        v-for="question in this.$store.state.questions"
        :key="question.id"
      >
        <h2 class="question" :data-id="question.questionId">
          {{ question.question }}
        </h2>
        <div class="answers-container">
          <div
            class="answer"
            v-for="answer in question.answers"
            :key="answer.id"
          >
            <AnswerButton
              :data-answer-id="answer.answerId"
              :data-question-id="question.questionId"
              :disabled="question.result.length > 0"
              :class="answer.result != null ? answer.result : null"
            >
              <slot>{{ answer.answer }} </slot>
            </AnswerButton>
          </div>
        </div>
        <div class="result" v-if="question.result">
          <div class="result-text">
            {{ question.result }}
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
    <div v-else>
      <h1>Loading Questions</h1>
    </div>
  </div>
</template>

<script>
import store from '../store/index';
import AnswerButton from '../components/AnswerButton';

export default {
  data() {
    return {};
  },
  components: {
    AnswerButton,
  },
  mounted() {
    store.dispatch(`addQuestions`);
  },
  computed: {
    questions() {
      return store.getters.getQuestions;
    },
  },
};
</script>
<style scoped>
h2 {
  padding-bottom: 1em;
  font-size: 2em;
}
.answer {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  text-align: center;
}
.answers-container {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2em;
  margin: auto;
}
.Correct {
  font-size: 1em;
  color: white;
  background-color: rgba(41, 137, 41, 0.498);
  transition: 0.5s;
  opacity: 1 !important;
}
.Correct:hover {
  background-color: rgba(41, 137, 41, 0.498);
}
.divider {
  border-bottom: 2px solid white;
  width: 80%;
  opacity: 0.3;
  margin: auto;
  padding-bottom: 4em;
}
.incorrect {
  transition: 0.3s;
  opacity: 0.5;
}
.Incorrect {
  background-color: rgba(200, 25, 25, 0.532);
  opacity: 1 !important;
}
.Incorrect:hover {
  background-color: rgba(200, 25, 25, 0.532);
}
.home {
  background: linear-gradient(180deg, #102378 0%, #1630a4 100%);
  background-repeat: no-repeat;
  padding-top: 4em;
  padding-bottom: 6em;
}
.home-container {
  max-width: 1000px;
  margin: auto;
}
.question-container:last-child {
  margin-bottom: 0;
}
.question-container {
  margin: auto;
  width: 90%;
  margin-bottom: 15em;
}
.result {
  font-size: 2em;
  transition: 1s;
  opacity: 1;
  position: relative;
}
.result-text {
  position: absolute;
  left: 44%;
}
@media only screen and (max-width: 600px) {
  .answers-container {
    flex-direction: column;
  }
  .answer {
    padding-bottom: 1em;
  }
  .result-text {
    left: 35%;
  }
}
</style>
