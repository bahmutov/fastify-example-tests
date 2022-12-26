/// <reference types="cypress" />

// import cypress-recurse plugin

it('logs ping requests to the terminal', () => {
  // request the page "/unreliable" and allow it to fail
  // https://on.cypress.io/request
  // retry the call if is not ok using cypress-recurse
  // every second for up to 30 seconds
  //
  // log a message into the Command Log
  // flagging if the call was successful or not,
  // and the current attempt number
  //
  // Bonus: print the same message to the terminal
  // using cy.task "print" defines in the plugins file
  // https://on.cypress.io/task
})
