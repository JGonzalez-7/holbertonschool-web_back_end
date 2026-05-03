# ES6 Classes

This directory contains ES6 JavaScript exercises focused on classes, inheritance, getters, setters, validation, static methods, and symbol-based behavior.

## Files

| File | Description |
|------|-------------|
| `0-classroom.js` | Defines a `ClassRoom` class that stores the maximum student size |
| `1-make_classrooms.js` | Creates and returns a list of `ClassRoom` instances |
| `2-hbtn_course.js` | Defines a `HolbertonCourse` class with typed setters for name, length, and students |
| `3-currency.js` | Defines a `Currency` class with getters, setters, and formatted display output |
| `4-pricing.js` | Defines a `Pricing` class that uses `Currency`, validates values, displays prices, and converts amounts |
| `5-building.js` | Defines a `Building` base class that requires subclasses to implement an evacuation warning method |
| `6-sky_high.js` | Defines a `SkyHighBuilding` subclass with floors and an evacuation warning message |
| `7-airport.js` | Defines an `Airport` class with a custom `Symbol.toStringTag` value |
| `8-hbtn_class.js` | Defines a `HolbertonClass` class with custom primitive conversion behavior |
| `9-hoisting.js` | Defines class and student models, then exports a list of Holberton students |
| `10-car.js` | Defines a `Car` class with cloning behavior through `Symbol.species` |
| `babel.config.js` | Configures Babel to target the current Node.js version |
| `.eslintrc.js` | Configures ESLint rules for the ES6 class exercises |
| `package.json` | Defines project scripts and JavaScript development dependencies |

## Requirements

- Node.js
- Babel with `@babel/preset-env` for running ES6 module syntax
- Jest and ESLint for the Holberton-provided test and lint workflows

## Usage

Run task files through the Holberton-provided test setup or import the exported classes and functions from another JavaScript file.

Example:

```js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const price = new Pricing(100, new Currency('USD', 'Dollar'));

console.log(price.displayFullPrice());
```

Useful project scripts:

```bash
npm run lint
npm run test
npm run full-test
```
