/// <reference types="cypress" />

it('sends the right time', () => {
  // spy on the HTML page resource and give it an alias "page"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the "time-check" page
  cy.visit('/time-check')
  // wait for the "page" network call
  // https://on.cypress.io/wait
  //
  // get the "x-time-check" response header
  // https://on.cypress.io/its
  // confirm it is a string
  // Tip: it will display it in the Command Log
  //
  // convert the string into a Date object
  // https://on.cypress.io/then
  //
  // pass the precise date into a cy.then callback
  //
  // confirm the rounded date is shown on the page
  // https://on.cypress.io/contains
  // Tip: use a regular expression to validate the date format
  //
  // extract the text and convert it to UTC string
  // because it is rounded, append the seconds part
  // "YYYY-MM-DDTHH:mm:00.000Z"
  //
  // convert the string into a Date object
  // and confirm its type to show it the Command Log
  // Tip: "be.a" assertion can check various types
  // including if the subject is a date instance
  //
  // convert the Date instance to the milliseconds number
  // https://on.cypress.io/invoke
  //
  // compare both dates as milliseconds
  // Tip: use "closeTo" assertion and have both the subject
  // and the date to compare to as numbers
})
