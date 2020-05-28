const boom = require('@hapi/boom');

function dataWithError() {
  return false;
}

function validationDataHandler(schema, check = 'body') {
  return function (req, res, next) {
    const error = dataWithError(req[check], schema);
    error ? next(boom.preconditionFailed(error)) : next();
    // error ? next(new Error(error)) : next();
  };
}

module.exports = validationDataHandler;
