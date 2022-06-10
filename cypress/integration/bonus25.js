/// <reference types="cypress" />

it('mocks the response by inspecting the request body', () => {
  // visit the page /calculator.html
  // https://on.cypress.io/visit
  //
  // intercept the POST requests to the /calculate endpoint
  // https://on.cypress.io/intercept
  // from the reply, grab the body's "operation" property
  // If it is equal to "+" then assign the request alias "add"
  // and reply with the sub of the request body's "a" and "b"
  //
  // give the intercept alias "calculate"
  // https://on.cypress.io/as
  //
  // type "2" into the input #num1
  // type "3" into the input #num2
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  //
  // click the "add" button
  // https://on.cypress.io/click
  //
  // confusingly, the intercept has the "wait" alias
  // but NOT the "calculate" alias, even though
  // the Cypress Command Log shows the "calculate" alias
  // wait for the "@add" intercept
  // https://on.cypress.io/wait
  //
  // because there is only a single intercept and
  // we have waited for it, now we can get it again
  // using the cy.get('@calculate') command
  //
  // confirm the answer shown is correct
  // https://on.cypress.io/contains
})
