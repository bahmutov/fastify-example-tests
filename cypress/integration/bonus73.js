/// <reference types="cypress" />
// @ts-check

// let's keep all defined intercepts for the test in this object
// it will have (key, value) like (intercept parameters, count)
const intercepts = new Map()
// before each test we will clear our counters
beforeEach(() => {
  intercepts.clear()
})

// overwrite the cy.intercept command
// assume it will be called with "method /url" parameters
// insert a new counter 0 into the "intercepts" object
// spy on the intercept call and every time it is called,
// increment the intercept's counter by 1
// see "Overwrite Existing Commands"
// https://on.cypress.io/custom-commands

// modify this test to spy on several network calls
// and add some intercepts for non-existent calls
it('uses every defined intercept', () => {
  cy.visit('/calculator.html')
  cy.get('#num1').type('10')
  cy.get('#num2').type('5')
  cy.get('#add').click()
  cy.contains('#answer', '15')
})

// fill this hook to check the "intercepts" object
// every intercept should be called at least once
// throw an error if you find any intercepts that were unused
afterEach(() => {})
