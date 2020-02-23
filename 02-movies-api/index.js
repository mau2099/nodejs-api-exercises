const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

//body parser
app.use(express.json());

moviesApi(app);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/json', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/year/:year', (req, res) => {
  // console.log()
  const year = req.params.year;
  const isleapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  res.send(
    `El año ${year} ${
      isleapYear ? 'es bisiesto' : 'NO es bisiesto'
    }`
  );
});

app.listen(config.port, () => {
  console.log('Listening', {
    url: `Listening to port http://localhost:${config.port}`
  });
});
