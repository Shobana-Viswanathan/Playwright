import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto("https://demoqa.com/droppable");

    const source = page.locator("#draggable");
    const target = page.locator("#droppable");

    await source.dragTo(target);

    await expect(target).toContainText("Dropped!");

});