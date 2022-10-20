/// <reference types="cypress" />

// this test is similar to bonus41, but instead of spying
// on the call made by the browser, we make the same
// form submission ourselves using the cy.request command
it('makes a multipart/form-data cy.request', () => {
  // form values we want to submit
  // without going through the form on the page
  const fields = {
    city: 'New York City',
    value: 101,
  }

  // encode the input fields into the body to be sent
  // need both the body and the content type header
  // using the helper function "encodeMultiPart"
  //
  // make a POST request using https://on.cypress.io/request
  // to the endpoint "/submit-form"
  // with the right content type header
  // and the multipart body text
  //
  // from the response, grab the HTML body string
  // https://on.cypress.io/its
  // then get the application's document object
  // https://on.cypress.io/document
  // because it is empty, we can write the HTML we got
  // into the document using document.write method
  // https://on.cypress.io/invoke
  //
  // the page should show "Thank you for the your submission"
  // and the submitted values, which we need to confirm
})

/**
 * Forms the text body to be submitted as a "multipart/form-data" request.
 * For a good explanation of the boundary
 * @see https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
 */
function encodeMultiPart(fields) {
  const boundary = `Boundary${Cypress._.random(1e8)}`
  const contentType = `multipart/form-data; boundary=${boundary}`

  let body = ''
  Object.entries(fields).forEach(([name, value]) => {
    body += `--${boundary}\r\n`
    body += `content-disposition: form-data; name="${name}"\r\n`
    body += '\r\n'
    body += value + '\r\n'
  })
  body += `--${boundary}--`

  return { body, contentType }
}
