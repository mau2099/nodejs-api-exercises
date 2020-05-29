const express = require('express');
const SalesService = require('./../services/sales');
const { idSchema, createSaleSchema } = require('./../utils/schemas/sales');
const validateSchemaMiddleware = require('./../utils/middleware/validateDataHandler');
const cacheResponse = require('./../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('./../utils/constants');

const apiRouterSales = function (app) {
  const router = express.Router();
  app.use('/api/sales', router);

  const salesService = new SalesService();

  router.get('/', async function (req, res, next) {
    try {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;
      const all = await salesService.getSales({ tags });
      res.status(200).json({
        data: all,
        message:
          all.length > 0
            ? `found ${all.length}`
            : `none found :c ${all.length}`,
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:id',
    validateSchemaMiddleware(idSchema, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params;
        const one = await salesService.getSale({ id });
        res.status(200).json({
          data: one,
          message: Object.keys(one).length > 0 ? 'got one!' : `not found :c`,
        });
      } catch (err) {
        next(err);
      }
    },
  );

  router.post('/', validateSchemaMiddleware(createSaleSchema), async function (
    req,
    res,
    next,
  ) {
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
      const { body: sale = {} } = req;
      const { id } = req.params;
      const updated = await salesService.updateSale({ id, sale });
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
