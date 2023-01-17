/// <reference types="cypress" />
// @ts-check

it('makes the track call before the calculate call', () => {
  // visit the "calculator.html" page
  // https://on.cypress.io/visit
  // which can fire several /track Ajax calls
  cy.visit('/calculator.html')
  // enter numbers 20 and 6 and calculate their sum
  //
  // spy on the "POST /track" network calls
  // and spy on the "POST /calculate" network calls
  // https://on.cypress.io/intercept
  // https://on.cypress.io/spy
  // Tip: use functional spies and give them aliases
  //
  // confirm the call as made by looking at the page
  // and finding the displayed answer 26
  // https://on.cypress.io/contains
  //
  // confirm the "track" call happened before "calculate" call
  // by getting the spy by its alias "track"
  // and checking that it was called.
  // Get the second spy "calculate" and confirm it was called
  // after the "track" call
})
