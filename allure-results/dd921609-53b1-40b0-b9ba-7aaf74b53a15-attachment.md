# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: framesletcode.test.ts >> Frame
- Location: tests\framesletcode.test.ts:2:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')
Expected substring: "Shobi"
Received string:    "You have entered Mythily S"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')
    13 × locator resolved to <p class="text-sm font-semibold text-center">You have entered Mythily S</p>
       - unexpected value "You have entered Mythily S"

```

```yaml
- paragraph: You have entered Mythily S
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Frame',async({page})=>{
  3  |     await page.goto('https://letcode.in/frame');
  4  |     const allframes=page.frames();
  5  |     console.log("No of Frames:" + allframes.length);
  6  |     const myframe=page.frame("firstFr");
  7  |     //? checking condition null
  8  |     await myframe?.fill("input[name='fname']","Mythily");
  9  |     await myframe?.fill("input[name='lname']","S");
  10 |     const frame=page.frameLocator('iframe[name="firstFr"]');
> 11 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Shobi");
     |                                                                        ^ Error: expect(locator).toContainText(expected) failed
  12 | 
  13 | });
  14 | 
  15 | test("Frame2 - Inner Frame", async ({ page }) => {
  16 |   await page.goto("https://letcode.in/frame");
  17 |   const firstFrame = page.frameLocator("#firstFr");
  18 |   await firstFrame.locator("input[name='fname']").fill("Mythily");
  19 |   await firstFrame.locator("input[name='lname']").fill("S");
  20 |   await expect(firstFrame.locator("p.text-sm.font-semibold.text-center")).toContainText("Mythily S");
  21 |   const innerFrame = firstFrame.frameLocator("iframe[title='Inner Frame']");
  22 |   await expect(innerFrame.locator("input[name='email']")).toBeVisible();
  23 |   await innerFrame.locator("input[name='email']").fill("mythily@gmail.com");
  24 | });
  25 | 
```