/// <reference types="cypress" />

it('replaces the first item in the JSONP response', () => {
  // intercept the GET requests to "/api-jsonp" endpoint
  // that looks like /api-jsonp?callback=...
  // https://on.cypress.io/intercept
  //
  // let the request continue going to the server
  // and print the response body to show it is a string
  // show the response from the server
  // which is something like "callbackName(list)"
  //
  // remove the "callbackName(" + ")" from the response
  // to get just the stringified data sent by the server
  //
  // parse the response body to get the data JSON
  // confirm the server sent an array
  // replace the first item in the list with "name: Cy" item
  // construct the updated response and set "res.body"
  //
  // give the call an alias "jsonp"
  //
  // visit the "/jsonp.html" page
  // and confirm the call "jsonp" has happened
  //
  // confirm there are two items shown in the list of names
  //
  // and the first item has the test name
})
