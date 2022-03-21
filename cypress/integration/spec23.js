/// <reference types="cypress" />

const { _ } = Cypress
import { each } from 'cypress-recurse'

it('gets all interceptions', () => {
  // wait for the fruit to be shown on the page
  // need to get all network calls from the alias "fruit"
  // tip: use https://on.cypress.io/get command
  // like cy.get(alias.all)
  // confirm there are 4 responses
  // print the responses to the console using
  // cy.get(alias.all).then(console.log)
  // and inspect the available properties
  //
  // if we use cy.wait(alias) then each response
  // will mark those intercepts as "requestWaited: true"
  // confirm this is true for the first request
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.wait('@fruit')
  _.times(3, () => {
    cy.reload()
    cy.wait('@fruit')
  })

  cy.get('@fruit.all')
    .should('have.length.gte', 4)
    .then(console.log)
    .each((response) => cy.wrap(response.requestWaited).should('eq', true))
})

it('uses cypress-recurse each feature', () => {
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.wait('@fruit')
  _.times(3, () => {
    cy.reload()
    cy.wait('@fruit')
  })

  cy.get('@fruit.all')
    .should('have.length.gte', 4)
    .then(
      each((response) => cy.wrap(response.requestWaited).should('eq', true))
    )
})

it('uses cypress-recurse each feature with optional stop condition', () => {
  cy.intercept('GET', '/fruit').as('fruit')
  cy.visit('/')
  cy.wait('@fruit')
  _.times(3, () => {
    cy.reload()
    cy.wait('@fruit')
  })

  cy.get('@fruit.all')
    .should('have.length.gte', 4)
    .then(
      each(
        (call) => call.response.body.fruit,
        // or lol
        // ({
        //   response: {
        //     body: { fruit }
        //   }
        // }) => fruit,
        (fruit) => fruit === 'Bananas'
      )
    )
})
