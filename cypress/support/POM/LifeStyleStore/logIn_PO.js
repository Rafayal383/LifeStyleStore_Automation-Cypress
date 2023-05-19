class login_PO{
    login(){
        cy.get('#account-actions-signup').click();
        cy.wait(2000)
        cy.get('#mobileNumber').type('7377702841')
        cy.get('#signup-form-submit').click()
        cy.wait(15000)
        cy.get("button[aria-label='user-icon']").click();
        cy.contains("My Account").should("exist");
        cy.log("Login Successful");
    }
}

export default login_PO;