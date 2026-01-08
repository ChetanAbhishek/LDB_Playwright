const { BasePage } = require('./base.page');

class TruckPage extends BasePage {
  constructor(page) {
    super(page);
    this.trainNav = page.getByText('Truck').click();
    this.truckNoInput = page.locator('#cntrNo');//cntrNo
    this.searchBtn = page.locator('img.search__icon.ng-tns-c244-0');
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
