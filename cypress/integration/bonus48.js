/// <reference types="cypress" />

it('stubs the octet stream response using a PNG fixture', () => {
  // stub the "GET /tiger-octet" network call and
  // return the "bunny.png" fixture
  // give the intercept the alias "image"
  //
  // visit the "/tiger-fetch.html" page
  // watch for the "@image" network call
  //
  // confirm the bunny image was loaded by checking
  // the resolution of the image on the page
  // it should be 1280x937 pixels
  // Tip: use the props "naturalWidth" and "naturalHeight"
})

it('stubs the octet stream response using an array buffer', () => {
  // load the binary fixture image "bunny.png"
  // and encode the binary string as array buffer
  // https://on.cypress.io/fixture
  // https://on.cypress.io/blob
  //
  // stub the "GET /tiger-octet" network call and
  // respond with the array buffer object
  //
  // give the intercept the alias "image"
  //
  // visit the "/tiger-fetch.html" page
  // watch for the "@image" network call
  //
  // confirm the bunny image was loaded by checking
  // the resolution of the image on the page
})

it('spies on the octet response', () => {
  // spy on the "GET /tiger-octet" call
  // and give it an alias "image"
  //
  // visit the "/tiger-fetch.html" page
  // watch for the "@image" network call
  //
  // confirm the response headers
  // includes the property "content-type"
  // with expected value
})
