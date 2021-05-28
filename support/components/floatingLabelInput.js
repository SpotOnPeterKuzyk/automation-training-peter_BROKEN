import Component from "./component"
import ElementLocatorHelper from "../helpers/element-locator.helper"

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props)
    this.errorSelector = "[class^='FloatingLabelInput_floatingLabelInput_errorMessage']"
    this.xIconSelector = "[class*='FloatingLabelInput_floatingLabelInput_closeButton']"
  }

  /**
   * Set text in input.
   * @param text
   * @param clear
   */
  setText(text, clear = false) {
    if (clear) {
      this.clearWithXIcon()
    }
    this.input.setValue(text)
  }

  /**
   * Clear input with 'X' icon.
   */
  clearWithXIcon() {
    this.element.$(this.xIconSelector).click()
  }

  /**
   * Check that input has particular label.
   * @param label
   * @returns {*}
   */
  hasLabel(label) {
    this.waitForDisplayed()
    // Return true/false if input label has target text
    return this.element.$(ElementLocatorHelper.Label).getText().includes(label)
  }

  /**
   * Check that input has particular value.
   * @param text
   * @returns {*}
   */
  hasValue(text) {
    this.waitForDisplayed()
    // Return true/false if input has target value
    return this.input.getValue().includes(text)
  }

  /**
   * Check that input has particular text.
   * @param text
   * @returns {*}
   */
  hasText(text) {
    this.waitForDisplayed()
    // Return true/false if input has target text
    return this.input.getText().includes(text)
  }

  /**
   * Check that  input has error message.
   * @param error
   * @returns {*}
   */
  hasError(error) {
    this.waitForDisplayed()
    // Return true/false if input error text contains target text
    return this.element.$(this.errorSelector).getText().includes(error)
  }

  /**
   * Get 'input' element.
   * @returns {*}
   */
  get input() {
    this.waitForDisplayed()
    // Return input element
    return this.element.$(ElementLocatorHelper.Input)
  }
}
