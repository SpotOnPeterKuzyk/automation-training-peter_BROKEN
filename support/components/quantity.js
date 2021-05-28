import Component from "./component"

export default class Quantity extends Component {
  constructor(props) {
    super(props)
    this.plusComponentSelector = "[alt='increase quantity']"
    this.minusComponentSelector = "[alt='decrease quantity']"
  }

  /**
   * Set item quantity based on target quantity.
   * @param targetQuantity
   */
  setQuantity(targetQuantity) {
    // While we get quantity value and doesn't see target value we do actions below
    while (parseInt(this.getCurrentQuantity()) !== parseInt(targetQuantity)) {
      // if current quantity is less than target quantity
      parseInt(this.getCurrentQuantity()) <= parseInt(targetQuantity)
        // we click '+' icon
        ? this.element.$(this.plusComponentSelector).click()
        // if it's more then we click '-' icon
        : this.element.$(this.minusComponentSelector).click()
    }
  }

  /**
   * Get current quantity.
   * @returns {*}
   */
  getCurrentQuantity() {
    return this.element.$("p").getText()
  }

}
