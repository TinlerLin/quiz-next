<template>
  <div>
    <!-- {{ info }} -->
    <div v-for="question in info" :key="question.id">
      <div class="question" :data-id="question.questionId">
        {{ question.question }}
      </div>
      <div
        class="answers-container"
        v-for="answer in question.answers"
        :key="answer.id"
      >
        <div class="answer" :data-id="answer.answerID">{{ answer.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
export default {
  data() {
    return {
      info: null,
      check: null,
    };
  },
  mounted() {

    axios
      .get('http://localhost:3000/api/questions/')
      .then((response) => (this.info = response.data));

    axios
      .put('http://localhost:3000/api/check-answer', {
        "questionId": "1",
        "answerId": "1"
      })
      .then((response) => (this.check = response.data));
  },
  // methods: {
  //   getQuestionAnswer() {
  //     axios
  //       .get('http://localhost:3000/api/check-answer/', {
  //         questionId: '1',
  //         answerId: '1',
  //       })
  //       .then((response) => (this.info = response.data));
  //   },
  // },
};
</script>
