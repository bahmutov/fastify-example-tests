/// <reference types="cypress" />

import { recurse } from 'cypress-recurse'

// visit the page
// if it shows the fruit "Bananas", stop
// else
//   wait for 1 second for clarity
//   reload the page
//   check again
// Tip: use checkFruit

it('reloads the page until it shows Bananas', () => {
  function checkFruit() {
    return cy
      .get('#fruit')
      .should('not.contain', 'loading...')
      .invoke('text')
      .then((fruit) => {
        if (fruit === 'Bananas') {
          return cy.log('success!')
        }
        cy.wait(100)
        cy.reload()
        return checkFruit()
      })
  }

  cy.visit('/')
  checkFruit()
})

it('uses cypress-recurse', () => {
  cy.visit('/')

  recurse(
    () => cy.get('#fruit').should('not.contain', 'loading...').invoke('text'),

    (fruit) => fruit === 'Bananas',
    {
      timeout: 1000,
      delay: 100,
      post() {
        return cy.reload()
      }
    }
  )
})
