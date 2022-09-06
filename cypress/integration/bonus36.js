/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-wait-if-happens
import 'cypress-wait-if-happens'

it('waits for an optional network call', () => {
  // we will intercept the POST /calculate calls
  cy.intercept({
    method: 'POST',
    pathname: '/calculate',
  }).as('calculate')
  // fill the input fields on the calculator page
  cy.visit('/calculator.html')
    .get('#num1')
    .type('1')
    .get('#num2')
    .type('2')
  // the test does NOT click the "+" button
  // instead we should wait for the "@calculate" up to 20 seconds
  // using cy.waitIfHappens(...) command
  // yield the optional intercept to the cy.then callback
  // if there is no intercept, log "No request"
  // otherwise wrap the request and confirm the app
  // sends "a: 1, b: 2" values
  // You can test the wait by clicking the "+" button yourself
  // while the test is running, or by letting it time out
})
