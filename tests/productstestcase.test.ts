import {test,expect}from '@playwright/test';
test('Verify product and its detail page',async({page})=>{
  await  page.goto('https://automationexercise.com');
  await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible();
  await page.click('//a[text()=" Products"]');
  await expect(page).toHaveTitle('Automation Exercise - All Products');
  await page.click('//a[@href="/product_details/1"]');
  await expect(page.locator("//h2[text()='Blue Top']")).toHaveText('Blue Top');
  await expect(page.locator('//p[text()="Category: Women > Tops"]')).toBeVisible();
  await expect(page.locator('//span[text()="Rs. 500"]')).toBeVisible();
  await expect(page.locator('//p[text()=" In Stock"]')).toBeVisible();
  await expect(page.locator('//p[text()=" New"]')).toBeVisible();
  await expect(page.locator("//b[normalize-space()='Brand:']")).toBeVisible();




})