/// <reference types="cypress" />

it('measures the total size of the page and its resources', () => {
  // important: disable caching for each resource
  // to truly download the images and other resources
  // Tip: use cy.intercept to intercept all "GET" requests
  // by using the options form
  // and remove the caching headers from the request
  // https://on.cypress.io/intercept
  //
  // visit the "tiger.html" page
  // https://on.cypress.io/visit
  //
  // assume all images and other resources are loaded immediately
  // cy.visit yields the "window" object
  // grab its performance object and invoke the method "getEntries"
  //
  // from each entry, take the transfer size property (bytes)
  // and add them all up
  // confirm the total page size is below 1MB
})
