/// <reference types="cypress" />
// @ts-check

// https://github.com/anonrig/fast-querystring#readme

it('sends the URL encoded form', () => {
  // visit the form page
  cy.visit('/form-urlencoded.html')
  // type a city name with a space in it
  cy.get('input[name=city]').type('Los Angeles')
  cy.get('input[name=guess]').type('6')
  // Todo: set up a spy on all POST requests
  // with the content type application/x-www-form-urlencoded
  // https://on.cypress.io/intercept
  // give the intercept alias "form"
  // https://on.cypress.io/as
  //
  // submit the form and confirm the new page loads correctly
  cy.contains('button', 'Submit').click()
  cy.location('pathname').should(
    'equal',
    '/submit-urlencoded',
  )
  // Todo: the page should display the sent values
  // Todo: grab the form network call
  // and confirm it sent a string body
  // Todo: the response should be something like "Los+Angeles&guess=6"
  // can you parse it into an object with "city" and "guess" fields
  // and confirm the sent object is correct?
  // Tip: use NPM module fast-querystring
})
