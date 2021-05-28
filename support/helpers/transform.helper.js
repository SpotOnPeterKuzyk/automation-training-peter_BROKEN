export default {
  elementTypeToVariableName: {
    "link": "Link",
    "button": "Button",
    "drop down": "Dropdown",
    "dropdown": "Dropdown",
    "toggle": "Toggle",
    "section": "Section",
    "input": "Input"
  },

  stringToVariableName(str, needsUnderscore = true) {
    let underscore = needsUnderscore ? "_" : ""
    return underscore + str.trim().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (/\s+/.test(match)) {
        return ""
      }

      return index === 0 ? match.toLowerCase() : match.toUpperCase()
    })
  },

  /**
   * Converts step expectations to boolean.
   * @param expectation
   * @returns {boolean}
   */
  shouldToBoolean(expectation) {
    switch (expectation) {
    case "should":
    case "is":
    case "should be":
      return true
    case "should not":
    case "is not":
    case "should not be":
      return false
    }
  },
}