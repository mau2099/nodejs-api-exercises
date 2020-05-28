const Joi = require('@hapi/Joi');

const idSchema = {
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
};

const createSaleSchema = {
  product: Joi.string().max(80).required(),
  tags: Joi.array().items(Joi.string().max(50)),
  quantity: Joi.number().max(999999999).required(),
  price: Joi.number().max(999999999).required(),
  total: Joi.number().max(999999999).required(),
};

module.exports = { idSchema, createSaleSchema };
