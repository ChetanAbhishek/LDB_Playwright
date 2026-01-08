const { test } = require('@playwright/test');
const { ContainerPage } = require('../pages/container.page');

test('Container search', async ({ page }) => {
  const container = new ContainerPage(page);
  await container.open();
  await container.searchContainer('ABCD1234567');
});
