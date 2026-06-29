# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testtags.test.ts >> Invalid Login Test 2 @Invalid
- Location: tests\testtags.test.ts:12:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"

```

```yaml
- dialog:
  - heading "About us" [level=5]
  - button "Close"
  - button "Close"
- navigation:
  - button "Toggle navigation"
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - img "Second slide"
  - img "Third slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Login test 1 @Valid',async({page})=>{
  3  |      await page.goto("https://www.demoblaze.com/");
  4  |     await page.click('#login2')
  5  |     await page.fill('#loginusername',"Shobs");
  6  |     await page.fill('#loginpassword',"shobi11");
  7  |     await page.click('button[onclick="logIn()"]');
  8  |     const welcometxt = page.locator("#nameofuser").textContent();
  9  | 
  10 |     await expect.soft(welcometxt).toBe('Welcome Shobs');
  11 | })
  12 | test("Invalid Login Test 2 @Invalid",async({page})=>{
  13 |      await page.goto("https://www.demoblaze.com/");
  14 |     await page.click('#login2')
  15 |     await page.fill('#loginusername',"Shobs");
  16 |     await page.fill('#loginpassword',"shobi11");
  17 |     await page.click('button[onclick="logIn()"]');
> 18 |     await expect(page.getByRole("link",{name:"Log out"})).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  19 |     const welcometxt = page.locator("#nameofuser").textContent();
  20 |     expect(welcometxt).toBe('Welcome Shobs');
  21 | 
  22 | })
```