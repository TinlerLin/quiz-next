const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const url = ``;

const answer = require('./routes/api/answer');
const question = require('./routes/api/question');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use('/api/questions', question);
app.use('/api/check-answer', answer);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
