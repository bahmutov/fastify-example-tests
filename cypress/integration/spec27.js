/// <reference types="cypress" />

it('simulates the error status code', () => {
  // intercept the GET /fruit call and
  // return a response with status code 404
  // https://on.cypress.io/intercept
  //
  // visit the site
  //
  // confirm the page has an element with text "HTTP error 404"

  cy.intercept(
    {
      method: 'GET',
      url: '/fruit'
    },
    {
      statusCode: 404
    }
  ).as('errorResponse')

  cy.visit('/')
  cy.wait('@errorResponse')

  cy.contains('#fruit', 'HTTP error 404')
})
