/// <reference types="cypress" />

describe('Reserva voo EBAC-Air - Cadastro', () => {

    beforeEach(() => {
        cy.visit('purchase.php')
    });

    it('Deve fazer o cadastro com sucesso', () => {
        // elemento + ação
        cy.get('#inputName').type('Fábio Araujo')
        cy.get('#address').type('Av. Paulista 2000')
        cy.get('#city').type('São Paulo')
        cy.get('#state').type('SP')
        cy.get('#zipCode').type('43432432')
        cy.get('#cardType').select('American Express')
        cy.get('#creditCardNumber').type('324234234234324')
        cy.get('#creditCardMonth').type('01')
        cy.get('#creditCardYear').type('2029')
        cy.get('#nameOnCard').type('Fábio Araujo')
        cy.get('#rememberMe').check()
        cy.get('.controls > .btn').click()
        cy.get('h1').should('contain', 'Thank you for your purchase today!')
    });



});