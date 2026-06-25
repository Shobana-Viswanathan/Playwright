# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registeruser.test.ts >> Register Test
- Location: tests\registeruser.test.ts:2:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//b[text()=\'Enter Account Information\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//b[text()=\'Enter Account Information\']')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Shobs
- textbox "Email Address": demotestuser@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Register Test',async({page})=>{
  3  |    await page.goto('https://automationexercise.com/');
  4  |    await page.locator("//a[normalize-space()='Signup / Login']").click();
  5  |    await page.locator('//input[@data-qa="signup-name"]').fill("Shobs")
  6  |    await page.locator('//input[@data-qa="signup-email"]').fill("demotestuser@gmail.com");
  7  |    await page.locator('//button[@data-qa="signup-button"]').click();
> 8  |    await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
     |                                                                          ^ Error: expect(locator).toBeVisible() failed
  9  |    await page.click('#id_gender2');
  10 |    await page.fill('#password',"secret123");
  11 |    await page.locator('#days').selectOption('3');
  12 |    await page.locator('#months').selectOption('1');
  13 |    await page.locator('#years').selectOption('2004');
  14 |    await page.click('#newsletter');
  15 |    await page.click('#optin');
  16 |    await page.fill('#first_name',"Shami");
  17 |    await page.fill('#last_name',"S");
  18 |    await page.fill('#company',"XYZ");
  19 |    await page.fill('#address1',"ABC");
  20 |    await page.fill('#address2',"DEF");
  21 |    await page.fill('#state',"TN");
  22 |    await page.fill('#city','Trichy');
  23 |    await page.fill('#zipcode',"632210");
  24 |    await page.fill('#mobile_number',"9876543211");
  25 |    await page.click('//button[@data-qa="create-account"]');
  26 |    await expect(page.locator("//b[text()='Account Created!']")).toBeVisible();
  27 |    await page.locator('//a[@data-qa="continue-button"]').click();
  28 |    await expect(page.getByText('Logged in as Shobs')).toBeVisible();
  29 |    await page.locator('//a[text()=" Delete Account"]').click();
  30 |    await expect(page.locator('//b[text()="Account Deleted!"]')).toHaveText('Account Deleted!');
  31 |    await page.locator('//a[@data-qa="continue-button"]').click();
  32 | 
  33 | })
```