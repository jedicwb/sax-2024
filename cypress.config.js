const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://just-test-mu.vercel.app/',
    //testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
