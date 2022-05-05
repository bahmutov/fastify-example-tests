# fastify-example-tests

> Cypress tests to fill to check the [fastify-example](https://github.com/bahmutov/fastify-example) application

These tests are for the online course [Cypress Network Testing Exercises](https://cypress.tips/courses)

The public repository has test placeholders to be filled by the actual Cypress commands.

## Requirements

- Node.js >= 14 check with `node -v`
- clone the example application repo [fastify-example](https://github.com/bahmutov/fastify-example), install its dependencies and start the application. It should be running at `localhost:4200`

## Install

- `npm install`

Should install all dependencies, including Cypress

## Start writing tests

- Enroll in the course
- Watch the introduction lesson
- Open the first test [spec01.js](./cypress/integration/spec01.js) and try implementing it following the comments
- Watch the lesson that covers the `spec01.js` to see if your solution matches mine

## Tests

There are 60+ tests, to see them all use [find-cypress-specs](https://github.com/bahmutov/find-cypress-specs)

```
$ npm run print
...

cypress/integration/spec30.js (1 test)
└─ handles test flake using the test retries

found 45 specs (63 tests, 8 pending)
```

## Feedback

These tests were set up by Gleb Bahmutov. If you have any feedback about these tests and the course, drop me an email
