/// <reference types="cypress" />

// a better way to handle sensitive information
// is describe in my blog post "Keep passwords secret in E2E tests"
// https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
const username = 'test_cy'
const password = 'secure12$1'

it('receives 401 error', () => {
  // request the "/protected" page
  // and confirm the server responds with 401
  // https://on.cypress.io/request
  //
  // request the same page with basic authentication
  // and the server should respond with 200
})

it('visits the protected page', () => {
  // visit the page with basic authentication
  // https://on.cypress.io/visit
  //
  // confirm the text "Secret stuff" is visible
  // https://on.cypress.io/contains
})
