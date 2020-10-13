<template>
  <button class="answer-button" @click="getQuestionAnswer($event)">
    <slot></slot>
  </button>
</template>
<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'AnswerButton',
  data() {
    return { cardi: require(`../assets/CardiB.mp3`) };
  },
  methods: {
    getQuestionAnswer(e) {
      let questionId = e.target.getAttribute(`data-question-id`);
      let answerId = e.target.getAttribute(`data-answer-id`);
      let $this = this;
      axios
        .put(`/api/check-answer`, {
          questionId: questionId,
          answerId: answerId,
        })
        .then(function(response) {
          $this.check = response.data;
          if (response.data.result === `Incorrect`) {
            store.dispatch(`updateQuestion`, {
              questionId: Number(questionId),
              answerId: answerId,
              result: `Incorrect`,
            });
            $this.playCardi();
          } else {
            store.dispatch(`updateQuestion`, {
              questionId: Number(questionId),
              answerId: answerId,
              result: `Correct`,
            });
          }
          store.dispatch(`updateScore`);
        });
    },
    playCardi() {
      var audio = new Audio(this.cardi);
      audio.play();
    },
  },
};
</script>

<style scoped>
.answer-button {
  border: 3px solid #fff;
  color: #fff;
  background: none;
  padding: 1em;
  font-size: 1em;
  transition: 0.3s;
  width: 90%;
}

.answer-button:hover {
  background-color: #ffffff37;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
}
</style>
