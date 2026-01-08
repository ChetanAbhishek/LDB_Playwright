const { BasePage } = require('./base.page');

class TruckPage extends BasePage {
  constructor(page) {
    super(page);
    this.truckNoInput = page.locator('#cntrNo');//cntrNo
    this.searchBtn = page.locator('button:has-text("Search")');
  }

  async open() {
    await this.navigate('https://www.ldb.co.in/ldb/containersearch');
  }

  async searchTruck(truckNo) {
    await this.fill(this.truckNoInput, truckNo);
    await this.click(this.searchBtn);
  }
}

module.exports = { TruckPage };
