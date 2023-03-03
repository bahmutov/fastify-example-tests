const axios = require('axios')

module.exports = async (on, config) => {
  // you can fetch the list of all possible fruits
  // displayed on the page "/fruits.html" by making API call
  // to the /all-fruits endpoint. tip: use axios.get
  // the returned response has the "data" property
  // which is a list of objects. From each, grab the fruit name
  // and form an array of names
  // Tip: config has your resolved settings like baseUrl
  //
  // pass the fetched fruits to the specs via Cypress.env object
  // same as if we started Cypress with "cypress run --env fruits=[Apples,...]"
  // In the spec use Cypress.env('fruits') to retrieve them

  // IMPORTANT: return the config object
  return config
}
