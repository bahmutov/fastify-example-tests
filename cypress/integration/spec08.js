/// <reference types="cypress" />

import * as data from '../fixtures/apple.json'
// import the fixture JSON data from the file "../fixtures/apple.json"

it('imports the fixture from JSON file', () => {
  // print the imported fruit to the Command Log
  // https://on.cypress.io/log
  cy.log(data.fruit)

  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { body: data })

  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')

  // confirm the fruit from the fixture is shown on the page
  // https://on.cypress.io/contains
  cy.contains(data.fruit)
})
