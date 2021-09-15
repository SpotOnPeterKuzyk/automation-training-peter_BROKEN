Feature: See a puppy's details
  As a user
  I want to be able to see puppy details and price
  Before I adopt them

  Scenario: User is able to see a puppy's details and price
    Given I am on the Puppy Adoption Agency home page
    When I proceed to the "3" page
    Then I can see the "Twinkie" on "3" page
    Then I proceed to the detail section for the puppy "Twinkie"
    Then I can see adoptions fees are "22.50"


