const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('./../utils/mocks/mongoLibMock');

const { salesMock } = require('./../utils/mocks/salesMock');

describe('services - sales', function() {
  const SalesService = proxyquire('./../services/sales', {
    './../lib/mongo': MongoLibMock
  });

  const salesService = new SalesService();

  describe('when getSales method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await salesService.getSales({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of sales', async function() {
      const result = await salesService.getSales({});
      const expected = salesMock;
      assert.deepEqual(result, expected);
    });
  });
});