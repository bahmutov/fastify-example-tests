/// <reference types="cypress" />

it(
  'uploads an image file using cy.request',
  { viewportHeight: 400, viewportWidth: 300 },
  () => {
    // create a new instance of FormData
    // and set each field to upload
    // we need to upload the "username=test"
    //
    // then load the "profile.png" binary fixture
    // https://on.cyoress.io/fixture
    // and convert the binary object into a blob
    // Tip: use https://on.cypress.io/blob
    // and then we can set that blob into the form data instance
    //
    // make a POST request using https://on.cypress.io/request
    // to the endpoint "/upload-profile-picture" with the form data as the body
    //
    // if you inspect the "cy.request" in the CommandLog
    // and DevTools console, it uses ArrayBuffer to send the request
    // and receive the response.
    // From the response, grab the HTML body string
    // https://on.cypress.io/its
    // and convert it from ArrayBuffer to Buffer
    // before getting it as "utf8" text
    // https://on.cypress.io/invoke
    //
    // Tip: you can use "Buffer" utility bundled with Cypress
    // to immediately convert ArrayBuffer to Buffer
    // https://on.cypress.io/buffer
    //
    // then get the application's document object
    // https://on.cypress.io/document
    // because it is empty, we can write the HTML we got
    // into the document using document.write method
    //
    // check the text displayed on the page
    // "Updated profile picture for test"
    //
    // and the width and height of the displayed image
    // should be 200x231 pixels
  },
)
