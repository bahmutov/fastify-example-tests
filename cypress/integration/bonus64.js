/// <reference types="cypress" />
// @ts-check

// This test fails to catch the network call
// Can you fix it? Can you make the cy.intercept command
// log a message to the Cypress Command Log
// Tip: overwrite the command
// https://on.cypress.io/custom-commands
it.skip('registers the intercept too late', () => {
  // visit the calculator page and add two numbers
  cy.visit('/calculator.html')
  cy.get('#num1').type('10')
  cy.get('#num2').type('20')
  cy.get('#add').click()
  cy.intercept('POST', '/calculate').as('calculate')
  // confirm the "POST /calculate" call is made
  cy.wait('@calculate')
})
