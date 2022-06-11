/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

// uses the recurse utility to check if the
// give URL is up and running
function ping(url, n = 5) {
  // call the "recurse" function with 3 arguments
  // 1: function with Cypress command chain
  // to fetch the URL using cy.window + invoke "fetch"
  // 2: the predicate function that returns true if the
  // first command yielded ok status code
  // 3: the options object with the number of attempts
  // and the delay between attempts
  //
  // Tip: remember you cannot simply use the cy.request
  // command since it is "invisible" to the cy.intercept
}

it('retries pinging the server using cypress-recurse', () => {
  // stub the GET / endpoint to return an error 3 times
  // https://on.cypress.io/intercept
  //
  // ping the / endpoint 5 times or until it responds
  // by calling the ping function
  //
  // now that the server responds, visit the "/"
  // https://on.cypress.io/visit
  //
  // confirm the page loads by checking H1 text
  // https://on.cypress.io/contains
})
