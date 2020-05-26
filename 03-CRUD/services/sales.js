const { salesMock } = require('./../utils/mocks/salesMock');

class SalesService {
  async getSales() {
    const sales = await Promise.resolve(salesMock);
    return sales || [];
  }
  async getSale() {
    const sale = await Promise.resolve(salesMock[0]);
    return sale || [];
  }
  async createSale() {
    const saleCreatedId = await Promise.resolve(salesMock[0].id);
    return saleCreatedId || [];
  }
  async updateSale() {
    const saleUpdatedId = await Promise.resolve(salesMock[0].id);
    return saleUpdatedId || [];
  }
  async deletedSale() {
    const saleDeletedId = await Promise.resolve(salesMock[0].id);
    return saleDeletedId || [];
  }
}

module.exports = SalesService;