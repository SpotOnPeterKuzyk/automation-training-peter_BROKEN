
import {Component} from "./index"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.previousPageButtonSelector = props.previousPageButtonSelector || ".previous_page.disabled"
        this.nextPageButtonSelector = props.nextPageButtonSelector || ".next_page"
        this.pageSelector = props.pageSelector || `//a[normalize-space()='${(this.index)}']`
        this.activeSelector = props.activeSelector || ".current"
    }

    /**
     * Get the number of the current page.
     * @return {Number}
     */
    get currentPage() {
        return +this.$(this.pageSelector + this.activeSelector).getText()
    }

    /**
     * Click on the left arrow button.
     */
    prev() {
        this.$(this.previousPageButtonSelector).click()
    }

    /**
     * Click on the right arrow button.
     */
    next() {
        this.$(this.nextPageButtonSelector).click()
    }

    /**
     * Click on the specific page button.
     * @param pageNumber
     */
    goTo(pageNumber) {
        this.$$(this.pageSelector)
            .find(page => +page.getText() === pageNumber)
            .click()
    }
}
