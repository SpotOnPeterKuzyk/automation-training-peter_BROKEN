 import Component from "./component"

const defaultProps = {
  selector: "[class$='-MenuList']",
  optionSelector: "[class$='-option']",
}

export default class List extends Component {
  constructor(props = defaultProps) {
    super(props)
    this.optionSelector = props.optionSelector
  }

  /**
   * Check that list has options with particular text.
   * @param options
   * @returns {boolean}
   */
  hasOptions(options) {
    this.waitForDisplayed()
    this.waitForOptionsDisplayed()
    // For each option
    for (let option of options) {
      // Get option element
      option = this.getOption(option)
      // If option is undefined or is not displayed return false
      if (!option || !option.isDisplayed()) {
        return false
      }
    }
    // Return true if list has all target options
    return true
  }

  /**
   * Check if options are not displayed.
   * @param options
   * @returns {boolean}
   */
  hasNoOptions(options) {
    this.waitForDisplayed()
    // Get list text
    let text = this.getText()
    // For each option
    for (let option of options) {
      // Return false if list contains option text
      if (text.includes(option)) {
        return false
      }
    }
    // Return true if list doesn't contains options text
    return true
  }

  /**
   * Select option by text.
   * @param option
   */
  selectOption(option) {
    this.waitForOptionsDisplayed()
    this.getOption(option).click()
    this.waitForOptionsNotDisplayed()
  }

  /**
   * Select first option from list.
   */
  selectFirstOption() {
    this.waitForOptionsDisplayed()
    this.element.$(this.optionSelector).click()
    this.waitForOptionsNotDisplayed()
  }

  /**
   * Select option by index.
   * @param index
   */
  selectOptionByIndex(index) {
    this.waitForOptionsDisplayed()
    this.element.$$(this.optionSelector)[index].click()
    this.waitForOptionsNotDisplayed()
  }

  /**
   * Get option element.
   * @param option
   * @returns {*}
   */
  getOption(option) {
    this.waitForOptionsDisplayed()
    // Get list element
    return this.element
      // Find all options
      .$$(this.optionSelector)
      // Filter options by text and return option element with target text
      .find(el => el.getText().includes(option))
  }

  /**
   * Wait until options will be displayed.
   */
  waitForOptionsDisplayed() {
    this.element.$(this.optionSelector).waitForDisplayed()
  }

  /**
   * Wait until options will not be displayed.
   */
  waitForOptionsNotDisplayed() {
    $(this.optionSelector).waitForDisplayed({ reverse: true })
  }
}
