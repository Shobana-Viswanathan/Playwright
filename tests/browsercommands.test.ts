import {test} from "@playwright/test"
test('Browser Command Test',async({page})=>{
   await page.goto("https://www.google.co.in/");
   console.log("Page Title:", await page.title());
   console.log("Page URL:",await page.url());
   console.log("Page source:",await page.content());
   page.close();

});