Feature: Register 
Background:
  Given User should navigate to the application
  And User have to click the Register
  Scenario: User register to application
  And User have to enter the firstname
  And User have to enter the lastname
  And User have to enter the email 
  And User have to enter the phone number
  And User have to enter the password in the field
  And User have to enter the confirm password 
  And User have to click agree button
  When User click the continue button
  Then User should see the successfull register