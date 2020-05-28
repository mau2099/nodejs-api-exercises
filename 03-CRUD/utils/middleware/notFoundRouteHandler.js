const boom = require('@hapi/boom');

function notFoundRouteHandler(req, res) {
  const {
    output: { statusCode, payload },
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundRouteHandler;
