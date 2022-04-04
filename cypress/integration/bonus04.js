/// <reference types="cypress" />

// a little utility function to extract
// the resource path from the full URL
function getPath(url) {
  const parsed = new URL(url)
  return parsed.pathname
}

it('waits for all JavaScript bundles to load', () => {
  // count each JS resource loaded by the page
  // and keep the counts in an object by pathname
  // when a resource is requested by the page,
  // increment the count for that pathname
  // when the server sends it back, decrement the count
  // https://on.cypress.io/intercept
  const jsResources = {}

  // visit the "/bundles.html" page
  // make sure the list of resources includes "click.js"
  // https://on.cypress.io/wrap
  // assertion "should have property"

  // wait for all JS bundles to load
  // again wrap the counts object
  // and find all the keys with a value > 0
  // That list should be empty
  // by using the .should(callback) syntax
  //
  // now we can click on the button, since
  // all JS should be loaded and the event handlers set
  // observe the GET /fruit call
  // using https://on.cypress.io/intercept
  // and give it an alias "fruit"
  //
  // get the "load fruit" button and click on it
  //
  // wait for the network call using the alias "fruit"
  //
  // from the intercept, get the response body
  // and the "fruit" property of the returned object
  // then confirm the page contains the element
  // with ID "fruit" and the text sent by the server
})
