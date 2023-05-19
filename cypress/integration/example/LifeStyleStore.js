///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

import login_PO from "../../support/POM/LifeStyleStore/logIn_PO";
import logOut_PO from "../../support/POM/LifeStyleStore/logOut_PO";
import searchingBox from "../../support/POM/LifeStyleStore/search";
import visitHome from "../../support/POM/LifeStyleStore/visitHomePage";



describe.skip('TSC_01', () => {
    const homeL = new visitHome();
    const logIn = new login_PO();
    const logOut = new logOut_PO();


    it('TC01  (Verifying the login )', () => {
        try {
            homeL.home();
            cy.xpath("(//span[@class='MuiButton-label'])[13]").should('have.text','Sign Up / Sign In')
    
        } catch (error) {

            cy.log(error)
        }
    });


    it('TC02 (Validating the login With valid otp)', () => {
       try {
        homeL.home();
        logIn.login();
       } catch (error) {
        cy.log(error)
       }
     });



     it('TC03 (Validating the login With invalid otp)', () => {
        
       try {
        homeL.home();
        cy.get('#account-actions-signup').click();
        cy.wait(3000)
        cy.get('#mobileNumber').type('9784674862')
        cy.get('#signup-form-submit').click()
        cy.wait(3000)
        cy.get("input[name='otp1']").type("0")
        cy.get("input[name='otp2']").type("0")
        cy.get("input[name='otp3']").type("0")
        cy.get("input[name='otp4']").type("0")
        cy.get("input[name='otp5']").type("0")
        cy.xpath('//div[@class="MuiBox-root jss1361"]').should('not.be.empty')

       } catch (error) {
        cy.log(error)
       }
     });



     it('TC04 (Verifying the resend otp)', () => {
        try {
           homeL.home();
            cy.get('#account-actions-signup').click();
            cy.wait(2000)
            cy.get('#mobileNumber').type('6785957525')
            cy.get('#signup-form-submit').click()
            cy.wait(35000)
            cy.xpath("(//span[@class='MuiButton-label'])[20]").should('have.text',"Didn't get it? resend")
           } catch (error) {
            cy.log(error)
           }
     });

     it('TC05 (Validating the resend otp)', () => {
        try {
            homeL.home();
            cy.get('#account-actions-signup').click();
            cy.wait(2000)
            cy.get('#mobileNumber').type('6785957525')
            cy.get('#signup-form-submit').click()
            cy.wait(35000)
            cy.xpath("(//span[@class='MuiButton-label'])[20]").should('have.text',"Didn't get it? resend").click();
            cy.wait(2000)
            cy.get("div[class='MuiBox-root jss1519']").should('not.be.empty')
            // cy.xpath('//div[@class="MuiBox-root jss1361"]').should('not.be.empty') 
           } catch (error) {
            cy.log(error)
           }
     });


     it('TC14 (verifying logout)', () => {
        try {
            homeL.home();
            logIn.login();
            cy.wait(2000)
            cy.get("button[aria-label='user-icon']").click();
    
    
            cy.contains("Sign Out").should("exist")
        } catch (error) {
            cy.log(error)

        }
     });

     it('TC15 (Validating logout)', () => {
        try {
            homeL.home();
            logIn.login();
            logOut.logout();
        } catch (error) {
            cy.log(error)

        }
     });



 

});


describe('TSC_02', () => {

    const homeL = new visitHome();
    const searchMulti = new searchingBox

    it('TC16 ( verifying search box)', () => {
        homeL.home();
        cy.get('#js-site-search-input').should('have.attr',"name")

    });



    it('TC17 (Validating search box)', () => {
        homeL.home();
        cy.get('#js-site-search-input').type("Shirt").type('{enter}')
        cy.url().should("include","Shirt")

    });

    it('TC18', () => {
        homeL.home();
        cy.get('#js-site-search-input').type('{enter}')
        cy.url().should("eq","https://www.lifestylestores.com/in/en/")

    });


    it('TC20', () => {
        homeL.home();
        cy.get('#js-site-search-input').type("abrakadabra")
        cy.wait(3000)
        cy.get('#js-site-search-input').clear()
        cy.url().should("eq","https://www.lifestylestores.com/in/en/")

    });
    it('TC21', () => {
        homeL.home();
        searchMulti.searchMultipleProduct();
        
        cy.get('#js-site-search-input').clear()
        cy.wait(1000)
        cy.get('#js-site-search-input').click()
        cy.get("div[class='MuiBox-root jss922']").should('not.be.empty')
        // cy.url().should("eq","https://www.lifestylestores.com/in/en/")

    });

    it.skip('TC25', () => {
        homeL.home();
        searchMulti.searchMultipleProduct();
        
        cy.get('#js-site-search-input').clear()
        cy.wait(1000)
        cy.get('#js-site-search-input').click()
        cy.get("div[class='MuiBox-root jss922']").should('not.be.empty')
        cy.xpath("(//span[@class='jss932'])[1]").click({force: true});

    });


});