import Component from "./component"

export default class IFrameInput extends Component {
  constructor(props) {
    super(props)
    this.iframe = new Component({ selector: props.iframeSelector })
  }

  /**
   * Set text in iframe.
   * @param text
   */
  setText(text) {
    // Wait until iframe is displayed
    this.iframe.waitForDisplayed()
    // Switch to iframe
    browser.switchToFrame(this.iframe.element)
    // Wait until input is displayed
    this.waitForDisplayed()
    // Set text in input
    this.type(text)
    // Switch to main page
    browser.switchToParentFrame()
  }
}
