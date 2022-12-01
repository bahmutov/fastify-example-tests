/// <reference types="cypress" />

it('downloads the tiger image file and checks the downloaded file', () => {
  // visit the "tiger-download.html" page
  // https://on.cypress.io/visit
  //
  // spy on the "tiger.png" network call, assign its "tiger" alias
  // https://on.cypress.io/intercept
  //
  // click on the anchor link with the download attribute
  // https://on.cypress.io/get
  // https://on.cypress.io/click
  //
  // confirm the "tiger" network call happens
  //
  // get the attribute "download" from the anchor link
  // it will be the filename given to the downloaded image
  // "have.attr" assertion with a single argument
  // yields the value of the attribute
  //
  // yields the name of the downloaded file
  // confirm the file exists in the downloads folder
  // by using cy.readFile + null encoding
  // (since we are not interested in the file itself)
  // https://on.cypress.io/readfile
  // https://on.cypress.io/configuration
})

it('bonus: get the downloaded filename from an event', () => {
  // visit the "tiger-download.html" page
  // https://on.cypress.io/visit
  //
  // create a new cy.stub and give it an alias "download"
  // https://on.cypress.io/download
  //
  // look at the https://on.cypress.io/catalog-of-events
  // and find the event that might give you downloaded filename
  // from the event, get the filename and call the stub
  // function, passing the filename
  //
  // click on the anchor element with the download attribute
  //
  // the stub "download" should be called once
  // get its first argument
  // https://on.cypress.io/its
  // and log the filename to the Cypress Command Log
  // Confirm the downloaded file exists
  // using cy.readFile and null encoding
  // https://on.cypress.io/readfile
})
