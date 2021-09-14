import Page from "./page"
import {Component} from "../components"

export default class PuppyDetailsPage extends Page {
    constructor() {
        super()
        this._puppyDetails = new Component({selector: "#content p"})
        this._puppyName = new Component({selector: "#content h2"})
        this._fees = new Component({selector: ".fees"})
    }
    getAdoptionFees(fees) {
        this._fees.waitForDisplayed()
        const feesText = this._fees.getText().split("£").pop()
        expect(feesText).toEqual(fees)
    }

}
