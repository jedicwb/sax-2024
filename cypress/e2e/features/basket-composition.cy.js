/// <reference types="cypress" />


describe('Basket components check', {
    testIsolation: false, // Override testIsolation at the suite level
  }, () => {
    
    before(() => {
        
        cy.visit('/')
        cy.get(`[aria-label="Add item"]`).first().click()
        
    })

    it('should show the item name', () => { 
        
        cy.get('.p-4').should('include.text', 'Bruschetta')

    })

    it('should show the item price', () => { 
        cy.get('.p-4').should('include.text', '€6.5')
    })

    it('should show Delivery Fee', () => { 
        cy.get('.p-4').should('include.text', 'Delivery Fee')
    })

    it('should show Service charge', () => { 
        cy.get('.p-4').should('include.text', 'Service Charge')
    })

    it('should show the Total', () => { 
        cy.get('.p-4').should('include.text', 'Total')
    })

    it('should show the Total amount', () => { 
        cy.get('.p-4').should('include.text', '€12.5')
    })


})