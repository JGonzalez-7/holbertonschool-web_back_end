# ES6 Promise

This directory contains JavaScript exercises focused on ES6 promises, promise chaining, error handling, concurrent asynchronous work, and `try`/`catch`/`finally` control flow.

## Files

| File | Description |
|------|-------------|
| `0-promise.js` | Returns a new Promise object |
| `1-promise.js` | Resolves or rejects a promise based on an API success flag |
| `2-then.js` | Handles a promise with `then`, `catch`, and `finally` |
| `3-all.js` | Uses `Promise.all` to run profile signup tasks together |
| `4-user-promise.js` | Returns a resolved promise containing user signup data |
| `5-photo-reject.js` | Returns a rejected promise for a failed photo upload |
| `6-final-user.js` | Uses `Promise.allSettled` to report signup and upload results |
| `7-load_balancer.js` | Uses `Promise.race` to return the first resolved download |
| `8-try.js` | Divides two numbers and throws an error for division by zero |
| `9-try.js` | Wraps a function call with `try`, `catch`, and `finally` guardrail logic |
| `utils.js` | Provides mock `uploadPhoto` and `createUser` promise helpers |
| `babel.config.js` | Configures Babel to target the current Node.js version |
| `.eslintrc.js` | Configures ESLint rules for the ES6 promise exercises |
| `package.json` | Defines project scripts and JavaScript development dependencies |

## Requirements

- Node.js
- npm
- Babel with `@babel/preset-env` for running ES6 module syntax
- Jest and ESLint for the Holberton-provided test and lint workflows

Install dependencies with:

```bash
npm install
```

## Usage

Run task files through the Holberton-provided test setup or import the exported functions from another JavaScript file.

Example:

```js
import handleProfileSignup from './6-final-user.js';

handleProfileSignup('Guillaume', 'Salva', 'profile.jpg').then((result) => {
  console.log(result);
});
```

Useful project scripts:

```bash
npm run lint
npm run test
npm run full-test
```

## Author

Holberton School project.
