const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

// app.use(urlLogger)
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/json', urlLogger, timeLogger, (request, response) => {
  response.status(200).json({"name": "LeeLee"});
});
