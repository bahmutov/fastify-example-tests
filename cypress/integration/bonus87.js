/// <reference types="cypress" />

it('sends a plain text fixture', () => {
  // read the fixture file "tale.txt"
  // https://on.cypress.file/fixture
  // trim the loaded string
  // https://on.cypress.io/invoke
  // pass the text value into the next cy.then callback
  // https://on.cypress.io/then
  //
  // make a POST request to /submit-text
  // with the loaded text
  // https://on.cypress.io/request
  // Tip: you might need to ser the content type header
  //
  // grab the response body
  // https://on.cypress.io/its
  //
  // and write it to the current empty document
  // https://on.cypress.io/document
  // https://on.cypress.io/invoke
  //
  // confirm the server sent back the same text
  // https://on.cypress.io/contains
})

it('sends a plain text file', () => {
  // read the fixture file "tale.txt" using cy.readFile command
  // https://on.cypress.file/readfile
  // trim the loaded string
  // https://on.cypress.io/invoke
  // pass the text value into the next cy.then callback
  // https://on.cypress.io/then
  //
  // make a POST request to /submit-text
  // with the loaded text
  // https://on.cypress.io/request
  // Tip: you might need to ser the content type header
  //
  // grab the response body
  // https://on.cypress.io/its
  //
  // and write it to the current empty document
  // https://on.cypress.io/document
  // https://on.cypress.io/invoke
  // Question: how do you clear the document
  // if the previous test left its HTML there?
  //
  // confirm the server sent back the same text
  // https://on.cypress.io/contains
})
