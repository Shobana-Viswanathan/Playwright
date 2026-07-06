Feature: Login to the application using data table
Background: 
    Given User should navigate to tutorial ninja application
    And User have to select the login
   Scenario: Login using data table
     Given User should enter the valid creadentials
     |email         |password      |
     |sham@gmail.com|1234          |
     When User click login button
     Then User should be logged successfully