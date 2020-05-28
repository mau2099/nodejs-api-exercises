const boom = require('@hapi/boom');
const { config } = require('./../../config/index');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }
  return error;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapBoomErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
  // res.status(err.status || 500);
  // res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  wrapBoomErrors,
  errorHandler,
};
