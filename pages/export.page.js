const { BasePage } = require('./base.page');

class ExportPage extends BasePage {
  constructor(page) {
    super(page);
    this.shippingBillInput = page.locator('#cntrNo');
    this.searchBtn = page.locator('button:has-text("Search")');
  }

  async open() {
    await this.navigate('https://www.ldb.co.in/ldb/containersearch');
  }

  async searchExport(billNo) {
    await this.fill(this.shippingBillInput, billNo);
    await this.click(this.searchBtn);
  }
}

module.exports = { ExportPage };
