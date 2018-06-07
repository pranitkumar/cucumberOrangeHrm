Feature: HRM Login
  I want to use this template for my feature file

  Scenario: Positive flows
    Given I have site
    Then I entered credentials Admin and admin
    And User should be logged in

  Scenario Outline: Negative flows
    Given I have site
    When I entered credentials <username> and <password>
    Then User should be logged in

    Examples: 
      | username | password    |
      | pranit   | pranitkumar |
      | saurab   | saurabclass |
