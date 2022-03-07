/// <reference types="cypress" />

it('catches the request made by the test using fetch', () => {
  // cy.intercept does NOT intercept the requests made
  // by the test using cy.request
  // instead you can use "fetch" to make network calls
  // from the test itself if you want cy.intercept to intercept them
  //
  // 1. confirm the cy.intercept does not "see" cy.request network calls
  // 2. use "fetch" instead ot request to make a network call
  // and confirm that cy.intercept does "see" the network call
  // tip: make the test "wait" for the "fetch" promise
  // by using the cy.wrap command https://on.cypress.io/wrap
  // make sure the "fetch" happens AFTER we have confirmed
  // no calls from cy.request are intercepted
  //
  // even better: make the "fetch" call using the app's window "fetch" method
  // "fetch(...)" = "window.fetch(...)"
  // https://on.cypress.io/window and https://on.cypress.io/invoke
  // compare the result received by the "fetch" with the intercepted response
})
