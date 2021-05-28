import { Then  } from "cucumber"
import { PuppyDetailsPage } from "../../pageobjects"
import "../../world"

const puppyDetailsPage = new PuppyDetailsPage()

Then(/^I can see the puppy ([^"]*)?'s name and details$/, function (puppyName) {
  expect(puppyDetailsPage._puppyName).toHaveText(puppyName)
  expect(puppyDetailsPage._puppyDetails).toBeDisplayed()
})