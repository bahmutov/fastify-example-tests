/// <reference types="cypress" />
// @ts-check

it('takes a while to execute 4 slow cy.requests', () => {
  // the backend API endpoint /slow/:id takes 10 seconds to respond
  // thus this test takes 40 seconds.
  cy.request('POST', '/slow/1')
    .its('body')
    .should('deep.equal', { ok: true, id: '1' })
  cy.request('POST', '/slow/2')
    .its('body')
    .should('deep.equal', { ok: true, id: '2' })
  cy.request('POST', '/slow/3')
    .its('body')
    .should('deep.equal', { ok: true, id: '3' })
  cy.request('POST', '/slow/4')
    .its('body')
    .should('deep.equal', { ok: true, id: '4' })
  cy.log('**all done**')
})

it('makes 4 API calls in parallel using the window.fetch', () => {
  // get the application "window" object
  // https://on.cypress.io/window
  // and grab its property "fetch"
  // https://on.cypress.io/its
  // pass the "fetch" function into the cy.then callback
  // and make a 4 parallel calls to "POST /slow/:id" endpoint
  // "fetch('/slow/...', {method: 'post'})"
  // convert the response to JSON
  // Q: how do you make cy.then wait for the all promises to resolve?
  // Q: how do you set the time limit on the cy.then callback?
  // https://on.cypress.io/then
  //
  // by using "fetch" we will send all application cookies
  // just like a regular call would do
  //
  // pass the response objects into a callback
  // tp confirm each object is {ok: true, id: ...}
  // https://on.cypress.io/spread
  cy.log('**all done**')
})
