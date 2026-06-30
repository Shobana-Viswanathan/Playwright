import {test,expect } from '@playwright/test';
test('Invalid Login',async({page})=>{
   await page.goto('https://automationexercise.com/');
   await page.locator("//a[normalize-space()='Signup / Login']").click();
   await page.locator('//input[@data-qa="login-email"]').fill('queen@gmail.com');
   await page.locator('//input[@data-qa="login-password"]').fill('1234sho');
   await page.click('//button[@data-qa="login-button"]');
   await expect(page.locator('//p[text()="Your email or password is incorrect!"]')).toBeVisible();
   await page.close();
})
