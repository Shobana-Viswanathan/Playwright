import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: ' My Account' }).click();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sham@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
});