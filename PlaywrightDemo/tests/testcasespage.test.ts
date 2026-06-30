import { test,expect } from '@playwright/test';
test('Verify test case page visible',async({page})=>{
    await page.goto('https://automationexercise.com/');
    //await expect(page).toHaveURL('http://automationexercise.com/');
    await page.locator('//a[contains(text(),"Test Cases")]').click();
    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
    await expect(page.locator('h2.title')).toContainText('Test Cases');
})