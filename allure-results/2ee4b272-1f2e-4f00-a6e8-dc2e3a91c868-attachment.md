# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactus.test.ts >> Contact us form
- Location: tests\contactus.test.ts:2:1

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\Hp\OneDrive\Desktop\Playwright\Downloads\image.jpg'
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
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "Software testing courses" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Software testing courses
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]: Shobs
          - textbox "Email" [ref=e57]: demotest@gmail.com
          - textbox "Subject" [ref=e59]: Late delivery
          - textbox "Your Message Here" [active] [ref=e61]: abcd
          - button "Choose File" [ref=e63]
          - button "Submit" [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - insertion [ref=e76]:
    - generic [ref=e79]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e81]: Discover more
      - link "QA consulting services" [ref=e82] [cursor=pointer]:
        - generic "QA consulting services" [ref=e83]
        - img [ref=e85]
      - link "Development Tools" [ref=e87] [cursor=pointer]:
        - generic "Development Tools" [ref=e88]
        - img [ref=e90]
      - link "API testing tools" [ref=e92] [cursor=pointer]:
        - generic "API testing tools" [ref=e93]
        - img [ref=e95]
  - contentinfo [ref=e97]:
    - generic [ref=e102]:
      - heading "Subscription" [level=2] [ref=e103]
      - generic [ref=e104]:
        - textbox "Your email address" [ref=e105]
        - button "" [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: 
        - paragraph [ref=e108]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e109]:
      - paragraph [ref=e112]: Copyright © 2021 All rights reserved
      - generic:
        - insertion:
          - iframe [ref=e114]:
            
  - text: 
  - insertion [ref=e115]:
    - iframe [ref=e118]:
      - iframe [ref=f19e1]:
        - generic [ref=f20e1]:
          - generic [ref=f20e2]:
            - generic:
              - img [ref=f20e6] [cursor=pointer]
              - button [ref=f20e8] [cursor=pointer]:
                - img [ref=f20e9]
          - insertion [ref=f20e16]:
            - generic [ref=f20e17]:
              - link "Click Here" [ref=f20e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=ChIGNjulBavKRJLzNmsMPkMLRGO7tw4iIAez24sOTFaGm-PPQHRABIP20npUBYOWa6IPYDqABi-KKoAHIAQmoAwHIA5sEqgSCAk_QQTwgQAaWmT8VGdKd327DHcZuFR0PY4xyehIyOekA9sQ--Bzz5vKm4guWJngHsgI1S_o2S6wjswivoRyaGCovy9la3wt2sk0hXFT6Q2GqYsO9JvIzQugxh4IAk5cxgO5GFHejU52lsRZhDQB7Hv7q2899kN1xwczev3Vy4_QJpzUtLIi8ZSl0RIVaNlrDuaft0YNEtGqZB21runEAVJM5iNeKum0y3BO2qiUlVHwHryxPXnpIbf2d4zm6nbGEnyDk3m0wzObMErgVgrcLLwGRo6OZeTYzqLwHmLDH6h6-0j04GUsl7Q5rtgq_RyPwIxShFtEqgGo9qz2e4a8rgMNiisAE8834lKkF4AQDiAWY37OOVJAGAaAGTYAH3Z313wKoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WP_qr_DDq5UDYAGACgGYCwHICwGADAGqDQJJTuoNEwjHnLDww6uVAxW8pmYCHRBhFAPwDQGIDgmwE56CgiPQEwDYEw2IFAHYFAHQFQHKFgIKAPgWAYAXAbIXBBgCUAayGAkSAuhYGE0iAQDQGQE&ae=1&num=1&cid=CAQS9AEAEQoqgSWm9YwuyhKyfh8ids-AI8CtyrB2WJ-p8w19h0n5dt-9yECjiJzRh78VTfFjRUuQQsdtMi5w_3zf-MngspaNKO432Td7roU7q1EUEPjzFYibitiPDhPjMLeUA0RkxSvsFOE0YnSrvFrtM_VEZ-943eFN2Ae4SLQE0V2pYopSeZXpnWksn0ZLxcWGOVRN8g8N0RiOcenoq-cWZk50L9cHxd9VPYrJDRC3RiWsTj3D5f8LE-RW17zmC3bOtqjXD1Uj3-Oa_VWW6ElMLlqnJQo0clgeGjL9UQwTaa5VsKJpYN5tGVxETeS0AwsdxC_8cwiqGAE&sig=AOD64_3PqmOZTWvzvxCPKZUM-2d5oalVXg&client=ca-pub-1677597403311019&dbm_c=AKAmf-Djeu9NCwWvDWljIdav0r5yZ4HxT2UzrKz4f0LngzEFc4qtgGCMgdGhAjWmoH8ZeUVoWqeCdFJT44CFLM2QpJkWS-QrVS2YFbDo6-I367CyGvRFuJZxZJlxpLxGfJJ01WJSNeuiPFhT5uuGgpxsZIJDymuxMO2g6Fkf6zvw9B9fxEN-OkXpsmIBpgWp5Gv9JrHQOngIXwwgcbb1CF4odByDDoNF9_gpsOEmOyDQd-9zwrIzW-xlje5F5DXzqsvhGr-Gng9esy20H0f4wy9Uq81v7xSxnTWxv5DQw30sVA0HhkHACWQ&cry=1&dbm_d=AKAmf-Bz4Zl49s7oY-xq9FEQ7mtJ-bqVMRig_oGh_aXhq3DKr6avyaAQeBZq_dgeMRGYUS0yQHdx1eXFtkqPPDvaVz3_9oNsBinU-uORZ8SxgkeNfW1bidchjDE7bYRYXHPZ_4rUUqolvD3PiqfMjTo07A2hiwuwI6J3mt17e2s7Z4aBvP-GFP7Ub1EIOwmzKh1vSq2Ox74q3A2z-i7ljUfd5Rthj0lI6yjQ-eCjXQMklo9xRK6On_J5qxduRvkap8T21EZSe75YPtd3CgiyphizOWzrxXCIgv7fRQFBK-SFeHWlhUXKdy9kH_uXjcTC11IEd3E-peYqY1x9m6l10-_Y4JzYWmVcMHTcyOfjAfiAcgW4NKKjUmkkGT7N93pjrjPjPCm1s8STnE2jvauQDQBxTB8UluecQi2BOC12dlAFsKu3aSXHjp0pE_XmA0Cc7_zGvOX3rmfnzt8YNHuukBg4xFcIzQBwKpMIaTkgOLiNVtz4u05zipCHvWxjbOy-TGM8ZtnRIihJxZoeVedhIj5PYvQquXSQBiOc_Pw4xd7tpx1ysF9IZHGsJts_RQ3Q16GNp7aGjieXCHZyrlhAIPaG6rX2F9_zgxC6DoeaazDCGiVCHvmczuN_t1M-iefajHg0-KmeBnU0mGsUMfDFdCe_ufIDUUWmPWFm0cIZMp2jiX4gzpMYsv6RkbaWtyXKeo0DloPlaZqhcOQCmNeF8Ob8z8LEVzbmjA&adurl=https://servedby.flashtalking.com/click/7/299371;10256504;5440555;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0im2A06itSOpJNBWzp0sXp2&ft_impID=2C07A47B-4948-B5CB-8CA9-A936A9969058&ft_section=22578786200&g=6754D24B70BEF1&random=85719.38088300305&ft_width=728&ft_height=90&url=https://www.adobe.com/in/products/illustrator.html?sdid=WPHDJ44J&mv=display&mv2=display
                - img "Click Here" [ref=f20e19]
              - link "AdChoices arrow" [ref=f20e21] [cursor=pointer]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img "AdChoices arrow" [ref=f20e22]
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Contact us form',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/",{ waitUntil: "networkidle" });
  4  |     await page.locator('//a[text()=" Contact us"]').click();
  5  |     await expect(page.locator("//h2[text()='Get In Touch']")).toBeVisible();
  6  |     await page.getByPlaceholder('Name').fill('Shobs');
  7  |     await page.locator("//input[@placeholder='Email']").fill('demotest@gmail.com');
  8  |     await page.getByPlaceholder('Subject').fill('Late delivery');
  9  |     await page.getByPlaceholder('Your Message Here').fill('abcd');
> 10 |     await page.locator('//input[@name="upload_file"]').setInputFiles('C:Downloads/image.jpg');
     |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\Hp\OneDrive\Desktop\Playwright\Downloads\image.jpg'
  11 |     await page.on("dialog",async(alert)=>{
  12 |         const msg=alert.message();
  13 |         console.log("Text:",msg);
  14 |         await alert.accept();
  15 |     });
  16 |     await page.locator("//input[@name='submit']").click();
  17 |     await expect(page.locator("//div[@class='status alert alert-success']")).toBeVisible();
  18 |     await page.locator("//div[@id='form-section']").click();
  19 |     await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
  20 | 
  21 | })
  22 | 
```