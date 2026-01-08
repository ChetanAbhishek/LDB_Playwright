const { BasePage } = require('./base.page');

class TrainPage extends BasePage {
  constructor(page) {
    super(page);
    this.trainNoInput = page.locator('#cntrNo');
    this.searchBtn = page.locator('button:has-text("Search")');
  }

  async open() {
    await this.navigate('https://www.ldb.co.in/ldb/containersearch');
  }

  async searchTrain(trainNo) {
    await this.fill(this.trainNoInput, trainNo);
    await this.click(this.searchBtn);
  }
}

module.exports = { TrainPage };
