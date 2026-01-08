const { BasePage } = require('./base.page');

class ExportPage extends BasePage {
  constructor(page) {
    super(page);
    this.shipNav = page.locator(':text-is("Export")').click();
    this.shippingBillInput = page.locator('#cntrNo');
    this.searchBtn = page.locator('img.search__icon.ng-tns-c244-0');
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
