import { Component } from "../components"

export default class Popup {
  constructor() {
    this._title = new Component({ selector: "[class*='Prompt'] h3"})
    this._description = new Component({ selector: "[class*='Prompt'] p"})
    this._cancelButton = new Component({ selector: "[class*='Prompt'] button[class*='TertiaryButton']"})
    this._applyButton = new Component({ selector: "[class*='Prompt'] button[class*='PrimaryButton']"})
  }

  /**
   * Check that popup has title with particular text.
   * @param text
   * @returns {boolean}
   */
  hasTitle(text) {
    return this._title.getText() === text
  }

  /**
   * Check that popup has description with particular text.
   * @param text
   * @param exactMatch
   * @returns {boolean}
   */
  hasDescription(text, exactMatch = true) {
    return exactMatch
      ? this._description.getText() === text
      : this._description.getText().includes(text)
  }

  /**
   * Close popup using 'Cancel' button.
   */
  close() {
    this._cancelButton.click()
    this.waitForClose()
  }

  /**
   * Click apply button to close popup.
   */
  apply() {
    this._applyButton.click()
    this.waitForClose()
  }

  /**
   * Wait until popup will be closed.
   * @returns {boolean}
   */
  waitForClose() {
    return browser
      .$(".ReactModalPortal")
      .waitForDisplayed({ reverse: true, interval: 500, timeout: 5000 })
  }
}
