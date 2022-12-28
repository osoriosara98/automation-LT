import inventoryPage from "../../pages/saucedemo/inventoryPage";
import cartPage from "../../pages/saucedemo/cartPage";
import checkoutStepOnePage from "../../pages/saucedemo/checkoutStepOnePage";
import checkoutStepTwoPage from "../../pages/saucedemo/checkoutStepTwoPage";

describe('Test Implementation', () => {

	beforeEach(() => {
		cy.login();
		inventoryPage.clickAddToCart();
		inventoryPage.getItemNameText();
		inventoryPage.clickShoppingCart();
	});

	it('verify item added', () => {	
		cartPage.elements.itemNameLable().then($title =>{
            const itemNameText = $title.text();
            cy.readFile('cypress/properties/itemNameInventory.txt').then((itenNameInventory) => {
				expect(itemNameText).to.equal(itenNameInventory)
			})
        }) 
   	})

	it('fill checkout and complete', () => {
		cartPage.clickCheckout()
		checkoutStepOnePage.typeFirtsName('Sara')
		checkoutStepOnePage.typeLastName('Osorio')
		checkoutStepOnePage.typePostalCode('52222')
		checkoutStepOnePage.clickContinue()
		checkoutStepTwoPage.elements.itemNameLable().then($title =>{
            const itemNameText = $title.text();
            cy.readFile('cypress/properties/itemNameInventory.txt').then((itenNameInventory) => {
				expect(itenNameInventory).to.equal(itemNameText)
			})
        }) 
		checkoutStepTwoPage.clickFinish()
		checkoutStepTwoPage.elements.titleLable().should('have.text', 'Checkout: Complete!')
     })


     after(() => {
      cy.writeFile('cypress/properties/itemNameInventory.txt', "")         
	});
});