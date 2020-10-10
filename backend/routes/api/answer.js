const express = require("express");
const router = express.Router();
const Answer = require('../../models/Answer');

router.route('/').put(function (req, res) {
  console.log(req.body)
  Answer.findOne({
    questionId: req.body.questionId,
    answerId: req.body.answerId,
  }).then(function (data) {
    if (data != null) {
      // add a message saying found or correct
      res.json(data);
    } else {
      res.json({
        message: 'not found',
      });
    }
  });
  // .then((data) => res.json(data));
});

module.exports = router;