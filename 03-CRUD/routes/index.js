const express = require('express');
const { salesMock } = require('./../utils/mocks/salesMock');

const api = function (app) {
  const router = express.Router();
  app.use('/api/sales', router);

  router.get('/', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock);
      res.status(200).json({ data: sales, message: 'get dispatched!' });
    } catch (error) {
      next(err);
    }
  });
};

module.exports = api;
