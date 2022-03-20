/// <reference types="cypress" />

it('shows the loading element with Promise.delay', () => {
  // set up an intercept to spy on the GET /fruit endpoint
  // but delay the request by 2 seconds using
  // Cypress.Promise.delay(200) and the response function
  // hint: see https://on.cypress.io/intercept and
  // the response callback function

  cy.intercept(
    {
      method: 'GET',
      url: '/fruit'
    },
    (req) => req.continue(() => Cypress.Promise.delay(2000))
  ).as('delayedRequest')

  // visit the site
  cy.visit('/')
  // make sure the loading element is visible
  // from the request spy, get the response body
  // and confirm the fruit returned by the server is visible
  cy.contains('loading...').should('be.visible')
  cy.wait('@delayedRequest')
    .its('response.body.fruit')
    .then((fruit) => cy.contains(fruit))
})
