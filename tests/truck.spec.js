const { test } = require('@playwright/test');
const { TruckPage } = require('../pages/truck.page');

test('Truck search', async ({ page }) => {
  const truck = new TruckPage(page);
  await truck.open();
  await truck.searchTruck('MH12AB1234');
});
