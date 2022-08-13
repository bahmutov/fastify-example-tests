/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

// In the tests we will add new items to our "database"
// and then check if we can find the new items using the "search service"
// Unfortunately, the item is added and scraped into the search index
// only after some delays.
// First, the server might take up to 1 minute
// to add the item to its database.
// Then it might take up to 1 minute MORE
// for the item to be scraped by the search service...
beforeEach(function enterItem() {
  // visit the page where we can enter the new item
  cy.visit('/items.html')
  // the unique name of the item
  const name = `Item ${Cypress._.random(1e6)}`
  // the price we will enter
  const price = Cypress._.random(1e3)
  // save the item name under an alias
  cy.wrap(name).as('name')
  // save the price under an alias
  cy.wrap(price).as('price')

  // use the form to enter the item
  cy.get('#item-name').type(name)
  cy.get('#price').type(String(price))
  // and click the Submit button
  cy.get('[value=Submit]').click()
  // the server should show the success page
  cy.location('pathname').should('equal', '/add-item')
  cy.contains('h3', name)
    // for test clarity, pause for 1 second
    .wait(1000, { log: false })
})

it('adds a new item and then finds it (static wait)', function () {
  // wait for the item to be added to the database (one minute)
  // plus for the search service to scrape it (another minute)
  // https://on.cypress.io/wait
  //
  // let's find the item using the search page "/find-item.html"
  // https://on.cypress.io/visit
  //
  // because we use the "function () { ... }" callback syntax
  // we can access the aliased value using "this.<alias>" syntax
  // Enter the item's name into the <input id="item-text">
  // input box and press Enter key
  //
  // check if the item is found by looking at the "id=output" element
  // also confirm the displayed price is correct
  // https://on.cypress.io/contains
})

it('adds a new item and then finds it (retries the search)', function () {
  // Let's not wait longer than necessary.
  // The item might take UP to 1 minute to be added
  // and it might take UP to 1 minute to scrape it into the search index.
  // Or it might take 1 second to do everything.
  // Let's avoid the wait by entering the item into the search page
  // and seeing if the item is found. If not - we can enter it again
  // after a short delay.
  //
  // let's find the item using the search page "/find-item.html"
  // https://on.cypress.io/visit
  //
  // let's retry entering the item's name using the "recurse" function
  // https://github.com/bahmutov/cypress-recurse
  // - clear the "#item-text" input field and blur it
  // https://on.cypress.io/clear
  // https://on.cypress.io/blur
  // - type the item's name plus Enter key
  // - return a Cypress chain that checks the "#output" element
  // if it contains the item's name
  // https://on.cypress.io/contains
  // Tip: to avoid cy.contains failing, attach a no-op
  // ".should(callback)" function
  // See https://glebbahmutov.com/cypress-examples/recipes/conditional-testing.html
  // Stop iterating if the item is found
  // If the item is not found, wait 10 seconds and try again
  // Repeat UP to 120 seconds
  //
  // check the item is found for sure
  // https://on.cypress.io/contains
})

it('adds a new item and then finds it (retries the API calls)', function () {
  // call API until the item is returned from our database
  cy.log('**call the API until the item is returned**')
  // use the "recurse" function from the "cypress-recurse" NPM package
  // to query the URL "/items/item name"
  // https://on.cypress.io/request
  // if the request is successful, stop
  // otherwise, wait 10 seconds and try again
  // Keep querying up to 1 minute
  //
  // call the search API until it finds the item
  cy.log('**call the search API**')
  // use the "recurse" function from the "cypress-recurse" NPM package
  // to query the URL "/find-item/item name"
  // https://on.cypress.io/request
  // if the request is successful, stop
  // otherwise, wait 10 seconds and try again
  // Keep querying up to 1 minute
  //
  cy.log('**use the UI to find the scraped item**')
  // now visit the /find-item.html page
  //
  // enter the item's name and press Enter
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  //
  // the item _must_ be found now
  // check the item is found for sure
  // https://on.cypress.io/contains
})
