/// <reference types="cypress" />

it('alerts the user twice', () => {
  // visit the page "/jquery-example"
  // https://on.cypress.io/visit
  // before the application loads, stub the "alert"
  // and give it an alias "alert"
  // https://on.cypress.io/stub
  //
  // find the button with text "Warn" and click on it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // get the alert stub and confirm it was called twice
  // https://on.cypress.io/get
  // https://on.cypress.io/stubs-spies-and-clocks
})

it('loads the jquery plugin and alerts the user', () => {
  // spy on the network calls to load "jquery.warning.js" resource
  // and give the intercept alias "plugin"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the page "/jquery-example"
  // https://on.cypress.io/visit
  // before the application loads, stub the "alert"
  // and give it an alias "alert"
  // https://on.cypress.io/stub
  // https://on.cypress.io/as
  //
  // wait for the plugin network call to complete
  // https://on.cypress.io/wait
  //
  // find the button with text "Warn" and click on it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // get the alert stub and confirm it was called twice
  // https://on.cypress.io/get
  // https://on.cypress.io/stubs-spies-and-clocks
})

it('delays the jquery plugin and fails', () => {
  // spy on the network calls to load "jquery.warning.js" resource
  // and delay it by 1 second
  // and give the intercept alias "plugin"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  // Tip: see "Spec 10" on how to delay a network call
  //
  // visit the page "/jquery-example"
  // https://on.cypress.io/visit
  // before the application loads, stub the "alert"
  // and give it an alias "alert"
  // https://on.cypress.io/stub
  // https://on.cypress.io/as
  //
  // because the application will throw an error
  // we want to confirm it is the expected error
  // with the message that includes text
  // '$(...).warning is not a function'
  // Tip: use "uncaught:exception" callback
  // to allow only this error
  // https://on.cypress.io/catalog-of-events
  //
  // find the button with text "Warn" and click on it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // get the alert stub and confirm it was never called
  // https://on.cypress.io/get
  // https://on.cypress.io/stubs-spies-and-clocks
  //
  // wait for the plugin network call to complete
  // to finish the test completely
  // https://on.cypress.io/wait
})

it('waits for the plugin to add itself to jQuery', () => {
  // spy on the network calls to load "jquery.warning.js" resource
  // and delay it by 1 second
  // and give the intercept alias "plugin"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  // Tip: see "Spec 10" on how to delay a network call
  //
  // visit the page "/jquery-example"
  // https://on.cypress.io/visit
  // before the application loads, stub the "alert"
  // and give it an alias "alert"
  // https://on.cypress.io/stub
  // https://on.cypress.io/as
  //
  // cy.visit yields the "window" object
  // use cy.its to wait until the window object
  // gets its "jQuery.fn.warning" nested property
  // https://on.cypress.io/its
  //
  // find the button with text "Warn" and click on it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // get the alert stub and confirm it was called twice
  // https://on.cypress.io/get
  // https://on.cypress.io/stubs-spies-and-clocks
})
