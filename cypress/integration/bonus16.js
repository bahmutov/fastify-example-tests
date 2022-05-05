/// <reference types="cypress" />

// this is another solution the problem shown in Lesson spec09
it('returns different fruits revisited', () => {
  // write the route handler function with custom logic
  // that returns the fruit "apple" on the first call
  // and the fruit "grapes" after that
  // https://on.cypress.io/intercept
  // cy.intercept(routeMatcher, routeHandler)
  let count = 0
  // visit the site
  // confirm it shows "apple"
  // reload the site several times to check if it always
  // shows the same fruit "grapes"
})
