import Page from "./page"
import {Component, Pagination} from "../components"


export default class HomePage extends Page {
    constructor() {
        super()
        this._homePagePuppySection = new Component({selector: "#content"})
        this._puppyName = new Component({selector: ".puppy_list h3"})
        this._viewDetailsButton = new Component({selector: ".puppy_list input"})
        this._activeSelector = new Pagination({selector: "[class*='current']"})
    }

    /**
     * Checks that the home page is displayed
     */
    isOpen() {
        this._homePagePuppySection.isDisplayed()
    }

    open() {
        return super.open("")
    }

    /**
     * Returns the index of a puppy
     * @param name
     * @returns {number}
     */
    findPuppyIndex(name) {
        this._puppyName.waitForDisplayed()
        let puppyIndex
        for (let i = 0; i < this._puppyName.elements.length; i++) {
            if (this._puppyName.elements[i].getText() === name) {
                puppyIndex = i
            }
        }
        return puppyIndex
    }

    /**
     * Proceeds to the detail section for a specific puppy
     * @param name
     */
    proceedToViewDetailsForPuppy(name) {
        let index = this.findPuppyIndex(name)
        this._viewDetailsButton.elements[index].click()
    }

    /**
     * Verify if specific puppy is present
     * @param puppy
     */
    verifyPuppyIsPresent(puppy) {
        let index = this.findPuppyIndex(puppy)
        this._puppyName.elements[index].isDisplayed()
    }

    /**
     * Verify curent page number
     * @param number
     */
    verifyPageNumber(number) {
        expect(this._activeSelector.getText()).toEqual(number)
    }

}
