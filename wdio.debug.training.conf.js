const { config } = require("./wdio.training.conf.js");

(config.maxInstances = 1),
  (config.capabilities = [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--disable-popup-blocking",
          "--disable-notifications",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
        prefs: {
          "profile.default_content_settings.popups": 2,
          "profile.default_content_settings.notifications": 2,
        },
      },
    },
  ])
config.cucumberOpts = {
  require: ["./support/step-definitions/*.steps.js"],
  tagExpression: "@debug",
  timeout: 600000, // timeout for step-definitions in milliseconds
}

exports.config = config
