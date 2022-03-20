/// <reference types="cypress" />

it('uses the fixture to stub and check the page', () => {
  // load the data from the fixture file "apple.json"
  // using the command https://on.cypress.io/fixture
  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { fixture: 'apple' }).as('apple')

  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')
  // confirm the fruit from the fixture is shown on the page
  // https://on.cypress.io/contains
  cy.wait('@apple')
  cy.contains('apple')
})
