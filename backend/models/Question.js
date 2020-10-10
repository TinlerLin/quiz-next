const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
  },
  answers: {
    type: Array,
  },
});

module.exports = Question = mongoose.model('Question', QuestionSchema);