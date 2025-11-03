import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',

    // Screenshots
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    // Vídeos
    video: true,
    videosFolder: 'cypress/videos',

    // Reporter Mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',  // pasta de saída dos JSON
      overwrite: false,
      html: false,    // não gerar HTML por spec
      json: true,     // necessário para merge
      timestamp: 'mmddyyyy_HHMMss'
    },
  },
})
