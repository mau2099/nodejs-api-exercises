const express = require('express');
const app = express();
const { config } = require('./config/index');
const apiRouterSales = require('./routes/sales');
const {
  errorHandler,
  wrapBoomErrors,
  logErrors,
} = require('./utils/middleware/errorHandler');
const notFoundRouteHandler = require('./utils/middleware/notFoundRouteHandler');
//MIDDLEWARE

//For sending json objects in body
app.use(express.json());

//routes
apiRouterSales(app);

//this middleware doesnt use next because can not execute a route
//instead we would be getting an html as a response idicating "Cannot GET /api/sales2/"
app.use(notFoundRouteHandler);

//middleware handler error once tryign to do any action
app.use(logErrors);
app.use(errorHandler);
app.use(wrapBoomErrors);

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
