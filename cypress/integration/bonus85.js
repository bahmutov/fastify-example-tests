/// <reference types="cypress" />

// import the cypress-time-marks plugin

it('shows how long one cy.request takes', () => {
  // make the request to "/delay/<delay ms>" endpoint
  // the server should replay after 500ms
  // https://on.cypress.io/request
  //
  // from the object yielded by the cy.request command
  // grab the duration property and assert
  // it is between 500ms and 600ms
})

it('shows how long part of the test takes', () => {
  // use the cypress-time-marks plugin
  // to see how long 3 cy.requests take
  // each delayed by 500ms
  //
  // the total time since the start of the test
  // should be below 2 seconds
})
