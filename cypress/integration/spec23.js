/// <reference types="cypress" />

it('gets all interceptions', () => {
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.reload()
  cy.reload()
  cy.reload()
  // wait for the fruit to be shown on the page
  // need to get all network calls from the alias "fruit"
  // tip: use https://on.cypress.io/get command
  // like cy.get(alias.all)

  // confirm there are 4 responses
  // print the responses to the console using
  // cy.get(alias.all).then(console.log)
  // and inspect the available properties
  //
  // if we use cy.wait(alias) then each response
  // will mark those intercepts as "requestWaited: true"
  // confirm this is true for the first request
})
