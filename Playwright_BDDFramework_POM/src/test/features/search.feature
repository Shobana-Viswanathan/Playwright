Feature: Product Search

  Background:
    Given User should navigate to the application

  Scenario Outline: Search different products
    And User enters "<product>" in the search field
    When User clicks the search button
    Then User should see "<product>" in the search results

    Examples:
      | product |
      | MacBook Pro|
      | Samsung Galaxy Tab 10.1|
     
  Scenario: Search non-existing product
    And User enters "hi" in the search field
    When User clicks the search button
    Then User should see no products found message