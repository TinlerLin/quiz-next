const express = require('express');
const router = express.Router();
const Answer = require('../../models/Answer');

router.route('/').put(function (req, res) {
  Answer.findOne({
    questionId: req.body.questionId,
    answerId: req.body.answerId,
  }).then(function (data) {
    if (data != null) {
      res.json(data);
    } else {
      res.json({
        result: 'Incorrect',
      });
    }
  });
});

module.exports = router;
