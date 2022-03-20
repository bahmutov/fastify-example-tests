/// <reference types="cypress" />

import { recurse } from 'cypress-recurse'

it('finds all fruits', () => {
  // visit the page
  // keep getting the fruit from the page
  // and storing it in a Set object
  // and reloading the page
  // until we see the fruit we have already added
  // print the collected list of fruits
  // check its length against the expected value
  const fruits = new Set()

  function checkFruit() {
    return cy
      .get('#fruit')
      .should('not.contain', 'loading...')
      .invoke('text')
      .then((fruit) => {
        if (fruits.has(fruit)) {
          const list = [...fruits].sort()
          expect(list).to.have.length(5)
          return cy.log(list.join(', '))
        }
        fruits.add(fruit)

        cy.wait(100)
        cy.reload()
        return checkFruit()
      })
  }

  cy.visit('/')

  checkFruit()
})

// how would you use recurse here?
it.skip('uses cypress-recurse', () => {
  cy.visit('/')

  const fruits = new Set()

  recurse(
    () => cy.get('#fruit').should('not.contain', 'loading...').invoke('text'),
    (fruit) => fruits.has(fruit),
    {
      timeout: 10000,
      delay: 1000,
      post() {
        fruits.add(fruit)
        return cy.reload()
      }
    }
  )
})
