Feature: Verify Login 
Background:
  Given User should navigate to the application of demoblaze
  And User have to click the login button in homepage
Scenario: Login to the demoblaze application
  And User have to enter the username in input field
  And User have to enter the password in input field
  When User have to click the login button after entering details
  Then User should see the success login