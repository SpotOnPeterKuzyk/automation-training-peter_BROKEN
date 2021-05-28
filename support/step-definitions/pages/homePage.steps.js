import { Given, When  } from "cucumber"
import { HomePage } from "../../pageobjects"
import "../../world"

const homePage = new HomePage()

Given(/^I am on the Puppy Adoption Agency home page$/, function () {
 homePage.open()
 homePage.isOpen()
})

When(/^I proceed to the detail section for the puppy "([^"]*)?"$/, function (name) {
 homePage.proceedToViewDetailsForPuppy(name)
})
