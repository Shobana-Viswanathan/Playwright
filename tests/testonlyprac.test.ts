import { test,expect } from '@playwright/test';
test.only('Login test 1',async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    await page.click('#login2')
    await page.fill('#loginusername',"Shobs");
    await page.fill('#loginpassword',"shobi11");
    await page.click('button[onclick="logIn()"]');
    const welcometxt = page.locator("#nameofuser").textContent();
    await expect.soft(welcometxt).toBe('Welcome Shobs');
    
})
test('Search',async({page})=>{
    console.log("Search");
})
test('Logout',async({page})=>{
    console.log("Logout");
})