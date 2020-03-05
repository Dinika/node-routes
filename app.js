const express = require('express');

const app = express();

app.use(function (req, res, next) {
  console.log('First middleware');
  next();
});

app.use(function (req, res, next) {
  console.log('Second middleware');
  res.send('<p>Is this the real life?</p>');
});

app.listen(8080);