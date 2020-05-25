const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('hello wordl');
});
app.get('/json', function (req, res) {
  console.log(req.body);
  res.json({ hello: 'world' });
});
app.get('/json/:name', function (req, res) {
  // http://localhost:2080/json/2?otrder=asdsad&asdasd=123123213
  // http://localhost:2080/json/2?shoe[color]=blue&shoe[size]=32
  console.log("req body", req.body);
  console.log("req params", req.params);
  console.log("req query", req.query);
  res.json({ hello: 'world' });
});

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
