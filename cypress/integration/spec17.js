/// <reference types="cypress" />

// do not truncate longer objects in the assertions
chai.config.truncateThreshold = 200

it('requests the fruits N times', () => {
  // we know that the endpoint will return the same list of 5 fruits
  // let's request the fruits N times
  // and confirm the list of fruits is the same as expected
  // ['Apples', 'Bananas', 'Grapes', 'Oranges', 'Pears']
  // hint: use Cypress._.times
})
