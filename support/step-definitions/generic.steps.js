import {Then, When} from "cucumber"
import Page from "../pageobjects/page"
import Popup from "../pageobjects/popup"


const page = new Page()
const confirmationPopup = new Popup()


// eslint-disable-next-line max-len
When(/^I click on "([^"]*)?" (button|link) on "([^"]*)?" (?:section|page|popup)$/, function (el, elType, pageName) {
    let elementType = this.transform.elementTypeToVariableName[elType]
    let elName = this.transform.stringToVariableName(el + elementType)
    let currentPage = this.pageMap[pageName]
    currentPage[elName].click()
})

// eslint-disable-next-line max-len
When(/^I (?:type|enter) "(.*)" to "([^"]*)" input on "([^"]*)?" (?:section|page|popup)$/, function (text, elName, pageName) {
    let element = this.transform.stringToVariableName(elName + "Input")
    let currentPage = this.pageMap[pageName]
    currentPage.isOpen()
    currentPage[element].setText(text)
})

// eslint-disable-next-line max-len
When(/^I select "(.*)" option "([^"]*)" radio button group on "([^"]*)?" (?:section|page|popup)$/, function (option, elName, pageName) {
    let element = this.transform.stringToVariableName(elName + "RadioButtonGroup")
    let currentPage = this.pageMap[pageName]
    currentPage[element].selectOption(option)
})

When(/^I accept changes in popup$/, () => {
    confirmationPopup.apply()
})

// eslint-disable-next-line max-len
Then(/^the "([^"]*)"(?: )?(link|button) on "([^"]*)?" (?:section|page|popup) (should|should not) be displayed$/, function (el, elType, pageName, expectation) {
    let targetExpectation = this.transform.shouldToBoolean(expectation)
    let elementType = this.transform.elementTypeToVariableName[elType]
    let currentPage = this.pageMap[pageName]
    let element = currentPage[this.transform.stringToVariableName(el + elementType)]
    expect(element.isDisplayed()).toEqual(targetExpectation)
})

// eslint-disable-next-line max-len
Then(/^the "([^"]*)"(?: )?(link|button) on "([^"]*)?" (?:section|page|popup) (should|should not) be enabled$/, function (el, elType, pageName, expectation) {
    let targetExpectation = this.transform.shouldToBoolean(expectation)
    let elementType = this.transform.elementTypeToVariableName[elType]
    let currentPage = this.pageMap[pageName]
    let element = currentPage[this.transform.stringToVariableName(el + elementType)]
    expect(element.isEnabled()).toEqual(targetExpectation)
})

// eslint-disable-next-line max-len
Then(/^(?:the )?"([^"]*)" ?(input|button) on "([^"]*)?" (?:section|page|popup) (should|should not) have the "(.*)" text$/, function (el, elType, pageName, expectation, text) {
    let targetExpectation = this.transform.shouldToBoolean(expectation)
    let elementType = this.transform.elementTypeToVariableName[elType]
    let currentPage = this.pageMap[pageName]
    let element = currentPage[this.transform.stringToVariableName(el + elementType)]
    expect(element.hasText(text)).toEqual(targetExpectation)
})

// eslint-disable-next-line max-len
Then(/^(?:the )?"([^"]*)" ?(input|button) on "([^"]*)?" (?:section|page|popup) (should|should not) have the "(.*)" error$/, function (el, elType, pageName, expectation, error) {
    let targetExpectation = this.transform.shouldToBoolean(expectation)
    let elementType = this.transform.elementTypeToVariableName[elType]
    let currentPage = this.pageMap[pageName]
    let element = currentPage[this.transform.stringToVariableName(el + elementType)]
    expect(element.hasError(error)).toEqual(targetExpectation)
})

Then(/^I should be logged in$/, () => {
    expect(page.isLoggedIn()).toBeTruthy()
})

Then(/^confirmation popup appears with title "(.*)" and description "(.*)"$/, function (title, description) {
    expect(confirmationPopup.hasTitle(title)).toBeTruthy()
    expect(confirmationPopup.hasDescription(description, false)).toBeTruthy()
})

