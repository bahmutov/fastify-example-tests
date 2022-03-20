/// <reference types="cypress" />

it('clearly shows the loading element', () => {
  // stub the network call the application makes
  // and delay returning the fruit by 2 seconds
  // https://on.cypress.io/intercept
  //
  // visit the page
  // https://on.cypress.io/visit
  const fruit = 'Kiwi'
  cy.intercept('GET', '/fruit', { body: { fruit }, delay: 2000 }).as('delayed')
  cy.visit('/')

  // check if the loading element is visible
  // and then does not exist
  // https://on.cypress.io/get
  // https://on.cypress.io/should
  //
  // confirm the displayed fruit
  // https://on.cypress.io/contains

  cy.get('#fruit').contains('loading...')
  cy.wait('@delayed').its('response.body.fruit').should('eq', fruit)
  cy.contains(fruit)
})
