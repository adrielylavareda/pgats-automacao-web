describe('Verify Subscription - Home Page', () => {
    it('Deve validar inscrição na newsletter', () => {
        cy.visit('https://automationexercise.com/')
        cy.scrollTo('bottom')
        cy.contains('Subscription').should('be.visible')

        cy.get('#susbscribe_email').type(`qa-${Date.now()}@test.com`)
        cy.get('#subscribe').click()

        cy.contains('You have been successfully subscribed!').should('be.visible')
    })
})
