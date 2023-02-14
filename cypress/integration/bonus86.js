/// <reference types="cypress" />

it('maybe waits for an intercept', () => {
  // wrap a simple value to have other types of aliased values
  // and not just a network intercept alias
  cy.wrap(42).as('answer')
  // sometimes the test has a cy.intercept aliased
  // and sometimes it does not
  if (Cypress._.random() < 0.5) {
    cy.log('**spying on /fruit**')
    cy.intercept('GET', '/fruit').as('fruit')
  } else {
    cy.log('**no intercepts**')
  }
  // visit the homepage "/", which makes an Ajax call "GET /fruit"
  cy.visit('/')
  // how to wait for "@fruit" intercept IF it was registered?
  // something like this with "intercept" being undefined if there is no alias
  // cy.waitMaybe('@fruit').then(intercept => { ... })
  //
  // Tip:
  // Look at the internal state of Cypress: cy.state('aliases') and cy.state('routes')
  //
  // use the custom command to wait for the "@fruit"
  // and confirm the response (if there was an intercept) is ok
})

// Solution 2:
// custom commands to avoid relying on Cypress internal state
// Important: make sure each test starts with clean slate

it('maybe waits for an intercept (without using internal state)', () => {
  // one command replaces "cy.intercept(method, url).as('alias')"
  // to save the network calls we can spy on
  //
  // a custom command to wait on a network alias
  // IF it was defined. Yields undefined or the intercept
  //
  // wrap a simple value to have other types of aliased values
  // and not just a network intercept alias
  cy.wrap(42).as('answer')
  // sometimes the test has a cy.intercept aliased
  // and sometimes it does not
  if (Cypress._.random() < 0.5) {
    cy.log('**spying on /fruit**')
    // use your custom command to define
    // intercept "GET /fruit" and give it alias "fruit"
  } else {
    cy.log('**no intercepts**')
  }
  // visit the homepage "/", which makes an Ajax call "GET /fruit"
  cy.visit('/')
  // how to wait for "@fruit" intercept IF it was registered?
  // something like this with "intercept" being undefined if there is no alias
  // cy.waitMaybe('@fruit').then(intercept => { ... })

  // use the custom command to wait for the "@fruit"
  // and confirm the response (if there was an intercept) is ok
})
