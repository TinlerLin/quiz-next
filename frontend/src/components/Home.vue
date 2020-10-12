<template>
  <div class="home">
    <div class="home-container">
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
            @click="getQuestionAnswer($event)"
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
        <div class="result">
          {{ question.result }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
import store from '../store/index';
import AnswerButton from '../components/AnswerButton';

export default {
  data() {
    return {
      info: null,
      check: null,
      questionResult: null,
      cardi: require('../assets/CardiB.mp3'),
    };
  },
  components: {
    AnswerButton,
  },
  mounted() {
    store.dispatch('addQuestions');
  },
  methods: {
    getQuestionAnswer(e) {
      let questionId = e.target.getAttribute('data-question-id');
      let answerId = e.target.getAttribute('data-answer-id');
      let $this = this;
      axios
        .put('http://localhost:3000/api/check-answer', {
          questionId: questionId,
          answerId: answerId,
        })
        .then(function(response) {
          $this.check = response.data;
          if (response.data.result === 'Incorrect') {
            store.dispatch('updateQuestion', {
              questionId: Number(questionId),
              answerId: answerId,
              result: 'Incorrect',
            });
            $this.playCardi();
          } else {
            store.dispatch('updateQuestion', {
              questionId: Number(questionId),
              answerId: answerId,
              result: 'Correct',
            });
          }
          store.dispatch('updateScore');
        });
    },
    playCardi() {
      var audio = new Audio(this.cardi); // path to file
      audio.play();
    },
  },
};
</script>
<style scoped>
.home {
  background: linear-gradient(
    0deg,
    rgba(0, 141, 255, 1) 0%,
    rgba(0, 168, 255, 1) 100%
  );
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
}
h2 {
  padding-bottom: 1em;
  font-size: 2em;
}

.incorrect {
  transition: 0.3s;
  opacity: 0.5;
}

.home-container {
  max-width: 1000px;
  margin: auto;
}

.answer {
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  text-align: center;
}
.answers-container {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2em;
  width: 80%;
  margin: auto;

  /* align-content: space-between; */
}

.question-container {
  padding-bottom: 8em;
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

.Incorrect {
  background-color: rgba(200, 25, 25, 0.532);
  opacity: 1 !important;
}

.Incorrect:hover {
  background-color: rgba(200, 25, 25, 0.532);
}

.result {
  font-size: 2em;
  transition: 1s;
  opacity: 1;
}
</style>
