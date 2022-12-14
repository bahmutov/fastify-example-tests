/// <reference types="cypress" />

it(
  'selects two files with contents',
  { viewportHeight: 600, viewportWidth: 1000 },
  () => {
    cy.visit('/drag-and-drop')
    // find the element with id "fileselect"
    // and select two files using "cy.selectFile"
    // https://on.cypress.io/selectfile
    // Pass two objects to simulate two files
    // 1: fileName "first.json" with contents { fruit: 'melon' }
    // 2: fileName "second.json" with contents [{ age: 1 }, { age: 2 }]
    //
    // confirm there are two file info records
    // and the first record has the following elements
    // name: second.json
    // type: application/json
    // size: between 10 and 30 bytes
    // https://on.cypress.io/get
    // https://on.cypress.io/first
    // https://on.cypress.io/within
    //
    // submit the upload form
    // https://on.cypress.io/submit
    //
    // confirm the uploaded files page URL
    // https://on.cypress.io/location
    //
    // validate the displayed page
    // - the heading
    // - two JSON files
    // you can validate the contents of the files
  },
)

it(
  'selects two fixtures',
  { viewportHeight: 600, viewportWidth: 1000 },
  () => {
    cy.visit('/drag-and-drop')
    // find the element with id "fileselect"
    // and select two files using "cy.selectFile"
    // https://on.cypress.io/selectfile
    // Select the fixtures "apple.json" and "bunny.png"
    //
    // confirm there are two file info records
    // https://on.cypress.io/get
    // and the first file info record
    // has the type "image/png"
  },
)
