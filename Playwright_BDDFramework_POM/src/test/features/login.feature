Feature: Verify Login

    Background: 
    Given User should navigate to tutorial ninja application
    And User have to select the login
    Scenario: Valid login to the application
    And User have to enter the email address
    And User have to enter the password
    When User clicks the login button
    Then User should have successfull login
    Scenario:Invalid login to the application
    And User have to enter the email address
    And User have to enter the invalid password
    When User clicks the login button
    Then User should not have successfull login
