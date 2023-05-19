class logOut_PO{
    logout(){
        cy.wait(2000)
        cy.get("button[aria-label='user-icon']").click();


        cy.contains("Sign Out").should("exist").click();
        
        cy.wait(2000)
        cy.xpath("(//span[@class='MuiButton-label'])[13]").should('have.text','Sign Up / Sign In')
        cy.log("LogOut Successful");
    }
}

export default logOut_PO;