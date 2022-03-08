/// <reference types="cypress" />

// install the NPM module openapi-response-validator as a dev dependency
// import it in this spec file
// const OpenAPIResponseValidator =
// require('openapi-response-validator').default
// import the fruit schema from the fixture file "fruit-schema.json"

// https://github.com/kogosoftwarellc/open-api/blob/master/packages/openapi-response-validator
// create an instance of the OpenAPIResponseValidator class
// passing the fruit schema as the argument

beforeEach(() => {
  // before each test, set the network intercept for GET /fruit route
  // with the "middleware: true" option, see https://on.cypress.io/intercept
  // grab the server's response and validate it using the response validator
  // if there are any errors, throw an error with the details
})

it('validates the server response using OpenAPI spec', () => {
  // visit the site, reload several times, and confirm the response is valid
})
