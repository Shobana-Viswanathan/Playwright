import {test,expect} from '@playwright/test'
test('Bing web Test',async({page})=>{
    await page.goto("https://www.bing.com/" );
    const title = await page.title();
    const url=page.url();
    console.log("Title:",title);
    console.log("Url:",url);
    await expect (page).toHaveTitle(title);
    await expect (page).toHaveURL(url);
    const searchButtonText = await page.locator("#sb_form_q").innerText();
    console.log("Inner Text:", searchButtonText);
    const placeholder = await page.locator("#sb_form_q").getAttribute("placeholder");
    console.log("Placeholder:", placeholder);
    await page.fill("#sb_form_q", "playwright");
    await page.keyboard.press("Enter");
    await page.locator("li.b_algo h2 a").first().click();
    await expect(page).toHaveTitle(/Playwright/i);
});
