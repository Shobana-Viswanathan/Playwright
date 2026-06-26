# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmuaiadd.test.ts >> Add
- Location: tests\testmuaiadd.test.ts:2:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "load"

```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Add',async({page})=>{
> 3  |     page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
     |          ^ Error: page.goto: Test ended.
  4  |     const s1=page.locator("#sum1");;
  5  |     s1.fill('10');
  6  |     const s2=page.locator("#sum2");
  7  |     s2.fill('20');
  8  |     page.locator('//button[text()="Get Sum"]').click();
  9  |     const sum1 = await s1.inputValue();
  10 |     const sum2= await s2.inputValue();
  11 |     const res=Number(sum1)+Number(sum2);
  12 |     console.log("Sum:"+res);
  13 |     const resloc=page.locator("//p[@id='addmessage']");
  14 |     const res2=resloc.innerText();
  15 |     console.log(res2);
  16 | 
  17 |    
  18 | 
  19 | })
  20 | 
```