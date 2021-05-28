import Component from "./component"
import ElementLocatorHelper from "../helpers/element-locator.helper"

export default class Checkbox extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * Check that checkbox has correct label.
   * @param label
   */
  hasLabel(label) {
    // Return true/false if checkbox label has target text
    return this.getText().includes(label)
  }

  /**
   * Activate checkbox.
   */
  check() {
    // If checkbox is not checked
    if (!this.isChecked()) {
      this.input.click()
    }
  }

  /**
   * Deactivate checkbox.
   */
  uncheck() {
    // If checkbox is checked
    if (this.isChecked()) {
      this.input.click()
    }
  }

  /**
   * Check if checkbox is activated.
   */
  isChecked() {
    // Return true/false if checkbox is checked
    return this.input.isSelected()
  }

  /**
   * Get 'input' element.
   * @returns {*}
   */
  get input() {
    this.waitForDisplayed()
    // Return checkbox input element
    return this.element.$(ElementLocatorHelper.Input)
  }
}
