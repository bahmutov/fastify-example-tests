/// <reference types="cypress" />

it('sets the intercept alias from the callback', () => {
  // intercept the GET /fruit request using cy.intercept
  // and give the callback function to handle the request
  // inspect the request object and assign an alias to it
  // from the callback function: req.alias = "fruit"
  // stub the response using req.reply({ fruit: "kiwi" })
  // visit the page and confirm the intercept was used
})
