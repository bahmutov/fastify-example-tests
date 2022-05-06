/// <reference types="cypress" />

it('fetches all fruits using cy.request and checks the first one', () => {
  // use https://on.cypress.io/request to get /all-fruits
  // from the response get the "body" property
  // using https://on.cypress.io/its command
  // check if the yielded object is an array
  // https://on.cypress.io/should
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  // and it should not be empty
  //
  // get the first element's "fruit" property
  // using https://on.cypress.io/its command
  // tip: you can use deep path to get to the property
  // the first fruit is always "Apples"
})

it('checks that each fruit follows the schema', () => {
  // use https://on.cypress.io/request to get /all-fruits
  // grab the "body" property using https://on.cypress.io/its command
  // iterate over each item in the yielded array
  // to check if it follows the schema:
  // 1. the item should have keys "k" and "fruit" only
  // 2. the "k" value should be a number
  // 3. the "fruit" value should be a string
  // tip: https://on.cypress.io/each
})

it('saves the response under an alias', () => {
  // use https://on.cypress.io/request to get /all-fruits
  // confirm the yielded response is an object
  // with at least the following keys
  // "status", "body", "duration", and "headers"
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  //
  // from the response object get the "body" property
  // https://on.cypress.io/its
  // as the yielded value under an alias "fruits"
  // https://on.cypress.io/as
  //
  // because the cy.request command has already finished
  // we DO NOT need to wait for it. Instead we
  // simply use cy.get('@fruits') to get the aliased value
  // get the aliased value "@fruits" and confirm it is an array
  // get the aliased value "@fruits" and confirm it has more than 3 items
})
