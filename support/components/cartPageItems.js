import List from "./list"

const defaultProps = {
  selector: "[class*='CartPage_items']",
  optionSelector: "[class*='ItemButton']",
}

export default class CartPageItems extends List {
  constructor(props = defaultProps) {
    super(props)
    this.quantitySelector = "[class*='CartPageItem_quantity']"
    this.titleSelector = "[class*='CartPageItem_name']"
    this.priceSelector = "[class*='CartPageItem_price']"
  }

  /**
   * Check if items have particular quantity value.
   * @param options
   * @returns {boolean}
   */
  itemsHaveQuantity(options) {
    this.waitForDisplayed()
    // Get each option
    for (let option of options) {
      // If target option doesn't have target quantity return false
      if (!this.getOption(option[0]).$(this.quantitySelector).getText() === option[1]) {
        return false
      }
    }
    // If all options have target quantity return true
    return true
  }

  /**
   * Check if items have particular price.
   * @param options
   * @returns {boolean}
   */
  itemsHavePrice(options) {
    this.waitForDisplayed()
    // Get each option
    for (let option of options) {
      // If target option doesn't have target price return false
      if (!this.getOption(option[0]).$(this.priceSelector).getText() === option[1]) {
        return false
      }
    }
    // If all options have target price return true
    return true
  }

  /**
   * Check if items have particular quantity value.
   * @param item
   * @param options
   * @returns {boolean}
   */
  itemHasSubItems(item, options) {
    this.waitForDisplayed()
    // Get each option
    options.forEach(option => {
      // If target option doesn't have sub items text inside return false
      if (!this.getOption(item).getText().includes(option)) {
        return false
      }
    })
    // If all options have target sub items text inside return true
    return true
  }
}