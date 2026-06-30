import { test,expect } from '@playwright/test';
test('Alert',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async (alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.accept();
    });
    await page.locator('//button[text()="Click Me"]').nth(0).click();
})