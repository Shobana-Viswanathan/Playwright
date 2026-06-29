import { test, expect } from '@playwright/test';

test('Login test 1', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    await page.click('#login2');
    await page.fill('#loginusername', "Shobs");
    await page.fill('#loginpassword', "shobi11");
    await page.click('button[onclick="logIn()"]');

    const welcometxt = await page.locator("#nameofuser").textContent();

    await expect.soft(welcometxt).toBe('Welcome Shobs');

});

test("Login Test 2", async ({ page }) => {

    test.skip(true, "Under maintenance");

    await page.goto("https://www.demoblaze.com/");

    await page.click('#login2');
    await page.fill('#loginusername', "Shobs");
    await page.fill('#loginpassword', "shobi11");
    await page.click('button[onclick="logIn()"]');

    await expect(
        page.getByRole("link", { name: "Log out" })
    ).toBeVisible();

    const welcometxt = await page.locator("#nameofuser").textContent();

    await expect(welcometxt).toBe('Welcome Shobs');

});