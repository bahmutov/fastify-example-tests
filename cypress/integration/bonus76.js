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

it('Bonus: overwrites cy.request to always send the custom header', () => {
  // Bonus: overwrite the cy.request command
  // assume we always call cy.request with an options object
  // like cy.request(options)
  // add to each options object the header "x-test-id"
  cy.visit('/calculator.html')
  cy.get('#num1').type('10')
  cy.get('#num2').type('5')
  cy.contains('+').click()
  cy.contains('#answer', '15')
  // Make the call from the test without setting a custom header "x-test-id"
  // Do you see it in your server terminal output?
  cy.request({
    method: 'POST',
    url: '/calculate',
    body: {
      a: 20,
      b: 30,
      operation: '-',
    },
  })
    .its('body')
    .should('deep.equal', {
      a: 20,
      b: 30,
      operation: '-',
      answer: -10,
    })
})
