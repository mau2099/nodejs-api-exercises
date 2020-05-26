const express = require('express');
const SalesService = require('./../services/sales');

const apiRouterSales = function (app) {
  const router = express.Router();
  app.use('/api/sales', router);

  const salesService = new SalesService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const all = await salesService.getSales({ tags });
      console.log(JSON.stringify(all));
      res.status(200).json({ data: all, message: 'got all!' });
    } catch (err) {
      console.log(err)
      next(err);
    }
  });

  router.get('/:id', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const { id } = req.params;
      const one = await salesService.getSale({ tags, id });
      res.status(200).json({ data: one, message: 'got one!' });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const { body: sale } = req;
      const created = await salesService.createSale({ sale });
      res.status(201).json({ data: created, message: 'created!' });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:id', async function (req, res, next) {
    try {
      const { body: sale } = req;
      const updated = await salesService.updateSale({ sale });
      res.status(200).json({ data: updated, message: 'updated!' });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:id', async function (req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await salesService.deletedSale({ id });
      res.status(200).json({ data: deleted, message: 'deleted!' });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = apiRouterSales;
