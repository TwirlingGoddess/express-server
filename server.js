const express = require('express');
const app = express();
const data = require('./public/data.json')
const sunset = require('./public/sunset.jpeg')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger)
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json(data);
});

app.get('/sunsets', (request, response) => {
  response.status(200).json(sunset)
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
