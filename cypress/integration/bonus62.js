/// <reference types="cypress" />

chai.config.truncateThreshold = 200

// several demo tests to explain how asserting an item
// in an array works in JavaScript
// find similar examples at
// https://glebbahmutov.com/cypress-examples/commands/assertions.html

it('confirms an array includes a primitive value', () => {
  expect([1, 2, 3], 'numbers').to.include(2)
  expect(['one', 'two', 'three'], 'strings').to.include(
    'two',
  )
})

it('confirms an array includes an object', () => {
  // store object references in the list
  const p1 = { name: 'p1', id: 1 }
  const p2 = { name: 'p2', id: 2 }
  const p3 = { name: 'p3', id: 3 }
  // if we have a reference to the object we want to find
  // it is the same as finding a primitive value
  expect([p1, p2, p3], 'object references').to.include(p2)
  // check array by value if you know the ENTIRE object
  // for finding objects by value need to use "deep.include" assertion
  expect([p1, p2, p3], 'object value')
    .to.deep.include({
      name: 'p3',
      id: 3,
    })
    // and it does not work with partial objects
    .and.not.deep.include({
      name: 'p3',
    })
  // if you know a part of the object, use Lodash _.find helper method
  // that can search by a property or several properties
  // Tip: Lodash is bundled with Cypress under Cypress._
  expect(
    Cypress._.find([p1, p2, p3], { name: 'p3' }),
    'found p3',
  )
    // check the found object
    .to.be.an('object')
    .and.have.property('id', 3)
})

it('includes the fruit Apples in the response array of objects', () => {
  // spy on the "GET /all-fruits" call and give it an alias "all-fruits"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the page "/all-fruits.html"
  // https://on.cypress.io/visit
  //
  // wait for the "all-fruits" network call
  // https://on.cypress.io/wait
  // and yield its response body
  // https://on.cypress.io/its
  //
  // find in that list an object with "fruit: Apples" property
  // and yield it to the next assertions
  // Tip: use Lodash _.find method
  // https://lodash.com/docs
  //
  // confirm the found item is an object
  // and confirm the item has property "k: 0"
  //
  // confirm the "Apples" is shown at the first position
  // in the list on the page
  // https://on.cypress.io/contains
})
