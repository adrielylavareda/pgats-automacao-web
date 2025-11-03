describe('Contact Us Form', () => {
    it('Deve enviar mensagem com sucesso', () => {
        cy.visit('https://automationexercise.com/')
        cy.contains('Home').should('be.visible')

        cy.get('a[href*="contact"]').click()


        cy.get('[data-qa="name"]').type('QA Tester')
        cy.get('[data-qa="email"]').type('qa@test.com')
        cy.get('[data-qa="subject"]').type('Feedback')
        cy.get('[data-qa="message"]').type('Mensagem de teste')

        cy.fixture('example.json').as('arquivo')
        cy.get('input[type="file"]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()

        cy.on('window:confirm', () => true)

        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.contains('Home').click()
        cy.url().should('eq', 'https://automationexercise.com/')
    })
})
