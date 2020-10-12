import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    correctQuestions: 0,
    questions: null,
  },
  mutations: {
    incrementCorrectQuestions: (state) => state.correctQuestions++,
    addQuestions(state, payload) {
      state.questions = payload;
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
