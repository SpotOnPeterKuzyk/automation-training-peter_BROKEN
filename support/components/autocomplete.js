import Component from "./component"

export default class Autocomplete extends Component {
  constructor(props) {
    super(props)
    this._listItemComponent = new Component({ selector: props.listItemSelector || ".pac-item" })
    this._addressListComponent = new Component({ selector: props.addressListSelector || ".pac-container" })
  }

  /**
   * Select option with particular text.
   * @param text
   */
  selectOption(text) {
    this.waitForDisplayed()
    // Set search text in search element
    this.element.setValue(text)
    // Wait until list with options will be displayed
    this._addressListComponent.waitForDisplayed({ timeoutMsg: "The Address List was not displayed!" })
    // Get index number of option which we are looking for
    let addressIndex = this._listItemComponent.elements.findIndex(elem => elem.getText().includes(text))
    this._listItemComponent.elements[addressIndex].click()
    this._addressListComponent.waitForDisplayed({ reverse: true })
  }

  /**
   * Select first option from the list.
   * @param searchText
   */
  selectFirstOption(searchText) {
    this.waitForDisplayed()
    // Set search text in search element
    this.element.setValue(searchText)
    // Wait until list with options will be displayed
    this._addressListComponent.waitForDisplayed({ timeoutMsg: "The Address List was not displayed!" })
    this._listItemComponent.elements[0].click()
    this._addressListComponent.waitForDisplayed({ reverse: true })
  }
}
