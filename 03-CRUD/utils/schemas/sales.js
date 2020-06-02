const joi = require('@hapi/joi');

const idSchema = {
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
};

const createSaleSchema = {
  product: joi.string().max(80).required(),
  tags: joi.array().items(joi.string().max(50)),
  quantity: joi.number().max(999999999).required(),
  price: joi.number().max(999999999).required(),
  total: joi.number().max(999999999).required(),
};

module.exports = { idSchema, createSaleSchema };
