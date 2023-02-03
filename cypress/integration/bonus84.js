/// <reference types="cypress" />

it('downloads a base64 embedded image', () => {
  // visit the "head.html" page
  // https://on.cypress.io/visit
  //
  // get the image element (the only IMG tag on the page)
  // https://on.cypress.io/get
  // get its "src" attribute value
  // https://on.cypress.io/invoke
  //
  // confirm the image source string
  // is really the base64 encoded PNG image
  // Tip: you can use manual errors to avoid dumping
  // the very long string into the command log
  // if (!predicate) { throw new Error(...) }
  //
  // remove the base64 data source prefix from the source value
  // and save it as file "my-bunny.png"
  // https://on.cypress.io/writefile
  // the saved file should be a PNG image
})
