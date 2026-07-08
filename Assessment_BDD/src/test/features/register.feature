Feature: Register functionality
Background: 
    Given User should be navigated to the demowebshop application
Scenario: Register
      When User clicks the register button in the application
      And User enters their personal details like gender,firstname,lastname,email,password
      And User clicks register button
      Then User should have successfull register
       
