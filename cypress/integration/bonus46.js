/// <reference types="cypress" />

// finish implementing and refactoring this test
it.skip('successfully completes every network request', () => {
  // intercept all requests and let them continue
  // going to the server. When the server replies,
  // check the response status code. It should be below 400.
  // https://on.cypress.io/intercept
  cy.intercept('*', (req) => {
    req.continue((res) => {
      expect(res.statusCode, 'status code').to.be.oneOf([
        200, 304,
      ])
    })
  })
  // visit the page "/bundles.html" and see if the test fails
  // https://on.cypress.io/visit
  cy.visit('/bundles.html')
})
