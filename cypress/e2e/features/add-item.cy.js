/// <reference types="cypress" />

describe('add item', () => {
    beforeEach(() => {
        cy.visit('/')

        
    })

    it('adds an item to basket', () => { 
        cy.get(`[aria-label="Add item"]`).first().click()
        cy.get('.p-4').should('include.text', 'Bruschetta')

    })

})