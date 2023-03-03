/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-each
// import cypress-each

describe('Each fruit', () => {
  // a utility function to find the give fruit on the page
  // and if it is not there, reload the page and try again
  function findFruit(fruit) {
    // write a function that tries to find
    // the "LI" element with the fruit text
    // inside the "#fruits" element
    // https://on.cypress.io/get
    // https://on.cypress.io/contains
    // https://on.cypress.io/should
    // if the element exists, we found it, nothing else to do
    // otherwise wait half a second and reload the page
    // https://on.cypress.io/wait
    // https://on.cypress.io/reload
    // and call the function recursively
    const findIt = () => {}
    findIt()
  }

  beforeEach(() => {
    cy.visit('/fruits.html')
  })

  it('shows Pears', () => {
    // there must be the fruit "Pears" on the page
    // if you reload the page often enough
    findFruit('Pears')
  })

  // Grab the list of fruits from Cypress.env object
  // with fallback to an empty array
  // Note: you must fetch the fruits and place them into the "env" object
  // in the Cypress plugins file
  // const fruits = ???

  // iterate over the list of fruits and create a
  // separate test for each fruit, calling findFruit
  // Tip: include the name of the fruit in the test title
  // and its index and the total number of fruits

  // Improvement: create the tests dynamically from the list of fruits
  // by using "it.each" helper provided by https://github.com/bahmutov/cypress-each
  context('Using cypress-each', () => {
    // use it.each
  })
})
