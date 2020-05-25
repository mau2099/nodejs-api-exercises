const express = require('express');
const app = express();
const { config } = require('./config/index');
const data = require('./utils/mocks/salesMock');
app.get('/', function (req, res) {
  res.send(data.salesMock);
});

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
