class cartPage{
    elements ={
        itemNameLable: () => cy.get('#item_4_title_link'),
        checkoutButton: () => cy.get('[data-test="checkout"]')        
    }

    clickCheckout(){
        this.elements.checkoutButton().click();
    }
} 

module.exports = new cartPage();
