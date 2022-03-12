/// <reference types="cypress" />

it('handles test flake using the test retries', () => {
  // set up an intercept that returns
  // an error server response
  // in 30% of the calls
  // https://on.cypress.io/intercept
  //
  // visit the site and confirm one of the valid fruits
  // is shown using cy.contains(selector, regular expression)
  // https://on.cypress.io/contains
  //
  // Alternative: use cy.get(selector) with "should(cb)"
  // where you can get the text of the element and assert
  // it is one of the valid strings
  // https://on.cypress.io/get
  // https://on.cypress.io/should
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  //
  // the test is flaky, but we can solve the failures
  // by using test retries https://on.cypress.io/test-retries
  //
  // Tip: if the majority of tests are flaky both locally and on CI
  // use retries: <number>. If the tests are only flaky on CI
  // use retries: { runMode: <number> }
  // If only some tests are flaky, enable the test retries
  // in each test / suite of tests
})
