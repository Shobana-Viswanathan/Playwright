Feature: Login Functionality

Background:
    Given User should be navigated to the demowebshop application

Scenario Outline: Login 
    When User clicks the Login button in the application
    And User enters the "<email>" email
    And User enters the "<password>" password
    And User clicks the login button
    Then User should see "<result>"

Examples:
    | email             | password | result  |
    | shobs1@gmail.com  | sho@123  | success |
    | shobs1@gmail.com  | sh123    | error   |
