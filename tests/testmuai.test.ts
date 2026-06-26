import { test,expect } from '@playwright/test';
test('Testmuai',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const title=await page.title();
    console.log(title);
    const input= page.locator("//input[@id='user-message']")
    console.log("Before Value:"+await input.getAttribute("placeholder"));
    await input.fill("Shobi");
    await page.click('//button[@id="showInput"]')
    console.log("After value:"+ await input.inputValue());
    page.close();

})
