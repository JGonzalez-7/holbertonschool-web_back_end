# ES6 Basics

This directory contains introductory ES6 JavaScript exercises. The files focus on modern syntax for variable declarations, functions, parameters, objects, strings, loops, and object composition.

## Files

| File | Description |
|------|-------------|
| `0-constants.js` | Uses `const` and `let` for block-safe variable declarations |
| `1-block-scoped.js` | Demonstrates block scope with `const` inside conditional blocks |
| `2-arrow.js` | Uses an arrow function to preserve lexical `this` inside an object method |
| `3-default-parameter.js` | Defines function parameters with default values |
| `4-rest-parameter.js` | Counts arguments with the rest parameter syntax |
| `5-spread-operator.js` | Merges arrays and strings with the spread operator |
| `6-string-interpolation.js` | Builds a string with template literals |
| `7-getBudgetObject.js` | Creates an object with ES6 property shorthand |
| `8-getBudgetCurrentYear.js` | Creates dynamic object keys with computed property names |
| `9-getFullBudget.js` | Combines object spread syntax with object methods |
| `10-loops.js` | Iterates through arrays with `for...of` |
| `11-createEmployeesObject.js` | Creates an object using a computed department name key |
| `12-createReportObject.js` | Builds a report object with copied employee data and a department counter method |
| `babel.config.js` | Configures Babel to target the current Node.js version |

## Requirements

- Node.js
- Babel with `@babel/preset-env` for transpiling ES6 module syntax when required by the project runner

## Usage

Run task files through the Holberton-provided test setup or import the exported functions from another JavaScript file.

Example:

```js
import createReportObject from './12-createReportObject.js';

const report = createReportObject({
  engineering: ['Bob', 'Jane'],
  marketing: ['Sylvie'],
});

console.log(report.getNumberOfDepartments(report.allEmployees));
```
