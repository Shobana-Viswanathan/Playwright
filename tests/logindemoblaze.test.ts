import { test, expect } from '@playwright/test';

test('LoginDemo Test',async({page})=>{
    await page.goto(process.env.BASE_URL!);
    await page.click('#login2')
    await page.fill('#loginusername',process.env.U_NAME!);
    await page.fill('#loginpassword',process.env.PSWD!);
    await page.click('button[onclick="logIn()"]');
});