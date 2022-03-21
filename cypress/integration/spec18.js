/// <reference types="cypress" />

it('does not intercept the requests made using cy.request', () => {
  // cy.intercept does NOT intercept the requests made
  // by the test using cy.request
  // set up the intercept and make the cy.request call
  // Confirm the cy.intercept does not "see" cy.request network calls
  cy.intercept('GET', '/fruit', cy.spy().as('getFruit'))
  cy.request('GET', '/fruit')
  cy.get('@getFruit').should('not.be.called')
})

// can flake in CI because fetch may be called after cy.get
it.skip('catches the request made by the test using fetch', () => {
  // The test itself can use the "fetch" to make network calls
  // Use "fetch" instead ot request to make a network call
  // and confirm that cy.intercept does "see" the network call
  //
  // set up the intercept
  // make the fetch call and confirm the response body
  // has the property "fruit"
  // check that the intercept has worked using cy.wait
  //
  // tip 1: make sure to make the "fetch" call AFTER the cy.intercept

  cy.intercept('GET', '/fruit', cy.spy().as('getFruit'))
  fetch('/fruit')
  cy.get('@getFruit').should('be.called')
})

it('waits for the fetch to finish using cy.wrap command', () => {
  // set up the intercept then
  // make the test "wait" for the "fetch" promise
  // by using the cy.wrap command https://on.cypress.io/wrap
  // around the promise returned by the "fetch"
  // from the response, get the json by invoking the "json" method
  // confirm the body has the property "fruit"

  cy.intercept('GET', '/fruit', cy.spy().as('getFruit'))
  cy.wrap(fetch('/fruit'))
    .then((res) => res.json())
    .its('fruit')
    .should('exist')
})

it('invokes window.fetch using the cy.invoke command', () => {
  // set up the intercept
  // use cy.window() command to get the app's window object
  // https://on.cypress.io/window and https://on.cypress.io/invoke
  // and invoke the method "fetch" with parameter "/fruit"
  // because "fetch(...)" = "window.fetch(...)"
  // invoke the method "json" on the response
  // and confirm the body has the property "fruit"
  // from the intercept get the fruit and confirm the "fetch" response body

  cy.intercept('GET', '/fruit', cy.spy().as('getFruit'))
  cy.window()
    .invoke('fetch', '/fruit')
    .then((res) => res.json())
    .its('fruit')
    .should('exist')
})
