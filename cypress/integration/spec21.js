/// <reference types="cypress" />

it('modifies the JSON responses', () => {
  // intercept the JSON request to "/fruit"
  // take the fruit sent by the server and change it,
  // for example by concatenating it with itself
  // store the fruit in a variable "fruit2x"
  // visit the page and confirm the network call was made
  // confirm the page contains the "fruit2x" text
  // tip: you need to use "cy.then" to access the variable
  // after you have waited for the network call to complete

  let fruit2x

  cy.intercept(
    {
      method: 'GET',
      url: '/fruit'
    },
    (req) =>
      req.reply((res) => {
        fruit2x = res.body.fruit + res.body.fruit
        res.body.fruit = fruit2x
      })
  ).as('fruit')

  cy.visit('/')
  cy.wait('@fruit')
  cy.then(() => {
    cy.contains(fruit2x)
  })
})
