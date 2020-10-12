const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  questionId: {
    type: String,
  },
  answerId: {
    type: String,
  },
});

module.exports = Answer = mongoose.model('Answer', AnswerSchema);
