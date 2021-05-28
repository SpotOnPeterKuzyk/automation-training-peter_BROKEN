import Component from "./component"

export default class AccordionList extends Component {
  constructor(props) {
    super(props)
    this.panelSelector = "[data-testid='accordion-list-item']"
    this.panelTitleSelector = "[class^='AccordionList_Header_title']"
    this.panelContentSelector = "[class^='AccordionList_Item_content']"
    this.menuItemSelector = "[class^='AccordionList_ItemContent_button']"
    this.menuItemTitleSelector = "[class^='Card_Card_title']"
  }

  /**
   * Check that accordion list has panels with particular titles.
   * @param panels - menu category
   * @returns {boolean}
   */
  hasPanels(panels) {
    // Get each panel
    for (let panel of panels) {
      // Get panel by name
      panel = this.getPanel(panel)
      // If panel is undefined or is not displayed but exists in HTML return false
      if (!panel || !panel.isDisplayed()) {
        return false
      }
    }
    // Return true if all panels are displayed
    return true
  }

  /**
   * Expands panel with particular title and checks for the presence of an option
   * @param panel - menu category
   * @param options - menu items
   */
  panelHasOptions(panel, options) {
    this.expandPanel(panel)
    // Get each option
    for (let option of options) {
      // Get panel and find item with particular name
      let item = this.getPanel(panel)
        .$(this.panelContentSelector)
        .$$(this.menuItemSelector)
        .find(el => el.$(this.menuItemTitleSelector).getText().includes(option))
      // If item is undefined or item is not displayed but exists in HTML return false
      if (!item || !item.isDisplayed()) {
        return false
      }
    }
    // Return true if all items in panel are displayed
    return true
  }

  /**
   * Expand panel with particular title.
   * @param panel - menu category
   */
  expandPanel(panel) {
    // If panel is not expanded (collapsed)
    if (!this.isPanelExpanded(panel)) {
      this.getPanel(panel).click()
    }
  }

  /**
   * Expand panel with particular title and select option.
   * @param panel - menu category
   * @param option - menu item
   */
  selectOption(panel, option) {
    this.expandPanel(panel)
    // Get panel element with particular name
    this.getPanel(panel)
      .$(this.panelContentSelector)
      // Find all items in the panel
      .$$(this.menuItemSelector)
      // Filter items by target item name
      .find(el => el.$(this.menuItemTitleSelector).getText().includes(option))
      .click()
  }

  /**
   * Check if panel is expanded.
   * @param panel - menu category
   * @returns {boolean}
   */
  isPanelExpanded(panel) {
    // Get panel with particular name
    return this.getPanel(panel)
      .$(this.panelContentSelector)
      // Get panel HTML class
      .getAttribute("class")
      // Return true or false based on class text has 'expanded' word.
      .includes("expanded")
  }

  /**
   * Get panel object.
   * @param panelName - menu category
   * @returns {*}
   */
  getPanel(panelName) {
    // Wait while accordionList component is displayed.
    this.waitForDisplayed()
    // TODO: Maybe we should refactor code below because it's a small duplication. But now it works fine.
    // Get accordionList element
    this.element
      // Find all panels under accordionList element.
      .$$(this.panelSelector)
      // Find panel with target and wait until it is displayed
      .find(el => el.$(this.panelTitleSelector).getText().includes(panelName)).waitForDisplayed()
    // Return panel element with particular name
    return browser.waitUntil(
      () => this.element
        .$$(this.panelSelector)
        .find(el => el.$(this.panelTitleSelector).getText().includes(panelName)),
      {
        timeout: 5000
      }
    )
  }
}