describe('Test Case 5: Register User with Existing Email', () => {

  const email = `qa_user_${Date.now()}@testmail.com`
  const password = '12345'

  before(() => {
    // Cria o usuário antes do teste
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('Adriely QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender2').check()
    cy.get('#password').type(password)
    cy.get('#days').select('5')
    cy.get('#months').select('June')
    cy.get('#years').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('Adriely')
    cy.get('[data-qa="last_name"]').type('QA')
    cy.get('[data-qa="address"]').type('Rua Automação 99')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ontario')
    cy.get('[data-qa="city"]').type('Toronto')
    cy.get('[data-qa="zipcode"]').type('A2B3C4')
    cy.get('[data-qa="mobile_number"]').type('987654321')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as Adriely').should('be.visible')
    cy.contains('Logout').click()
  })

  it('should display error when trying to register with existing email', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()

    cy.contains('New User Signup!').should('be.visible')
    cy.get('[data-qa="signup-name"]').type('Adriely QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.contains('Email Address already exist!').should('be.visible')
    cy.log('✅ Mensagem de erro validada com sucesso!')
  })
})

