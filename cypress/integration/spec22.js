/// <reference types="cypress" />

it('uses cy.wait vs cy.get to access the intercept', () => {
  // if you set up a network intercept, you can wait
  // for it to happen using cy.wait(alias)
  // if the call has already happened, you can get the intercept
  // using cy.get(alias)
  //
  // set up a network intercept GET /fruit
  // visit the page and get the fruit from the page
  // then get the intercept using cy.get(alias)
  // and confirm the response.body is { fruit }
  //
  // you can get the intercept again as many times as necessary
  // for example, use cy.get(alias) again to check the response status code

  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.wait('@fruit')

  cy.contains('#fruit', /^[A-Z][a-z]+$/)
    .invoke('text')
    .then((fruit) =>
      cy.get('@fruit').its('response.body.fruit').should('eq', fruit)
    )

  cy.get('@fruit').its('response').should('have.property', 'statusCode', 200)
})
