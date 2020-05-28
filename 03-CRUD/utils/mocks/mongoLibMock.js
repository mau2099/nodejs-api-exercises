const sinon = require('sinon');

const { salesMock, filterMock } = require('./salesMock');

const getAllStub = sinon.stub();
getAllStub.withArgs('sales').resolves(salesMock);

const tagQuery = { tags: { $in: ['primera'] } };
getAllStub.withArgs('sales', tagQuery).resolves(filterMock('primera'));

const createStub = sinon.stub().resolves(salesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};