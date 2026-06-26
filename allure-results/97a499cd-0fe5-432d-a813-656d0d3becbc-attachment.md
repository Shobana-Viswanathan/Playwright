# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmuaiadd.test.ts >> Add
- Location: tests\testmuaiadd.test.ts:2:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//p[@id=\'addmessage\']')
Expected: "30"
Received: "Entered value is not a number"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//p[@id=\'addmessage\']')
    3 × locator resolved to <p class="mt-20" id="addmessage"></p>
      - unexpected value ""
    10 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Add',async({page})=>{
  3  |     page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  4  |     const s1=page.locator("#sum1");;
  5  |     await s1.fill('10');
  6  |     const s2=page.locator("#sum2");
  7  |     await s2.fill('20');
  8  |     page.locator('//button[text()="Get Sum"]').click();
  9  |     const sum1 = await s1.inputValue();
  10 |     const sum2= await s2.inputValue();
  11 |     const res=Number(sum1)+Number(sum2);
  12 |     console.log("Sum:",res);
  13 |     //await page.locator("//p[@id='addmessage']");
  14 |     console.log("Console result"+await page.locator("//p[@id='addmessage']").textContent());
> 15 |     await expect(await page.locator("//p[@id='addmessage']")).toHaveText(res.toString());
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  16 |     
  17 | 
  18 |    
  19 | 
  20 | })
  21 | 
```