Feature: Positive HRM Login
  I want to use this template for my feature file

  Background: 
    Given I have site

  Scenario Outline: Positive flows
    When I entered credentials <username> and <password>
    And click on login button
    Then User should be logged in successfully

    Examples: 
      | username | password    |
      | pranit   | pranitkumar |
      | saurab   | saurabclass |
