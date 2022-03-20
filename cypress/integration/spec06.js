/// <reference types="cypress" />

it('shows the loading element then fruit from a fixture', () => {
  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { fixture: 'apple' }).as('apple')
  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')
  cy.get('#fruit').should('have.text', 'loading...')
  cy.wait('@apple')
  cy.get('#fruit').should('not.have.text', 'loading...').and('contain', 'apple')
  // confirm the "loading..." text is shown
  // confirm the "apple" text is shown
  // https://on.cypress.io/contains
  //
  // confirm there is no element with the text "loading..."
  // https://on.cypress.io/should
})
