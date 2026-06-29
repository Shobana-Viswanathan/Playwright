import { test, expect } from "@playwright/test";

test('Verify subscription', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible();

    await page.locator("//h2[text()='Subscription']").scrollIntoViewIfNeeded();

    await expect(page.locator("//h2[text()='Subscription']")).toBeVisible();

    await page.locator("//input[@id='susbscribe_email']").fill('sho@gmail.com');

    await page.click("//button[@id='subscribe']");

    await expect(page.locator("//div[@class='alert-success alert']")).toBeVisible();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();

});