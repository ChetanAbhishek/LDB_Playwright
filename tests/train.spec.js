const { test } = require('@playwright/test');
const { TrainPage } = require('../pages/train.page');

test('Train search', async ({ page }) => {
  const train = new TrainPage(page);
  await train.open();
  await train.searchTrain('12345');
});
