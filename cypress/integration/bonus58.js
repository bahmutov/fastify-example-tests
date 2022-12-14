/// <reference types="cypress" />

it(
  'uploads JSON fixtures and checks the response page',
  { viewportHeight: 600, viewportWidth: 1000 },
  () => {
    cy.visit('/drag-and-drop')
    // find the element with id "fileselect"
    // and select two JSON fixture files using "cy.selectFile"
    // "apple.json" and "sale.json"
    // https://on.cypress.io/selectfile
    //
    // confirm there are two file info records
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
  },
)
