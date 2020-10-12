import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: null,
    score: 0,
    totalNumberOfQuestionsAnswered: 0,
  },
  mutations: {
    incrementCorrectQuestions: (state) => state.correctQuestions++,
    addQuestions(state, payload) {
      state.questions = payload;
    },
    updateScore(state) {
      let numOfCorrect = state.questions.filter(
        (question) => question.result === 'Correct'
      ).length;

      state.totalNumberOfQuestionsAnswered = state.questions.filter(
        (question) => question.result.length
      );

      state.score = numOfCorrect / state.questions.length;
      state.questions.length;
    },
    updateQuestion(state, payload) {
      const currentIndex = state.questions.findIndex(function(item) {
        return item.questionId === payload.questionId;
      });
      const currentQuestion = state.questions[currentIndex];
      currentQuestion.answers.forEach((item) => {
        if (item.answerId === payload.answerId) {
          item.result = payload.result;
        }
      });
      state.questions[currentIndex].result = payload.result;
    },
  },
  actions: {},
  modules: {},
});
