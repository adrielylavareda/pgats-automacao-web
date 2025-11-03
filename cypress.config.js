import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',

    // Screenshot & vídeos
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',

    // Reporter Mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
  },
})
