/// <reference types="cypress" />

it('spies on multipart/form-data submission', () => {
  // spy on the form submission
  // give the spy an alias "submit-form"
  //
  // visit the "form.html" page
  //
  // enter "Boston" into the city input field
  // enter "1" into the value input field
  //
  // click on the submit button
  //
  // the browser should navigate to /submit-form page
  //
  // the page should show "Thank you for the your submission"
  // and the submitted values
  //
  // wait for the network intercept
  // get its request property
  // and transform it into an object of values
  // using parseMultiPartRequest callback
  // Verify the submitted values
})

/**
 * Utility method to parse the network request
 * into an object. Multipart form sections are broken
 * by the boundary and make individual "key: value" pairs
 * in the returned object.
 * @example
 *  cy.wait('@form').its('request').then(parseMultiPartRequest)
 *
 * Tip: look at the form submission in the Network tab
 * to see how the original raw text request looks like.
 */
const parseMultiPartRequest = (request) => {
  const { headers, body } = request
  // use "throw new Error" and not Chai assertions
  // to avoid lots of noise in the Cypress Command Log
  if (typeof body !== 'string') {
    throw new Error('Expected the form body to be a string')
  }
  const contentType = headers['content-type']

  // the browser sets the separator string when sending the form
  // something like
  // "multipart/form-data; boundary=----WebKitFormBoundaryiJZt6b3aUg8Jybg2"
  // we want to extract it and pass to the utility function
  // to convert the multipart text into an object of values
  if (
    !contentType.match(/^multipart\/form-data; boundary=/)
  ) {
    throw new Error(
      `Invalid multipart boundary: ${contentType}`,
    )
  }
  const boundary = contentType.split('boundary=')[1]
  const values = parseMultipartForm({ boundary, body })
  return values
}

/*
  Utility: parses (very simply) multipart body into string values.
  the decoded body string will be something like
  ------WebKitFormBoundaryYxsB3tlu9eJsoCeY
  Content-Disposition: form-data; name="city"
  Boston
  ------WebKitFormBoundaryYxsB3tlu9eJsoCeY
  Content-Disposition: form-data; name="value"
  28
  ------WebKitFormBoundaryYxsB3tlu9eJsoCeY--

  there are NPM packages for parsing such text into an object:
  - https://www.npmjs.com/package/parse-multipart
  - https://www.npmjs.com/package/multiparty
  - https://www.npmjs.com/package/busboy
  - https://www.npmjs.com/package/formidable
*/
const parseMultipartForm = ({ boundary, body }) => {
  const parts = body
    .split(`--${boundary}`)
    .map((s) => s.trim())
    .filter((s) =>
      s.startsWith('Content-Disposition: form-data;'),
    )

  const result = {}

  parts.forEach((part) => {
    const lines = part.split(/\r?\n/g)

    console.log('lines')
    console.log(lines)
    const key = lines[0].match(/name="(.+)"/)[1]

    result[key] = lines[2].trim()
  })

  return result
}
