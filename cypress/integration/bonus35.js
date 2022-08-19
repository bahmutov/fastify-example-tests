/// <reference types="cypress" />

it('stubs all network API calls except allowed ones', () => {
  // intercept all network calls that request content application/json
  // Hint: use the header "content-type"
  // inspect the request object and allow the "POST /calculate"
  // calls to continue to the server. Give these requests alias "calculate".
  // Reject all other API calls by replying with the status code 500
  // Give rejected API calls alias "blocked"
  // https://on.cypress.io/intercept
  //
  // visit the /calculator.html page
  // type 3 into the element with id "num1"
  // type 6 into the element with id "num2"
  // click the button with id "add"
  // check that the answer 9 is shown
  //
  // there must be at least one blocked API call
  // confirm by waiting on the "@blocked" alias
  // https://on.cypress.io/wait
  //
  // and a single calculate API call
  // confirm by waiting on the "@calculate" alias
})
