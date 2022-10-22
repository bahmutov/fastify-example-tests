/// <reference types="cypress" />

it(
  'uploads a file',
  { viewportHeight: 400, viewportWidth: 300 },
  () => {
    // visit the /upload-pic.html
    // https://on.cypress.io/visit
    // enter the username "test"
    // and select a png fixture "profile.png"
    // in the picture file input
    // https://on.cypress.io/selectfile
    //
    // submit the form
    // verify the URL has changed correctly
    // https://on.cypress.io/location
    //
    // the page should have the correct success message
    // and have the image with attribute "alt=Profile picture"
    //
    // Bonus 1: verify the shown image has the same
    // expected dimensions
    // by checking the "naturalWidth" and "naturalHeight" props
    //
    // Bonus 2: verify the fixture image "profile.png" has the
    // expected dimensions by constructing a temp image element
    // https://on.cypress.io/fixture
    // Load the fixture image in base64 encoding
    // the form the "data:image/png..." source string
    // and create a jQuery image object using Cypress.$
    // and confirm its "naturalWidth" and "naturalHeight" props
  },
)
