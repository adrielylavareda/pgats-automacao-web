const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    video: true,
    videosFolder: 'cypress/videos',

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',  // pasta para JSON
      overwrite: false,
      html: false,    // HTML será gerado apenas após merge
      json: true,     // obrigatório para merge
      timestamp: 'mmddyyyy_HHMMss'
    },
  },
})
