/// <reference types="cypress" />
import { recurse } from 'cypress-recurse'

it('requests all fruits', () => {
  // request the fruit from the /fruit endpoint
  // using the https://on.cypress.io/request command
  // from the response get the body object, then the fruit
  // using the https://on.cypress.io/its command
  // store each fruit in a Set object
  // and keep requesting until we see a fruit already in the set
  // print the collected list of fruits
  const fruits = new Set()

  function addFruit() {
    cy.request('GET', '/fruit')
      .its('body.fruit')
      .then((fruit) => {
        cy.log(fruit)

        if (fruits.has(fruit)) {
          const list = [...fruits].sort()
          expect(list).to.have.length(5)
          return cy.log(list.join(', '))
        }
        fruits.add(fruit)
        cy.wait(100)
        cy.reload()
        return addFruit()
      })
  }

  addFruit()
})

it('adds all fruit using cypress recurse', () => {
  const fruits = new Set()

  recurse(
    () => cy.request('GET', '/fruit').its('body.fruit'),
    (fruit) => fruits.has(fruit),
    {
      log: false,
      limit: 15,
      timeout: 1000,
      delay: 100,
      post({ value }) {
        fruits.add(value)
        return cy.reload()
      }
    }
  ).then(() => {
    const list = [...fruits].sort()
    expect(list).to.have.length(5)
    cy.log(list.join(', '))
  })
})

it('uses reduce with cypress-recurse', () => {
  recurse(
    () => cy.request('GET', '/fruit').its('body.fruit'),
    (fruit, fruits) => fruits.has(fruit),
    {
      log: false,
      limit: 15,
      timeout: 10000,
      delay: 100,
      reduceFrom: new Set(),
      reduce: (fruits, fruit) => fruits.add(fruit),
      post: ({ value }) => {
        cy.log(`value per iteration: ${value}`)
        return cy.reload()
      },
      yield: 'both'
    }
  ).then(({ value: lastValue, reduced: fruits }) => {
    const list = [...fruits].sort()
    expect(list).to.have.length(5)
    cy.log('Found all fruits')
    cy.log(list.join(', '))
    cy.log(`Last fruit: ${lastValue}`)
  })
})
