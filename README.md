# Holberton School Web Back End

This repository contains back-end practice projects for JavaScript, Python, pagination, and NoSQL concepts. Each directory focuses on a separate topic and includes small, task-based scripts.

## Projects

| Directory | Description |
|-----------|-------------|
| `ES6_basic` | JavaScript ES6 exercises covering `const`, `let`, arrow functions, default parameters, rest and spread syntax, template literals, computed properties, object methods, and `for...of` loops |
| `ES6_classes` | JavaScript ES6 class exercises covering constructors, getters, setters, validation, inheritance, static methods, and symbols |
| `ES6_promise` | JavaScript ES6 promise exercises covering promise creation, resolution, rejection, chaining, `Promise.all`, `Promise.allSettled`, `Promise.race`, and guardrail error handling |
| `ES6_data_manipulation` | JavaScript ES6 data manipulation exercises covering arrays, iterator methods, typed arrays, sets, maps, and collection updates |
| `python_variable_annotations` | Python type annotation exercises covering typed functions, variables, lists, tuples, unions, callables, iterables, and sequences |
| `python_async_function` | Async Python exercises using `async`, `await`, `asyncio`, concurrent coroutines, runtime measurement, and tasks |
| `python_async_comprehension` | Async generator and async comprehension exercises using `asyncio` |
| `pagination` | Pagination exercises covering index ranges, simple pagination, hypermedia pagination, and deletion-resilient pagination |
| `NoSQL` | MongoDB shell and PyMongo exercises for creating, reading, updating, deleting, filtering, and reporting on documents |

## Repository Structure

```text
.
├── ES6_basic
├── ES6_classes
├── ES6_data_manipulation
├── ES6_promise
├── NoSQL
├── pagination
├── python_async_comprehension
├── python_async_function
└── python_variable_annotations
```

## Requirements

- Python 3.9+
- Node.js for the JavaScript ES6 projects
- Babel with `@babel/preset-env` for running ES6 module syntax in the JavaScript projects when required by the project runner
- Jest and ESLint for JavaScript test and lint workflows
- MongoDB for the `NoSQL` project
- `pymongo` for the Python MongoDB scripts in `NoSQL`
- Standard Python library modules used throughout the Python projects, including `asyncio`, `random`, `time`, `math`, `csv`, and `typing`

## Usage

Navigate into a project directory before running its files. Many Python files use Holberton task naming with hyphens, so examples often load modules with `__import__` or `importlib`.

```bash
cd python_async_function
python3 0-basic_async_syntax.py
```

For ES6 task files, use the Holberton-provided test setup or import the exported functions and classes from another JavaScript file:

```bash
cd ES6_basic
```

```bash
cd ES6_classes
npm run full-test
```

```bash
cd ES6_promise
npm run full-test
```

```bash
cd ES6_data_manipulation
npm run full-test
```

For MongoDB shell tasks:

```bash
cd NoSQL
mongosh < 0-list_databases
```

## Author

Holberton School student work.
