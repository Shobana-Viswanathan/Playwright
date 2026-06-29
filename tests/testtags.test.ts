import { test,expect } from '@playwright/test';
test('Login test 1 @Valid',async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    await page.click('#login2')
    await page.fill('#loginusername',"Shobs");
    await page.fill('#loginpassword',"shobi11");
    await page.click('button[onclick="logIn()"]');
   await expect(page.locator("#nameofuser")).toHaveText("Welcome Shobs");

})
test("Invalid Login Test 2 @Invalid",async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    await page.click('#login2')
    await page.fill('#loginusername',"Shob");
    await page.fill('#loginpassword',"shobi11");
    await page.click('button[onclick="logIn()"]');
    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible();
    

})