/// <reference types="cypress" />
// @ts-check

// https://github.com/anonrig/fast-querystring#readme

describe('CSRF protection', () => {
  it('sends the CSRF token with the submitted form', () => {
    cy.visit('/csrf-form.html')
    // confirm the form has a hidden input field with CSRF token
    // the value should be a long-ish string
    // https://on.cypress.io/get
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html
    //
    // type a username into the input field
    // https://on.cypress.io/type
    //
    // spy on the submit form network call and give it an alias "submit"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    //
    // submit the form by clicking on the Register button
    // https://on.cypress.io/click
    //
    // confirm the new page is at url "/submit-csrf-form"
    //
    // confirm the page shows the submitted username
    // https://on.cypress.io/contains
    //
    // get the network "submit" intercept
    // and confirm its request body has the URL-encoded
    // username and CSRF token
    // https://on.cypress.io/wait
    // https://on.cypress.io/its
    // https://on.cypress.io/should
    //
    // Tip: you can use the "fast-querystring" module
    // to parse URL-encoded text
  })

  it('rejects the form with missing CSRF token', () => {
    cy.visit('/csrf-form.html')
    // confirm the form has a hidden input field with CSRF token
    // and remove it from the page
    // Tip: invoke the jQuery method "remove"
    // https://on.cypress.io/invoke
    //
    // type a username into the input field
    // https://on.cypress.io/type
    //
    // spy on the submit form network call and give it an alias "submit"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    //
    // submit the form by clicking on the Register button
    // https://on.cypress.io/click
    //
    // confirm the new page is at url "/submit-csrf-form"
    //
    // confirm the network call aliased "submit"
    // received error response code 403 from the server
  })

  it('rejects the form with incorrect CSRF token', () => {
    cy.visit('/csrf-form.html')
    // confirm the form has a hidden input field with CSRF token
    // and change its value to something else
    // Tip: invoke the jQuery method "val"
    // https://on.cypress.io/invoke
    //
    // type a username into the input field
    // https://on.cypress.io/type
    //
    // spy on the submit form network call and give it an alias "submit"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    //
    // submit the form by clicking on the Register button
    // https://on.cypress.io/click
    //
    // confirm the new page is at url "/submit-csrf-form"
    //
    // confirm the network call aliased "submit"
    // received error response code 403 from the server
  })
})
