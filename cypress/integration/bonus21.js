/// <reference types="cypress" />

it('sends beacon data to the server', () => {
  // the page uses navigator.sendBeacon() to send data to the server
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
  // let's spy on the POST /got-fruit endpoint
  // using https://on.cypress.io/intercept
  // and give it an alias "beacon"
  //
  // visit the page "/"
  // https://on.cypress.io/visit
  //
  // wait for the alias "beacon"
  // get its request body and confirm it is a string
  // (since navigator.sendBeacon() sends a string most of the time)
  //
  // parse the string into an object
  // and confirm it has the property "fruit"
  // get the fruit value and confirm the page has
  // that fruit in an element with id "fruit"
  // https://on.cypress.io/contains
})
