# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterize.test.ts >> Google search paramterized tests >> Search Flow - Playwright
- Location: tests\parameterize.test.ts:8:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('h3').first()
    - waiting for" https://www.google.com/search?q=Playwright&sca_esv=2ab59e100257b972&source=hp&ei=BB9CatuuJtC52roPn6XFkA4&iflsig=ABILxe8AAAAAakItFMpcTMx7PtBevQMrXTlYCP9g9xe2" navigation to finish...
    - navigated to "https://www.google.com/search?q=Playwright&sca_esv=2ab59e100257b972&source=hp&ei=BB9CatuuJtC52roPn6XFkA4&iflsig=ABILxe8AAAAAakItFMpcTMx7PtBevQMrXTlYCP9g9xe2"
    - waiting for" https://www.google.com/search?q=Playwright&sca_esv=2ab59e100257b972&source=hp&ei=BB9CatuuJtC52roPn6XFkA4&iflsig=ABILxe8AAAAAakItFMpcTMx7PtBevQMrXTlYCP9g9xe2&sei=Bh9Caq7DGNWJ4dUPt9_B4Qc" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DPlaywright%26sca_esv%3D2ab59e100257b972%26source%3Dhp%26ei%3DBB9CatuuJtC52roPn6XFkA4%26iflsig%3DABILxe8AAAAAakItFMpcTMx…"

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```