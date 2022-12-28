const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reporter',
    charts: true,
    reportPageTitle: 'LT-Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      },
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity : false
  },
});