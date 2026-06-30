import { test } from '@playwright/test';

test('Demoblaze WebElement Commands', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    // Clear
    await page.locator('#loginusername').clear();
    // Fill 
    await page.locator('#loginusername').fill('Shobs');
    // Fill 
    await page.locator('#loginpassword').fill('shobi11');
    // Get Text
    const text = await page.locator('#logInModalLabel').textContent();
    console.log("Text :", text);
    // isVisible
    console.log("Username Visible :", await page.locator('#loginusername').isVisible());
    // isEnabled
    console.log("Login Button Enabled :", await page.locator("//button[text()='Log in']").isEnabled());
    // getAttribute
    const attribute = await page.locator('#loginusername').getAttribute('type');
    console.log("Attribute :", attribute);
    // Evaluate
    const tagName = await page.locator('#loginusername').evaluate(ele => ele.tagName);
    console.log("Tag Name :", tagName);
    // CSS Property
    const color = await page.locator("//button[text()='Log in']").evaluate(ele =>
        window.getComputedStyle(ele).backgroundColor
    );
    console.log("Button Background Color :", color);
    // Bounding Box
    const box = await page.locator("//button[text()='Log in']").boundingBox();
    console.log("Bounding Box :", box);
    // Element Screenshot
    await page.locator("//button[text()='Log in']").screenshot({path: 'LoginButton.png'});
    // Full Page Screenshot
    await page.screenshot({ path: 'DemoblazeHome.png', });
    // Click Login Button
    await page.locator("//button[text()='Log in']").click();
});