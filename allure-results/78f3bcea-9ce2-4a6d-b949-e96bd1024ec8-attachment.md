# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logindemoblaze.test.ts >> LoginDemo Test
- Location: tests\logindemoblaze.test.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('LoginDemo Test',async({page})=>{
> 4 |     await page.goto(process.env.BASE_URL!);
    |                ^ Error: page.goto: Target page, context or browser has been closed
  5 |     await page.click('#login2')
  6 |     await page.fill('#loginusername',process.env.U_NAME!);
  7 |     await page.fill('#loginpassword',process.env.PSWD!);
  8 |     await page.click('button[onclick="logIn()"]');
  9 | });
```