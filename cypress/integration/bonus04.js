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

// Bonus test: show that waiting for a resource that gets 404 doesn't
// not fail the "cy.wait(alias)" command
it('does not fail waiting for a resource that returns an error', () => {
  // intercept the GET /old-bundle.js call and give it an alias "oldBundle"
  // visit the "/bundles.html" page
  //
  // wait for the network call using the alias "oldBundle"
  // The test should pass, even if the "old-bundle.js"
  // call fails with http status 404
  // in order to fail the test, we need to check the response status code
  // to confirm it is 200-300 status code
})

// Alternative solution: check the response code of the network call
it('fails a test if any JS resource fails to load', () => {
  // intercept all GET requests to "*.js" resources
  // provide a route handler callback function
  // that continues going to the server and gets the response object
  // if the response status code is 400 or higher
  // the callback should throw an error, failing the test
  // https://on.cypress.io/intercept
  //
  // visit the "/bundles.html" page
  //
  // Note: the test can finish before the network calls complete
  // Read the blog post "When Can The Test Stop?"
  // https://www.cypress.io/blog/2020/01/16/when-can-the-test-stop/
})
