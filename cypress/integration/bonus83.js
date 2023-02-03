/// <reference types="cypress" />

// another solution to the problem posed in "bonus 46" lesson
// we want to automatically fail the test if any of the network requests
// return the 4xx or 5xx status from the server

// import cypress-network-idle plugin

beforeEach(() => {
  // using cypress-network-idle plugin
  // command "cy.waitForNetworkIdlePrepare"
  // spy on all network calls and fail the test
  // if any of them get the status code 4xx or 5xx
  // https://github.com/bahmutov/cypress-network-idle
})

// enable the test to see it fail
it('successfully completes every network request', () => {
  // visit the page "/bundles.html" and see if the test fails
  // https://on.cypress.io/visit
  cy.visit('/bundles.html')
})
