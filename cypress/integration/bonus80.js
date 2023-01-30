/// <reference types="cypress" />
// @ts-check

describe('CSRF protection', () => {
  it('cannot log in using the request due to missing CSRF token', () => {
    // submit the form to "POST /submit-csrf-form"
    // with the { username: 'Joe' }
    // https://on.cypress.io/request
    // confirm the server rejects the API call with status code 403
  })

  it('cannot log in using the request due to invalid CSRF token', () => {
    // submit the form to "POST /submit-csrf-form"
    // with the { username: 'Joe', csrf: 'your value' }
    // (made up CSRF value)
    // https://on.cypress.io/request
    // confirm the server rejects the API call with status code 403
  })

  it('can log in by extracting the CSRF token from the page', () => {
    // make a request to get the "csrf-form.html" page
    // https://on.cypress.io/request
    //
    // get its body field - it is HTML text
    // and pass into cy.then callback
    // https://on.cypress.io/its
    // https://on.cypress.io/then
    //
    // find the csrf input element in the HTML
    // returned by the server
    // Tip: use Cypress.$ to parse the HTML text
    // and get the value attribute of the csrf field
    //
    // yield the CSRF string to the next command/assertion
    //
    // make a new request to POST /submit-csrf-form
    // and include the CSRF token in the request
    //
    // the server should accept the CSRF token
    // and return the registration page HTML
    //
    // write the HTML into the document
    // https://on.cypress.io/document
    // https://on.cypress.io/invoke
    //
    // confirm the registration page shows the correct username
  })
})
