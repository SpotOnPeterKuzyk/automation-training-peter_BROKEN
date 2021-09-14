import {Component} from "./index"


export default class Pagination extends Component {


    constructor(props) {
        super(props)
        this._previousPageButtonSelector = props._previousPageButtonSelector || ".previous_page.disabled"
        this._nextPageButtonSelector = props._nextPageButtonSelector || ".next_page"
        this._pageSelector = props._pageSelector || "//a[normalize-space()='2']"
        this._activeSelector = props._activeSelector || ".current"
        this._paginationElement = props._paginationElement || ".pagination "

    }


    /**
     * Get the number of the current page.
     * @return {Number}
     */
    get currentPage() {
        return +this.$(this._pageSelector + this._activeSelector).getText()
    }

    /**
     * Click on the left arrow button.
     */
    prev() {
        this.$(this._previousPageButtonSelector).click()
    }

    /**
     * Click on the right arrow button.
     */
    next() {
        this.$(this._nextPageButtonSelector).click()
    }

    }
