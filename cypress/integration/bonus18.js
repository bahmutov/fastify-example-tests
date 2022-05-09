/// <reference types="cypress" />

it('waits for several network requests to finish', () => {
  // intercept the GET / call to the server
  // and give it an alias "doc"
  // https://on.cypress.io/intercept
  // intercept the GET /fruit and give it an alias "fruit"
  //
  // freeze the application clock so we can fast-forward it later
  // https://on.cypress.io/clock
  // visit the page "/"
  // https://on.cypress.io/visit
  //
  // the visit will trigger a few network requests
  // but we want to cause another /fruit call
  // which we can do by advancing the application clock
  // by 1 minute using https://on.cypress.io/tick
  //
  // wait for 3 network requests to finish
  // using a single https://on.cypress.io/wait command
  // Tip: pass an array of aliases to wait for
  // The aliases should be:
  // 1 - the document request
  // 2, 3 - the fruit requests
  // either get an array of interceptions in a "then" callback
  // or use cy.spread to get the separate 3 intercepts
  // https://on.cypress.io/spread
  //
  // confirm some properties of the intercepted responses
  // like the successful status code
  //
  // confirm the two intercepted fruits
  // are different from each other
})
