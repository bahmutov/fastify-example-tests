/// <reference types="cypress" />

// tip: see the entire assertion object without
// collapsing it into Object(...)
chai.config.truncateThreshold = 200

// what if we do not know the number of network calls?
// we then cannot use the cy.wait command as it
// cannot _skip_ network calls
// Instead we can define a new spy intercept just
// to "catch" the last call
it('waits for the last network call', () => {
  // We want to visit the page "/calculator.html"
  // it might fire "POST /track" events
  // one, twice, or three times on load
  // before the visit, let's spy on POST /track
  // and the first call should always be the "load" event
  // https://on.cypress.io/intercept
  // In the intercept, inspect the response,
  // it should always have status code 200
  // and the body { ok: true }
  // Give the intercept the alias "track"
  //
  // now visit the /calculator.html page
  // confirm the h1 element has the text "Calculator"
  // https://on.cypress.io/contains
  //
  // wait for the "track" alias and confirm the request
  // https://on.cypress.io/wait
  // https://on.cypress.io/its
  // Tip: you can use "deep.equal" assertion
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  //
  // Enter two numbers into the input fields
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  // Click the plus button
  // https://on.cypress.io/click
  //
  // how do you confirm the /track request was made
  // with event name "+" and your input arguments?
  // you probably will randomly get _other_ track event calls...
  //
  // Tip: you can define _another_ intercept for POST /track
  // right before clicking the plus button
  // and give it a different alias "lastTrack"
  // It is ok for a single request to match multiple intercepts
  // validate the "lastTrack" request and response data
  //
  // wait for the "lastTrack" alias and confirm the request body
  // Note: the response will still be confirmed by the "track" intercept
})
