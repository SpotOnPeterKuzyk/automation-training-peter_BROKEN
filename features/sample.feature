Feature: See a puppy's details
  As a user
  I want to be able to see details about a puppy
  Before I adopt them

  Scenario: User is able to see a puppy's details
    Given I am on the Puppy Adoption Agency home page
    When I proceed to the detail section for the puppy "Hanna"
    Then I can see the puppy Hanna's name and details





