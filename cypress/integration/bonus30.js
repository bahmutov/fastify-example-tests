/// <reference types="cypress" />

it('checks that the network call does not happen', () => {
  // visit the page /calculator.html
  // https://on.cypress.io/visit
  //
  // type a number into the first input
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  //
  // fill the second number to see
  // the network call happen and the test fail
  // cy.get('#num2').type('3')
  //
  // intercept the network call POST /calculate
  // and pass a route handler that throws an error
  // https://on.cypress.io/intercept
  // https://on.cypress.io/stub
  // Give the route handler stub an alias "calculate"
  // https://on.cypress.io/as
  //
  // get the "+" button and click it
  // https://on.cypress.io/get
  // https://on.cypress.io/click
  //
  // observe the application to see when
  // the network call for sure should have been made
  // In our case, if the application is showing the error
  // then we know it would have sent the request
  //
  // confirm the network route handler "@calculate"
  // was never called
  // https://glebbahmutov.com/cypress-examples/commands/spies-stubs-clocks.html
})
