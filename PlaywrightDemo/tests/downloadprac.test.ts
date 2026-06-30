import { test,expect } from '@playwright/test';
test('Download a file',async({page})=>{
    page.goto("https://demoqa.com/upload-download");
    await downloadwait=waitForEvent('download');
    await page.locator("//a[@id='downloadButton']").click();
    await download=await download
})