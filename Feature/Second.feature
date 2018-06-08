Feature: Negative HRM Login
  I want to use this template for my feature file

  Background: 
    Given I have site

  Scenario: Negative flows
    When I entered credentials Admin and admin
    And click on login button
    Then User should be logged in successfully
