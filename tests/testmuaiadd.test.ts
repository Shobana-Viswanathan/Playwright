import { test, expect } from '@playwright/test';

test('Add', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{ waitUntil: "networkidle" });

    const s1 = page.locator("#sum1");
    await s1.fill('10');
    console.log("First number entered");

    const s2 = page.locator("#sum2");
    await s2.fill('20');
    console.log("Second number entered");
    await page.getByRole('button', { name: 'Get Sum' }).click();
    const sum1 = await s1.inputValue();
    const sum2 = await s2.inputValue();
    const res = Number(sum1) + Number(sum2);
    console.log("Sum:", res);
    const resultText = await page.locator("#addmessage").textContent();
    console.log("Sum in result:", resultText);
    await expect(page.locator("#addmessage")).toHaveText(res.toString());

});




