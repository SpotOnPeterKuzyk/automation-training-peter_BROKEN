import Component from "./component"
import ElementLocatorHelper from "../helpers/element-locator.helper"

export default class RadioButtonGroup extends Component {
  constructor(props) {
    super(props)
    this.optionSelector = "[class*='RadioInput_RadioInput']"
  }

  /**
   * Check that radio button group has options with particular text.
   * @param options
   * @returns {boolean}
   */
  hasOptions(options) {
    // For each option
    for (let option of options) {
      // Get option element by text
      option = this.getOption(option)
      // Return false if option is undefined or is not displayed
      if (!option || !option.isDisplayed()) {
        return false
      }
    }
    // Return true if all target options are displayed
    return true
  }

  /**
   * Select radio with particular text.
   * @param option
   */
  selectOption(option) {
    // If option is not selected
    if (!this.isOptionSelected(option)) {
      this.getOption(option).click()
    }
  }

  /**
   * Check that option with particular text is selected.
   * @param option
   * @returns {boolean}
   */
  isOptionSelected(option) {
    // Return true/false if option is selected
    return this.getOption(option).$(ElementLocatorHelper.Input).isSelected()
  }

  /**
   * Get radio button label using sub text.
   * @param text
   * @returns {*}
   */
  getLabelBySubText(text) {
    return this.getOption(text).getText().trim()
  }

  /**
   * Get radio element by name.
   * @param option
   * @returns {*}
   */
  getOption(option) {
    this.waitForDisplayed()
    // Get radioButtonGroup element
    return this.element
      // Find all options
      .$$(this.optionSelector)
      // Filter options by text and return target option element with particular text
      .find(el => el.getText().includes(option))
  }
}