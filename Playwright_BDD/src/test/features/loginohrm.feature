Feature: Login in Orange Hrm

    Background: 
    Given User should navigate to the Orange HRM 
    Scenario: Valid Login into orange hrm application
    And User have to enter the user name in the input field
    And User have to enter the password in the input field 
    When User have to click the login button in the orange hrm application
    And User should be logged success in the application
    Scenario: Invalid Login into the orange hrm application
    And User have to enter the user name in the input field
    And User have to enter the invalid password in the input field 
    When User have to click the login button in the orange hrm application
    Then User should not get successfull login 