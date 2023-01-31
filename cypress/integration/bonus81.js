/// <reference types="cypress" />
// @ts-check

describe('CSRF protection via cookie', () => {
  it('sends the CSRF cookie with the submitted form', () => {
    cy.visit('/csrf-form-cookie.html')
    // confirm the page has a cookie named "_csrf"
    // https://on.cypress.io/getcookie
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
    // confirm the new page is at url "/submit-csrf-form-cookie"
    //
    // confirm the page shows the submitted username
    // https://on.cypress.io/contains
    //
    // get the network "submit" intercept
    // and confirm its request has the CSRF cookie sent
    // https://on.cypress.io/wait
  })

  it('rejects API requests without CSRF cookie', () => {
    // make a POST request to "/submit-csrf-form-cookie"
    // sending an object with username "Joe"
    // https://on.cypress.io/request
    //
    // confirm the server rejects the API call with status code 403
  })

  it('sends the cookie using cy.request', () => {
    // request the "csrf-form-cookie.html" page
    // using cy.request and NOT cy.visit
    // https://on.cypress.io/request
    //
    // using cy.request should send the cookies automatically
    // confirm the cookie "_csrf" is set
    // https://on.cypress.io/getcookie
    //
    // now let's make another request and it should have CSRF cookie set
    // https://on.cypress.io/request
    //
    // confirm the server accepts our API call
  })
})
