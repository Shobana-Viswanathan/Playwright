import { test, expect } from '@playwright/test';
test('Confirm Alert',async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    page.on("dialog",async (alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.dismiss();
    });
    await page.locator('//button[text()="Click Me"]').nth(1).click();
    //await expect (page.locator('#confirm-demo')).toContainText('You pressed Cancel!');
    await expect (page.locator('#confirm-demo')).toHaveText('You pressed Cancel!');


})