Feature: Verify that puppy is displayed
  As a user
  I von to see the puppy is present on the page
  so I can make selections

  Scenario: User is able to see Maggie May on a first page
    Given I am on the Puppy Adoption Agency home page
    Then I can see the "Maggie Mae" on "1" page

  Scenario: User is able to see Tipsy on second page
    Given I am on the Puppy Adoption Agency home page
    Then I go to second page to verify if "Tipsy" is on "2" page
