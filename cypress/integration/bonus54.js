/// <reference types="cypress" />

it('uploads a JSON file using a form', () => {
  // visit the page "/upload-json-file.html"
  // https://on.cypress.io/visit
  //
  // find the file input element with the name "json-file"
  // and select the JSON fixture file "apple.json"
  // https://on.cypress.io/selectfile
  //
  // find the button with the text "Submit"
  // and click it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // confirm the URL changes to /upload-json-file
  //
  // confirm the server has received out JSON file
  // by checking the response HTML elements:
  // the page heading, the filename, the JSON output
  // Tip: you probably will need to load the fixture "apple.json"
})

it('uploads a JSON file using a cy.request', () => {
  // create a new instance of FormData
  //
  // load the fixture "apple.json"
  // https://on.cypress.io/fixture
  //
  // convert it to JSON and create a Blob
  // using Cypress.Blob.createBlob method
  // Tip: the 2nd argument should be "application/json"
  //
  // set the blob in the form under the form field name
  // Tip: don't forget to give the filename
  //
  // post the form to "/upload-json-file" endpoint
  // https://on.cypress.io/request
  //
  // grab the response body
  // https://on.cypress.io/its
  //
  // and convert it from ArrayBuffer to Buffer
  //
  // convert the buffer to a string
  // https://on.cypress.io/invoke
  //
  // and write the string to the current HTML document
  // https://on.cypress.io/document
  //
  // confirm the server has received out JSON file
  // by checking the response HTML elements:
  // the page heading, the filename, the JSON output
})
