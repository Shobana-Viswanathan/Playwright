import { test,expect } from '@playwright/test';
test('Contact us form',async({page})=>{
    await page.goto("https://automationexercise.com/",{ waitUntil: "networkidle" });
    await page.locator('//a[text()=" Contact us"]').click();
    await expect(page.locator("//h2[text()='Get In Touch']")).toBeVisible();
    await page.getByPlaceholder('Name').fill('Shobs');
    await page.getByPlaceholder('Email').fill('demotest@gmail.com');
    await page.getByPlaceholder('Subject').fill('Late delivery');
    await page.getByPlaceholder('Your Message Here').fill('abcd');
    await page.locator('//input[@name="upload_file"]').setInputFiles('C:Downloads/image.jpg');
    await page.on("dialog",async(alert)=>{
        const msg=alert.message();
        console.log("Text:",msg);
        await alert.accept();
    });
    await page.locator("//input[@name='submit']").click();
    await expect(page.locator("//div[@class='status alert alert-success']")).toBeVisible();
    await page.locator("//div[@id='form-section']").click();
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();

})
