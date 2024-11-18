/// <reference types="cypress" />

describe('add item', () => {
    beforeEach(() => {
        cy.visit('/')

        
    })

    it('adds a simple item to basket', () => { 
        cy.get(`[aria-label="Add item"]`)
            .first()
            .click()
        cy.get('.p-4')
            .should('include.text', 'Bruschetta')
    })

    it('adds restricted item to basket', () => { 
        cy.get('[placeholder="Search items of this restaurant"]')
            .click()
            .type('Beer');
        cy.get(`[data-qa="item-card"]`)
            .first()
            .click()
        cy.get(`[data-qa="item-selector-dialog-content"]`)
            .should('exist')
        
        cy.get(`[data-qa="item-selector-add-button"]`).click()
        
        cy.get('.p-4')
            .should('include.text', 'Beer')
    })

})