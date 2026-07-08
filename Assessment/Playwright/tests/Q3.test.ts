import {test,expect} from '@playwright/test'
test('Bing web Test',async({page})=>{
    await page.goto("https://www.bing.com/" );
    const title = await page.title();
    const url=page.url();
    console.log("Title:",title);
    console.log("Url:",url);
    await expect (page).toHaveTitle(title);
    await expect (page).toHaveURL(url);
    const text = await page.getByRole("link", { name: "Videos" }).innerText();
    console.log("Inner Text: "+text);
    const placeholdertext = await page.locator("#sb_form_q").getAttribute("placeholder");
    console.log("Placeholder:", placeholdertext);
    const searchvalue= page.locator("#sb_form_q");
    await searchvalue.fill("playwright");
    await page.keyboard.press("Enter");
    await page.locator("//li[@class='b_algo']//h2/a").first().click();
    await expect(page).toHaveTitle(/Playwright/i);

    
});
