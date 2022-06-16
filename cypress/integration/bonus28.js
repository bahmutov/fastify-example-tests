/// <reference types="cypress" />

// Watch "Introduction To cy-spok Plugin ..."
//  https://www.youtube.com/watch?v=MLDsqBd_gVU
// or read "Asserting Network Calls from Cypress Tests"
//  https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests

// https://github.com/bahmutov/cy-spok
// install the plugin using "npm i -D cy-spok"
// import spok from 'cy-spok'

it('checks the request and response objects using cy-spok', () => {
  // visit the "/calculator.html" page
  // https://on.cypress.io/visit
  //
  // get the first number input element and type 5
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  // get the second input element and type 2
  //
  // intercept the POST /calculate requests
  // https://on.cypress.io/intercept
  // and give it an alias "calculate"
  //
  // get the "Add" button and click it
  // https://on.cypress.io/click
  //
  // wait for the "calculate" request to be made
  // and assert the request and response fields
  // using the "should(spok(...))" assertion
  // - the request should have method "POST"
  //   and body with "a: 5" and property "b" that is a number
  //   and the property "operation" being either "+" or "-"
  // - the response should have status code 200
  //   and the body object having
  //   "a: 5, b: 2, answer: 7, operation +"
  //
  // use cy.get(alias) to get the network intercept again
  // and see if you can confirm the request and the response
  // objects. How many cy.get(alias) calls do you need?
  // https://on.cypress.io/get
  // https://on.cypress.io/its
  // use assertions "deep.include" and "deep.equal"
  //
  // Tip: to see the entire object in the command log,
  // increase the Chai assertion truncate length in the spec
  // chai.config.truncateThreshold = 200
  // https://www.youtube.com/watch?v=BuSBVc3d99Y
})
