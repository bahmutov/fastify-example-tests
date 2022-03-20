/// <reference types="cypress" />

it('shows a different fruit after reloading the page', () => {
  // visit the site using https://on.cypress.io/visit
  // grab the fruit name from the page
  // (make sure it is not "loading...")
  cy.visit('/')
  cy.get('#fruit')
    .should('not.have.text', 'loading...')
    .contains(/^[A-Z][a-z]+$/)
    .then((firstFruit) => {
      cy.reload()
      cy.get('#fruit')
        .should('not.have.text', 'loading...')
        .and('not.have.text', firstFruit)
    })

  // reload the page using https://on.cypress.io/reload
  // grab the fruit name from the page again
  // confirm the fruit name is different

  // tip: use nested https://on.cypress.io/then callbacks
})
