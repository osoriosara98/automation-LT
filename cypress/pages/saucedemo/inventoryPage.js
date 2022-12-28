class inventoryPage{
    elements ={
        itemNameLable: () => cy.get('#item_4_title_link'),
        addToCartButton : ()=> cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        shoppingCartButton: () => cy.get('.shopping_cart_link'),
        itemName :  ""
    }

    clickAddToCart(){
        this.elements.addToCartButton().click();
    }

    getItemNameText(){
        this.elements.itemNameLable().then($title =>{
            const itemNameText = $title.text();
            cy.writeFile('cypress/properties/itemNameInventory.txt', itemNameText)
        }) 
    }
 
    clickShoppingCart(){
        this.elements.shoppingCartButton().click();
        
    } 
} 

module.exports = new inventoryPage();
