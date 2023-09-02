const { defineConfig } = require( "cypress" );


module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
 

  e2e: {
    setupNodeEvents(on, config) {
        baseUrl: "https://www.ultima.school/"
        // implement node event listeners here
    },
  },
});
