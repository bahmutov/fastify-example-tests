/// <reference types="cypress" />

it('fetches 10 fruits from the server', () => {
  const list = []
  // spy on the GET /fruit network call
  // and store each received fruit in a list
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', (req) =>
    req.continue((res) => list.push(res.body.fruit))
  ).as('fruit')

  // freeze the clock before visiting the page
  // https://on.cypress.io/clock
  cy.clock()
  cy.visit('/')
  // confirm there is one fruit in the list after loading the page
  cy.wait('@fruit')
  cy.wrap(list).should('have.length', 1)

  // advance the clock by 9 minutes
  // https://on.cypress.io/tick

  Cypress._.times(9, () => {
    cy.tick(60_000)
    cy.wait('@fruit')
  })
  // and confirm the list of fruits has 10 items
  // and it includes "Oranges"
  // https://on.cypress.io/wrap

  cy.wrap(list).should('have.length', 10).and('contain', 'Oranges')
})
