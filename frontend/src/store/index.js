import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingQuestions: false,
    questions: [],
    totalNumberOfQuestionsAnswered: 0,
  },
  mutations: {
    UPDATE_SCORE(state) {
      let numOfCorrect = state.questions.filter(
        (question) => question.result === 'Correct'
      ).length;

      state.totalNumberOfQuestionsAnswered = state.questions.filter(
        (question) => question.result.length
      );

      state.score = numOfCorrect / state.questions.length;
      state.questions.length;
    },
    UPDATE_QUESTION(state, payload) {
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
    SET_ADD_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SET_LOADING(state, payload) {
      state.loadingQuestions = payload;
    },
  },
  actions: {
    addQuestions(context) {
      context.commit('SET_LOADING', true);
      axios
        .get('http://localhost:3000/api/questions/')
        // .then((response) => (this.info = response.data))
        .then((response) => response.data)
        .then((data) => {
          context.commit('SET_LOADING', false);
          context.commit('SET_ADD_QUESTIONS', data);
        });
    },
    updateQuestion(context, payload) {
      context.commit('UPDATE_QUESTION', payload);
    },
    updateScore(context) {
      context.commit('UPDATE_SCORE');
    },
  },
  getters: {
    getNumberOfAnsweredQuestions(state) {
      return state.questions.filter((question) => question.result.length > 0)
        .length;
    },
    getNumberOfQuestions(state) {
      return state.questions.length;
    },
    getCurrentScore(state) {
      let numOfCorrect = state.questions.filter(
        (question) => question.result === 'Correct'
      ).length;
      state.totalNumberOfQuestionsAnswered = state.questions.filter(
        (question) => question.result.length
      );
      return numOfCorrect / state.questions.length;
    },
    getQuestion(state) {
      return state.questions;
    },
  },
  modules: {},
});
