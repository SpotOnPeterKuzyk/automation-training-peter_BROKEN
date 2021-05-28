import Component from "./component"

export default class Textarea extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * Set text in text area.
   * @param text
   */
  setText(text) {
    this.clear()
    this.type(text)
  }

  /**
   * Clear text area.
   */
  clear() {
    this.waitForDisplayed()
    this.element.clearValue()
  }
}
