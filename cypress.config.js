
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script //will be stored as specPattern
    specPattern: 'cypress/integration/example/*.js',
    // specPattern: 'cypress/UAT/features/*.{js,feature}'
  },
  chromeWebSecurity: false
});