import { test,expect } from '@playwright/test';
test('Prompt Alert',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async (alert)=>{
        const text=alert.defaultValue();
        console.log(text);
        await alert.accept("Shobi");
    });
    await page.locator('//button[text()="Click Me"]').nth(2).click();
    await expect (page.locator('#confirm-demo')).toContainText("You have entered 'Shobi'!");

})