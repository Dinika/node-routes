const express = require('express');

const app = express();

app.use('/users', function (req, res, next) {
  console.log('users middleware')
  res.send('Or is this a fantasy?');
});

app.use(function (req, res, next) {
  console.log('Common middleware');
  res.send('<p>Is this the real life?</p>');
});

app.listen(8080);