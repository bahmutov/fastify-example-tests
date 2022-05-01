/// <reference types="cypress" />

// the route handler for cy.request has two methods
// req.reply and req.continue
// https://on.cypress.io/request
// The request.reply method stops the outgoing application request
// and returns the mock request
// The request.continue method continues the outgoing application
// request letting it go to the server. You can optionally
// modify the server's response before returning it to
// the application
describe('difference between req.reply and req.continue', () => {
  it('stubs the network call with the same object', () => {
    // mock the GET /fruit request and always return the same response
    // { fruit: 'crab apple' }
    // visit the home page using https://on.cypress.io/visit
    // wait for the fruit intercept to finish
    // check if the expected mock response is shown
    // https://on.cypress.io/contains
    //
    // every page reload will show the same fruit
    // https://on.cypress.io/reload
    //
    // we could vary how many times the intercept is used
    // via the "times" option, but not much more
  })

  it('stubs the odd and even network calls differently', () => {
    // a local variable keeping the count of intercepted requests
    let count = 0
    // intercept the GET /fruit request
    // and return the {fruit: "kiwi"} for odd responses
    // and return the {fruit: "melon"} for even responses
    // you can implement the response logic in the route handler
    // https://on.cypress.io/intercept
    // save the intercept under an alias "fruit"
    //
    // visit the home page using https://on.cypress.io/visit
    // the first request should return the "kiwi" response
    // https://on.cypress.io/contains
    //
    // the second request should return the "melon" response
    // https://on.cypress.io/reload
    //
    // third request sees the "kiwi" again
  })

  it('changes the real server response to upper case', () => {
    // this local variable will hold the intercepted response
    // set by the route handler callback code
    let fruitSent
    // intercept the GET /fruit request
    // let it go to the server using the req.continue() method
    // with a callback to get the server response
    // https://on.cypress.io/intercept
    //
    // note: the server response has a few properties
    // like the HTTP status code, plus the parsed "body" object
    // you can assert properties of the response
    //
    // and then modify the response body using any logic
    // in our case, let's modify the "fruit" value
    // inside the response body object
    // and save the result in the local variable "fruitSent"
    //
    // save the network intercept as an alias "fruit"
    //
    // visit the home page using https://on.cypress.io/visit
    //
    // wait for the network intercept "fruit" to finish
    //
    // use the cy.then callback to verify the local variable "fruitSent"
    //
    // once the server has sent the response,
    // the local variable "fruitSent" will have a value
    // which should be an uppercase string
    // confirm the sent uppercase fruit is displayed
  })
})
