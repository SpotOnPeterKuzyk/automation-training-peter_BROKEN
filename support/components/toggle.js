import Component from "./component"

export default class Toggle extends Component {
  constructor(props) {
    super(props)
    this.tabSelector = props.tabSelector || "button[class^='PickupDeliveryToggle']"
  }

  /**
   * Check that toggle has tabs with particular text.
   * @param options
   * @returns {boolean}
   */
  hasTabs(options) {
    // For each option
    for (let option of options) {
      // Get option element by text
      option = this.getOption(option)
      // Return false if option is undefined or option is not displayed
      if (!option || !option.isDisplayed()) {
        return false
      }
    }
    // Return true if target tabs are displayed
    return true
  }

  /**
   * Click on tab with particular text.
   * @param option
   */
  selectTab(option) {
    // If target tab is not selected
    if (!this.isTabSelected(option)) {
      this.getTab(option).click()
    }
  }

  /**
   * Check if tab with particular text is selected.
   * @param option
   * @returns {boolean}
   */
  isTabSelected(option) {
    // Return true/false if tab class text contains 'Selected'
    return this.getTab(option).getAttribute("class").includes("Selected")
  }

  /**
   * get tab element.
   * @param option
   * @returns {*}
   */
  getTab(option) {
    this.waitForDisplayed()
    // Get toggle element
    return this.element
      // Get all tabs
      .$$(this.tabSelector)
      // Filter tabs by target text and return tab with particular text
      .find(el => el.getText().includes(option))
  }
}