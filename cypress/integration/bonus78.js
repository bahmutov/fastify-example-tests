/// <reference types="cypress" />
// @ts-check

it('sends URL encoded form using cy.request command', () => {
  // make an API POST request to submit the URL encoded form
  // to the URL /submit-urlencoded
  // with the content type "application/x-www-form-urlencoded"
  // Send an object with a city name and a "guess: 6" property
  // https://on.cypress.io/request
  //
  // the server responds with an HTML page
  // grab the body of the yielded object - it is an HTML string
  // https://on.cypress.io/its
  // https://on.cypress.io/then
  //
  // grab the current document object
  // https://on.cypress.io/document
  // and write the HTML from the server ino the document
  // https://on.cypress.io/invoke
  //
  // the page should display the sent values
  // https://on.cypress.io/contains
})
