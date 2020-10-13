const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const url =
//   'mongodb+srv://tyler:nextquiz1!@cluster0.4kwxj.mongodb.net/quiz?retryWrites=true&w=majority';
const url = require('../keys').url;
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
    console.error('Error connecting to the database. \n${err}');
  });

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api/questions', question);
app.use('/api/check-answer', answer);

app.listen(port, () => {
  console.log('Listening at http://localhost:${port}');
});
