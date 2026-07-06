# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3.test.ts >> Bing web Test
- Location: tests\Q3.test.ts:2:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.bing.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('Bing web Test',async({page})=>{
> 3  |     await page.goto("https://www.bing.com/" );
     |                ^ Error: page.goto: Test ended.
  4  |     const title = await page.title();
  5  |     const url=page.url();
  6  |     console.log("Title:",title);
  7  |     console.log("Url:",url);
  8  |     await expect (page).toHaveTitle(title);
  9  |     await expect (page).toHaveURL(url);
  10 |     const text = await page.locator('#sb_form_q').getAttribute('placeholder');
  11 |     console.log('Placeholder Text:', text);
  12 |     const type=page.locator('#sb_form_q').getAttribute('type');
  13 |     console.log(type);
  14 |     await page.fill('#sb_form_q',"playwright");
  15 |     await page.keyboard.press('Enter');
  16 |     await page.click("//a[@aria-label='Playwright']//div[@class='tpmeta']");
  17 |     const newtitle = page.title();
  18 |     console.log("Title:",newtitle)
  19 |     
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | });
  26 | 
```