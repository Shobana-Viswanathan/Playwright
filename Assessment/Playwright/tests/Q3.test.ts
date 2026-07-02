import {test,expect} from '@playwright/test'
test('Bing web Test',async({page})=>{
    await page.goto("https://www.bing.com/" );
    const title = await page.title();
    const url=page.url();
    console.log("Title:",title);
    console.log("Url:",url);
    await expect (page).toHaveTitle(title);
    await expect (page).toHaveURL(url);
    const text = await page.locator('#sb_form_q').getAttribute('placeholder');
    console.log('Placeholder Text:', text);
    const type=page.locator('#sb_form_q').getAttribute('type');
    console.log(type);
    await page.fill('#sb_form_q',"playwright");
    await page.keyboard.press('Enter');
    await page.click("//a[@aria-label='Playwright']//div[@class='tpmeta']");
    const newtitle = page.title();
    console.log("Title:",newtitle)
    





});
