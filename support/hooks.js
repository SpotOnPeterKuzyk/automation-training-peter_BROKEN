const { generate } = require("multiple-cucumber-html-reporter")
const { removeSync } = require("fs-extra")
const cucumberJson = require("wdio-cucumberjs-json-reporter").default
import HomePage from "./pageobjects/home.page"
const homePage = new HomePage()

exports.hooks = {
  onPrepare: () => {
    removeSync("reports/json/")
  },

  beforeScenario: () => {
    browser.maximizeWindow()
  },

  afterScenario: function () {
    if (browser.isAlertOpen() === false) {
      homePage.open()
    }
    browser.acceptAlert()
  },

  afterStep: (uri, feature, scenario) => {
    if (scenario.passed === false) {
      console.log("FAILED")
      cucumberJson.attach(browser.takeScreenshot(), "image/png")
    }
  },

  onComplete: () => {
    generate({
      jsonDir: "reports/json/",
      reportPath: "reports/",
      // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    })
  },
}
