import {Then, When} from "cucumber"
import {PuppyDetailsPage} from "../../pageobjects"
import "../../world"

const puppyDetailsPage = new PuppyDetailsPage()


Then(/^I can see the puppy ([^"]*)?'s name and details$/, function (puppyName) {
    expect(puppyDetailsPage._puppyName).toHaveText(puppyName)
    expect(puppyDetailsPage._puppyDetails).toBeDisplayed()
})
Then(/^I can see adoptions fees are "([^"]*)"$/, function (fees) {
    puppyDetailsPage.getAdoptionFees(fees)
})
When(/^I click "([^"]*)" button on the details page$/, function (button) {
    puppyDetailsPage.clickAdoptMeButton(button)
})

When(/^I click "([^"]*)" button on the "([^"]*)" page$/, function (button, puppyName) {
    puppyDetailsPage.verifyPuppyDetailPage(puppyName)
    puppyDetailsPage.clickAdoptMeButton(button)

})
