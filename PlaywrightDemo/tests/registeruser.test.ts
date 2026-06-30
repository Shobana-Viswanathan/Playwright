import { test,expect } from '@playwright/test';
test('Register Test',async({page})=>{
   await page.goto('https://automationexercise.com/');
   await page.locator("//a[normalize-space()='Signup / Login']").click();
   await page.locator('//input[@data-qa="signup-name"]').fill("Shobs")
   await page.locator('//input[@data-qa="signup-email"]').fill("demo567user@gmail.com");
   await page.locator('//button[@data-qa="signup-button"]').click();
   await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
   await page.click('#id_gender2');
   await page.fill('#password',"secret123");
   await page.locator('#days').selectOption('3');
   await page.locator('#months').selectOption('1');
   await page.locator('#years').selectOption('2004');
   await page.click('#newsletter');
   await page.click('#optin');
   await page.fill('#first_name',"Shami");
   await page.fill('#last_name',"S");
   await page.fill('#company',"XYZ");
   await page.fill('#address1',"ABC");
   await page.fill('#address2',"DEF");
   await page.fill('#state',"TN");
   await page.fill('#city','Trichy');
   await page.fill('#zipcode',"632210");
   await page.fill('#mobile_number',"9876543211");
   await page.click('//button[@data-qa="create-account"]');
   await expect(page.locator("//b[text()='Account Created!']")).toBeVisible();
   await page.locator('//a[@data-qa="continue-button"]').click();
   await expect(page.getByText('Logged in as Shobs')).toBeVisible();
   await page.locator('//a[text()=" Delete Account"]').click();
   await expect(page.locator('//b[text()="Account Deleted!"]')).toHaveText('Account Deleted!');
   await page.locator('//a[@data-qa="continue-button"]').click();

})