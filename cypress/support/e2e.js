// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// cypress/support/e2e.js
import './commands'

// Hook global para screenshots
afterEach(function () {
  // Nome do spec sem extensão
  const specName = Cypress.spec.name.replace(/\.[^/.]+$/, "")

  // Nome do teste (removendo caracteres inválidos)
  const testName = this.currentTest.fullTitle().replace(/[:\/]/g, ' - ')

  // Tira screenshot na subpasta do spec
  cy.screenshot(`${specName}/${testName}`, { capture: 'runner' })
})



// --- Hooks globais para mensagens de sucesso/erro ---

// Após cada teste (mesmo se falhar)
afterEach(function () {
  if (this.currentTest.state === 'passed') {
    cy.log(`✅ Teste "${this.currentTest.title}" passou com sucesso!`)
    console.log(`✅ Teste "${this.currentTest.title}" passou com sucesso!`)
  } else if (this.currentTest.state === 'failed') {
    const err = this.currentTest.err ? this.currentTest.err.message : 'Motivo não identificado'
    cy.log(`❌ Teste "${this.currentTest.title}" falhou!`)
    cy.log(`🔍 Motivo: ${err}`)
    console.error(`❌ Teste "${this.currentTest.title}" falhou!`)
    console.error(`🔍 Motivo: ${err}`)
  }
})

