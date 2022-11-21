/// <reference types="cypress" />

it('shows the returned JSONP response', () => {
  // intercept the GET requests to "/api-jsonp" endpoint
  // that looks like /api-jsonp?callback=...
  // https://on.cypress.io/intercept
  //
  // let the request continue going to the server
  // and print the response body to show it is a string
  // show the response from the server
  // which is something like "callbackName(list)"
  // give the call an alias "jsonp"
  //
  // visit the "/jsonp.html" page
  // and confirm the call "jsonp" has happened
  //
  // confirm there are two items shown in the list of names
})

it('stubs a JSONP call', () => {
  const testData = [
    {
      name: 'Cy',
    },
  ]
  // intercept the ajax calls to the "/api-json" endpoint
  //
  // see the entire object of parameters
  // console.log(req.query)
  // look at the request object
  // grab the callback name from the request query object
  // if there is no callback name, throw an error
  //
  // reply with a JavaScript snippet
  // that calls the function name set by the user
  // and includes the JSON object testData
  // Tip: make sure to set the appropriate "content-type" header
  //
  // give the call an alias "jsonp"
  //
  // and confirm the call "jsonp" has happened
  // confirm the only item in the list has the text "Cy"
})
