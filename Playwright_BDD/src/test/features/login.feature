Feature: User Authentication tests

 Background: 
  Given User navigates to the application
  And User click on the login link of application
 Scenario: Login should be success
 And User enters the username as "Shar"
 And User enters the password as "Shar123!"
 When User click on the login button in the application
 Then Login should be success

 