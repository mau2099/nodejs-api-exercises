// const { salesMock } = require('./../utils/mocks/salesMock');
const MongoLib = require('./../lib/mongo');

class SalesService {
  constructor() {
    this.collection = 'sales';
    this.mongoDb = new MongoLib();
  }
  async getSales({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const sales = await this.mongoDb.getAll(this.collection, query);
    return sales || [];
  }
  async getSale({ id }) {
    const sale = await this.mongoDb.get(this.collection, id);
    return sale || [];
  }
  async createSale({ sale }) {
    const saleCreatedId = await this.mongoDb.create(this.collection, sale);
    return saleCreatedId || [];
  }
  async updateSale({ id, sale } = {}) {
    const saleUpdatedId = await this.mongoDb.update(this.collection, id, sale);
    return saleUpdatedId || [];
  }
  async deletedSale({ id }) {
    const saleDeletedId = await this.mongoDb.delete(this.collection, id);
    return saleDeletedId || [];
  }
}

module.exports = SalesService;
