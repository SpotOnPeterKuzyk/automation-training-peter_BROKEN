import Page from "./page"
import {Component} from "../components"

export default class PuppyDetailsPage extends Page {
    constructor() {
        super()
        this._puppyDetails = new Component({selector: "#content p"})
        this._puppyName = new Component({selector: "h2"})
        this._fees = new Component({selector: ".fees"})
    }

    /**
     * Get Adoption fees, return text after "£" symbol
     * @param fees
     */
    getAdoptionFees(fees) {
        this._fees.waitForDisplayed()
        const feesText = this._fees.getText().split("£").pop()
        expect(feesText).toEqual(fees)
    }

    /**
     * Click on a Adopt Me Button
     * @param name
     */
    clickAdoptMeButton(name) {
        const button = $(`input[value='${name}']`)
        return button.click()
    }

    /**
     * Assert puppy details page
     * @param name
     */
    verifyPuppyDetailPage(name) {
        this._puppyName.waitForDisplayed()
        let puppyName = this._puppyName.getText()
        expect(puppyName).toEqual(name)

    }
}
