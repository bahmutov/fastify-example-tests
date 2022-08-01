/// <reference types="cypress" />

it('waits for each response one by one', () => {
  // visit the page "burst.html"
  // https://on.cypress.io/visit
  //
  // keep track of the the total number of calls
  // by "spying" on the network call GET /random-digit
  // by passing a function that increments a local variable
  // https://on.cypress.io/intercept
  // and give it an alias "api"
  let calls = 0
  //
  // click on the button with ID "burst"
  // https://on.cypress.io/click
  //
  // we know the calls will be made within 3 seconds
  // thus we "simply" wait for 3 seconds using
  // https://on.cypress.io/wait
  // after the wait is finished, then we want
  // to call the "cy.wait(api alias)" the number of times
  // our spy intercepted was called
  // https://on.cypress.io/then
  //
  // get the subject yielded by the last cy.wait(api alias)
  // and grab its response "n" value
  // Cypress trick - the current subject is the result of the last cy.wait!
  // https://on.cypress.io/its
  //
  // confirm the page contains the expected text output
  // something like "last call index said N"
  // https://on.cypress.io/contains
})

it('waits for each response one by one using a spy', () => {
  // visit the page "burst.html"
  // https://on.cypress.io/visit
  //
  // keep track of the the total number of calls
  // by "spying" on the network call GET /random-digit
  // by passing a cy.stub function
  // https://on.cypress.io/intercept
  // https://on.cypress.io/stub
  // give the network intercept an alias "api"
  // give the cy.stub an alias "calls"
  // Note: even if we passed a cy.stub instance to cy.intercept
  // it does not STUB the network call, it still goes to the server
  //
  // click on the button with ID "burst"
  // https://on.cypress.io/click
  //
  // we know the calls will be made within 3 seconds
  // thus we "simply" wait for 3 seconds using
  // https://on.cypress.io/wait
  // after the wait is finished, then we want
  // to call the "cy.wait(api alias)" the number of times
  // our spy intercepted was called
  // https://on.cypress.io/then
  //
  // get the cy.stub using its alias
  // and its property "callCount"
  // and write a for loop waiting that number of calls
  // to the network call "@api"
  // https://on.cypress.io/its
  //
  // get the subject yielded by the last cy.wait(api alias)
  // and grab its response "n" value
  // Cypress trick - the current subject is the result of the last cy.wait!
  // https://on.cypress.io/its
  //
  // need to grab the number of calls again
  // using the cy.stub object aliased under "calls"
  // Get the "callCount" and use it inside cy.then callback
  //
  // confirm the page contains the expected text output
  // something like "last call index said N"
  // https://on.cypress.io/contains
})

it('inspects the last intercepted API call', () => {
  // visit the page "burst.html"
  // https://on.cypress.io/visit
  //
  // spy on the "GET /random-digit" calls
  // and give it an alias "api"
  // https://on.cypress.io/intercept
  //
  // click on the button with ID "burst"
  // https://on.cypress.io/click
  //
  // we know the calls will be made within 3 seconds
  // thus we "simply" wait for 3 seconds using
  // https://on.cypress.io/wait
  // Tip: we could use https://github.com/bahmutov/cypress-network-idle
  //
  // get all intercepts at once using the "@api.all" syntax
  // and from that list (which should be final by now)
  // get the length and the last response value "n"
  // confirm the page contains the expected text output
  // something like "last call index said N"
  // https://on.cypress.io/contains
})
