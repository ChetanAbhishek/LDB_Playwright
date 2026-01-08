class ContainerPage {
  constructor(page) {
    this.page = page;
   // this.frame = page.frameLocator('iframe[src*="container"]');

    this.containerInput = this.page.locator('#cntrNo');
    this.searchBtn = this.page.locator("//img[@class='search__icon ng-tns-c244-0']");
  }

  async open() {
    await this.page.goto(
      'https://www.ldb.co.in/ldb/containersearch',
      { waitUntil: 'domcontentloaded' }
    );
    //await this.page.waitForLoadState('networkidle');
  }

  async searchContainer(containerNo) {
    await this.containerInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.containerInput.fill(containerNo);

    await this.searchBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.searchBtn.click();
  }
}

module.exports = { ContainerPage };