describe('Verify All Products and Product Details', () => {
    it('Deve validar página de produtos e detalhes', () => {
        cy.visit('https://automationexercise.com/')
        cy.contains('Products').click()

        cy.url().should('include', '/products')
        cy.contains('All Products').should('be.visible')
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)

        cy.contains('View Product').first().click()

        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible')
            cy.contains('Category').should('be.visible')
            cy.contains('Rs.').should('be.visible')
            cy.contains('Availability').should('be.visible')
            cy.contains('Condition').should('be.visible')
            cy.contains('Brand').should('be.visible')
        })
    })
})
