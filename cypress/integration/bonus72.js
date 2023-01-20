/// <reference types="cypress" />
// @ts-check

// this test shows the "find-item-price" page in action
it('finds the item price', () => {
  // we add a new item to the database
  // by using an API request
  cy.request('POST', '/add-item', {
    'item-name': 'apple',
    price: 10,
    delay: 0,
  })
  // if we search for the item, the price
  // is displayed
  cy.visit('/find-item-price.html')
  cy.get('#item-text').type('apple{enter}')
  cy.contains('.price', '$10')
})

it('shows an error if there is price mismatch', () => {
  cy.visit('/find-item-price.html')
  // the page makes two different request to double check the price
  // GET /find-item/:name
  // GET /find-item/:name/price
  // The first returns an object like
  // {found: {name: "...", price: 10}}
  // the second one returns just
  // {price: 10}
  // can you intercept each API call using Regexp and return objects
  // with DIFFERENT prices to see how the page handles it?
  // give each intercept its own alias
  //
  // type an item into the input field with id "item-text"
  //
  // Please confirm that each network call was made
  // by waiting for it
  //
  // confirm the error message is shown on the page
})
