import { test,expect } from '@playwright/test';
test('Handle New Window',async({page,context})=>{
   await page.goto("https://demoqa.com/browser-windows");
   console.log("First window url",page.url());
   const [newWindow] = await Promise.all([context.waitForEvent("page"),page.locator("#windowButton").click()]);
   await newWindow.waitForLoadState("domcontentloaded");
   console.log("New Window url:",newWindow.url());
    const heading = await newWindow.locator("#sampleHeading").textContent();
    console.log("Heading: ", heading);
    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
    await newWindow.close();
})
