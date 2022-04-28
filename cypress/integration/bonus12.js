/// <reference types="cypress" />

it('saves the intercepted network response', () => {
  // intercept the GET /fruit request
  // https://on.cypress.io/intercept
  // and print the server response using "cy.log" command
  // https://on.cypress.io/log
  //
  // visit the site using cy.visit("/")
  //
  // NOTE: you cannot use "cy" commands inside the
  // intercept route handler. Instead, save the response
  // in a local closure variable "response"
  // and wait for the network call to finish
  // then print the saved response using the "cy.log"
  // command and save it into a file "response.json"
  // https://on.cypress.io/writefile
})
