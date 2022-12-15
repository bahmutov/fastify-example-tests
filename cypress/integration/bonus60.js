/// <reference types="cypress" />

it(
  'loads',
  { viewportWidth: 800, viewportHeight: 1000 },
  () => {
    // intercept the "GET /css-import/app.css" requests
    // and slow them down by 1 seconds
    // https://on.cypress.io/intercept
    //
    // visit the page "css-import"
    // https://on.cypress.io/visit
    //
    // observe how long the page takes to load until
    // the imported styles are applied
    // get the window object
    // using cy.window or the yielded window
    // from the cy.visit command
    // it should have an object "performance"
    // with object "timing" inside
    // https://on.cypress.io/its
    //
    // log the timing object to the DevTools console
    //
    // and compute the difference between
    // the "DOM content loaded end" and "Navigation start"
    // properties. It should be between 1 and 1.1 seconds
  },
)
