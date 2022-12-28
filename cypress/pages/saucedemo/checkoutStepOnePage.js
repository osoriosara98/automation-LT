class checkoutStepOnePage{
    elements ={
        firtsNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        postalCodeInput: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]')       
    }

    typeFirtsName(firstName){
        this.elements.firtsNameInput().type(firstName)
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName)
    }

    typePostalCode(postalCode){
        this.elements.postalCodeInput().type(postalCode)
    }

    clickContinue(){
        this.elements.continueButton().click();
    }
} 

module.exports = new checkoutStepOnePage();