/// <reference types="cypress" />

describe('make the request and compare to the fixture', () => {
  // make a request to GET /sale
  // https://on.cypress.io/request
  // get its body
  // https://on.cypress.io/its
  // load the fixture from a JSON file "sale.json"
  // https://on.cypress.io/fixture
  // compare the response body to the fixture
  // Tip: always use the "deep.equal" assertion to compare the objects
  it('gives a response matching a fixture object')

  // load the fixture first, then make the request
  // and compare the response body to the fixture object
  it(
    'gives a response matching a fixture object, loads the fixture first',
  )
})

// import the object from the JSON fixture file
// and use it as a local variable in the spec
describe('using JSON import', () => {
  it(
    'gives a response matching a fixture object loaded using import keyword',
  )
})

describe('load fixture before each test', () => {
  // before each test, load the fixture
  // https://on.cypress.io/fixture
  // and save as an alias
  // https://on.cypress.io/as
  beforeEach(() => {})

  // use the "function () { ... }" test callback syntax
  // to be able to access the fixture using "this.<alias name>" syntax
  it('gives a response matching an alias set as a property')
})

describe('Load once into a local variable', () => {
  // define a local variable and set it value once
  // from a "before" hook that loads the fixture
  // https://on.cypress.io/fixture
  before(() => {})

  // in the test use the local variable
  // to check the response
  it('gives a response matching a fixture loaded once')
})

describe('load once, reset the alias', () => {
  // we can use a local variable to keep the value
  // loaded just once from "before" hook
  // https://on.cypress.io/fixture
  before(() => {})
  // before each test, we can take the local variable
  // and define the alias using
  // https://on.cypress.io/wrap
  // https://on.cypress.io/as
  beforeEach(() => {})

  // using the "function () { ... }" syntax
  // we can assess the alias using the "this.<alias name>" syntax
  it(
    'gives a response matching a fixture reset from a local variable',
  )
})

describe('using Cypress.env object to keep the data', () => {
  // load the fixture once using "before" hook
  // and store the data in Cypress.env object
  // https://on.cypress.io/env
  // Cypress.env('name', value)
  before(() => {})

  // in the test use the data from Cypress.env object
  // Cypress.env('name')
  it('uses sale from Cypress.env object')
})

// install the plugin if necessary
// npm i -D cypress-data-session
// https://github.com/bahmutov/cypress-data-session
// import 'cypress-data-session' module
// which registers the cy.dataSession() command
describe('using cypress-data-session plugin', () => {
  // before each test, call the cy.dataSession
  // and use cy.fixture command to load the fixture
  // Note: the fixture is loaded only once
  beforeEach(() => {})
  // use the "function () { ... }" test callback syntax
  // to access the data session data (the fixture)
  // by name using "this.<data session name>"
  it('matches the sale')
})
