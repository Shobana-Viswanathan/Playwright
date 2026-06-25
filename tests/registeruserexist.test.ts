import {test,expect} from '@playwright/test';
test('Registeruser Exist',async({page})=>{
   await page.goto('https://automationexercise.com/');
   await page.locator("//a[normalize-space()='Signup / Login']").click();
   await page.locator('//input[@data-qa="signup-name"]').fill("Shobs")
   await page.locator('//input[@data-qa="signup-email"]').fill("demo271@gmail.com");
   await page.locator('//button[@data-qa="signup-button"]').click();
   await expect(page.locator('//p[text()="Email Address already exist!"]')).toBeVisible();
})