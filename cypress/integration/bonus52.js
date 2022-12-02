/// <reference types="cypress" />

it('measures the time between the visit and returned fruit', () => {
  // spy on the network call to "GET /fruit"
  // and give the intercept alias "fruit"
  // https://on.cypress.io/intercept
  //
  // visit the "delayed.html" page
  // https://on.cypress.io/visit
  let visitAt
  // before load save the current timestamp
  // in the variable "visitAt"
  //
  // wait for the network intercept "@wait"
  // https://on.cypress.io/wait
  // then take another timestamp and compute
  // the elapsed duration in milliseconds
  // https://on.cypress.io/then
  //
  // show the elapsed time in the Command Log
  //
  // Bonus: fail the test if the elapsed duration
  // is above 1500ms
})

it('measures the time between the visit and shown fruit', () => {
  // visit the "delayed.html" page
  // https://on.cypress.io/visit
  let visitAt
  // before load save the current timestamp
  // in the variable "visitAt"
  //
  // confirm the page no longer shows the "loading" text
  // https://on.cypress.io/contains
  //
  // then compute the elapsed time in milliseconds
  // since the "visitAt" timestamp
  //
  // show the elapsed time in the Command Log
  //
  // Bonus: fail the test if the elapsed duration
  // is above 3000ms
})

// Big bonus: implement the above tests using the plugin
// https://github.com/bahmutov/cypress-time-marks
describe('time marks', () => {
  it('between the visit and returned fruit', () => {
    // cy.timeMark
    // cy.timeSince
  })

  it('between the visit and shown fruit', () => {
    // cy.timeMark
    // cy.timeSince
  })
})
