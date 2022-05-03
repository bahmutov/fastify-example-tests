/// <reference types="cypress" />

it('checks the requests that never finish', () => {
  // if you visit the page "/no-end.html"
  // you will get a network request that never ends
  // GET /fruit-long is pending
  // Please set up an intercept that confirms the request
  // happens, but there is no server response
  // https://on.cypress.io/intercept
  //
  // Tip: you can call separate stubs
  // one stub should be called when the request is made
  // and another stub should be called when the request is finished
  // https://on.cypress.io/stub
  //
  // Give the intercept an alias "fruit-long"
  // visit the page "no-end.html"
  //
  // we cannot wait for the network call - it never finishes
  // cy.wait('@fruit-long', { timeout: 1000 })
  //
  // instead we can check if the stub was called on the way out
  // but the stub was never called when the request finished
})
