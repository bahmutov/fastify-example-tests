/// <reference types="cypress" />

// the application has a redirect that jumps several times
// before it lands at the final page
it('follows the redirects when visiting', () => {
  cy.visit('/short-url')
  cy.contains('h1', 'Redirected')
})

it('looks up the redirection target', () => {
  // use cy.request command to look up "/short-url"
  // https://on.cypress.io/request
  // from the yielded object grab the "allRequestResponses" list
  // and confirm it is an array and is not empty
  //
  // Tip: use console.log to print the current subject
  // at each step of the command chain
  //
  // you can use "redirects" list
  // but you must parse the "code: URL"
  //
  // Then grab the last object in the list - this is the final URL
  // (but you will need to extract the right property)
  //
  // use cy.visit to visit the final resolved URL
  // and confirm it shows "H1 Redirected"
})
