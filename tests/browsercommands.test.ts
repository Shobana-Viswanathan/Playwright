import {test} from "@playwright/test"
test('Browser Command Test',async({page})=>{
   await page.goto("https://www.google.co.in/");
   const title = await page.title();
   console.log("Page Title:", title);
   page.close();
});