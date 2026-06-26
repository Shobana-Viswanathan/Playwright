# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: framesletcode.test.ts >> Frame
- Location: tests\framesletcode.test.ts:2:1

# Error details

```
Error: frame.fill: Unexpected token "" while parsing css selector "input[name='lname]". Did you mean to CSS.escape it?
Call log:
  - waiting for input[name='lname]

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [active] [ref=f1e9]: Shobi
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [ref=f1e12]
                  - iframe [ref=f1e14]:
                    - generic [active] [ref=f4e1]:
                      - generic [ref=f4e5]:
                        - generic [ref=f4e6]: Email
                        - textbox "Enter email" [ref=f4e7]
                      - generic:
                        - insertion:
                          - generic:
                            - iframe
                - insertion [ref=f1e16]:
                  - generic [ref=f1e19]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e21]: Discover more
                    - link "Koushik Chatterjee Consulting" [ref=f1e22] [cursor=pointer]:
                      - generic "Koushik Chatterjee Consulting" [ref=f1e23]
                      - img [ref=f1e25]
                    - link "Learning Resources Library" [ref=f1e27] [cursor=pointer]:
                      - generic "Learning Resources Library" [ref=f1e28]
                      - img [ref=f1e30]
                    - link "Development Tools" [ref=f1e32] [cursor=pointer]:
                      - generic "Development Tools" [ref=f1e33]
                      - img [ref=f1e35]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]: switchTo()
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e74]: defaultContent()
              - listitem [ref=e75]:
                - img [ref=e76]
                - generic [ref=e79]: parentFrame()
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Overloading concept - JAVA
            - generic [ref=e85]:
              - link "Watch Tutorial" [ref=e86] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e87]
                - generic [ref=e89]: Watch Tutorial
              - generic [ref=e90]:
                - text: "Practice ID:"
                - code [ref=e91]: frame
          - generic [ref=e92]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - paragraph [ref=e95]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e96] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e97] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e98]:
          - link "GitHub" [ref=e99] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e100]
          - link "YouTube" [ref=e103] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e104]
          - link "LinkedIn" [ref=e107] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e108]
          - link "Contact" [ref=e113] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e114] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e115]:
    - iframe [ref=e118]:
      - generic [active] [ref=f9e1]:
        - generic [ref=f9e6]:
          - link [ref=f9e8] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=9&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
            - img [ref=f9e9]
          - link "Coursera" [ref=f9e11] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=19&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
            - img "Coursera" [ref=f9e12]
          - generic [ref=f9e13]:
            - generic "Coursera" [ref=f9e14]:
              - link "Coursera" [ref=f9e15] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
            - generic "Coursera" [ref=f9e16]:
              - link "New Google AI Certificate" [ref=f9e17] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
                - text: New Google AI
                - text: Certificate
            - generic "Coursera" [ref=f9e18]:
              - link "Enroll in the new Google AI Professional Certificate today." [ref=f9e19] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
                - text: Enroll in the new Google AI
                - text: Professional Certificate today.
          - link "Learn More" [ref=f9e22] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cd3DexVA-aqP6Jr6assUPyJXWgQquiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQmpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0Neasbf3HRNU3HAheJMULrX6x_5LTV_nWLIBo_LPDvZp_NpSQCdSSjc37UlcPYFJw0ppzf4jdFV2vuViFAli-mEl6N9N7VOxUeIUp63ApibQfEyn3WXJd7o9_QSTVdGn6snQ02BxMA5m9547eCVw64_mFeKaOSjTeKzLLI9PmKsgbc7wG4ZdTppVBoGTiKkmvZx_sLXGSCqCxb2FKrYe9zz0ByGrddRMUBQuyRoSv-4mH_h0Y6AA4jbCiAbiKwqoZqLn6LmIETMaMuqXZ4Rn9YlebHL_0W_mXNinIBBfsbtzC78iheIA2a7ABJD6pvjpBYgFvZSh7FegBi6AB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliTwe7f1aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAYAMAaIMRSoKCgiO37ECleKxAmIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCLb47t_VpJUDFT6NrAIdyIo1oPANAogOCbAOgPDa7xi4E-QD2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE&num=1&cid=CAQShgIAEQoqgezshHjonVhVeyQn99XKX3B0k9DO7e5Sb1FMo_js4u3K-Eg4306gqY3VyJhvNJ5H0wV8EIwq-qtjpJKiwyo3CXolv9loktdVAD9i3iVWmBD1epTjWzglCgc7tBBFr4KjaXQMFdQoJvCtZyD9pOLsyyIXavsHEGrCKi1HOjjcOavw6It9AMY9BvYdv6VmvnqOnNKIvXoSnTC5QEhX4sek4WAcIDzSMQ9VdbvAZlXH35Vo4WYKHXApMdlKmNZFxXAVs3OpRb-wOUJNyjpDXySt-T1idf8F2wAeqvFOhyTAbFeiiFRkr6CpxOZcwXy_1rR4RHZykS5UglOOOaXZGBkQAvniGAE&sig=AOD64_02oj3QR8eYPK0BHObuRD37_Goc1g&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI4_Du39WklQMVPo2sAh3IijWgEAEYASAAEgIDU_D_BwE
            - generic [ref=f9e23]: Learn More
        - img [ref=f9e27] [cursor=pointer]
        - button [ref=f9e29] [cursor=pointer]:
          - img [ref=f9e30]
        - iframe
  - insertion [ref=e121]:
    - generic [ref=e124]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e126]: Discover more
      - link "Test Automation Training" [ref=e127] [cursor=pointer]:
        - generic "Test Automation Training" [ref=e128]
        - img [ref=e130]
      - link "LetCode Courses" [ref=e132] [cursor=pointer]:
        - generic "LetCode Courses" [ref=e133]
        - img [ref=e135]
      - link "Educational Course Development" [ref=e137] [cursor=pointer]:
        - generic "Educational Course Development" [ref=e138]
        - img [ref=e140]
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | test('Frame',async({page})=>{
  3  |     await page.goto('https://letcode.in/frame');
  4  |     const allframes=page.frames();
  5  |     console.log("No of Frames:" + allframes.length);
  6  |     const myframe=page.frame("firstFr");
  7  |     //? checking condition null
  8  |     await myframe?.fill("input[name='fname']","Shobi");
> 9  |     await myframe?.fill("input[name='lname]","V");
     |                    ^ Error: frame.fill: Unexpected token "" while parsing css selector "input[name='lname]". Did you mean to CSS.escape it?
  10 |     const frame=page.frameLocator('iframe[name="firstFr"]');
  11 |     await expect(frame.locator('p.text-sm font-semibold text-center')).toContainText("Shobi");
  12 |     
  13 | })
  14 | 
```