const express = require("express");
const router = express.Router();
const Question = require('../../models/Question');


router.route('/').get(function (req, res) {
  Question.find({}).then((data) => res.json(data));
});

module.exports = router;