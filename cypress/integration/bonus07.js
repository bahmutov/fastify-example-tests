/// <reference types="cypress" />

// The browser measures how fast each resource is loaded.
// You can get these measurements from the "window.performance" object.
it('checks the image load timing', () => {
  // visit the page "/tiger.html"
  // there is a tiger image on the page
  // which you can check using the cy.get command
  //
  // first, get the origin of the page
  // using https://on.cypress.io/location "origin"
  //
  // then grab the application's window object
  // using https://on.cypress.io/window command
  // from the window object, get the "performance" object
  // https://on.cypress.io/its
  // and invoke its method "getEntriesByName"
  // https://on.cypress.io/invoke
  // with the argument origin + "/tiger.png"
  //
  // The performance.getEntriesByName method yields an array
  // with a single performance object
  // get that object and check its property "duration"
  // It should be faster than 30ms
})

it('slows down the image load', () => {
  // intercept the "GET /tiger.png" request
  // and slow it down by 2 seconds
  // (see the spec10 lesson)
  // https://on.cypress.io/intercept
  //
  // visit the page "/tiger.html"
  // https://on.cypress.io/visit
  //
  // get the location and form the resource URL
  // origin + "/tiger.png" and get the performance measurement
  // Confirm the image is loaded after 2 seconds
})
