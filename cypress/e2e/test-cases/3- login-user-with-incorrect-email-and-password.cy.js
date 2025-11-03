describe('Login User - Incorrect Credentials', () => {
    it('Deve exibir erro com e-mail e senha inválidos', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="login-email"]').type('fakeuser@test.com')
        cy.get('input[data-qa="login-password"]').type('wrongpassword')
        cy.get('button[data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })
})
