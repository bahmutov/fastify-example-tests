/// <reference types="cypress" />

it('successfully completes every network request', () => {
  // intercept all requests and let them continue
  // going to the server. When the server replies,
  // check the response status code. It should be either
  // 2xx or 3xx code. In our application, the response codes
  // are limited to 200 (success) and 304 (not modified)
  // https://on.cypress.io/intercept
  //
  // visit the page using https://on.cypress.io/visit
  // in the Cypress command log observe the network requests
  // notice they are all successful
  //
  // reload the page to see the same behavior
  // and possible the 304 (not modified) status codes
  // https://on.cypress.io/reload
})
