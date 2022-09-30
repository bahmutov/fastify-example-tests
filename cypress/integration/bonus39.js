/// <reference types="cypress" />

// the starting code
it('checks the intercept status code', () => {
  cy.intercept('GET', '/app.js').as('app')
  cy.intercept('GET', '/main.js').as('main')
  cy.intercept('GET', '/old-bundle.js').as('bundle')
  cy.visit('/bundles.html')
  cy.wait('@app')
    .its('response')
    .should('have.property', 'statusCode')
    .should('be.oneOf', [200, 304])
  cy.wait('@main')
    .its('response')
    .should('have.property', 'statusCode')
    .should('be.oneOf', [200, 304])
  // this bundle does not exist
  // we use it to confirm the default cy.wait behavior
  cy.wait('@bundle')
})

// add a custom Cypress command called "waitForSuccess"
// it should take an alias and return a chainable object
// it should confirm the response status code is 200 or 304
// and yield the response body property
// Tip: all the inner commands should log nothing
// but you can use cy.log to log the network alias
Cypress.Commands.add('waitForSuccess', (alias) => {})

// the same test using cy.waitForSuccess command
// instead of cy.wait
it('waits for success', () => {
  cy.intercept('GET', '/app.js').as('app')
  cy.intercept('GET', '/main.js').as('main')
  cy.intercept('GET', '/old-bundle.js').as('bundle')
  cy.visit('/bundles.html')
  cy.waitForSuccess('@app')
  cy.waitForSuccess('@main')
  // uncomment to see the test fail on 404 status code
  cy.waitForSuccess('@bundle')
})
