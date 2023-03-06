/// <reference types="cypress" />

// all fruits the server knows about
const fruits = [
  'Apples',
  'Oranges',
  'Bananas',
  'Pears',
  'Grapes',
]

it('fetches price for 🍌', () => {
  // fetch a price for fruit "Bananas"
  // by making a GET call to "/fruits/price/:name of the fruit" endpoint
  // https://on.cypress.io/request
  //
  // the server should respond with an object with the fruit name
  // and the price field. Confirm the price of Bananas is 1.29
})

it('returns 404 for unknown fruits', () => {
  // make a call to fetch a price for an unknown fruit, like "Kiwi"
  // the server should respond with 404 status code
  // https://on.cypress.io/request
})

it('fetches a price for each fruit', () => {
  // make a call to fetch a price for each fruit
  // from the array of fruits. store the fetched prices
  // in this array "prices"
  const prices = []
  // the final "prices" array should have the same length
  // as the "fruits" array
})
