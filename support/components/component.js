export default class Component {
  constructor(props) {
    this.componentOptions = props
  }

  /**
   * Get WebdriverIO element from Component.
   * @returns {Element}
   */
  get element() {
    // eslint-disable-next-line no-prototype-builtins
    return this.componentOptions.hasOwnProperty("selector")
      ? browser.$(this.selector)
      : browser.react$(this.reactSelector)
  }

  /**
   * Get WebdriverIO elements from Component.
   * @returns {WebdriverIO.ElementArray}
   */
  get elements() {
    // eslint-disable-next-line no-prototype-builtins
    return this.componentOptions.hasOwnProperty("selector")
      ? browser.$$(this.selector)
      : browser.react$$(this.reactSelector)
  }

  /**
   * Get component selector.
   * @returns {*}
   */
  get selector() {
    return this.componentOptions.selector
  }

  /**
   * Get component react selector.
   * @returns {string|*}
   */
  get reactSelector() {
    return this.componentOptions.react
  }

  /**
   * Set text in element.
   * @param text
   */
  type(text) {
    this.waitForDisplayed()
    // Set text in element
    this.element.setValue(text)
  }

  /**
   * Click on element.
   * @returns {*}
   */
  click() {
    this.waitForDisplayed()
    this.waitForClickable()
    this.element.click()
  }

  /**
   * Check that element is displayed.
   * @returns {*}
   */
  isDisplayed() {
    // Return true/false if element is displayed
    return this.element.isDisplayed()
  }

  /**
   * Check that element is enabled.
   * @returns {*}
   */
  isEnabled() {
    this.waitForDisplayed()
    // Return true/false if element is enabled
    return this.element.isEnabled()
  }

  /**
   * Get text from element.
   * @returns {*}
   */
  getText() {
    this.waitForDisplayed()
    // Return element text
    return this.element.getText()
  }

  /**
   * Wait until target element is displayed.
   * @param options
   * @returns {*}
   */
  waitForDisplayed(options) {
    this.element.waitForDisplayed(options)
  }

  /**
   * Wait until target element is not displayed.
   * @param options
   * @returns {*}
   */
  waitForNotDisplayed(options) {
    // Wait until element is not displayed
    this.element.waitForDisplayed({ reverse: true, interval: 500, timeout: 5000, ...options })
  }

  /**
   * Wait until target element will be clickable.
   * @returns {*}
   */
  waitForClickable() {
    this.element.waitForClickable()
  }
}
