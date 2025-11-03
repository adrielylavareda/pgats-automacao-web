
describe('Login User - Correct Credentials', () => {

  const email = `qa_user_${Date.now()}@testmail.com`
  const password = '12345'

  before(() => {
    // Criação de conta temporária
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()

    cy.get('[data-qa="signup-name"]').type('Adriely QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender2').check()
    cy.get('#password').type(password)
    cy.get('#days').select('10')
    cy.get('#months').select('March')
    cy.get('#years').select('1999')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('Adriely')
    cy.get('[data-qa="last_name"]').type('Tester')
    cy.get('[data-qa="address"]').type('Rua dos Testes, 123')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ontario')
    cy.get('[data-qa="city"]').type('Toronto')
    cy.get('[data-qa="zipcode"]').type('A1B2C3')
    cy.get('[data-qa="mobile_number"]').type('123456789')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as Adriely').should('be.visible')
    cy.contains('Logout').click()
  })

  it('should login successfully with correct credentials', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as Adriely').should('be.visible')
    cy.log('✅ Login bem-sucedido!')
  })

  after(() => {
    cy.contains('Delete Account').click({ force: true })
    cy.contains('Account Deleted!').should('be.visible')
    cy.log('✅ Conta excluída após o teste')
    })
})
