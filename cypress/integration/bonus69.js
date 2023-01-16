/// <reference types="cypress" />
// @ts-check

// For each test, can you collect all network calls made by the application
// using method "POST" and content type JSON?
// For each network call, can you save the method, the URL (without the base Url part),
// the status code, and the request and response bodies?
// Can you write these calls into a JSON file "network-calls.json"?
let calls = []

it('saves all network calls into a file after the test', () => {
  // visit the "calculator.html" page
  // https://on.cypress.io/visit
  // which can fire several /track Ajax calls
  cy.visit('/calculator.html')
  // enter numbers 20 and 6 and calculate their sum
  //
  // confirm the call as made by looking at the page
  // and finding the displayed answer 26
  // https://on.cypress.io/contains
})
