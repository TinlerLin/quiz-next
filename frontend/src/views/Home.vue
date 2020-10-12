<template>
  <div class="home">
    <!-- {{ info }} -->
    <div class="question-container" v-for="question in info" :key="question.id">
      <h2 class="question" :data-id="question.questionId">
        {{ question.question }}
      </h2>
      <div class="answers-container">
        <div
          class="answer"
          v-for="(answer, index) in question.answers"
          :key="answer.id"
          @click="getQuestionAnswer($event)"
        >
          <AnswerButton
            :data-answer-id="answer.answerId"
            :data-question-id="question.questionId"
            :disabled="question.result.length > 0"
            :class="answer.result != null ? answer.result : null"
          >
            <!-- <slot>{{ answer.answer }} </slot> -->
            <span slot="numeric" class="numeric">{{ index + 1 }}</span>
            <span slot="answer" class="answer-text">{{ answer.answer }}</span>
          </AnswerButton>
        </div>
      </div>
      <div :class="question.result.length > 0 ? question.result : null">
        {{ question.result }}
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
    };
  },
  components: {
    AnswerButton,
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/questions/')
      .then((response) => (this.info = response.data))
      .then((data) => {
        console.log(data);
        store.commit('addQuestions', data);
      });
  },
  computed: {
    totalNumberOfQuestions() {
      return this.info.length;
    },
    score() {
      return (this.info.length / this.$store.state.correctQuestions) * 100;
    },
  },
  methods: {
    incrementCorrectQuestions() {
      store.commit('incrementCorrectQuestions');
    },
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
            store.commit('updateQuestion', {
              questionId: Number(questionId),
              answerId: answerId,
              result: 'Incorrect',
            });
          } else {
            $this.incrementCorrectQuestions();
            store.commit('updateQuestion', {
              questionId: Number(questionId),
              answerId: answerId,
              result: 'Correct',
            });
          }
        });
    },
  },
};
</script>
<style scoped>
h2 {
  padding-bottom: 1em;
}

.incorrect {
  transition: 0.3s;
  opacity: 0.5;
}

.home {
  max-width: 1000px;
  margin: auto;
}

.answer {
  cursor: pointer;
}
.answers-container {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2em;
  /* align-content: space-between; */
}

.question-container {
  padding-bottom: 8em;
}

.Correct {
  font-size: 1em;
  color: green;
  transition: 0.5s;
  opacity: 1;
}

.Incorrect {
  color: red;
}

.result {
  color: green;
  transition: 1s;
  opacity: 1;
}
</style>
