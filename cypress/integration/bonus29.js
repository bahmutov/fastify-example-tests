/// <reference types="cypress" />

// add a custom Cypress command to wait for a successful response
// given an alias. The command should log "Success" if the response
// status code is 200. Otherwise it should keep waiting
// for the same alias. What does the command yield?
// Can you make it yield the status code? Or the intercept?
// https://on.cypress.io/custom-commands
Cypress.Commands.add('waitForSuccess', (alias, n = 3) => {
  // stop the test if we ran out of attempts "n"
  // write the code here
})

beforeEach(() => {
  // reset the unreliable server to its initial state
  cy.request('POST', '/unreliable')
  // now the first 2 requests to GET /unreliable
  // will fail with a 500 status code
  // and after that the page load will succeed
})

it('waits for a successful message', () => {
  // visit the page /retries.html
  // https://on.cypress.io/visit
  //
  // confirm that it contains an element with id "result"
  // first with the text "FAIL 1"
  // then with the text "FAIL 2"
  // and then with the text "SUCCESS"
  // https://on.cypress.io/contains
})

it('waits until a successful response using a custom command', () => {
  // spy on the GET /unreliable request
  // and give it an alias "unreliable"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the page /retries.html
  // https://on.cypress.io/visit
  //
  // call the custom command waitForSuccess
  // and confirm that it yields the value 200
})
