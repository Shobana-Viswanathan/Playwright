import { test } from '@playwright/test';

test('isChecked Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox = page.locator("input").first();
    await checkbox.check();
    const status = await checkbox.isChecked();
    console.log("Checkbox Checked:", status);




});