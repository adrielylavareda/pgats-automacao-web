describe('Search Product', () => {
    it('Deve buscar produto e listar resultados', () => {
        cy.visit('https://automationexercise.com/')
        cy.contains('Products').click()

        cy.get('input#search_product').type('Tshirt')
        cy.get('button#submit_search').click()

        cy.contains('Searched Products').should('be.visible')
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
    })
})
