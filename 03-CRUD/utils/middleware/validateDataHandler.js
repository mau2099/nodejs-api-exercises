const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validateDataSchema(data, schema) {
  console.log('--> validatin schema', { data, schema, joi });

  const { error } = joi.validate(data, schema);
  return error;
}

function validateSchemaMiddleware(schema, whereToValidate = 'body') {
  return function (req, res, next) {
    const error = validateDataSchema(req[whereToValidate], schema);
    error ? next(boom.preconditionFailed(error)) : next();
    // error ? next(new Error(error)) : next();
  };
}

module.exports = validateSchemaMiddleware;
