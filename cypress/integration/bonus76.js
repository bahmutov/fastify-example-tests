/// <reference types="cypress" />
// @ts-check

// before each test generate a random test ID string
// and attach it to every GET and POST network call
// made by the application. Use the request header name "x-test-id"
// https://on.cypress.io/intercept

it('sends common X request id header on all network calls', () => {
  // observe the terminal output from the fastify-example server
  // you should see the same "x-test-id" request header
  // on multiple requests
  cy.visit('/calculator.html')
  cy.get('#num1').type('10')
  cy.get('#num2').type('5')
  cy.contains('+').click()
  cy.contains('#answer', '15')
})
