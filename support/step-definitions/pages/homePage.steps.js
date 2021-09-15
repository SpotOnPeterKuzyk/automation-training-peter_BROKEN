import {Given, Then, When} from "cucumber"
import {HomePage} from "../../pageobjects"
import "../../world"


const homePage = new HomePage()

Given(/^I am on the Puppy Adoption Agency home page$/, function () {
    homePage.open()
    homePage.isOpen()
})

When(/^I proceed to the detail section for the puppy "([^"]*)?"$/, function (name) {
    homePage.proceedToViewDetailsForPuppy(name)
})

Then(/^I can see the "([^"]*)" on "([^"]*)" page$/, function (name, pageNumber) {
    homePage.verifyPuppyIsPresent(name)
    homePage.verifyPageNumber(pageNumber)
})

Then(/^I go to second page to verify if "([^"]*)" is on "([^"]*)" page$/, function (name, pageNumber) {
    // homePage.clickNextPge()
    homePage.verifyPuppyIsPresent(name)
    homePage.verifyPageNumber(pageNumber)
})

Then(/^I proceed to the "([^"]*)" page$/, function (page) {
    homePage.selectPage(page)
})
Then(/^I proceed to the "([^"]*)" page to verify if "([^"]*)" is on "([^"]*)" page$/, function
    (page, name, pageNumber) {
    homePage.selectPage(page)
    homePage.verifyPuppyIsPresent(name)
    homePage.verifyPageNumber(pageNumber)
})
When(/^I pause the page$/, function () {
homePage.pausePage()
})
Then(/^I verify that I return back to the home page$/, function () {
    homePage.isOpen()
})
