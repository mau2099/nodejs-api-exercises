const express = require('express');

const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');

const { notFoundHandler } = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// catch 404
app.use(notFoundHandler);

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/json', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/year/:year', (req, res) => {
  // console.log()
  const { year } = req.params;
  const isleapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  res.send(`El año ${year} ${isleapYear ? 'es bisiesto' : 'NO es bisiesto'}`);
});

app.listen(config.port, () => {
  console.log('Listening', {
    url: `Listening to port http://localhost:${config.port}`
  });
});
