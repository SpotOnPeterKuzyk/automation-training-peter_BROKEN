module.exports = {
  toLowerCaseNoSpaces(string) {
    string = string
      .toLowerCase()
      .replace(/(?:(^.)|([-_\s]+.))/g, match => match.charAt(match.length - 1).toUpperCase())
    return string.charAt(0).toLowerCase() + string.substring(1)
  },

  capitalizeString(string) {
    return string.replace(/\b\w/g, letter => letter.toUpperCase())
  },

  acceptAlert() {
    return browser.acceptAlert()
  }
}
