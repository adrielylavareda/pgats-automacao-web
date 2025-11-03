describe('Test Case 4: Logout User', () => {

  const email = `qa_user_${Date.now()}@testmail.com`
  const password = '12345'

  before(() => {
    // Criação de conta para o teste
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('Adriely QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender2').check()
    cy.get('#password').type(password)
    cy.get('#days').select('12')
    cy.get('#months').select('April')
    cy.get('#years').select('1998')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('Adriely')
    cy.get('[data-qa="last_name"]').type('QA')
    cy.get('[data-qa="address"]').type('Rua Teste QA 45')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ontario')
    cy.get('[data-qa="city"]').type('Toronto')
    cy.get('[data-qa="zipcode"]').type('M4B1C2')
    cy.get('[data-qa="mobile_number"]').type('987654321')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as Adriely').should('be.visible')
    cy.contains('Logout').click()
  })

  it('should logout user successfully', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as Adriely').should('be.visible')
    cy.contains('Logout').click()
    cy.url().should('include', '/login')
    cy.contains('Login to your account').should('be.visible')

    cy.log('✅ Logout realizado com sucesso!')
  })

})

