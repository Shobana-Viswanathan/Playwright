import { test,expect } from '@playwright/test';
const searchdata=[{keyword:"Playwright",expectedTitle:"Playwright"},
    {keyword:"Selenium",expectedTitle:"Selenium"},
    {keyword:"Cypress",expectedTitle:"Cypress"}];
test.describe("Google search paramterized tests",()=>{
    for(const data of searchdata){
        test(`Search Flow - ${data.keyword}`,async({page})=>{
        page.goto("https://www.google.com");
        await page.locator("textarea[name='q']").fill(data.keyword);
        await page.keyboard.press("Enter");
        const firstresult=page.locator('h3').first();
        await firstresult.click();
        await expect(page).toHaveTitle(new RegExp(data.expectedTitle,"i"));
        })
    }
})