describe('Automation Exercise', () => {
    it('Cadastrar e deletar um usuário', () => {
        const timestamp = new Date().getTime()

        // 1. Acessar site
        cy.visit('https://automationexercise.com/')
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Home').should('be.visible')

        // 2. Ir para a página de cadastro
        cy.get('a[href="/login"]').click()
        cy.contains('New User Signup!').should('be.visible')

        // 3. Preencher nome e e-mail
        cy.get('input[data-qa="signup-name"]').type('QA Tester')
        cy.get('input[data-qa="signup-email"]').type(`qa-teste-${timestamp}@test.com`)
        cy.contains('button','Signup').click()

        // 4. Preencher informações da conta
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('#id_gender1').check()
        cy.get('input#password').type('12345', { log: false })

        cy.get('[data-qa=days]').select('10')
        cy.get('[data-qa=months]').select('September')
        cy.get('[data-qa=years]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('#first_name').type('QA')
        cy.get('#last_name').type('Tester')
        cy.get('#company').type('Teste Company')
        cy.get('#address1').type('Rua dos Testes, 123')
        cy.get('select#country').select('Canada')
        cy.get('#state').type('Test State')
        cy.get('#city').type('Test City')
        cy.get('[data-qa="zipcode"]').type('A1B2C3')
        cy.get('[data-qa="mobile_number"]').type('123456789')

        // 5. Criar conta
        cy.get('[data-qa="create-account"]').click()

        // 6. Validar criação
        cy.url().should('include', '/account_created')
        cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')
        cy.contains('Continue').click()

        // 7. Validar login automático
        cy.contains('Logged in as QA Tester').should('be.visible')

        // 8. Deletar conta
        cy.contains('Delete Account').click()

        // 9. Validar exclusão
        cy.url().should('include', '/delete_account')
        cy.contains('Account Deleted!').should('be.visible')
        cy.contains('Continue').click()
    })
})
