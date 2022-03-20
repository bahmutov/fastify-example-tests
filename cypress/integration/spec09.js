/// <reference types="cypress" />

it('returns different fruits', () => {
  // stub the /fruit endpoint to return "apple" on the first visit
  // stub the /fruit endpoint to return "grapes" on the second visit
  // https://on.cypress.io/intercept with "times: *" option

  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1
    },
    { fruit: 'grapes' }
  )
  cy.intercept(
    {
      method: 'GET',
      url: '/fruit',
      times: 1
    },
    { fruit: 'apple' }
  )

  // visit the site
  // confirm it shows "apple"
  cy.visit('/')
  cy.contains('apple')

  // reload the site
  // confirm it shows "grapes"
  cy.reload()
  cy.contains('grapes')
})
