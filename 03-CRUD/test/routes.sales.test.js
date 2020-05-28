const assert = require('assert');
const proxyquire = require('proxyquire');

const { salesMock, SalesServiceMock } = require('./../utils/mocks/salesMock');
const testServer = require('./serverTest');

describe('routes - sales', function() {
  const route = proxyquire('./../routes/sales', {
    './../services/sales': SalesServiceMock
  });

  const request = testServer(route);
  describe('GET /sales', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/sales').expect(200, done);
    });

    it('should respond with the list of sales', function(done) {
      request.get('/api/sales').end((err, res) => {
        assert.deepEqual(res.body, {
          data: salesMock, 
          message: 'found 1000'
        });

        done();
      });
    });
  });
});