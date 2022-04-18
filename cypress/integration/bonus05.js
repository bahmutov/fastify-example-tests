/// <reference types="cypress" />

it('changes the loaded CSS resource', () => {
  // intercept the the "style.css" resource
  // using https://on.cypress.io/intercept
  // let the request continue to the server
  // and get the response back.
  //
  // Note: the CSS resources are cached by the browser
  // thus before the request is made, remove the
  // request headers "If-None-Match" and "If-Modified-Since"
  // Tip: you can dump the request headers to the console
  // to see them to make sure you are deleting the right ones
  //
  // Parse the response text using any method you like
  // and add to the "#fruit" CSS style a red border line.
  // Give the network intercept an alias.
  //
  // visit the page
  // Confirm the intercept worked
  // and its response status code was 200
  // and not 304 (Not Modified)
  //
  // Confirm the added CSS style was applied
  // to the page element
  // the element should have CSS border
  // because the width might be a float
  // just confirm it is a solid red line
})
