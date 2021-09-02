require("module-alias/register")
require("@babel/register")({
  presets: [["@babel/preset-env", { targets: { node: 8 } }]],
  babelrc: false,
})

const path = require("path")
const { hooks } = require("./support/hooks")
const drivers = {
  chrome: { version: "92.0.4515.159" }, // https://chromedriver.chromium.org/
  firefox: { version: "0.27.0" }, // https://github.com/mozilla/geckodriver/releases
}

exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1, // number instances in parallel
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-infobars", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
  ],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  outputDir: path.join(__dirname, "/logs/local"),
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  baseUrl: "http://puppies.herokuapp.com/",
  // Default timeout for all waitFor* commands.
  waitforTimeout: 12000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 90000,
  // Default request retries count
  connectionRetryCount: 3,
  services: [
    [
      "selenium-standalone",
      {
        logPath: "logs",
        installArgs: { drivers },
        args: { drivers },
      },
    ],
  ],
  framework: "cucumber",
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "reports/json/",
        language: "en",
      },
    ],
  ],
  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: false,
    coloredLogs: true,
    // <string[]> module used for processing required features
    requireModule: ["@babel/register"],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
      "./support/step-definitions/**/*.steps.js",
      "./node_modules/@nice-digital/wdio-cucumber-steps/lib"
    ],
    snippetSyntax: undefined, // <string> specify a custom snippet syntax
    strict: true, // fail if there are any undefined or pending steps
    tagExpression: "",
    tagsInTitle: false,
    timeout: 60000, // timeout for step-definitions in milliseconds
    // scenarioLevelReporter: true,
  },
  ...hooks,
}
