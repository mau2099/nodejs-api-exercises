const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    name: 'modified name 2099',
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat',
  }),
);

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  req.session.variable2099 =
    'despues del sesssion se puede guardar cualquier dato. Maximo 4kb';
  res.status(200).json({
    // hello: 'world',
    // counter: req.session.count,
    // variable2099: req.session.variable2099,
    session: req.session,
  });
  console.log(req.session);
});

app.listen(3000, () => {
  console.log('Listening http://localhost:3000');
});
