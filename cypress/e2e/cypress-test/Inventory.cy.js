describe ('Add items in the chart', ()=> {
    
    it('Adding item', ()=> {

        var titleInventory

        cy.login();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('#item_4_title_link').then($title =>{
            const itemNameText = $title.text();
            titleInventory = itemNameText
            cy.get('#item_4_title_link').then($cartTitle =>{
                const itemNameText = $cartTitle.text();
                cy.get('.shopping_cart_link').click()
                expect(titleInventory).to.be.equal(itemNameText)
                cy.get('[data-test="checkout"]').click() 
                // fill information 
              
                cy.get('[data-test="firstName"]').type('Sara')
                cy.get('[data-test="lastName"]').type('Osorio')
                cy.get('[data-test="postalCode"]').type('123')
                cy.get('[data-test="continue"]').click()
                cy.get('#item_4_title_link').then($title =>{
                    const titleCheckout = $title.text();
                    expect(titleCheckout).to.be.equal(itemNameText)
                    cy.get('[data-test="finish"]').click()
                    cy.get('.title').should('have.text', 'Checkout: Complete!')
                
            })
            
        })

 
       
})
       
})
})

