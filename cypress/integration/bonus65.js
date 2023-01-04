/// <reference types="cypress" />
// @ts-check

// uncomment the test to see it fail correctly
it.skip('fails the test when an intercept fails', () => {
  // we have defined a network spy
  // that checks if the returned fruit is "Cucumber"
  // Note: the server NEVER returns the "Cucumber"
  // thus we expect this test to fail, right?!
  cy.intercept('GET', '/fruit', (req) => {
    req.continue((res) => {
      expect(res.body.fruit).to.equal('Cucumber')
    })
  })
  // visit the "/" page, which should kick off
  // the application network call to get the fruit
  cy.visit('/')
})
