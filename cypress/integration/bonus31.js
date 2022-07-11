/// <reference types="cypress" />

// the page /lucky7.html fetches a random digit every second
// until it gets {n: 7} response from the server and then stops
// This test spies on the network call and waits to see {n: 7} response
it('retries until the network intercepts sees the right data', () => {
  // a local variable will be set to the current
  // response from the server for the spy "GET /random-digit"
  let data
  cy.intercept('GET', '/random-digit', (req) =>
    req.continue((res) => {
      data = res.body
    }),
  ).as('random')
  //
  // visit the "lucky7.html" page
  cy.visit('/lucky7.html')
  //
  // retry looking at the data until we see "n: 7" value inside
  //
  // 🚨 waiting for a network request DOES NOT WORK
  // because a "should(callback)" does not retry
  // cy.wait('@random').should(() => {
  // ✅ THE CORRECT SOLUTION wrapping a null and adding
  // a "should(callback)" does retry until
  // it times out or the assertions inside the "should(callback)"
  // all pass
  //
  // confirm the "data" variable is an object
  // confirm its has the property "n: 7"
  //
  // once we have confirmed the network call with "n: 7",
  // the page is showing 7 immediately
  // which we can verify using cy.contains with {timeout: 30} option
  // Tip: we are using 30ms to let the page update itself
})
