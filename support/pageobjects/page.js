import {Component} from "../components"

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    constructor() {
        this._body = new Component({selector: "html > body"})
        this._title = new Component({selector: "h1[class*='title']"})
        this._spinner = new Component({selector: "img[alt*='loading']"})
        this._userIcon = new Component({selector: "[class*='User_icon']"})
    }

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path) {
        return browser.url(`/${path}`)
    }

    /**
     * Check that 'Loading Spinner' is not displayed.
     */
    isOpen() {
        this.waitForLoadingToFinish()
    }

    /**
     * Wait until page will be loaded.
     * @returns {*}
     */
    waitForLoadingToFinish() {
        this._spinner.waitForDisplayed({reverse: true, interval: 500, timeout: 10000})
    }

    /**
     * Check if user is logged in.
     * @returns {*}
     */
    isLoggedIn() {
        this.waitForLoadingToFinish()
        return this._userIcon.isDisplayed()
    }
}
