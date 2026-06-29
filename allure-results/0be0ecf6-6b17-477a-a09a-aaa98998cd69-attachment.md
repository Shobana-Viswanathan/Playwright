# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactus.test.ts >> Contact us form
- Location: tests\contactus.test.ts:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - generic [ref=e52]: Success! Your details have been submitted successfully.
        - link " Home" [ref=e54] [cursor=pointer]:
          - /url: /
          - generic [ref=e55]:
            - generic [ref=e56]: 
            - text: Home
      - generic [ref=e58]:
        - heading "Feedback For Us" [level=2] [ref=e59]
        - generic [ref=e60]:
          - paragraph [ref=e61]: We really appreciate your response to our website.
          - paragraph [ref=e62]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e63] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e64]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e65]: Thank you
  - contentinfo [ref=e66]:
    - generic [ref=e71]:
      - heading "Subscription" [level=2] [ref=e72]
      - generic [ref=e73]:
        - textbox "Your email address" [ref=e74]
        - button "" [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: 
        - paragraph [ref=e77]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e81]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e83]
  - insertion [ref=e85]
```