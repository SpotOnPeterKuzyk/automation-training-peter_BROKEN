import Component from "./component"
import List from "./list"

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.list = props.list || new List()
    this.titleSelector = props.titleSelector || "[class$='-singleValue']"
  }

  /**
   * Check that dropdown has options with particular text.
   * @param options
   */
  hasOptions(options) {
    this.click()
    // Get options visibility state (true/false)
    return this.list.hasOptions(options)
  }

  /**
   * Select option with particular text.
   * @param option
   */
  selectOption(option) {
    this.click()
    this.list.selectOption(option)
  }

  /**
   * Select first option.
   */
  selectFirstOption() {
    this.click()
    this.list.selectFirstOption()
  }

  /**
   * Select option by index.
   * @param index
   */
  selectOptionByIndex(index) {
    this.click()
    this.list.selectOptionByIndex(index)
  }

  /**
   * Check that option is selected.
   * @param option
   */
  hasSelectedOption(option) {
    // Return true/false if title contains text of target option
    return this.getTitle().includes(option)
  }

  /**
   * Get title of the selected option.
   * @returns {*}
   */
  getTitle() {
    // Return dropdown title text
    return this.element.$(this.titleSelector).getText().trim()
  }
}
