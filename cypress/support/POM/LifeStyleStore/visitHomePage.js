class visitHome{
    home(){
        cy.visit("https://www.lifestylestores.com/in/en/")
        cy.wait(4000)
        cy.get('#moe-dontallow_button').click()
        cy.wait(2000)
    }
}

export default visitHome;