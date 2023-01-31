/// <reference types="cypress" />

// another variant of "Bonus 69" lesson
// to better show Cypress retry-ability feature

// 🚨 DOES NOT WORK, JUST FOR DEMO
it.skip('finds the specific network call among all intercepts', () => {
  // spy on all POST JSON requests
  cy.intercept({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  }).as('post')
  // visit the "calculator.html" page
  // https://on.cypress.io/visit
  // which can fire several /track Ajax calls
  cy.visit('/calculator.html')
  // enter numbers 20 and 6 and calculate their sum
  cy.get('#num1').type('20')
  cy.get('#num2').type('6')
  // instead of using "cy.click" command
  // we trigger jQuery click to simulate a delayed network call
  // and force finding the right network intercept to really retry
  cy.get('#add').then(($button) => {
    setTimeout(() => $button.trigger('click'), 1000)
  })
  // confirm there was a POST request with body
  // { eventName: '+', ... }
  // and confirm its arguments were the addition operands
  cy.get('@post.all')
    .invoke('find', (intercept) => {
      return intercept.request.body.eventName === '+'
    })
    .should('be.an', 'object')
    .then(console.log)
    .its('request.body.args')
    .should('deep.equal', { a: 20, b: 6 })
})

describe('retry searching the array', () => {
  // For each test, can you collect all network calls made by the application
  // using method "POST" and content type JSON?
  // For each network call, can you save:
  //  - the request method
  //  - the URL (without the base Url part)
  //  - the request body
  const calls = []

  beforeEach(() => {
    calls.length = 0
    // spy on all POST JSON network calls
    // and store the request parameters in the "calls" array
  })

  afterEach(() => {
    console.table(calls)
  })

  it('finds the specific network call in the array', () => {
    // visit the "calculator.html" page
    // https://on.cypress.io/visit
    // which can fire several /track Ajax calls
    cy.visit('/calculator.html')
    // enter numbers 20 and 6 and calculate their sum
    cy.get('#num1').type('20')
    cy.get('#num2').type('6')
    // instead of using "cy.click" command
    // we trigger jQuery click to simulate a delayed network call
    // and force finding the right network intercept to really retry
    cy.get('#add').then(($button) => {
      setTimeout(() => $button.trigger('click'), 1000)
    })
    // confirm there was a POST request with body
    // { eventName: '+', ... }
    // and confirm its arguments were the addition operands
  })
})
