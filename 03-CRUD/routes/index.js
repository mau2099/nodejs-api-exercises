const express = require('express');
const { salesMock } = require('./../utils/mocks/salesMock');

const api = function (app) {
  const router = express.Router();
  app.use('/api/sales', router);

  router.get('/', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock);
      res.status(200).json({ data: sales, message: 'got all!' });
    } catch (error) {
      next(err);
    }
  });
  router.get('/:id', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock[0]);
      res.status(200).json({ data: sales, message: 'got one!' });
    } catch (error) {
      next(err);
    }
  });
  router.post('/', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock[0]);
      res.status(201).json({ data: sales, message: 'created!' });
    } catch (error) {
      next(err);
    }
  });
  router.put('/:id', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock[0].id);
      res.status(200).json({ data: sales, message: 'updated!' });
    } catch (error) {
      next(err);
    }
  });
  router.delete('/:id', async function (err, res, next) {
    try {
      const sales = await Promise.resolve(salesMock[0].id);
      res.status(200).json({ data: sales, message: 'deleted!' });
    } catch (error) {
      next(err);
    }
  });
};

module.exports = api;
