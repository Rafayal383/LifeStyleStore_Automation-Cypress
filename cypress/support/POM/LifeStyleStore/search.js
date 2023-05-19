class searchingBox{
    searchMultipleProduct(){
        cy.get('#js-site-search-input').type("shoes").type('{enter}')
        cy.wait(1000)
        cy.get('#js-site-search-input').clear().type("shirts").type('{enter}')
        cy.wait(1000)
        cy.get('#js-site-search-input').clear().type("t-shirts").type('{enter}')
        cy.wait(1000)
        cy.get('#js-site-search-input').clear().type("boots").type('{enter}')
        cy.wait(1000)
        cy.get('#js-site-search-input').clear().type("glasses").type('{enter}')
        cy.wait(1000)
    }
}

export default searchingBox;