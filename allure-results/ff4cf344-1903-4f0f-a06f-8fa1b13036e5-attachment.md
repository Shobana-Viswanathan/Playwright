# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactus.test.ts >> Contact us form
- Location: tests\contactus.test.ts:2:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email') resolved to 2 elements:
    1) <input type="email" name="email" data-qa="email" required="required" placeholder="Email" class="form-control"/> aka getByRole('textbox', { name: 'Email', exact: true })
    2) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByPlaceholder('Email')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=e47]
        - generic [ref=e49]:
          - textbox "Name" [active] [ref=e51]: Shobs
          - textbox "Email" [ref=e53]
          - textbox "Subject" [ref=e55]
          - textbox "Your Message Here" [ref=e57]
          - button "Choose File" [ref=e59]
          - button "Submit" [ref=e61] [cursor=pointer]
      - generic [ref=e63]:
        - heading "Feedback For Us" [level=2] [ref=e64]
        - generic [ref=e65]:
          - paragraph [ref=e66]: We really appreciate your response to our website.
          - paragraph [ref=e67]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e68] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e69]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e70]: Thank you
  - contentinfo [ref=e71]:
    - generic [ref=e76]:
      - heading "Subscription" [level=2] [ref=e77]
      - generic [ref=e78]:
        - textbox "Your email address" [ref=e79]
        - button "" [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: 
        - paragraph [ref=e82]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e86]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Contact us form',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     await page.locator('//a[text()=" Contact us"]').click();
  5  |     await expect(page.locator("//h2[text()='Get In Touch']")).toBeVisible();
  6  |     await page.getByPlaceholder('Name').fill('Shobs');
> 7  |     await page.getByPlaceholder('Email').fill('demotest@gmail.com');
     |                                          ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email') resolved to 2 elements:
  8  |     await page.getByPlaceholder('Subject').fill('Late delivery');
  9  |     await page.getByPlaceholder('Your Message Here').fill('abcd');
  10 |     await page.locator('//input[@name="upload_file"]').setInputFiles('C:Downloads/image.jpg');
  11 |     await page.on("dialog",async(alert)=>{
  12 |         const msg=alert.message();
  13 |         console.log("Text:",msg);
  14 |         await alert.accept();
  15 |     });
  16 |     await page.getByRole('button',{name:'submit'}).click();
  17 |     await expect(page.locator("//div[@class='status alert alert-success']")).toBeVisible();
  18 |     await page.locator("//div[@id='form-section']").click();
  19 |     await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
  20 | 
  21 | })
  22 | 
```