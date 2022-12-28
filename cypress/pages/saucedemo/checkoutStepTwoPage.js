class checkoutStepOnePage{
    elements ={
        itemNameLable: () => cy.get('#item_4_title_link'),
        finishButton: () => cy.get('[data-test="finish"]'),
        titleLable: () => cy.get('.title')     
    }

    clickFinish(){
        this.elements.finishButton().click();
    }  

   
} 

module.exports = new checkoutStepOnePage();