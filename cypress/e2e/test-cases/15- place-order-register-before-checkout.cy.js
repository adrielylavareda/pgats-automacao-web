describe('Place Order - Register before Checkout', () => {
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
  })

  it('Deve registrar, adicionar produto e finalizar compra', () => {

        cy.contains('Logged in as').should('be.visible')

        cy.contains('Products').click()
        cy.contains('Add to cart').first().click()
        cy.contains('View Cart').click()

        cy.url().should('include', '/view_cart')
        cy.contains('Proceed To Checkout').click()

        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')

        cy.get('textarea[name="message"]').type('Pedido de teste')
        cy.contains('Place Order').click()

        cy.get('[data-qa="name-on-card"]').type('QA Tester')
        cy.get('[data-qa="card-number"]').type('4111111111111111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2026')
        cy.contains('Pay and Confirm Order').click()

        cy.contains('Your order has been confirmed!').should('be.visible')
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
    })
})
   