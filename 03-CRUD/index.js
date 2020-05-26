const express = require('express');
const app = express();
const { config } = require('./config/index');
const api = require('./routes/index');

api(app);

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
