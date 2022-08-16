/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'
// https://github.com/EvanHahn/HumanizeDuration.js
import humanizeDuration from 'humanize-duration'

// this is a continuation of bonus33 lesson
// In this lesson we will call the task "print" registered
// in the plugins file
// https://on.cypress.io/task

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
  // Note: use the "post" function to receive "elapsed" and "success"
  // properties and call cy.task with well-formatted message
  // to be printed into the terminal. You can use "humanize-duration"
  // to format the elapsed duration when forming the string
  // Also set the "postLastValue: true" to get a "post" call
  // on the successful network call response
  recurse(
    () =>
      cy.request({
        url: '/items/' + encodeURIComponent(this.name),
        failOnStatusCode: false,
      }),
    (response) => response.isOkStatusCode,
    {
      log: '✅ item is in our database',
      delay: 10_000,
      timeout: 60_000,
    },
  )
  // call the search API until it finds the item
  cy.log('**call the search API**')
  // use the "recurse" function from the "cypress-recurse" NPM package
  // to query the URL "/find-item/item name"
  // https://on.cypress.io/request
  // if the request is successful, stop
  // otherwise, wait 10 seconds and try again
  // Keep querying up to 1 minute
  //
  // Note: use the "post" function to receive "elapsed" and "success"
  // properties and call cy.task with well-formatted message
  // to be printed into the terminal. You can use "humanize-duration"
  // to format the elapsed duration when forming the string
  // Also set the "postLastValue: true" to get a "post" call
  // on the successful network call response
  recurse(
    () =>
      cy.request({
        url: '/find-item/' + encodeURIComponent(this.name),
        failOnStatusCode: false,
      }),
    (response) => response.isOkStatusCode,
    {
      log: '✅ item has been scraped',
      delay: 10_000,
      timeout: 60_000,
    },
  )

  cy.log('**use the UI to find the scraped item**')
  // now visit the /find-item.html page
  cy.visit('/find-item.html')
  // enter the item's name and press Enter
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  cy.get('#item-text').type(this.name + '{enter}')
  // the item _must_ be found now
  // check the item is found for sure
  // https://on.cypress.io/contains
  cy.contains('#output', this.name)
    .contains('.price', this.price)
    .should('be.visible')
})
