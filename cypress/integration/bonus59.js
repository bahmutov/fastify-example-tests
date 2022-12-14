/// <reference types="cypress" />

/**
 * a utility custom command for loading a fixture file
 * converting to a Blob, then to a File object
 * @see https://developer.mozilla.org/en-US/docs/Web/API/File
 * @see https://on.cypress.io/fixture
 */
Cypress.Commands.add(
  'fixtureAsFile',
  (fixture, type, filename) => {
    cy.log(`loading **${fixture}** as ${type}`)
    return cy.fixture(fixture, null).then((buffer) => {
      const blob = Cypress.Blob.arrayBufferToBlob(
        buffer,
        type,
      )
      return new File([blob], filename, { type })
    })
  },
)

it(
  'drops two fixtures',
  { viewportHeight: 600, viewportWidth: 1000 },
  () => {
    cy.visit('/drag-and-drop')
    // confirm the element with id "filedrag"
    // does not have CSS class "hover"
    // but has it after the "dragover" event
    // The class should go away after the "dragleave" event
    // https://on.cypress.io/trigger
    //
    // use the cy.fixtureAsFile command
    // to load two fixtures "apple.json" and "bunny.png"
    // as variables "apple" and "bunny". Each should be a File object
    //
    // Find the element with id "filedrag"
    // and trigger the "drop" event passing the "dataTransfer"
    // object with items "apple" and "bunny"
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files
    //
    // confirm there are two file info elements
    //
    // submit the upload form
    // https://on.cypress.io/submit
    //
    // confirm the uploaded files page URL
    // https://on.cypress.io/location
    //
    // validate the displayed page
    // - the heading
    // - one JSON file "apple.json"
  },
)
