const express = require('express');
const app = express();
const { config } = require('./config/index');
const apiRouterSales = require('./routes/sales');

apiRouterSales(app);
 
app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
