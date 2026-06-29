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
          - link "Software testing certifications" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Software testing certifications
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
      - link "Constitutional Law & Civil Rights" [ref=e82] [cursor=pointer]:
        - generic "Constitutional Law & Civil Rights" [ref=e83]
        - img [ref=e85]
      - link "Test case templates" [ref=e87] [cursor=pointer]:
        - generic "Test case templates" [ref=e88]
        - img [ref=e90]
      - link "File Sharing & Hosting" [ref=e92] [cursor=pointer]:
        - generic "File Sharing & Hosting" [ref=e93]
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
    - paragraph [ref=e112]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e113]:
    - iframe [ref=e116]:
      - iframe [ref=f24e1]:
        - generic [active]:
          - generic [ref=f29e1]:
            - generic [ref=f29e2]:
              - generic:
                - img [ref=f29e6] [cursor=pointer]
                - button [ref=f29e8] [cursor=pointer]:
                  - img [ref=f29e9]
            - insertion [ref=f29e16]:
              - generic [ref=f29e17]:
                - link "Click Here" [ref=f29e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=C3pzK7EJCaqm9CN2Wk7QPvbGxmAvd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgAJP0J0Os_6WALqap6iBJR9XfQuMV5iPnpUvPQMVCbWab6CGMGC_nTVINUa1xwcQJpYF_17aXjea7dYkCBlhyClOYvtZRFK5nnKnt9sz0BqZM4acschnxN8UHkVoFFoNAH-1OqTr0zYygOoP27JinSfvTx1gRnQXbA_NQ-IWw0nDvntNbi9wNvcKJMDiwGo-w6GTjOx28mBTJqQfJwkHAkurpCCeCWpkF_d7LI0e4Z5d4K-oDS6ROpFTpLInzS2F5jJHOlaa4F8myZeHjI3YfXtSPEqgxzWuIJ9A11x7jl0IUUVYRsliWBjLylteVpSo-ip3Zyc1xo-XDMwrQmtpr9VqwATz3IzutAXgBAOIBY-elaNUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYxbuejZmslQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCP_qno2ZrJUDFV3LhAAdvVgMs_ANAYgOCbATpI6CI9ATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQS8wEAEQoqgQMRiRu906vDNqiNr8T6MxxXeMY39RJai7Y1NzFd574lxk7lNny8qz6xE1VPsPZCkdTwZC5suEB-IKiAD5Pvr06QbSq0l5aYjexrQwJ6rX4sKmuLRCh6K703Oj8z67R86tPSvtRondkTVcvDxnPhVPEZ6cXUs6pUm5AJjGV7iroahnB6WQ67Ifd1Rs-M5Zr03Gz00itBeo5NpdqW-V7uFE0F9hObQdFLKU4MKU2iZ1lr6_KvO7haqycJQ9GsaNPx3lll4iVRW1jmylwOXU1FmqEL2luiMUfpu5gNPWFR8d8NNl7Vn1f99vw4C7r549wYAQ&sig=AOD64_04Pa9gjRjBa_S-JYYxMUrFv8Ax1g&client=ca-pub-1677597403311019&dbm_c=AKAmf-Cdebz5LdAb4DBNohw8gglDNUmrlMCgcanxLVMaXMT1E9w2cdHXWIbOnL91dWaRrHKc_gp8CCTZlkCKVHJuf9IoovVywt69KWUrpJW-LjFvxnbHFCIbCRtp1t1c8rB_7jvRhjtXvXX0EU4HlvvoP57geh0LC8JY7mLLgrBP6Gd1J50EmMDwfdMgihzE8XOH1vV5cmKL_PKVKRtXyNS3LQHGzNfFop1llRtXRGTD9GiCwO7MywafYb83rKFEclxj-V8X1T7YCkrNBVsxfLHmDFmKp1JOa1Q2rsOJrd3aq2bA5UuwT7Y&cry=1&dbm_d=AKAmf-B0jlv7VgO5pGOtyDzZdpWWdItNcnCKvQBUIpLGk9Z-mYHD6HCvfxscLbnqT1RbsuAPod5tVAEc6UlG1TqrwIrZ3tbYUfchbARMYvfuxvQxEqqRj6NIItLASgtOJvjIZGmkxPHCejcMHb0RRZLceYG8sjjkxKjrlVc63gajfM_RbDEksS045JY1dpFhGOMAMFQ1qYDvtc9GUgJdJ8MkdSFHUYC0mFq5jzke6YpadcUZjB1Owusd3fU14810NxSjzjt7J8zHn2MacRbflLcQgBzsNG8TctI8kjMEMcNl7QHjV8SPZoeU5BRRc33S2ajOyvU2pX-1cQHRB1VI4_BU4boFtUdPQ45arvsy7W_ccyrCN1KIpSdeDZ6P7uNgyLMUWRln_80QYyVGYmfJ814A4QiJO7LaBoGtIal-F4QnCGLpz4bNDFiPEfoHFv756bcndLx6OkrR9rP_QxCzFVT9mf0OH1KtBPDp52UxMQsM6IVAdl25jhY9Yh4KfXmtcl00ZEuAPMXTjig2mo-e_4MIdOV1RFuKoHtRcrT_V4PM28ushPd-RH3nExaQHtxXrFVhSa0vJaADIR6nSThv37BtqTy63Qk_DGxjjVVmnzxOp5OQsFvViSybLdoy3D6l8oJhgoi7KvUlTvIhdUVNS5g96tMss1_hwLHCIuODKVWDEMuyaZXTHRDi4QrcxzKjNm5kb_yaOxJAI6P5aXCXzl5ofWAiBghuJQ&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146781;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jyDwkDVp9eGyXMT5Okcjvu&ft_impID=F6B220AE-CEAA-C788-C04E-E49605AA71B4&ft_section=22622326543&g=67544C2546A047&random=441703.23729181633&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f29e19]
                - link "AdChoices arrow" [ref=f29e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f29e22]
                - link "Privacy Notification" [ref=f29e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f29e25]
                - link "Privacy Notification" [ref=f29e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f29e28]
          - iframe
          - iframe [ref=f29e29]:
            
          - iframe [ref=f29e30]:
            
          - iframe [ref=f29e31]:
            
          - iframe [ref=f29e32]:
            
          - iframe [ref=f29e33]:
            
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