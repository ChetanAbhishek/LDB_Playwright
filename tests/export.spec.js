const { test } = require('@playwright/test');
const { ExportPage } = require('../pages/export.page');

test('Export search', async ({ page }) => {
  const exportPage = new ExportPage(page);
  await exportPage.open();
  await exportPage.searchExport('SB123456');
});
